import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'source',
  assets: [{
      description: 'The native token of SOURCE Chain',
      extendedDescription: 'Enterprises, developers, and individuals are empowered to use SOURCE\'s sustainable and value backed network to easily access, build, and integrate web3 applications and services.',
      denomUnits: [{
          denom: 'usource',
          exponent: 0
        }, {
          denom: 'source',
          exponent: 6
        }],
      base: 'usource',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      coingeckoId: 'source',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }],
      socials: {
        website: 'https://www.sourceprotocol.io/',
        twitter: 'https://twitter.com/sourceprotocol_'
      }
    }, {
      description: 'Source Protocol\'s SRCX Token Bridged from BNB Through Planq',
      denomUnits: [{
          denom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
          exponent: 0,
          aliases: ['nsrcx']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
      name: 'SRCX',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channelId: 'channel-61'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    }]
};
export default info;