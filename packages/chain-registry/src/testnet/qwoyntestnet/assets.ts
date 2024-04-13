import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'qwoyntestnet',
  assets: [{
      description: 'QWOYN is the native governance token for the Qwoyn Studios Platform',
      denom_units: [{
          denom: 'uqwoyn',
          exponent: 0
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      base: 'uqwoyn',
      name: 'Qwoyn Blockchain',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
        }]
    }]
};
export default info;