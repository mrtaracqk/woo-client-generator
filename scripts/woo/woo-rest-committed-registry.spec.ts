import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { GENERATED_OPERATION_DEFINITIONS } from '../../src/woo-core/operation-registry/generated/generated-operation-definitions';
import { buildGeneratedRegistryOperationSpecs } from './woo-rest-generated-definitions';
import { resolveLatestWooGeneratedFileName } from './woo-generated-artifact-files';
import { GeneratedWooOperationManifest } from './woo-rest-manifest';

const GENERATED_DIRECTORY = path.resolve(
  process.cwd(),
  'generated',
  'woo-rest',
);

const resolveLatestManifestPath = (): string => {
  const fileName = resolveLatestWooGeneratedFileName(
    readdirSync(GENERATED_DIRECTORY),
    '.manifest.json',
  );

  if (!fileName) {
    throw new Error(
      `No Woo REST manifest files found in ${path.relative(process.cwd(), GENERATED_DIRECTORY)}`,
    );
  }

  return path.join(GENERATED_DIRECTORY, fileName);
};

describe('committed generated registry coverage', () => {
  it('exposes every committed manifest operation without filtering', () => {
    const manifest = JSON.parse(
      readFileSync(resolveLatestManifestPath(), 'utf8'),
    ) as GeneratedWooOperationManifest;
    const expectedRegistryOperations = buildGeneratedRegistryOperationSpecs(
      manifest,
    ).map((spec) => ({
      method: spec.method,
      operationKey: spec.operationKey,
      routeTemplate: spec.routeTemplate,
      toolName: spec.toolName,
    }));
    const actualRegistryOperations = GENERATED_OPERATION_DEFINITIONS.map(
      (definition) => {
        const executionInput = definition.buildExecutionInput({});

        return {
          method: executionInput.execution.method,
          operationKey: definition.operationKey,
          routeTemplate: executionInput.execution.routeTemplate,
          toolName: definition.toolName,
        };
      },
    );

    expect(actualRegistryOperations).toEqual(expectedRegistryOperations);
    expect(GENERATED_OPERATION_DEFINITIONS).toHaveLength(
      manifest.operations.length,
    );
    expect(
      GENERATED_OPERATION_DEFINITIONS.every(
        (definition) => definition.annotations?.openWorldHint === true,
      ),
    ).toBe(true);
  });
});
