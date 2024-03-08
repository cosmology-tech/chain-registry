import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmoshubtestnet',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      base: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-3152'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the testnet version of Empower.',
      denom_units: [
        {
          denom:
            'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
          exponent: 0,
          aliases: ['umpwr']
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      base: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-2765'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
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
            channel_id: 'channel-4156',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
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
            channel_id: 'channel-4156',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/78A7110CF4371CAF56DC2172B9153AF5D2B91205AEE080119430B3CB307606BD',
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
      base: 'ibc/78A7110CF4371CAF56DC2172B9153AF5D2B91205AEE080119430B3CB307606BD',
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
            channel_id: 'channel-4156',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
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
            'ibc/B3A64456342C0AF30D36B1AA5EF761597258E07D5E9883B69C30C94DEA4AF539',
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
      base: 'ibc/B3A64456342C0AF30D36B1AA5EF761597258E07D5E9883B69C30C94DEA4AF539',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4156',
            base_denom:
              'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
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
            'ibc/DCF2315685816A1B90FC43ED43E98CEB7C8EBFA2A9A75D805BF98A1C74461ADD',
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
      base: 'ibc/DCF2315685816A1B90FC43ED43E98CEB7C8EBFA2A9A75D805BF98A1C74461ADD',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4156',
            base_denom:
              'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
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
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      base: 'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      base: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
          exponent: 0,
          aliases: ['stk/uosmo']
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      base: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [
        {
          denom:
            'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        },
        {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }
      ],
      base: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }
      ]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom:
            'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
          exponent: 0,
          aliases: ['atkx']
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
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }
      ],
      keywords: ['staking'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-3910'
          }
        }
      ]
    }
  ]
};
export default assets;
