# @chain-registry/client

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/client"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/chain-registry?filename=v1%2Fpackages%2Fclient%2Fpackage.json"></a>
</p>

The `@chain-registry/client` package provides a client for dynamically fetching and managing chain and asset data from the Cosmos chain registry. This tool is essential for developers who need to access up-to-date blockchain information, including asset lists and IBC data.

- [Introduction](#chain-registryclient)
- [Installation](#installation)
- [Usage](#usage)
  - [ChainRegistryClient](#chainregistryclient)
    - [Initializing the Client](#initializing-the-client)
    - [Methods](#methods)
    - [Fetching Chain and Asset Data](#fetching-chain-and-asset-data)
    - [Accessing Chain Information](#accessing-chain-information)
    - [Retrieving Asset Lists](#retrieving-asset-lists)
  - [ChainRegistryFetcher](#chainregistryfetcher)
    - [Fetching Data](#fetching-data)
    - [Fetching Schemata](#fetching-schemata)
    - [fetchUrls](#fetchurls)
    - [fetch](#fetch)
    - [Asset Lists](#asset-lists)
    - [Chain Info](#chain-info)
- [Stack](#interchain-javascript-stack-️)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## Installation

```
npm install @chain-registry/client
```

## Usage

We recommend using the [`ChainRegistryClient`](#chainregistryclient) directly, the [ChainRegistryFetcher](#chainregistryfetcher) is lower-level if you don't need a higher-level class.

### ChainRegistryClient

`ChainRegistryClient` dynamically fetches and manages chain and asset data from the `chain-registry`.

#### Initializing the Client

```js
import { ChainRegistryClient } from '@chain-registry/client';

const client = new ChainRegistryClient({
  chainNames: ['osmosis', 'juno']
});
```

After instantiation, you can use client to access chain and asset information, along with IBC data.

#### ChainRegistryClient Options

While the default usage above is simple, you can customize it.

The `ChainRegistryClient` constructor accepts an `options` object you can specify:

- `chainNames` (required): An array of strings representing the names of the chains you want to fetch data for. This option is essential to determine which chains' data will be managed by the client.

- `assetListNames` (optional): An array of strings specifying the names of the chains for which asset lists should be fetched. If not provided, the client uses the `chainNames` array as the default list.

- `ibcNamePairs` (optional): An array of string arrays, where each nested array contains two elements representing a pair of chain names. This setting specifies the Inter-Blockchain Communication (IBC) connections between the chains for which data should be considered. It is particularly useful for limiting the scope of IBC-related data processing.

- `baseUrl` (optional): A string representing the base URL for fetching the chain registry data. If not specified, the client defaults to the official Cosmos chain registry on GitHub (`https://raw.githubusercontent.com/cosmos/chain-registry/master`).

#### Initialization Examples

Here is a client with specified chain names and limited IBC name pairs, and custom `baseUrl`:
```js
const client = new ChainRegistryClient({
  chainNames: ['osmosis', 'juno', 'stargaze', 'cosmoshub'],
  ibcNamePairs: [['osmosis', 'stargaze']],
  baseUrl: 'https://yourregistry.com/'
});
```

Here is a client with specified chain names and limited asset list, and limited IBC name pairs:

```js
const clientWithAssetLists = new ChainRegistryClient({
  chainNames: ['osmosis', 'juno', 'stargaze'],
  assetListNames: ['osmosis', 'juno'],
  ibcNamePairs: [['osmosis', 'juno']]
});
```

Let's walk through this example where you can specify which IBC connections you're interested in:

```ts
import { ChainRegistryClient } from '@chain-registry/client';

const client = new ChainRegistryClient({
  chainNames: ['osmosis', 'juno', 'stargaze', 'cosmoshub'],
  ibcNamePairs: [['osmosis', 'stargaze']]
});
```

In this example, the `chainNames` option includes four chains, but `ibcNamePairs` only includes a pair between osmosis and stargaze. This configuration means that the client will fetch and manage data for all four specified chains, but when it comes to generating asset lists with `getGeneratedAssetLists()`, it will only consider the IBC connections between osmosis and stargaze for IBC-connected assets.

#### Methods

- `fetchUrls()`: Asynchronously fetches the data for all the configured URLs and stores the results internally within the client instance.
- `getChain(chainName)`: Returns the `Chain` object for the specified chain name.
- `getChainInfo(chainName)`: Retrieves [`ChainInfo`](#chain-info), an object with detailed information about the specified chain, including its configuration, assets, and IBC connections.
- `getAssetList(chainName)`: Obtains a list of assets available on the specified chain.
- `getChainAssetList(chainName)`: Returns the `AssetList` for the specified chain.
- `getGeneratedAssetLists(chainName)`: Generates and returns `AssetList[]` for the specified chain, including IBC-connected assets.
- `getChainIbcData(chainName)`: Retrieves IBC data related to the specified chain.

#### Fetching chain and asset data

To initiate the data fetching process, the ChainRegistryClient must first execute the fetchUrls method. This method asynchronously retrieves data from the predefined URLs based on the configuration provided during the client's instantiation.

```js
await client.fetchUrls();
```

In this line, `client.fetchUrls()` asynchronously fetches the chain and asset data for the chains specified in the client's configuration. This process involves making HTTP requests to the URLs constructed from the base URL and the chain names, asset list names, and IBC name pairs provided in the `ChainRegistryClientOptions`.

#### Accessing Chain Information

After fetching the data, you can access detailed information about a specific chain using the `getChainInfo` method. This method returns a [`ChainInfo`](#chain-info) object, which contains data about the requested chain, including its assets, IBC connections, and other metadata. 

```js
const osmosisInfo = client.getChainInfo('osmosis');
 // returns ChainInfo, which is an object containing everything
```

if you just want the `Chain` object, you can do:

```js
const osmosisInfo = client.getChain('osmosis');
 // returns Chain from `@chain-registry/types`
```


#### Retrieving Asset Lists

Here, `client.getAssetList('juno')` fetches the asset list for the Juno chain. The `junoAssets` variable will hold an array of assets defined on the Juno chain, detailing each asset's properties such as its name, symbol, and other asset-specific information.

```js
const junoAssets = client.getAssetList('juno');
// returns AssetList from '@chain-registry/types'
```

If you want to get the IBC denominations, and the asset lists based on the IBC connections, you can use `getGeneratedAssetLists()`:

```js
const generatedOsmosisAssets = client.getGeneratedAssetLists('osmosis');
// returns AssetList from '@chain-registry/types' — including generated IBC assets based on IBC connections
```


### ChainRegistryFetcher

`ChainRegistryFetcher` is a lower-level component used by `ChainRegistryClient` for fetching data from specified URLs.

#### Fetching data

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

#### Fetching Schemata

We currently only support fetching JSON schemas as defined in https://github.com/cosmos/chain-registry. Supported are `assetlist.schema.json`, `chain.schema.json` and `ibc_data.schema.json`.

#### fetchUrls

You can set the `ChainRegistryFetcher.urls` property and call `ChainRegistryFetcher.fetchUrls()`

```js
registry.urls = [
  // urls to fetch
];
await registry.fetchUrls();
```

#### fetch

Or, you can simply call `ChainRegistryFetcher.fetch()`

```js
await registry.fetch('https://some-json-schema.com/some-schema.json');
```

#### Asset lists

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
