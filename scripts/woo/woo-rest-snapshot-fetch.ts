import {
  WordPressNamespaceDocument,
  WordPressRouteDocument,
  WooRestSnapshot,
} from "./woo-rest-snapshot";

export const DEFAULT_NAMESPACE = "wc/v3";
export const UNKNOWN_VERSION = "unknown";
const SUPPORTED_OPTIONS_STRATEGIES = ["missing", "all", "none"] as const;
const SUPPORTED_METHODS = ["GET", "POST", "PUT", "DELETE"] as const;

export type WooRestOptionsStrategy =
  (typeof SUPPORTED_OPTIONS_STRATEGIES)[number];

export type WooCommerceVersionSource = "cli" | "readme.txt" | "unknown";

export interface WordPressRootIndexDocument extends Record<string, unknown> {
  generator?: string;
  namespaces?: string[];
}

export interface ResolvedWooCommerceVersion {
  source: WooCommerceVersionSource;
  version: string;
}

export interface FetchOptionsDocumentsResult {
  documents: Record<string, WordPressRouteDocument | undefined>;
  warnings: string[];
  failures: string[];
}

/**
 * Materialization policy for parameterized route -> concrete OPTIONS URL.
 *
 * Woo REST route keys returned by the namespace index are regex templates, e.g.
 *   /wc/v3/products/(?P<product_id>[\d]+)/variations
 * WordPress cannot resolve an `OPTIONS` request against the regex string; it
 * matches a concrete URL through its REST router. To enrich parameterized
 * routes we must substitute each `(?P<name>pattern)` with a concrete value.
 *
 * Supported patterns (explicit allow-list, deterministic placeholders only):
 *   - `[\d]+` and `\d+`  -> `1`
 *   - `[\w-]+`          -> `x`
 *   - `[\w-]{3}`        -> `abc` (currency-style fixed length)
 *   - `\w[\w\s\-]*`     -> `x`
 *
 * Any other regex pattern is rejected; the caller must treat that as a
 * materialization failure and fail the snapshot pipeline rather than silently
 * enrich the route from a different URL.
 */
export const materializeRouteForOptions = (route: string): string =>
  route.replace(
    /\(\?P<([^>]+)>([^)]+)\)/g,
    (_match: string, name: string, pattern: string): string => {
      if (pattern === "[\\d]+" || pattern === "\\d+") {
        return "1";
      }

      if (pattern === "[\\w-]+") {
        return "x";
      }

      if (pattern === "[\\w-]{3}") {
        return "abc";
      }

      if (pattern === "\\w[\\w\\s\\-]*") {
        return "x";
      }

      throw new Error(
        `Cannot materialize route ${route}: unsupported path parameter pattern ${JSON.stringify(
          pattern,
        )} for ${name}`,
      );
    },
  );

export interface ResolveSnapshotSourceInput {
  baseUrl: string;
  namespace: string;
  rootIndex: WordPressRootIndexDocument;
  wooVersion?: string;
}

export const isWooRestOptionsStrategy = (
  value: string,
): value is WooRestOptionsStrategy =>
  SUPPORTED_OPTIONS_STRATEGIES.includes(value as WooRestOptionsStrategy);

export const normalizeBaseUrl = (value: string): string =>
  value.replace(/\/+$/, "");

export const fetchWordPressRestIndex = async (
  baseUrl: string,
): Promise<WordPressRootIndexDocument> =>
  fetchJsonFromCandidates<WordPressRootIndexDocument>(baseUrl, [
    buildWpJsonCandidatePath("/"),
    buildRestRouteCandidatePath("/"),
  ]);

export const fetchWordPressNamespaceDocument = async (
  baseUrl: string,
  namespace: string,
): Promise<WordPressNamespaceDocument> =>
  fetchJsonFromCandidates<WordPressNamespaceDocument>(baseUrl, [
    buildWpJsonCandidatePath(`/${namespace}`),
    buildRestRouteCandidatePath(`/${namespace}`),
  ]);

