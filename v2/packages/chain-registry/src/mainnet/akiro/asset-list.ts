import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'akiro',
  assets: [{
      description: 'AKIRO meme token',
      denomUnits: [{
          denom: 'uakiro',
          exponent: 0
        }, {
          denom: 'akiro',
          exponent: 6
        }],
      base: 'uakiro',
      name: 'AKIRO',
      display: 'akiro',
      symbol: 'AKIRO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
        }]
    }]
};
export default info;