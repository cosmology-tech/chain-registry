import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'comex',
  assets: [{
      typeAsset: 'unknown',
      denomUnits: [{
          denom: 'XAU',
          exponent: 0
        }],
      base: 'XAU',
      display: 'XAU',
      name: 'Gold',
      symbol: 'XAU'
    }]
};
export default info;