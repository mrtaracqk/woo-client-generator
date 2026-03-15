import { WooRestSnapshot } from "./woo-rest-snapshot";
import { buildWooSdkManifest } from "./woo-sdk-manifest";

describe("woo-sdk-manifest", () => {
  it("builds deterministic SDK operations for CRUD, nested, batch, and custom routes", () => {
    const snapshot: WooRestSnapshot = {
      source: {
        namespace: "wc/v3",
        wooCommerceVersion: "10.5.1",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.9.1",
      },
      routes: [
        {
          route: "/wc/v3/products",
          methods: [
            {
              method: "GET",
              args: {
                page: {
                  required: false,
                  type: "integer",
                },
              },
              schema: {
                description: "Product collection item schema.",
                title: "product",
                type: "object",
              },
            },
            {
              method: "POST",
              args: {
                name: {
                  required: true,
                  type: "string",
                },
                sku: {
                  required: false,
                  type: "string",
                },
              },
              schema: {
                description: "Created product response.",
                title: "product",
                type: "object",
              },
            },
          ],
        },
        {
          route: "/wc/v3/products/(?P<id>[\\d]+)",
          methods: [
            {
              method: "GET",
              args: {
                context: {
                  required: false,
                  type: "string",
                },
              },
            },
            {
              method: "POST",
              args: {
                ignored: {
                  required: false,
                  type: "string",
                },
              },
            },
            {
              method: "PUT",
              args: {
                name: {
                  required: false,
                  type: "string",
                },
              },
            },
            {
              method: "DELETE",
              args: {
                force: {
                  required: false,
                  type: "boolean",
                },
              },
            },
          ],
        },
        {
          route: "/wc/v3/products/(?P<product_id>[\\d]+)/variations",
          methods: [
            {
              method: "GET",
              args: {
                search: {
                  required: false,
                  type: "string",
                },
              },
            },
            {
              method: "POST",
              args: {
                regular_price: {
                  required: false,
                  type: "string",
                },
              },
            },
          ],
        },
        {
          route: "/wc/v3/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)",
          methods: [
            {
              method: "GET",
              args: {
                context: {
                  required: false,
                  type: "string",
                },
              },
            },
            {
              method: "DELETE",
              args: {
                force: {
                  required: false,
                  type: "boolean",
                },
              },
            },
          ],
        },
        {
          route: "/wc/v3/products/batch",
          methods: [
            {
              method: "POST",
              args: {
                name: {
                  required: false,
                  type: "string",
                },
                sku: {
                  required: false,
                  type: "string",
                },
              },
              schema: {
                title: "batch",
                type: "object",
              },
            },
            {
              method: "PUT",
              args: {
                should_be_ignored: {
                  required: false,
                  type: "string",
                },
              },
            },
          ],
        },
        {
          route: "/wc/v3/orders/(?P<id>[\\d]+)/actions/send_email",
          methods: [
            {
              method: "POST",
              args: {
                email: {
                  required: true,
                  type: "string",
                },
              },
            },
          ],
        },
      ],
    };

    const manifest = buildWooSdkManifest(snapshot);

    expect(
      manifest.operations.map((operation) => operation.internalKey),
    ).toEqual([
      "ORDER_REFUND_DELETE",
      "ORDER_REFUND_GET",
      "ORDER_SEND_EMAIL",
      "PRODUCT_DELETE",
      "PRODUCT_GET",
      "PRODUCT_POST_CUSTOM",
      "PRODUCT_PUT_BATCH_CUSTOM",
      "PRODUCT_UPDATE",
      "PRODUCT_VARIATIONS_CREATE",
      "PRODUCT_VARIATIONS_LIST",
      "PRODUCTS_BATCH_UPDATE",
      "PRODUCTS_CREATE",
      "PRODUCTS_LIST",
    ]);

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCTS_LIST",
      ),
    ).toEqual({
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
        description: "Product collection item schema.",
        title: "product",
        type: "object",
      },
      responseTypeName: "ProductsListResponse",
      routeTemplate: "/products",
      typeBaseName: "ProductsList",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCTS_CREATE",
      ),
    ).toMatchObject({
      functionName: "createProduct",
      bodyTypeName: "ProductsCreateBody",
      responseDescription: "Created product response.",
      responseTypeName: "ProductsCreateResponse",
      typeBaseName: "ProductsCreate",
    });

    expect(
      manifest.operations.find((operation) => operation.internalKey === "PRODUCT_GET"),
    ).toMatchObject({
      functionName: "getProduct",
      pathParamsTypeName: "ProductGetPathParams",
      queryTypeName: "ProductGetQuery",
      resourceGroup: "products",
      routeTemplate: "/products/{id}",
      typeBaseName: "ProductGet",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCT_VARIATIONS_LIST",
      ),
    ).toMatchObject({
      functionName: "listProductVariations",
      resourceGroup: "products",
      routeTemplate: "/products/{product_id}/variations",
      typeBaseName: "ProductVariationsList",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "ORDER_REFUND_GET",
      ),
    ).toMatchObject({
      functionName: "getOrderRefund",
      resourceGroup: "orders",
      routeTemplate: "/orders/{order_id}/refunds/{id}",
      typeBaseName: "OrderRefundGet",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCTS_BATCH_UPDATE",
      ),
    ).toMatchObject({
      functionName: "batchUpdateProducts",
      bodyTypeName: "ProductsBatchUpdateBody",
      responseIsArray: false,
      routeTemplate: "/products/batch",
      typeBaseName: "ProductsBatchUpdate",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "ORDER_SEND_EMAIL",
      ),
    ).toMatchObject({
      bodyTypeName: "OrderSendEmailBody",
      functionName: "sendOrderEmail",
      operationId: "sendOrderEmail",
      resourceGroup: "orders",
      routeTemplate: "/orders/{id}/actions/send_email",
      typeBaseName: "OrderSendEmail",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCT_POST_CUSTOM",
      ),
    ).toMatchObject({
      functionName: "postProductCustom",
      routeTemplate: "/products/{id}",
      typeBaseName: "ProductPostCustom",
    });

    expect(
      manifest.operations.find(
        (operation) => operation.internalKey === "PRODUCT_PUT_BATCH_CUSTOM",
      ),
    ).toMatchObject({
      functionName: "putProductBatchCustom",
      routeTemplate: "/products/batch",
      typeBaseName: "ProductPutBatchCustom",
    });
  });
});
