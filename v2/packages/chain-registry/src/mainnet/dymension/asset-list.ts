import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dymension',
  assets: [
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingeckoId: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primaryColorHex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      }
    },
    {
      description: 'The native token of Nim Network.',
      extendedDescription: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denomUnits: [{
          denom: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
          exponent: 0,
          aliases: ['anim']
        }, {
          denom: 'nim',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
      name: 'Nim Network',
      display: 'nim',
      symbol: 'NIM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nim',
            baseDenom: 'anim',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-49',
            path: 'transfer/channel-49/anim'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'nim',
            baseDenom: 'anim'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
          theme: {
            primaryColorHex: '#519cea'
          }
        }],
      socials: {
        website: 'https://nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      }
    },
    {
      description: 'The native token of Mande Network.',
      extendedDescription: 'Mande network is an open on-chain reputation layer on Web3',
      denomUnits: [{
          denom: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
          exponent: 0,
          aliases: ['amand']
        }, {
          denom: 'mand',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
      name: 'Mande Network',
      display: 'mand',
      symbol: 'MAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'mande',
            baseDenom: 'amand',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-51',
            path: 'transfer/channel-51/amand'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'mande',
            baseDenom: 'amand'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
          theme: {
            primaryColorHex: '#274cbf'
          }
        }],
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      },
      keywords: ['credibility', 'identity'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      }
    }
  ]
};
export default info;