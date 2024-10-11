import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'qwoyntestnet',
  assets: [{
      description: 'QWOYN is the native governance token for the Qwoyn Studios Platform',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;