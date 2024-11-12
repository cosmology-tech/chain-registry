import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stride',
  assets: [
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      extendedDescription: 'Stride is a blockchain ("zone") that provides liquidity for staked tokens within the Cosmos ecosystem. Users can liquid stake their tokens from any Cosmos chain using Stride, earning staking and DeFi yields across the Cosmos IBC ecosystem. When users stake their tokens with Stride, they receive stTokens, which can be traded or redeemed at any time. Stride\'s liquid staking derivatives allow users to retain liquidity while earning staking rewards, supporting various IBC-compatible chains and promoting broader DeFi participation. The native token, STRD, is used for governance and securing the network.',
      denomUnits: [{
          denom: 'ustrd',
          exponent: 0
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ustrd',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingeckoId: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stuatom',
          exponent: 0
        }, {
          denom: 'statom',
          exponent: 6
        }],
      base: 'stuatom',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingeckoId: 'stride-staked-atom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stustars',
          exponent: 0
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      base: 'stustars',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      coingeckoId: 'stride-staked-stars',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stuosmo',
          exponent: 0
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      base: 'stuosmo',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingeckoId: 'stride-staked-osmo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stujuno',
          exponent: 0
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      base: 'stujuno',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingeckoId: 'stride-staked-juno',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stuluna',
          exponent: 0
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      base: 'stuluna',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stinj',
          exponent: 0
        }, {
          denom: 'stINJ',
          exponent: 18
        }],
      base: 'stinj',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'staevmos',
          exponent: 0
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      base: 'staevmos',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denomUnits: [{
          denom: 'stadydx',
          exponent: 0
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      base: 'stadydx',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'stutia',
          exponent: 0
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      base: 'stutia',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked DYM',
      denomUnits: [{
          denom: 'stadym',
          exponent: 0
        }, {
          denom: 'stDYM',
          exponent: 18
        }],
      base: 'stadym',
      name: 'Stride Staked DYM',
      display: 'stDYM',
      symbol: 'stDYM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'adym'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stuumee',
          exponent: 0
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      base: 'stuumee',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'umee',
            baseDenom: 'uumee'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      coingeckoId: 'stride-staked-umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg',
          theme: {
            primaryColorHex: '#fbd9e9'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stucmdx',
          exponent: 0
        }, {
          denom: 'stcmdx',
          exponent: 6
        }],
      base: 'stucmdx',
      name: 'Stride Staked CMDX',
      display: 'stcmdx',
      symbol: 'stCMDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmdx'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stusomm',
          exponent: 0
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      base: 'stusomm',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      coingeckoId: 'stride-staked-sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked SAGA',
      denomUnits: [{
          denom: 'stusaga',
          exponent: 0
        }, {
          denom: 'stSAGA',
          exponent: 6
        }],
      base: 'stusaga',
      name: 'Stride Staked SAGA',
      display: 'stSAGA',
      symbol: 'stSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of Celestia',
      denomUnits: [{
          denom: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'TIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
      name: 'Celestia',
      display: 'TIA',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-162',
            path: 'transfer/channel-162/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'staISLM',
          exponent: 0
        }, {
          denom: 'stISLM',
          exponent: 18
        }],
      base: 'staISLM',
      name: 'Stride Staked ISLM',
      display: 'stISLM',
      symbol: 'stISLM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'haqq',
            baseDenom: 'aISLM'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg'
      },
      coingeckoId: 'stride-staked-islm',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'stuband',
          exponent: 0
        }, {
          denom: 'stBAND',
          exponent: 6
        }],
      base: 'stuband',
      name: 'Stride Staked BAND',
      display: 'stBAND',
      symbol: 'stBAND',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bandchain',
            baseDenom: 'uband'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;