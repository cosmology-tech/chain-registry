import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  chainName: 'althea',
  $schema: '../assetlist.schema.json',
  assets: [{
      description: 'Althea native token',
      denomUnits: [{
          denom: 'aalthea',
          exponent: 0
        }, {
          denom: 'althea',
          exponent: 18
        }],
      base: 'aalthea',
      name: 'Althea Token',
      display: 'althea',
      symbol: 'ALTHEA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png',
          theme: {
            primaryColorHex: '#0474dc'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;