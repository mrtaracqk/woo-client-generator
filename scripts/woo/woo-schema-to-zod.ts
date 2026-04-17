export interface WooSchemaToZodWarning {
  message: string;
  path: string;
}

interface RenderState {
  seenWarnings: Set<string>;
  warnings: WooSchemaToZodWarning[];
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

export const renderWooSchemaZod = (
  schema: Record<string, unknown> | undefined,
  path = "$",
  options?: {
    warnOnMissingSchema?: boolean;
  },
): {
  zod: string;
  warnings: WooSchemaToZodWarning[];
} => {
  if (schema === undefined) {
    return {
      zod: "z.unknown()",
      warnings:
        options?.warnOnMissingSchema === false
          ? []
          : [
              {
                message: "Schema is missing or invalid; using z.unknown().",
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
    zod: renderSchema(schema, state, path),
    warnings: state.warnings,
  };
};

const renderSchema = (
  schema: Record<string, unknown> | undefined,
  state: RenderState,
  path: string,
): string => {
  if (!isRecord(schema)) {
    addWarning(state, path, "Schema is missing or invalid; using z.unknown().");
    return "z.unknown()";
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
        "union",
        `${keyword} must contain at least one schema; using z.unknown().`,
      );
    }
  }

  const allOfSchemas = schema.allOf;
  if (Array.isArray(allOfSchemas)) {
    return renderComposition(
      allOfSchemas,
      state,
      `${path}.allOf`,
      "intersection",
      "allOf must contain at least one schema; using z.unknown().",
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

  addWarning(state, path, "Schema does not declare a supported type; using z.unknown().");
  return "z.unknown()";
};

const renderEnum = (
  enumValues: unknown[],
  state: RenderState,
  path: string,
): string => {
  if (enumValues.length === 0) {
    addWarning(state, path, "Enum does not contain any values; using z.unknown().");
    return "z.unknown()";
  }

  const renderedValues = enumValues.map((value) => renderLiteralValue(value));

  if (renderedValues.some((value) => value === undefined)) {
    addWarning(
      state,
      path,
      "Enum contains non-literal values; using z.unknown() instead of an invalid union.",
    );
    return "z.unknown()";
  }

  const literals = renderedValues as string[];
  const allStrings = enumValues.every((v) => typeof v === "string");
  if (allStrings) {
    return `z.enum([${literals.join(", ")}])`;
  }
  return `z.union([${literals.map((lit) => `z.literal(${lit})`).join(", ")}])`;
};

const renderComposition = (
  schemas: unknown[],
  state: RenderState,
  path: string,
  kind: "union" | "intersection",
  emptyMessage: string,
): string => {
  if (schemas.length === 0) {
    addWarning(state, path, emptyMessage);
    return "z.unknown()";
  }

  const parts = schemas.map((schema, index) =>
    renderSchema(asRecord(schema), state, `${path}[${index}]`),
  );

  if (kind === "union") {
    return `z.union([${parts.join(", ")}])`;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  return parts.slice(1).reduce((acc, p) => `${acc}.and(${p})`, parts[0]);
};

const renderTypeUnion = (
  schema: Record<string, unknown>,
  rawTypes: unknown[],
  state: RenderState,
  path: string,
): string => {
  if (rawTypes.length === 0) {
    addWarning(state, path, "Type union is empty; using z.unknown().");
    return "z.unknown()";
  }

  const hasNull = rawTypes.includes("null");
  const rest = rawTypes.filter((t) => t !== "null") as string[];

  if (rest.some((t) => typeof t !== "string" || !SUPPORTED_SCHEMA_TYPES.has(t))) {
    addWarning(
      state,
      path,
      "Unsupported union member in type array; using z.unknown().",
    );
    return "z.unknown()";
  }

  if (rest.length === 0) {
    return "z.null()";
  }

  const variants: string[] = rest.map((rawType) =>
    renderByType(schema, rawType, state, path),
  );

  const base =
    variants.length === 1
      ? variants[0]
      : `z.union([${variants.join(", ")}])`;

  return hasNull ? `${base}.nullable()` : base;
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
      return "z.boolean()";
    case "date-time":
      return "z.string()";
    case "integer":
    case "number":
      return "z.number()";
    case "mixed":
      return "z.unknown()";
    case "null":
      return "z.null()";
    case "object":
      return renderObjectSchema(schema, state, path);
    case "string":
      return "z.string()";
    default:
      addWarning(
        state,
        path,
        `Unsupported schema type ${JSON.stringify(rawType)}; using z.unknown().`,
      );
      return "z.unknown()";
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
      "Tuple-style array schemas are not supported yet; using z.array(z.unknown()).",
    );
    return "z.array(z.unknown())";
  }

  const itemSchema = asRecord(items);
  if (!itemSchema) {
    return "z.array(z.unknown())";
  }

  const itemZod = renderSchema(itemSchema, state, `${path}.items`);
  return `z.array(${itemZod})`;
};

const renderObjectSchema = (
  schema: Record<string, unknown>,
  state: RenderState,
  path: string,
): string => {
  const properties = asRecord(schema.properties);
  const additionalProperties = schema.additionalProperties;
  const description = typeof schema.description === "string" ? schema.description : undefined;

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
        "additionalProperties must be a boolean or schema; using z.record(z.string(), z.unknown()).",
      );
    }
    return "z.record(z.string(), z.unknown())";
  }

  const required = new Set(readRequiredPropertyNames(schema.required));
  const entries = Object.entries(properties).map(([propertyName, propertySchema]) => {
    const key = renderObjectKey(propertyName);
    const propSchema = asRecord(propertySchema);
    const propDesc =
      propSchema && typeof propSchema.description === "string"
        ? propSchema.description
        : undefined;
    const rendered = renderSchema(
      propSchema,
      state,
      `${path}.properties.${propertyName}`,
    );
    const optional = required.has(propertyName) ? rendered : `${rendered}.optional()`;
    const withDesc = propDesc ? `${optional}.describe(${JSON.stringify(propDesc)})` : optional;
    return `${key}: ${withDesc}`;
  });

  let objectExpr = `z.object({ ${entries.join(", ")} })`;

  if (description) {
    objectExpr = `${objectExpr}.describe(${JSON.stringify(description)})`;
  }

  if (additionalProperties === true) {
    objectExpr = `${objectExpr}.passthrough()`;
  } else if (additionalProperties === false || additionalProperties === undefined) {
    objectExpr = `${objectExpr}.strict()`;
  } else if (isRecord(additionalProperties)) {
    const valueZod = renderSchema(
      additionalProperties,
      state,
      `${path}.additionalProperties`,
    );
    objectExpr = `${objectExpr}.catchall(${valueZod})`;
  } else {
    addWarning(
      state,
      `${path}.additionalProperties`,
      "additionalProperties must be a boolean or schema; ignoring invalid value.",
    );
  }

  return objectExpr;
};

const readRequiredPropertyNames = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
};

const renderObjectKey = (propertyName: string): string =>
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
