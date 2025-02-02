import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'point',
  assets: [{
      description: 'The native governance and staking token of the Point network',
      denomUnits: [{
          denom: 'apoint',
          exponent: 0
        }, {
          denom: 'point',
          exponent: 18
        }],
      base: 'apoint',
      name: 'Point',
      display: 'point',
      symbol: 'POINT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;