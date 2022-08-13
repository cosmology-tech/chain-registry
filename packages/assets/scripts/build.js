import { getIbcAssets } from '@chain-registry/utils';
import { assets, ibc } from 'chain-registry';
import { writeFileSync } from 'fs';

const ibc_assets = assets.reduce((m, { chain_name }) => {
  return [...m, ...getIbcAssets(chain_name, ibc, assets)];
}, []);

const write = (file, json) => {
  writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `export default ` + JSON.stringify(json, null, 2) + ';'
  );
};

write(`ibc_assets`, ibc_assets);
