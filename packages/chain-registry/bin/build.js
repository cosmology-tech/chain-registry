const fs = require('fs');
const deepmerge = require('deepmerge');
const { resolve, basename, extname } = require('path');
const glob = require('glob').sync;
const { getIbcAssets } = require('@chain-registry/utils');

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

const ibc_assets = assets.reduce((m, {chain_name})=>{
  return [...m, ...getIbcAssets(
    chain_name,
    ibcs,
    assets
  )];
}, [])

const write = (file, json) => {
  fs.writeFileSync(
    `${__dirname}/../src/${file}.js`,
    `module.exports = ` + JSON.stringify(json, null, 2) + ';'
  );
};


write(`assets`, assets);
write(`ibc_assets`, ibc_assets);
write(`chains`, chains);
write(`ibc`, ibcs);
