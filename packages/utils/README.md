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


This module provides utility functions for working with the data in the chain-registry, focusing on asset and chain data management within the interchain ecosystem.

- [Installation](#installation)
- [Usage](#usage)
  - [Chain Utilities](#chain-utilities)
    - [Chain Examples](#chain-examples)
    - [Chain Functions](#chain-functions)
  - [Asset Utilities](#asset-utilities)
    - [Asset Examples](#asset-examples)
    - [Asset Functions](#asset-functions)
  - [Calculation Utilities](#calculation-utilities)
    - [Calculation Examples](#calculation-examples)
    - [Calculation Functions](#calculation-functions)
- [Related](#related)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## Installation

```bash
npm install @chain-registry/utils
```

## Usage

### Chain Utilities

Chain Utilities enable the retrieval and management of blockchain-specific data, such as chain names, chain IDs, and gas prices.

#### Chain Examples

Import the functions from the package:

```js
import {
  getGasPriceRangesFromChain,
  getChainByChainName,
  getChainByChainId,
  getChainNameByChainId,
  getChainIdByChainName,
  getChainGasPriceRanges,
  getChainPrettyName,
  getChainBech32Prefix
} from '@chain-registry/utils';

// import from chain-registry or your own Chain[]
import { chains } from 'chain-registry';
```

To retrieve a chain object by its name:

```ts
const chain = getChainByChainName(chains, 'osmosis');
// { chain_name: 'osmosis', ... }
```

To get the chain ID by its name:

```ts
const chainId = getChainIdByChainName(chains, 'osmosis');
// 'osmosis-1'
```

To get the pretty name of a chain:

```ts
const prettyName = getChainPrettyName(chains, 'osmosis');
// 'Osmosis'
```

To find the gas price ranges for a chain:

```ts
const gasPriceRanges = getChainGasPriceRanges(chains, 'osmosis');
// { low: number, average: number, high: number }
```

#### Chain Functions

- `getGasPriceRangesFromChain`: Returns the gas price ranges (low, average, high) for a given chain.
- `getChainByChainName`: Finds a chain by its name.
- `getChainByChainId`: Retrieves a chain by its chain ID.
- `getChainNameByChainId`: Gets the chain name associated with a given chain ID.
- `getChainIdByChainName`: Fetches the chain ID for a specified chain name.
- `getChainGasPriceRanges`: Provides the gas price ranges for a specified chain name.
- `getChainPrettyName`: Returns the pretty (display) name of the chain.
- `getChainBech32Prefix`: Gets the Bech32 prefix for a given chain.

### Asset Utilities

Asset Utilities facilitate access to details of blockchain assets, including denominations, symbols, and related chain data.

#### Asset Examples

Import the functions from the package:

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

### Calculation Utilities

These functions provide utilities for converting asset units and calculating their values based on market data.

#### Calculation Examples

```js
import {
  mapCoinGeckoPricesToDenoms,
  convertBaseUnitToDollarValue,
  convertDollarValueToBaseUnit,
  convertBaseUnitToDisplayUnit,
  convertDisplayUnitToBaseUnit,
  roundDown
} from '@chain-registry/utils';
```

This function maps prices obtained from CoinGecko to the corresponding denominations in the asset list, facilitating price-related calculations.

```ts
const priceMap = mapCoinGeckoPricesToDenoms(assets, coinGeckoPrices);
// priceMap will now contain a mapping of denominations to their USD prices
```


Convert an amount in the base unit of a specified asset to its dollar value using the provided price map.

```ts
const dollarValue = convertBaseUnitToDollarValue(assets, priceMap, 'OSMO', 1000000);
// dollarValue is the total value in USD of 1,000,000 base units of OSMO
```

Convert a dollar value into the base unit of the specified asset, based on the current price.

```ts
const baseUnit = convertDollarValueToBaseUnit(assets, priceMap, 'OSMO', 100);
// baseUnit is the amount in base units of OSMO that equals 100 USD
```

Converts an amount from the base unit to the display unit for the specified asset.

```ts
const displayUnit = convertBaseUnitToDisplayUnit(assets, 'OSMO', 1000000);
// displayUnit is the representation of 1,000,000 base units in display units (e.g., OSMO)
```

Converts an amount from the display unit to the base unit for the specified asset.

```ts
const baseUnit = convertDisplayUnitToBaseUnit(assets, 'OSMO', 1);
// baseUnit is the amount in base units that corresponds to 1 display unit (e.g., 1 OSMO)
```

Rounds down a number to the nearest integer, ensuring consistent lower-bound calculations in financial operations.

```ts
const rounded = roundDown(123.4567);
// rounded will be '123'
```

#### Calculation Functions

- `mapCoinGeckoPricesToDenoms`: Maps CoinGecko price data to asset denominations.
- `convertBaseUnitToDollarValue`: Converts an amount in the base unit of an asset to its dollar value.
- `convertDollarValueToBaseUnit`: Converts a dollar value into the base unit of a specified asset.
- `convertBaseUnitToDisplayUnit`: Converts an amount from the base unit to the display unit of an asset.
- `convertDisplayUnitToBaseUnit`: Converts an amount from the display unit to the base unit of an asset.
- `roundDown`: Rounds down a number to the nearest integer.

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
