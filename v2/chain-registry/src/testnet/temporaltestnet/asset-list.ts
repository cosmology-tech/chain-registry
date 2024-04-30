import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'temporaltestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Temporal.',
      denomUnits: [{
          denom: 'utprl',
          exponent: 0
        }, {
          denom: 'tprl',
          exponent: 6
        }],
      base: 'utprl',
      name: 'TPRL',
      display: 'tprl',
      symbol: 'TPRL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png'
        }]
    }]
};
export default info;