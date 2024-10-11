import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'loop',
  assets: [{
      description: 'The native token of Loop',
      denomUnits: [{
          denom: 'token',
          exponent: 0
        }],
      typeAsset: 'sdk.coin',
      base: 'token',
      name: 'Token',
      display: 'token',
      symbol: 'TOKEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
          theme: {
            primaryColorHex: '#4991ee'
          }
        }],
      socials: {
        website: 'https://www.loop.fans/',
        twitter: 'https://twitter.com/LoopFans'
      }
    }, {
      denomUnits: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'upoa',
      name: 'POA',
      display: 'poa',
      symbol: 'POA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg',
          theme: {
            primaryColorHex: '#bdaf88'
          }
        }],
      keywords: ['poa']
    }]
};
export default info;