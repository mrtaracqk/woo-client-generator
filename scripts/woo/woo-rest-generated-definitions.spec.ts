import { GeneratedWooOperationManifest } from "./woo-rest-manifest";
import {
  buildGeneratedRegistryOperationSpecs,
  stringifyGeneratedOperationDefinitions,
} from "./woo-rest-generated-definitions";

describe("woo-rest-generated-definitions", () => {
  const manifest: GeneratedWooOperationManifest = {
    source: {
      namespace: "wc.v3",
      wooCommerceVersion: "9.9.7",
      wooCommerceVersionSource: "readme.txt",
      wordpressVersion: "6.8.1",
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
          additionalProperties: false,
          properties: {},
          type: "object",
        },
        querySchema: {
          additionalProperties: false,
          properties: {
            search: {
              type: "string",
            },
          },
          type: "object",
        },
        dangerous: false,
      },
      {
        operationKey: "WEBHOOKS_CREATE",
        namespace: "wc.v3",
        routeTemplate: "/webhooks",
        method: "POST",
        kind: "create",
        resourcePath: ["webhooks"],
        pathParamsSchema: {
          additionalProperties: false,
          properties: {},
          type: "object",
        },
        bodySchema: {
          additionalProperties: false,
          properties: {
            consumer_key: {
              type: "string",
            },
            secret: {
              type: "string",
            },
          },
          required: ["secret"],
          type: "object",
        },
        dangerous: true,
      },
      {
        operationKey: "PRODUCTS_DELETE",
        namespace: "wc.v3",
        routeTemplate: "/products/{id}",
        method: "DELETE",
        kind: "delete",
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
            force: {
              type: "boolean",
            },
          },
          type: "object",
        },
        dangerous: true,
      },
      {
        operationKey: "SETTINGS_BATCH",
        namespace: "wc.v3",
        routeTemplate: "/settings/batch",
        method: "POST",
        kind: "batch",
        resourcePath: ["settings"],
        pathParamsSchema: {
          additionalProperties: false,
          properties: {},
          type: "object",
        },
        bodySchema: {
          additionalProperties: false,
          properties: {
            update: {
              type: "array",
            },
          },
          type: "object",
        },
        dangerous: true,
      },
      {
        operationKey: "SETTINGS_BATCH",
        namespace: "wc.v3",
        routeTemplate: "/settings/{group_id}/batch",
        method: "POST",
        kind: "batch",
        resourcePath: ["settings"],
        pathParamsSchema: {
          additionalProperties: false,
          properties: {
            group_id: {
              type: "string",
            },
          },
          required: ["group_id"],
          type: "object",
        },
        bodySchema: {
          additionalProperties: false,
          properties: {
            update: {
              type: "array",
            },
          },
          type: "object",
        },
        dangerous: true,
      },
    ],
  };

  it("builds deterministic generated registry specs from a manifest", () => {
    expect(buildGeneratedRegistryOperationSpecs(manifest)).toEqual([
      {
        toolName: "wc.v3.products_list",
        title: "Products List",
        description: "Generated WooCommerce wc.v3 operation for GET /products.",
        operationKey: "PRODUCTS_LIST",
        method: "GET",
        routeTemplate: "/products",
        querySchema: {
          additionalProperties: false,
          properties: {
            search: {
              type: "string",
            },
          },
          type: "object",
        },
      },
      {
        toolName: "wc.v3.webhooks_create",
        title: "Webhooks Create",
        description:
          "Generated WooCommerce wc.v3 operation for POST /webhooks.",
        operationKey: "WEBHOOKS_CREATE",
        method: "POST",
        routeTemplate: "/webhooks",
        bodySchema: {
          additionalProperties: false,
          properties: {
            consumer_key: {
              type: "string",
            },
            secret: {
              type: "string",
            },
          },
          required: ["secret"],
          type: "object",
        },
        sensitiveFields: ["consumer_key", "secret"],
      },
      {
        toolName: "wc.v3.products_delete",
        title: "Products Delete",
        description:
          "Generated WooCommerce wc.v3 operation for DELETE /products/{id}.",
        operationKey: "PRODUCTS_DELETE",
        method: "DELETE",
        routeTemplate: "/products/{id}",
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
            force: {
              type: "boolean",
            },
          },
          type: "object",
        },
      },
      {
        toolName: "wc.v3.settings_batch",
        title: "Settings Batch",
        description:
          "Generated WooCommerce wc.v3 operation for POST /settings/batch.",
        operationKey: "SETTINGS_BATCH",
        method: "POST",
        routeTemplate: "/settings/batch",
        bodySchema: {
          additionalProperties: false,
          properties: {
            update: {
              type: "array",
            },
          },
          type: "object",
        },
      },
      {
        toolName: "wc.v3.settings_group_id_batch",
        title: "Settings Group Id Batch",
        description:
          "Generated WooCommerce wc.v3 operation for POST /settings/{group_id}/batch.",
        operationKey: "SETTINGS_GROUP_ID_BATCH",
        method: "POST",
        routeTemplate: "/settings/{group_id}/batch",
        pathParamsSchema: {
          additionalProperties: false,
          properties: {
            group_id: {
              type: "string",
            },
          },
          required: ["group_id"],
          type: "object",
        },
        bodySchema: {
          additionalProperties: false,
          properties: {
            update: {
              type: "array",
            },
          },
          type: "object",
        },
      },
    ]);
  });

  it("renders a generated TypeScript module with version metadata", () => {
    const source = stringifyGeneratedOperationDefinitions(
      manifest,
      "2026-03-04T01:00:00.000Z",
    );

    expect(source).toContain("AUTO-GENERATED FILE. DO NOT EDIT.");
    expect(source).toContain("generator-version: 1");
    expect(source).toContain("wordpress-version: 6.8.1");
    expect(source).toContain("woocommerce-version: 9.9.7");
    expect(source).toContain("woocommerce-version-source: readme.txt");
    expect(source).toContain("generated-at: 2026-03-04T01:00:00.000Z");
    expect(source).toContain('"toolName": "wc.v3.products_delete"');
    expect(source).toContain('"toolName": "wc.v3.webhooks_create"');
    expect(source).toContain(
      "buildGeneratedOperationDefinitions(GENERATED_OPERATION_SPECS)",
    );
  });
});
