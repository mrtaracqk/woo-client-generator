import {
  sortJsonValue,
  WooRestSnapshot,
  WooRestSnapshotMethod,
  WooRestRouteSnapshot,
} from "./woo-rest-snapshot";

const PARAM_SEGMENT_PATTERN = /^\(\?P<([^>]+)>(.+)\)$/;
const VERB_METHOD_NAME_MAP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const satisfies Record<WooRestSnapshotMethod, string>;

export type WooSdkOperationKind =
  | "list"
  | "read"
  | "create"
  | "update"
  | "delete"
  | "batch"
  | "custom";

export type WooSdkAuthRequirement = "unknown";

export interface WooSdkManifest {
  source: WooRestSnapshot["source"];
  operations: WooSdkOperation[];
}

export interface WooSdkOperation {
  authRequirement: WooSdkAuthRequirement;
  bodySchema?: Record<string, unknown>;
  functionName: string;
  internalKey: string;
  kind: WooSdkOperationKind;
  method: WooRestSnapshotMethod;
  operationId: string;
  pathParamsSchema: Record<string, unknown>;
  pathParamsTypeName?: string;
  querySchema?: Record<string, unknown>;
  queryTypeName?: string;
  resourceGroup: string;
  responseDescription?: string;
  responseIsArray: boolean;
  responseSchema?: Record<string, unknown>;
  responseTypeName: string;
  routeTemplate: string;
  typeBaseName: string;
  bodyTypeName?: string;
}

interface ParsedRouteSegment {
  kind: "static" | "param";
  value: string;
  pattern?: string;
}

interface ParsedResourceSegment {
  raw: string;
  singular: boolean;
}

interface ParsedRoute {
  actionSegments: string[];
  hasExplicitAction: boolean;
  isBatchRoute: boolean;
  routeTemplate: string;
  segments: ParsedRouteSegment[];
  specialTailSegments: string[];
  resourceSegments: ParsedResourceSegment[];
}

interface NormalizedOperationCandidate {
  kind: WooSdkOperationKind;
  method: WooRestSnapshotMethod;
}

interface OperationNaming {
  functionName: string;
  internalKey: string;
  typeBaseName: string;
}

export const buildWooSdkManifest = (
  snapshot: WooRestSnapshot,
): WooSdkManifest => {
  const marketplacePrefix = `/${snapshot.source.namespace}/marketplace`;
  const routesForManifest = snapshot.routes.filter(
    (route) => !route.route.startsWith(marketplacePrefix),
  );

  const operations = disambiguateOperationNames(
    routesForManifest.flatMap((route) =>
      buildOperationsForRoute(route, snapshot.source.namespace),
    ),
  ).sort(compareOperations);

  return sortJsonValue({
    source: snapshot.source,
    operations,
  }) as WooSdkManifest;
};

export const stringifyWooSdkManifest = (manifest: WooSdkManifest): string =>
  `${JSON.stringify(sortJsonValue(manifest), null, 2)}\n`;

const disambiguateOperationNames = (
  operations: WooSdkOperation[],
): WooSdkOperation[] => {
  const internalKeyCounts = countValues(
    operations.map((operation) => operation.internalKey),
  );
  const operationIdCounts = countValues(
    operations.map((operation) => operation.operationId),
  );
  const typeBaseNameCounts = countValues(
    operations.map((operation) => operation.typeBaseName),
  );

  return operations.map((operation) => {
    const needsDisambiguation =
      (internalKeyCounts.get(operation.internalKey) ?? 0) > 1 ||
      (operationIdCounts.get(operation.operationId) ?? 0) > 1 ||
      (typeBaseNameCounts.get(operation.typeBaseName) ?? 0) > 1;

    if (!needsDisambiguation) {
      return operation;
    }

    const suffixWords = buildDisambiguationWords(operation);
    const suffixPascal = toPascalCase(suffixWords);
    const suffixKey = toScreamingSnake(suffixWords.join("_"));
    const typeBaseName = `${operation.typeBaseName}${suffixPascal}`;

    return {
      ...operation,
      bodyTypeName: operation.bodySchema ? `${typeBaseName}Body` : undefined,
      functionName: `${operation.functionName}${suffixPascal}`,
      internalKey: `${operation.internalKey}_${suffixKey}`,
      operationId: `${operation.operationId}${suffixPascal}`,
      pathParamsTypeName: hasSchemaProperties(operation.pathParamsSchema)
        ? `${typeBaseName}PathParams`
        : undefined,
      queryTypeName: operation.querySchema ? `${typeBaseName}Query` : undefined,
      responseTypeName: `${typeBaseName}Response`,
      typeBaseName,
    };
  });
};

