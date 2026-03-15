import { format } from "prettier";
import { WooSdkManifest, WooSdkOperation } from "./woo-sdk-manifest";

const GENERATOR_VERSION = 1;

export interface GeneratedWooSdkSourceFile {
  outputRelativePath: string;
  source: string;
}

export interface WooSdkOperationGroup {
  operations: WooSdkOperation[];
  resourceGroup: string;
}

export const buildWooSdkSourceHeader = (manifest: WooSdkManifest): string => {
  const wordpressVersion = manifest.source.wordpressVersion ?? "unknown";
  const wooCommerceVersion = manifest.source.wooCommerceVersion ?? "unknown";
  const wooCommerceVersionSource =
    manifest.source.wooCommerceVersionSource ?? "unknown";

  return [
    "/**",
    " * AUTO-GENERATED FILE. DO NOT EDIT.",
    ` * generator-version: ${GENERATOR_VERSION}`,
    ` * wordpress-version: ${wordpressVersion}`,
    ` * woocommerce-version: ${wooCommerceVersion}`,
    ` * woocommerce-version-source: ${wooCommerceVersionSource}`,
    " */",
  ].join("\n");
};

export const escapeComment = (value: string): string => value.replaceAll("*/", "* /");

export const formatTypeScript = async (source: string): Promise<string> =>
  format(source, {
    parser: "typescript",
  });

export const groupOperationsByResource = (
  operations: WooSdkOperation[],
): WooSdkOperationGroup[] => {
  const groups = new Map<string, WooSdkOperation[]>();

  for (const operation of operations) {
    const groupOperations = groups.get(operation.resourceGroup);

    if (groupOperations) {
      groupOperations.push(operation);
      continue;
    }

    groups.set(operation.resourceGroup, [operation]);
  }

  return [...groups.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([resourceGroup, groupedOperations]) => ({
      operations: groupedOperations,
      resourceGroup,
    }));
};

export const toPascalCaseIdentifier = (value: string): string =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter((segment) => segment.length > 0)
    .map((segment) => `${segment[0]?.toUpperCase() ?? ""}${segment.slice(1)}`)
    .join("");
