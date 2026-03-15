import path from "node:path";
import { UNKNOWN_VERSION } from "./woo-rest-snapshot-fetch";

export const WOO_REST_GENERATED_DIRECTORY = path.resolve(
  process.cwd(),
  "generated",
  "woo-rest",
);

const buildWooRestGeneratedArtifactStem = ({
  namespace,
  wooCommerceVersion,
}: {
  namespace: string;
  wooCommerceVersion: string;
}): string => {
  if (wooCommerceVersion !== UNKNOWN_VERSION) {
    return `woo-v${sanitizeForFilename(wooCommerceVersion)}`;
  }

  return sanitizeForFilename(namespace);
};

export const buildWooRestSnapshotFileName = ({
  namespace,
  wooCommerceVersion,
}: {
  namespace: string;
  wooCommerceVersion: string;
}): string =>
  `${buildWooRestGeneratedArtifactStem({
    namespace,
    wooCommerceVersion,
  })}.snapshot.json`;

export const buildWooRestSnapshotOutputPath = (input: {
  namespace: string;
  wooCommerceVersion: string;
}): string =>
  path.join("generated", "woo-rest", buildWooRestSnapshotFileName(input));

export const buildWooRestSdkManifestFileName = (input: {
  namespace: string;
  wooCommerceVersion: string;
}): string =>
  `${buildWooRestGeneratedArtifactStem(input)}.sdk-manifest.json`;

export const buildWooRestSdkManifestOutputPath = (input: {
  namespace: string;
  wooCommerceVersion: string;
}): string =>
  path.join("generated", "woo-rest", buildWooRestSdkManifestFileName(input));

const sanitizeForFilename = (value: string): string =>
  value.replace(/[^A-Za-z0-9._-]+/g, "-");
