import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'finschia',
  assets: [{
      description: 'The native token of Finschia',
      denomUnits: [{
          denom: 'cony',
          exponent: 0
        }, {
          denom: 'fnsa',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'cony',
      name: 'Finschia',
      display: 'fnsa',
      symbol: 'FNSA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['staking']
    }]
};
export default info;