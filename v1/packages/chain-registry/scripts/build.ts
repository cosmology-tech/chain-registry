// @ts-nocheck

import * as fs from 'fs';
import { sync as glob } from 'glob';
import { mkdirpSync } from 'mkdirp';
import * as path from 'path';
import { jsStringify } from 'strfy-js';

const NON_COSMOS_NETWORK_TYPE = 'noncosmos';
const registryDir = path.resolve( path.join(`${__dirname}/../../../../`, registryDirInRepoPath));
const registryDirInRepoPath = 'repos/chain-registry';

const getValidVarName = (varName) => {
  if (!/^[a-zA-Z_$]/.test(varName)) {
    return `_${varName}`;
  }

  return varName;
};

const write = (filePath, json, TypeName, isArray = false) => {
  const strfy = jsStringify(json, {quotes: 'single', space: 2, inlineArrayLimit: 2});
  const exportType = isArray ? TypeName + '[]' : TypeName;
  fs.writeFileSync(
    filePath,
    `import { ${TypeName} } from '@chain-registry/types';
const info: ${exportType} = ${strfy};
export default info;`
  );
};

const writeChainIndex = (filePath, chainObj) => {
  fs.writeFileSync(
    filePath,
    `${
      chainObj.assets
        ? `import _assets from './assets';
`
        : ''
    }${
      chainObj.chain
        ? `import _chain from './chain';
`
        : ''
    }${
      chainObj.ibc
        ? `import _ibc from './ibc';
`
        : ''
    }
${
  chainObj.assets
    ? `export const assets = _assets;
`
    : ''
}${
      chainObj.chain
        ? `export const chain = _chain;
`
        : ''
    }${
      chainObj.ibc
        ? `export const ibc = _ibc;
`
        : ''
    }`
  );
};

