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
import { chain, assets, ibc_assets } from '@chain-registry/osmosis';
```

```js
console.log(ibc_assets);
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

## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator](https://www.mintscan.io/juno/validators/junovaloper1pr5qgj4jg47lvsnejtfvk78090shvuctgdwdm5)

Code built with the help of these related projects:

* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry