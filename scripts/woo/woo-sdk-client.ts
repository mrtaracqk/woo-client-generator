import path from "node:path";
import { WooSdkManifest, WooSdkOperation } from "./woo-sdk-manifest";
import {
  buildWooSdkSourceHeader,
  formatTypeScript,
  GeneratedWooSdkSourceFile,
  groupOperationsByResource,
  toPascalCaseIdentifier,
} from "./woo-sdk-source";

export interface GeneratedWooSdkClientArtifacts {
  clientSource: string;
  operationFiles: GeneratedWooSdkSourceFile[];
}

export const buildWooSdkClientArtifacts = async (
  manifest: WooSdkManifest,
): Promise<GeneratedWooSdkClientArtifacts> => {
  const operationGroups = groupOperationsByResource(manifest.operations);
  const operationFiles = await Promise.all(
    operationGroups.map(async ({ operations, resourceGroup }) => ({
      outputRelativePath: path.posix.join("operations", `${resourceGroup}.ts`),
      source: await buildOperationModuleSource(
        manifest,
        operations,
        resourceGroup,
      ),
    })),
  );

  operationFiles.push({
    outputRelativePath: path.posix.join("operations", "index.ts"),
    source: await buildOperationsIndexSource(manifest, operationGroups),
  });

  return {
    clientSource: await buildClientSource(manifest, operationGroups),
    operationFiles,
  };
};

const buildClientSource = async (
  manifest: WooSdkManifest,
  operationGroups: ReturnType<typeof groupOperationsByResource>,
): Promise<string> => {
  const moduleImports = operationGroups.flatMap(({ resourceGroup }) => {
    const moduleName = buildOperationsModuleName(resourceGroup);
    const modulePath = `./operations/${resourceGroup}`;

    return [
      `import { create${moduleName}Module } from "${modulePath}";`,
      `import type { ${moduleName}Module } from "${modulePath}";`,
    ];
  });
  const clientProperties = operationGroups.map(
    ({ resourceGroup }) =>
      `  ${resourceGroup}: ${buildOperationsModuleName(resourceGroup)}Module;`,
  );
  const clientAssignments = operationGroups.map(
    ({ resourceGroup }) =>
      `    ${resourceGroup}: create${buildOperationsModuleName(resourceGroup)}Module(execute),`,
  );
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

import { createWooRequestExecutor } from "./core/http";
import type { CreateWooClientConfig } from "./core/types";
${moduleImports.length > 0 ? `${moduleImports.join("\n")}\n` : ""}
export interface WooClient {
${clientProperties.join("\n")}
}

export const createWooClient = (config: CreateWooClientConfig): WooClient => {
  const execute = createWooRequestExecutor(config);

  return {
${clientAssignments.join("\n")}
  };
};
`;

  return formatTypeScript(rawSource);
};

const buildOperationModuleSource = async (
  manifest: WooSdkManifest,
  operations: WooSdkOperation[],
  resourceGroup: string,
): Promise<string> => {
  const requestTypes = operations.map(buildRequestTypeDeclaration);
  const moduleName = buildOperationsModuleName(resourceGroup);
  const modelImports = buildModelImports(operations);
  const interfaceMethods = operations.map(buildOperationMethodSignature);
  const operationFunctions = operations.map(buildOperationFunctionSource);
  const moduleAssignments = operations.map(
    (operation) =>
      `  ${operation.functionName}: (request) => ${operation.functionName}(execute, request),`,
  );
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

import type { WooRequestExecutor, WooRequestOptions } from "../core/types";
${
  modelImports.length > 0
    ? `import type {\n${modelImports
        .map((typeName) => `  ${typeName},`)
        .join("\n")}\n} from "../models/${resourceGroup}";\n`
    : ""
}
${requestTypes.join("\n\n")}

export interface ${moduleName}Module {
${interfaceMethods.map((line) => `  ${line}`).join("\n")}
}

${operationFunctions.join("\n\n")}

export const create${moduleName}Module = (
  execute: WooRequestExecutor,
): ${moduleName}Module => ({
${moduleAssignments.join("\n")}
});
`;

  return formatTypeScript(rawSource);
};

const buildOperationsIndexSource = async (
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

const buildModelImports = (operations: WooSdkOperation[]): string[] => {
  const imports = new Set<string>();

  for (const operation of operations) {
    imports.add(operation.responseTypeName);

    if (operation.pathParamsTypeName) {
      imports.add(operation.pathParamsTypeName);
    }

    if (operation.queryTypeName) {
      imports.add(operation.queryTypeName);
    }

    if (operation.bodyTypeName) {
      imports.add(operation.bodyTypeName);
    }
  }

  return [...imports].sort();
};

const buildRequestTypeDeclaration = (operation: WooSdkOperation): string => {
  const requestTypeName = `${operation.typeBaseName}Request`;
  const properties = [
    operation.pathParamsTypeName
      ? `path: ${operation.pathParamsTypeName};`
      : undefined,
    operation.queryTypeName ? `query?: ${operation.queryTypeName};` : undefined,
    operation.bodyTypeName ? `body?: ${operation.bodyTypeName};` : undefined,
  ].filter((value): value is string => Boolean(value));

  if (properties.length === 0) {
    return `export type ${requestTypeName} = WooRequestOptions;`;
  }

  return `export interface ${requestTypeName} extends WooRequestOptions {
${properties.map((property) => `  ${property}`).join("\n")}
}`;
};

const buildOperationMethodSignature = (operation: WooSdkOperation): string => {
  const requestTypeName = `${operation.typeBaseName}Request`;
  const requestParameter = buildRequestParameter(operation);

  return `${operation.functionName}(${requestParameter}): Promise<${operation.responseTypeName}>;`;
};

const buildOperationFunctionSource = (operation: WooSdkOperation): string => {
  const requestParameter = buildRequestParameter(operation);
  const requestAccessor = operation.pathParamsTypeName ? "request" : "request?";
  const requestFields = [
    `method: "${operation.method}"`,
    `routeTemplate: "${operation.routeTemplate}"`,
    operation.pathParamsTypeName ? "path: request.path" : undefined,
    operation.queryTypeName ? `query: ${requestAccessor}.query` : undefined,
    operation.bodyTypeName ? `body: ${requestAccessor}.body` : undefined,
    `headers: ${requestAccessor}.headers`,
    `signal: ${requestAccessor}.signal`,
  ].filter((value): value is string => Boolean(value));

  return `export const ${operation.functionName} = (
  execute: WooRequestExecutor,
  ${requestParameter},
): Promise<${operation.responseTypeName}> =>
  execute<${operation.responseTypeName}>({
    ${requestFields.join(",\n    ")}
  });`;
};

const buildRequestParameter = (operation: WooSdkOperation): string => {
  const requestTypeName = `${operation.typeBaseName}Request`;

  return operation.pathParamsTypeName
    ? `request: ${requestTypeName}`
    : `request?: ${requestTypeName}`;
};

const buildOperationsModuleName = (resourceGroup: string): string =>
  toPascalCaseIdentifier(resourceGroup);
