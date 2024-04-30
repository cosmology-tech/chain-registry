import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'stargazetestnet',
  assets: [{
      description: 'The native token of Stargaze',
      denomUnits: [{
          denom: 'ustars',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingeckoId: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }]
    }]
};
export default info;