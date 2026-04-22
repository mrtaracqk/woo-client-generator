import { spawn } from "node:child_process";
import path from "node:path";

const COMPOSE_FILE = "scripts/woo/fixture/docker-compose.yml";
const DEFAULT_BASE_URL = "http://127.0.0.1:8081";
const WAIT_ATTEMPTS = 60;
const WAIT_INTERVAL_MS = 2000;
const SETTLE_MS = 3000;

const loadLocalEnvFiles = (): void => {
  try {
    process.loadEnvFile(".env");
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return;
    }
    throw error;
  }
  try {
    process.loadEnvFile(".env.local");
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return;
    }
    throw error;
  }
};

const getBaseUrl = (): string =>
  process.env.WOO_REST_SNAPSHOT_BASE_URL ??
  process.env.WOO_BASE_URL ??
  process.env.WOO_FIXTURE_SITE_URL ??
  DEFAULT_BASE_URL;

const run = (command: string, args: string[]): Promise<void> =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
    });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(
            signal
              ? `${command} exited via ${signal}`
              : `${command} exited with code ${code}`,
          ),
        );
    });
  });

const waitForUrl = async (url: string): Promise<void> => {
  const u = new URL(url);
  for (let i = 0; i < WAIT_ATTEMPTS; i++) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return;
    } catch {
      // ignore
    }
    if (i < WAIT_ATTEMPTS - 1) {
      process.stdout.write(`Waiting for ${u.origin}... (${i + 1}/${WAIT_ATTEMPTS})\n`);
      await new Promise((r) => setTimeout(r, WAIT_INTERVAL_MS));
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const main = async (): Promise<void> => {
  loadLocalEnvFiles();
  const baseUrl = getBaseUrl().replace(/\/+$/, "");
  const composePath = path.resolve(process.cwd(), COMPOSE_FILE);

  console.log("Starting fixture (db + wordpress)...");
  await run("docker", [
    "compose",
    "-f",
    composePath,
    "up",
    "-d",
    "db",
    "wordpress",
  ]);

  console.log("Waiting for WordPress...");
  await waitForUrl(`${baseUrl}/wp-json`);

  console.log("Bootstrapping WooCommerce...");
  await run("docker", [
    "compose",
    "-f",
    composePath,
    "run",
    "--rm",
    "wpcli",
    "sh",
    "/workspace/scripts/woo/fixture/bootstrap.sh",
  ]);

  await sleep(SETTLE_MS);

  console.log("Generating SDK...");
  await run("npm", ["run", "generate:woo", "--", `--base-url=${baseUrl}`]);

  console.log("Done. SDK is in generated/woo-sdk/");
};

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
