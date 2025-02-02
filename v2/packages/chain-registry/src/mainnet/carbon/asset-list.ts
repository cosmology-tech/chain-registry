import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'carbon',
  assets: [
    {
      description: 'The native governance token of Carbon',
      denomUnits: [{
          denom: 'swth',
          exponent: 0
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      typeAsset: 'sdk.coin',
      base: 'swth',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingeckoId: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primaryColorHex: '#a5edf2'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denomUnits: [{
          denom: 'usc',
          exponent: 0
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      typeAsset: 'sdk.coin',
      base: 'usc',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primaryColorHex: '#053e4f'
          }
        }]
    },
    {
      description: 'BNB token on Carbon',
      denomUnits: [{
          denom: 'bnb.1.6.773edb',
          exponent: 0
        }, {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }],
      base: 'bnb.1.6.773edb',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'bNEO token on Carbon',
      denomUnits: [{
          denom: 'bneo.1.14.e2e5f6',
          exponent: 0
        }, {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }],
      base: 'bneo.1.14.e2e5f6',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'neo',
            baseDenom: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
          },
          chain: {
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denomUnits: [{
          denom: 'busd.1.6.754a80',
          exponent: 0
        }, {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }],
      base: 'busd.1.6.754a80',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denomUnits: [{
          denom: 'cglp.1.19.1698d3',
          exponent: 0
        }, {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }],
      base: 'cglp.1.19.1698d3',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg',
          theme: {
            primaryColorHex: '#070707'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Grouped USD on Carbon',
      denomUnits: [{
          denom: 'cgt/1',
          exponent: 0
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'cgt/1',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primaryColorHex: '#043d4d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denomUnits: [{
          denom: 'eth.1.19.c3b805',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'eth.1.19.c3b805',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denomUnits: [{
          denom: 'eth.1.2.942d87',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'eth.1.2.942d87',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'STARS token on Carbon',
      denomUnits: [{
          denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6,
          aliases: ['STARS']
        }],
      typeAsset: 'ics20',
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze Staking Coin',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars',
            channelId: 'channel-123'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/ustars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
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
        }]
    },
    {
      description: 'LUNA token on Carbon',
      denomUnits: [{
          denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6,
          aliases: ['LUNA']
        }],
      typeAsset: 'ics20',
      base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
      name: 'Terra Staking Coin',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-36'
          },
          chain: {
            channelId: 'channel-12',
            path: 'transfer/channel-12/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }]
    },
    {
      description: 'TIA token on Carbon',
      denomUnits: [{
          denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channelId: 'channel-188'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-6994/utia'
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
      description: 'MilkTIA token on Carbon',
      denomUnits: [{
          denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
          exponent: 0,
          aliases: ['umilkTIA']
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            channelId: 'channel-188'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
          theme: {
            primaryColorHex: '#d18dfc'
          }
        }]
    },
    {
      description: 'STRD token on Carbon',
      denomUnits: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0
        }, {
          denom: 'strd',
          exponent: 6,
          aliases: ['STRD']
        }],
      typeAsset: 'ics20',
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'ustrd',
            channelId: 'channel-47'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/ustrd'
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
      description: 'EVMOS token on Carbon',
      denomUnits: [{
          denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
          exponent: 0
        }, {
          denom: 'evmos',
          exponent: 18,
          aliases: ['EVMOS']
        }],
      typeAsset: 'ics20',
      base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos',
            channelId: 'channel-23'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/aevmos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primaryColorHex: '#ec4c34'
          }
        }]
    },
    {
      description: 'IRIS token on Carbon',
      denomUnits: [{
          denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
          exponent: 0
        }, {
          denom: 'iris',
          exponent: 6,
          aliases: ['IRIS']
        }],
      typeAsset: 'ics20',
      base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
      name: 'IRIS Hub Staking Coin',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'irisnet',
            baseDenom: 'uiris',
            channelId: 'channel-68'
          },
          chain: {
            channelId: 'channel-28',
            path: 'transfer/channel-28/uiris'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [{
          imageSync: {
            chainName: 'irisnet',
            baseDenom: 'uiris'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primaryColorHex: '#5664ad'
          }
        }]
    },
    {
      description: 'KUJI token on Carbon',
      denomUnits: [{
          denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
          exponent: 0
        }, {
          denom: 'kuji',
          exponent: 6,
          aliases: ['KUJI']
        }],
      typeAsset: 'ics20',
      base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'ukuji',
            channelId: 'channel-46'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/ukuji'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kujira',
            baseDenom: 'ukuji'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primaryColorHex: '#e33b34'
          }
        }]
    },
    {
      description: 'stOSMO token on Carbon',
      denomUnits: [{
          denom: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
          exponent: 0
        }, {
          denom: 'stosmo',
          exponent: 6,
          aliases: ['stOSMO']
        }],
      typeAsset: 'ics20',
      base: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuosmo',
            channelId: 'channel-47'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/stuosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'CANTO token on Carbon',
      denomUnits: [{
          denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
          exponent: 0
        }, {
          denom: 'canto',
          exponent: 18,
          aliases: ['CANTO']
        }],
      typeAsset: 'ics20',
      base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'canto',
            baseDenom: 'acanto',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/acanto'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'canto',
            baseDenom: 'acanto'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primaryColorHex: '#1c1f1f'
          }
        }]
    },
    {
      description: 'Cosmos governance token on Carbon',
      denomUnits: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }],
      typeAsset: 'ics20',
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-342'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
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
        }]
    },
    {
      description: 'stATOM token on Carbon',
      denomUnits: [{
          denom: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
          exponent: 0
        }, {
          denom: 'statom',
          exponent: 6,
          aliases: ['stATOM']
        }],
      typeAsset: 'ics20',
      base: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuatom',
            channelId: 'channel-47'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/stuatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'OSMO token on Carbon',
      denomUnits: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: ['OSMO']
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-188'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }]
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denomUnits: [{
          denom: 'usdc.1.2.343151',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }],
      base: 'usdc.1.2.343151',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denomUnits: [{
          denom: 'usdc.1.6.53ff75',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }],
      base: 'usdc.1.6.53ff75',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ZIL token on Carbon',
      denomUnits: [{
          denom: 'zil.1.18.1a4a06',
          exponent: 0
        }, {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL']
        }],
      base: 'zil.1.18.1a4a06',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'zilliqa',
            baseDenom: 'wei',
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
          },
          chain: {
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
          },
          provider: 'PolyNetwork'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg',
          theme: {
            primaryColorHex: '#2cccc4'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;