export const validateNamespaceAvailability = (
  rootIndex: WordPressRootIndexDocument,
  namespaceDocument: WordPressNamespaceDocument,
  namespace: string,
): void => {
  const namespaces = Array.isArray(rootIndex.namespaces)
    ? rootIndex.namespaces
    : [];

  if (!namespaces.includes(namespace)) {
    throw new Error(`Namespace ${namespace} is not present in the REST index`);
  }

  if (
    namespaceDocument.namespace !== undefined &&
    namespaceDocument.namespace !== namespace
  ) {
    throw new Error(
      `Unexpected namespace document: expected ${namespace}, received ${namespaceDocument.namespace}`,
    );
  }
};

export const collectRoutesRequiringOptions = (
  namespaceDocument: WordPressNamespaceDocument,
  options: {
    optionsRoutes: string[];
    optionsStrategy: WooRestOptionsStrategy;
  },
): string[] => {
  const explicitRoutes = new Set(options.optionsRoutes);

  if (options.optionsStrategy === "all") {
    for (const route of Object.keys(namespaceDocument.routes ?? {})) {
      explicitRoutes.add(route);
    }
  }

  if (options.optionsStrategy === "missing") {
    for (const [route, routeDocument] of Object.entries(
      namespaceDocument.routes ?? {},
    )) {
      if (routeNeedsOptions(routeDocument)) {
        explicitRoutes.add(route);
      }
    }
  }

  return [...explicitRoutes].sort((left, right) => left.localeCompare(right));
};

export const routeNeedsOptions = (
  routeDocument: WordPressRouteDocument,
): boolean => {
  if (!routeDocument.schema) {
    return true;
  }

  return (routeDocument.endpoints ?? []).some((endpoint) => {
    const rawMethods = Array.isArray(endpoint.methods)
      ? endpoint.methods
      : Object.entries(endpoint.methods ?? {})
          .filter(([, enabled]) => enabled)
          .map(([method]) => method);
    const hasSupportedMethod = rawMethods.some((method) =>
      SUPPORTED_METHODS.includes(method as (typeof SUPPORTED_METHODS)[number]),
    );

    return hasSupportedMethod && Object.keys(endpoint.args ?? {}).length === 0;
  });
};

export const fetchOptionsDocuments = async (
  baseUrl: string,
  namespaceDocument: WordPressNamespaceDocument,
  options: {
    namespace: string;
    optionsRoutes: string[];
    optionsStrategy: WooRestOptionsStrategy;
  },
): Promise<FetchOptionsDocumentsResult> => {
  const routes = collectRoutesRequiringOptions(namespaceDocument, options);
  const documents: Record<string, WordPressRouteDocument | undefined> = {};
  const warnings: string[] = [];
  const failures: string[] = [];

  for (const route of routes) {
    const routeDocument = namespaceDocument.routes?.[route];
    let isRequired = false;
    if (routeDocument) {
      isRequired =
        routeNeedsOptions(routeDocument) &&
        !isWooMarketplaceConnectRoute(route, options.namespace);
    }

    const recordDiagnostic = (message: string): void => {
      const formatted = formatOptionsFetchWarning(route, message);

      if (isRequired) {
        failures.push(formatted);
      } else {
        warnings.push(formatted);
      }
    };

    let concreteRoute: string;
    try {
      concreteRoute = materializeRouteForOptions(
        qualifyRoute(route, options.namespace),
      );
    } catch (error) {
      recordDiagnostic(
        error instanceof Error
          ? error.message
          : "Unknown route materialization error",
      );
      continue;
    }

    let document: WordPressRouteDocument;
    try {
      document = await fetchJsonFromCandidates<WordPressRouteDocument>(
        baseUrl,
        [
          buildWpJsonCandidatePath(concreteRoute),
          buildRestRouteCandidatePath(concreteRoute),
        ],
        {
          method: "OPTIONS",
        },
      );
    } catch (error) {
      recordDiagnostic(
        error instanceof Error ? error.message : "Unknown OPTIONS error",
      );
      continue;
    }

    if (isRequired && !isUsefulEnrichment(document)) {
      recordDiagnostic(
        "OPTIONS response did not include schema or endpoint args",
      );
      continue;
    }

    documents[route] = document;
  }

  return {
    documents,
    warnings,
    failures,
  };
};

const isUsefulEnrichment = (
  document: WordPressRouteDocument | undefined,
): boolean => {
  if (!document || typeof document !== "object") {
    return false;
  }

  if (document.schema && typeof document.schema === "object") {
    return true;
  }

  return (document.endpoints ?? []).some(
    (endpoint) => Object.keys(endpoint.args ?? {}).length > 0,
  );
};

