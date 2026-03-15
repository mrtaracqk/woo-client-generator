import { GeneratedWooOperationManifest } from "./woo-rest-manifest";
export interface GeneratedRegistryOperationSpecSource {
  toolName: string;
  title: string;
  description: string;
  operationKey: string;
  method: GeneratedWooOperationManifest["operations"][number]["method"];
  routeTemplate: string;
  pathParamsSchema?: Record<string, unknown>;
  querySchema?: Record<string, unknown>;
  bodySchema?: Record<string, unknown>;
  sensitiveFields?: string[];
}

const GENERATOR_VERSION = 1;
const SENSITIVE_FIELD_PATTERN =
  /(authorization|consumer_?key|consumer_?secret|password|secret|token|api[_-]?key|webhook_?secret)/i;

export const buildGeneratedRegistryOperationSpecs = (
  manifest: GeneratedWooOperationManifest,
): GeneratedRegistryOperationSpecSource[] => {
  const operationKeyCounts = countOperationKeys(manifest);

  return manifest.operations.map((operation) => {
    const operationKey = buildUniqueOperationKey(operation, operationKeyCounts);
    const pathParamsSchema = hasSchemaProperties(operation.pathParamsSchema)
      ? operation.pathParamsSchema
      : undefined;
    const querySchema = hasSchemaProperties(operation.querySchema)
      ? operation.querySchema
      : undefined;
    const bodySchema = hasSchemaProperties(operation.bodySchema)
      ? operation.bodySchema
      : undefined;
    const sensitiveFields = collectSensitiveFields([
      operation.pathParamsSchema,
      operation.querySchema,
      operation.bodySchema,
    ]);

    return {
      toolName: `wc.v3.${operationKey.toLowerCase()}`,
      title: humanizeOperationKey(operationKey),
      description: `Generated WooCommerce ${manifest.source.namespace} operation for ${operation.method} ${operation.routeTemplate}.`,
      operationKey,
      method: operation.method,
      routeTemplate: operation.routeTemplate,
      ...(pathParamsSchema ? { pathParamsSchema } : {}),
      ...(querySchema ? { querySchema } : {}),
      ...(bodySchema ? { bodySchema } : {}),
      ...(sensitiveFields.length > 0
        ? { sensitiveFields: sensitiveFields.sort() }
        : {}),
    };
  });
};

export const stringifyGeneratedOperationDefinitions = (
  manifest: GeneratedWooOperationManifest,
  generatedAt?: string,
): string => {
  const specs = buildGeneratedRegistryOperationSpecs(manifest);
  const serializedSpecs = JSON.stringify(specs, null, 2);
  const metadataLines = [
    " * AUTO-GENERATED FILE. DO NOT EDIT.",
    ` * generator-version: ${GENERATOR_VERSION}`,
    ` * wordpress-version: ${manifest.source.wordpressVersion}`,
    ` * woocommerce-version: ${manifest.source.wooCommerceVersion}`,
    ` * woocommerce-version-source: ${manifest.source.wooCommerceVersionSource}`,
    ...(generatedAt ? [` * generated-at: ${generatedAt}`] : []),
  ].join("\n");

  return `/**
${metadataLines}
 */
import {
  buildGeneratedOperationDefinitions,
  type GeneratedRegistryOperationSpec,
} from './generated-operation-definitions.builders';

const GENERATED_OPERATION_SPECS = ${serializedSpecs} as const satisfies readonly GeneratedRegistryOperationSpec[];

export const GENERATED_OPERATION_DEFINITIONS =
  buildGeneratedOperationDefinitions(GENERATED_OPERATION_SPECS);
`;
};

const collectSensitiveFields = (
  schemas: Array<Record<string, unknown> | undefined>,
): string[] => {
  const keys = new Set<string>();

  for (const schema of schemas) {
    visitSchema(schema, keys);
  }

  return [...keys];
};

const countOperationKeys = (
  manifest: GeneratedWooOperationManifest,
): ReadonlyMap<string, number> => {
  const counts = new Map<string, number>();

  for (const operation of manifest.operations) {
    counts.set(
      operation.operationKey,
      (counts.get(operation.operationKey) ?? 0) + 1,
    );
  }

  return counts;
};

const buildUniqueOperationKey = (
  operation: GeneratedWooOperationManifest["operations"][number],
  operationKeyCounts: ReadonlyMap<string, number>,
): string => {
  if ((operationKeyCounts.get(operation.operationKey) ?? 0) === 1) {
    return operation.operationKey;
  }

  const routeSegments = operation.routeTemplate
    .split("/")
    .filter((segment) => segment.length > 0)
    .map(mapRouteSegmentToKey);
  const kindSegment = operation.kind.toUpperCase();

  return routeSegments.at(-1) === kindSegment
    ? routeSegments.join("_")
    : [...routeSegments, kindSegment].join("_");
};

const visitSchema = (
  schema: Record<string, unknown> | undefined,
  keys: Set<string>,
): void => {
  if (!isRecord(schema)) {
    return;
  }

  const properties = asRecord(schema.properties);
  if (properties) {
    for (const [propertyKey, propertySchema] of Object.entries(properties)) {
      if (SENSITIVE_FIELD_PATTERN.test(propertyKey)) {
        keys.add(propertyKey);
      }

      visitSchema(asRecord(propertySchema), keys);
    }
  }

  const items = schema.items;
  if (Array.isArray(items)) {
    for (const item of items) {
      visitSchema(asRecord(item), keys);
    }
  } else {
    visitSchema(asRecord(items), keys);
  }

  for (const nestedKey of ["anyOf", "allOf", "oneOf"]) {
    const nestedSchemas = schema[nestedKey];
    if (!Array.isArray(nestedSchemas)) {
      continue;
    }

    for (const nestedSchema of nestedSchemas) {
      visitSchema(asRecord(nestedSchema), keys);
    }
  }
};

const humanizeOperationKey = (operationKey: string): string =>
  operationKey
    .toLowerCase()
    .split("_")
    .filter((segment) => segment.length > 0)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

const mapRouteSegmentToKey = (segment: string): string => {
  const parameterMatch = /^\{(.+)\}$/.exec(segment);

  if (parameterMatch) {
    return parameterMatch[1].toUpperCase();
  }

  return segment.toUpperCase();
};

const hasSchemaProperties = (schema?: Record<string, unknown>): boolean =>
  isRecord(schema?.properties) && Object.keys(schema.properties).length > 0;

const asRecord = (value: unknown): Record<string, unknown> | undefined =>
  isRecord(value) ? value : undefined;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
