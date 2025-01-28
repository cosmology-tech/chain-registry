# chain-registry

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <a href="https://github.com/hyperweb-io/lib-count">
  <img height="20" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fhyperweb-io%2Flib-count%2Fmain%2Foutput%2Fbadges%2Fproducts%2Fchain-registry%2Ftotal.json" />  
  </a>
  <a href="https://github.com/hyperweb-io/lib-count">
    <img height="20" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fhyperweb-io%2Flib-count%2Fmain%2Foutput%2Fbadges%2Fproducts%2Fchain-registry%2Fmonthly.json" />
  </a>
  <br />
  <a href="https://github.com/hyperweb-io/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <a href="https://www.npmjs.com/package/chain-registry"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/chain-registry?filename=v1%2Fpackages%2Fchain-registry%2Fpackage.json"></a>
</p>

The npm package for the Official Cosmos [chain registry](https://github.com/cosmos/chain-registry)

```
npm install chain-registry
```

A unified store of chains info, assets, asset lists, and IBC channels for the Cosmos ecosystem. Get everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.


## Features 

- 🌐 **Dynamic Loading via [ChainRegistryClient](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/client)** - Utilize the client for dynamic data fetching.
- 📦 **Tree-Shaking Support** - Optimize your bundles and [include only what you need](#tree-shaking-imports-from-chain-registry).
- 🔌 **Module Compatibility** - Supports both CommonJS and ES Module formats, ensuring compatibility with various JavaScript environments and tools.
- 🛠 **Utilities for Working with Assets and Chains** - [Comprehensive tools](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/client) to manage assets and chains efficiently.
- 🌎 **Pre-generated Asset Lists with IBC Denominations for All Chains** - Access ready-to-use [asset lists](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/assets) across all chains.
- 🔄 **Conversions for Keplr, Cosmostation** - Easily convert data for use with Keplr and Cosmostation wallets.

## Usage

### Using the `chain-registry`

Fetch data from `chain-registry`:

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

### Using the `@chain-registry/client` for dynamic data

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
const ibcData = client.getChainIbcData('osmosis');
// get asset list (including ibc assets)
const generatedAssetList = client.getGeneratedAssetLists('osmosis');
```

### Tree-Shaking Imports from `chain-registry`

Tree-shaking is a modern JavaScript feature that allows for smaller bundle sizes by only including the code that is actually used in your project. The `chain-registry` package supports tree-shaking, ensuring that only the specified imports are included in your bundle. Below are examples of how to import different datasets according to your needs.

#### Importing Data from Mainnets, Testnets, and Devnets

You can directly import assets and chain information based on the network type - mainnet, testnet, or devnet. Here’s how you can import data for each network type:

- **Mainnet Chains and Assets**
```js
import { assets, chains } from 'chain-registry/mainnet';
```

- **Testnet Chains and Assets**
```js
import { assets, chains } from 'chain-registry/testnet';
```

- **Devnet Chains and Assets**
```js
import { assets, chains } from 'chain-registry/devnet';
```

#### Importing Specific Data from a Particular Chain

If you are interested in a specific chain, such as Osmosis on the mainnet, you can import data related to that particular chain only:

- **Chains and Assets from a Specific Mainnet Chain (e.g., Osmosis)**
```js
import { assets, chain } from 'chain-registry/mainnet/osmosis';
```

- **Only Assets from a Specific Mainnet Chain (e.g., Osmosis)**
```js
import assets from 'chain-registry/mainnet/osmosis/assets';
```

- **Only Chain Information from a Specific Mainnet Chain (e.g., Osmosis)**
```js
import chain from 'chain-registry/mainnet/osmosis/chain';
```

#### Importing Data from Non-Cosmos Chains

To include data from non-Cosmos chains, use the following import:

- **Assets from Non-Cosmos Chains**
```js
import { assets } from 'chain-registry/noncosmos';
```

## Packages

#### [chain-registry](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/chain-registry)

An npm module for the Official `chain-registry` for the Cosmos ⚛️

#### [@chain-registry/client](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/client)

A Client for `chain-registry` that allows you to dynamically fetch data.

#### [@chain-registry/types](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/types)

Types for `chain-registry`.

#### [@chain-registry/keplr](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/keplr)

Keplr integration for the chain-registry returning keplr's `ChainInfo` type from `@chain-registry/types` `Chain` type.

#### [@chain-registry/assets](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/assets)

Asset lists for the Cosmos ⚛️

#### [@chain-registry/osmosis](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/osmosis)

Chain Registry info for Osmosis, including asset lists.

#### [@chain-registry/juno](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/juno)

Chain Registry info for Juno, including asset lists.

#### [@chain-registry/utils](https://github.com/hyperweb-io/chain-registry/tree/main/v1/packages/utils)

Utility functions for `chain-registry`.

## Developing

Checkout the repository run yarn to initialize the workspace:

```sh
# Clone the repo.
git clone https://github.com/hyperweb-io/chain-registry
yarn
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

Third, generate the code:

```sh
yarn codegen
```

Finally, commit and publish the code!

```sh
git commit -am "new registry updates"
lerna publish
```

### Updating Submodule Data

Use the following Makefile commands to update the data in the submodules. These commands will ensure that your submodules are synchronized with their respective remote repositories.

- **update-registry**: Updates the submodule to the latest commits of the `cosmos/chain-registry` repository. This should be used to pull the most current production data into your local environment.

```
make update-registry
```

- **update-fixtures**: Updates the submodule to the latest commits of the `hyperweb-io/chain-registry-fixtures` repository. Use this for testing purposes to ensure that your tests are running against stable, controlled data sets.

```
make update-fixtures
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
