/**
 * Optional CORS proxy for the SDK Playground.
 * Run: tsx playground/proxy.ts
 * Set Base URL in the playground to http://localhost:3199 (or PLAYGROUND_PROXY_PORT).
 * WOO_BASE_URL (or WOO_REST_SNAPSHOT_BASE_URL) must be the full REST root, e.g. http://127.0.0.1:8081/wp-json/wc/v3.
 */

import * as http from "node:http";

const TARGET =
  process.env.WOO_BASE_URL ||
  process.env.WOO_REST_SNAPSHOT_BASE_URL ||
  "http://127.0.0.1:8081/wp-json/wc/v3";
const PORT = Number(process.env.PLAYGROUND_PROXY_PORT || "3199");

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function parseTargetUrl(path: string): URL {
  const base = TARGET.replace(/\/$/, "");
  return new URL(path.startsWith("/") ? path : "/" + path, base);
}

async function handleRequest(
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage>,
): Promise<void> {
  const path = req.url ?? "/";
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  const targetUrl = parseTargetUrl(path);
  const body =
    req.method !== "GET" && req.method !== "HEAD"
      ? await new Promise<Buffer>((resolve, reject) => {
          const chunks: Buffer[] = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", () => resolve(Buffer.concat(chunks)));
          req.on("error", reject);
        })
      : undefined;

  const headers: Record<string, string> = {};
  for (const [k, v] of Object.entries(req.headers)) {
    if (v !== undefined && k.toLowerCase() !== "host") headers[k] = String(v);
  }

  try {
    const response = await fetch(targetUrl.toString(), {
      method: req.method ?? "GET",
      headers,
      body,
    });
    const resHeaders: Record<string, string> = { ...corsHeaders };
    response.headers.forEach((v, k) => {
      resHeaders[k] = v;
    });
    res.writeHead(response.status, resHeaders);
    if (response.body) {
      const buf = await response.arrayBuffer();
      res.end(Buffer.from(buf));
    } else res.end();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    res.writeHead(502, {
      ...corsHeaders,
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ error: "Proxy fetch failed", detail: message }));
  }
}

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch((err) => {
    res.writeHead(500, { ...corsHeaders, "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: String(err) }));
  });
});

server.listen(PORT, () => {
  console.log(`Playground CORS proxy: http://localhost:${PORT} -> ${TARGET}`);
  console.log("Set Base URL in the playground to http://localhost:" + PORT);
});
