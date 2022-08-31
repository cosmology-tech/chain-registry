# @chain-registry/utils

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184277736-69fef40f-1991-4c0e-b979-da125cf7fd8f.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/utils"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Futils%2Fpackage.json"></a>
</p>

Utility functions for the chain-registry 


## Usage

```js
import { ChainRegistry, ChainRegistryOptions } from '@chain-registry/utils';

const options: ChainRegistryOptions = {
  urls: [
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
  ]
};
const registry = new ChainRegistry(options);
await registry.fetchUrls();
```

## Fetching Schemata

We currently only support fetching JSON schemas as defined in https://github.com/cosmos/chain-registry. Supported are `assetlist.schema.json`, `chain.schema.json` and `ibc_data.schema.json`.

### fetchUrls

You can set the `ChainRegistry.urls` property and call `ChainRegistry.fetchUrls()`

```js
registry.urls = [
  // urls to fetch
];
await registry.fetchUrls();
```

### fetch

Or, you can simply call `ChainRegistry.fetch()`

```js
await registry.fetch('https://some-json-schema.com/some-schema.json');
```

## Asset lists

```js
// generated asset lists
const generated = registry.getGeneratedAssetLists('osmosis');

// you can also get generated assets from ChainInfo object
const chainInfo = registry.getChainInfo('osmosis');
const generatedAssets = chainInfo.assetLists();
```
## Chain info

```js
const chainInfo = registry.getChainInfo('osmosis');

// AssetList[] of the generated assets
chainInfo.assetLists();

// Chain 
chainInfo.chain();

// AssetList[] of the native assets
chainInfo.nativeAssetLists();
```

