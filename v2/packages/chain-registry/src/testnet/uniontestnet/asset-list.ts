import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'uniontestnet',
  assets: [{
      description: 'Union native token',
      denomUnits: [{
          denom: 'muno',
          exponent: 0
        }, {
          denom: 'uno',
          exponent: 6
        }],
      base: 'muno',
      name: 'Union',
      display: 'uno',
      symbol: 'UNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
      },
      keywords: ['staking'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;