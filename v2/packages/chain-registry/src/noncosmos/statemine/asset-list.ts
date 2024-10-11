import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'statemine',
  assets: [{
      denomUnits: [{
          denom: '130',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'substrate',
      base: '130',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      coingeckoId: 'tether'
    }]
};
export default info;