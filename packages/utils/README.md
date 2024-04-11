# @chain-registry/utils

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/utils"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Futils%2Fpackage.json"></a>
</p>


This module provides utility functions for working with the data in the chain-registry, focusing on asset and chain data management within the Interchain ecosystem.

## Installation

```bash
npm install @chain-registry/utils
```

## Usage

### Assets

Import the required types and functions from the package:

```js
import {
  getAssetByDenom,
  getAssetBySymbol,
  getChainLogo,
  getChainNameByDenom,
  getChainNameByStakingDenom,
  getCoinGeckoIdByDenom,
  getDenomByCoinGeckoId,
  getDenomBySymbol,
  getExponentByDenom,
  getExponentBySymbol,
  getNativeTokenByChainName,
  getSymbolByDenom,
  getTokenLogoByDenom,
  getTokenNameByDenom
} from '@chain-registry/utils';

// import from chain-registry or your own AssetList[]
import { assets } from 'chain-registry';

```

The module includes functions like `getAssetByDenom`, `getAssetBySymbol`, `getDenomByCoinGeckoId`, etc., to retrieve specific asset information from the `chain-registry`.

#### Asset Examples

To find an asset by its denomination:

```js
const asset = getAssetByDenom(assets, 'uosmo', 'osmosis');
console.log(asset?.base); // 'uosmo'
```

To get the logo URL of a chain:

```js
const logo = getChainLogo(assets, 'comdex');
console.log(logo); // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
```

To retrieve the CoinGecko ID by asset denomination:

```js
const coinGeckoId = getCoinGeckoIdByDenom(assets, 'uosmo');
console.log(coinGeckoId); // 'osmosis'
```

#### Asset Functions

- `getAssetByDenom`: Retrieve an asset by its denomination.
- `getAssetBySymbol`: Find an asset by its symbol.
- `getChainLogo`: Get the logo URL of a chain.
- `getChainNameByDenom`: Determine the chain name given an asset's denomination.
- `getChainNameByStakingDenom`: Find the chain name by its staking token denomination.
- `getCoinGeckoIdByDenom`: Get the CoinGecko ID associated with an asset denomination.
- `getDenomByCoinGeckoId`: Find the denomination for an asset given its CoinGecko ID.
- `getSymbolByDenom`: Retrieve the symbol associated with a denomination.
- `getDenomBySymbol`: Get the denomination of an asset by its symbol.
- `getExponentByDenom`: Find the exponent for a denomination.
- `getExponentBySymbol`: Get the exponent for a symbol.
- `getNativeTokenByChainName`: Retrieve the native token for a given chain name.
- `getTokenLogoByDenom`: Get the logo URL for a token by its denomination.
- `getTokenNameByDenom`: Find the name of a token by its denomination.


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
