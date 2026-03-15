# woo-client-generator

Local Node/TypeScript toolchain for collecting WooCommerce REST snapshots and generating repository artifacts from them.

## Requirements

- Node.js `>=22`
- Docker Desktop or a compatible Docker Engine with Compose support

## Install

```bash
npm install
cp .env.example .env
```

`cp .env.example .env` is optional if you always pass `--base-url`, but it keeps the default workflow zero-config.

## Available scripts

```bash
npm run check
npm run test
npm run format
npm run woo:fixture:up
npm run woo:fixture:bootstrap
npm run woo:fixture:down
npm run generate:woo:snapshot -- --base-url=http://127.0.0.1:8081
npm run generate:woo:manifest
npm run generate:woo:sdk-manifest
npm run generate:woo:sdk
npm run generate:woo:sdk-types
npm run generate:woo:definitions
npm run generate:woo
npm run generate:woo:sync -- --keep-up
```

## Default workflow

1. Install dependencies with `npm install`.
2. Start the local fixture with `npm run woo:fixture:up`.
3. Bootstrap WordPress + WooCommerce with `npm run woo:fixture:bootstrap`.
4. Fetch a live snapshot with `npm run generate:woo:snapshot -- --base-url=http://127.0.0.1:8081`.
5. Build derived artifacts with `npm run generate:woo`.

## Notes

- TypeScript scripts run through `tsx`; `ts-node` is no longer required.
- Default unit tests intentionally exclude the legacy committed-registry spec because this repository does not currently ship the old generated `src/woo-core` tree.
- Snapshot generation is deterministic: routes, methods, and JSON keys are sorted, and the canonical snapshot artifact does not embed a runtime timestamp.
- The new SDK manifest is written next to the snapshot as `generated/woo-rest/woo-vX.Y.Z.sdk-manifest.json`; it stays separate from the legacy `.manifest.json` used by the old registry output.
- The generated Woo SDK source now includes `generated/woo-sdk/src/client.ts`, `generated/woo-sdk/src/index.ts`, grouped modules in `generated/woo-sdk/src/models/*` and `generated/woo-sdk/src/operations/*`, plus a stable runtime copied into `generated/woo-sdk/src/core/*`.
- Namespace filtering stays configurable through `--namespace` or `WOO_REST_SNAPSHOT_NAMESPACE`; the default remains `wc/v3`.
- WooCommerce version resolution order is: `--woo-version`, `WOO_REST_SNAPSHOT_WOO_VERSION`, live `wp-content/plugins/woocommerce/readme.txt`, then `unknown`.
- When a route does not expose `OPTIONS`, the snapshot step logs a stable warning and continues without enrichment for that route.
