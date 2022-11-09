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

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)
