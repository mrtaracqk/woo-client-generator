import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { GeneratedWooOperationManifest } from "./woo-rest-manifest";
import { stringifyGeneratedOperationDefinitions } from "./woo-rest-generated-definitions";
import { resolveLatestWooGeneratedFileName } from "./woo-generated-artifact-files";
import { WOO_REST_GENERATED_DIRECTORY } from "./woo-rest-snapshot-artifacts";

interface CliOptions {
  inputPath?: string;
  outputPath?: string;
}

const DEFAULT_OUTPUT_PATH = path.resolve(
  process.cwd(),
  "src",
  "woo-core",
  "operation-registry",
  "generated",
  "generated-operation-definitions.ts",
);

const main = async (): Promise<void> => {
  const options = parseCliOptions();
  const inputPath = await resolveInputPath(options.inputPath);
  const outputPath = path.resolve(
    process.cwd(),
    options.outputPath ?? DEFAULT_OUTPUT_PATH,
  );
  const manifest = JSON.parse(
    await readFile(inputPath, "utf8"),
  ) as GeneratedWooOperationManifest;
  const source = stringifyGeneratedOperationDefinitions(manifest);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, source, "utf8");

  console.log(
    `Saved ${manifest.operations.length} generated registry definitions to ${path.relative(process.cwd(), outputPath)}`,
  );
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
      parsed.values.input ?? process.env.WOO_REST_OPERATION_DEFINITIONS_INPUT,
    outputPath: parsed.values.output,
  };
};

const resolveInputPath = async (inputPath?: string): Promise<string> => {
  if (inputPath) {
    return path.resolve(process.cwd(), inputPath);
  }

  const entries = await readdir(WOO_REST_GENERATED_DIRECTORY);
  const manifestFileName = resolveLatestWooGeneratedFileName(
    entries,
    ".manifest.json",
  );

  if (!manifestFileName) {
    throw new Error(
      `No Woo REST manifest files found in ${path.relative(process.cwd(), WOO_REST_GENERATED_DIRECTORY)}`,
    );
  }

  return path.join(WOO_REST_GENERATED_DIRECTORY, manifestFileName);
};

void main().catch((error: unknown) => {
  const message =
    error instanceof Error
      ? error.message
      : "Unknown Woo registry definition generation error";

  console.error(message);
  process.exitCode = 1;
});
