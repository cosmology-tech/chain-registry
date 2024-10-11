import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'cosstestnet',
  assets: [{
      description: 'The native token of COSS',
      denomUnits: [{
          denom: 'ucgas',
          exponent: 0,
          aliases: []
        }, {
          denom: 'cgas',
          exponent: 6,
          aliases: []
        }],
      base: 'ucgas',
      name: 'cgas',
      display: 'cgas',
      symbol: 'cgas',
      typeAsset: 'sdk.coin'
    }]
};
export default info;