# chain-registry

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/chain-registry"><img height="20" src="https://img.shields.io/npm/dt/chain-registry"></a>
   <a href="https://www.npmjs.com/package/chain-registry"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fchain-registry%2Fpackage.json"></a>
</p>

The npm package for the Official Cosmos [chain registry](https://github.com/cosmos/chain-registry)


```
npm install chain-registry
```

A unified store of chains info, assets, asset lists, and IBC channels for the Cosmos ecosystem. Get everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.

## example

Fetch data from chain-registry:

```js
import { assets, chains, ibc } from 'chain-registry';

const assetList = assets.find(({chain_name})=>chain_name==='osmosis');

console.log(assetList);
```

will output:

```js
{
  '$schema': '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [Array],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: [Object],
      coingecko_id: 'osmosis'
    },
    {
      denom_units: [Array],
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: [Object],
      coingecko_id: 'ion'
    }
  ]
}
```

Dynamically fetch data:

```js
import { ChainRegistryClient } from '@chain-registry/client';

// create an instance of ChainRegistryClient by passing in the chain names
const client = new ChainRegistryClient({
  chainNames: [
    'osmosis',
    'juno',
    'stargaze'
  ]
});

// chain info, assets and ibc data will be downloaded dynamically by invoking fetchUrls method
await client.fetchUrls();
// get chain data
const chain = client.getChain('osmosis');
// get asset list
const assetList = client.getChainAssetList('osmosis');
// get ibc data
const ibcData = client.getChainIbcData('osmosis);
// get asset list (including ibc assets)
const generatedAssetList = client.getGeneratedAssetLists('osmosis);

```


## packages

#### [chain-registry](packages/chain-registry)

An npm module for the Official `chain-registry` for the Cosmos ⚛️

#### [@chain-registry/client](packages/client)

A Client for `chain-registry` that allows you to dynamically fetch data.

#### [@chain-registry/types](packages/types)

Types for `chain-registry`.

#### [@chain-registry/keplr](packages/keplr)

Keplr integration for the chain-registry returning keplr's `ChainInfo` type from `@chain-registry/types` `Chain` type.

#### [@chain-registry/assets](packages/assets)

Asset lists for the Cosmos ⚛️

#### [@chain-registry/osmosis](packages/osmosis)

Chain Registry info for Osmosis, including asset lists.

#### [@chain-registry/juno](packages/juno)

Chain Registry info for Juno, including asset lists.

#### [@chain-registry/utils](packages/utils)

Utility functions for `chain-registry`.

## Developing

Checkout the repository and bootstrap the yarn workspace:

```sh
# Clone the repo.
git clone https://github.com/cosmology-tech/chain-registry
yarn
yarn bootstrap
```
### Building

```sh
yarn build
```

### Publishing

First, `cd` into the root folder of the project:

```sh
cd /your/path/to/chain-registry
```

Second, update the git submodules:

```sh
git submodule update --remote
```

Third, generate the code (this takes a bit since it does some linting):

```sh
yarn codegen
```

Finally, commit and publish the code!

```sh
git commit -am "new registry updates"
lerna publish
```

## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
