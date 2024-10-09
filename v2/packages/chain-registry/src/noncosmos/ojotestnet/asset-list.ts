import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ojotestnet',
  assets: [{
      description: 'The native token of Ojo Network',
      denomUnits: [{
          denom: 'uojo',
          exponent: 0
        }, {
          denom: 'ojo',
          exponent: 6
        }],
      base: 'uojo',
      name: 'ojo',
      display: 'ojo',
      symbol: 'OJO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg'
        }]
    }]
};
export default info;