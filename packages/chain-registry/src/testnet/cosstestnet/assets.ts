import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cosstestnet',
  assets: [{
      description: 'The native token of COSS',
      denom_units: [{
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
      symbol: 'cgas'
    }]
} as const satisfies AssetList;
export default info;