import path from "node:path";
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
  warnings: WooSchemaToTypeScriptWarning[];
}

export const buildWooSdkTypeArtifacts = async (
  manifest: WooSdkManifest,
): Promise<GeneratedWooSdkTypeArtifacts> => {
  const warnings: WooSchemaToTypeScriptWarning[] = [];
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
  warnings: WooSchemaToTypeScriptWarning[],
): Promise<string> => {
  const declarations = operations.flatMap((operation) =>
    buildOperationDeclarations(operation, warnings),
  );
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

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
  warnings: WooSchemaToTypeScriptWarning[],
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
  warnings: WooSchemaToTypeScriptWarning[];
  wrapAsArray?: boolean;
}): string => {
  const rendered = renderWooSchemaTypeScript(schema, path, {
    warnOnMissingSchema: schema !== undefined,
  });
  warnings.push(...rendered.warnings);

  return `/**
 * ${escapeComment(description)}
 */
export type ${typeName} = ${wrapAsArray ? `Array<${rendered.typeScript}>` : rendered.typeScript};`;
};

const buildResponseDescription = (operation: WooSdkOperation): string => {
  const baseDescription = `${operation.method} ${operation.routeTemplate} response body.`;

  if (!operation.responseDescription) {
    return baseDescription;
  }

  return `${baseDescription} ${operation.responseDescription}`;
};
