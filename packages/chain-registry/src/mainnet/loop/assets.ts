import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'loop',
  assets: [{
      description: 'The native token of Loop',
      denom_units: [{
          denom: 'token',
          exponent: 0
        }],
      type_asset: 'sdk.coin',
      base: 'token',
      name: 'Token',
      display: 'token',
      symbol: 'TOKEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
          theme: {
            primary_color_hex: '#4991ee'
          }
        }],
      socials: {
        website: 'https://www.loop.fans/',
        twitter: 'https://twitter.com/LoopFans'
      }
    }, {
      denom_units: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'upoa',
      name: 'POA',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/poa.svg',
          theme: {
            primary_color_hex: '#bdaf88'
          }
        }],
      keywords: ['poa']
    }]
};
export default info;