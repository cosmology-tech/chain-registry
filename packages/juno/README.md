# @chain-registry/juno

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/juno"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fjuno%2Fpackage.json"></a>
</p>

Chain Registry info for Juno, including asset lists.

```
npm install @chain-registry/juno
```

```js
import { chain, assets, asset_list, testnet, testnet_assets } from '@chain-registry/juno';
```
```js
console.log(asset_list);
{
  chain_name: 'juno',
  assets: [
    {
      description: "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [Array],
      base: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: [Object],
      coingecko_id: 'akash-network',
      ibc: [Object]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [Array],
      base: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: [Object],
      coingecko_id: 'axelar-network',
      ibc: [Object]
    },
    // ... more assets
  ]
}
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry