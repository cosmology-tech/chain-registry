import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'osmosistestnet',
  assets: [
    {
      description: 'The native token of Osmosis',
      denomUnits: [{
          denom: 'uosmo',
          exponent: 0,
          aliases: []
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingeckoId: 'osmosis',
      keywords: ['dex', 'staking']
    },
    {
      denomUnits: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingeckoId: 'ion',
      keywords: ['memecoin']
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos Hub Public Testnet',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshubtestnet',
            baseDenom: 'uatom',
            channelId: 'channel-3306'
          },
          chain: {
            channelId: 'channel-4156',
            path: 'transfer/channel-4156/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshubtestnet',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc',
            channelId: 'channel-339'
          },
          chain: {
            channelId: 'channel-4170',
            path: 'transfer/channel-4170/uausdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
          exponent: 0,
          aliases: ['eth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
      name: 'Wrapped Ether (Axelar)',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'eth-wei',
            channelId: 'channel-339'
          },
          chain: {
            channelId: 'channel-4170',
            path: 'transfer/channel-4170/eth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
          exponent: 0,
          aliases: ['ujunox']
        }, {
          denom: 'junox',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'junotestnet',
            baseDenom: 'ujunox',
            channelId: 'channel-889'
          },
          chain: {
            channelId: 'channel-5498',
            path: 'transfer/channel-5498/ujunox'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'junotestnet',
            baseDenom: 'ujunox'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denomUnits: [{
          denom: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
      name: 'Mars Hub Testnet',
      display: 'mars',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'marstestnet',
            baseDenom: 'umars',
            channelId: 'channel-28'
          },
          chain: {
            channelId: 'channel-5499',
            path: 'transfer/channel-5499/umars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          imageSync: {
            chainName: 'marstestnet',
            baseDenom: 'umars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }]
    },
    {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'test-mintage',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-22'
          },
          chain: {
            channelId: 'channel-4280',
            path: 'transfer/channel-4280/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Sandbox',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'akashtestnet',
            baseDenom: 'uakt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4171',
            path: 'transfer/channel-4171/uakt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'akashtestnet',
            baseDenom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }]
    },
    {
      description: 'The native utility token of the Kaon testnet version of KYVE.',
      denomUnits: [{
          denom: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
          exponent: 0,
          aliases: ['tkyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
      name: 'KYVE Kaon',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          provider: 'Kyve'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'kyvetestnet',
            baseDenom: 'tkyve',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/tkyve'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          imageSync: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          theme: {
            primaryColorHex: '#335350'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver Testnet',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilvertestnet',
            baseDenom: 'uqck',
            channelId: 'channel-20'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uqck'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilvertestnet',
            baseDenom: 'uqck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denomUnits: [{
          denom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
      name: 'Persistence Testnet',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'persistencetestnet2',
            baseDenom: 'uxprt',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-1037',
            path: 'transfer/channel-1037/uxprt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistencetestnet2',
            baseDenom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denomUnits: [{
          denom: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga Testnet',
      display: 'tsaga',
      symbol: 'TSAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sagatestnet',
            baseDenom: 'utsaga',
            channelId: 'channel-20'
          },
          chain: {
            channelId: 'channel-4946',
            path: 'transfer/channel-4946/utsaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sagatestnet',
            baseDenom: 'utsaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denomUnits: [{
          denom: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          provider: 'impacthub'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'impacthubtestnet',
            baseDenom: 'uixo',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-1637',
            path: 'transfer/channel-1637/uixo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primaryColorHex: '#2c4484'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
          exponent: 0
        }, {
          denom: 'willyz',
          exponent: 6
        }],
      base: 'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Manifest Testnet Token',
      denomUnits: [{
          denom: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
      name: 'Manifest Testnet',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/umfx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }]
    },
    {
      description: 'WMVT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/01E5DEA2A7FC03D3C8656AD9ADA344C97E7659D172659583834421CBD0AEBBA0',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/01E5DEA2A7FC03D3C8656AD9ADA344C97E7659D172659583834421CBD0AEBBA0',
      name: 'WMVT',
      display: 'wmvt',
      symbol: 'WMVT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PGSQL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/079A3F9B846C96E6BA7E3105E29E3E30380581A2FBE778E05858751F98672006',
          exponent: 0
        }, {
          denom: 'pgsql',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/079A3F9B846C96E6BA7E3105E29E3E30380581A2FBE778E05858751F98672006',
      name: 'PGSQL',
      display: 'pgsql',
      symbol: 'PGSQL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'UMEGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/07F2CA1E68827ABCC1B8C81B11DA204B9D20058A09A32A31A5830404B183F229',
          exponent: 0
        }, {
          denom: 'umega',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/07F2CA1E68827ABCC1B8C81B11DA204B9D20058A09A32A31A5830404B183F229',
      name: 'UMEGA',
      display: 'umega',
      symbol: 'UMEGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZF Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/0B7E2E4F4093CB3C514018EF29743F9A0EB29198524F1BB574D1AFA7B93B8B91',
          exponent: 0
        }, {
          denom: 'pwrzf',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0B7E2E4F4093CB3C514018EF29743F9A0EB29198524F1BB574D1AFA7B93B8B91',
      name: 'PWRZF',
      display: 'pwrzf',
      symbol: 'PWRZF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'FOCAL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/0C482F788D15BABB3B3BC3BF571130E29A9AD68DC5EF6FD2C7D1A6B839B07C29',
          exponent: 0
        }, {
          denom: 'focal',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0C482F788D15BABB3B3BC3BF571130E29A9AD68DC5EF6FD2C7D1A6B839B07C29',
      name: 'FOCAL',
      display: 'focal',
      symbol: 'FOCAL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'AAA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/191C596758FE8067952C7F5F0CCC28F068B77D08EDF6534861F09C5C076498BD',
          exponent: 0
        }, {
          denom: 'aaa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/191C596758FE8067952C7F5F0CCC28F068B77D08EDF6534861F09C5C076498BD',
      name: 'AAA',
      display: 'aaa',
      symbol: 'AAA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWROZ Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/1B9AFCA57417621371DE4FB4FBE74A79DE35103B5A12B152B14F955ADA034AB7',
          exponent: 0
        }, {
          denom: 'pwroz',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B9AFCA57417621371DE4FB4FBE74A79DE35103B5A12B152B14F955ADA034AB7',
      name: 'PWROZ',
      display: 'pwroz',
      symbol: 'PWROZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZN Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/2096FB4834F772F17953F5CEB6271BC4FE814E77F53B6518BC692B9EFC064ACB',
          exponent: 0
        }, {
          denom: 'pwrzn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2096FB4834F772F17953F5CEB6271BC4FE814E77F53B6518BC692B9EFC064ACB',
      name: 'PWRZN',
      display: 'pwrzn',
      symbol: 'PWRZN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/218221543F65661330C3FE9C151487826ADCDE7995A900796DCB88FEBE47D218',
          exponent: 0
        }, {
          denom: 'sole',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/218221543F65661330C3FE9C151487826ADCDE7995A900796DCB88FEBE47D218',
      name: 'SOLE',
      display: 'sole',
      symbol: 'SOLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GWATT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/26F060F3DF9234C7142383C11E1D098029CF2805E38E38EA856F46DA961F365D',
          exponent: 0
        }, {
          denom: 'gwatt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/26F060F3DF9234C7142383C11E1D098029CF2805E38E38EA856F46DA961F365D',
      name: 'GWATT',
      display: 'gwatt',
      symbol: 'GWATT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GREY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3228BE7857B93ABC5EEC48B073C9C99402FE175C85E7751C8D456C81AE778FDB',
          exponent: 0
        }, {
          denom: 'grey',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3228BE7857B93ABC5EEC48B073C9C99402FE175C85E7751C8D456C81AE778FDB',
      name: 'GREY',
      display: 'grey',
      symbol: 'GREY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SPOOF Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/37AAE1955EC75077DB24120E15BF5144E8542B3AFE84B627924430BAAF19CB66',
          exponent: 0
        }, {
          denom: 'spoof',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/37AAE1955EC75077DB24120E15BF5144E8542B3AFE84B627924430BAAF19CB66',
      name: 'SPOOF',
      display: 'spoof',
      symbol: 'SPOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWROO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3D08FACEDE8EF2ABFA22D704613C217D0C338F290B3E26641FF7F1FB18851C47',
          exponent: 0
        }, {
          denom: 'pwroo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3D08FACEDE8EF2ABFA22D704613C217D0C338F290B3E26641FF7F1FB18851C47',
      name: 'PWROO',
      display: 'pwroo',
      symbol: 'PWROO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SPDT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3FD42AFAA9D273BB52D8BC2D4D8BF22BD6CF0E831E9CC2EC280F0DFFD841B5D7',
          exponent: 0
        }, {
          denom: 'spdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3FD42AFAA9D273BB52D8BC2D4D8BF22BD6CF0E831E9CC2EC280F0DFFD841B5D7',
      name: 'SPDT',
      display: 'spdt',
      symbol: 'SPDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uspdt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uspdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uspdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CURES Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/42C2F9CEB07BB2C765131395EFE4CDFB88C928C51D47DA96DE32D4E56D537F7D',
          exponent: 0
        }, {
          denom: 'cures',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/42C2F9CEB07BB2C765131395EFE4CDFB88C928C51D47DA96DE32D4E56D537F7D',
      name: 'CURES',
      display: 'cures',
      symbol: 'CURES',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'WIND Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/47972D4551284864029DBA43A64C731BF11D0C1EFDDB5D477B2239EC08A4A89A',
          exponent: 0
        }, {
          denom: 'wind',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/47972D4551284864029DBA43A64C731BF11D0C1EFDDB5D477B2239EC08A4A89A',
      name: 'WIND',
      display: 'wind',
      symbol: 'WIND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwind',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwind'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwind'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CATS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/51C2E65B471D72E6471C5907CE592992E8CCB2A8C3E9BF18AABE74245B22EE90',
          exponent: 0
        }, {
          denom: 'cats',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/51C2E65B471D72E6471C5907CE592992E8CCB2A8C3E9BF18AABE74245B22EE90',
      name: 'CATS',
      display: 'cats',
      symbol: 'CATS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/59A8FFDAFB04D42D38BB56C0AD287D93048B2F5285BF9C5FF75490623B629EA0',
          exponent: 0
        }, {
          denom: 'pwrzs',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/59A8FFDAFB04D42D38BB56C0AD287D93048B2F5285BF9C5FF75490623B629EA0',
      name: 'PWRZS',
      display: 'pwrzs',
      symbol: 'PWRZS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'INDIS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/64A334851602A1F06AD05A6FB1C501F3145629A47D0C103990ECCA9649A55FB5',
          exponent: 0
        }, {
          denom: 'indis',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/64A334851602A1F06AD05A6FB1C501F3145629A47D0C103990ECCA9649A55FB5',
      name: 'INDIS',
      display: 'indis',
      symbol: 'INDIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'LENDX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6725C46B41C06FF712991E65F1CA1B2DEDCCB3F62F5F3A5756CB9F6C10BBBD5A',
          exponent: 0
        }, {
          denom: 'lendx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6725C46B41C06FF712991E65F1CA1B2DEDCCB3F62F5F3A5756CB9F6C10BBBD5A',
      name: 'LENDX',
      display: 'lendx',
      symbol: 'LENDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'HIVE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/690BAB0DFEB754ED3B8DDD3AAC79A3A6DDB26B2D15FACBF191050FBCB7909D0B',
          exponent: 0
        }, {
          denom: 'hive',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/690BAB0DFEB754ED3B8DDD3AAC79A3A6DDB26B2D15FACBF191050FBCB7909D0B',
      name: 'HIVE',
      display: 'hive',
      symbol: 'HIVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SUNSW Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6BDB8C4A4511BEC4675B7C1D7AA9366835B1849A7FE38C9A865837B20BF2B7E1',
          exponent: 0
        }, {
          denom: 'sunsw',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6BDB8C4A4511BEC4675B7C1D7AA9366835B1849A7FE38C9A865837B20BF2B7E1',
      name: 'SUNSW',
      display: 'sunsw',
      symbol: 'SUNSW',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usunsw',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usunsw'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usunsw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLB Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6C35755BAA2EDA52987287E649EEDF6102EE0C896233DCDB9E1CB7026ABF0A29',
          exponent: 0
        }, {
          denom: 'solb',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6C35755BAA2EDA52987287E649EEDF6102EE0C896233DCDB9E1CB7026ABF0A29',
      name: 'SOLB',
      display: 'solb',
      symbol: 'SOLB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZZ Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6EBD69A041B2D67AD81A94D1B594ED7FF365F90C292F3F84AF5D8B59F0609C0E',
          exponent: 0
        }, {
          denom: 'pwrzz',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6EBD69A041B2D67AD81A94D1B594ED7FF365F90C292F3F84AF5D8B59F0609C0E',
      name: 'PWRZZ',
      display: 'pwrzz',
      symbol: 'PWRZZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'BITCH Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/75BED9BEA9963325CE54ECCFD6A26ADCE2BAA456797E698BC5CB2EDCD86CBA70',
          exponent: 0
        }, {
          denom: 'bitch',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/75BED9BEA9963325CE54ECCFD6A26ADCE2BAA456797E698BC5CB2EDCD86CBA70',
      name: 'BITCH',
      display: 'bitch',
      symbol: 'BITCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/78E3EEE3AE42097CF156B18F9692AF4A25EA9062959560E21C8641A85DF598BC',
          exponent: 0
        }, {
          denom: 'pwrze',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/78E3EEE3AE42097CF156B18F9692AF4A25EA9062959560E21C8641A85DF598BC',
      name: 'PWRZE',
      display: 'pwrze',
      symbol: 'PWRZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CUTE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/7E07C35823D352697DF13F9CE0E3E210448CBA16845534B3D4DAA143700D1B76',
          exponent: 0
        }, {
          denom: 'cute',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7E07C35823D352697DF13F9CE0E3E210448CBA16845534B3D4DAA143700D1B76',
      name: 'CUTE',
      display: 'cute',
      symbol: 'CUTE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'TIMMY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/851078421E4BAD167A53E2CB9D9F30D85E7FF2BBB8DD67A7710251C7114A50D4',
          exponent: 0
        }, {
          denom: 'timmy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/851078421E4BAD167A53E2CB9D9F30D85E7FF2BBB8DD67A7710251C7114A50D4',
      name: 'TIMMY',
      display: 'timmy',
      symbol: 'TIMMY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'ABUS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8701EB42672FD1773AE8563B2A5ABDDD55A554D2D06BCA4EEC0971D00E4FD2A1',
          exponent: 0
        }, {
          denom: 'abus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8701EB42672FD1773AE8563B2A5ABDDD55A554D2D06BCA4EEC0971D00E4FD2A1',
      name: 'ABUS',
      display: 'abus',
      symbol: 'ABUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SNOOP Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8FD1696E831414B21C91B89BB380597113B9E90FE85D9CA49C27376C3B57F96E',
          exponent: 0
        }, {
          denom: 'snoop',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8FD1696E831414B21C91B89BB380597113B9E90FE85D9CA49C27376C3B57F96E',
      name: 'SNOOP',
      display: 'snoop',
      symbol: 'SNOOP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'BLERG Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/94FF077F34C3973483A168FE249785AA0895658B40A5BFCD3F08503DD18C05BB',
          exponent: 0
        }, {
          denom: 'blerg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/94FF077F34C3973483A168FE249785AA0895658B40A5BFCD3F08503DD18C05BB',
      name: 'BLERG',
      display: 'blerg',
      symbol: 'BLERG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'ANSONATOR Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/982291A0DA7E62CF0D3122BB9FAA9A7F9183E603DBF78F1F3B5B113FBA09CB9F',
          exponent: 0
        }, {
          denom: 'ansonator',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/982291A0DA7E62CF0D3122BB9FAA9A7F9183E603DBF78F1F3B5B113FBA09CB9F',
      name: 'ANSONATOR',
      display: 'ansonator',
      symbol: 'ANSONATOR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uansonator',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uansonator'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uansonator'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZV Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/9DCE8277AFFE55EB13B04AC588ED5ABC59655DD7DEB276626B9A8E0DC17CE78D',
          exponent: 0
        }, {
          denom: 'pwrzv',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9DCE8277AFFE55EB13B04AC588ED5ABC59655DD7DEB276626B9A8E0DC17CE78D',
      name: 'PWRZV',
      display: 'pwrzv',
      symbol: 'PWRZV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/9E54008CAF579562B457EEB826311CEE325CBCF7FB7503160C58687A1966C7D6',
          exponent: 0
        }, {
          denom: 'pwrzt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9E54008CAF579562B457EEB826311CEE325CBCF7FB7503160C58687A1966C7D6',
      name: 'PWRZT',
      display: 'pwrzt',
      symbol: 'PWRZT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CORAL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/A53FDEA70B4995136D560F198C742359E8209BF88C6FB8B009C0F366174111E2',
          exponent: 0
        }, {
          denom: 'coral',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A53FDEA70B4995136D560F198C742359E8209BF88C6FB8B009C0F366174111E2',
      name: 'CORAL',
      display: 'coral',
      symbol: 'CORAL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'MEGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/AD90DE5F1F95B33BF58A46975EB0588A50F8CC142FDEEA38FB3BBFF3F19B1279',
          exponent: 0
        }, {
          denom: 'mega',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD90DE5F1F95B33BF58A46975EB0588A50F8CC142FDEEA38FB3BBFF3F19B1279',
      name: 'MEGA',
      display: 'mega',
      symbol: 'MEGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'WMVT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/AEC5315C36693B6F8C1E06953B353353BC004007139FC0141CA136DE4DF63D28',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AEC5315C36693B6F8C1E06953B353353BC004007139FC0141CA136DE4DF63D28',
      name: 'WMVT',
      display: 'wmvt',
      symbol: 'WMVT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwmvt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwmvt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwmvt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'TST Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/B07B8843D853FF1E810E3D34AD4118F4175C18D954C17887279EC345B77EB585',
          exponent: 0
        }, {
          denom: 'tst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B07B8843D853FF1E810E3D34AD4118F4175C18D954C17887279EC345B77EB585',
      name: 'TST',
      display: 'tst',
      symbol: 'TST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utst',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utst'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utst'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'DBLT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/B2F8C96EA82DC8166AC5AEBE62C280C0704FEAF1E0564B9F0A9A51BDC92DCF74',
          exponent: 0
        }, {
          denom: 'dblt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B2F8C96EA82DC8166AC5AEBE62C280C0704FEAF1E0564B9F0A9A51BDC92DCF74',
      name: 'DBLT',
      display: 'dblt',
      symbol: 'DBLT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'FRAME Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/BA52432273454EA4F7736F2AA7DC8296F8F986C0944298C807A9FA161C4E73DE',
          exponent: 0
        }, {
          denom: 'frame',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BA52432273454EA4F7736F2AA7DC8296F8F986C0944298C807A9FA161C4E73DE',
      name: 'FRAME',
      display: 'frame',
      symbol: 'FRAME',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GOZER Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/C2BB7B0E3B1D434E1593A82788E0F8189ABC8B0888D9767457D7EAF3BFF3BE32',
          exponent: 0
        }, {
          denom: 'gozer',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C2BB7B0E3B1D434E1593A82788E0F8189ABC8B0888D9767457D7EAF3BFF3BE32',
      name: 'GOZER',
      display: 'gozer',
      symbol: 'GOZER',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'FUNZIE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/D1330E1E791A6D85DBD8F3674034C12CBBB5DC0A61036F8533C1B97A3D62E32B',
          exponent: 0
        }, {
          denom: 'funzie',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D1330E1E791A6D85DBD8F3674034C12CBBB5DC0A61036F8533C1B97A3D62E32B',
      name: 'FUNZIE',
      display: 'funzie',
      symbol: 'FUNZIE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/D844EB8D44A65435A37979E015D6DBB8C8F4680FB4FB7C9A8A8D996AF5BD1D68',
          exponent: 0
        }, {
          denom: 'pwrzx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D844EB8D44A65435A37979E015D6DBB8C8F4680FB4FB7C9A8A8D996AF5BD1D68',
      name: 'PWRZX',
      display: 'pwrzx',
      symbol: 'PWRZX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/DD0C98D5C0D7DC8056589CB56571CCA26545B61FFB05EFB621CDBC30DE6E3602',
          exponent: 0
        }, {
          denom: 'sola',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DD0C98D5C0D7DC8056589CB56571CCA26545B61FFB05EFB621CDBC30DE6E3602',
      name: 'SOLA',
      display: 'sola',
      symbol: 'SOLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'DANCINGPENGUIN Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E06959602897E9E7953D00ABEF9657CBF9D1335AD3EA69E848CFA73B7C7BAF67',
          exponent: 0
        }, {
          denom: 'dancingpenguin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E06959602897E9E7953D00ABEF9657CBF9D1335AD3EA69E848CFA73B7C7BAF67',
      name: 'DANCINGPENGUIN',
      display: 'dancingpenguin',
      symbol: 'DANCINGPENGUIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'TACO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E9578B0047E2B53959100A5F523DBA9CB3E2804C8A9A7B87AB48C2201C990BD1',
          exponent: 0
        }, {
          denom: 'taco',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E9578B0047E2B53959100A5F523DBA9CB3E2804C8A9A7B87AB48C2201C990BD1',
      name: 'TACO',
      display: 'taco',
      symbol: 'TACO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'TFAAA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E9FF6FA2D92362EB9BE243C561DB8CEB4073946DC21949377FD4B642728BFD6C',
          exponent: 0
        }, {
          denom: 'tfaaa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E9FF6FA2D92362EB9BE243C561DB8CEB4073946DC21949377FD4B642728BFD6C',
      name: 'TFAAA',
      display: 'tfaaa',
      symbol: 'TFAAA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utfaaa',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utfaaa'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utfaaa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'TRACE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/F0D7AB66C6E218A60A2379DD872B72EDDF3E7476B27AB1DF76C620CAED73AB93',
          exponent: 0
        }, {
          denom: 'trace',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F0D7AB66C6E218A60A2379DD872B72EDDF3E7476B27AB1DF76C620CAED73AB93',
      name: 'TRACE',
      display: 'trace',
      symbol: 'TRACE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utrace',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utrace'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utrace'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZR Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/F1AC4F2E814C6C88039780B62C6E92EE6F25B1522E1B0B5349C66965F2547426',
          exponent: 0
        }, {
          denom: 'pwrzr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F1AC4F2E814C6C88039780B62C6E92EE6F25B1522E1B0B5349C66965F2547426',
      name: 'PWRZR',
      display: 'pwrzr',
      symbol: 'PWRZR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SIMPLE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/F4BA8538FCB083F8A9C32A9C88FF64F2CF5DDEA60CA05E1B671D851C2C479BD0',
          exponent: 0
        }, {
          denom: 'simple',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F4BA8538FCB083F8A9C32A9C88FF64F2CF5DDEA60CA05E1B671D851C2C479BD0',
      name: 'SIMPLE',
      display: 'simple',
      symbol: 'SIMPLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-10016',
            path: 'transfer/channel-10016/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    }
  ]
};
export default info;