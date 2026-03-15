import {
  sortJsonValue,
  WooRestSnapshot,
  WooRestSnapshotMethod,
  WooRestRouteSnapshot,
} from './woo-rest-snapshot';

const PARAM_SEGMENT_PATTERN = /^\(\?P<([^>]+)>(.+)\)$/;

export type GeneratedWooOperationKind =
  | 'list'
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'batch'
  | 'custom';

export interface GeneratedWooOperationManifest {
  source: WooRestSnapshot['source'] & {
    namespace: string;
  };
  operations: GeneratedWooOperation[];
}

export interface GeneratedWooOperation {
  operationKey: string;
  namespace: string;
  routeTemplate: string;
  method: WooRestSnapshotMethod;
  kind: GeneratedWooOperationKind;
  resourcePath: string[];
  pathParamsSchema: Record<string, unknown>;
  querySchema?: Record<string, unknown>;
  bodySchema?: Record<string, unknown>;
  responseSchema?: Record<string, unknown>;
  dangerous: boolean;
}

interface ParsedRouteSegment {
  kind: 'static' | 'param';
  value: string;
  pattern?: string;
}

interface NormalizedOperationCandidate {
  kind: GeneratedWooOperationKind;
  method: WooRestSnapshotMethod;
}

export const buildWooRestManifest = (
  snapshot: WooRestSnapshot,
): GeneratedWooOperationManifest => {
  const operations = snapshot.routes
    .flatMap((route) =>
      buildOperationsForRoute(route, snapshot.source.namespace),
    )
    .sort((left, right) => left.operationKey.localeCompare(right.operationKey));

  return sortJsonValue({
    source: {
      ...snapshot.source,
      namespace: snapshot.source.namespace.replace('/', '.'),
    },
    operations,
  }) as GeneratedWooOperationManifest;
};

export const stringifyWooRestManifest = (
  manifest: GeneratedWooOperationManifest,
): string => `${JSON.stringify(sortJsonValue(manifest), null, 2)}\n`;

const buildOperationsForRoute = (
  route: WooRestRouteSnapshot,
  namespace: string,
): GeneratedWooOperation[] => {
  const parsedRoute = parseRoute(route.route, namespace);

  if (!parsedRoute) {
    return [];
  }

  if (parsedRoute.segments.length === 0) {
    return [];
  }

  const operations = route.methods
    .map((methodSnapshot) => {
      const operation = normalizeOperationCandidate(
        parsedRoute,
        methodSnapshot.method,
        route.methods.map((method) => method.method),
      );

      if (!operation) {
        return undefined;
      }

      const operationKey = buildOperationKey(
        parsedRoute,
        operation.kind,
        operation.method,
      );
      const pathParamsSchema = buildPathParamsSchema(parsedRoute.segments);
      const inputSchema = buildInputSchema(
        methodSnapshot.args,
        pathParamsSchema,
        operation.kind,
        operation.method,
      );

      return {
        operationKey,
        namespace: namespace.replace('/', '.'),
        routeTemplate: parsedRoute.routeTemplate,
        method: operation.method,
        kind: operation.kind,
        resourcePath: parsedRoute.resourcePath,
        pathParamsSchema,
        querySchema: inputSchema.querySchema,
        bodySchema: inputSchema.bodySchema,
        responseSchema: methodSnapshot.schema,
        dangerous: operation.kind !== 'list' && operation.kind !== 'read',
      } satisfies GeneratedWooOperation;
    })
    .filter((operation) => operation !== undefined);

  return operations;
};

const parseRoute = (
  route: string,
  namespace: string,
): {
  segments: ParsedRouteSegment[];
  routeTemplate: string;
  resourcePath: string[];
} | null => {
  const namespacePrefix = `/${namespace}`;

  if (!route.startsWith(namespacePrefix)) {
    return null;
  }

  const routeWithoutNamespace = route.slice(namespacePrefix.length) || '/';
  const segments = routeWithoutNamespace
    .split('/')
    .filter((segment) => segment.length > 0)
    .map(parseRouteSegment);
  const staticSegments = segments
    .filter(
      (segment): segment is ParsedRouteSegment & { kind: 'static' } =>
        segment.kind === 'static',
    )
    .map((segment) => segment.value);
  const resourcePath =
    staticSegments.at(-1) === 'batch'
      ? staticSegments.slice(0, -1)
      : staticSegments;

  return {
    segments,
    routeTemplate:
      segments.length === 0
        ? '/'
        : `/${segments
            .map((segment) =>
              segment.kind === 'param' ? `{${segment.value}}` : segment.value,
            )
            .join('/')}`,
    resourcePath,
  };
};