const writeNetworkAssets = (filePath, networkObj) => {
  const validChain = [];
  const importStat = Object.keys(networkObj)
    .map((chain_name) => {
      if (!networkObj[chain_name].assets) {
        return null;
      }

      validChain.push(chain_name);
      return `import * as _${chain_name} from './${chain_name}';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validChain.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { AssetList } from '@chain-registry/types';

${importStat}

const assets: AssetList[] = [\n${validChain
      .map((chain_name) => {
        return `  _${chain_name}.assets`;
      })
      .join(',\n')}
];

export default assets;
`
  );

  return true;
};

const writeNetworkChains = (filePath, networkObj) => {
  const validChain = [];

  const importStat = Object.keys(networkObj)
    .map((chain_name) => {
      if (!networkObj[chain_name].chain) {
        return null;
      }

      validChain.push(chain_name);
      return `import * as _${chain_name} from './${chain_name}';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validChain.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { Chain } from '@chain-registry/types';

${importStat}

const chains: Chain[] = [\n${validChain
      .map((chain_name) => {
        return `  _${chain_name}.chain`;
      })
      .join(',\n')}
];

export default chains;
`
  );

  return true;
};

const writeNetworkIbc = (filePath, networkObj) => {
  const validChain = [];

  const importStat = Object.keys(networkObj)
    .map((chain_name) => {
      if (!networkObj[chain_name].ibc) {
        return null;
      }

      validChain.push(chain_name);
      return `import * as _${chain_name} from './${chain_name}';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validChain.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { IBCInfo } from '@chain-registry/types';

${importStat}

const ibc: IBCInfo[] = [\n${validChain
      .map((chain_name) => {
        return `  ..._${chain_name}.ibc`;
      })
      .join(',\n')}
];

export default ibc;
`
  );

  return true;
};

const writeNamedIndex = (filePath, networkObj) => {
  fs.writeFileSync(
    filePath,
    `${Object.keys(networkObj)
      .map((chain_name) => {
        return `export * as ${getValidVarName(
          chain_name
        )} from './${chain_name}';`;
      })
      .filter(Boolean)
      .join('\n')}`
  );
};

function createExports(isAssets: boolean, isChains: boolean, isIbc: boolean): string {
  // Helper function to collect the export items based on conditions
  function collectExports(items: { key: string, condition: boolean }[]): string {
      return items
          .filter(item => item.condition)
          .map(item => item.key)
          .join(', ');
  }

  // Define the items for export based on the input flags
  const exportItems = [
      { key: 'assets', condition: isAssets },
      { key: 'chains', condition: isChains },
      { key: 'ibc', condition: isIbc }
  ];

  // Collect the export strings
  const exportList = collectExports(exportItems);

  // Create the default and named exports blocks
  const defaultExport = `
export default {
  ${exportList}
};
`;

  const namedExports = `
export {
  ${exportList}
};
`;

  // Concatenate and return the full export string
  return `${defaultExport}${namedExports}`;
}

const writeNetworkAll = (filePath, isAssets, isChains, isIbc) => {
  fs.writeFileSync(
    filePath,
    `${
      isAssets
        ? `import assets from './assets';
`
        : ''
    }${
      isChains
        ? `import chains from './chains';
`
        : ''
    }${
      isIbc
        ? `import ibc from './ibc';
`
        : ''
    }

${createExports(isAssets, isChains, isIbc)}`
  );
};

const writeRootAssets = (filePath, obj) => {
  const validNetwork = [];
  const importStat = Object.keys(obj)
    .map((network_type) => {
      if (!obj[network_type].all_files.isAssets) {
        return null;
      }

      validNetwork.push(network_type);
      return `import * as _${network_type} from './${network_type}/index';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validNetwork.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { AssetList } from '@chain-registry/types';

${importStat}

const assets: AssetList[] = [\n${validNetwork
      .map((network_type) => {
        return `  ..._${network_type}.assets`;
      })
      .join(',\n')}
];

export default assets;
`
  );

  return true;
};

const writeRootChains = (filePath, obj) => {
  const validNetwork = [];

  const importStat = Object.keys(obj)
    .map((network_type) => {
      if (!obj[network_type].all_files.isChains) {
        return null;
      }

      validNetwork.push(network_type);
      return `import * as _${network_type} from './${network_type}/index';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validNetwork.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { Chain } from '@chain-registry/types';

${importStat}

const chains: Chain[] = [\n${validNetwork
      .map((network_type) => {
        return `  ..._${network_type}.chains`;
      })
      .join(',\n')}
];

export default chains;
`
  );

  return true;
};

const writeRootIbc = (filePath, obj) => {
  const validNetwork = [];

  const importStat = Object.keys(obj)
    .map((network_type) => {
      if (!obj[network_type].all_files.isIbc) {
        return null;
      }

      validNetwork.push(network_type);
      return `import * as _${network_type} from './${network_type}/index';`;
    })
    .filter(Boolean)
    .join('\n');

  if (!validNetwork.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    `import { IBCInfo } from '@chain-registry/types';

${importStat}

const ibc: IBCInfo[] = [\n${validNetwork
      .map((network_type) => {
        return `  ..._${network_type}.ibc`;
      })
      .join(',\n')}
];

export default ibc;
`
  );

  return true;
};

const writeRootIndex = (filePath) => {
  fs.writeFileSync(
    filePath,
    `import assets from './assets';
import chains from './chains';
import ibc from './ibc';

export default {
  assets,
  chains,
  ibc
};

export { assets, chains, ibc };`
  );
};

const writeRootNamedFile = (filePath, obj) => {
  let imports = Object.keys(obj)
    .map((network_type) => {
      return `export * from './${network_type}/named';`;
    })
    .filter(Boolean)
    .join('\n');

  imports = `${imports}
import all from './index';

export default all;

const { assets, chains, ibc } = all;

export { assets, chains, ibc };`;

  fs.writeFileSync(filePath, `${imports}`);
};

const initChainBlock = (obj, network_type, chain_name) => {
  if (!obj[network_type]) {
    obj[network_type] = {};
  }

  if (!obj[network_type][chain_name]) {
    obj[network_type][chain_name] = {};
  }
};

const initIBC = (obj, ibcFieldName) => {
  if (!obj[ibcFieldName]) {
    obj[ibcFieldName] = [];
  }
};

const NON_INFO_DIRS = ['_memo_keys', '_scripts', '_template', '.github'];

const chainPaths = glob(`${registryDir}/**/chain.json`).filter(
  (a) => {
    const splitedDirs = a.split(registryDirInRepoPath);
    let dir = splitedDirs.pop();
    dir = path.basename(path.dirname(dir));
    return !NON_INFO_DIRS.includes(dir);
  }
);

const paths = glob(`${registryDir}/**/*.json`)
  .filter((a) => path.basename(a) !== 'package.json')
  .filter((a) => path.basename(a) !== 'package-lock.json')
  .filter((a) => {
  const splitedDirs = a.split(registryDirInRepoPath);
  const filePath = splitedDirs.pop();
  const dir = path.basename(path.dirname(filePath));
  return (
    !NON_INFO_DIRS.includes(dir) && path.basename(filePath) !== 'chain.json'
  );
});

const chainNetworkMap = {};

const result = {};

chainPaths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (!data.$schema) {
    console.warn('problematic data:' + file);
    console.log(data);
    return;
  }

  if (data.$schema.endsWith('chain.schema.json')) {
    if (!data.slip44) data.slip44 = 118;
    if (data.codebase) {
      const newCodebase = {};
      if ('cosmos_sdk_version' in data.codebase) {
        newCodebase.cosmos_sdk_version = data.codebase.cosmos_sdk_version;
      }
      if ('cosmwasm_enabled' in data.codebase) {
        newCodebase.cosmwasm_enabled = data.codebase.cosmwasm_enabled;
      }
      if ('cosmwasm_version' in data.codebase) {
        newCodebase.cosmwasm_version = data.codebase.cosmwasm_version;
      }
      data.codebase = newCodebase;
    }
    delete data.peers;

    if (!data.chain_name) {
      console.log(`problematic file: ${file}`);
      return;
    }

    initChainBlock(result, data.network_type, data.chain_name);

    result[data.network_type][data.chain_name].chain = data;

    chainNetworkMap[data.chain_name] = data.network_type;
  }
});

paths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (!data.$schema) {
    console.warn('problematic data:' + file);
    console.log(data);
    return;
  }

  if (data.$schema.endsWith('assetlist.schema.json')) {
    const network_type = chainNetworkMap[data.chain_name];

    if (!network_type) {
      initChainBlock(result, NON_COSMOS_NETWORK_TYPE, data.chain_name);
      result[NON_COSMOS_NETWORK_TYPE][data.chain_name].assets = data;
    } else {
      result[network_type][data.chain_name].assets = data;
    }
  }

  if (data.$schema.endsWith('ibc_data.schema.json')) {
    const network_type1 = chainNetworkMap[data.chain_1.chain_name];

    if (!network_type1) {
      initChainBlock(result, NON_COSMOS_NETWORK_TYPE, data.chain_1.chain_name);
      initIBC(result[NON_COSMOS_NETWORK_TYPE][data.chain_1.chain_name], 'ibc');
      result[NON_COSMOS_NETWORK_TYPE][data.chain_1.chain_name].ibc.push(data);
    } else {
      initIBC(result[network_type1][data.chain_1.chain_name], 'ibc');
      result[network_type1][data.chain_1.chain_name].ibc.push(data);
    }

    const network_type2 = chainNetworkMap[data.chain_2.chain_name];

    if (!network_type2) {
      initChainBlock(result, NON_COSMOS_NETWORK_TYPE, data.chain_2.chain_name);
      initIBC(result[NON_COSMOS_NETWORK_TYPE][data.chain_2.chain_name], 'ibc');
      result[NON_COSMOS_NETWORK_TYPE][data.chain_2.chain_name].ibc.push(data);
    } else {
      initIBC(result[network_type2][data.chain_2.chain_name], 'ibc');
      result[network_type2][data.chain_2.chain_name].ibc.push(data);
    }
  }
});

const SRC_ROOT = `${__dirname}/../src`;
fs.rmSync(SRC_ROOT, { recursive: true });

Object.keys(result).forEach((network_type) => {
  const networkFolder = path.join(SRC_ROOT, network_type);

  Object.keys(result[network_type]).forEach((chain_name) => {
    const chainFolderPath = path.join(networkFolder, chain_name);
    mkdirpSync(chainFolderPath);

    const chainObj = result[network_type][chain_name];

    if (chainObj.chain) {
      const chainFilePath = path.join(chainFolderPath, 'chain.ts');
      write(chainFilePath, chainObj.chain, 'Chain', false);
    }

    if (chainObj.assets) {
      const assetsFilePath = path.join(chainFolderPath, 'assets.ts');
      write(assetsFilePath, chainObj.assets, 'AssetList', false);
    }

    if (chainObj.ibc) {
      const ibcFilePath = path.join(chainFolderPath, 'ibc.ts');
      write(ibcFilePath, chainObj.ibc, 'IBCInfo', true);
    }

    const indexFilePath = path.join(chainFolderPath, 'index.ts');
    writeChainIndex(indexFilePath, chainObj);
  });

  const assetsFilePath = path.join(networkFolder, 'assets.ts');
  const isAssets = writeNetworkAssets(assetsFilePath, result[network_type]);

  const chainsFilePath = path.join(networkFolder, 'chains.ts');
  const isChains = writeNetworkChains(chainsFilePath, result[network_type]);

  const ibcFilePath = path.join(networkFolder, 'ibc.ts');
  const isIbc = writeNetworkIbc(ibcFilePath, result[network_type]);

  const indexFilePath = path.join(networkFolder, 'named.ts');
  writeNamedIndex(indexFilePath, result[network_type]);

  const allFilePath = path.join(networkFolder, 'index.ts');
  result[network_type]['all_files'] = {
    isAssets,
    isChains,
    isIbc
  };
  writeNetworkAll(allFilePath, isAssets, isChains, isIbc);
});

const assetsRootFilePath = path.join(SRC_ROOT, 'assets.ts');
writeRootAssets(assetsRootFilePath, result);

const chainsRootFilePath = path.join(SRC_ROOT, 'chains.ts');
writeRootChains(chainsRootFilePath, result);

const ibcRootFilePath = path.join(SRC_ROOT, 'ibc.ts');
writeRootIbc(ibcRootFilePath, result);

const indexFilePath = path.join(SRC_ROOT, 'index.ts');
writeRootIndex(indexFilePath);

const namedFilePath = path.join(SRC_ROOT, 'named.ts');
writeRootNamedFile(namedFilePath, result);
