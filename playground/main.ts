import { createWooClient, WooApiError } from "@woo-sdk";
// Static import of current SDK manifest (update path when Woo version changes)
import manifest from "../generated/woo-rest/woo-v9.9.7.sdk-manifest.json";

interface SdkManifestOperation {
  functionName: string;
  resourceGroup: string;
  method: string;
  routeTemplate: string;
  pathParamsSchema?: {
    properties?: Record<string, unknown>;
    required?: string[];
  };
  querySchema?: { properties?: Record<string, unknown> };
}

const operations = manifest.operations as SdkManifestOperation[];

const byGroup = new Map<string, SdkManifestOperation[]>();
for (const op of operations) {
  const g = op.resourceGroup || "other";
  if (!byGroup.has(g)) byGroup.set(g, []);
  byGroup.get(g)!.push(op);
}

const moduleSelect = document.getElementById(
  "moduleSelect",
) as HTMLSelectElement;
const methodSelect = document.getElementById(
  "methodSelect",
) as HTMLSelectElement;
const routeHint = document.getElementById("routeHint") as HTMLParagraphElement;
const pathParams = document.getElementById("pathParams") as HTMLTextAreaElement;
const queryParams = document.getElementById(
  "queryParams",
) as HTMLTextAreaElement;
const bodyParams = document.getElementById("bodyParams") as HTMLTextAreaElement;
const runBtn = document.getElementById("runBtn") as HTMLButtonElement;
const responseStatus = document.getElementById(
  "responseStatus",
) as HTMLDivElement;
const responseBody = document.getElementById("responseBody") as HTMLPreElement;

const groups = Array.from(byGroup.keys()).sort();

function clearOptions(select: HTMLSelectElement) {
  select.innerHTML = "";
}

function populateModules() {
  clearOptions(moduleSelect);
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "— Select module —";
  moduleSelect.appendChild(empty);
  for (const g of groups) {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    moduleSelect.appendChild(opt);
  }
}

function populateMethods() {
  clearOptions(methodSelect);
  const group = moduleSelect.value;
  if (!group) {
    routeHint.textContent = "";
    return;
  }
  const ops = byGroup.get(group) ?? [];
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "— Select method —";
  methodSelect.appendChild(empty);
  for (const op of ops) {
    const opt = document.createElement("option");
    opt.value = op.functionName;
    opt.textContent = `${op.method} ${op.functionName}`;
    methodSelect.appendChild(opt);
  }
  routeHint.textContent = "";
  updateRouteHint();
}

function getSelectedOperation(): SdkManifestOperation | null {
  const group = moduleSelect.value;
  const name = methodSelect.value;
  if (!group || !name) return null;
  const ops = byGroup.get(group) ?? [];
  return ops.find((o) => o.functionName === name) ?? null;
}

function updateRouteHint() {
  const op = getSelectedOperation();
  routeHint.textContent = op ? op.routeTemplate : "";
}

function parseJson(
  raw: string,
  fallback: object,
): { ok: true; value: object } | { ok: false; error: string } {
  if (!raw.trim()) return { ok: true, value: fallback };
  try {
    const value = JSON.parse(raw) as object;
    return { ok: true, value };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Invalid JSON",
    };
  }
}

function setResponse(statusClass: string, statusText: string, body: string) {
  responseStatus.className = "response-status " + statusClass;
  responseStatus.textContent = statusText;
  responseBody.textContent = body || "(empty)";
  responseBody.classList.toggle("empty", !body);
}

async function run() {
  const baseUrl = (
    document.getElementById("baseUrl") as HTMLInputElement
  ).value.trim();
  const consumerKey = (
    document.getElementById("consumerKey") as HTMLInputElement
  ).value.trim();
  const consumerSecret = (
    document.getElementById("consumerSecret") as HTMLInputElement
  ).value.trim();

  if (!baseUrl) {
    setResponse("error", "Error", "Please set Base URL.");
    return;
  }

  const op = getSelectedOperation();
  if (!op) {
    setResponse("error", "Error", "Please select module and method.");
    return;
  }

  const pathResult = parseJson(pathParams.value, {});
  if (!pathResult.ok) {
    setResponse("error", "Invalid path params", pathResult.error);
    return;
  }
  const queryResult = parseJson(queryParams.value, {});
  if (!queryResult.ok) {
    setResponse("error", "Invalid query params", queryResult.error);
    return;
  }
  const bodyResult = parseJson(bodyParams.value, {});
  if (!bodyResult.ok) {
    setResponse("error", "Invalid body", bodyResult.error);
    return;
  }

  const request: { path?: object; query?: object; body?: object } = {
    path: pathResult.value,
    query: Object.keys(queryResult.value).length
      ? queryResult.value
      : undefined,
    body: Object.keys(bodyResult.value).length ? bodyResult.value : undefined,
  };

  runBtn.disabled = true;
  setResponse("", "Running…", "");

  try {
    const client = createWooClient({
      baseUrl,
      consumerKey: consumerKey || undefined,
      consumerSecret: consumerSecret || undefined,
      fetch: window.fetch.bind(window),
    });

    const module = (client as Record<string, unknown>)[op.resourceGroup] as
      | Record<string, (req: unknown) => Promise<unknown>>
      | undefined;
    const fn = module?.[op.functionName];
    if (!fn) {
      setResponse(
        "error",
        "Error",
        `Method ${op.resourceGroup}.${op.functionName} not found on client.`,
      );
      return;
    }

    const result = await fn(request);
    const bodyStr =
      typeof result === "string" ? result : JSON.stringify(result, null, 2);
    setResponse("success", "Success", bodyStr);
  } catch (err) {
    if (err instanceof WooApiError) {
      const detail = [
        `Status: ${err.status} ${err.statusText}`,
        `URL: ${err.url}`,
        "",
        typeof err.data === "object" && err.data !== null
          ? JSON.stringify(err.data, null, 2)
          : String(err.data),
      ].join("\n");
      setResponse("error", `API Error: ${err.status}`, detail);
    } else {
      const message = err instanceof Error ? err.message : String(err);
      setResponse("error", "Error", message);
    }
  } finally {
    runBtn.disabled = false;
  }
}

moduleSelect.addEventListener("change", populateMethods);
methodSelect.addEventListener("change", updateRouteHint);
runBtn.addEventListener("click", run);

populateModules();
populateMethods();
