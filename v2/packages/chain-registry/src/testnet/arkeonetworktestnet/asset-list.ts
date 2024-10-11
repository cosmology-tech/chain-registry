import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'arkeonetworktestnet',
  assets: [{
      denomUnits: [{
          denom: 'uarkeo',
          exponent: 0
        }, {
          denom: 'arkeo',
          exponent: 6
        }],
      base: 'uarkeo',
      display: 'arkeo',
      name: 'Arkeo',
      symbol: 'ARKEO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;