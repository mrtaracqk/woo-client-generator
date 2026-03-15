import path from "node:path";

export const WOO_SDK_GENERATED_DIRECTORY = path.resolve(
  process.cwd(),
  "generated",
  "woo-sdk",
);

export const WOO_SDK_GENERATED_SRC_DIRECTORY = path.join(
  WOO_SDK_GENERATED_DIRECTORY,
  "src",
);

export const WOO_SDK_GENERATED_CORE_DIRECTORY = path.join(
  WOO_SDK_GENERATED_SRC_DIRECTORY,
  "core",
);

export const WOO_SDK_GENERATED_MODELS_DIRECTORY = path.join(
  WOO_SDK_GENERATED_SRC_DIRECTORY,
  "models",
);

export const WOO_SDK_GENERATED_OPERATIONS_DIRECTORY = path.join(
  WOO_SDK_GENERATED_SRC_DIRECTORY,
  "operations",
);