const buildOperationsForRoute = (
  route: WooRestRouteSnapshot,
  namespace: string,
): WooSdkOperation[] => {
  const parsedRoute = parseRoute(route.route, namespace);

  if (!parsedRoute || parsedRoute.resourceSegments.length === 0) {
    return [];
  }

  return route.methods
    .map((methodSnapshot) => {
      const operation = normalizeOperationCandidate(
        parsedRoute,
        methodSnapshot.method,
        route.methods.map((method) => method.method),
      );

      if (!operation) {
        return undefined;
      }

      const pathParamsSchema = buildPathParamsSchema(parsedRoute.segments);
      const inputSchema = buildInputSchema(
        methodSnapshot.args,
        pathParamsSchema,
        operation.kind,
        operation.method,
      );
      const naming = buildOperationNaming(parsedRoute, operation);
      const responseDescription = extractResponseDescription(
        methodSnapshot.schema,
      );

      return {
        authRequirement: "unknown",
        functionName: naming.functionName,
        internalKey: naming.internalKey,
        kind: operation.kind,
        method: operation.method,
        operationId: naming.functionName,
        pathParamsSchema,
        resourceGroup: buildResourceGroup(parsedRoute),
        responseIsArray: operation.kind === "list",
        responseTypeName: `${naming.typeBaseName}Response`,
        routeTemplate: parsedRoute.routeTemplate,
        typeBaseName: naming.typeBaseName,
        ...(inputSchema.bodySchema
          ? {
              bodySchema: inputSchema.bodySchema,
              bodyTypeName: `${naming.typeBaseName}Body`,
            }
          : {}),
        ...(hasSchemaProperties(pathParamsSchema)
          ? {
              pathParamsTypeName: `${naming.typeBaseName}PathParams`,
            }
          : {}),
        ...(inputSchema.querySchema
          ? {
              querySchema: inputSchema.querySchema,
              queryTypeName: `${naming.typeBaseName}Query`,
            }
          : {}),
        ...(responseDescription ? { responseDescription } : {}),
        responseSchema: methodSnapshot.schema ?? {
          type: "mixed",
          description:
            "Response schema was not present in the Woo REST snapshot for this operation.",
        },
      } as WooSdkOperation;
    })
    .filter((operation): operation is WooSdkOperation => Boolean(operation));
};

const countValues = (values: string[]): ReadonlyMap<string, number> => {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return counts;
};

const buildDisambiguationWords = (operation: WooSdkOperation): string[] => {
  const routeSegments = operation.routeTemplate.split("/").filter(Boolean);
  const suffixWords = routeSegments
    .slice(1)
    .flatMap((segment) => splitWords(segment.replace(/[{}]/g, "")));

  if (suffixWords.length > 0) {
    return suffixWords;
  }

  return [VERB_METHOD_NAME_MAP[operation.method]];
};

const compareOperations = (
  left: WooSdkOperation,
  right: WooSdkOperation,
): number =>
  left.internalKey.localeCompare(right.internalKey) ||
  left.routeTemplate.localeCompare(right.routeTemplate) ||
  compareMethod(left.method, right.method);

const parseRoute = (route: string, namespace: string): ParsedRoute | null => {
  const namespacePrefix = `/${namespace}`;

  if (!route.startsWith(namespacePrefix)) {
    return null;
  }

  const routeWithoutNamespace = route.slice(namespacePrefix.length) || "/";
  const segments = routeWithoutNamespace
    .split("/")
    .filter((segment) => segment.length > 0)
    .map(parseRouteSegment);

  if (segments.length === 0) {
    return null;
  }

  const actionsIndex = segments.findIndex(
    (segment) => segment.kind === "static" && segment.value === "actions",
  );
  const segmentsBeforeActions =
    actionsIndex === -1 ? segments : segments.slice(0, actionsIndex);
  const lastSegmentBeforeActions = segmentsBeforeActions.at(-1);
  const isBatchRoute =
    lastSegmentBeforeActions?.kind === "static" &&
    lastSegmentBeforeActions.value === "batch";
  const resourceSourceSegments = isBatchRoute
    ? segmentsBeforeActions.slice(0, -1)
    : segmentsBeforeActions;
  const specialTailSegments = segments
    .slice(resourceSourceSegments.length)
    .filter(
      (segment): segment is ParsedRouteSegment & { kind: "static" } =>
        segment.kind === "static",
    )
    .map((segment) => segment.value);
  const actionSegments =
    actionsIndex === -1
      ? []
      : segments
          .slice(actionsIndex + 1)
          .filter(
            (segment): segment is ParsedRouteSegment & { kind: "static" } =>
              segment.kind === "static",
          )
          .map((segment) => segment.value);

  return {
    actionSegments,
    hasExplicitAction: actionSegments.length > 0,
    isBatchRoute,
    routeTemplate: `/${segments
      .map((segment) =>
        segment.kind === "param" ? `{${segment.value}}` : segment.value,
      )
      .join("/")}`,
    segments,
    specialTailSegments,
    resourceSegments: buildParsedResourceSegments(resourceSourceSegments),
  };
};

