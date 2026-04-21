import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { buildWooSdkArtifacts } from "./woo-sdk";
import { WooSdkManifest } from "./woo-sdk-manifest";

const COMMITTED_SDK_MANIFEST_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "generated",
  "woo-rest",
  "woo-v9.9.7.sdk-manifest.json",
);
const COMMITTED_SDK_SOURCE_DIRECTORY = path.resolve(
  __dirname,
  "..",
  "..",
  "generated",
  "woo-sdk",
  "src",
);
const manifestHasResponseSchemaForEveryOperation = (): boolean => {
  if (!existsSync(COMMITTED_SDK_MANIFEST_PATH)) {
    return false;
  }

  const manifest = JSON.parse(
    readFileSync(COMMITTED_SDK_MANIFEST_PATH, "utf8"),
  ) as WooSdkManifest;

  return manifest.operations.every(
    (operation) => operation.responseSchema !== undefined,
  );
};

const itWithCommittedArtifacts =
  existsSync(COMMITTED_SDK_MANIFEST_PATH) &&
  existsSync(COMMITTED_SDK_SOURCE_DIRECTORY) &&
  manifestHasResponseSchemaForEveryOperation()
    ? it
    : it.skip;

describe("woo-sdk-types committed artifact", () => {
  itWithCommittedArtifacts(
    "matches the deterministic SDK source generated from the committed SDK manifest",
    async () => {
      const manifest = JSON.parse(
        readFileSync(COMMITTED_SDK_MANIFEST_PATH, "utf8"),
      ) as WooSdkManifest;
      const expectedArtifacts = await buildWooSdkArtifacts(manifest);
      const actualFiles = readGeneratedFileMap(COMMITTED_SDK_SOURCE_DIRECTORY);
      const expectedFiles = buildExpectedSdkFileMap(expectedArtifacts);

      expect(actualFiles).toEqual(expectedFiles);
      expect(expectedArtifacts.warnings).toEqual([
        {
          message: "Schema does not declare a supported type; using unknown.",
          path: "createShippingZoneMethod.body.properties.method_id",
        },
        {
          message:
            "Schema does not declare a supported type; using z.unknown().",
          path: "createShippingZoneMethod.body.properties.method_id",
        },
      ]);
    },
  );
});

const buildExpectedSdkFileMap = (
  artifacts: Awaited<ReturnType<typeof buildWooSdkArtifacts>>,
): Map<string, string> =>
  new Map(
    [...artifacts.sourceFiles, ...artifacts.runtimeFiles].map((file) => [
      normalizeRelativePath(file.outputRelativePath),
      file.source,
    ]),
  );

const readGeneratedFileMap = (
  directoryPath: string,
  rootDirectoryPath: string = directoryPath,
): Map<string, string> => {
  const entries = readdirSync(directoryPath, { withFileTypes: true });
  const files = new Map<string, string>();

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      const nestedFiles = readGeneratedFileMap(entryPath, rootDirectoryPath);

      for (const [relativePath, source] of nestedFiles) {
        files.set(relativePath, source);
      }

      continue;
    }

    files.set(
      normalizeRelativePath(path.relative(rootDirectoryPath, entryPath)),
      readFileSync(entryPath, "utf8"),
    );
  }

  return files;
};

const normalizeRelativePath = (relativePath: string): string =>
  relativePath.split(path.sep).join(path.posix.sep);
