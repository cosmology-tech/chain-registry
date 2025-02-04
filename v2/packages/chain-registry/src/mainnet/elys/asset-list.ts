import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'elys',
  assets: [
    {
      description: 'The native token of Elys Network',
      denomUnits: [
        {
          denom: 'uelys',
          exponent: 0,
          aliases: ['microelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uelys',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingeckoId: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Eden token definition',
      denomUnits: [
        {
          denom: 'ueden',
          exponent: 0,
          aliases: ['microeden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ueden',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC from Noble',
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-117'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'ATOM on Elys',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1266'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'Axelar Network Token',
      denomUnits: [{
          denom: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
          exponent: 0,
          aliases: ['microaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl',
            channelId: 'channel-163'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uaxl'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      }
    },
    {
      description: 'Akash Network Token',
      denomUnits: [{
          denom: 'ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'akash',
            baseDenom: 'uakt',
            channelId: 'channel-129'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uakt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'akash',
            baseDenom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primaryColorHex: '#bc342c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      }
    },
    {
      description: 'Celestia Network Token',
      denomUnits: [{
          denom: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-50'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/utia'
          }
        }],
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Xion Network Token',
      denomUnits: [{
          denom: 'ibc/6BFB09FE2464A7681645610F56BBEFF555A00B8AE146339FEB4609BF40FB0F4A',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'xion',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6BFB09FE2464A7681645610F56BBEFF555A00B8AE146339FEB4609BF40FB0F4A',
      name: 'Xion',
      display: 'xion',
      symbol: 'XION',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'xion',
            baseDenom: 'uxion',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/uxion'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'xion',
            baseDenom: 'uxion'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      }
    },
    {
      description: 'Saga Network Token',
      denomUnits: [{
          denom: 'ibc/B88C39AD6C8550716DFD64C3AD28F355633554821249AC9F8BCC21341641CD18',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B88C39AD6C8550716DFD64C3AD28F355633554821249AC9F8BCC21341641CD18',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga',
            channelId: 'channel-35'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/usaga'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primaryColorHex: '#FFFFFF',
            darkMode: true
          }
        }, {
          imageSync: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primaryColorHex: '#000000',
            darkMode: false
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg'
      }
    },
    {
      description: 'BLD Network Token',
      denomUnits: [{
          denom: 'ibc/7EE4FEE86299470E4E8712FB666FCCA75074DAAB749789E29C2360A4B7B7BE96',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7EE4FEE86299470E4E8712FB666FCCA75074DAAB749789E29C2360A4B7B7BE96',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'ubld',
            channelId: 'channel-152'
          },
          chain: {
            channelId: 'channel-12',
            path: 'transfer/channel-12/ubld'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primaryColorHex: '#c42b44'
          }
        }, {
          imageSync: {
            chainName: 'agoric',
            baseDenom: 'ubld'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primaryColorHex: '#c42b44'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      }
    },
    {
      description: 'STARS Network Token',
      denomUnits: [{
          denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars',
            channelId: 'channel-437'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/ustars'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primaryColorHex: '#db2777'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      description: 'STRD Network Token',
      denomUnits: [{
          denom: 'ibc/50AFCA53FE2DCC6FC300F884524FA997E5A9D370EFEF9836F5C9461CB85AF8C1',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/50AFCA53FE2DCC6FC300F884524FA997E5A9D370EFEF9836F5C9461CB85AF8C1',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'ustrd',
            channelId: 'channel-295'
          },
          chain: {
            channelId: 'channel-17',
            path: 'transfer/channel-17/ustrd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    },
    {
      description: 'NTRN Network Token',
      denomUnits: [{
          denom: 'ibc/8BFE59DCD5A7054F0A97CF91F3E3ABCA8C5BA454E548FA512B729D4004584D47',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8BFE59DCD5A7054F0A97CF91F3E3ABCA8C5BA454E548FA512B729D4004584D47',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'untrn',
            channelId: 'channel-6476'
          },
          chain: {
            channelId: 'channel-16',
            path: 'transfer/channel-16/untrn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primaryColorHex: '#040404',
            backgroundColorHex: '#000000',
            circle: true
          }
        }]
    },
    {
      description: 'OM Network Token',
      denomUnits: [{
          denom: 'ibc/B870E6642B6491779D35F326A895780FC2F7409DFD7F639A98505555AEAF345F',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B870E6642B6491779D35F326A895780FC2F7409DFD7F639A98505555AEAF345F',
      name: 'MANTRA',
      display: 'om',
      symbol: 'OM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'mantrachain',
            baseDenom: 'uom',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-11',
            path: 'transfer/channel-11/uom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          imageSync: {
            chainName: 'mantrachain',
            baseDenom: 'uom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primaryColorHex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            darkMode: true,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            darkMode: false,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        }
      ]
    },
    {
      description: 'SCRT Network Token',
      denomUnits: [{
          denom: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt',
            channelId: 'channel-183'
          },
          chain: {
            channelId: 'channel-14',
            path: 'transfer/channel-14/uscrt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }]
    },
    {
      description: 'KAVA Network Token',
      denomUnits: [{
          denom: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'ukava',
            channelId: 'channel-156'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/ukava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'ukava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primaryColorHex: '#e64942'
          }
        }]
    }
  ]
};
export default info;