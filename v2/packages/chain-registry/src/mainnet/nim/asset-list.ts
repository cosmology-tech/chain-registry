import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nim',
  assets: [{
      description: 'The native token of Nim Network.',
      extendedDescription: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denomUnits: [{
          denom: 'anim',
          exponent: 0
        }, {
          denom: 'nim',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'anim',
      name: 'NIM Network',
      display: 'nim',
      symbol: 'NIM',
      coingeckoId: 'nim-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
          theme: {
            primaryColorHex: '#519cea'
          }
        }],
      socials: {
        website: 'https://ai.nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      }
    }]
};
export default info;