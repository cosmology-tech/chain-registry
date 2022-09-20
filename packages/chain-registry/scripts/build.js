const fs = require('fs');
const deepmerge = require('deepmerge');
const glob = require('glob').sync;

const paths = glob(`${__dirname}/../chain-registry/**/*.json`);
const assets = [];
const chains = [];
const ibcs = [];
paths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (data.$schema.endsWith('assetlist.schema.json')) assets.push(data);
  if (data.$schema.endsWith('chain.schema.json')) chains.push(data);
  if (data.$schema.endsWith('ibc_data.schema.json')) ibcs.push(data);
});

const addPaths = glob(`${__dirname}/../chain-registry-additions/**/*.json`);
const addAssets = [];
const addChains = [];
addPaths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (data.$schema === '../assetlist.schema.json') addAssets.push(data);
  if (data.$schema === '../chain.schema.json') addChains.push(data);
});

addChains.forEach((chain) => {
  const existingChainIndex = chains.findIndex(
    (c) => c.chain_name === chain.chain_name
  );
  if (existingChainIndex > -1) {
    const existingChain = chains[existingChainIndex];
    chains[existingChainIndex] = deepmerge(existingChain, chain);
  } else {
    chains.push(chain);
  }
});

chains.forEach((chain) => {
  if (!chain.slip44) chain.slip44 = 118;
});

addAssets.forEach((asset) => {
  const existingIndex = assets.findIndex(
    (c) => c.chain_name === asset.chain_name
  );
  if (existingIndex > -1) {
    assets[existingIndex] = deepmerge(assets[existingIndex], asset);
  } else {
    assets.push(asset);
  }
});

const write = (file, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + '[]' : TypeName;
  fs.writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `import { ${TypeName} } from '@chain-registry/types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

ibcs.push({
  $schema: '../ibc_data.schema.json',
  chain_1: {
    chain_name: 'persistence',
    client_id: '07-tendermint-unknown',
    connection_id: 'connection-unknown'
  },
  chain_2: {
    chain_name: 'gravitybridge',
    client_id: '07-tendermint-unknown',
    connection_id: 'connection-unknown'
  },
  channels: [
    {
      chain_1: {
        channel_id: 'channel-38',
        port_id: 'transfer'
      },
      chain_2: {
        channel_id: 'channel-unknown',
        port_id: 'transfer'
      },
      ordering: 'unordered',
      version: 'ics20-1',
      tags: {
        status: 'live',
        preferred: true
      }
    }
  ]
});

write(`assets`, assets, 'AssetList', true);
write(`chains`, chains, 'Chain', true);
write(`ibc`, ibcs, 'IBCInfo', true);
