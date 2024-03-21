import { appendFile, readFile, writeFile } from 'fs/promises';
import { Path } from 'glob';
import camelCase from 'camelcase';

export function buildChainName(originalChainName: string): string {
  const startNumberRegex = /^\d+/;
  const matches = startNumberRegex.exec(originalChainName);
  const chainNameSuffix = matches != null ? matches[0] : '';
  return originalChainName.replace(startNumberRegex, '') + chainNameSuffix;
}

export async function processChains(chains: Path[], outputPath: string) {
  const chainDataMap = new Set();

  for (const chain of chains) {
    if (!chain.parent) {
      continue;
    }

    const chainName = buildChainName(chain.parent.name);

    const data = await readFile(`${chain.path}/${chain.name}`, 'utf-8');
    const filename = `${outputPath}/${chainName}.ts`;

    if (!chainDataMap.has(chainName)) {
      await writeFile(
        filename,
        `import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'\n\n`
      );
    }

    let suffix = ': Chain';

    if (chain.isNamed('assetlist.json') || chain.isNamed('assetslist.json')) {
      suffix = 'AssetList: AssetList';
    }

    if (chain.isNamed('versions.json')) {
      suffix = 'Versions: ChainVersions';
    }

    await appendFile(
      filename,
      `export const ${camelCase(chainName)}${suffix} = ${data}\n\n`
    );

    chainDataMap.add(chainName);
  }

  return chainDataMap;
}
