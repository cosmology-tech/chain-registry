import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'arkh',
  assets: [{
      description: 'The native token of Arkhadian',
      denomUnits: [{
          denom: 'arkh',
          exponent: 0
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      base: 'arkh',
      name: 'Arkh',
      display: 'ARKH',
      symbol: 'ARKH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }],
      socials: {
        website: 'https://arkhadian.io/',
        twitter: 'https://twitter.com/ArkhadianSas'
      }
    }]
};
export default info;