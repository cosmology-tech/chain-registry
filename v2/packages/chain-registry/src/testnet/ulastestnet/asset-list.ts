import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ulastestnet',
  assets: [{
      description: 'WEB3 twitter',
      denomUnits: [{
          denom: 'uulas',
          exponent: 0
        }, {
          denom: 'ulas',
          exponent: 6
        }],
      base: 'uulas',
      name: 'ULAS Network',
      display: 'ulas',
      symbol: 'ULAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;