const buildParsedResourceSegments = (
  segments: ParsedRouteSegment[],
): ParsedResourceSegment[] =>
  segments.flatMap((segment, index) => {
    if (segment.kind !== "static") {
      return [];
    }

    return {
      raw: segment.value,
      singular: segments[index + 1]?.kind === "param",
    };
  });

const parseRouteSegment = (segment: string): ParsedRouteSegment => {
  const match = PARAM_SEGMENT_PATTERN.exec(segment);

  if (!match) {
    return {
      kind: "static",
      value: segment,
    };
  }

  return {
    kind: "param",
    value: match[1],
    pattern: match[2],
  };
};

const normalizeOperationCandidate = (
  parsedRoute: ParsedRoute,
  method: WooRestSnapshotMethod,
  routeMethods: WooRestSnapshotMethod[],
): NormalizedOperationCandidate | null => {
  const lastSegment = parsedRoute.segments.at(-1);
  const isItemRoute = lastSegment?.kind === "param";

  if (parsedRoute.isBatchRoute) {
    return method === "POST"
      ? {
          kind: "batch",
          method,
        }
      : {
          kind: "custom",
          method,
        };
  }

  if (parsedRoute.hasExplicitAction) {
    return {
      kind: "custom",
      method,
    };
  }

  if (method === "GET") {
    return {
      kind: isItemRoute ? "read" : "list",
      method,
    };
  }

  if (method === "POST" && !isItemRoute) {
    return {
      kind: "create",
      method,
    };
  }

  if (method === "POST" && isItemRoute) {
    return {
      kind: routeMethods.includes("PUT") ? "custom" : "update",
      method,
    };
  }

  if (method === "PUT" && isItemRoute) {
    return {
      kind: "update",
      method,
    };
  }

  if (method === "DELETE" && isItemRoute) {
    return {
      kind: "delete",
      method,
    };
  }

  return {
    kind: "custom",
    method,
  };
};

const buildOperationNaming = (
  parsedRoute: ParsedRoute,
  operation: NormalizedOperationCandidate,
): OperationNaming => {
  if (operation.kind === "custom") {
    return buildCustomOperationNaming(parsedRoute, operation.method);
  }

  const typeResourceSegments = buildTypeResourceSegments(parsedRoute);
  const functionResourceSegments = buildFunctionResourceSegments(
    typeResourceSegments,
    operation.kind,
  );
  const functionVerb = getFunctionVerb(operation.kind);
  const operationName = getOperationName(operation.kind);

  return {
    functionName: toCamelCase([
      functionVerb,
      ...functionResourceSegments.flatMap(splitWords),
    ]),
    internalKey: [
      toScreamingSnake(typeResourceSegments.flatMap(splitWords).join("_")),
      toScreamingSnake(operationName),
    ].join("_"),
    typeBaseName: `${toPascalCase(typeResourceSegments.flatMap(splitWords))}${operationName}`,
  };
};

