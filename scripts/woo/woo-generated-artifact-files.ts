const GENERATED_FILE_VERSION_PREFIX = 'woo-v';
const GENERATED_FILE_SUFFIXES = [
  '.snapshot.json',
  '.manifest.json',
  '.sdk-manifest.json',
] as const;

interface ParsedSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
}

export const resolveLatestWooGeneratedFileName = (
  entries: string[],
  suffix: string,
): string | undefined =>
  [...entries]
    .filter((entry) => entry.endsWith(suffix))
    .sort(compareGeneratedArtifactFileNamesDesc)[0];

const compareGeneratedArtifactFileNamesDesc = (
  left: string,
  right: string,
): number => {
  const leftVersion = parseGeneratedFileVersion(left);
  const rightVersion = parseGeneratedFileVersion(right);

  if (leftVersion && rightVersion) {
    const versionComparison = compareSemver(leftVersion, rightVersion);

    if (versionComparison !== 0) {
      return -versionComparison;
    }
  } else if (leftVersion) {
    return -1;
  } else if (rightVersion) {
    return 1;
  }

  return right.localeCompare(left);
};

const parseGeneratedFileVersion = (
  fileName: string,
): ParsedSemver | undefined => {
  if (!fileName.startsWith(GENERATED_FILE_VERSION_PREFIX)) {
    return undefined;
  }

  const version = GENERATED_FILE_SUFFIXES.reduce<string | undefined>(
    (resolvedVersion, candidateSuffix) => {
      if (resolvedVersion || !fileName.endsWith(candidateSuffix)) {
        return resolvedVersion;
      }

      return fileName.slice(
        GENERATED_FILE_VERSION_PREFIX.length,
        -candidateSuffix.length,
      );
    },
    undefined,
  );

  if (!version) {
    return undefined;
  }

  return parseSemver(version);
};

const parseSemver = (value: string): ParsedSemver | undefined => {
  const match = value.match(
    /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
  );

  if (!match?.groups) {
    return undefined;
  }

  return {
    major: Number(match.groups.major),
    minor: Number(match.groups.minor),
    patch: Number(match.groups.patch),
    prerelease: match.groups.prerelease?.split('.') ?? [],
  };
};

const compareSemver = (left: ParsedSemver, right: ParsedSemver): number => {
  const coreComparison =
    compareNumber(left.major, right.major) ||
    compareNumber(left.minor, right.minor) ||
    compareNumber(left.patch, right.patch);

  if (coreComparison !== 0) {
    return coreComparison;
  }

  return comparePrerelease(left.prerelease, right.prerelease);
};

const compareNumber = (left: number, right: number): number => left - right;

const comparePrerelease = (left: string[], right: string[]): number => {
  if (left.length === 0 && right.length === 0) {
    return 0;
  }

  if (left.length === 0) {
    return 1;
  }

  if (right.length === 0) {
    return -1;
  }

  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    const leftIdentifier = left[index];
    const rightIdentifier = right[index];

    if (leftIdentifier === undefined) {
      return -1;
    }

    if (rightIdentifier === undefined) {
      return 1;
    }

    const identifierComparison = comparePrereleaseIdentifier(
      leftIdentifier,
      rightIdentifier,
    );

    if (identifierComparison !== 0) {
      return identifierComparison;
    }
  }

  return 0;
};

const comparePrereleaseIdentifier = (left: string, right: string): number => {
  const leftNumeric = parseNumericPrereleaseIdentifier(left);
  const rightNumeric = parseNumericPrereleaseIdentifier(right);

  if (leftNumeric !== undefined && rightNumeric !== undefined) {
    return compareNumber(leftNumeric, rightNumeric);
  }

  if (leftNumeric !== undefined) {
    return -1;
  }

  if (rightNumeric !== undefined) {
    return 1;
  }

  return left.localeCompare(right);
};

const parseNumericPrereleaseIdentifier = (
  value: string,
): number | undefined => {
  if (!/^(0|[1-9]\d*)$/.test(value)) {
    return undefined;
  }

  return Number(value);
};
