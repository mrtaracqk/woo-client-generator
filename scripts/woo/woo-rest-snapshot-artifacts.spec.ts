import {
  buildWooRestSdkManifestFileName,
  buildWooRestSdkManifestOutputPath,
  buildWooRestSnapshotFileName,
  buildWooRestSnapshotOutputPath,
} from "./woo-rest-snapshot-artifacts";

describe("woo-rest-snapshot-artifacts", () => {
  it("uses the WooCommerce version in canonical snapshot filenames", () => {
    expect(
      buildWooRestSnapshotFileName({
        namespace: "wc/v3",
        wooCommerceVersion: "10.5.1",
      }),
    ).toBe("woo-v10.5.1.snapshot.json");
  });

  it("falls back to the namespace when the WooCommerce version is unknown", () => {
    expect(
      buildWooRestSnapshotOutputPath({
        namespace: "wc/v3",
        wooCommerceVersion: "unknown",
      }),
    ).toBe("generated/woo-rest/wc-v3.snapshot.json");
  });

  it("uses the same canonical version stem for SDK manifests", () => {
    expect(
      buildWooRestSdkManifestFileName({
        namespace: "wc/v3",
        wooCommerceVersion: "10.5.1",
      }),
    ).toBe("woo-v10.5.1.sdk-manifest.json");
  });

  it("falls back to the namespace for SDK manifests when the version is unknown", () => {
    expect(
      buildWooRestSdkManifestOutputPath({
        namespace: "wc/v3",
        wooCommerceVersion: "unknown",
      }),
    ).toBe("generated/woo-rest/wc-v3.sdk-manifest.json");
  });
});
