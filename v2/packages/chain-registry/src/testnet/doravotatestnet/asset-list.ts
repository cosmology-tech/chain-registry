import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'doravotatestnet',
  assets: [{
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.',
      denomUnits: [{
          denom: 'peaka',
          exponent: 0
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'peaka',
      name: 'Dora Vota Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;