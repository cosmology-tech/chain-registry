import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dungeon',
  assets: [{
      description: 'Dungeon native token',
      denomUnits: [{
          denom: 'udgn',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'udgn',
      name: 'Dungeon Coin',
      display: 'DGN',
      symbol: 'DGN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;