const buildCustomOperationNaming = (
  parsedRoute: ParsedRoute,
  method: WooRestSnapshotMethod,
): OperationNaming => {
  const resourceSegments = parsedRoute.resourceSegments.map((segment) =>
    singularizeSegment(segment.raw),
  );
  const resourceWords = resourceSegments.flatMap(splitWords);

  if (parsedRoute.hasExplicitAction) {
    const actionWords = parsedRoute.actionSegments.flatMap(splitWords);
    const [leadingActionWord, ...remainingActionWords] = actionWords;

    const functionWords =
      leadingActionWord === undefined
        ? resourceWords
        : [leadingActionWord, ...resourceWords, ...remainingActionWords];
    const typeWords = [...resourceWords, ...actionWords];

    return {
      functionName: toCamelCase(functionWords),
      internalKey: toScreamingSnake(typeWords.join("_")),
      typeBaseName: toPascalCase(typeWords),
    };
  }

  const tailWords = parsedRoute.specialTailSegments.flatMap(splitWords);
  const methodWord = VERB_METHOD_NAME_MAP[method];
  const typeWords = [...resourceWords, methodWord, ...tailWords, "custom"];

  return {
    functionName: toCamelCase([
      methodWord,
      ...resourceWords,
      ...tailWords,
      "custom",
    ]),
    internalKey: toScreamingSnake(typeWords.join("_")),
    typeBaseName: toPascalCase(typeWords),
  };
};

const buildTypeResourceSegments = (parsedRoute: ParsedRoute): string[] =>
  parsedRoute.resourceSegments.map((segment) =>
    segment.singular ? singularizeSegment(segment.raw) : segment.raw,
  );

const buildFunctionResourceSegments = (
  resourceSegments: string[],
  kind: Exclude<WooSdkOperationKind, "custom">,
): string[] => {
  if (resourceSegments.length === 0) {
    return resourceSegments;
  }

  if (
    kind === "create" ||
    kind === "read" ||
    kind === "update" ||
    kind === "delete"
  ) {
    return [
      ...resourceSegments.slice(0, -1),
      singularizeSegment(resourceSegments.at(-1) ?? ""),
    ];
  }

  return resourceSegments;
};

const getFunctionVerb = (
  kind: Exclude<WooSdkOperationKind, "custom">,
): string => {
  switch (kind) {
    case "list":
      return "list";
    case "read":
      return "get";
    case "create":
      return "create";
    case "update":
      return "update";
    case "delete":
      return "delete";
    case "batch":
      return "batchUpdate";
  }
};

const getOperationName = (
  kind: Exclude<WooSdkOperationKind, "custom">,
): string => {
  switch (kind) {
    case "list":
      return "List";
    case "read":
      return "Get";
    case "create":
      return "Create";
    case "update":
      return "Update";
    case "delete":
      return "Delete";
    case "batch":
      return "BatchUpdate";
  }
};

const buildResourceGroup = (parsedRoute: ParsedRoute): string =>
  toCamelCase(splitWords(parsedRoute.resourceSegments[0]?.raw ?? "root"));

const buildPathParamsSchema = (
  segments: ParsedRouteSegment[],
): Record<string, unknown> => {
  const paramSegments = segments.filter(
    (
      segment,
    ): segment is ParsedRouteSegment & { kind: "param"; pattern: string } =>
      segment.kind === "param" && typeof segment.pattern === "string",
  );

  return buildObjectSchema(
    Object.fromEntries(
      paramSegments.map((segment) => [
        segment.value,
        buildParamPropertySchema(segment.pattern),
      ]),
    ),
    paramSegments.map((segment) => segment.value),
  );
};

const buildParamPropertySchema = (pattern: string): Record<string, unknown> => {
  if (pattern === "[\\d]+") {
    return {
      type: "integer",
    };
  }

  return {
    pattern: `^${pattern}$`,
    type: "string",
  };
};

const buildInputSchema = (
  args: Record<string, unknown>,
  pathParamsSchema: Record<string, unknown>,
  kind: WooSdkOperationKind,
  method: WooRestSnapshotMethod,
): {
  querySchema?: Record<string, unknown>;
  bodySchema?: Record<string, unknown>;
} => {
  const pathParamKeys = new Set(extractSchemaProperties(pathParamsSchema));
  const filteredArgs = Object.fromEntries(
    Object.entries(args).filter(([key]) => !pathParamKeys.has(key)),
  );

  if (kind === "list" || kind === "read" || kind === "delete") {
    return Object.keys(filteredArgs).length === 0
      ? {}
      : {
          querySchema: buildArgsObjectSchema(filteredArgs),
        };
  }

  if (kind === "batch") {
    return {
      bodySchema: buildBatchBodySchema(filteredArgs),
    };
  }

  if (kind === "custom") {
    return Object.keys(filteredArgs).length === 0
      ? {}
      : method === "GET" || method === "DELETE"
        ? {
            querySchema: buildArgsObjectSchema(filteredArgs),
          }
        : {
            bodySchema: buildArgsObjectSchema(filteredArgs),
          };
  }

  return Object.keys(filteredArgs).length === 0
    ? {}
    : {
        bodySchema: buildArgsObjectSchema(filteredArgs),
      };
};

