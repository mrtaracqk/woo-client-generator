import {
  createWooRequestExecutor,
  createWooRequestExecutorWithHeaders,
  WooApiError,
} from "../../src/woo-sdk-runtime/http";

describe("woo-sdk runtime", () => {
  it("serializes path, query, auth, and json body through fetch", async () => {
    let receivedUrl = "";
    let receivedInit: RequestInit | undefined;
    const execute = createWooRequestExecutor({
      baseUrl: "https://example.test/wp-json/wc/v3",
      consumerKey: "ck_test",
      consumerSecret: "cs_test",
      fetch: async (input, init) => {
        receivedUrl = String(input);
        receivedInit = init;

        return new Response(JSON.stringify({ ok: true }), {
          headers: {
            "content-type": "application/json",
          },
          status: 200,
        });
      },
      headers: {
        "x-sdk": "default",
      },
    });

    const response = await execute<{ ok: boolean }>({
      body: {
        name: "Test",
      },
      headers: {
        "x-request": "override",
      },
      method: "POST",
      path: {
        id: 42,
      },
      query: {
        include: [1, 2],
        search: "summer sale",
      },
      routeTemplate: "/products/{id}",
    });

    expect(response).toEqual({ ok: true });
    expect(receivedUrl).toBe(
      "https://example.test/wp-json/wc/v3/products/42?include=1&include=2&search=summer%20sale&consumer_key=ck_test&consumer_secret=cs_test",
    );
    expect(receivedInit?.method).toBe("POST");
    expect(receivedInit?.body).toBe(JSON.stringify({ name: "Test" }));
    expect(new Headers(receivedInit?.headers).get("x-sdk")).toBe("default");
    expect(new Headers(receivedInit?.headers).get("x-request")).toBe(
      "override",
    );
    expect(new Headers(receivedInit?.headers).get("content-type")).toBe(
      "application/json",
    );
  });

  it("returns parsed data together with response headers", async () => {
    const execute = createWooRequestExecutorWithHeaders({
      baseUrl: "https://example.test/wp-json/wc/v3",
      fetch: async () =>
        new Response(JSON.stringify({ ok: true }), {
          headers: {
            "content-type": "application/json",
            "x-wp-total": "10",
          },
          status: 200,
        }),
    });

    const response = await execute<{ ok: boolean }>({
      method: "GET",
      routeTemplate: "/products",
    });

    expect(response.data).toEqual({ ok: true });
    expect(response.headers.get("x-wp-total")).toBe("10");
  });

  it("throws WooApiError with parsed response details on non-ok responses", async () => {
    const execute = createWooRequestExecutor({
      baseUrl: "https://example.test/wp-json/wc/v3",
      fetch: async () =>
        new Response(JSON.stringify({ code: "woocommerce_error" }), {
          headers: {
            "content-type": "application/json",
          },
          status: 400,
          statusText: "Bad Request",
        }),
    });

    try {
      await execute({
        method: "GET",
        routeTemplate: "/orders",
      });
      throw new Error("Expected WooApiError to be thrown.");
    } catch (error) {
      expect(error).toBeInstanceOf(WooApiError);
      expect(error).toMatchObject({
        data: { code: "woocommerce_error" },
        method: "GET",
        status: 400,
        statusText: "Bad Request",
        url: "https://example.test/wp-json/wc/v3/orders",
      });
    }
  });
});
