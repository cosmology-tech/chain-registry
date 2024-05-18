import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'forex',
  assets: [{
      type_asset: 'unknown',
      denom_units: [{
          denom: 'USD',
          exponent: 0
        }],
      base: 'USD',
      display: 'USD',
      name: 'United States Dollar',
      symbol: 'USD'
    }]
};
export default info;