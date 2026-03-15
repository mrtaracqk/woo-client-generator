export interface WooSchemaToTypeScriptWarning {
  message: string;
  path: string;
}

interface RenderState {
  seenWarnings: Set<string>;
  warnings: WooSchemaToTypeScriptWarning[];
}

const SUPPORTED_SCHEMA_TYPES = new Set([
  "array",
  "boolean",
  "bool",
  "date-time",
  "integer",
  "mixed",
  "null",
  "number",
  "object",
  "string",
]);

export const renderWooSchemaTypeScript = (
  schema: Record<string, unknown> | undefined,
  path = "$",
  options?: {
    warnOnMissingSchema?: boolean;
  },
): {
  typeScript: string;
  warnings: WooSchemaToTypeScriptWarning[];
} => {
  if (schema === undefined) {
    return {
      typeScript: "unknown",
      warnings:
        options?.warnOnMissingSchema === false
          ? []
          : [
              {
                message: "Schema is missing or invalid; using unknown.",
                path,
              },
            ],
    };
  }

  const state: RenderState = {
    seenWarnings: new Set<string>(),
    warnings: [],
  };

  return {
    typeScript: renderSchema(schema, state, path),
    warnings: state.warnings,
  };
};

const renderSchema = (
  schema: Record<string, unknown> | undefined,
  state: RenderState,
  path: string,
): string => {
  if (!isRecord(schema)) {
    addWarning(state, path, "Schema is missing or invalid; using unknown.");
    return "unknown";
  }

  const enumValues = schema.enum;
  if (Array.isArray(enumValues)) {
    return renderEnum(enumValues, state, path);
  }

  for (const keyword of ["anyOf", "oneOf"] as const) {
    const nestedSchemas = schema[keyword];
    if (Array.isArray(nestedSchemas)) {
      return renderComposition(
        nestedSchemas,
        state,
        `${path}.${keyword}`,
        "|",
        `${keyword} must contain at least one schema; using unknown.`,
      );
    }
  }

  const allOfSchemas = schema.allOf;
  if (Array.isArray(allOfSchemas)) {
    return renderComposition(
      allOfSchemas,
      state,
      `${path}.allOf`,
      "&",
      "allOf must contain at least one schema; using unknown.",
    );
  }

  const rawType = schema.type;
  if (Array.isArray(rawType)) {
    return renderTypeUnion(schema, rawType, state, path);
  }

  if (typeof rawType === "string") {
    return renderByType(schema, rawType, state, path);
  }

  if (schema.properties !== undefined || schema.additionalProperties !== undefined) {
    return renderObjectSchema(schema, state, path);
  }

  addWarning(state, path, "Schema does not declare a supported type; using unknown.");
  return "unknown";
};

const renderEnum = (
  enumValues: unknown[],
  state: RenderState,
  path: string,
): string => {
  if (enumValues.length === 0) {
    addWarning(state, path, "Enum does not contain any values; using unknown.");
    return "unknown";
  }

  const renderedValues = enumValues.map((value) => renderLiteralValue(value));

  if (renderedValues.some((value) => value === undefined)) {
    addWarning(
      state,
      path,
      "Enum contains non-literal values; using unknown instead of an invalid union.",
    );
    return "unknown";
  }

  return joinTypes(renderedValues as string[], "|");
};

const renderComposition = (
  schemas: unknown[],
  state: RenderState,
  path: string,
  separator: "|" | "&",
  emptyMessage: string,
): string => {
  if (schemas.length === 0) {
    addWarning(state, path, emptyMessage);
    return "unknown";
  }

  return joinTypes(
    schemas.map((schema, index) =>
      renderSchema(asRecord(schema), state, `${path}[${index}]`),
    ),
    separator,
  );
};

const renderTypeUnion = (
  schema: Record<string, unknown>,
  rawTypes: unknown[],
  state: RenderState,
  path: string,
): string => {
  if (rawTypes.length === 0) {
    addWarning(state, path, "Type union is empty; using unknown.");
    return "unknown";
  }

  const variants: string[] = [];

  for (const rawType of rawTypes) {
    if (typeof rawType !== "string" || !SUPPORTED_SCHEMA_TYPES.has(rawType)) {
      addWarning(
        state,
        path,
        `Unsupported union member ${JSON.stringify(rawType)}; using unknown.`,
      );
      return "unknown";
    }

    variants.push(renderByType(schema, rawType, state, path));
  }

  return joinTypes(variants, "|");
};

