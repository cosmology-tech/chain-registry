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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
          theme: {
            primaryColorHex: '#eaf143'
          }
        }],
      coingeckoId: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      }
    }]
};
export default info;