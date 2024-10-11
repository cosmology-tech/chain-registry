import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'microtick',
  assets: [{
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denomUnits: [{
          denom: 'utick',
          exponent: 0
        }, {
          denom: 'tick',
          exponent: 6
        }],
      base: 'utick',
      display: 'tick',
      name: 'Microtick',
      symbol: 'TICK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      coingeckoId: 'microtick',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
          theme: {
            primaryColorHex: '#6bab14'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;