import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'injectivetestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      base: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: ['nois', 'randomness', 'drand', 'wasm'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-74'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
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
            channel_id: 'channel-4174',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
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
            channel_id: 'channel-4174',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F720CD702241F9C6193BAA3F4ECEA6AAC4426ADBE2AA17224F7032BA549C45DF',
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
      base: 'ibc/F720CD702241F9C6193BAA3F4ECEA6AAC4426ADBE2AA17224F7032BA549C45DF',
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
            channel_id: 'channel-4174',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
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
            'ibc/0357F81EEFB3CE67A7C8DF990D62F73C637D78E0E4B8A495FDFFEB2A7E8DA258',
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
      base: 'ibc/0357F81EEFB3CE67A7C8DF990D62F73C637D78E0E4B8A495FDFFEB2A7E8DA258',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4174',
            base_denom:
              'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
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
            'ibc/64A67E5F8931233C2D7B5731717EF3DF558C686553A1C3FC004750B928FDBCC8',
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
      base: 'ibc/64A67E5F8931233C2D7B5731717EF3DF558C686553A1C3FC004750B928FDBCC8',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4174',
            base_denom:
              'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
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
      description: 'The native staking token of the Xion network.',
      denom_units: [
        {
          denom:
            'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
          exponent: 0,
          aliases: ['uxion']
        },
        {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }
      ],
      base: 'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
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
            channel_id: 'channel-215',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/09E1007B3E4910D39ADE4700B8CA352AB138C7FAEE79CDAF4E9CD61875E6CB56',
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
      base: 'ibc/09E1007B3E4910D39ADE4700B8CA352AB138C7FAEE79CDAF4E9CD61875E6CB56',
      name: 'Axelar AXL Token',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-215',
            base_denom:
              'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
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
            'ibc/C15E3E97C2357F33A0481A82348BEEEC37C51DE42539F2A63798D43774998403',
          exponent: 0,
          aliases: [
            'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C15E3E97C2357F33A0481A82348BEEEC37C51DE42539F2A63798D43774998403',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-215',
            base_denom:
              'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
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
            'ibc/82997864114AC728D1B0B41E45BBA22AC7FA827AEC7DA9E685B3E7FF931B8120',
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
      base: 'ibc/82997864114AC728D1B0B41E45BBA22AC7FA827AEC7DA9E685B3E7FF931B8120',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-215',
            base_denom:
              'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
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
            'ibc/B3E7AA7FE707114D710D25858EC0679C3834F4006C68C50ED8E4AF9EC0D841F3',
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
      base: 'ibc/B3E7AA7FE707114D710D25858EC0679C3834F4006C68C50ED8E4AF9EC0D841F3',
      name: 'Injective INJ token',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-215',
            base_denom:
              'ibc/0166AE2224341A3F70943E315DAC6EDF012A638D0F9358794FF7525BA1DFC191',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      }
    }
  ]
};
export default assets;
