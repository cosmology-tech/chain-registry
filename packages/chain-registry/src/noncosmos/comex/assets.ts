import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'comex',
  assets: [{
      type_asset: 'unknown',
      denom_units: [{
          denom: 'XAU',
          exponent: 0
        }],
      base: 'XAU',
      display: 'XAU',
      name: 'Gold',
      symbol: 'XAU'
    }]
} as const satisfies AssetList;
export default info;