const renderByType = (
  schema: Record<string, unknown>,
  rawType: string,
  state: RenderState,
  path: string,
): string => {
  switch (rawType) {
    case "array":
      return renderArraySchema(schema, state, path);
    case "boolean":
    case "bool":
      return "boolean";
    case "date-time":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "mixed":
      return "unknown";
    case "null":
      return "null";
    case "object":
      return renderObjectSchema(schema, state, path);
    case "string":
      return "string";
    default:
      addWarning(
        state,
        path,
        `Unsupported schema type ${JSON.stringify(rawType)}; using unknown.`,
      );
      return "unknown";
  }
};

const renderArraySchema = (
  schema: Record<string, unknown>,
  state: RenderState,
  path: string,
): string => {
  const items = schema.items;

  if (Array.isArray(items)) {
    addWarning(
      state,
      `${path}.items`,
      "Tuple-style array schemas are not supported yet; using unknown[].",
    );
    return "Array<unknown>";
  }

  const itemSchema = asRecord(items);
  if (!itemSchema) {
    return "Array<unknown>";
  }

  return `Array<${renderSchema(itemSchema, state, `${path}.items`)}>`;
};

const renderObjectSchema = (
  schema: Record<string, unknown>,
  state: RenderState,
  path: string,
): string => {
  const properties = asRecord(schema.properties);
  const additionalProperties = schema.additionalProperties;

  if (!properties || Object.keys(properties).length === 0) {
    if (
      additionalProperties !== undefined &&
      additionalProperties !== true &&
      additionalProperties !== false &&
      !isRecord(additionalProperties)
    ) {
      addWarning(
        state,
        `${path}.additionalProperties`,
        "additionalProperties must be a boolean or schema; using Record<string, unknown>.",
      );
    }

    return "Record<string, unknown>";
  }

  const required = new Set(readRequiredPropertyNames(schema.required));
  const members = Object.entries(properties).map(([propertyName, propertySchema]) => {
    const renderedPropertyName = renderPropertyName(propertyName);
    const optionalMarker = required.has(propertyName) ? "" : "?";
    const renderedPropertyType = renderSchema(
      asRecord(propertySchema),
      state,
      `${path}.properties.${propertyName}`,
    );

    return `${renderedPropertyName}${optionalMarker}: ${renderedPropertyType}`;
  });

  if (additionalProperties === true) {
    members.push("[key: string]: unknown");
  } else if (isRecord(additionalProperties)) {
    members.push(
      `[key: string]: ${renderSchema(
        additionalProperties,
        state,
        `${path}.additionalProperties`,
      )}`,
    );
  } else if (additionalProperties !== undefined && additionalProperties !== false) {
    addWarning(
      state,
      `${path}.additionalProperties`,
      "additionalProperties must be a boolean or schema; ignoring invalid value.",
    );
  }

  return `{ ${members.join("; ")} }`;
};

const readRequiredPropertyNames = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((entry): entry is string => typeof entry === "string");
};

const renderPropertyName = (propertyName: string): string =>
  /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(propertyName)
    ? propertyName
    : JSON.stringify(propertyName);

const renderLiteralValue = (value: unknown): string | undefined => {
  if (
    value === null ||
    typeof value === "boolean" ||
    typeof value === "number" ||
    typeof value === "string"
  ) {
    return JSON.stringify(value);
  }

  return undefined;
};

const joinTypes = (parts: string[], separator: "|" | "&"): string => {
  const uniqueParts = [...new Set(parts)];

  if (uniqueParts.length === 0) {
    return "unknown";
  }

  if (uniqueParts.length === 1) {
    return uniqueParts[0];
  }

  return uniqueParts.join(` ${separator} `);
};

const addWarning = (
  state: RenderState,
  path: string,
  message: string,
): void => {
  const key = `${path}::${message}`;
  if (state.seenWarnings.has(key)) {
    return;
  }

  state.seenWarnings.add(key);
  state.warnings.push({ message, path });
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asRecord = (value: unknown): Record<string, unknown> | undefined =>
  isRecord(value) ? value : undefined;
