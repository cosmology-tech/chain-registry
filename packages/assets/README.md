# @chain-registry/assets

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184277736-69fef40f-1991-4c0e-b979-da125cf7fd8f.svg" />
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

## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator](https://cosmology.tech/validator)
