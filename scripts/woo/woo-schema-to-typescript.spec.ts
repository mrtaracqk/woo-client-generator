import { renderWooSchemaTypeScript } from "./woo-schema-to-typescript";

describe("woo-schema-to-typescript", () => {
  it("renders object, array, enum, union, and additionalProperties shapes", () => {
    expect(
      renderWooSchemaTypeScript(
        {
          additionalProperties: {
            type: "string",
          },
          properties: {
            id: {
              type: "integer",
            },
            nullable: {
              type: ["null", "string"],
            },
            status: {
              enum: ["draft", "published"],
            },
            tags: {
              items: {
                type: "string",
              },
              type: "array",
            },
          },
          required: ["id"],
          type: "object",
        },
        "products.body",
      ),
    ).toEqual({
      typeScript:
        '{ id: number; nullable?: null | string; status?: "draft" | "published"; tags?: Array<string>; [key: string]: string }',
      warnings: [],
    });
  });

  it("uses safe fallbacks for incomplete schemas", () => {
    expect(
      renderWooSchemaTypeScript(
        {
          properties: {
            broken: {},
            metadata: {
              type: "object",
            },
            values: {
              type: "array",
            },
          },
          type: "object",
        },
        "orders.response",
      ),
    ).toEqual({
      typeScript:
        "{ broken?: unknown; metadata?: Record<string, unknown>; values?: Array<unknown> }",
      warnings: [
        {
          message: "Schema does not declare a supported type; using unknown.",
          path: "orders.response.properties.broken",
        },
      ],
    });
  });

  it("supports quiet top-level fallbacks for missing schemas", () => {
    expect(
      renderWooSchemaTypeScript(undefined, "products.response", {
        warnOnMissingSchema: false,
      }),
    ).toEqual({
      typeScript: "unknown",
      warnings: [],
    });
  });
});
