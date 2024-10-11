import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dig',
  assets: [{
      description: 'Native token of Dig Chain',
      denomUnits: [{
          denom: 'udig',
          exponent: 0
        }, {
          denom: 'dig',
          exponent: 6
        }],
      base: 'udig',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      coingeckoId: 'dig-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
          theme: {
            primaryColorHex: '#1b1433'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;