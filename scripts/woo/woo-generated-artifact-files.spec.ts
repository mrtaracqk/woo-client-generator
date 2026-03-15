import { resolveLatestWooGeneratedFileName } from './woo-generated-artifact-files';

describe('woo-generated-artifact-files', () => {
  it('selects the highest semver snapshot instead of lexicographic latest', () => {
    expect(
      resolveLatestWooGeneratedFileName(
        [
          'woo-v9.9.7.snapshot.json',
          'woo-v10.0.0.snapshot.json',
          'woo-v10.5.1.snapshot.json',
        ],
        '.snapshot.json',
      ),
    ).toBe('woo-v10.5.1.snapshot.json');
  });

  it('prefers stable releases over prereleases for the same core version', () => {
    expect(
      resolveLatestWooGeneratedFileName(
        [
          'woo-v10.5.1-rc.1.sdk-manifest.json',
          'woo-v10.5.1.sdk-manifest.json',
          'woo-v10.4.9.manifest.json',
        ],
        '.sdk-manifest.json',
      ),
    ).toBe('woo-v10.5.1.sdk-manifest.json');
  });

  it('falls back to lexicographic ordering when filenames are not versioned', () => {
    expect(
      resolveLatestWooGeneratedFileName(
        ['wc.v2.snapshot.json', 'wc.v3.snapshot.json'],
        '.snapshot.json',
      ),
    ).toBe('wc.v3.snapshot.json');
  });

  it('prefers versioned artifacts when mixed with unversioned files', () => {
    expect(
      resolveLatestWooGeneratedFileName(
        ['wc.v99.snapshot.json', 'woo-v10.0.0.snapshot.json'],
        '.snapshot.json',
      ),
    ).toBe('woo-v10.0.0.snapshot.json');
  });
});
