import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lambda',
  assets: [{
      description: 'The native token of Lambda',
      denomUnits: [{
          denom: 'ulamb',
          exponent: 0
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      base: 'ulamb',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      coingeckoId: 'lambda',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg',
          theme: {
            primaryColorHex: '#e41c54'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;