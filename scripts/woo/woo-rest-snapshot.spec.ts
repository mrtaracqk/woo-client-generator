import {
  buildWooRestSnapshot,
  stringifyWooRestSnapshot,
  WordPressNamespaceDocument,
} from "./woo-rest-snapshot";

describe("woo-rest-snapshot", () => {
  it("builds a stable snapshot with sorted routes and method metadata", () => {
    const namespaceDocument: WordPressNamespaceDocument = {
      namespace: "wc/v3",
      routes: {
        "/wc/v3/products/(?P<product_id>[\\d]+)": {
          schema: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
            },
          },
          endpoints: [
            {
              methods: ["PUT"],
              args: {
                name: {
                  type: "string",
                },
              },
            },
            {
              methods: ["GET"],
              args: {
                context: {
                  enum: ["edit", "view"],
                  type: "string",
                },
              },
            },
            {
              methods: ["HEAD"],
              args: {
                ignored: true,
              },
            },
          ],
        },
        "/wc/v3/products": {
          endpoints: [
            {
              methods: ["POST"],
              args: {},
            },
            {
              methods: ["GET"],
              args: {
                page: {
                  type: "integer",
                },
              },
            },
          ],
        },
      },
    };

    const snapshot = buildWooRestSnapshot({
      source: {
        namespace: "wc/v3",
        wooCommerceVersion: "10.5.1",
        wooCommerceVersionSource: "readme.txt",
        wordpressVersion: "6.9.1",
      },
      namespaceDocument,
      optionsDocuments: {
        "/wc/v3/products": {
          schema: {
            type: "array",
          },
          endpoints: [
            {
              methods: ["POST"],
              args: {
                name: {
                  type: "string",
                },
                sku: {
                  type: "string",
                },
              },
            },
          ],
        },
      },
    });

    expect(snapshot).toEqual({
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
                  type: "integer",
                },
              },
              schema: {
                type: "array",
              },
            },
            {
              method: "POST",
              args: {
                name: {
                  type: "string",
                },
                sku: {
                  type: "string",
                },
              },
              schema: {
                type: "array",
              },
            },
          ],
        },
        {
          route: "/wc/v3/products/(?P<product_id>[\\d]+)",
          methods: [
            {
              method: "GET",
              args: {
                context: {
                  enum: ["edit", "view"],
                  type: "string",
                },
              },
              schema: {
                properties: {
                  id: {
                    type: "integer",
                  },
                },
                type: "object",
              },
            },
            {
              method: "PUT",
              args: {
                name: {
                  type: "string",
                },
              },
              schema: {
                properties: {
                  id: {
                    type: "integer",
                  },
                },
                type: "object",
              },
            },
          ],
        },
      ],
    });
  });

  it("stringifies snapshots with stable key ordering", () => {
    const json = stringifyWooRestSnapshot({
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
                zed: true,
                alpha: true,
              },
            },
          ],
        },
      ],
    });

    expect(json).toContain('"alpha": true');
    expect(json).toContain('"zed": true');
    expect(json.indexOf('"alpha": true')).toBeLessThan(
      json.indexOf('"zed": true'),
    );
    expect(json.endsWith("\n")).toBe(true);
  });
});
