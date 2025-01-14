# @chain-registry/interfaces

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/interfaces"><img height="20" src="https://img.shields.io/npm/dt/@chain-registry/interfaces"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/interfaces"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=v2%2Fpackages%2Finterfaces%2Fpackage.json"></a>
</p>

The `@chain-registry/interfaces` module provides TypeScript interfaces that represent the structured data types as defined in the original JSON schema from the [`cosmos/chain-registry`](https://github.com/cosmos/chain-registry) repository. These interfaces are generated to facilitate type-safe development when interacting with chain registry data within TypeScript projects.

## Installation

To install the `@chain-registry/interfaces` module, run the following command in your project directory:

```sh
npm install @chain-registry/interfaces
```

## Usage

Once installed, you can import the interfaces into your TypeScript project to ensure type safety and auto-completion within your IDE.

Example of using an interface:

```js
import { Chain } from '@chain-registry/interfaces';

function displayChainInfo(chain: Chain) {
    console.log(`Chain Name: ${chain.chain_name}`);
    console.log(`Chain ID: ${chain.chain_id}`);
    // Add more fields as necessary
}

// Example usage with dummy data
const cosmosHub: Chain = {
    chain_name: "Cosmos Hub",
    chain_id: "cosmoshub-4",
    bech32_prefix: "cosmos",
    // Assume other necessary fields are filled in
};

displayChainInfo(cosmosHub);
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

