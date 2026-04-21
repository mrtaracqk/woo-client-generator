import { WooSdkManifest } from "./woo-sdk-manifest";
import { buildWooSdkTypeArtifacts } from "./woo-sdk-types";

describe("woo-sdk-types", () => {
  it("emits TypeScript models from the SDK manifest", async () => {
    const manifest: WooSdkManifest = {
      source: {
        namespace: "wc/v3",
        wooCommerceVersion: "9.9.7",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.8.1",
      },
      operations: [
        {
          authRequirement: "unknown",
          functionName: "listProducts",
          internalKey: "PRODUCTS_LIST",
          kind: "list",
          method: "GET",
          operationId: "listProducts",
          pathParamsSchema: {
            additionalProperties: false,
            properties: {},
            type: "object",
          },
          querySchema: {
            additionalProperties: false,
            properties: {
              page: {
                type: "integer",
              },
            },
            type: "object",
          },
          queryTypeName: "ProductsListQuery",
          resourceGroup: "products",
          responseDescription: "Product collection item schema.",
          responseIsArray: true,
          responseSchema: {
            properties: {
              id: {
                type: "integer",
              },
              name: {
                type: "string",
              },
            },
            type: "object",
          },
          responseTypeName: "ProductsListResponse",
          routeTemplate: "/products",
          typeBaseName: "ProductsList",
        },
        {
          authRequirement: "unknown",
          bodySchema: {
            additionalProperties: true,
            properties: {
              name: {
                type: "string",
              },
            },
            required: ["name"],
            type: "object",
          },
          bodyTypeName: "ProductsCreateBody",
          functionName: "createProduct",
          internalKey: "PRODUCTS_CREATE",
          kind: "create",
          method: "POST",
          operationId: "createProduct",
          pathParamsSchema: {
            additionalProperties: false,
            properties: {},
            type: "object",
          },
          resourceGroup: "products",
          responseIsArray: false,
          responseSchema: {
            type: "object",
          },
          responseTypeName: "ProductsCreateResponse",
          routeTemplate: "/products",
          typeBaseName: "ProductsCreate",
        },
      ],
    };

    const artifacts = await buildWooSdkTypeArtifacts(manifest);

    expect(artifacts.warnings).toEqual([]);
    expect(artifacts.modelFiles.map((file) => file.outputRelativePath)).toEqual(
      ["models/products.ts", "models/index.ts"],
    );
    expect(findGeneratedFile(artifacts, "models/index.ts")).toContain(
      'export * from "./products";',
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      'import { z } from "zod";',
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export const productsListQuerySchema = ",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export type ProductsListQuery = z.infer<typeof productsListQuerySchema>",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export const productsListResponseSchema = ",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export type ProductsListResponse = z.infer<typeof productsListResponseSchema>",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export const productsCreateBodySchema = ",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export type ProductsCreateBody = z.infer<typeof productsCreateBodySchema>",
    );
    expect(findGeneratedFile(artifacts, "models/products.ts")).toContain(
      "export const productsCreateResponseSchema = ",
    );
    const productsSource = findGeneratedFile(artifacts, "models/products.ts");
    expect(productsSource).toContain(
      "export type ProductsCreateResponse = z.infer<",
    );
    expect(productsSource).toContain("typeof productsCreateResponseSchema");
  });

  it("fails fast when any operation lacks a top-level response schema", async () => {
    const manifest: WooSdkManifest = {
      source: {
        namespace: "wc/v3",
        wooCommerceVersion: "9.9.7",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.8.1",
      },
      operations: [
        {
          authRequirement: "unknown",
          functionName: "listProductVariations",
          internalKey: "PRODUCT_VARIATIONS_LIST",
          kind: "list",
          method: "GET",
          operationId: "listProductVariations",
          pathParamsSchema: {
            additionalProperties: false,
            properties: {
              product_id: { type: "integer" },
            },
            required: ["product_id"],
            type: "object",
          },
          pathParamsTypeName: "ProductVariationsListPathParams",
          resourceGroup: "products",
          responseIsArray: true,
          responseTypeName: "ProductVariationsListResponse",
          routeTemplate: "/products/{product_id}/variations",
          typeBaseName: "ProductVariationsList",
        },
      ],
    };

    await expect(buildWooSdkTypeArtifacts(manifest)).rejects.toThrow(
      /PRODUCT_VARIATIONS_LIST/,
    );
  });
});

const findGeneratedFile = (
  artifacts: Awaited<ReturnType<typeof buildWooSdkTypeArtifacts>>,
  outputRelativePath: string,
): string => {
  const file = artifacts.modelFiles.find(
    (generatedFile) => generatedFile.outputRelativePath === outputRelativePath,
  );

  if (!file) {
    throw new Error(`Missing generated file ${outputRelativePath}`);
  }

  return file.source;
};
