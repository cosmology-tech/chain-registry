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
    chain_name: 'gravitybridge',
    client_id: '07-tendermint-39',
    connection_id: 'connection-50'
  },
  chain_2: {
    chain_name: 'persistence',
    client_id: '07-tendermint-51',
    connection_id: 'connection-49'
  },
  channels: [
    {
      chain_1: {
        channel_id: 'channel-24',
        port_id: 'transfer'
      },
      chain_2: {
        channel_id: 'channel-38',
        port_id: 'transfer'
      },
      ordering: 'unordered',
      version: 'ics20-1',
      tags: {}
    }
  ]
});

const bridge = assets.find((list) => list.chain_name === 'gravitybridge');
bridge.assets.push({
  description:
    'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
  denom_units: [
    {
      denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      exponent: 0
    }
  ],
  base: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
  name: 'pSTAKE Finance',
  display: 'pstake',
  symbol: 'PSTAKE',
  traces: [
    {
      type: 'liquid-stake',
      counterparty: {
        chain_name: 'persistence',
        base_denom: 'XPRT'
      },
      provider: 'Persistence'
    },
    {
      type: 'bridge',
      counterparty: {
        chain_name: 'ethereum',
        base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
      },
      provider: 'Gravity Bridge'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
  },
  coingecko_id: 'pstake-finance'
});

write(`assets`, assets, 'AssetList', true);
write(`chains`, chains, 'Chain', true);
write(`ibc`, ibcs, 'IBCInfo', true);
