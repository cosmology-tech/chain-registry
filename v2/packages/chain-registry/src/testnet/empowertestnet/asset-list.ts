import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'empowertestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Empower.',
      denomUnits: [{
          denom: 'umpwr',
          exponent: 0
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'umpwr',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;