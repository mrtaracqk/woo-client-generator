import { spawn } from "node:child_process";
import { parseArgs } from "node:util";
import { DEFAULT_NAMESPACE } from "./woo-rest-snapshot-fetch";

const DEFAULT_BASE_URL = "http://127.0.0.1:8081";

interface CliOptions {
  baseUrl: string;
  namespace: string;
  tearDown: boolean;
}

const main = async (): Promise<void> => {
  loadLocalEnvFiles();

  const options = parseCliOptions();

  try {
    for (const step of buildSyncSteps(options)) {
      await runCommand(step.command, step.args);
    }
  } finally {
    if (options.tearDown) {
      await runCommand("npm", ["run", "woo:fixture:down"]);
    }
  }
};

const loadLocalEnvFiles = (): void => {
  try {
    process.loadEnvFile(".env");
  } catch (error) {
    ignoreMissingEnvFile(error);
  }

  try {
    process.loadEnvFile(".env.local");
  } catch (error) {
    ignoreMissingEnvFile(error);
  }
};

const parseCliOptions = (): CliOptions => {
  const parsed = parseArgs({
    allowPositionals: false,
    options: {
      "base-url": {
        type: "string",
      },
      namespace: {
        type: "string",
      },
      "keep-up": {
        type: "boolean",
        default: false,
      },
    },
  });

  return {
    baseUrl:
      parsed.values["base-url"] ??
      process.env.WOO_REST_SNAPSHOT_BASE_URL ??
      process.env.WOO_FIXTURE_SITE_URL ??
      DEFAULT_BASE_URL,
    namespace:
      parsed.values.namespace ??
      process.env.WOO_REST_SNAPSHOT_NAMESPACE ??
      DEFAULT_NAMESPACE,
    tearDown: !parsed.values["keep-up"],
  };
};

const buildSyncSteps = (
  options: CliOptions,
): Array<{ args: string[]; command: string }> => [
  {
    command: "npm",
    args: ["run", "woo:fixture:up"],
  },
  {
    command: "npm",
    args: ["run", "woo:fixture:bootstrap"],
  },
  {
    command: "npm",
    args: [
      "run",
      "generate:woo:snapshot",
      "--",
      `--base-url=${options.baseUrl}`,
      `--namespace=${options.namespace}`,
    ],
  },
  {
    command: "npm",
    args: ["run", "generate:woo:manifest"],
  },
  {
    command: "npm",
    args: ["run", "generate:woo:sdk-manifest"],
  },
  {
    command: "npm",
    args: ["run", "generate:woo:sdk"],
  },
  {
    command: "npm",
    args: ["run", "generate:woo:definitions"],
  },
  {
    command: "npm",
    args: ["run", "generate:woo:check"],
  },
];

const ignoreMissingEnvFile = (error: unknown): void => {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "ENOENT"
  ) {
    return;
  }

  throw error;
};

const runCommand = async (command: string, args: string[]): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      if (signal) {
        reject(new Error(`${command} ${args.join(" ")} exited via ${signal}`));
        return;
      }

      reject(
        new Error(`${command} ${args.join(" ")} exited with code ${code}`),
      );
    });
  });
};

void main().catch((error: unknown) => {
  const message =
    error instanceof Error ? error.message : "Unknown Woo sync error";

  console.error(message);
  process.exitCode = 1;
});
