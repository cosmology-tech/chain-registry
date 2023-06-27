import { AssetList } from '@chain-registry/types';
const asset_list: AssetList = {
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom:
            'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
          exponent: 0,
          aliases: ['uebl']
        },
        {
          denom: 'ebl',
          exponent: 6
        }
      ],
      base: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uebl',
            chain_name: '8ball'
          },
          chain: {
            channel_id: 'channel-641'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
          exponent: 0,
          aliases: ['aacre']
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      base: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png'
      },
      coingecko_id: 'arable-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      base: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      base: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }
      ]
    },
    {
      description:
        'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [
        {
          denom:
            'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
          exponent: 0,
          aliases: ['ubld']
        },
        {
          denom: 'bld',
          exponent: 6
        }
      ],
      base: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png'
      },
      coingecko_id: 'agoric',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-320'
          }
        }
      ]
    },
    {
      description:
        'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [
        {
          denom:
            'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
          exponent: 0,
          aliases: ['uist']
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      base: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-320'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom:
            'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png'
      },
      coingecko_id: 'aioz-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'attoaioz',
            chain_name: 'aioz'
          },
          chain: {
            channel_id: 'channel-779'
          }
        }
      ]
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [
        {
          denom:
            'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
          exponent: 0,
          aliases: ['arkh']
        },
        {
          denom: 'ARKH',
          exponent: 6
        }
      ],
      base: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
      name: 'Arkh',
      display: 'ARKH',
      symbol: 'ARKH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'arkh',
            chain_name: 'arkh'
          },
          chain: {
            channel_id: 'channel-648'
          }
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
          exponent: 0,
          aliases: ['umntl']
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      base: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      coingecko_id: 'assetmantle',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-232'
          }
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
      }
    },
    {
      description: "Frax's fractional-algorithmic stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
          exponent: 0,
          aliases: ['frax-wei']
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      base: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'frax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      }
    },
    {
      description: 'Dai stablecoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
          exponent: 0,
          aliases: ['dai-wei']
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      base: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'dai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png'
      }
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
          exponent: 0,
          aliases: ['uusdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uusdt',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png'
      }
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'weth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      }
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wbtc-satoshi',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      }
    },
    {
      description: 'Aave on Axelar',
      denom_units: [
        {
          denom:
            'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
          exponent: 0,
          aliases: ['aave-wei']
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      base: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aave-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      }
    },
    {
      description: 'ApeCoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
          exponent: 0,
          aliases: ['ape-wei']
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      base: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ape-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      }
    },
    {
      description: 'Axie Infinity Shard on Axelar',
      denom_units: [
        {
          denom:
            'ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24',
          exponent: 0,
          aliases: ['axs-wei']
        },
        {
          denom: 'axs',
          exponent: 18
        }
      ],
      base: 'ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'axs-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      }
    },
    {
      description: 'Chainlink on Axelar',
      denom_units: [
        {
          denom:
            'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
          exponent: 0,
          aliases: ['link-wei']
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      base: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'link-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      }
    },
    {
      description: 'Maker on Axelar',
      denom_units: [
        {
          denom:
            'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
          exponent: 0,
          aliases: ['mkr-wei']
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      base: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'mkr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      }
    },
    {
      description: 'Rai Reflex Index on Axelar',
      denom_units: [
        {
          denom:
            'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
          exponent: 0,
          aliases: ['rai-wei']
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      base: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'rai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      }
    },
    {
      description: 'Shiba Inu on Axelar',
      denom_units: [
        {
          denom:
            'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
          exponent: 0,
          aliases: ['shib-wei']
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      base: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'shib-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      }
    },
    {
      description: 'Lido Staked Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/129F401C84FCD5B0183472ED83745193B0B3A69855635A56B9056EEF8D3C241C',
          exponent: 0,
          aliases: ['steth-wei']
        },
        {
          denom: 'steth',
          exponent: 18
        }
      ],
      base: 'ibc/129F401C84FCD5B0183472ED83745193B0B3A69855635A56B9056EEF8D3C241C',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'steth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      }
    },
    {
      description: 'Uniswap on Axelar',
      denom_units: [
        {
          denom:
            'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
          exponent: 0,
          aliases: ['uni-wei']
        },
        {
          denom: 'uni',
          exponent: 18
        }
      ],
      base: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uni-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      }
    },
    {
      description: 'Chain on Axelar',
      denom_units: [
        {
          denom:
            'ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC',
          exponent: 0,
          aliases: ['xcn-wei']
        },
        {
          denom: 'xcn',
          exponent: 18
        }
      ],
      base: 'ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'xcn-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      }
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
          exponent: 0,
          aliases: ['dot-planck']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      base: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
      name: 'Wrapped Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'dot-planck',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png'
      }
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wglmr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png'
      }
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom:
            'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wmatic-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      }
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom:
            'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wbnb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png'
      }
    },
    {
      description: 'Binance USD on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
          exponent: 0,
          aliases: ['busd-wei']
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      base: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'busd-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      }
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wavax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
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
            'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wftm-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      }
    },
    {
      description: "Circle's stablecoin from Polygon on Axelar",
      denom_units: [
        {
          denom:
            'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
          exponent: 0,
          aliases: ['polygon-uusdc']
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
      name: 'USD Coin from Polygon',
      display: 'polygon-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'polygon-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
      }
    },
    {
      description: "Circle's stablecoin from Avalanche on Axelar",
      denom_units: [
        {
          denom:
            'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
      name: 'USD Coin from Avalanche',
      display: 'avalanche-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'avalanche-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
      }
    },
    {
      description: 'Wrapped FIL on Axelar',
      denom_units: [
        {
          denom:
            'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
          exponent: 0,
          aliases: ['wfil-wei']
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      base: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
      name: 'Wrapped FIL from Filecoin',
      display: 'fil',
      symbol: 'axlFIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wfil-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/filecoin/images/wfil.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/filecoin/images/wfil.png'
      }
    },
    {
      description: 'Arbitrum on Axelar',
      denom_units: [
        {
          denom:
            'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      base: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'arb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
          exponent: 0,
          aliases: ['pepe-wei']
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      base: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'pepe-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
          exponent: 0,
          aliases: ['cbeth-wei']
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      base: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'cbeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
          exponent: 0,
          aliases: ['reth-wei']
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      base: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'reth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      base: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'sfrxeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
          exponent: 0,
          aliases: ['wsteth-wei']
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      base: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'wsteth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom:
            'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband']
        },
        {
          denom: 'band',
          exponent: 6
        }
      ],
      base: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      coingecko_id: 'band-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-83',
            base_denom: 'uband',
            chain_name: 'bandchain'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }
      ]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [
        {
          denom:
            'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
          exponent: 0,
          aliases: ['ubze']
        },
        {
          denom: 'bze',
          exponent: 6
        }
      ],
      base: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-340'
          }
        }
      ]
    },
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom:
            'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna']
        },
        {
          denom: 'bcna',
          exponent: 6
        }
      ],
      base: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg']
        },
        {
          denom: 'btsg',
          exponent: 6
        }
      ],
      base: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Adam Clay a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
          exponent: 0,
          aliases: ['ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09']
        },
        {
          denom: 'clay',
          exponent: 6
        }
      ],
      base: 'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
      name: 'Adam Clay FanToken',
      display: 'clay',
      symbol: 'CLAY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Nicola Fasano a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07',
          exponent: 0,
          aliases: ['ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7']
        },
        {
          denom: 'fasano',
          exponent: 6
        }
      ],
      base: 'ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07',
      name: 'Nicola Fasano Fantoken',
      display: 'fasano',
      symbol: 'FASANO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Delta 9 a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A',
          exponent: 0,
          aliases: ['ft575B10B0CEE2C164D9ED6A96313496F164A9607C']
        },
        {
          denom: 'd9x',
          exponent: 6
        }
      ],
      base: 'ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A',
      name: 'Delta 9 Fantoken',
      display: 'd9x',
      symbol: 'D9X',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'FONTI a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1',
          exponent: 0,
          aliases: ['ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305']
        },
        {
          denom: 'fonti',
          exponent: 6
        }
      ],
      base: 'ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1',
      name: 'FONTI Fantoken',
      display: 'fonti',
      symbol: 'FONTI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'BlackJack a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853',
          exponent: 0,
          aliases: ['ft52EEB0EE509AC546ED92EAC8591F731F213DDD16']
        },
        {
          denom: 'bjks',
          exponent: 6
        }
      ],
      base: 'ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853',
      name: 'BlackJack Fantoken',
      display: 'bjks',
      symbol: 'BJKS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Rawanne a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867',
          exponent: 0,
          aliases: ['ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A']
        },
        {
          denom: 'rwne',
          exponent: 6
        }
      ],
      base: 'ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867',
      name: 'Rawanne Fantoken',
      display: 'rwne',
      symbol: 'RWNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Enmoda a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1',
          exponent: 0,
          aliases: ['ft85AE1716C5E39EA6D64BBD7898C3899A7B500626']
        },
        {
          denom: 'enmoda',
          exponent: 6
        }
      ],
      base: 'ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1',
      name: 'Enmoda Fantoken',
      display: 'enmoda',
      symbol: 'ENMODA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: '404Deep Records a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
          exponent: 0,
          aliases: ['ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A']
        },
        {
          denom: '404dr',
          exponent: 6
        }
      ],
      base: 'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
      name: '404Deep Records Fantoken',
      display: '404dr',
      symbol: '404DR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'N43 a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
          exponent: 0,
          aliases: ['ft387C1C279D962ED80C09C1D592A92C4275FD7C5D']
        },
        {
          denom: 'n43',
          exponent: 6
        }
      ],
      base: 'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
      name: 'N43 Fantoken',
      display: 'n43',
      symbol: 'N43',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Puro Lobo a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5',
          exponent: 0,
          aliases: ['ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB']
        },
        {
          denom: 'lobo',
          exponent: 6
        }
      ],
      base: 'ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5',
      name: 'Puro Lobo Fantoken',
      display: 'lobo',
      symbol: 'LOBO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Vibranium a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C',
          exponent: 0,
          aliases: ['ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B']
        },
        {
          denom: 'vibra',
          exponent: 6
        }
      ],
      base: 'ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C',
      name: 'Vibranium Fantoken',
      display: 'vibra',
      symbol: 'VIBRA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Karina a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58',
          exponent: 0,
          aliases: ['ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE']
        },
        {
          denom: 'karina',
          exponent: 6
        }
      ],
      base: 'ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58',
      name: 'Karina Fantoken',
      display: 'karina',
      symbol: 'KARINA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Luca Testa a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF',
          exponent: 0,
          aliases: ['ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12']
        },
        {
          denom: 'testa',
          exponent: 6
        }
      ],
      base: 'ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF',
      name: 'Luca Testa Fantoken',
      display: 'testa',
      symbol: 'TESTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'Carolina Marquez a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D',
          exponent: 0,
          aliases: ['ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3']
        },
        {
          denom: 'cmqz',
          exponent: 6
        }
      ],
      base: 'ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D',
      name: 'Carolina Marquez Fantoken',
      display: 'cmqz',
      symbol: 'CMQZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'L DON a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/BE95D1E09F5A44FC5409F4E0F52750DF2A868D865BC91F3C3EE3C83235789D18',
          exponent: 0,
          aliases: ['ft347B1612A2B7659913679CF6CD45B8B130C50A00']
        },
        {
          denom: 'ldon',
          exponent: 6
        }
      ],
      base: 'ibc/BE95D1E09F5A44FC5409F4E0F52750DF2A868D865BC91F3C3EE3C83235789D18',
      name: 'L DON Fantoken',
      display: 'ldon',
      symbol: 'LDON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft347B1612A2B7659913679CF6CD45B8B130C50A00.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }
      ]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [
        {
          denom:
            'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
          exponent: 0,
          aliases: ['ubnt']
        },
        {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }
      ],
      base: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      coingecko_id: 'bluzelle',
      keywords: ['bluzelle', 'game'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ubnt',
            chain_name: 'bluzelle'
          },
          chain: {
            channel_id: 'channel-763'
          }
        }
      ]
    },
    {
      description: "The ELT token of Bluzelle's Gamma 4 Gaming Ecosystem",
      denom_units: [
        {
          denom:
            'ibc/FDFCC8A906432FA7EFBA430062DA860883F5DDC77B8D64AFA2EE6CD5DC54B6A2',
          exponent: 0,
          aliases: ['uelt']
        },
        {
          denom: 'elt',
          exponent: 6
        }
      ],
      base: 'ibc/FDFCC8A906432FA7EFBA430062DA860883F5DDC77B8D64AFA2EE6CD5DC54B6A2',
      name: 'ELT',
      display: 'elt',
      symbol: 'ELT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
      },
      coingecko_id: '',
      keywords: ['elt'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uelt',
            chain_name: 'bluzelle'
          },
          chain: {
            channel_id: 'channel-763'
          }
        }
      ]
    },
    {
      description: "The game token of Bluzelle's Gamma 4 Gaming Ecosystem",
      denom_units: [
        {
          denom:
            'ibc/6A71FD886C62ECADA07ECFD24542C5E87C316A590737F5CE6FC37E3D258CD106',
          exponent: 0,
          aliases: ['ug4']
        },
        {
          denom: 'g4',
          exponent: 6
        }
      ],
      base: 'ibc/6A71FD886C62ECADA07ECFD24542C5E87C316A590737F5CE6FC37E3D258CD106',
      name: 'G4',
      display: 'g4',
      symbol: 'G4',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
      },
      coingecko_id: '',
      keywords: ['g4'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ug4',
            chain_name: 'bluzelle'
          },
          chain: {
            channel_id: 'channel-763'
          }
        }
      ]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot']
        }
      ],
      base: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png'
      },
      coingecko_id: 'bostrom',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'boot',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
          exponent: 0,
          aliases: ['hydrogen']
        }
      ],
      base: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      name: 'Bostrom Hydrogen',
      display: 'hydrogen',
      symbol: 'HYDROGEN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'hydrogen',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      description:
        'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom:
            'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
          exponent: 0,
          aliases: ['acanto']
        },
        {
          denom: 'canto',
          exponent: 18
        }
      ],
      base: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png'
      },
      coingecko_id: 'canto',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-550'
          }
        }
      ]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
          exponent: 0,
          aliases: ['swth']
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [
        {
          denom:
            'ibc/F64D67581D50AE3F641A344F31FE7CF9DC5A2C8C8C455A6967E36DEA09D563E6',
          exponent: 0,
          aliases: ['usc']
        },
        {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/F64D67581D50AE3F641A344F31FE7CF9DC5A2C8C8C455A6967E36DEA09D563E6',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ]
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/09B40B4315A4A188A84E0C5F2A11013604B3F8D8542970A1F767481B6560E66B',
          exponent: 0,
          aliases: ['bnb.1.6.773edb']
        },
        {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }
      ],
      base: 'ibc/09B40B4315A4A188A84E0C5F2A11013604B3F8D8542970A1F767481B6560E66B',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'bnb.1.6.773edb',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      }
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/FB57581C2E698C45AE811B2C31697EB3D3C34CD55F8996DDE1B9447D6E879ACD',
          exponent: 0,
          aliases: ['bneo.1.14.e2e5f6']
        },
        {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }
      ],
      base: 'ibc/FB57581C2E698C45AE811B2C31697EB3D3C34CD55F8996DDE1B9447D6E879ACD',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'bneo.1.14.e2e5f6',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      }
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/6018AD9F3E8AEF59DBD127F9D81C4F2B69CF1DD5680DBD4D72F0FE1F87E7397D',
          exponent: 0,
          aliases: ['busd.1.6.754a80']
        },
        {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }
      ],
      base: 'ibc/6018AD9F3E8AEF59DBD127F9D81C4F2B69CF1DD5680DBD4D72F0FE1F87E7397D',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'busd.1.6.754a80',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      }
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [
        {
          denom:
            'ibc/FF1EB215DC22B8D383105710E17DAF0584FEB7C15DDA2FADC7D44F5B77DFFBF4',
          exponent: 0,
          aliases: ['cglp.1.19.1698d3']
        },
        {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }
      ],
      base: 'ibc/FF1EB215DC22B8D383105710E17DAF0584FEB7C15DDA2FADC7D44F5B77DFFBF4',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'cglp.1.19.1698d3',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      }
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [
        {
          denom:
            'ibc/73C2C269DCA7914B90E227D315C339836FDC6F2D570E5C5438D6C288472A665B',
          exponent: 0,
          aliases: ['cgt/1']
        },
        {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }
      ],
      base: 'ibc/73C2C269DCA7914B90E227D315C339836FDC6F2D570E5C5438D6C288472A665B',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ]
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/0BAB91A2EFF98CFE98803D4777ECAA19801E3F8FF5B2D78278915610BFA4242A',
          exponent: 0,
          aliases: ['eth.1.19.c3b805']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/0BAB91A2EFF98CFE98803D4777ECAA19801E3F8FF5B2D78278915610BFA4242A',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'eth.1.19.c3b805',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      }
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/0824A92510C1CE67BF02944854A5D7C7F392DF111045B4551ADDF7EFFEA05A32',
          exponent: 0,
          aliases: ['eth.1.2.942d87']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/0824A92510C1CE67BF02944854A5D7C7F392DF111045B4551ADDF7EFFEA05A32',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'eth.1.2.942d87',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      }
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/B39116ED5DA87C0DD8E959A9D0DFF5B4E38608669528A20DEFF29D7447B6087B',
          exponent: 0,
          aliases: ['usdc.1.2.343151']
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/B39116ED5DA87C0DD8E959A9D0DFF5B4E38608669528A20DEFF29D7447B6087B',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usdc.1.2.343151',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/A14A79305A1168CF7C8071EA40B5BC647E3D3FEBBD427E38F05FE07F0B317E0A',
          exponent: 0,
          aliases: ['usdc.1.6.53ff75']
        },
        {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/A14A79305A1168CF7C8071EA40B5BC647E3D3FEBBD427E38F05FE07F0B317E0A',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usdc.1.6.53ff75',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-188'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom:
            'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
          exponent: 0,
          aliases: ['ucrbrus']
        },
        {
          denom: 'crbrus',
          exponent: 6
        }
      ],
      base: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png'
      },
      coingecko_id: 'cerberus-2',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucrbrus',
            chain_name: 'cerberus'
          },
          chain: {
            channel_id: 'channel-212'
          }
        }
      ]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq']
        },
        {
          denom: 'cheq',
          exponent: 9
        }
      ],
      base: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-108'
          }
        }
      ]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua']
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      base: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx']
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      base: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-87'
          }
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
          exponent: 0,
          aliases: ['uharbor']
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      base: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-87'
          }
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
          exponent: 0,
          aliases: ['ucmst']
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      base: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-87'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-141',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      base: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-297'
          }
        }
      ]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/61365041DAC5A57B92D60A3EBEB5143E209F86CECDBDD7326A6E7F8351352119',
          exponent: 0,
          aliases: ['ubcre']
        },
        {
          denom: 'bcre',
          exponent: 6
        }
      ],
      base: 'ibc/61365041DAC5A57B92D60A3EBEB5143E209F86CECDBDD7326A6E7F8351352119',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-297'
          }
        }
      ]
    },
    {
      description: 'CRO coin is the token for the Crypto.com platform.',
      denom_units: [
        {
          denom:
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro']
        },
        {
          denom: 'cro',
          exponent: 8
        }
      ],
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
      },
      coingecko_id: 'crypto-com-chain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [
        {
          denom:
            'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
          exponent: 0,
          aliases: ['acudos']
        },
        {
          denom: 'cudos',
          exponent: 18
        }
      ],
      base: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      coingecko_id: 'cudos',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'acudos',
            chain_name: 'cudos'
          },
          chain: {
            channel_id: 'channel-298'
          }
        }
      ]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [
        {
          denom:
            'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec']
        },
        {
          denom: 'dec',
          exponent: 6
        }
      ],
      base: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-181'
          }
        }
      ]
    },
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom:
            'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm']
        },
        {
          denom: 'dsm',
          exponent: 6
        }
      ],
      base: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      coingecko_id: 'desmos',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'udsm',
            chain_name: 'desmos'
          },
          chain: {
            channel_id: 'channel-135'
          }
        }
      ]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom:
            'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig']
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      base: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      coingecko_id: 'dig-chain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'udig',
            chain_name: 'dig'
          },
          chain: {
            channel_id: 'channel-128'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Dyson Protocol',
      denom_units: [
        {
          denom:
            'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
          exponent: 0,
          aliases: ['dys']
        }
      ],
      base: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      name: 'Dys',
      display: 'dys',
      symbol: 'DYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'dys',
            chain_name: 'dyson'
          },
          chain: {
            channel_id: 'channel-526'
          }
        }
      ]
    },
    {
      description:
        'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [
        {
          denom:
            'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
          exponent: 0,
          aliases: ['aechelon']
        },
        {
          denom: 'echelon',
          exponent: 18
        }
      ],
      base: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      coingecko_id: 'echelon',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'aechelon',
            chain_name: 'echelon'
          },
          chain: {
            channel_id: 'channel-403'
          }
        }
      ]
    },
    {
      description:
        'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [
        {
          denom:
            'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm']
        },
        {
          denom: 'ngm',
          exponent: 6
        }
      ],
      base: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png'
      },
      coingecko_id: 'e-money',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
          aliases: ['eeur']
        },
        {
          denom: 'eur',
          exponent: 6
        }
      ],
      base: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png'
      },
      coingecko_id: 'e-money-eur',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B',
          exponent: 0,
          aliases: ['echf']
        },
        {
          denom:
            'ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B',
          exponent: 6,
          aliases: ['echf']
        }
      ],
      base: 'ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC',
          exponent: 0,
          aliases: ['enok']
        },
        {
          denom:
            'ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC',
          exponent: 6,
          aliases: ['enok']
        }
      ],
      base: 'ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2',
          exponent: 0,
          aliases: ['edkk']
        },
        {
          denom:
            'ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2',
          exponent: 6,
          aliases: ['edkk']
        }
      ],
      base: 'ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A',
          exponent: 0,
          aliases: ['esek']
        },
        {
          denom:
            'ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A',
          exponent: 6,
          aliases: ['esek']
        }
      ],
      base: 'ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom:
            'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          exponent: 0,
          aliases: ['aevmos']
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      base: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png'
      },
      coingecko_id: 'evmos',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom:
            'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
          exponent: 0,
          aliases: ['afet']
        },
        {
          denom: 'fet',
          exponent: 18
        }
      ],
      base: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
      name: 'fetch-ai',
      display: 'fet',
      symbol: 'FET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      coingecko_id: 'fetch-ai',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'afet',
            chain_name: 'fetchhub'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description:
        'The MOBX coin rewards the use of eco-friendly micromobility transportation.',
      denom_units: [
        {
          denom:
            'ibc/CD20AC50CE57F1CF2EA680D7D47733DA9213641D2D116C5806A880F508609A7A',
          exponent: 0,
          aliases: ['nanomobx']
        },
        {
          denom: 'mobx',
          exponent: 9
        }
      ],
      base: 'ibc/CD20AC50CE57F1CF2EA680D7D47733DA9213641D2D116C5806A880F508609A7A',
      name: 'MOBIX',
      display: 'mobx',
      symbol: 'MOBX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'nanomobx',
            chain_name: 'fetchhub'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [
        {
          denom:
            'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
          exponent: 0,
          aliases: ['uglx']
        },
        {
          denom: 'glx',
          exponent: 6
        }
      ],
      base: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uglx',
            chain_name: 'galaxy'
          },
          chain: {
            channel_id: 'channel-236'
          }
        }
      ]
    },
    {
      description:
        'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [
        {
          denom:
            'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
          exponent: 0,
          aliases: ['el1']
        },
        {
          denom: 'l1',
          exponent: 18
        }
      ],
      base: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'el1',
            chain_name: 'genesisl1'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }
      ]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton']
        },
        {
          denom: 'graviton',
          exponent: 6
        }
      ],
      base: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [
        {
          denom:
            'ibc/CBC60FC96BD21708D3B60B2E4AD949E0DA07C67EFE6A8D463298806CD507A9CF',
          exponent: 0,
          aliases: ['gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006']
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      base: 'ibc/CBC60FC96BD21708D3B60B2E4AD949E0DA07C67EFE6A8D463298806CD507A9CF',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      }
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [
        {
          denom:
            'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        },
        {
          denom: 'gweth',
          exponent: 18
        }
      ],
      base: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
      name: 'Wrapped Ethereum',
      display: 'gweth',
      symbol: 'WETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [
        {
          denom:
            'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        },
        {
          denom: 'gusdc',
          exponent: 6
        }
      ],
      base: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
      name: 'USD Coin',
      display: 'gusdc',
      symbol: 'USDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [
        {
          denom:
            'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        },
        {
          denom: 'gusdt',
          exponent: 6
        }
      ],
      base: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
      name: 'Tether USD',
      display: 'gusdt',
      symbol: 'USDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [
        {
          denom:
            'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        },
        {
          denom: 'gwbtc',
          exponent: 8
        }
      ],
      base: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
      name: 'Wrapped Bitcoin',
      display: 'gwbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [
        {
          denom:
            'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        },
        {
          denom: 'gdai',
          exponent: 18
        }
      ],
      base: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
      name: 'Dai Stablecoin',
      display: 'gdai',
      symbol: 'DAI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }
      ]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo']
        },
        {
          denom: 'ixo',
          exponent: 6
        }
      ],
      base: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png'
      },
      coingecko_id: 'ixo',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Imversed',
      denom_units: [
        {
          denom:
            'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
          exponent: 0,
          aliases: ['aimv']
        },
        {
          denom: 'imv',
          exponent: 18
        }
      ],
      base: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
      name: 'IMV',
      display: 'imv',
      symbol: 'IMV',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png'
      },
      coingecko_id: 'imv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aimv',
            chain_name: 'imversed'
          },
          chain: {
            channel_id: 'channel-517'
          }
        }
      ]
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }
      ]
    },
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom:
            'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris']
        },
        {
          denom: 'iris',
          exponent: 6
        }
      ],
      base: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom:
            'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
          exponent: 0,
          aliases: ['ujkl']
        },
        {
          denom: 'jkl',
          exponent: 6
        }
      ],
      base: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingecko_id: 'jackal-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-412'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno']
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-42'
          }
        }
      ]
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address:
        'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [
        {
          denom:
            'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
          exponent: 0
        },
        {
          denom: 'banana',
          exponent: 6
        }
      ],
      base: 'ibc/DA9C0CDF1EF84D668BF7131DBB2D287C54D14B467A1BE74FA824E0366C60B63C',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-42'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/9743372F617A980BCAAA791C386221AFAA42CD4C5E69A29BD47DF0743078909D',
          exponent: 0,
          aliases: [
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
          ]
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'ibc/9743372F617A980BCAAA791C386221AFAA42CD4C5E69A29BD47DF0743078909D',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png'
      },
      coingecko_id: 'neta',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-42'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
          exponent: 0,
          aliases: ['ukava']
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      base: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png'
      },
      coingecko_id: 'kava',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
          exponent: 0,
          aliases: ['hard']
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      base: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
      name: 'Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
          exponent: 0,
          aliases: ['swp']
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      base: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
      name: 'Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
          exponent: 0,
          aliases: ['usdx']
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      base: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
      name: 'USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png'
      },
      coingecko_id: 'usdx',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }
      ]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom:
            'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki']
        },
        {
          denom: 'xki',
          exponent: 6
        }
      ],
      base: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }
      ]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [
        {
          denom:
            'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc']
        },
        {
          denom: 'darc',
          exponent: 6
        }
      ],
      base: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'DARC',
      display: 'darc',
      symbol: 'DARC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      coingecko_id: 'darcmatter-coin',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'udarc',
            chain_name: 'konstellation'
          },
          chain: {
            channel_id: 'channel-171'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
          exponent: 0,
          aliases: ['ukuji']
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      base: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-259'
          }
        }
      ]
    },
    {
      description:
        'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/AADDBDAF45AA220B627662682B48E14F1F830BD46D5A4C4FFEFCCEB9D6050854',
          exponent: 0,
          aliases: [
            'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk'
          ]
        },
        {
          denom: 'usk',
          exponent: 6
        }
      ],
      base: 'ibc/AADDBDAF45AA220B627662682B48E14F1F830BD46D5A4C4FFEFCCEB9D6050854',
      name: 'USK',
      display: 'USK',
      symbol: 'USK',
      coingecko_id: 'usk',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-259'
          }
        }
      ]
    },
    {
      description: 'ampKUJI',
      denom_units: [
        {
          denom:
            'ibc/E7F2113AFAE9EFA752E5587BA3B29384D47F154DEA1EF9573B3D4D533D74E688',
          exponent: 0,
          aliases: [
            'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI'
          ]
        },
        {
          denom: 'ampKUJI',
          exponent: 6
        }
      ],
      base: 'ibc/E7F2113AFAE9EFA752E5587BA3B29384D47F154DEA1EF9573B3D4D533D74E688',
      name: 'ampKUJI',
      display: 'ampKUJI',
      symbol: 'ampKUJI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampKUJI.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampKUJI.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-259'
          }
        }
      ]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/4D9F8691DB362DB2F92363CD8601B9C670FBAEAFB43842128179F5109535CD95',
          exponent: 0,
          aliases: [
            'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta'
          ]
        },
        {
          denom: 'mnta',
          exponent: 6
        }
      ],
      base: 'ibc/4D9F8691DB362DB2F92363CD8601B9C670FBAEAFB43842128179F5109535CD95',
      name: 'MNTA',
      display: 'MNTA',
      symbol: 'MNTA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-259'
          }
        }
      ]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [
        {
          denom:
            'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
          exponent: 0,
          aliases: ['ukyve']
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      base: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukyve',
            chain_name: 'kyve'
          },
          chain: {
            channel_id: 'channel-767'
          }
        }
      ]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [
        {
          denom:
            'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
          exponent: 0,
          aliases: ['ulamb']
        },
        {
          denom: 'lamb',
          exponent: 18
        }
      ],
      base: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png'
      },
      coingecko_id: 'lambda',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ulamb',
            chain_name: 'lambda'
          },
          chain: {
            channel_id: 'channel-378'
          }
        }
      ]
    },
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom:
            'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike']
        },
        {
          denom: 'like',
          exponent: 9
        }
      ],
      base: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      coingecko_id: 'likecoin',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel_id: 'channel-53'
          }
        }
      ]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [
        {
          denom:
            'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
          exponent: 0,
          aliases: ['ulumen']
        },
        {
          denom: 'lumen',
          exponent: 6
        }
      ],
      base: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ulumen',
            chain_name: 'lumenx'
          },
          chain: {
            channel_id: 'channel-286'
          }
        }
      ]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom:
            'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum']
        },
        {
          denom: 'lum',
          exponent: 6
        }
      ],
      base: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel_id: 'channel-115'
          }
        }
      ]
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umars',
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-557'
          }
        }
      ]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [
        {
          denom:
            'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
          exponent: 0,
          aliases: ['umedas']
        },
        {
          denom: 'medas',
          exponent: 6
        }
      ],
      base: 'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
      name: 'Medas Digital',
      display: 'medas',
      symbol: 'MEDAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      keywords: ['medas'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umedas',
            chain_name: 'medasdigital'
          },
          chain: {
            channel_id: 'channel-519'
          }
        }
      ]
    },
    {
      description:
        'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [
        {
          denom:
            'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
          exponent: 0,
          aliases: ['umeme']
        },
        {
          denom: 'meme',
          exponent: 6
        }
      ],
      base: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png'
      },
      coingecko_id: 'meme-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umeme',
            chain_name: 'meme'
          },
          chain: {
            channel_id: 'channel-238'
          }
        }
      ]
    },
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom:
            'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick']
        },
        {
          denom: 'tick',
          exponent: 6
        }
      ],
      base: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      display: 'tick',
      name: 'Microtick',
      symbol: 'TICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'utick',
            chain_name: 'microtick'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
          exponent: 0,
          aliases: ['uwhale']
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      base: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png'
      },
      coingecko_id: 'white-whale',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-642'
          }
        }
      ]
    },
    {
      description: 'ampWHALE',
      denom_units: [
        {
          denom:
            'ibc/834D0AEF380E2A490E4209DFF2785B8DBB7703118C144AC373699525C65B4223',
          exponent: 0,
          aliases: [
            'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE'
          ]
        },
        {
          denom: 'ampWHALE',
          exponent: 6
        }
      ],
      base: 'ibc/834D0AEF380E2A490E4209DFF2785B8DBB7703118C144AC373699525C65B4223',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampWhale.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-642'
          }
        }
      ]
    },
    {
      description: 'boneWHALE',
      denom_units: [
        {
          denom:
            'ibc/917C4B1E92EE2F959FC11ECFC435C4048F97E8B00F9444592706F4604F24BF25',
          exponent: 0,
          aliases: [
            'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale'
          ]
        },
        {
          denom: 'boneWHALE',
          exponent: 6
        }
      ],
      base: 'ibc/917C4B1E92EE2F959FC11ECFC435C4048F97E8B00F9444592706F4604F24BF25',
      name: 'boneWHALE',
      display: 'boneWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-642'
          }
        }
      ]
    },
    {
      description: 'FABLE',
      denom_units: [
        {
          denom:
            'ibc/A37859A04007157B7FE3DC60BA32B7AC9CE7921988D32C087A52DFC98DF74C21',
          exponent: 0,
          aliases: [
            'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable'
          ]
        },
        {
          denom: 'fable',
          exponent: 6
        }
      ],
      base: 'ibc/A37859A04007157B7FE3DC60BA32B7AC9CE7921988D32C087A52DFC98DF74C21',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-642'
          }
        }
      ]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [
        {
          denom:
            'ibc/97403599362E2D52C2DC980E90F886930299A66199BAAAA62C585CBCE1CEA90D',
          exponent: 0,
          aliases: [
            'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708'
          ]
        },
        {
          denom: 'bluna',
          exponent: 6
        }
      ],
      base: 'ibc/97403599362E2D52C2DC980E90F886930299A66199BAAAA62C585CBCE1CEA90D',
      address:
        'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      type_asset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-642'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      }
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/B36FA1449007D770F373A0806EC5A907CC2D7DC11AE73FA8AFF76C5903A4F9B0',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/B36FA1449007D770F373A0806EC5A907CC2D7DC11AE73FA8AFF76C5903A4F9B0',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }
      ]
    },
    {
      description:
        'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [
        {
          denom:
            'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
          exponent: 0,
          aliases: ['ufrienzies']
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      base: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }
      ]
    },
    {
      description: 'ATOM token on Noble',
      denom_units: [
        {
          denom:
            'ibc/B003847F854F1FCFBF4CDF3A532DB7DAD0E1A7625B8426C0F81EEBA0AEF5F42D',
          exponent: 0,
          aliases: [
            'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0'
          ]
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B003847F854F1FCFBF4CDF3A532DB7DAD0E1A7625B8426C0F81EEBA0AEF5F42D',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusdc',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }
      ]
    },
    {
      description: 'Staking and goverance token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
          exponent: 0,
          aliases: ['loki']
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      base: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png'
      },
      coingecko_id: 'odin-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'loki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-258'
          }
        }
      ]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
          exponent: 0,
          aliases: ['mGeo']
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      base: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'mGeo',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-258'
          }
        }
      ]
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
          exponent: 0,
          aliases: ['mO9W']
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      base: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'mO9W',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-258'
          }
        }
      ]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom:
            'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
          exponent: 0,
          aliases: ['uflix']
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      base: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-199'
          }
        }
      ]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [
        {
          denom:
            'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
          exponent: 0,
          aliases: ['anom']
        },
        {
          denom: 'nom',
          exponent: 18
        }
      ],
      base: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
      name: 'Nom',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png'
      },
      keywords: ['dex', 'stablecoin', 'bridge', 'staking'],
      coingecko_id: 'onomy-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'anom',
            chain_name: 'onomy'
          },
          chain: {
            channel_id: 'channel-525'
          }
        }
      ]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom:
            'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
          exponent: 0,
          aliases: ['orai']
        },
        {
          denom: 'ORAI',
          exponent: 6
        }
      ],
      base: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      coingecko_id: 'oraichain-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-216'
          }
        }
      ]
    },
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom:
            'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed']
        },
        {
          denom: 'med',
          exponent: 6
        }
      ],
      base: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'MediBloc',
      display: 'med',
      symbol: 'MED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      coingecko_id: 'medibloc',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umed',
            chain_name: 'panacea'
          },
          chain: {
            channel_id: 'channel-82'
          }
        }
      ]
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      base: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      base: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingecko_id: 'stkatom',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'stk/uatom',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [
        {
          denom:
            'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
          exponent: 0,
          aliases: [
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      keywords: ['canon']
    },
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom:
            'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
          exponent: 0,
          aliases: ['aplanq']
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      base: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png'
      },
      coingecko_id: 'planq',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-492'
          }
        }
      ]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [
        {
          denom:
            'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
          exponent: 0,
          aliases: ['nhash']
        },
        {
          denom: 'hash',
          exponent: 9
        }
      ],
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      coingecko_id: 'provenance-blockchain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel_id: 'channel-222'
          }
        }
      ]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr']
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uqsr',
            chain_name: 'quasar'
          },
          chain: {
            channel_id: 'channel-688'
          }
        }
      ]
    },
    {
      description: 'OSMO from Osmosis',
      denom_units: [
        {
          denom:
            'ibc/FE67E80A933248CAE4B088D8918BE20D7F23BE4AF8054E0353DB89E7EEBE2A1B',
          exponent: 0,
          aliases: [
            'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FE67E80A933248CAE4B088D8918BE20D7F23BE4AF8054E0353DB89E7EEBE2A1B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
            chain_name: 'quasar'
          },
          chain: {
            channel_id: 'channel-688'
          }
        }
      ]
    },
    {
      description: 'ATOM from Osmosis',
      denom_units: [
        {
          denom:
            'ibc/EDEFB96A2A1AEA32DFED16E5A7C3E146A244A372A74CCDD73FDA3AA365E33E59',
          exponent: 0,
          aliases: [
            'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5'
          ]
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EDEFB96A2A1AEA32DFED16E5A7C3E146A244A372A74CCDD73FDA3AA365E33E59',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
            chain_name: 'quasar'
          },
          chain: {
            channel_id: 'channel-688'
          }
        }
      ]
    },
    {
      description: 'USDC.axl from Osmosis',
      denom_units: [
        {
          denom:
            'ibc/9B6E2D87FB3CDA88CD2387A7F1A354469B4DB302851ED0216FB77E4A1B952000',
          exponent: 0,
          aliases: [
            'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9B6E2D87FB3CDA88CD2387A7F1A354469B4DB302851ED0216FB77E4A1B952000',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
            chain_name: 'quasar'
          },
          chain: {
            channel_id: 'channel-688'
          }
        }
      ]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
          exponent: 0,
          aliases: ['uqck']
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-522'
          }
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [
        {
          denom:
            'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
          exponent: 0,
          aliases: ['uqstars']
        },
        {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uqstars',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-522'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      }
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
          exponent: 0,
          aliases: ['uqatom']
        },
        {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uqatom',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-522'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      }
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [
        {
          denom:
            'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
          exponent: 0,
          aliases: ['uqregen']
        },
        {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uqregen',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-522'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      }
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
          exponent: 0,
          aliases: ['uqosmo']
        },
        {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uqosmo',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-522'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      }
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom:
            'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
          exponent: 0,
          aliases: ['arebus']
        },
        {
          denom: 'rebus',
          exponent: 18
        }
      ],
      base: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      coingecko_id: 'rebus',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'arebus',
            chain_name: 'rebus'
          },
          chain: {
            channel_id: 'channel-355'
          }
        }
      ]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen']
        },
        {
          denom: 'regen',
          exponent: 6
        }
      ],
      base: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
      },
      coingecko_id: 'regen',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }
      ]
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom:
            'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        },
        {
          denom: 'nct',
          exponent: 6
        }
      ],
      base: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }
      ]
    },
    {
      description: 'Native token of Rizon Chain',
      denom_units: [
        {
          denom:
            'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
          exponent: 0,
          aliases: ['uatolo']
        },
        {
          denom: 'atolo',
          exponent: 6
        }
      ],
      base: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
      name: 'Rizon Chain',
      display: 'atolo',
      symbol: 'ATOLO',
      coingecko_id: 'rizon',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uatolo',
            chain_name: 'rizon'
          },
          chain: {
            channel_id: 'channel-221'
          }
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }
      ]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom:
            'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn']
        },
        {
          denom: 'dvpn',
          exponent: 6
        }
      ],
      base: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png'
      },
      coingecko_id: 'sentinel',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      description: 'The native token of Shareledger',
      denom_units: [
        {
          denom:
            'ibc/1F3AB31A66CC0FBE149859D55D0D2D7167B851A113786438EA6E201033600C8E',
          exponent: 0,
          aliases: ['nshr']
        },
        {
          denom: 'shr',
          exponent: 9
        }
      ],
      base: 'ibc/1F3AB31A66CC0FBE149859D55D0D2D7167B851A113786438EA6E201033600C8E',
      name: 'Shareledger',
      display: 'shr',
      symbol: 'SHR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
      },
      coingecko_id: 'shareledger',
      keywords: ['id'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'nshr',
            chain_name: 'shareledger'
          },
          chain: {
            channel_id: 'channel-647'
          }
        }
      ]
    },
    {
      description: 'The native token of Shentu',
      denom_units: [
        {
          denom:
            'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
          exponent: 0,
          aliases: ['uctk']
        },
        {
          denom: 'ctk',
          exponent: 6
        }
      ],
      base: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png'
      },
      coingecko_id: 'certik',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uctk',
            chain_name: 'shentu'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }
      ]
    },
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
          aliases: ['rowan']
        },
        {
          denom: 'ROWAN',
          exponent: 18
        }
      ],
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png'
      },
      coingecko_id: 'sifchain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }
      ]
    },
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom:
            'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Somm',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-165'
          }
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom:
            'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov']
        },
        {
          denom: 'iov',
          exponent: 6
        }
      ],
      base: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      coingecko_id: 'starname',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom'
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      base: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
      name: 'stSTARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      base: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
      name: 'stJUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
          exponent: 0,
          aliases: ['stuluna']
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      base: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
      name: 'stLUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stuluna',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
          exponent: 0,
          aliases: ['stinj']
        },
        {
          denom: 'stINJ',
          exponent: 18
        }
      ],
      base: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
      name: 'stINJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stinj',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
          exponent: 0,
          aliases: ['staevmos']
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      base: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
      name: 'stEVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'staevmos',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
          exponent: 0,
          aliases: ['stuumee']
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      base: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
      name: 'stUMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'stuumee',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      }
    },
    {
      description:
        'Tori token (TORI) is the Teritoti Network’s native utility token, used as the primary means to govern, secure the blockchain, incentivize ecosystem contributors and use the various Teritori dApp features.',
      denom_units: [
        {
          denom:
            'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
          exponent: 0,
          aliases: ['utori']
        },
        {
          denom: 'tori',
          exponent: 6
        }
      ],
      base: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-362'
          }
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      base: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png'
      },
      coingecko_id: 'terra-luna',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      base: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png'
      },
      coingecko_id: 'terrausd',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      base: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png'
      },
      coingecko_id: 'terrakrw',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/AF5CF6B225B1C03E7F9C2A1AE80CB3BED4E2E7D7F79D5B85679EC2E6925C7289',
          exponent: 0,
          aliases: ['uaud']
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud']
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc']
        }
      ],
      base: 'ibc/AF5CF6B225B1C03E7F9C2A1AE80CB3BED4E2E7D7F79D5B85679EC2E6925C7289',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/4D4C6199EDADACC046B17FCC39C9060EBA1CDF71B4692BE309AE71BA992F792B',
          exponent: 0,
          aliases: ['ucad']
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad']
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc']
        }
      ],
      base: 'ibc/4D4C6199EDADACC046B17FCC39C9060EBA1CDF71B4692BE309AE71BA992F792B',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0863B7BFD46942F07AA55B3C7138C50F26D9A8168A47767897B04DBF41B7DF37',
          exponent: 0,
          aliases: ['uchf']
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf']
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc']
        }
      ],
      base: 'ibc/0863B7BFD46942F07AA55B3C7138C50F26D9A8168A47767897B04DBF41B7DF37',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/C4A85672EAF4C51D865A76483AB8CEFD7BC37C3B6F1A1610721D97A1734F382D',
          exponent: 0,
          aliases: ['ucny']
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny']
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc']
        }
      ],
      base: 'ibc/C4A85672EAF4C51D865A76483AB8CEFD7BC37C3B6F1A1610721D97A1734F382D',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/52013CBC332B65408E0E8D30AA364612FC56820315926B33E2295275BC12A9B7',
          exponent: 0,
          aliases: ['udkk']
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk']
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc']
        }
      ],
      base: 'ibc/52013CBC332B65408E0E8D30AA364612FC56820315926B33E2295275BC12A9B7',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/5035A2B603841B19A40A060B9F6693F09C8F1E038C2A42589F781929A253148E',
          exponent: 0,
          aliases: ['ueur']
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur']
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc']
        }
      ],
      base: 'ibc/5035A2B603841B19A40A060B9F6693F09C8F1E038C2A42589F781929A253148E',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/2A5C04E2BBB24046A98162896D6237CE56ACE8C3CD907F8070E8348A30A6376E',
          exponent: 0,
          aliases: ['ugbp']
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp']
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc']
        }
      ],
      base: 'ibc/2A5C04E2BBB24046A98162896D6237CE56ACE8C3CD907F8070E8348A30A6376E',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/95608E3B5D8E5C31EE272E09A04AB8E6638A858F564E5B8F5A5C05CEFC33B434',
          exponent: 0,
          aliases: ['uhkd']
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd']
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc']
        }
      ],
      base: 'ibc/95608E3B5D8E5C31EE272E09A04AB8E6638A858F564E5B8F5A5C05CEFC33B434',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/BF55329AEA7E79B0AAB320C41A76AC8B9E4E9E07EEED8643AB57440C0978F402',
          exponent: 0,
          aliases: ['uidr']
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr']
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc']
        }
      ],
      base: 'ibc/BF55329AEA7E79B0AAB320C41A76AC8B9E4E9E07EEED8643AB57440C0978F402',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/C9B27B2F497CD3A3C7EE07556FA40AE234EE346A1EC269E7DE59C9CB52A0A0A6',
          exponent: 0,
          aliases: ['uinr']
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr']
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc']
        }
      ],
      base: 'ibc/C9B27B2F497CD3A3C7EE07556FA40AE234EE346A1EC269E7DE59C9CB52A0A0A6',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/E33EB14BFC9274B7A9C349BB519A78B33C782DA682708EC91A85359FFAA6357A',
          exponent: 0,
          aliases: ['ujpy']
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy']
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc']
        }
      ],
      base: 'ibc/E33EB14BFC9274B7A9C349BB519A78B33C782DA682708EC91A85359FFAA6357A',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0AA77B8ECAAD61A09437BA40B9EAEA3A80D9CF3EF1933309895BF3C2FC699DA6',
          exponent: 0,
          aliases: ['umnt']
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt']
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc']
        }
      ],
      base: 'ibc/0AA77B8ECAAD61A09437BA40B9EAEA3A80D9CF3EF1933309895BF3C2FC699DA6',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/12FEFB6E8AD852D23474DB1664D6F1B1C965506492B85E34F3496A9AF7B3F6C8',
          exponent: 0,
          aliases: ['umyr']
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr']
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc']
        }
      ],
      base: 'ibc/12FEFB6E8AD852D23474DB1664D6F1B1C965506492B85E34F3496A9AF7B3F6C8',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/2E4ECFFBCDD77D42E6A1DD2D866C11FECCD4EB65B695253A610F2882B654731F',
          exponent: 0,
          aliases: ['unok']
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok']
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc']
        }
      ],
      base: 'ibc/2E4ECFFBCDD77D42E6A1DD2D866C11FECCD4EB65B695253A610F2882B654731F',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/559B4D308D13DFD4CF535B417C97740E99516B6EF4E0C66AD54CCAD2F46C55E5',
          exponent: 0,
          aliases: ['uphp']
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp']
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc']
        }
      ],
      base: 'ibc/559B4D308D13DFD4CF535B417C97740E99516B6EF4E0C66AD54CCAD2F46C55E5',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/92BF104008D75F9E9A602F948C824E75271A62EAB940D381AF7B1A6D95BF6021',
          exponent: 0,
          aliases: ['usdr']
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr']
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc']
        }
      ],
      base: 'ibc/92BF104008D75F9E9A602F948C824E75271A62EAB940D381AF7B1A6D95BF6021',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/227794C5A63E0A61F49839817288C6582E0BB3D9A082D261542F56684DC6F47D',
          exponent: 0,
          aliases: ['usek']
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek']
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc']
        }
      ],
      base: 'ibc/227794C5A63E0A61F49839817288C6582E0BB3D9A082D261542F56684DC6F47D',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/2FB96E4667FBBE51C86E534017E6787F5B15377AF16815955DC97692CB237208',
          exponent: 0,
          aliases: ['usgd']
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd']
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc']
        }
      ],
      base: 'ibc/2FB96E4667FBBE51C86E534017E6787F5B15377AF16815955DC97692CB237208',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/1370B7C0100924E0310D7A9F71701109F86CF2A7E13B86A1D3B425E618167DBF',
          exponent: 0,
          aliases: ['uthb']
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb']
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc']
        }
      ],
      base: 'ibc/1370B7C0100924E0310D7A9F71701109F86CF2A7E13B86A1D3B425E618167DBF',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/93B9AA28AF48E1601399BA808B09A3EE59299B48D70A1E1BCD04D9DB84E246F3',
          exponent: 0,
          aliases: ['utwd']
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd']
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc']
        }
      ],
      base: 'ibc/93B9AA28AF48E1601399BA808B09A3EE59299B48D70A1E1BCD04D9DB84E246F3',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }
      ]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      base: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png'
      },
      coingecko_id: 'terra-luna-2',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-251'
          }
        }
      ]
    },
    {
      description: 'The native token of Tgrade',
      denom_units: [
        {
          denom:
            'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
          exponent: 0,
          aliases: ['utgd']
        },
        {
          denom: 'tgd',
          exponent: 6
        }
      ],
      base: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      coingecko_id: 'tgrade',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utgd',
            chain_name: 'tgrade'
          },
          chain: {
            channel_id: 'channel-263'
          }
        }
      ]
    },
    {
      description: 'The native token of Umee',
      denom_units: [
        {
          denom:
            'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee']
        },
        {
          denom: 'umee',
          exponent: 6
        }
      ],
      base: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png'
      },
      coingecko_id: 'umee',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }
      ]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [
        {
          denom:
            'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
          exponent: 0,
          aliases: ['nund']
        },
        {
          denom: 'FUND',
          exponent: 9
        }
      ],
      base: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
      name: 'Unification Network',
      display: 'FUND',
      symbol: 'FUND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
      },
      coingecko_id: 'unification',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'nund',
            chain_name: 'unification'
          },
          chain: {
            channel_id: 'channel-382'
          }
        }
      ]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl']
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      base: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png'
      },
      coingecko_id: 'vidulum',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uvdl',
            chain_name: 'vidulum'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: [
            'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          ]
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingecko_id: 'neta',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [
        {
          denom:
            'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
          exponent: 0,
          aliases: [
            'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          ]
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      base: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      coingecko_id: 'marble',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address:
        'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [
        {
          denom:
            'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
          exponent: 0,
          aliases: [
            'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          ]
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      base: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      coingecko_id: 'hope-galaxy',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address:
        'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [
        {
          denom:
            'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
          exponent: 0,
          aliases: [
            'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          ]
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      base: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingecko_id: 'racoon',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [
        {
          denom:
            'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
          exponent: 0,
          aliases: [
            'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          ]
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      base: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address:
        'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [
        {
          denom:
            'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
          exponent: 0,
          aliases: [
            'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          ]
        }
      ],
      base: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address:
        'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [
        {
          denom:
            'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
          exponent: 0,
          aliases: [
            'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          ]
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      base: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png'
      },
      coingecko_id: 'junoswap-raw-dao',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address:
        'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [
        {
          denom:
            'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
          exponent: 0,
          aliases: [
            'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          ]
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      base: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.',
      type_asset: 'cw20',
      address:
        'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [
        {
          denom:
            'ibc/D53609853919635406B7F9B83BADE77BF480F7030215B49E932A1EF0A193E49A',
          exponent: 0,
          aliases: [
            'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k'
          ]
        },
        {
          denom: 'hns',
          exponent: 6
        }
      ],
      base: 'ibc/D53609853919635406B7F9B83BADE77BF480F7030215B49E932A1EF0A193E49A',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address:
        'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [
        {
          denom:
            'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
          exponent: 0,
          aliases: [
            'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          ]
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      base: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address:
        'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [
        {
          denom:
            'ibc/500F3E928AB5F2E9ACB113F4F879A44BDB42CCDCDC51254222D742A240A526F8',
          exponent: 0,
          aliases: [
            'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr'
          ]
        },
        {
          denom: 'dla',
          exponent: 6
        }
      ],
      base: 'ibc/500F3E928AB5F2E9ACB113F4F879A44BDB42CCDCDC51254222D742A240A526F8',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address:
        'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [
        {
          denom:
            'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
          exponent: 0,
          aliases: [
            'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      base: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address:
        'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [
        {
          denom:
            'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
          exponent: 0,
          aliases: [
            'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          ]
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      base: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [
        {
          denom:
            'ibc/A9A73A9FEAF97112CC70F5D5E96D598398F2D015D4BD7DFE8804CE7AE8794D9D',
          exponent: 0,
          aliases: [
            'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m'
          ]
        },
        {
          denom: 'hole',
          exponent: 6
        }
      ],
      base: 'ibc/A9A73A9FEAF97112CC70F5D5E96D598398F2D015D4BD7DFE8804CE7AE8794D9D',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [
        {
          denom:
            'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
          exponent: 0,
          aliases: [
            'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          ]
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      base: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      coingecko_id: 'stakeeasy-juno-derivative',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [
        {
          denom:
            'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
          exponent: 0,
          aliases: [
            'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          ]
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      base: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      coingecko_id: 'stakeeasy-bjuno',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address:
        'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [
        {
          denom:
            'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
          exponent: 0,
          aliases: [
            'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          ]
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      base: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address:
        'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [
        {
          denom:
            'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
          exponent: 0,
          aliases: [
            'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          ]
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      base: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      coingecko_id: 'seasy',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [
        {
          denom:
            'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
          exponent: 0,
          aliases: [
            'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          ]
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      base: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [
        {
          denom:
            'ibc/8D8F96DFFD16F5D079EED73C5110E937B37FBDA817F3E5680DB69E51FFBB4B7D',
          exponent: 0,
          aliases: [
            'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup'
          ]
        },
        {
          denom: 'loop',
          exponent: 6
        }
      ],
      base: 'ibc/8D8F96DFFD16F5D079EED73C5110E937B37FBDA817F3E5680DB69E51FFBB4B7D',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      coingecko_id: 'loop',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denom_units: [
        {
          denom:
            'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
          exponent: 0,
          aliases: [
            'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          ]
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      base: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      coingecko_id: 'fanfury',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denom_units: [
        {
          denom:
            'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
          exponent: 0,
          aliases: [
            'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          ]
        },
        {
          denom: 'phmn',
          exponent: 6
        }
      ],
      base: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      coingecko_id: 'posthuman',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denom_units: [
        {
          denom:
            'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
          exponent: 0,
          aliases: [
            'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          ]
        },
        {
          denom: 'hopers',
          exponent: 6
        }
      ],
      base: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png'
      },
      coingecko_id: 'hopers-io ',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'RED',
      type_asset: 'cw20',
      address:
        'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denom_units: [
        {
          denom:
            'ibc/05458E0F3E1A0C8E34B9F5A291B4D306B230F4BA0EF32B86411F95081A0B5DA0',
          exponent: 0,
          aliases: [
            'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za'
          ]
        },
        {
          denom: 'red',
          exponent: 6
        }
      ],
      base: 'ibc/05458E0F3E1A0C8E34B9F5A291B4D306B230F4BA0EF32B86411F95081A0B5DA0',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'BLUE',
      type_asset: 'cw20',
      address:
        'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denom_units: [
        {
          denom:
            'ibc/1F0CFBE9934E06C089589EE9AE81C841BD5B1ED802E70914F1A9A13F309878A5',
          exponent: 0,
          aliases: [
            'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7'
          ]
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      base: 'ibc/1F0CFBE9934E06C089589EE9AE81C841BD5B1ED802E70914F1A9A13F309878A5',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'WYND DAO Governance Token',
      type_asset: 'cw20',
      address:
        'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denom_units: [
        {
          denom:
            'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
          exponent: 0,
          aliases: [
            'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          ]
        },
        {
          denom: 'wynd',
          exponent: 6
        }
      ],
      base: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'nRide Token',
      type_asset: 'cw20',
      address:
        'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denom_units: [
        {
          denom:
            'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
          exponent: 0,
          aliases: [
            'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          ]
        },
        {
          denom: 'nride',
          exponent: 6
        }
      ],
      base: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      type_asset: 'cw20',
      address:
        'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denom_units: [
        {
          denom:
            'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
          exponent: 0,
          aliases: [
            'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          ]
        },
        {
          denom: 'sgnl',
          exponent: 6
        }
      ],
      base: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denom_units: [
        {
          denom:
            'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
          exponent: 0,
          aliases: [
            'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          ]
        },
        {
          denom: 'jape',
          exponent: 6
        }
      ],
      base: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      type_asset: 'cw20',
      address:
        'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denom_units: [
        {
          denom:
            'ibc/758A759BD24DD768B66FE3C8087AEF21B337B45FB7B359D2E9624B21507C1B82',
          exponent: 0,
          aliases: [
            'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa'
          ]
        },
        {
          denom: 'catom',
          exponent: 6
        }
      ],
      base: 'ibc/758A759BD24DD768B66FE3C8087AEF21B337B45FB7B359D2E9624B21507C1B82',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denom_units: [
        {
          denom:
            'ibc/36FBE58A4C388A53F3A19CA0AD8A7955C2AFC19C14E56767732ADE5CFA75BEC7',
          exponent: 0,
          aliases: [
            'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz'
          ]
        },
        {
          denom: 'howl',
          exponent: 6
        }
      ],
      base: 'ibc/36FBE58A4C388A53F3A19CA0AD8A7955C2AFC19C14E56767732ADE5CFA75BEC7',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      type_asset: 'cw20',
      address:
        'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denom_units: [
        {
          denom:
            'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
          exponent: 0,
          aliases: [
            'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          ]
        },
        {
          denom: 'fox',
          exponent: 6
        }
      ],
      base: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Evmos Guardians governance token.',
      type_asset: 'cw20',
      address:
        'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      denom_units: [
        {
          denom:
            'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
          exponent: 0,
          aliases: [
            'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          ]
        },
        {
          denom: 'grdn',
          exponent: 6
        }
      ],
      base: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Mini Punks Token',
      type_asset: 'cw20',
      address:
        'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      denom_units: [
        {
          denom:
            'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
          exponent: 0,
          aliases: [
            'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          ]
        },
        {
          denom: 'mnpu',
          exponent: 6
        }
      ],
      base: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Kleomedes Token',
      type_asset: 'cw20',
      address:
        'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      denom_units: [
        {
          denom:
            'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
          exponent: 0,
          aliases: [
            'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          ]
        },
        {
          denom: 'kleo',
          exponent: 6
        }
      ],
      base: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Sikoba Governance Token',
      type_asset: 'cw20',
      address:
        'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      denom_units: [
        {
          denom:
            'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
          exponent: 0,
          aliases: [
            'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          ]
        },
        {
          denom: 'sikoba',
          exponent: 6
        }
      ],
      base: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Shiba Cosmos',
      type_asset: 'cw20',
      address:
        'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      denom_units: [
        {
          denom:
            'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
          exponent: 0,
          aliases: [
            'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          ]
        },
        {
          denom: 'shibac',
          exponent: 6
        }
      ],
      base: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Celestims',
      type_asset: 'cw20',
      address:
        'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      denom_units: [
        {
          denom:
            'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
          exponent: 0,
          aliases: [
            'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          ]
        },
        {
          denom: 'clst',
          exponent: 6
        }
      ],
      base: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      type_asset: 'cw20',
      address:
        'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      denom_units: [
        {
          denom:
            'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
          exponent: 0,
          aliases: [
            'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          ]
        },
        {
          denom: 'watr',
          exponent: 6
        }
      ],
      base: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      type_asset: 'cw20',
      address:
        'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      denom_units: [
        {
          denom:
            'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
          exponent: 0,
          aliases: [
            'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          ]
        },
        {
          denom: 'casa',
          exponent: 6
        }
      ],
      base: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      type_asset: 'cw20',
      address:
        'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      denom_units: [
        {
          denom:
            'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
          exponent: 0,
          aliases: [
            'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          ]
        },
        {
          denom: 'summit',
          exponent: 6
        }
      ],
      base: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      type_asset: 'cw20',
      address:
        'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      denom_units: [
        {
          denom:
            'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
          exponent: 0,
          aliases: [
            'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          ]
        },
        {
          denom: 'manna',
          exponent: 6
        }
      ],
      base: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Social Impact DAO focused on youth empowerment',
      type_asset: 'cw20',
      address:
        'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      denom_units: [
        {
          denom:
            'ibc/06E7F44709AA82545D317E925310969F74A0923719CDBB32EFF6A47F4C0FD9AF',
          exponent: 0,
          aliases: [
            'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v'
          ]
        },
        {
          denom: 'empwr',
          exponent: 6
        }
      ],
      base: 'ibc/06E7F44709AA82545D317E925310969F74A0923719CDBB32EFF6A47F4C0FD9AF',
      name: 'EMPWR',
      display: 'empwr',
      symbol: 'EMPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Join us in fighting against world hunger',
      type_asset: 'cw20',
      address:
        'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      denom_units: [
        {
          denom:
            'ibc/EBFD05900EF1A7EE934D4A8E754E49EF7B4EA339287FD671B0737CB059771087',
          exponent: 0,
          aliases: [
            'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd'
          ]
        },
        {
          denom: 'middle',
          exponent: 6
        }
      ],
      base: 'ibc/EBFD05900EF1A7EE934D4A8E754E49EF7B4EA339287FD671B0737CB059771087',
      name: 'Middle',
      display: 'middle',
      symbol: 'MIDDLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
      type_asset: 'cw20',
      address:
        'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      denom_units: [
        {
          denom:
            'ibc/D547E4A49B10339061E0BB6B35A939C5C6609595B520447FA0CAA6FBD63CEDC2',
          exponent: 0,
          aliases: [
            'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w'
          ]
        },
        {
          denom: 'sunset',
          exponent: 6
        }
      ],
      base: 'ibc/D547E4A49B10339061E0BB6B35A939C5C6609595B520447FA0CAA6FBD63CEDC2',
      name: 'Sunset',
      display: 'sunset',
      symbol: 'SUNSET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description:
        'Social Impact DAO dedicated to helping restore and protect our environment',
      type_asset: 'cw20',
      address:
        'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      denom_units: [
        {
          denom:
            'ibc/1430C4E214AEDDF2DDA6A41E4FA33A51A60E1E0012293F0DCB1E2B66935E5994',
          exponent: 0,
          aliases: [
            'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e'
          ]
        },
        {
          denom: 'tree',
          exponent: 6
        }
      ],
      base: 'ibc/1430C4E214AEDDF2DDA6A41E4FA33A51A60E1E0012293F0DCB1E2B66935E5994',
      name: 'Living Tree',
      display: 'tree',
      symbol: 'TREE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: "Evmos Guardians' Invaders DAO token.",
      type_asset: 'cw20',
      address:
        'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      denom_units: [
        {
          denom:
            'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
          exponent: 0,
          aliases: [
            'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          ]
        },
        {
          denom: 'invdrs',
          exponent: 6
        }
      ],
      base: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Apemos',
      type_asset: 'cw20',
      address:
        'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      denom_units: [
        {
          denom:
            'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
          exponent: 0,
          aliases: [
            'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          ]
        },
        {
          denom: 'apemos',
          exponent: 6
        }
      ],
      base: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'The First Doge on Osmosis',
      type_asset: 'cw20',
      address:
        'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      denom_units: [
        {
          denom:
            'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
          exponent: 0,
          aliases: [
            'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          ]
        },
        {
          denom: 'osdoge',
          exponent: 6
        }
      ],
      base: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Doge Apr',
      type_asset: 'cw20',
      address:
        'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      denom_units: [
        {
          denom:
            'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
          exponent: 0,
          aliases: [
            'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          ]
        },
        {
          denom: 'doga',
          exponent: 6
        }
      ],
      base: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Osmo Pepe',
      type_asset: 'cw20',
      address:
        'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      denom_units: [
        {
          denom:
            'ibc/00BC6883C29D45EAA021A55CFDD5884CA8EFF9D39F698A9FEF79E13819FF94F8',
          exponent: 0,
          aliases: [
            'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7'
          ]
        },
        {
          denom: 'pepe',
          exponent: 6
        }
      ],
      base: 'ibc/00BC6883C29D45EAA021A55CFDD5884CA8EFF9D39F698A9FEF79E13819FF94F8',
      name: 'Osmo Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Catmos',
      type_asset: 'cw20',
      address:
        'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      denom_units: [
        {
          denom:
            'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
          exponent: 0,
          aliases: [
            'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          ]
        },
        {
          denom: 'catmos',
          exponent: 6
        }
      ],
      base: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Spacer',
      type_asset: 'cw20',
      address:
        'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      denom_units: [
        {
          denom:
            'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
          exponent: 0,
          aliases: [
            'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          ]
        },
        {
          denom: 'spacer',
          exponent: 6
        }
      ],
      base: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      type_asset: 'cw20',
      address:
        'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      denom_units: [
        {
          denom:
            'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
          exponent: 0,
          aliases: [
            'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          ]
        },
        {
          denom: 'light',
          exponent: 9
        }
      ],
      base: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      type_asset: 'cw20',
      address:
        'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      denom_units: [
        {
          denom:
            'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
          exponent: 0,
          aliases: [
            'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          ]
        },
        {
          denom: 'mile',
          exponent: 6
        }
      ],
      base: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Void',
      type_asset: 'cw20',
      address:
        'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      denom_units: [
        {
          denom:
            'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
          exponent: 0,
          aliases: [
            'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          ]
        },
        {
          denom: 'void',
          exponent: 6
        }
      ],
      base: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Silica',
      type_asset: 'cw20',
      address:
        'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      denom_units: [
        {
          denom:
            'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
          exponent: 0,
          aliases: [
            'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          ]
        },
        {
          denom: 'silica',
          exponent: 6
        }
      ],
      base: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Pepec',
      type_asset: 'cw20',
      address:
        'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      denom_units: [
        {
          denom:
            'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
          exponent: 0,
          aliases: [
            'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          ]
        },
        {
          denom: 'pepec',
          exponent: 6
        }
      ],
      base: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'Palantin',
      type_asset: 'cw20',
      address:
        'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      denom_units: [
        {
          denom:
            'ibc/0E30775281643124D79B8670ACD3F478AC5FAB2B1CA1E32903D0775D8A8BB064',
          exponent: 0,
          aliases: [
            'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp'
          ]
        },
        {
          denom: 'pltn',
          exponent: 6
        }
      ],
      base: 'ibc/0E30775281643124D79B8670ACD3F478AC5FAB2B1CA1E32903D0775D8A8BB064',
      name: 'Palantin',
      display: 'palantin',
      symbol: 'PLTN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47',
            base_denom:
              'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169'
          }
        }
      ]
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      type_asset: 'cw20',
      address: 'ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      denom_units: [
        {
          denom:
            'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
          exponent: 0,
          aliases: [
            'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      base: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      coingecko_id: 'lvn',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha',
            channel_id: 'channel-18',
            base_denom:
              'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            chain_name: 'kichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-261'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        },
        {
          denom: 'sienna',
          exponent: 18
        }
      ],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        },
        {
          denom: 'silk',
          exponent: 6
        }
      ],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description:
        'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        },
        {
          denom: 'stkd-scrt',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        },
        {
          denom: 'butt',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      coingecko_id: 'buttcoin-2',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        },
        {
          denom: 'alter',
          exponent: 6
        }
      ],
      base: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        },
        {
          denom: 'amber',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476'
          }
        }
      ]
    },
    {
      description:
        'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [
        {
          denom:
            'ibc/8410580A4F5421DFDBD888212624591E92A9E3B5C87D3C58913CE16ABD98B9B4',
          exponent: 0,
          aliases: [
            'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          ]
        },
        {
          denom: 'astro',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/8410580A4F5421DFDBD888212624591E92A9E3B5C87D3C58913CE16ABD98B9B4',
      name: 'Astroport',
      display: 'astro',
      symbol: 'ASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
      },
      coingecko_id: 'astroport-fi',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
            channel_id: 'channel-85',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-559'
          }
        }
      ]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address:
        'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [
        {
          denom:
            'ibc/0A37D33F8899D8A0AACC15AFF08172D9C0F7293DBCC059FF1CF914167BA31AB1',
          exponent: 0,
          aliases: [
            'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct'
          ]
        },
        {
          denom: 'ampluna',
          exponent: 6
        }
      ],
      base: 'ibc/0A37D33F8899D8A0AACC15AFF08172D9C0F7293DBCC059FF1CF914167BA31AB1',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      coingecko_id: 'eris-amplified-luna',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
            channel_id: 'channel-85',
            base_denom:
              'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-559'
          }
        }
      ]
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address:
        'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [
        {
          denom:
            'ibc/A5E2D0103694807198DEABB950B5C35862B2C37D2878B010023048472C6E1B3E',
          exponent: 0,
          aliases: [
            'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          ]
        },
        {
          denom: 'roar',
          exponent: 6
        }
      ],
      base: 'ibc/A5E2D0103694807198DEABB950B5C35862B2C37D2878B010023048472C6E1B3E',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
            channel_id: 'channel-85',
            base_denom:
              'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-559'
          }
        }
      ]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address:
        'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [
        {
          denom:
            'ibc/92D104452291E203A20D098E3413904DA113CED1F70392E68ADDFD28AF88A614',
          exponent: 0,
          aliases: [
            'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          ]
        },
        {
          denom: 'cub',
          exponent: 6
        }
      ],
      base: 'ibc/92D104452291E203A20D098E3413904DA113CED1F70392E68ADDFD28AF88A614',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
            channel_id: 'channel-85',
            base_denom:
              'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-559'
          }
        }
      ]
    },
    {
      description:
        'The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.',
      type_asset: 'cw20',
      address:
        'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [
        {
          denom:
            'ibc/14B25BDFFBE4A0584A82BF439C9FB93DE74054F931E162264B530EB994B590EF',
          exponent: 0,
          aliases: [
            'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
          ]
        },
        {
          denom: 'bluna',
          exponent: 6
        }
      ],
      base: 'ibc/14B25BDFFBE4A0584A82BF439C9FB93DE74054F931E162264B530EB994B590EF',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
            channel_id: 'channel-85',
            base_denom:
              'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-559'
          }
        }
      ]
    }
  ]
};
export default asset_list;
