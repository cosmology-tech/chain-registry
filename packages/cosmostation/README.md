# @chain-registry/cosmostation

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/cosmostation"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=packages%2Fcosmostation%2Fpackage.json"></a>
</p>

Cosmostation integration for the chain-registry returning cosmostation's `AddChainParams` type from `@chain-registry/types` `Chain` type.

```
npm install @chain-registry/cosmostation
```

```js
import { assets, chains } from 'chain-registry';
import { chainRegistryChainToCosmostation } from '@chain-registry/cosmostation';
import { AddChainParams } from '@cosmostation/extension-client/types/message';

const chain = chains.find(({chain_name})=>chain_name==='osmosis');
const config: AddChainParams = chainRegistryChainToCosmostation(chain, assets);

// you can add options as well to choose endpoints 
const config: AddChainParams = chainRegistryChainToCosmostation(chain, assets, {
    getRestEndpoint: (chain) => chain.apis?.rest[1]?.address
});
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)
