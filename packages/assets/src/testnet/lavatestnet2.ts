import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'lavatestnet2',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/4BDF2D63B8FFE3454AF30E9BC10D2D7979BD3A938D989889ABC94FC5B86F1E2D',
          exponent: 0,
          aliases: ['uausdc']
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      base: 'ibc/4BDF2D63B8FFE3454AF30E9BC10D2D7979BD3A938D989889ABC94FC5B86F1E2D',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'uausdc',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
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
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/13F73121EEA6CAA0DF51B06F64C39FD55EF394C64223881569DFA5628FA1288D',
          exponent: 0,
          aliases: ['eth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/13F73121EEA6CAA0DF51B06F64C39FD55EF394C64223881569DFA5628FA1288D',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'eth-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      }
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom:
            'ibc/E3878CD653ECCD470639A4398EC4913C9915DD3E550697CF0424B572B2385B60',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/E3878CD653ECCD470639A4398EC4913C9915DD3E550697CF0424B572B2385B60',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'wglmr-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'moonbeamtestnet',
            base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      }
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom:
            'ibc/7BFC5893BCCC6C9A4B173BC1183D2706141CBF71679EA6BDCE15E679CEC05183',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/7BFC5893BCCC6C9A4B173BC1183D2706141CBF71679EA6BDCE15E679CEC05183',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'wmatic-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'polygontestnet',
            base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      }
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom:
            'ibc/52F7DAC8D338E4D7388D02EBD6E522B86EBB62A48C6732C2651423A9E79377DE',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/52F7DAC8D338E4D7388D02EBD6E522B86EBB62A48C6732C2651423A9E79377DE',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'wbnb-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchaintestnet',
            base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      }
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/78D5DAB545549A930F5DB22CFA7C821ACE8EF55DCF787BED93A56D04CC7477F5',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/78D5DAB545549A930F5DB22CFA7C821ACE8EF55DCF787BED93A56D04CC7477F5',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'wavax-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'avalanchetestnet',
            base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/301A96A9BB897EF914BA74534EE1D75417753A0E113F2F766838274057290B79',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/301A96A9BB897EF914BA74534EE1D75417753A0E113F2F766838274057290B79',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-418',
            base_denom: 'wftm-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fantomtestnet',
            base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      }
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
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
            channel_id: 'channel-5286',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
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
            channel_id: 'channel-5286',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/BB012F1C95C818F6C959D638595984F4D3916F89E1C159FF73F6B130E0ADFD33',
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
      base: 'ibc/BB012F1C95C818F6C959D638595984F4D3916F89E1C159FF73F6B130E0ADFD33',
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
            channel_id: 'channel-5286',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    }
  ]
};
export default assets;
