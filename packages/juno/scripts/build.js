import { getAssetLists } from '@chain-registry/utils';
import { assets, chains, ibc } from 'chain-registry';
import { writeFileSync } from 'fs';

const chainName = 'juno';

const asset_list = assets.reduce((m, { chain_name }) => {
  if (chain_name !== chainName) return m;
  return [...m, ...getAssetLists(chain_name, ibc, assets)];
}, []);

const assetList = assets.find((list) => list.chain_name === chainName);
const chain = chains.find((chain) => chain.chain_name === chainName);
const testnet = chains.find(
  (chain) => chain.chain_name === chainName + 'testnet'
);
const testnetAssetList = assets.find(
  (list) => list.chain_name === chainName + 'testnet'
);

const write = (file, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + '[]' : TypeName;
  writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `import { ${TypeName} } from '@chain-registry/types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

write(`chain`, chain, 'Chain');
write(`testnet`, testnet, 'Chain');
write(`assets`, assetList, 'AssetList');
write(`testnet_assets`, testnetAssetList, 'AssetList');
write(`asset_list`, asset_list[0], 'AssetList');
