import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'xiontestnet2',
  assets: [{
      description: 'The native staking token of the Xion network.',
      denomUnits: [{
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;