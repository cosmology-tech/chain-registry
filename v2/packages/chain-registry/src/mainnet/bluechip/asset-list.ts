import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bluechip',
  assets: [{
      description: 'The native staking token of BlueChip.',
      denomUnits: [{
          denom: 'ubluechip',
          exponent: 0
        }, {
          denom: 'bcp',
          exponent: 6
        }],
      base: 'ubluechip',
      name: 'blue chip',
      display: 'bcp',
      symbol: 'BCP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png',
          theme: {
            primaryColorHex: '#0c94d3'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;