const buildBatchBodySchema = (
  args: Record<string, unknown>,
): Record<string, unknown> => {
  const createItemSchema = buildArgsObjectSchema(args);
  const updateItemSchema = buildObjectSchema(
    {
      id: {
        type: "integer",
      },
      ...extractSchemaPropertiesObject(createItemSchema),
    },
    ["id"],
  );

  return buildObjectSchema({
    create: {
      items: createItemSchema,
      type: "array",
    },
    delete: {
      items: {
        type: "integer",
      },
      type: "array",
    },
    update: {
      items: updateItemSchema,
      type: "array",
    },
  });
};

const buildArgsObjectSchema = (
  args: Record<string, unknown>,
): Record<string, unknown> => {
  const normalizedProperties = Object.fromEntries(
    Object.entries(args).map(([key, value]) => {
      const propertySchema = asRecord(value) ?? {};
      const schemaWithoutRequired = Object.fromEntries(
        Object.entries(propertySchema).filter(
          ([propertyKey]) => propertyKey !== "required",
        ),
      );

      return [key, schemaWithoutRequired];
    }),
  );
  const requiredKeys = Object.entries(args)
    .filter(([, value]) => asRecord(value)?.required === true)
    .map(([key]) => key);

  return buildObjectSchema(normalizedProperties, requiredKeys);
};

const buildObjectSchema = (
  properties: Record<string, unknown>,
  required: string[] = [],
): Record<string, unknown> => {
  const schema: Record<string, unknown> = {
    additionalProperties: false,
    properties,
    type: "object",
  };

  if (required.length > 0) {
    schema.required = required;
  }

  return schema;
};

const extractSchemaProperties = (schema: Record<string, unknown>): string[] =>
  Object.keys(extractSchemaPropertiesObject(schema));

const extractSchemaPropertiesObject = (
  schema: Record<string, unknown>,
): Record<string, unknown> => {
  const properties = schema.properties;

  return asRecord(properties) ?? {};
};

const extractResponseDescription = (
  schema: Record<string, unknown> | undefined,
): string | undefined => {
  const description = schema?.description;

  return typeof description === "string" && description.length > 0
    ? description
    : undefined;
};

const hasSchemaProperties = (schema: Record<string, unknown>): boolean =>
  Object.keys(extractSchemaPropertiesObject(schema)).length > 0;

const singularizeSegment = (segment: string): string => {
  const parts = segment.split(/[_-]+/);

  if (parts.length === 0) {
    return segment;
  }

  const lastPart = parts.at(-1) ?? segment;

  return [...parts.slice(0, -1), singularizeWord(lastPart)].join("_");
};

const singularizeWord = (word: string): string => {
  if (word.endsWith("ies") && word.length > 3) {
    return `${word.slice(0, -3)}y`;
  }

  if (/(ches|shes|sses|xes|zes)$/.test(word) && word.length > 4) {
    return word.slice(0, -2);
  }

  if (word.endsWith("ses") && word.length > 3) {
    return word.slice(0, -2);
  }

  if (word.endsWith("s") && !word.endsWith("ss") && word.length > 1) {
    return word.slice(0, -1);
  }

  return word;
};

const splitWords = (value: string): string[] =>
  value
    .split(/[^A-Za-z0-9]+/)
    .flatMap((part) => part.split(/(?=[A-Z][a-z0-9])/))
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .map((part) => part.toLowerCase());

const toCamelCase = (words: string[]): string =>
  words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");

const toPascalCase = (words: string[]): string =>
  words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

const toScreamingSnake = (value: string): string =>
  splitWords(value)
    .map((word) => word.toUpperCase())
    .join("_");

const compareMethod = (
  left: WooRestSnapshotMethod,
  right: WooRestSnapshotMethod,
): number => methodSortIndex(left) - methodSortIndex(right);

const methodSortIndex = (method: WooRestSnapshotMethod): number =>
  ["GET", "POST", "PUT", "DELETE"].indexOf(method);

const asRecord = (value: unknown): Record<string, unknown> | undefined =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
