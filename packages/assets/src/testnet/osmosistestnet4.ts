import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'osmosistestnet4',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
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
            channel_id: 'channel-135',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/FF3065989E34457F342D4EFB8692406D49D4E2B5C70F725F127862E22CE6BDCD',
          exponent: 0,
          aliases: ['uausdc']
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      base: 'ibc/FF3065989E34457F342D4EFB8692406D49D4E2B5C70F725F127862E22CE6BDCD',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'uausdc',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/F64E7E43CAC1AEB502D028893DC4BD62D2CDFC55B7E21F23043DAE602B8A1F3E',
          exponent: 0,
          aliases: ['eth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/F64E7E43CAC1AEB502D028893DC4BD62D2CDFC55B7E21F23043DAE602B8A1F3E',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'eth-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/3A8B6E50B8050FC8CD704CD48C7922EA221B5FDA672517E243DDFF603FF896ED',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/3A8B6E50B8050FC8CD704CD48C7922EA221B5FDA672517E243DDFF603FF896ED',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'wglmr-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/16F3EB18413FD15154B02F9929473A3C0A23902BF8044157E9E5E0FBEB24FCEE',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/16F3EB18413FD15154B02F9929473A3C0A23902BF8044157E9E5E0FBEB24FCEE',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'wmatic-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/D38FD4C586C397DDAAB715C654DAEE3C3C40462CD410254AC7576208E947605B',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/D38FD4C586C397DDAAB715C654DAEE3C3C40462CD410254AC7576208E947605B',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'wbnb-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/7186C4B1A0596A1AB34C201E27D659B4A9837B46A328BCE5C0E452CD7146BC8F',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/7186C4B1A0596A1AB34C201E27D659B4A9837B46A328BCE5C0E452CD7146BC8F',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'wavax-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
            'ibc/F9E624EB89ABEE4CB1EC04D7941F613BD8383EE7DE323589A82066D0345EF6EB',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/F9E624EB89ABEE4CB1EC04D7941F613BD8383EE7DE323589A82066D0345EF6EB',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'wftm-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
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
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
          exponent: 0,
          aliases: ['ujunox']
        },
        {
          denom: 'junox',
          exponent: 6
        }
      ],
      base: 'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'ujunox',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-3316'
          }
        }
      ]
    },
    {
      description: 'The native token of NEXX GEN AI',
      denom_units: [
        {
          denom:
            'ibc/CD2487F7C3C44914D572111D462A529FD8E699F2123B976F40168452B41BB5D8',
          exponent: 0,
          aliases: ['factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX']
        },
        {
          denom: 'nexx',
          exponent: 6
        }
      ],
      base: 'ibc/CD2487F7C3C44914D572111D462A529FD8E699F2123B976F40168452B41BB5D8',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom:
              'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-3316'
          }
        }
      ]
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [
        {
          denom:
            'ibc/76F99708DB7035A8774A644BFFD9B9736272970A7DF17397C7E35F7DBBCFE802',
          exponent: 0,
          aliases: [
            'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA'
          ]
        },
        {
          denom: 'arena',
          exponent: 6
        }
      ],
      address:
        'juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k',
      base: 'ibc/76F99708DB7035A8774A644BFFD9B9736272970A7DF17397C7E35F7DBBCFE802',
      name: 'Arena Token',
      description: 'The token for the Arena DAO',
      display: 'arena',
      symbol: 'ARENA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom:
              'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-3316'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'juno',
            base_denom:
              'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.png'
        }
      ]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [
        {
          denom:
            'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-2083'
          }
        }
      ]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }
      ]
    },
    {
      description:
        'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [
        {
          denom:
            'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
          exponent: 0,
          aliases: ['ulove']
        },
        {
          denom: 'love',
          exponent: 6
        }
      ],
      base: 'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }
      ]
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/70DF86A0367EE67FB3726F370360CB27788D844B1669B7953044BDA2D78FB7EA',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/70DF86A0367EE67FB3726F370360CB27788D844B1669B7953044BDA2D78FB7EA',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uusdc',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description:
        'USDLR is a fiat-backed stablecoin issued by Stable. Stable pays DeFi protocols who distribute USDLR.',
      denom_units: [
        {
          denom:
            'ibc/46F35358D7836AEEA635174D70AAAEBF8686D1506DF15017CF453A79ADB4C251',
          exponent: 0,
          aliases: ['uusdlr']
        },
        {
          denom: 'usdlr',
          exponent: 6
        }
      ],
      base: 'ibc/46F35358D7836AEEA635174D70AAAEBF8686D1506DF15017CF453A79ADB4C251',
      display: 'usdlr',
      name: 'USDLR by Stable',
      symbol: 'USDLR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uusdlr',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
        }
      ]
    }
  ]
};
export default assets;
