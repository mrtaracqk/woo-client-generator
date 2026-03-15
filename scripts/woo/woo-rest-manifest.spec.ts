import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { WooRestSnapshot } from "./woo-rest-snapshot";
import {
  buildWooRestManifest,
  stringifyWooRestManifest,
} from "./woo-rest-manifest";

const COMMITTED_SNAPSHOT_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "generated",
  "woo-rest",
  "woo-v9.9.7.snapshot.json",
);
const itWithCommittedSnapshot = existsSync(COMMITTED_SNAPSHOT_PATH)
  ? it
  : it.skip;

describe("woo-rest-manifest", () => {
  it("builds operation metadata for representative CRUD, nested, and batch routes", () => {
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

    const manifest = buildWooRestManifest(snapshot);

    expect(manifest.source.namespace).toBe("wc.v3");
    expect(
      manifest.operations.map((operation) => operation.operationKey),
    ).toEqual([
      "ORDERS_ACTIONS_SEND_EMAIL_CREATE",
      "ORDERS_REFUNDS_DELETE",
      "ORDERS_REFUNDS_READ",
      "PRODUCTS_BATCH",
      "PRODUCTS_BATCH_PUT_CUSTOM",
      "PRODUCTS_CREATE",
      "PRODUCTS_DELETE",
      "PRODUCTS_ID_POST_CUSTOM",
      "PRODUCTS_LIST",
      "PRODUCTS_READ",
      "PRODUCTS_UPDATE",
      "PRODUCTS_VARIATIONS_CREATE",
      "PRODUCTS_VARIATIONS_LIST",
    ]);

    expect(
      manifest.operations.find(
        (operation) => operation.operationKey === "PRODUCTS_READ",
      ),
    ).toEqual({
      operationKey: "PRODUCTS_READ",
      namespace: "wc.v3",
      routeTemplate: "/products/{id}",
      method: "GET",
      kind: "read",
      resourcePath: ["products"],
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
      querySchema: {
        additionalProperties: false,
        properties: {
          context: {
            type: "string",
          },
        },
        type: "object",
      },
      dangerous: false,
    });

    expect(
      manifest.operations.find(
        (operation) => operation.operationKey === "PRODUCTS_VARIATIONS_LIST",
      ),
    ).toMatchObject({
      routeTemplate: "/products/{product_id}/variations",
      resourcePath: ["products", "variations"],
      pathParamsSchema: {
        properties: {
          product_id: {
            type: "integer",
          },
        },
        required: ["product_id"],
      },
      querySchema: {
        properties: {
          search: {
            type: "string",
          },
        },
      },
    });

    expect(
      manifest.operations.find(
        (operation) => operation.operationKey === "PRODUCTS_BATCH",
      ),
    ).toMatchObject({
      method: "POST",
      kind: "batch",
      dangerous: true,
      bodySchema: {
        properties: {
          create: {
            items: {
              properties: {
                name: {
                  type: "string",
                },
                sku: {
                  type: "string",
                },
              },
            },
          },
          delete: {
            items: {
              type: "integer",
            },
          },
          update: {
            items: {
              properties: {
                id: {
                  type: "integer",
                },
                name: {
                  type: "string",
                },
                sku: {
                  type: "string",
                },
              },
              required: ["id"],
            },
          },
        },
      },
    });
  });

  it("preserves Woo route segment names when building operation keys", () => {
    const snapshot: WooRestSnapshot = {
      source: {
        namespace: "wc/v3",
        wooCommerceVersion: "10.5.1",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.9.1",
      },
      routes: [
        {
          route: "/wc/v3/order_statuses",
          methods: [
            {
              method: "GET",
              args: {},
            },
          ],
        },
        {
          route: "/wc/v3/taxes/classes",
          methods: [
            {
              method: "GET",
              args: {},
            },
          ],
        },
        {
          route: "/wc/v3/products/shipping_classes",
          methods: [
            {
              method: "GET",
              args: {},
            },
          ],
        },
      ],
    };

    expect(
      buildWooRestManifest(snapshot).operations.map(
        (operation) => operation.operationKey,
      ),
    ).toEqual([
      "ORDER_STATUSES_LIST",
      "PRODUCTS_SHIPPING_CLASSES_LIST",
      "TAXES_CLASSES_LIST",
    ]);
  });

  itWithCommittedSnapshot(
    "covers every committed snapshot route except the namespace index",
    () => {
      const snapshot = JSON.parse(
        readFileSync(COMMITTED_SNAPSHOT_PATH, "utf8"),
      ) as WooRestSnapshot;

      const manifest = buildWooRestManifest(snapshot);
      const routeTemplates = new Set(
        manifest.operations.map((operation) => operation.routeTemplate),
      );
      const expectedRouteTemplates = snapshot.routes
        .map((route) => route.route)
        .filter((route) => route !== "/wc/v3")
        .map((route) =>
          route
            .replace("/wc/v3", "")
            .replaceAll(/\(\?P<([^>]+)>[^)]+\)/g, "{$1}"),
        );

      expect([...routeTemplates]).toEqual(
        expect.arrayContaining(expectedRouteTemplates),
      );
    },
  );

  it("stringifies manifests with stable key ordering", () => {
    const json = stringifyWooRestManifest({
      source: {
        namespace: "wc.v3",
        wooCommerceVersion: "10.5.1",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.9.1",
      },
      operations: [
        {
          operationKey: "PRODUCTS_LIST",
          namespace: "wc.v3",
          routeTemplate: "/products",
          method: "GET",
          kind: "list",
          resourcePath: ["products"],
          pathParamsSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
          querySchema: {
            type: "object",
            properties: {
              zed: {
                type: "boolean",
              },
              alpha: {
                type: "boolean",
              },
            },
            additionalProperties: false,
          },
          dangerous: false,
        },
      ],
    });

    expect(json).toContain('"alpha"');
    expect(json).toContain('"zed"');
    expect(json.indexOf('"alpha"')).toBeLessThan(json.indexOf('"zed"'));
    expect(json.endsWith("\n")).toBe(true);
  });
});
