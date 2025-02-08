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
    }
  ]
};
export default info;