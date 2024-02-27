const { getAssetLists } = require('@chain-registry/utils');
const { assets, chains, ibc } = require('chain-registry');
const { rmSync, writeFileSync } = require('fs');
const { mkdirpSync } = require('mkdirp');
const path = require('path');

const NON_COSMOS_NETWORK_TYPE = 'noncosmos';

const chainNetworkMap = {};
const networkChainMap = {};

console.log(chains);

chains.filter(Boolean).forEach((chain) => {
  if (!chain) {
    console.log('problematic data');
    return;
  }

  chainNetworkMap[chain.chain_name] = chain.network_type;
});

const asset_lists = assets.filter(Boolean).reduce((m, { chain_name }) => {
  return [...m, ...getAssetLists(chain_name, ibc, assets)];
}, []);

const SRC_ROOT = `${__dirname}/../src`;
rmSync(SRC_ROOT, { recursive: true, force: true });

const getValidVarName = (varName) => {
  if (!/^[a-zA-Z_$]/.test(varName)) {
    return `_${varName}`;
  }

  return varName;
};

const writeNetworkIndex = (filePath, networkObj) => {
  writeFileSync(
    filePath,
    `${Object.keys(networkObj)
      .map((chain_name) => {
        return `export * as ${getValidVarName(
          chain_name
        )} from './${chain_name}'`;
      })
      .filter(Boolean)
      .join(';\n')}`
  );
};

const writeNetworkAssets = (filePath, networkObj) => {
  const validChain = [];
  const importStat = Object.keys(networkObj)
    .map((chain_name) => {
      validChain.push(chain_name);
      return `import _${chain_name} from './${chain_name}'`;
    })
    .filter(Boolean)
    .join(';\n');

  if (!validChain.length) {
    return false;
  }

  writeFileSync(
    filePath,
    `import { AssetList } from '@chain-registry/types';

${importStat}

const assets: AssetList[] = [${validChain
      .map((chain_name) => {
        return `_${chain_name}`;
      })
      .join(',')}];

export default assets;
`
  );

  return true;
};

const write = (filePath, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + '[]' : TypeName;
  writeFileSync(
    filePath,
    `import { ${TypeName} } from '@chain-registry/types';
const assets: ${exportType} = ${strfy};
export default assets;
    `
  );
};

const writeRootAssets = (filePath, obj) => {
  const validNetwork = [];
  const importStat = Object.keys(obj)
    .map((network_type) => {
      validNetwork.push(network_type);
      return `import _${network_type} from './${network_type}/assets'`;
    })
    .filter(Boolean)
    .join(';\n');

  if (!validNetwork.length) {
    return false;
  }

  writeFileSync(
    filePath,
    `import { AssetList } from '@chain-registry/types';

${importStat}

const asset_lists: AssetList[] = [${validNetwork
      .map((network_type) => {
        return `..._${network_type}`;
      })
      .join(',')}];

export default asset_lists;
`
  );

  return true;
};

const writeRootIndex = (filePath, obj) => {
  let imports = Object.keys(obj)
    .map((network_type) => {
      return `export * from './${network_type}'`;
    })
    .filter(Boolean)
    .join(';\n');

  imports = `${imports}; import asset_lists from './asset_lists';

  export default {
    asset_lists
  };

  export { asset_lists };
`;

  writeFileSync(filePath, `${imports}`);
};

asset_lists.forEach((list) => {
  const network_type =
    chainNetworkMap[list.chain_name] ?? NON_COSMOS_NETWORK_TYPE;

  if (!networkChainMap[network_type]) {
    networkChainMap[network_type] = {};
  }
  networkChainMap[network_type][list.chain_name] = true;
  const networkFolder = path.join(SRC_ROOT, network_type);

  mkdirpSync(networkFolder);

  const filePath = path.join(networkFolder, `${list.chain_name}.ts`);
  write(filePath, list, 'AssetList', false);
});

Object.keys(networkChainMap).forEach((network_type) => {
  const networkFolder = path.join(SRC_ROOT, network_type);

  const assetsFilePath = path.join(networkFolder, 'assets.ts');
  writeNetworkAssets(assetsFilePath, networkChainMap[network_type]);

  const indexFilePath = path.join(networkFolder, 'index.ts');
  writeNetworkIndex(indexFilePath, networkChainMap[network_type]);
});

const assetsRootFilePath = path.join(SRC_ROOT, 'asset_lists.ts');
writeRootAssets(assetsRootFilePath, networkChainMap);

const indexRootFilePath = path.join(SRC_ROOT, 'index.ts');
writeRootIndex(indexRootFilePath, networkChainMap);
