import { getAssetLists } from '@chain-registry/utils';
import { assets, ibc } from 'chain-registry';
import { writeFileSync } from 'fs';

const asset_lists = assets.reduce((m, { chain_name }) => {
  return [...m, ...getAssetLists(chain_name, ibc, assets)];
}, []);

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

write(`asset_lists`, asset_lists, 'AssetList', true);
