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
}

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

  for (const route of routes) {
    const qualifiedRoute = qualifyRoute(route, options.namespace);

    try {
      documents[route] = await fetchJsonFromCandidates<WordPressRouteDocument>(
        baseUrl,
        [
          buildWpJsonCandidatePath(qualifiedRoute),
          buildRestRouteCandidatePath(qualifiedRoute),
        ],
        {
          method: "OPTIONS",
        },
      );
    } catch (error) {
      warnings.push(
        formatOptionsFetchWarning(
          route,
          error instanceof Error ? error.message : "Unknown OPTIONS error",
        ),
      );
    }
  }

  return {
    documents,
    warnings,
  };
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
