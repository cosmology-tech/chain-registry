# @chain-registry/assets

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/assets"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fassets%2Fpackage.json"></a>
</p>

Asset lists for the Cosmos ⚛️

```
npm install @chain-registry/assets
```

```js
import { asset_lists } from '@chain-registry/assets';
const assetList = asset_lists
    .find(asset => asset.chain_name === 'osmosis');
```

Which gives you a list of assets for the `chain_name`:

```js
console.log(assetList.assets);

[
  {
    description: "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
    denom_units: [ [Object], [Object] ],
    base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
    name: 'Akash Network',
    display: 'akt',
    symbol: 'AKT',
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
    },
    coingecko_id: 'akash-network',
    ibc: { counterparty: [Object], chain: [Object] }
  },
  {
    description: 'The native token of Axelar',
    denom_units: [ [Object], [Object] ],
    base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
    name: 'Axelar',
    display: 'axl',
    symbol: 'AXL',
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
    },
    coingecko_id: 'axelar-network',
    ibc: { counterparty: [Object], chain: [Object] }
  }
]
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
