import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import {
  buildWooRestSnapshot,
  stringifyWooRestSnapshot,
} from "./woo-rest-snapshot";
import { buildWooRestSnapshotOutputPath } from "./woo-rest-snapshot-artifacts";
import {
  DEFAULT_NAMESPACE,
  fetchOptionsDocuments,
  fetchWordPressNamespaceDocument,
  fetchWordPressRestIndex,
  isWooRestOptionsStrategy,
  normalizeBaseUrl,
  resolveSnapshotSource,
  validateNamespaceAvailability,
  WooRestOptionsStrategy,
} from "./woo-rest-snapshot-fetch";

interface CliOptions {
  baseUrl: string;
  namespace: string;
  outputPath?: string;
  optionsRoutes: string[];
  optionsStrategy: WooRestOptionsStrategy;
  wooVersion?: string;
}

const main = async (): Promise<void> => {
  loadLocalEnvFiles();

  const options = parseCliOptions();
  const baseUrl = normalizeBaseUrl(options.baseUrl);
  const rootIndex = await fetchWordPressRestIndex(baseUrl);
  const namespaceDocument = await fetchWordPressNamespaceDocument(
    baseUrl,
    options.namespace,
  );

  validateNamespaceAvailability(
    rootIndex,
    namespaceDocument,
    options.namespace,
  );

  const optionsResult = await fetchOptionsDocuments(
    baseUrl,
    namespaceDocument,
    options,
  );
  const source = await resolveSnapshotSource({
    baseUrl,
    namespace: options.namespace,
    rootIndex,
    wooVersion: options.wooVersion,
  });

  for (const warning of optionsResult.warnings) {
    console.warn(warning);
  }

  const snapshot = buildWooRestSnapshot({
    source,
    namespaceDocument,
    optionsDocuments: optionsResult.documents,
  });
  const outputPath = path.resolve(
    process.cwd(),
    options.outputPath ?? buildWooRestSnapshotOutputPath(source),
  );

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, stringifyWooRestSnapshot(snapshot), "utf8");

  console.log(
    `Saved ${snapshot.routes.length} Woo REST routes to ${path.relative(process.cwd(), outputPath)}`,
  );
};

const loadLocalEnvFiles = (): void => {
  try {
    process.loadEnvFile(".env");
  } catch (error) {
    ignoreMissingEnvFile(error);
  }

  try {
    process.loadEnvFile(".env.local");
  } catch (error) {
    ignoreMissingEnvFile(error);
  }
};

const parseCliOptions = (): CliOptions => {
  const parsed = parseArgs({
    allowPositionals: false,
    options: {
      "base-url": {
        type: "string",
      },
      namespace: {
        type: "string",
      },
      output: {
        type: "string",
      },
      "options-route": {
        type: "string",
        multiple: true,
      },
      "options-strategy": {
        type: "string",
        default: "missing",
      },
      "woo-version": {
        type: "string",
      },
    },
  });
  const optionsStrategy = parsed.values["options-strategy"];

  if (!isWooRestOptionsStrategy(optionsStrategy)) {
    throw new Error(
      `Unsupported --options-strategy value: ${String(optionsStrategy)}`,
    );
  }

  const baseUrl =
    parsed.values["base-url"] ??
    process.env.WOO_REST_SNAPSHOT_BASE_URL ??
    process.env.WOO_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "Missing base URL. Pass --base-url or set WOO_REST_SNAPSHOT_BASE_URL.",
    );
  }

  return {
    baseUrl,
    namespace:
      parsed.values.namespace ??
      process.env.WOO_REST_SNAPSHOT_NAMESPACE ??
      DEFAULT_NAMESPACE,
    outputPath: parsed.values.output,
    optionsRoutes: parsed.values["options-route"] ?? [],
    optionsStrategy,
    wooVersion:
      parsed.values["woo-version"] ?? process.env.WOO_REST_SNAPSHOT_WOO_VERSION,
  };
};

const ignoreMissingEnvFile = (error: unknown): void => {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "ENOENT"
  ) {
    return;
  }

  throw error;
};

void main().catch((error: unknown) => {
  console.error((error as Error).message);
  process.exitCode = 1;
});
