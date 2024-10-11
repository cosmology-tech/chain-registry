import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'movement',
  assets: [{
      description: 'The native token of Movement',
      denomUnits: [{
          denom: 'umove',
          exponent: 0
        }, {
          denom: 'move',
          exponent: 6
        }],
      base: 'umove',
      display: 'move',
      name: 'Movement',
      symbol: 'MOVE',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/movement/images/move.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://movementlabs.xyz/',
        twitter: 'https://x.com/movementlabsxyz'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;