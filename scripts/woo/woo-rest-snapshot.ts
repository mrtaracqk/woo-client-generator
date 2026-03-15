const SUPPORTED_METHODS = ["GET", "POST", "PUT", "DELETE"] as const;

export type WooRestSnapshotMethod = (typeof SUPPORTED_METHODS)[number];

export interface WooRestSnapshot {
  source: {
    namespace: string;
    wooCommerceVersion: string;
    wooCommerceVersionSource: "cli" | "readme.txt" | "unknown";
    wordpressVersion: string;
  };
  routes: WooRestRouteSnapshot[];
}

export interface WooRestRouteSnapshot {
  route: string;
  methods: WooRestMethodSnapshot[];
}

export interface WooRestMethodSnapshot {
  method: WooRestSnapshotMethod;
  args: Record<string, unknown>;
  schema?: Record<string, unknown>;
}

export interface WordPressRouteEndpointDocument {
  methods?: string[] | Record<string, boolean>;
  args?: Record<string, unknown>;
  schema?: Record<string, unknown>;
}

export interface WordPressRouteDocument {
  endpoints?: WordPressRouteEndpointDocument[];
  schema?: Record<string, unknown>;
}

export interface WordPressNamespaceDocument {
  namespace?: string;
  routes?: Record<string, WordPressRouteDocument>;
}

export interface BuildWooRestSnapshotInput {
  source: WooRestSnapshot["source"];
  namespaceDocument: WordPressNamespaceDocument;
  optionsDocuments?: Record<string, WordPressRouteDocument | undefined>;
}

export const buildWooRestSnapshot = ({
  source,
  namespaceDocument,
  optionsDocuments = {},
}: BuildWooRestSnapshotInput): WooRestSnapshot => {
  const routes = Object.entries(namespaceDocument.routes ?? {})
    .map(([route, routeDocument]) => {
      const optionsDocument = optionsDocuments[route];
      const methods = collectRouteMethods(routeDocument, optionsDocument);

      if (methods.length === 0) {
        return undefined;
      }

      return {
        route,
        methods,
      } satisfies WooRestRouteSnapshot;
    })
    .filter((route): route is WooRestRouteSnapshot => route !== undefined)
    .sort((left, right) => left.route.localeCompare(right.route));

  return sortJsonValue({
    source,
    routes,
  }) as WooRestSnapshot;
};

export const stringifyWooRestSnapshot = (snapshot: WooRestSnapshot): string =>
  `${JSON.stringify(sortJsonValue(snapshot), null, 2)}\n`;

const collectRouteMethods = (
  routeDocument: WordPressRouteDocument | undefined,
  optionsDocument: WordPressRouteDocument | undefined,
): WooRestMethodSnapshot[] => {
  const routeSchema =
    asRecord(optionsDocument?.schema) ?? asRecord(routeDocument?.schema);
  const endpoints = routeDocument?.endpoints ?? [];

  return endpoints
    .flatMap((endpoint) =>
      collectSupportedMethods(endpoint.methods).map((method) => {
        const optionsEndpoint = findEndpointForMethod(optionsDocument, method);
        const args = sortJsonValue({
          ...(asRecord(endpoint.args) ?? {}),
          ...(asRecord(optionsEndpoint?.args) ?? {}),
        }) as Record<string, unknown>;
        const schema =
          asRecord(optionsEndpoint?.schema) ??
          routeSchema ??
          asRecord(endpoint.schema);

        return schema === undefined
          ? { method, args }
          : {
              method,
              args,
              schema: sortJsonValue(schema) as Record<string, unknown>,
            };
      }),
    )
    .sort(
      (left, right) =>
        methodSortIndex(left.method) - methodSortIndex(right.method),
    );
};

const collectSupportedMethods = (
  methods: WordPressRouteEndpointDocument["methods"],
): WooRestSnapshotMethod[] => {
  const rawMethods = Array.isArray(methods)
    ? methods
    : Object.entries(methods ?? {})
        .filter(([, enabled]) => enabled)
        .map(([method]) => method);

  return rawMethods.filter(isSupportedMethod).sort((left, right) => {
    return methodSortIndex(left) - methodSortIndex(right);
  });
};

const findEndpointForMethod = (
  routeDocument: WordPressRouteDocument | undefined,
  method: WooRestSnapshotMethod,
): WordPressRouteEndpointDocument | undefined =>
  routeDocument?.endpoints?.find((endpoint) =>
    collectSupportedMethods(endpoint.methods).includes(method),
  );

const isSupportedMethod = (method: string): method is WooRestSnapshotMethod =>
  SUPPORTED_METHODS.includes(method as WooRestSnapshotMethod);

const methodSortIndex = (method: WooRestSnapshotMethod): number =>
  SUPPORTED_METHODS.indexOf(method);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asRecord = (value: unknown): Record<string, unknown> | undefined =>
  isRecord(value) ? value : undefined;

export const sortJsonValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((item) => sortJsonValue(item));
  }

  if (!isRecord(value)) {
    return value;
  }

  return Object.keys(value)
    .sort((left, right) => left.localeCompare(right))
    .reduce<Record<string, unknown>>((result, key) => {
      const normalizedValue = sortJsonValue(value[key]);
      if (normalizedValue !== undefined) {
        result[key] = normalizedValue;
      }
      return result;
    }, {});
};
