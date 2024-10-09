import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ethos',
  assets: [{
      description: 'The native token of Ethos',
      denomUnits: [{
          denom: 'aRYT',
          exponent: 0
        }, {
          denom: 'RYT',
          exponent: 18
        }],
      base: 'aRYT',
      name: 'RYT',
      display: 'RYT',
      symbol: 'RYT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
        }]
    }]
};
export default info;