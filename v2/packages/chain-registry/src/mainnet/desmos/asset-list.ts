import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'desmos',
  assets: [{
      description: 'The native token of Desmos',
      denomUnits: [{
          denom: 'udsm',
          exponent: 0
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      base: 'udsm',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      coingeckoId: 'desmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }]
    }]
};
export default info;