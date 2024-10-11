import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'doravota',
  assets: [{
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denomUnits: [{
          denom: 'peaka',
          exponent: 0
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'peaka',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primaryColorHex: '#fba214'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;