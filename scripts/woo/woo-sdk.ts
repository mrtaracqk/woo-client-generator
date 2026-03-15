import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  buildWooSdkTypeArtifacts,
  GeneratedWooSdkTypeArtifacts,
} from "./woo-sdk-types";
import {
  buildWooSdkClientArtifacts,
  GeneratedWooSdkClientArtifacts,
} from "./woo-sdk-client";
import {
  buildWooSdkSourceHeader,
  formatTypeScript,
  GeneratedWooSdkSourceFile,
} from "./woo-sdk-source";
import { WooSdkManifest } from "./woo-sdk-manifest";

const WOO_SDK_RUNTIME_SOURCE_DIRECTORY = path.resolve(
  process.cwd(),
  "src",
  "woo-sdk-runtime",
);

export interface GeneratedWooSdkArtifacts {
  runtimeFiles: GeneratedWooSdkRuntimeFile[];
  sourceFiles: GeneratedWooSdkSourceFile[];
  warnings: GeneratedWooSdkTypeArtifacts["warnings"];
}

export interface GeneratedWooSdkRuntimeFile extends GeneratedWooSdkSourceFile {}

export const buildWooSdkArtifacts = async (
  manifest: WooSdkManifest,
): Promise<GeneratedWooSdkArtifacts> => {
  const [typeArtifacts, clientArtifacts, runtimeFiles, indexSource] =
    await Promise.all([
      buildWooSdkTypeArtifacts(manifest),
      buildWooSdkClientArtifacts(manifest),
      loadWooSdkRuntimeFiles(),
      buildWooSdkIndexSource(manifest),
    ]);

  return {
    runtimeFiles,
    sourceFiles: buildSourceFiles(indexSource, typeArtifacts, clientArtifacts),
    warnings: typeArtifacts.warnings,
  };
};

const buildSourceFiles = (
  indexSource: string,
  typeArtifacts: GeneratedWooSdkTypeArtifacts,
  clientArtifacts: GeneratedWooSdkClientArtifacts,
): GeneratedWooSdkSourceFile[] => [
  {
    outputRelativePath: "index.ts",
    source: indexSource,
  },
  {
    outputRelativePath: "client.ts",
    source: clientArtifacts.clientSource,
  },
  ...typeArtifacts.modelFiles,
  ...clientArtifacts.operationFiles,
];

const buildWooSdkIndexSource = async (
  manifest: WooSdkManifest,
): Promise<string> => {
  const rawSource = `${buildWooSdkSourceHeader(manifest)}

export * from "./client";
export * from "./core/http";
export * from "./core/types";
export * from "./models";
export * from "./operations";
`;

  return formatTypeScript(rawSource);
};

const loadWooSdkRuntimeFiles = async (): Promise<
  GeneratedWooSdkRuntimeFile[]
> =>
  Promise.all(
    ["auth.ts", "http.ts", "serialize.ts", "types.ts"].map(
      async (fileName): Promise<GeneratedWooSdkRuntimeFile> => ({
        outputRelativePath: path.posix.join("core", fileName),
        source: await readFile(
          path.join(WOO_SDK_RUNTIME_SOURCE_DIRECTORY, fileName),
          "utf8",
        ),
      }),
    ),
  );
