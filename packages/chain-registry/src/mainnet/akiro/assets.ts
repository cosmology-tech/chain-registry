import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'akiro',
  assets: [{
      description: 'AKIRO meme token',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
        }]
    }]
};
export default info;