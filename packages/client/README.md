# @chain-registry/client

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/client"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fclient%2Fpackage.json"></a>
</p>

A Client for `chain-registry` that allows you to dynamically fetch data.

## Usage

```js
import { ChainRegistryFetcher, ChainRegistryFetcherOptions } from '@chain-registry/client';

const options: ChainRegistryFetcherOptions = {
  urls: [
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
  ]
};
const registry = new ChainRegistryFetcher(options);
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

You can get generated asset lists directly from the registry:

```js
// generated asset lists
const generated: AssetList[] = registry.getGeneratedAssetLists('osmosis');
```

You can get generated `AssetList[]` objects directly from the `ChainRegistry` via the `assetLists` method:

```js
// you can also get generated assets from ChainInfo object
const chainInfo: Chain = registry.getChainInfo('osmosis');
const generatedAssets: AssetList[] = chainInfo.assetLists;
```
## Chain info

You can get `Chain` object directly from the `ChainRegistry` via the `getChain` method:

```js
// get Chain from registry
const chain: Chain = registry.getChain('osmosis');
```

or get the `ChainInfo` object:

```js
const chainInfo: ChainInfo = registry.getChainInfo('osmosis');

// AssetList[] of the generated assets
const assets: AssetList[] = chainInfo.assetLists;

// Chain 
const chain: Chain = chainInfo.chain;

// Native asset list
const nativeAssetList: AssetList = chainInfo.nativeAssetList;
```

## Related

Checkout these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) an npm module for the official Cosmos chain-registry.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) set up a modern Cosmos app by running one command.
* [starship](https://github.com/cosmology-tech/starship) a k8s-based unified development environment for Cosmos Ecosystem

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)
