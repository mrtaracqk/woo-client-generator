import { access, mkdtemp, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { generateWooSdk } from "./generate-woo-sdk";
import { writeWooSdkArtifacts } from "./woo-sdk-output";

const TEST_SOURCE = {
  namespace: "wc/v3",
  wooCommerceVersion: "9.9.7",
  wooCommerceVersionSource: "cli" as const,
  wordpressVersion: "6.8.1",
};

const TEST_NAMESPACE_DOCUMENT = {
  namespace: "wc/v3",
  routes: {
    "/wc/v3/products": {
      endpoints: [
        {
          methods: ["GET"],
          args: {
            page: {
              type: "integer",
            },
          },
        },
      ],
      schema: {
        items: {
          properties: {
            id: {
              type: "integer",
            },
          },
          type: "object",
        },
        type: "array",
      },
    },
  },
};

describe("generate-woo-sdk", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("writes only the generated SDK source tree during a one-pass run", async () => {
    const tempDirectory = await mkdtemp(
      path.join(os.tmpdir(), "woo-sdk-generate-"),
    );
    const outputDirectory = path.join(
      tempDirectory,
      "generated",
      "woo-sdk",
      "src",
    );
    const logger = createLogger();

    await generateWooSdk(
      {
        ...buildCliOptions(),
        outputDirectory,
      },
      {
        buildWooSdkArtifacts: vi.fn(async () => ({
          runtimeFiles: [
            {
              outputRelativePath: "core/http.ts",
              source: 'export const http = "runtime";\n',
            },
          ],
          sourceFiles: [
            {
              outputRelativePath: "index.ts",
              source: 'export const generated = "sdk";\n',
            },
          ],
          warnings: [],
        })),
        fetchOptionsDocuments: vi.fn(async () => ({
          documents: {},
          warnings: [],
          failures: [],
        })),
        fetchWordPressNamespaceDocument: vi.fn(async () => TEST_NAMESPACE_DOCUMENT),
        fetchWordPressRestIndex: vi.fn(async () => ({
          namespaces: ["wc/v3"],
        })),
        logger,
        resolveSnapshotSource: vi.fn(async () => TEST_SOURCE),
        writeWooSdkArtifacts,
      },
    );

    await expect(readFile(path.join(outputDirectory, "index.ts"), "utf8")).resolves.toBe(
      'export const generated = "sdk";\n',
    );
    await expect(
      readFile(path.join(outputDirectory, "core", "http.ts"), "utf8"),
    ).resolves.toBe('export const http = "runtime";\n');
    await expect(access(path.join(tempDirectory, "generated", "woo-rest"))).rejects.toThrow();
    expect(logger.error).not.toHaveBeenCalled();
  });

  it("logs optional OPTIONS warnings and schema warnings without failing", async () => {
    const logger = createLogger();
    const writeSpy = vi.fn(async () => ({
      fileCount: 2,
      outputDirectory: path.resolve(
        process.cwd(),
        "generated",
        "woo-sdk",
        "src",
      ),
    }));

    await generateWooSdk(buildCliOptions(), {
      buildWooSdkArtifacts: vi.fn(async () => ({
        runtimeFiles: [],
        sourceFiles: [],
        warnings: [
          {
            message: "Schema does not declare a supported type; using unknown.",
            path: "listProductsResponse.items.id",
          },
        ],
      })),
      fetchOptionsDocuments: vi.fn(async () => ({
        documents: {},
        warnings: [
          "[woo-rest snapshot] OPTIONS enrichment unavailable for /wc/v3/products: 404 Not Found",
        ],
        failures: [],
      })),
      fetchWordPressNamespaceDocument: vi.fn(async () => TEST_NAMESPACE_DOCUMENT),
      fetchWordPressRestIndex: vi.fn(async () => ({
        namespaces: ["wc/v3"],
      })),
      logger,
      resolveSnapshotSource: vi.fn(async () => TEST_SOURCE),
      writeWooSdkArtifacts: writeSpy,
    });

    expect(logger.warn).toHaveBeenCalledWith(
      "[woo-rest snapshot] OPTIONS enrichment unavailable for /wc/v3/products: 404 Not Found",
    );
    expect(logger.warn).toHaveBeenCalledWith(
      "Generated Woo SDK source with 1 schema warning(s):",
    );
    expect(logger.warn).toHaveBeenCalledWith(
      "- listProductsResponse.items.id: Schema does not declare a supported type; using unknown.",
    );
    expect(writeSpy).toHaveBeenCalledOnce();
  });

  it("fails generation when a required OPTIONS enrichment fails", async () => {
    const logger = createLogger();
    const writeSpy = vi.fn();

    await expect(
      generateWooSdk(buildCliOptions(), {
        buildWooSdkArtifacts: vi.fn(),
        fetchOptionsDocuments: vi.fn(async () => ({
          documents: {},
          warnings: [],
          failures: [
            "[woo-rest snapshot] OPTIONS enrichment unavailable for /wc/v3/orders: 403 Forbidden",
          ],
        })),
        fetchWordPressNamespaceDocument: vi.fn(
          async () => TEST_NAMESPACE_DOCUMENT,
        ),
        fetchWordPressRestIndex: vi.fn(async () => ({
          namespaces: ["wc/v3"],
        })),
        logger,
        resolveSnapshotSource: vi.fn(async () => TEST_SOURCE),
        writeWooSdkArtifacts: writeSpy,
      }),
    ).rejects.toThrow(
      "OPTIONS enrichment failed for 1 required route(s); refusing to generate degraded SDK",
    );

    expect(logger.error).toHaveBeenCalledWith(
      "[woo-rest snapshot] OPTIONS enrichment unavailable for /wc/v3/orders: 403 Forbidden",
    );
    expect(writeSpy).not.toHaveBeenCalled();
  });
});

const buildCliOptions = () => ({
  baseUrl: "http://fixture.test",
  namespace: "wc/v3",
  optionsRoutes: [],
  optionsStrategy: "missing" as const,
});

const createLogger = () => ({
  error: vi.fn(),
  log: vi.fn(),
  warn: vi.fn(),
});
