const fs = require('fs');
const deepmerge = require('deepmerge');
const { resolve, basename, extname } = require('path');
const glob = require('glob').sync;

const paths = glob(`${__dirname}/../chain-registry/**/*.json`);
const assets = [];
const chains = [];
const ibcs = [];
paths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (data.$schema === '../assetlist.schema.json') assets.push(data);
  if (data.$schema === '../chain.schema.json') chains.push(data);
  if (data.$schema === '../ibc_data.schema.json') ibcs.push(data);
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
    (c) => c.chain_id === chain.chain_id
  );
  if (existingChainIndex > -1) {
    const existingChain = chains[existingChainIndex];
    chains[existingChainIndex] = deepmerge(existingChain, chain);
  } else {
    chains.push(chain);
  }
});

addAssets.forEach((asset) => {
  const existingIndex = assets.findIndex((c) => c.chain_id === asset.chain_id);
  if (existingIndex > -1) {
    assets[existingIndex] = deepmerge(assets[existingIndex], asset);
  } else {
    assets.push(asset);
  }
});

fs.writeFileSync(
  `${__dirname}/../src/assets.json`,
  JSON.stringify(assets, null, 2)
);
fs.writeFileSync(
  `${__dirname}/../src/chains.json`,
  JSON.stringify(chains, null, 2)
);
fs.writeFileSync(`${__dirname}/../src/ibc.json`, JSON.stringify(ibcs, null, 2));
