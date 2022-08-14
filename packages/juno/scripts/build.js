import { getIbcAssets } from '@chain-registry/utils';
import { assets, chains, ibc } from 'chain-registry';
import { writeFileSync } from 'fs';

const chainName = 'juno';

const ibc_assets = assets.reduce((m, { chain_name }) => {
  if (chain_name !== chainName) return m;
  return [...m, ...getIbcAssets(chain_name, ibc, assets)];
}, []);

const assetList = assets.find((list) => list.chain_name === chainName);
const chain = chains.find((chain) => chain.chain_name === chainName);

const write = (file, json) => {
  writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `export default ` + JSON.stringify(json, null, 2) + ';'
  );
};

write(`chain`, chain);
write(`assets`, assetList);
write(`ibc_assets`, ibc_assets);
