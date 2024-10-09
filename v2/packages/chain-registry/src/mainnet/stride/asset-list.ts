import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stride',
  assets: [
    {
      description: 'The native token of Stride',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      }
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }]
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
      coingeckoId: 'stride-staked-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        }]
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
            baseDenom: 'uaevmos'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      coingeckoId: 'stride-staked-evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
        }]
    }
  ]
};
export default info;