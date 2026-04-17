import path from "node:path";
import {
  renderWooSchemaZod,
  WooSchemaToZodWarning,
} from "./woo-schema-to-zod";
import {
  renderWooSchemaTypeScript,
  WooSchemaToTypeScriptWarning,
} from "./woo-schema-to-typescript";
import { WooSdkManifest, WooSdkOperation } from "./woo-sdk-manifest";
import {
  buildWooSdkSourceHeader,
  escapeComment,
  formatTypeScript,
  GeneratedWooSdkSourceFile,
  groupOperationsByResource,
} from "./woo-sdk-source";

export interface GeneratedWooSdkTypeArtifacts {
  modelFiles: GeneratedWooSdkSourceFile[];
  warnings: (WooSchemaToTypeScriptWarning | WooSchemaToZodWarning)[];
}

export const buildWooSdkTypeArtifacts = async (
  manifest: WooSdkManifest,
): Promise<GeneratedWooSdkTypeArtifacts> => {
  const warnings: (WooSchemaToTypeScriptWarning | WooSchemaToZodWarning)[] = [];
  const operationGroups = groupOperationsByResource(manifest.operations);
  const modelFiles = await Promise.all(
    operationGroups.map(async ({ operations, resourceGroup }) => ({
      outputRelativePath: path.posix.join("models", `${resourceGroup}.ts`),
      source: await buildModelModuleSource(manifest, operations, warnings),
    })),
  );

  modelFiles.push({
    outputRelativePath: path.posix.join("models", "index.ts"),
    source: await buildModelsIndexSource(manifest, operationGroups),
  });

  return {
    modelFiles,
    warnings,
  };
};

const buildModelModuleSource = async (
  manifest: WooSdkManifest,
  operations: WooSdkOperation[],
  warnings: (WooSchemaToTypeScriptWarning | WooSchemaToZodWarning)[],
): Promise<string> => {
  const declarations = operations.flatMap((operation) =>
    buildOperationDeclarations(operation, warnings),
  );
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

import { z } from "zod";

${declarations.join("\n\n")}
`;

  return formatTypeScript(rawSource);
};

const buildModelsIndexSource = async (
  manifest: WooSdkManifest,
  operationGroups: ReturnType<typeof groupOperationsByResource>,
): Promise<string> => {
  const exports = operationGroups.map(
    ({ resourceGroup }) => `export * from "./${resourceGroup}";`,
  );
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

${exports.join("\n")}
`;

  return formatTypeScript(rawSource);
};

const buildOperationDeclarations = (
  operation: WooSdkOperation,
  warnings: (WooSchemaToTypeScriptWarning | WooSchemaToZodWarning)[],
): string[] => {
  const declarations: string[] = [];

  if (operation.pathParamsTypeName) {
    declarations.push(
      buildTypeAliasDeclaration({
        description: `${operation.method} ${operation.routeTemplate} path parameters.`,
        path: `${operation.operationId}.pathParams`,
        schema: operation.pathParamsSchema,
        typeName: operation.pathParamsTypeName,
        warnings,
      }),
    );
  }

  if (operation.queryTypeName && operation.querySchema) {
    declarations.push(
      buildTypeAliasDeclaration({
        description: `${operation.method} ${operation.routeTemplate} query parameters.`,
        path: `${operation.operationId}.query`,
        schema: operation.querySchema,
        typeName: operation.queryTypeName,
        warnings,
      }),
    );
  }

  if (operation.bodyTypeName && operation.bodySchema) {
    declarations.push(
      buildTypeAliasDeclaration({
        description: `${operation.method} ${operation.routeTemplate} request body.`,
        path: `${operation.operationId}.body`,
        schema: operation.bodySchema,
        typeName: operation.bodyTypeName,
        warnings,
      }),
    );
  }

  declarations.push(
    buildTypeAliasDeclaration({
      description: buildResponseDescription(operation),
      path: `${operation.operationId}.response`,
      schema: operation.responseSchema,
      typeName: operation.responseTypeName,
      warnings,
      wrapAsArray: operation.responseIsArray,
    }),
  );

  return declarations;
};

/** e.g. CouponGetPathParams -> couponGetPathParamsSchema */
const typeNameToSchemaVarName = (typeName: string): string => {
  if (typeName.length === 0) return "schema";
  const first = typeName[0];
  const rest = typeName.slice(1);
  return `${first.toLowerCase()}${rest}Schema`;
};

const buildTypeAliasDeclaration = ({
  description,
  path,
  schema,
  typeName,
  warnings,
  wrapAsArray = false,
}: {
  description: string;
  path: string;
  schema: Record<string, unknown> | undefined;
  typeName: string;
  warnings: (WooSchemaToTypeScriptWarning | WooSchemaToZodWarning)[];
  wrapAsArray?: boolean;
}): string => {
  const schemaVarName = typeNameToSchemaVarName(typeName);
  const warnOpt = { warnOnMissingSchema: schema !== undefined };

  const renderedTs = renderWooSchemaTypeScript(schema, path, warnOpt);
  warnings.push(...renderedTs.warnings);

  const renderedZod = renderWooSchemaZod(schema, path, warnOpt);
  warnings.push(...renderedZod.warnings);

  const zodExpr = wrapAsArray
    ? `z.array(${renderedZod.zod})`
    : renderedZod.zod;

  return `/**
 * ${escapeComment(description)}
 */
export const ${schemaVarName} = ${zodExpr};

export type ${typeName} = z.infer<typeof ${schemaVarName}>;`;
};

const buildResponseDescription = (operation: WooSdkOperation): string => {
  const baseDescription = `${operation.method} ${operation.routeTemplate} response body.`;

  if (!operation.responseDescription) {
    return baseDescription;
  }

  return `${baseDescription} ${operation.responseDescription}`;
};
