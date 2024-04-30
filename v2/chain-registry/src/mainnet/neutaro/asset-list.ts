import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'neutaro',
  assets: [{
      description: 'The native token of Neutaro',
      denomUnits: [{
          denom: 'uneutaro',
          exponent: 0
        }, {
          denom: 'neutaro',
          exponent: 6
        }],
      base: 'uneutaro',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
      },
      coingeckoId: 'neutaro',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
        }]
    }]
};
export default info;