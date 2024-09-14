import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'zilliqa',
  assets: [{
      type_asset: 'evm-base',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }],
      base: 'wei',
      display: 'wei',
      name: 'Ether',
      symbol: 'ETH'
    }]
} as const satisfies AssetList;
export default info;