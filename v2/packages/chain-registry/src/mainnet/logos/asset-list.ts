import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'logos',
  assets: [{
      description: 'The native token of Logos',
      denomUnits: [{
          denom: 'aLYT',
          exponent: 0
        }, {
          denom: 'LYT',
          exponent: 18
        }],
      base: 'aLYT',
      name: 'LYT',
      display: 'LYT',
      symbol: 'LYT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
        }]
    }]
};
export default info;