const parseRouteSegment = (segment: string): ParsedRouteSegment => {
  const match = PARAM_SEGMENT_PATTERN.exec(segment);

  if (!match) {
    return {
      kind: 'static',
      value: segment,
    };
  }

  return {
    kind: 'param',
    value: match[1],
    pattern: match[2],
  };
};

const normalizeOperationCandidate = (
  parsedRoute: {
    segments: ParsedRouteSegment[];
    resourcePath: string[];
  },
  method: WooRestSnapshotMethod,
  routeMethods: WooRestSnapshotMethod[],
): NormalizedOperationCandidate | null => {
  const lastSegment = parsedRoute.segments.at(-1);
  const isBatchRoute =
    lastSegment?.kind === 'static' && lastSegment.value === 'batch';
  const isItemRoute = lastSegment?.kind === 'param';

  if (isBatchRoute) {
    return method === 'POST'
      ? {
          kind: 'batch',
          method,
        }
      : {
          kind: 'custom',
          method,
        };
  }

  if (method === 'GET') {
    return {
      kind: isItemRoute ? 'read' : 'list',
      method,
    };
  }

  if (method === 'POST' && !isItemRoute) {
    return {
      kind: 'create',
      method,
    };
  }

  if (method === 'POST' && isItemRoute) {
    return {
      kind: routeMethods.includes('PUT') ? 'custom' : 'update',
      method,
    };
  }

  if (method === 'PUT' && isItemRoute) {
    return {
      kind: 'update',
      method,
    };
  }

  if (method === 'DELETE' && isItemRoute) {
    return {
      kind: 'delete',
      method,
    };
  }

  return {
    kind: 'custom',
    method,
  };
};

const buildOperationKey = (
  parsedRoute: {
    segments: ParsedRouteSegment[];
    resourcePath: string[];
  },
  kind: GeneratedWooOperationKind,
  method: WooRestSnapshotMethod,
): string => {
  if (kind === 'custom') {
    return [
      ...parsedRoute.segments.map((segment) =>
        segment.kind === 'param'
          ? segment.value.toUpperCase()
          : segment.value.toUpperCase(),
      ),
      method,
      'CUSTOM',
    ].join('_');
  }

  const resourceSegments = parsedRoute.resourcePath.map((segment) =>
    segment.toUpperCase(),
  );

  return [...resourceSegments, kind.toUpperCase()].join('_');
};

const buildPathParamsSchema = (
  segments: ParsedRouteSegment[],
): Record<string, unknown> => {
  const paramSegments = segments.filter(
    (
      segment,
    ): segment is ParsedRouteSegment & { kind: 'param'; pattern: string } =>
      segment.kind === 'param' && typeof segment.pattern === 'string',
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
  if (pattern === '[\\d]+') {
    return {
      type: 'integer',
    };
  }

  return {
    pattern: `^${pattern}$`,
    type: 'string',
  };
};

const buildInputSchema = (
  args: Record<string, unknown>,
  pathParamsSchema: Record<string, unknown>,
  kind: GeneratedWooOperationKind,
  method: WooRestSnapshotMethod,
): {
  querySchema?: Record<string, unknown>;
  bodySchema?: Record<string, unknown>;
} => {
  const pathParamKeys = new Set(extractSchemaProperties(pathParamsSchema));
  const filteredArgs = Object.fromEntries(
    Object.entries(args).filter(([key]) => !pathParamKeys.has(key)),
  );

  if (kind === 'list' || kind === 'read' || kind === 'delete') {
    return Object.keys(filteredArgs).length === 0
      ? {}
      : {
          querySchema: buildArgsObjectSchema(filteredArgs),
        };
  }

  if (kind === 'batch') {
    return {
      bodySchema: buildBatchBodySchema(filteredArgs),
    };
  }

  if (kind === 'custom') {
    return Object.keys(filteredArgs).length === 0
      ? {}
      : method === 'GET' || method === 'DELETE'
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
        type: 'integer',
      },
      ...extractSchemaPropertiesObject(createItemSchema),
    },
    ['id'],
  );

  return buildObjectSchema({
    create: {
      items: createItemSchema,
      type: 'array',
    },
    delete: {
      items: {
        type: 'integer',
      },
      type: 'array',
    },
    update: {
      items: updateItemSchema,
      type: 'array',
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
          ([propertyKey]) => propertyKey !== 'required',
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
    type: 'object',
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

const asRecord = (value: unknown): Record<string, unknown> | undefined =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
