import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { resolveLatestWooGeneratedFileName } from "./woo-generated-artifact-files";
import {
  buildWooRestSdkManifestOutputPath,
  WOO_REST_GENERATED_DIRECTORY,
} from "./woo-rest-snapshot-artifacts";
import { WooRestSnapshot } from "./woo-rest-snapshot";
import {
  buildWooSdkManifest,
  stringifyWooSdkManifest,
} from "./woo-sdk-manifest";

interface CliOptions {
  inputPath?: string;
  outputPath?: string;
}

const main = async (): Promise<void> => {
  const options = parseCliOptions();
  const inputPath = await resolveInputPath(options.inputPath);
  const snapshot = JSON.parse(
    await readFile(inputPath, "utf8"),
  ) as WooRestSnapshot;
  const outputPath = path.resolve(
    process.cwd(),
    options.outputPath ??
      buildWooRestSdkManifestOutputPath({
        namespace: snapshot.source.namespace,
        wooCommerceVersion: snapshot.source.wooCommerceVersion,
      }),
  );
  const manifest = buildWooSdkManifest(snapshot);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, stringifyWooSdkManifest(manifest), "utf8");

  console.log(
    `Saved ${manifest.operations.length} Woo SDK operations to ${path.relative(process.cwd(), outputPath)}`,
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
    inputPath: parsed.values.input ?? process.env.WOO_SDK_MANIFEST_INPUT,
    outputPath: parsed.values.output,
  };
};

const resolveInputPath = async (inputPath?: string): Promise<string> => {
  if (inputPath) {
    return path.resolve(process.cwd(), inputPath);
  }

  const entries = await readdir(WOO_REST_GENERATED_DIRECTORY);
  const snapshotFileName = resolveLatestWooGeneratedFileName(
    entries,
    ".snapshot.json",
  );

  if (!snapshotFileName) {
    throw new Error(
      `No Woo REST snapshot files found in ${path.relative(process.cwd(), WOO_REST_GENERATED_DIRECTORY)}`,
    );
  }

  return path.join(WOO_REST_GENERATED_DIRECTORY, snapshotFileName);
};

void main().catch((error: unknown) => {
  const message =
    error instanceof Error
      ? error.message
      : "Unknown SDK manifest generation error";

  console.error(message);
  process.exitCode = 1;
});
