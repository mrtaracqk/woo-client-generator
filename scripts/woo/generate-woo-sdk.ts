import path from "node:path";
import { parseArgs } from "node:util";
import { buildWooRestSnapshot, WooRestSnapshot } from "./woo-rest-snapshot";
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
import { buildWooSdkArtifacts, GeneratedWooSdkArtifacts } from "./woo-sdk";
import { WOO_SDK_GENERATED_SRC_DIRECTORY } from "./woo-sdk-artifacts";
import { buildWooSdkManifest, WooSdkManifest } from "./woo-sdk-manifest";
import { writeWooSdkArtifacts } from "./woo-sdk-output";

interface CliOptions {
  baseUrl: string;
  namespace: string;
  optionsRoutes: string[];
  optionsStrategy: WooRestOptionsStrategy;
  outputDirectory?: string;
  wooVersion?: string;
}

export interface GenerateWooSdkResult {
  artifacts: GeneratedWooSdkArtifacts;
  fileCount: number;
  manifest: WooSdkManifest;
  outputDirectory: string;
  snapshot: WooRestSnapshot;
}

interface GenerateWooSdkDependencies {
  buildWooSdkArtifacts: typeof buildWooSdkArtifacts;
  fetchOptionsDocuments: typeof fetchOptionsDocuments;
  fetchWordPressNamespaceDocument: typeof fetchWordPressNamespaceDocument;
  fetchWordPressRestIndex: typeof fetchWordPressRestIndex;
  logger: Pick<Console, "error" | "log" | "warn">;
  resolveSnapshotSource: typeof resolveSnapshotSource;
  writeWooSdkArtifacts: typeof writeWooSdkArtifacts;
}

const DEFAULT_GENERATE_WOO_SDK_DEPENDENCIES: GenerateWooSdkDependencies = {
  buildWooSdkArtifacts,
  fetchOptionsDocuments,
  fetchWordPressNamespaceDocument,
  fetchWordPressRestIndex,
  logger: console,
  resolveSnapshotSource,
  writeWooSdkArtifacts,
};

export const generateWooSdk = async (
  options: CliOptions,
  dependencies: Partial<GenerateWooSdkDependencies> = {},
): Promise<GenerateWooSdkResult> => {
  const resolvedDependencies = {
    ...DEFAULT_GENERATE_WOO_SDK_DEPENDENCIES,
    ...dependencies,
  } satisfies GenerateWooSdkDependencies;
  const baseUrl = normalizeBaseUrl(options.baseUrl);
  const rootIndex = await resolvedDependencies.fetchWordPressRestIndex(baseUrl);
  const namespaceDocument =
    await resolvedDependencies.fetchWordPressNamespaceDocument(
    baseUrl,
    options.namespace,
  );

  validateNamespaceAvailability(
    rootIndex,
    namespaceDocument,
    options.namespace,
  );

  const optionsResult = await resolvedDependencies.fetchOptionsDocuments(
    baseUrl,
    namespaceDocument,
    options,
  );
  const source = await resolvedDependencies.resolveSnapshotSource({
    baseUrl,
    namespace: options.namespace,
    rootIndex,
    wooVersion: options.wooVersion,
  });

  for (const warning of optionsResult.warnings) {
    resolvedDependencies.logger.warn(warning);
  }

  if (optionsResult.failures.length > 0) {
    for (const failure of optionsResult.failures) {
      resolvedDependencies.logger.error(failure);
    }

    throw new Error(
      `OPTIONS enrichment failed for ${optionsResult.failures.length} required route(s); refusing to generate degraded SDK`,
    );
  }

  const snapshot = buildWooRestSnapshot({
    source,
    namespaceDocument,
    optionsDocuments: optionsResult.documents,
  });
  const manifest = buildWooSdkManifest(snapshot);
  const artifacts = await resolvedDependencies.buildWooSdkArtifacts(manifest);
  const writeResult = await resolvedDependencies.writeWooSdkArtifacts({
    artifacts,
    outputDirectory: options.outputDirectory ?? WOO_SDK_GENERATED_SRC_DIRECTORY,
  });

  resolvedDependencies.logger.log(
    `Saved ${writeResult.fileCount} Woo SDK source files to ${path.relative(process.cwd(), writeResult.outputDirectory)}`,
  );

  if (artifacts.warnings.length > 0) {
    resolvedDependencies.logger.warn(
      `Generated Woo SDK source with ${artifacts.warnings.length} schema warning(s):`,
    );

    for (const warning of artifacts.warnings) {
      resolvedDependencies.logger.warn(`- ${warning.path}: ${warning.message}`);
    }
  }

  return {
    artifacts,
    fileCount: writeResult.fileCount,
    manifest,
    outputDirectory: writeResult.outputDirectory,
    snapshot,
  };
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
    optionsRoutes: parsed.values["options-route"] ?? [],
    optionsStrategy,
    outputDirectory: parsed.values.output,
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

function getCauseDetail(err: Error): string | null {
  const c = err.cause;
  if (!c || !(c instanceof Error)) return null;
  const code = (c as NodeJS.ErrnoException).code;
  if (code) return code;
  if (c.message && c.message !== err.message && c.message !== "fetch failed")
    return c.message;
  return getCauseDetail(c) ?? (c.message === "fetch failed" ? null : c.message);
}

const ECONNREFUSED_HINT =
  "No server at that URL. For local run: npm run woo:fixture:up && npm run woo:fixture:bootstrap";

const main = async (): Promise<void> => {
  loadLocalEnvFiles();
  await generateWooSdk(parseCliOptions());
};

const isExecutedAsScript = (): boolean => require.main === module;

if (isExecutedAsScript()) {
  void main().catch((error: unknown) => {
    const err = error as Error & { cause?: Error };
    const detail = getCauseDetail(err);
    const message =
      detail && !err.message.includes(detail)
        ? `${err.message} (${detail})`
        : err.message;
    console.error(message);
    if (message.includes("ECONNREFUSED")) {
      console.error(ECONNREFUSED_HINT);
    }
    process.exitCode = 1;
  });
}
