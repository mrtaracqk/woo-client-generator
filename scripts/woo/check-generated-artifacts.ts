import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import {
  buildWooRestManifest,
  GeneratedWooOperationManifest,
  stringifyWooRestManifest,
} from "./woo-rest-manifest";
import { resolveLatestWooGeneratedFileName } from "./woo-generated-artifact-files";
import { stringifyGeneratedOperationDefinitions } from "./woo-rest-generated-definitions";
import {
  buildWooRestSdkManifestOutputPath,
  WOO_REST_GENERATED_DIRECTORY,
} from "./woo-rest-snapshot-artifacts";
import { WooRestSnapshot } from "./woo-rest-snapshot";
import {
  WOO_SDK_GENERATED_SRC_DIRECTORY,
} from "./woo-sdk-artifacts";
import {
  buildWooSdkManifest,
  stringifyWooSdkManifest,
} from "./woo-sdk-manifest";
import { buildWooSdkArtifacts } from "./woo-sdk";
const GENERATED_DEFINITIONS_PATH = path.resolve(
  process.cwd(),
  "src",
  "woo-core",
  "operation-registry",
  "generated",
  "generated-operation-definitions.ts",
);

const main = async (): Promise<void> => {
  const snapshotPath = await resolveLatestGeneratedPath(".snapshot.json");
  const manifestPath = snapshotPath.replace(
    /\.snapshot\.json$/,
    ".manifest.json",
  );
  const snapshot = JSON.parse(
    await readFile(snapshotPath, "utf8"),
  ) as WooRestSnapshot;
  const manifest = buildWooRestManifest(snapshot);
  const expectedManifest = stringifyWooRestManifest(manifest);
  const actualManifest = await readFile(manifestPath, "utf8");

  assertArtifactsMatch({
    artifactName: "Woo REST manifest",
    actualContent: actualManifest,
    expectedContent: expectedManifest,
    outputPath: manifestPath,
    remedyCommand: "npm run generate:woo",
  });

  const sdkManifestPath = path.resolve(
    process.cwd(),
    buildWooRestSdkManifestOutputPath({
      namespace: snapshot.source.namespace,
      wooCommerceVersion: snapshot.source.wooCommerceVersion,
    }),
  );
  const sdkManifest = buildWooSdkManifest(snapshot);
  const expectedSdkManifest = stringifyWooSdkManifest(sdkManifest);
  const actualSdkManifest = await readFile(sdkManifestPath, "utf8");

  assertArtifactsMatch({
    artifactName: "Woo SDK manifest",
    actualContent: actualSdkManifest,
    expectedContent: expectedSdkManifest,
    outputPath: sdkManifestPath,
    remedyCommand: "npm run generate:woo",
  });

  const expectedSdk = await buildWooSdkArtifacts(sdkManifest);
  const actualSdkFiles = await readGeneratedFileMap(WOO_SDK_GENERATED_SRC_DIRECTORY);
  const expectedSdkFiles = buildExpectedSdkFileMap(expectedSdk);

  assertGeneratedFileMapMatches({
    actualFiles: actualSdkFiles,
    artifactName: "Woo SDK source tree",
    expectedFiles: expectedSdkFiles,
    outputDirectory: WOO_SDK_GENERATED_SRC_DIRECTORY,
    remedyCommand: "npm run generate:woo",
  });

  const expectedDefinitions = stringifyGeneratedOperationDefinitions(manifest);
  const actualDefinitions = await readFile(GENERATED_DEFINITIONS_PATH, "utf8");

  assertArtifactsMatch({
    artifactName: "generated operation definitions",
    actualContent: actualDefinitions,
    expectedContent: expectedDefinitions,
    outputPath: GENERATED_DEFINITIONS_PATH,
    remedyCommand: "npm run generate:woo",
  });

  const parsedManifest = JSON.parse(
    actualManifest,
  ) as GeneratedWooOperationManifest;
  console.log(
    `Verified Woo generated artifacts are up to date for WooCommerce ${parsedManifest.source.wooCommerceVersion}.`,
  );
};

const resolveLatestGeneratedPath = async (suffix: string): Promise<string> => {
  const entries = await readdir(WOO_REST_GENERATED_DIRECTORY);
  const fileName = resolveLatestWooGeneratedFileName(entries, suffix);

  if (!fileName) {
    throw new Error(
      `No generated Woo REST files ending with ${suffix} found in ${path.relative(process.cwd(), WOO_REST_GENERATED_DIRECTORY)}`,
    );
  }

  return path.join(WOO_REST_GENERATED_DIRECTORY, fileName);
};

const assertArtifactsMatch = ({
  artifactName,
  actualContent,
  expectedContent,
  outputPath,
  remedyCommand,
}: {
  artifactName: string;
  actualContent: string;
  expectedContent: string;
  outputPath: string;
  remedyCommand: string;
}): void => {
  if (actualContent === expectedContent) {
    return;
  }

  throw new Error(
    `${artifactName} is out of date: ${path.relative(process.cwd(), outputPath)}. Regenerate with \`${remedyCommand}\`.`,
  );
};

const assertGeneratedFileMapMatches = ({
  actualFiles,
  artifactName,
  expectedFiles,
  outputDirectory,
  remedyCommand,
}: {
  actualFiles: ReadonlyMap<string, string>;
  artifactName: string;
  expectedFiles: ReadonlyMap<string, string>;
  outputDirectory: string;
  remedyCommand: string;
}): void => {
  const actualPaths = [...actualFiles.keys()].sort();
  const expectedPaths = [...expectedFiles.keys()].sort();

  if (actualPaths.join("\n") !== expectedPaths.join("\n")) {
    throw new Error(
      `${artifactName} file set is out of date: ${path.relative(process.cwd(), outputDirectory)}. Regenerate with \`${remedyCommand}\`.`,
    );
  }

  for (const outputRelativePath of expectedPaths) {
    const actualContent = actualFiles.get(outputRelativePath);
    const expectedContent = expectedFiles.get(outputRelativePath);

    if (actualContent === expectedContent) {
      continue;
    }

    throw new Error(
      `${artifactName} is out of date: ${path.relative(process.cwd(), path.join(outputDirectory, outputRelativePath))}. Regenerate with \`${remedyCommand}\`.`,
    );
  }
};

const buildExpectedSdkFileMap = (
  artifacts: Awaited<ReturnType<typeof buildWooSdkArtifacts>>,
): Map<string, string> =>
  new Map(
    [...artifacts.sourceFiles, ...artifacts.runtimeFiles].map((file) => [
      normalizeRelativePath(file.outputRelativePath),
      file.source,
    ]),
  );

const readGeneratedFileMap = async (
  directoryPath: string,
  rootDirectoryPath: string = directoryPath,
): Promise<Map<string, string>> => {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const files = new Map<string, string>();

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      const nestedFiles = await readGeneratedFileMap(entryPath, rootDirectoryPath);

      for (const [relativePath, source] of nestedFiles) {
        files.set(relativePath, source);
      }

      continue;
    }

    files.set(
      normalizeRelativePath(path.relative(rootDirectoryPath, entryPath)),
      await readFile(entryPath, "utf8"),
    );
  }

  return files;
};

const normalizeRelativePath = (relativePath: string): string =>
  relativePath.split(path.sep).join(path.posix.sep);

void main().catch((error: unknown) => {
  const message =
    error instanceof Error
      ? error.message
      : "Unknown generated artifact verification error";

  console.error(message);
  process.exitCode = 1;
});
