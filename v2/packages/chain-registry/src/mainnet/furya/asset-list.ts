import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'furya',
  assets: [{
      description: 'The native token of Furya',
      denomUnits: [{
          denom: 'ufury',
          exponent: 0
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ufury',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      coingeckoId: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;