import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'doravotatestnet2',
  assets: [{
      description: 'The native staking and governance token of the Theta incentive version of the Dora Vota Testnet.',
      denomUnits: [{
          denom: 'peaka',
          exponent: 0
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'peaka',
      name: 'Dora Vota Incentive Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }]
    }]
};
export default info;