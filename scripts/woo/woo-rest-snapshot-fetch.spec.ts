import { afterEach, vi } from "vitest";
import { WordPressNamespaceDocument } from "./woo-rest-snapshot";
import {
  collectRoutesRequiringOptions,
  fetchOptionsDocuments,
  formatOptionsFetchWarning,
  materializeRouteForOptions,
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

  describe("materializeRouteForOptions", () => {
    it("keeps static routes untouched", () => {
      expect(materializeRouteForOptions("/wc/v3/products")).toBe(
        "/wc/v3/products",
      );
    });

    it("substitutes integer path params with a deterministic placeholder", () => {
      expect(materializeRouteForOptions("/wc/v3/products/(?P<id>[\\d]+)")).toBe(
        "/wc/v3/products/1",
      );
    });

    it("substitutes slug-style [\\w-]+ params", () => {
      expect(
        materializeRouteForOptions(
          "/wc/v3/data/continents/(?P<location>[\\w-]+)",
        ),
      ).toBe("/wc/v3/data/continents/x");
    });

    it("substitutes fixed-length [\\w-]{3} params (e.g. currency codes)", () => {
      expect(
        materializeRouteForOptions(
          "/wc/v3/data/currencies/(?P<currency>[\\w-]{3})",
        ),
      ).toBe("/wc/v3/data/currencies/abc");
    });

    it("substitutes \\w[\\w\\s\\-]* params", () => {
      expect(
        materializeRouteForOptions(
          "/wc/v3/layout-templates/(?P<id>\\w[\\w\\s\\-]*)",
        ),
      ).toBe("/wc/v3/layout-templates/x");
    });

    it("materializes nested variation routes with multiple params", () => {
      expect(
        materializeRouteForOptions(
          "/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)",
        ),
      ).toBe("/wc/v3/products/1/variations/1");
    });

    it("rejects unsupported path parameter patterns rather than guessing", () => {
      expect(() =>
        materializeRouteForOptions(
          "/wc/v3/products/(?P<slug>[a-z0-9-]+)/details",
        ),
      ).toThrow(/unsupported path parameter pattern/);
    });
  });

  describe("fetchOptionsDocuments strict enrichment", () => {
    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it("fetches OPTIONS against materialized parameterized routes", async () => {
      const fetchMock = vi.fn(async (url: string | URL): Promise<Response> => {
        const requestedUrl = url instanceof URL ? url.toString() : url;

        if (requestedUrl.endsWith("/wp-json/wc/v3/products/1/variations")) {
          return jsonResponse({
            schema: {
              type: "object",
              properties: {
                id: { type: "integer" },
              },
            },
            endpoints: [
              {
                methods: ["GET"],
                args: { context: { type: "string" } },
              },
            ],
          });
        }

        return new Response("not found", { status: 404 });
      });
      vi.stubGlobal("fetch", fetchMock);

      const namespaceDocument: WordPressNamespaceDocument = {
        namespace: "wc/v3",
        routes: {
          "/wc/v3/products/(?P<product_id>[\\d]+)/variations": {
            endpoints: [{ methods: ["GET"], args: {} }],
          },
        },
      };

      const result = await fetchOptionsDocuments(
        "http://fixture.test",
        namespaceDocument,
        {
          namespace: "wc/v3",
          optionsRoutes: [],
          optionsStrategy: "missing",
        },
      );

      expect(result.failures).toEqual([]);
      expect(result.warnings).toEqual([]);
      expect(
        result.documents["/wc/v3/products/(?P<product_id>[\\d]+)/variations"],
      ).toBeDefined();

      expect(fetchMock).toHaveBeenCalled();
      const requestedUrls = fetchMock.mock.calls.map((call) =>
        call[0] instanceof URL ? call[0].toString() : String(call[0]),
      );
      expect(requestedUrls).toContain(
        "http://fixture.test/wp-json/wc/v3/products/1/variations",
      );
      expect(requestedUrls.every((url) => !url.includes("(?P<"))).toBe(true);
    });

    it("records a failure for required routes when OPTIONS fetch fails", async () => {
      const fetchMock = vi.fn(
        async (): Promise<Response> =>
          new Response("forbidden", { status: 403 }),
      );
      vi.stubGlobal("fetch", fetchMock);

      const namespaceDocument: WordPressNamespaceDocument = {
        namespace: "wc/v3",
        routes: {
          "/wc/v3/products/(?P<product_id>[\\d]+)/variations": {
            endpoints: [{ methods: ["GET"], args: {} }],
          },
        },
      };

      const result = await fetchOptionsDocuments(
        "http://fixture.test",
        namespaceDocument,
        {
          namespace: "wc/v3",
          optionsRoutes: [],
          optionsStrategy: "missing",
        },
      );

      expect(result.failures.length).toBe(1);
      expect(result.failures[0]).toContain(
        "/wc/v3/products/(?P<product_id>[\\d]+)/variations",
      );
      expect(
        result.documents["/wc/v3/products/(?P<product_id>[\\d]+)/variations"],
      ).toBeUndefined();
    });

    it("records a failure when a required route cannot be materialized", async () => {
      const fetchMock = vi.fn(async (): Promise<Response> => jsonResponse({}));
      vi.stubGlobal("fetch", fetchMock);

      const namespaceDocument: WordPressNamespaceDocument = {
        namespace: "wc/v3",
        routes: {
          "/wc/v3/products/(?P<slug>[a-z0-9-]+)/details": {
            endpoints: [{ methods: ["GET"], args: {} }],
          },
        },
      };

      const result = await fetchOptionsDocuments(
        "http://fixture.test",
        namespaceDocument,
        {
          namespace: "wc/v3",
          optionsRoutes: [],
          optionsStrategy: "missing",
        },
      );

      expect(fetchMock).not.toHaveBeenCalled();
      expect(result.failures.length).toBe(1);
      expect(result.failures[0]).toMatch(/unsupported path parameter pattern/);
    });

    it("treats failures on routes that do not need enrichment as informational warnings", async () => {
      const fetchMock = vi.fn(
        async (): Promise<Response> =>
          new Response("not found", { status: 404 }),
      );
      vi.stubGlobal("fetch", fetchMock);

      const namespaceDocument: WordPressNamespaceDocument = {
        namespace: "wc/v3",
        routes: {
          "/wc/v3/products": {
            schema: { type: "array" },
            endpoints: [
              {
                methods: ["GET"],
                args: { page: { type: "integer" } },
              },
            ],
          },
        },
      };

      const result = await fetchOptionsDocuments(
        "http://fixture.test",
        namespaceDocument,
        {
          namespace: "wc/v3",
          optionsRoutes: ["/wc/v3/products"],
          optionsStrategy: "none",
        },
      );

      expect(result.failures).toEqual([]);
      expect(result.warnings.length).toBe(1);
    });
  });
});

const jsonResponse = (body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
