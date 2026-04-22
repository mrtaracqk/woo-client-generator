import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { GeneratedWooSdkArtifacts } from "./woo-sdk";
import { WOO_SDK_GENERATED_SRC_DIRECTORY } from "./woo-sdk-artifacts";

export interface WriteWooSdkArtifactsInput {
  artifacts: GeneratedWooSdkArtifacts;
  outputDirectory?: string;
}

export interface WriteWooSdkArtifactsResult {
  fileCount: number;
  outputDirectory: string;
}

interface WritableWooSdkFile {
  outputPath: string;
  source: string;
}

export const writeWooSdkArtifacts = async ({
  artifacts,
  outputDirectory = WOO_SDK_GENERATED_SRC_DIRECTORY,
}: WriteWooSdkArtifactsInput): Promise<WriteWooSdkArtifactsResult> => {
  const resolvedOutputDirectory = path.resolve(process.cwd(), outputDirectory);
  const filesToWrite = buildWritableWooSdkFiles(
    artifacts,
    resolvedOutputDirectory,
  );

  await rm(resolvedOutputDirectory, { force: true, recursive: true });

  await Promise.all(
    filesToWrite.map(async (file) => {
      await mkdir(path.dirname(file.outputPath), { recursive: true });
      await writeFile(file.outputPath, file.source, "utf8");
    }),
  );

  return {
    fileCount: filesToWrite.length,
    outputDirectory: resolvedOutputDirectory,
  };
};

const buildWritableWooSdkFiles = (
  artifacts: GeneratedWooSdkArtifacts,
  outputDirectory: string,
): WritableWooSdkFile[] =>
  [...artifacts.sourceFiles, ...artifacts.runtimeFiles].map((file) => ({
    outputPath: path.join(outputDirectory, file.outputRelativePath),
    source: file.source,
  }));
