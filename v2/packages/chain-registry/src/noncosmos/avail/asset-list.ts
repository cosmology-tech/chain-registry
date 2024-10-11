import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'avail',
  assets: [{
      description: 'Avail is a web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.',
      extendedDescription: 'Avail is a unification layer for Web3 that decouples the data availability layer, making it easier for developers to focus on execution and settlement. It\'s built to make applications fast, efficient, and scalable. Avail works with any execution environment designed to scale blockchains. ',
      typeAsset: 'unknown',
      denomUnits: [{
          denom: 'avail',
          exponent: 0
        }, {
          denom: 'AVAIL',
          exponent: 18
        }],
      base: 'avail',
      name: 'Avail',
      display: 'AVAIL',
      symbol: 'AVAIL',
      coingeckoId: 'avail',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.png',
          theme: {
            circle: false,
            primaryColorHex: '#2B80D7'
          }
        }]
    }]
};
export default info;