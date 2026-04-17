/**
 * Source runtime for generated Woo SDK clients.
 * Changes here are copied into generated/woo-sdk/src/core.
 */

export const buildWooRequestUrl = ({
  baseUrl,
  path,
  query,
  routeTemplate,
}: {
  baseUrl: string;
  path?: Record<string, unknown>;
  query?: Record<string, unknown>;
  routeTemplate: string;
}): URL => {
  const normalizedRoute = routeTemplate.startsWith("/")
    ? routeTemplate
    : `/${routeTemplate}`;
  const resolvedPath = normalizedRoute.replaceAll(
    /\{([^}]+)\}/g,
    (_match, paramName: string) => encodePathSegment(path, paramName),
  );
  const unresolvedParamMatch = resolvedPath.match(/\{([^}]+)\}/);

  if (unresolvedParamMatch) {
    throw new Error(
      `Missing path parameter "${unresolvedParamMatch[1]}" for route ${routeTemplate}.`,
    );
  }

  const url = new URL(baseUrl);

  url.pathname = joinUrlPath(url.pathname, resolvedPath);

  const serializedQuery = serializeQuery(query);

  if (serializedQuery.length > 0) {
    url.search = `?${serializedQuery}`;
  }

  return url;
};

export const serializeJsonBody = (body: unknown): string | undefined => {
  if (body === undefined) {
    return undefined;
  }

  return JSON.stringify(body);
};

const encodePathSegment = (
  path: Record<string, unknown> | undefined,
  paramName: string,
): string => {
  const value = path?.[paramName];

  if (value === undefined) {
    throw new Error(`Missing path parameter "${paramName}".`);
  }

  return encodeURIComponent(String(value));
};

const serializeQuery = (query: Record<string, unknown> | undefined): string => {
  if (!query) {
    return "";
  }

  const pairs: string[] = [];

  for (const [key, value] of Object.entries(query)) {
    appendSerializedValue(pairs, key, value);
  }

  return pairs.join("&");
};

const appendSerializedValue = (
  pairs: string[],
  key: string,
  value: unknown,
): void => {
  if (value === undefined) {
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      appendSerializedValue(pairs, key, item);
    }

    return;
  }

  if (value instanceof Date) {
    pairs.push(
      `${encodeQueryComponent(key)}=${encodeQueryComponent(value.toISOString())}`,
    );
    return;
  }

  if (isPlainObject(value)) {
    pairs.push(
      `${encodeQueryComponent(key)}=${encodeQueryComponent(JSON.stringify(value))}`,
    );
    return;
  }

  pairs.push(`${encodeQueryComponent(key)}=${encodeQueryComponent(String(value))}`);
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object";

const encodeQueryComponent = (value: string): string =>
  encodeURIComponent(value).replace(
    /[!'()*]/g,
    (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
  );

const joinUrlPath = (basePath: string, routePath: string): string => {
  const normalizedBasePath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;
  const normalizedRoutePath = routePath.startsWith("/")
    ? routePath
    : `/${routePath}`;

  return `${normalizedBasePath}${normalizedRoutePath}`;
};
