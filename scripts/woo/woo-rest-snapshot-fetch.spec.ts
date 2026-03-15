import { WordPressNamespaceDocument } from "./woo-rest-snapshot";
import {
  collectRoutesRequiringOptions,
  formatOptionsFetchWarning,
  routeNeedsOptions,
} from "./woo-rest-snapshot-fetch";

describe("woo-rest-snapshot-fetch", () => {
  it("collects OPTIONS routes deterministically for missing schemas and args", () => {
    const namespaceDocument: WordPressNamespaceDocument = {
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
            type: "array",
          },
        },
        "/wc/v3/orders": {
          endpoints: [
            {
              methods: ["GET"],
              args: {},
            },
          ],
          schema: {
            type: "array",
          },
        },
        "/wc/v3/customers": {
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
        },
      },
    };

    expect(
      collectRoutesRequiringOptions(namespaceDocument, {
        optionsRoutes: ["/wc/v3/coupons"],
        optionsStrategy: "missing",
      }),
    ).toEqual(["/wc/v3/coupons", "/wc/v3/customers", "/wc/v3/orders"]);
  });

  it("detects when a route requires OPTIONS enrichment", () => {
    expect(
      routeNeedsOptions({
        endpoints: [
          {
            methods: ["GET"],
            args: {},
          },
        ],
        schema: {
          type: "array",
        },
      }),
    ).toBe(true);

    expect(
      routeNeedsOptions({
        endpoints: [
          {
            methods: ["HEAD"],
            args: {},
          },
        ],
        schema: {
          type: "array",
        },
      }),
    ).toBe(false);
  });

  it("formats OPTIONS fetch warnings predictably", () => {
    expect(
      formatOptionsFetchWarning(
        "/wc/v3/orders",
        "403 Forbidden for http://fixture.test/wp-json/wc/v3/orders",
      ),
    ).toBe(
      "[woo-rest snapshot] OPTIONS enrichment unavailable for /wc/v3/orders: 403 Forbidden for http://fixture.test/wp-json/wc/v3/orders",
    );
  });
});
