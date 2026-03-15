import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { resolveLatestWooGeneratedFileName } from "./woo-generated-artifact-files";
import { WOO_REST_GENERATED_DIRECTORY } from "./woo-rest-snapshot-artifacts";
import { buildWooSdkArtifacts } from "./woo-sdk";
import { WOO_SDK_GENERATED_SRC_DIRECTORY } from "./woo-sdk-artifacts";
import { WooSdkManifest } from "./woo-sdk-manifest";

interface CliOptions {
  inputPath?: string;
  outputDirectory?: string;
}

const main = async (): Promise<void> => {
  const options = parseCliOptions();
  const inputPath = await resolveInputPath(options.inputPath);
  const outputDirectory = path.resolve(
    process.cwd(),
    options.outputDirectory ?? WOO_SDK_GENERATED_SRC_DIRECTORY,
  );
  const manifest = JSON.parse(
    await readFile(inputPath, "utf8"),
  ) as WooSdkManifest;
  const artifacts = await buildWooSdkArtifacts(manifest);
  const filesToWrite = [
    ...artifacts.sourceFiles.map((file) => ({
      outputPath: path.join(outputDirectory, file.outputRelativePath),
      source: file.source,
    })),
    ...artifacts.runtimeFiles.map((file) => ({
      outputPath: path.join(outputDirectory, file.outputRelativePath),
      source: file.source,
    })),
  ];

  await rm(outputDirectory, { force: true, recursive: true });

  await Promise.all(
    filesToWrite.map(async (file) => {
      await mkdir(path.dirname(file.outputPath), { recursive: true });
      await writeFile(file.outputPath, file.source, "utf8");
    }),
  );

  console.log(
    `Saved ${filesToWrite.length} Woo SDK source files to ${path.relative(process.cwd(), outputDirectory)}`,
  );

  if (artifacts.warnings.length > 0) {
    console.warn(
      `Generated Woo SDK source with ${artifacts.warnings.length} schema warning(s):`,
    );

    for (const warning of artifacts.warnings) {
      console.warn(`- ${warning.path}: ${warning.message}`);
    }
  }
};

const parseCliOptions = (): CliOptions => {
  const parsed = parseArgs({
    allowPositionals: false,
    options: {
      input: {
        type: "string",
      },
      output: {
        type: "string",
      },
    },
  });

  return {
    inputPath:
      parsed.values.input ??
      process.env.WOO_SDK_INPUT ??
      process.env.WOO_SDK_TYPES_INPUT,
    outputDirectory: parsed.values.output,
  };
};

const resolveInputPath = async (inputPath?: string): Promise<string> => {
  if (inputPath) {
    return path.resolve(process.cwd(), inputPath);
  }

  const entries = await readdir(WOO_REST_GENERATED_DIRECTORY);
  const manifestFileName = resolveLatestWooGeneratedFileName(
    entries,
    ".sdk-manifest.json",
  );

  if (!manifestFileName) {
    throw new Error(
      `No Woo SDK manifest files found in ${path.relative(process.cwd(), WOO_REST_GENERATED_DIRECTORY)}`,
    );
  }

  return path.join(WOO_REST_GENERATED_DIRECTORY, manifestFileName);
};

void main().catch((error: unknown) => {
  const message =
    error instanceof Error ? error.message : "Unknown Woo SDK generation error";

  console.error(message);
  process.exitCode = 1;
});
