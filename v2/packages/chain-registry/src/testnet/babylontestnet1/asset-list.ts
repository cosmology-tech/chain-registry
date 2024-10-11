import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'babylontestnet1',
  assets: [{
      description: 'The native staking token of Babylon.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'bbn',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon BBN',
      display: 'bbn',
      symbol: 'BBN',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;