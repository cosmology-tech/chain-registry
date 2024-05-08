# @chain-registry/osmosis

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/osmosis"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fosmosis%2Fpackage.json"></a>
</p>

Chain Registry info for Osmosis, including asset lists.

```
npm install @chain-registry/osmosis
```

```js
import { chain, assets, asset_list, testnet, testnet_assets } from '@chain-registry/osmosis';
```

```js
console.log(asset_list);
{
  chain_name: 'osmosis',
  assets: [
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [Array],
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Somm',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: [Object],
      coingecko_id: 'sommelier',
      ibc: [Object]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [Array],
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: [Object],
      coingecko_id: 'stargaze',
      ibc: [Object]
    },
    // ... more assets
  ]
}
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
