# woo-client-generator

Local Node/TypeScript toolchain for generating a TypeScript SDK from a live WooCommerce REST API. The SDK includes TypeScript types and [Zod](https://zod.dev) schemas for path/query/body/response, suitable for runtime validation and building LLM tool definitions.

## Requirements

- Node.js `>=22`
- Docker Desktop or a compatible Docker Engine with Compose support

## Install

```bash
npm install
```

## Get the SDK

**One command (Docker):** start fixture, bootstrap WooCommerce, generate SDK. Output: `generated/woo-sdk/`.

```bash
npm run generate:woo:fixture
```

Uses `WOO_REST_SNAPSHOT_BASE_URL` or `WOO_BASE_URL` from `.env` (default `http://127.0.0.1:8081`).

---

**If WooCommerce is already running** at some URL:

```bash
npm run generate:woo -- --base-url=http://127.0.0.1:8081
```

Or set `WOO_REST_SNAPSHOT_BASE_URL` in `.env` and run `npm run generate:woo`.

Optional: `--woo-version=9.9.7` pins the version recorded in the generated SDK header.

---

Other commands: `check`, `test`, `format`, `generate:woo:sync`, fixture `up`/`bootstrap`/`down`. Internal debug command: `generate:woo:snapshot`.

## SDK Playground

A small HTML/TS page to try the generated SDK against a live WooCommerce API: enter base URL and keys, pick module and method, set path/query/body (JSON), and run.

- **Dev:** `npm run playground:dev` — Vite dev server (e.g. http://localhost:5173).
- **Build:** `npm run playground:build` — output in `dist-playground/`.
- **Preview:** `npm run playground:preview` — serve the built app.

If the browser blocks requests (different origin than Woo), run a CORS proxy and point the playground Base URL at it: `npm run playground:proxy`. Set `WOO_BASE_URL` (or `WOO_REST_SNAPSHOT_BASE_URL`) to the full REST root (e.g. `http://127.0.0.1:8081/wp-json/wc/v3`), then set Base URL in the playground to `http://localhost:3199`.

## Generated SDK layout

Product output under `generated/woo-sdk/src/`:

- **`client.ts`** — HTTP client and request helpers
- **`index.ts`** — re-exports
- **`models/*.ts`** — per-resource modules: Zod schemas (`*Schema`) and types (`z.infer<typeof *Schema>`)
- **`operations/*.ts`** — typed operation functions
- **`core/*`** — shared runtime (copied as-is)

The SDK depends on `zod` (^3.x). Use the exported schemas for runtime validation or to build LLM tool definitions (e.g. OpenAI/Anthropic tools).

## Notes

- Scripts run with `tsx`; `ts-node` is not required.
- SDK generation is deterministic for a fixed Woo REST surface: routes, methods, and JSON keys are sorted before codegen.
- Namespace: `--namespace` or `WOO_REST_SNAPSHOT_NAMESPACE`; default `wc/v3`.
- WooCommerce version: `--woo-version` or `WOO_REST_SNAPSHOT_WOO_VERSION`, then live `readme.txt`, then `unknown`.
- If a route does not expose `OPTIONS`, generation logs a warning and continues without enrichment when that route is optional.
- The main generation flow writes only `generated/woo-sdk/src/**`; intermediate snapshot/manifest JSON files are not part of the product output.
