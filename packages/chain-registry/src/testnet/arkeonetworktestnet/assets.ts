import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'arkeonetworktestnet',
  assets: [{
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
        }]
    }]
};
export default info;