import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nobletestnet',
  assets: [
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
          denom: 'mxion',
          exponent: 3,
          aliases: ['millixion']
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
    }
  ]
};
export default assets;