export const resolveSnapshotSource = async ({
  baseUrl,
  namespace,
  rootIndex,
  wooVersion,
}: ResolveSnapshotSourceInput): Promise<WooRestSnapshot["source"]> => {
  const resolvedWooCommerceVersion = await resolveWooCommerceVersion(
    baseUrl,
    wooVersion,
  );

  return {
    namespace,
    wooCommerceVersion: resolvedWooCommerceVersion.version,
    wooCommerceVersionSource: resolvedWooCommerceVersion.source,
    wordpressVersion: extractWordPressVersion(rootIndex),
  };
};

export const resolveWooCommerceVersion = async (
  baseUrl: string,
  explicitVersion?: string,
): Promise<ResolvedWooCommerceVersion> => {
  if (explicitVersion) {
    return {
      source: "cli",
      version: explicitVersion,
    };
  }

  const inferredVersion = await fetchWooCommerceVersionFromReadme(baseUrl);
  if (inferredVersion) {
    return {
      source: "readme.txt",
      version: inferredVersion,
    };
  }

  return {
    source: "unknown",
    version: UNKNOWN_VERSION,
  };
};

export const extractWordPressVersion = (
  rootIndex: WordPressRootIndexDocument,
): string => {
  const generator = rootIndex.generator;

  if (typeof generator !== "string") {
    return UNKNOWN_VERSION;
  }

  const match = generator.match(/[?&]v=([^&#]+)/);
  return match?.[1] ?? UNKNOWN_VERSION;
};

export const formatOptionsFetchWarning = (
  route: string,
  message: string,
): string =>
  `[woo-rest snapshot] OPTIONS enrichment unavailable for ${route}: ${message}`;

const qualifyRoute = (route: string, namespace: string): string => {
  if (route.startsWith(`/${namespace}`)) {
    return route;
  }

  return `/${namespace}${route.startsWith("/") ? route : `/${route}`}`;
};

/** WooCommerce.com Connect marketplace routes often omit JSON schema in OPTIONS. */
const isWooMarketplaceConnectRoute = (
  route: string,
  namespace: string,
): boolean => route.startsWith(`/${namespace}/marketplace`);

const buildWpJsonCandidatePath = (route: string): string => {
  if (route === "/") {
    return "/wp-json";
  }

  return `/wp-json${route.startsWith("/") ? route : `/${route}`}`;
};

const buildRestRouteCandidatePath = (route: string): string =>
  `/?rest_route=${encodeURIComponent(route)}`;

const fetchJsonFromCandidates = async <T>(
  baseUrl: string,
  candidatePaths: string[],
  init?: RequestInit,
): Promise<T> => {
  let lastError: Error | undefined;

  for (const candidatePath of candidatePaths) {
    try {
      return await fetchJson<T>(new URL(candidatePath, `${baseUrl}/`), init);
    } catch (error) {
      lastError = error as Error;
    }
  }

  throw lastError ?? new Error("Unable to fetch JSON from any candidate path");
};

const fetchJson = async <T>(url: URL, init?: RequestInit): Promise<T> => {
  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        ...init?.headers,
      },
    });
  } catch (err) {
    const thrown = err instanceof Error ? err : new Error(String(err));
    const systemErr = thrown.cause instanceof Error ? thrown.cause : null;
    const detail =
      (systemErr as NodeJS.ErrnoException | undefined)?.code ??
      systemErr?.message ??
      thrown.message;
    throw new Error(`fetch failed for ${url.toString()}: ${detail}`, {
      cause: thrown,
    });
  }

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText} for ${url.toString()}`,
    );
  }

  const body: unknown = await response.json();
  return body as T;
};

const fetchWooCommerceVersionFromReadme = async (
  baseUrl: string,
): Promise<string | undefined> => {
  try {
    const response = await fetch(
      new URL("/wp-content/plugins/woocommerce/readme.txt", `${baseUrl}/`),
    );

    if (!response.ok) {
      return undefined;
    }

    const body = await response.text();
    const match = body.match(/^Stable tag:\s*(.+)$/im);

    return match?.[1]?.trim();
  } catch {
    return undefined;
  }
};
