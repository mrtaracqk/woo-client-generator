import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { WooRestSnapshot } from "./woo-rest-snapshot";
import {
  buildWooSdkManifest,
  stringifyWooSdkManifest,
  WooSdkManifest,
} from "./woo-sdk-manifest";

const COMMITTED_SNAPSHOT_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "generated",
  "woo-rest",
  "woo-v9.9.7.snapshot.json",
);
const COMMITTED_SDK_MANIFEST_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "generated",
  "woo-rest",
  "woo-v9.9.7.sdk-manifest.json",
);
const itWithCommittedArtifacts =
  existsSync(COMMITTED_SNAPSHOT_PATH) && existsSync(COMMITTED_SDK_MANIFEST_PATH)
    ? it
    : it.skip;

describe("woo-sdk-manifest committed artifact", () => {
  itWithCommittedArtifacts(
    "matches the deterministic SDK manifest generated from the committed snapshot",
    () => {
      const snapshot = JSON.parse(
        readFileSync(COMMITTED_SNAPSHOT_PATH, "utf8"),
      ) as WooRestSnapshot;
      const expectedManifest = stringifyWooSdkManifest(
        buildWooSdkManifest(snapshot),
      );
      const actualManifest = readFileSync(COMMITTED_SDK_MANIFEST_PATH, "utf8");
      const parsedManifest = JSON.parse(actualManifest) as WooSdkManifest;

      expect(actualManifest).toBe(expectedManifest);
      expect(parsedManifest.source.wooCommerceVersion).toBe("9.9.7");
      expect(parsedManifest.operations.length).toBeGreaterThan(100);
      expect(
        new Set(parsedManifest.operations.map((operation) => operation.internalKey))
          .size,
      ).toBe(parsedManifest.operations.length);
      expect(
        new Set(parsedManifest.operations.map((operation) => operation.operationId))
          .size,
      ).toBe(parsedManifest.operations.length);
    },
  );
});
