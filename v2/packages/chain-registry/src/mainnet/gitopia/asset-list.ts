import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'gitopia',
  assets: [{
      description: 'The native token of Gitopia',
      denomUnits: [{
          denom: 'ulore',
          exponent: 0
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      base: 'ulore',
      name: 'LORE',
      display: 'LORE',
      symbol: 'LORE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }],
      coingeckoId: 'gitopia',
      socials: {
        website: 'https://gitopia.com/',
        twitter: 'https://twitter.com/gitopiaDAO'
      }
    }]
};
export default info;