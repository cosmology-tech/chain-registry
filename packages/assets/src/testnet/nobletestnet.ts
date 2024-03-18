import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nobletestnet',
  assets: [
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom:
            'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
          exponent: 0,
          aliases: ['uelys']
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
      base: 'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingecko_id: 'elys',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uelys',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }
      ]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom:
            'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
          exponent: 0,
          aliases: ['ueden']
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
      base: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }
      ]
    },
    {
      description: 'USDC from Noble',
      denom_units: [
        {
          denom:
            'ibc/43F3DB349524D2EEB9C2E42E00A5004EF77475D53771856E853B555F4FB82E47',
          exponent: 0,
          aliases: [
            'ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/43F3DB349524D2EEB9C2E42E00A5004EF77475D53771856E853B555F4FB82E47',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom:
              'ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9937AE9EB62A04DDDDF028561F0151F89C20E5C57EB1FF3598B8B7889CDBD5AD',
          exponent: 0,
          aliases: [
            'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9937AE9EB62A04DDDDF028561F0151F89C20E5C57EB1FF3598B8B7889CDBD5AD',
      name: 'ATOM on Elys',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom:
              'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/71EA961912A27B7C91895807478D7B4533176A7CD9456121A0B9129ECCA35DE2',
          exponent: 0,
          aliases: [
            'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz'
          ]
        },
        {
          denom: 'willyz',
          exponent: 6
        }
      ],
      base: 'ibc/71EA961912A27B7C91895807478D7B4533176A7CD9456121A0B9129ECCA35DE2',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Titan Chain',
      denom_units: [
        {
          denom:
            'ibc/B0FD76BB55A783EB9EBC033FBC47FBF9B69071FE11430A55AC0501D09262CE19',
          exponent: 0,
          aliases: [
            'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6'
          ]
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B0FD76BB55A783EB9EBC033FBC47FBF9B69071FE11430A55AC0501D09262CE19',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom:
              'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/5E1C19F49AEEFE6623B5F8AA26F9C6AAB7712F6A4BC500C97DCFBD537CAA6A79',
          exponent: 0,
          aliases: [
            'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0'
          ]
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5E1C19F49AEEFE6623B5F8AA26F9C6AAB7712F6A4BC500C97DCFBD537CAA6A79',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom:
              'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [
        {
          denom:
            'ibc/B795DCA63E4CCB4792CED14D45471CEBE1A68F7A6BC8C2AB0B039AE73C73DF53',
          exponent: 0,
          aliases: ['uxion']
        },
        {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }
      ],
      base: 'ibc/B795DCA63E4CCB4792CED14D45471CEBE1A68F7A6BC8C2AB0B039AE73C73DF53',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C318D6DE9E081FD01B8BD0F4FE151582F45708E0829984F909C06AA82C746B4A',
          exponent: 0,
          aliases: [
            'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2'
          ]
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C318D6DE9E081FD01B8BD0F4FE151582F45708E0829984F909C06AA82C746B4A',
      name: 'Axelar AXL Token',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelartestnet',
            base_denom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3558A08085F8F7035D5871135626F309FF94BDA0FD88B1EF0266D0A81F9FCAC6',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uosmo',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9EF1CB2DBB2C91855A6B36BDCC7DE0DE183D58847C75C0DD463334ED37826EA3',
          exponent: 0,
          aliases: [
            'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9EF1CB2DBB2C91855A6B36BDCC7DE0DE183D58847C75C0DD463334ED37826EA3',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/1C944E2CEE952ADAF798C5450E3E08A0C17AE960688B7ED5C41FF94DD31B95B4',
          exponent: 0,
          aliases: [
            'ibc/0166AE2224341A3F70943E315DAC6EDF012A638D0F9358794FF7525BA1DFC191'
          ]
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1C944E2CEE952ADAF798C5450E3E08A0C17AE960688B7ED5C41FF94DD31B95B4',
      name: 'Injective INJ token',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'ibc/0166AE2224341A3F70943E315DAC6EDF012A638D0F9358794FF7525BA1DFC191',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      }
    }
  ]
};
export default assets;
