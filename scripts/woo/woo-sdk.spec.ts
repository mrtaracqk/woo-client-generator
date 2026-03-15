import { buildWooSdkArtifacts } from "./woo-sdk";
import { WooSdkManifest } from "./woo-sdk-manifest";

describe("woo-sdk", () => {
  it("emits a typed client and runtime files from the SDK manifest", async () => {
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
          functionName: "getProduct",
          internalKey: "PRODUCT_GET",
          kind: "read",
          method: "GET",
          operationId: "getProduct",
          pathParamsSchema: {
            additionalProperties: false,
            properties: {
              id: {
                type: "integer",
              },
            },
            required: ["id"],
            type: "object",
          },
          pathParamsTypeName: "ProductGetPathParams",
          querySchema: {
            additionalProperties: false,
            properties: {
              context: {
                enum: ["view", "edit"],
                type: "string",
              },
            },
            type: "object",
          },
          queryTypeName: "ProductGetQuery",
          resourceGroup: "products",
          responseIsArray: false,
          responseSchema: {
            type: "object",
          },
          responseTypeName: "ProductGetResponse",
          routeTemplate: "/products/{id}",
          typeBaseName: "ProductGet",
        },
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
          responseIsArray: true,
          responseSchema: {
            items: {
              type: "object",
            },
            type: "array",
          },
          responseTypeName: "ProductsListResponse",
          routeTemplate: "/products",
          typeBaseName: "ProductsList",
        },
        {
          authRequirement: "unknown",
          functionName: "listOrders",
          internalKey: "ORDERS_LIST",
          kind: "list",
          method: "GET",
          operationId: "listOrders",
          pathParamsSchema: {
            additionalProperties: false,
            properties: {},
            type: "object",
          },
          resourceGroup: "orders",
          responseIsArray: true,
          responseSchema: {
            items: {
              type: "object",
            },
            type: "array",
          },
          responseTypeName: "OrdersListResponse",
          routeTemplate: "/orders",
          typeBaseName: "OrdersList",
        },
      ],
    };

    const artifacts = await buildWooSdkArtifacts(manifest);

    expect(artifacts.warnings).toEqual([]);
    expect(artifacts.sourceFiles.map((file) => file.outputRelativePath)).toEqual([
      "index.ts",
      "client.ts",
      "models/orders.ts",
      "models/products.ts",
      "models/index.ts",
      "operations/orders.ts",
      "operations/products.ts",
      "operations/index.ts",
    ]);
    expect(findGeneratedFile(artifacts, "client.ts")).toContain(
      "products: ProductsModule;",
    );
    expect(findGeneratedFile(artifacts, "client.ts")).toContain(
      "orders: OrdersModule;",
    );
    expect(findGeneratedFile(artifacts, "operations/products.ts")).toContain(
      "export interface ProductGetRequest extends WooRequestOptions",
    );
    expect(findGeneratedFile(artifacts, "operations/products.ts")).toContain(
      "getProduct(request: ProductGetRequest): Promise<ProductGetResponse>;",
    );
    expect(findGeneratedFile(artifacts, "operations/products.ts")).toContain(
      'routeTemplate: "/products/{id}"',
    );
    expect(findGeneratedFile(artifacts, "operations/products.ts")).toContain(
      "listProducts(request?: ProductsListRequest): Promise<ProductsListResponse>;",
    );
    expect(findGeneratedFile(artifacts, "operations/index.ts")).toContain(
      'export * from "./orders";',
    );
    expect(findGeneratedFile(artifacts, "operations/index.ts")).toContain(
      'export * from "./products";',
    );
    expect(
      artifacts.runtimeFiles.map((file) => file.outputRelativePath),
    ).toEqual([
      "core/auth.ts",
      "core/http.ts",
      "core/serialize.ts",
      "core/types.ts",
    ]);
  });
});

const findGeneratedFile = (
  artifacts: Awaited<ReturnType<typeof buildWooSdkArtifacts>>,
  outputRelativePath: string,
): string => {
  const file = artifacts.sourceFiles.find(
    (generatedFile) => generatedFile.outputRelativePath === outputRelativePath,
  );

  if (!file) {
    throw new Error(`Missing generated file ${outputRelativePath}`);
  }

  return file.source;
};
