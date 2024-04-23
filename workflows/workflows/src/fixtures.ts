import { sync as glob } from "glob";
import { basename, dirname, join, relative } from "path";

export const NON_INFO_DIRS: string[] = [
  '_memo_keys',
  '_scripts',
  '_template',
  '.github'
];
const REG_DIR: string = 'chain-registry/chain-registry';
export const registryDir: string = join(__dirname, `/../../../packages/${REG_DIR}`);

// Type definitions for file path processing results
export interface FilePathInfo {
  filepath: string;
  origpath: string;
}

// Helper function to filter and map file paths
function filterAndMapFiles(paths: string[]): FilePathInfo[] {
  return paths.filter(path => {
    const relativePath: string = path.split(REG_DIR)[1];
    const dir: string = basename(dirname(relativePath));
    return !NON_INFO_DIRS.includes(dir);
  }).map(path => {
    const relativePath: string = path.split(REG_DIR)[1];
    return {
      filepath: relativePath,
      origpath: relative(process.cwd(), path)
    };
  });
}

// Glob patterns for different JSON files
const globPatterns: { [key: string]: string } = {
  chains: `${registryDir}/**/chain.json`,
  assetLists: `${registryDir}/**/assetlist.json`,
  ibcInfo: `${registryDir}/**/_IBC/*-*.json`,
  schemas: `${registryDir}/*.schema.json`
};

// Using the helper function to process files
export const chains: FilePathInfo[] = filterAndMapFiles(glob(globPatterns.chains));
export const assetLists: FilePathInfo[] = filterAndMapFiles(glob(globPatterns.assetLists));
export const ibcInfo: FilePathInfo[] = filterAndMapFiles(glob(globPatterns.ibcInfo));
export const schemas: FilePathInfo[] = filterAndMapFiles(glob(globPatterns.schemas));
