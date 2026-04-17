/**
 * Source runtime for generated Woo SDK clients.
 * Changes here are copied into generated/woo-sdk/src/core.
 */

import { CreateWooClientConfig } from "./types";

type WooAuthConfig = Pick<
  CreateWooClientConfig,
  "authStrategy" | "consumerKey" | "consumerSecret"
>;

export const getWooAuthQuery = (
  config: WooAuthConfig,
): Record<string, string> | undefined => {
  const credentials = resolveWooAuthCredentials(config);

  if (!credentials) {
    return undefined;
  }

  if (
    credentials.authStrategy !== "query" &&
    credentials.authStrategy !== "auto"
  ) {
    return undefined;
  }

  return {
    consumer_key: credentials.consumerKey,
    consumer_secret: credentials.consumerSecret,
  };
};

export const applyWooAuthentication = (
  headers: Headers,
  config: WooAuthConfig,
): void => {
  const credentials = resolveWooAuthCredentials(config);

  if (!credentials) {
    return;
  }

  const { authStrategy, consumerKey, consumerSecret } = credentials;

  if (authStrategy === "query" || authStrategy === "auto") {
    return;
  }

  headers.set(
    "authorization",
    `Basic ${encodeBasicCredentials(consumerKey, consumerSecret)}`,
  );
};

const resolveWooAuthCredentials = (
  config: WooAuthConfig,
):
  | {
      authStrategy: NonNullable<CreateWooClientConfig["authStrategy"]>;
      consumerKey: string;
      consumerSecret: string;
    }
  | undefined => {
  const { consumerKey, consumerSecret } = config;

  if (!consumerKey && !consumerSecret) {
    return undefined;
  }

  if (!consumerKey || !consumerSecret) {
    throw new Error(
      "Woo client authentication requires both consumerKey and consumerSecret.",
    );
  }

  return {
    authStrategy: config.authStrategy ?? "auto",
    consumerKey,
    consumerSecret,
  };
};

const encodeBasicCredentials = (
  consumerKey: string,
  consumerSecret: string,
): string => {
  const rawValue = `${consumerKey}:${consumerSecret}`;

  if (typeof globalThis.btoa === "function") {
    return globalThis.btoa(rawValue);
  }

  if (typeof Buffer !== "undefined") {
    return Buffer.from(rawValue, "utf8").toString("base64");
  }

  throw new Error(
    "Woo client basic authentication requires btoa or Buffer support.",
  );
};
