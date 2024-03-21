import { mkdir, readFile, writeFile, rm } from 'fs/promises';
import { glob } from 'glob';
import { URL } from 'url';
import type { IBCInfo } from '@chain-registry/types';
import { processChains } from './utils.mjs';
import camelCase from 'camelcase';

const __dirname = new URL('../', import.meta.url).pathname;
const chainRegistryPath = `${__dirname}chain-registry/`;
const mainnetsPath = `${__dirname}src/mainnet`;
const noncosmosPath = `${__dirname}src/noncosmos`;
const testnetsPath = `${__dirname}src/testnet`;

const pathsToIgnore: string[] = [
  '*.schema.json',
  'package.json',
  '_IBC/**/*.json',
  '_memo_keys/**/*.json',
  '_non-cosmos/**/*.json',
  '_template/**/*.json',
  '.github/**/*.json',
  'testnets/**/*.json'
];

const testnetPathsToIgnore: string[] = [
  'testnets/_IBC/**/*.json',
  'testnets/_non-cosmos/**/*.json'
];

async function getFiles(path: string, ignore: string[] = []) {
  const files = await glob(path, {
    ignore: ignore.map((ignoredPath) => chainRegistryPath + ignoredPath),
    withFileTypes: true
  });
  return files;
}

const [
  memoKeys,
  mainnetIBCData,
  mainnetChains,
  testnetChains,
  testnetIBCData,
  noncosmosChains
] = await Promise.all([
  getFiles(`${chainRegistryPath}_memo_keys/**/*.json`),
  getFiles(`${chainRegistryPath}_IBC/**/*.json`),
  getFiles(`${chainRegistryPath}**/*.json`, pathsToIgnore),
  getFiles(`${chainRegistryPath}testnets/**/*.json`, testnetPathsToIgnore),
  getFiles(`${chainRegistryPath}testnets/_IBC/**/*.json`),
  getFiles(`${chainRegistryPath}_non-cosmos/**/*.json`)
]);

await rm(mainnetsPath, { recursive: true, force: true });
await mkdir(mainnetsPath);

const {
  chainDataMap: mainnetChainFiles,
  assetlistDataMap: mainnetAssetListFiles,
  availableChainDataMap: mainnetAvailableChainFiles
} = await processChains(mainnetChains, mainnetsPath);

const ibcInfos: IBCInfo[] = [];

for (const ibcInfo of mainnetIBCData) {
  const data = await readFile(`${ibcInfo.path}/${ibcInfo.name}`, 'utf-8');

  ibcInfos.push(JSON.parse(data));
}

await writeFile(
  `${mainnetsPath}/assets.ts`,
  `${Array.from(mainnetAssetListFiles.keys())
    .map(
      (chain) =>
        `import { ${camelCase(chain as string)}AssetList } from './${chain}'`
    )
    .join('\n')}
    
export const assets = [
${Array.from(mainnetAssetListFiles.keys())
  .map((chain) => `\t${camelCase(chain as string)}AssetList`)
  .join(',\n')}
];
`
);

await writeFile(
  `${mainnetsPath}/chains.ts`,
  `${Array.from(mainnetAvailableChainFiles.keys())
    .map(
      (chain) => `import { ${camelCase(chain as string)} } from './${chain}'`
    )
    .join('\n')}
    
export const chains = [
${Array.from(mainnetAvailableChainFiles.keys())
  .map((chain) => `\t${camelCase(chain as string)}`)
  .join(',\n')}
];
`
);

await writeFile(
  `${mainnetsPath}/ibc.ts`,
  `import type { IBCInfo } from '@chain-registry/types'

  export const mainnetIbc: IBCInfo[] = ${JSON.stringify(ibcInfos)};
`
);

mainnetChainFiles.add('ibc');

const memoKeysPath = memoKeys[0];
const memoKeysData = await readFile(
  `${memoKeysPath.path}/${memoKeysPath.name}`,
  'utf-8'
);

await writeFile(
  `${mainnetsPath}/memo-keys.ts`,
  `import type { MemoKeys } from '@chain-registry/types'

  export const memoKeys: MemoKeys = ${memoKeysData};
`
);

mainnetChainFiles.add('memo-keys');

await writeFile(
  `${mainnetsPath}/index.ts`,
  `${Array.from(mainnetChainFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n')}
  
  export { assets as mainnetAssets } from './assets';
  export { chains as mainnetChains } from './chains';
  `
);

await rm(testnetsPath, { recursive: true, force: true });
await mkdir(testnetsPath);

const {
  chainDataMap: testnetChainFiles,
  assetlistDataMap: testnetAssetListFiles,
  availableChainDataMap: availableChainFiles
} = await processChains(testnetChains, testnetsPath);

const testnetIbcInfos: IBCInfo[] = [];

for (const ibcInfo of testnetIBCData) {
  const data = await readFile(`${ibcInfo.path}/${ibcInfo.name}`, 'utf-8');

  testnetIbcInfos.push(JSON.parse(data));
}

await writeFile(
  `${testnetsPath}/ibc.ts`,
  `import type { IBCInfo } from '@chain-registry/types'

  export const testnetIbc: IBCInfo[] = ${JSON.stringify(testnetIbcInfos)};
`
);

await writeFile(
  `${testnetsPath}/assets.ts`,
  `${Array.from(testnetAssetListFiles.keys())
    .map(
      (chain) =>
        `import { ${camelCase(chain as string)}AssetList } from './${chain}'`
    )
    .join('\n')}
  
  export const assets = [
  ${Array.from(testnetAssetListFiles.keys())
    .map((chain) => `\t${camelCase(chain as string)}AssetList`)
    .join(',\n')}
  ];
  `
);

await writeFile(
  `${testnetsPath}/chains.ts`,
  `${Array.from(availableChainFiles.keys())
    .map(
      (chain) => `import { ${camelCase(chain as string)} } from './${chain}'`
    )
    .join('\n')}
  
export const chains = [
${Array.from(availableChainFiles.keys())
  .map((chain) => `\t${camelCase(chain as string)}`)
  .join(',\n')}
];
  `
);

testnetChainFiles.add('ibc');

await writeFile(
  `${testnetsPath}/index.ts`,
  `${Array.from(testnetChainFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n')}

export { assets as testnetAssets } from './assets';
export { chains as testnetChains } from './chains';
`
);

await rm(noncosmosPath, { recursive: true, force: true });
await mkdir(noncosmosPath);

const { chainDataMap: noncosmosChainFiles } = await processChains(
  noncosmosChains,
  noncosmosPath
);

await writeFile(
  `${noncosmosPath}/assets.ts`,
  `${Array.from(noncosmosChainFiles.keys())
    .map(
      (chain) =>
        `import { ${camelCase(chain as string)}AssetList } from './${chain}'`
    )
    .join('\n')}

export const assets = [
${Array.from(noncosmosChainFiles.keys())
  .map((chain) => `\t${camelCase(chain as string)}AssetList`)
  .join(',\n')}
];
`
);

await writeFile(
  `${noncosmosPath}/index.ts`,
  `${Array.from(noncosmosChainFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n')}

export { assets as noncosmosAssets } from './assets';
`
);
