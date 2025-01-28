# @chain-registry/v2-types

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/v2-types"><img height="20" src="https://img.shields.io/npm/dt/@chain-registry/v2-types"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/v2-types"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/chain-registry?filename=v2%2Fpackages%2Ftypes%2Fpackage.json"></a>
</p>

The `@chain-registry/v2-types` module provides TypeScript types derived from the [`cosmos/chain-registry`](https://github.com/cosmos/chain-registry), formatted with camelCase properties for better integration in JavaScript and TypeScript projects. This module is designed to offer developers easy-to-use types for building applications that interact with blockchain data.

## Installation

To add these types to your project, run the following command:

```sh
npm install @chain-registry/v2-types
```

## Usage

The types provided by this package can be imported into your TypeScript files. This allows you to utilize autocomplete features and enhance type-checking in your IDE, making your development process faster and reducing runtime errors.

Here’s how you can use these types in your code:


```js
import { Chain, AssetList } from '@chain-registry/v2-types';

function displayChainDetails(chain: Chain) {
    console.log(`Chain Name: ${chain.chainName}`);
    console.log(`Chain ID: ${chain.chainId}`);
    console.log(`Bech32 Prefix: ${chain.bech32Prefix}`);
}

function displayAssetDetails(assetList: AssetList) {
    assetList.assets.forEach(asset => {
        console.log(`Asset Name: ${asset.name}`);
        console.log(`Base Denom: ${asset.base}`);
        console.log(`Display Denom: ${asset.display}`);
    });
}

// Usage with hypothetical data
const sampleChain: Chain = {
    chainName: "Osmosis",
    chainId: "osmosis-1",
    bech32Prefix: "osmo",
    // Other necessary properties...
};

const sampleAssetList: AssetList = {
    chainName: "Osmosis",
    assets: [
        { name: "Osmo", symbol: "OSMO", base: "uosmo", display: "osmo" },
        // More assets...
    ],
};

displayChainDetails(sampleChain);
displayAssetDetails(sampleAssetList);
```


## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category              | Tools                                                                                                                  | Description                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Chain Information**   | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**| [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit) | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface. |
| **Signing Clients**          | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs) | A single, universal signing interface for any network |
| **SDK Clients**              | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                          | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules. |
| **Starter Kits**     | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app) | Set up a modern Interchain app by running one command. |
| **UI Kits**          | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                   | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit. |
| **Testing Frameworks**          | [**Starship**](https://github.com/hyperweb-io/starship)                                                             | Unified Testing and Development for the Interchain. |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                              | Build and deploy full-stack blockchain applications with TypeScript |
| **CosmWasm Contracts** | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                   | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes. |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

