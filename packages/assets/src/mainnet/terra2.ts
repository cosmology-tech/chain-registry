import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'terra2',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
          exponent: 0,
          aliases: ['aacre']
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      base: 'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      base: 'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      base: 'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
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
            'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-273'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Akash',
      denom_units: [
        {
          denom:
            'ibc/E7807773EA29C57315859BA0786F2607B880BC457304DDB7B03FE7EF15CF3EA2',
          exponent: 0,
          aliases: [
            'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E7807773EA29C57315859BA0786F2607B880BC457304DDB7B03FE7EF15CF3EA2',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom:
              'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-273'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [
        {
          denom:
            'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
          exponent: 0,
          aliases: ['uandr']
        },
        {
          denom: 'andr',
          exponent: 6
        }
      ],
      coingecko_id: 'andromeda-2',
      base: 'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-351'
          }
        }
      ]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom:
            'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-265'
          }
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
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
            channel_id: 'channel-11',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingecko_id: 'axlusdc',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: "Frax's fractional-algorithmic stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/2E435CEEEBA18CCB2719E0182BC5D142A364D6CCE9957DE6E1AC4D62127D2913',
          exponent: 0,
          aliases: ['frax-wei']
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      base: 'ibc/2E435CEEEBA18CCB2719E0182BC5D142A364D6CCE9957DE6E1AC4D62127D2913',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'frax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      ]
    },
    {
      description: 'Dai stablecoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/E46EF5449878F6B81219163F211E7329CC0729AA99DA8A589A865F82F754ADE8',
          exponent: 0,
          aliases: ['dai-wei']
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      base: 'ibc/E46EF5449878F6B81219163F211E7329CC0729AA99DA8A589A865F82F754ADE8',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'dai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
        }
      ]
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF',
          exponent: 0,
          aliases: ['uusdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uusdt',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        }
      ]
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/BC8A77AFBD872FDC32A348D3FB10CC09277C266CFE52081DE341C7EC6752E674',
          exponent: 0,
          aliases: ['weth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/BC8A77AFBD872FDC32A348D3FB10CC09277C266CFE52081DE341C7EC6752E674',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'weth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/05D299885B07905B6886F554B39346EA6761246076A1120B1950049B92B922DD',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      base: 'ibc/05D299885B07905B6886F554B39346EA6761246076A1120B1950049B92B922DD',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wbtc-satoshi',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ]
    },
    {
      description: 'Aave on Axelar',
      denom_units: [
        {
          denom:
            'ibc/2E9CD07D7A6572A4CDAABBF0FBB89F69A9A362818132221182654819E277220A',
          exponent: 0,
          aliases: ['aave-wei']
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      base: 'ibc/2E9CD07D7A6572A4CDAABBF0FBB89F69A9A362818132221182654819E277220A',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'aave-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }
      ]
    },
    {
      description: 'ApeCoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/5D36185CDE12E13DA9832315D2A35F07D52D952E3A242496C9A634808D86DC07',
          exponent: 0,
          aliases: ['ape-wei']
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      base: 'ibc/5D36185CDE12E13DA9832315D2A35F07D52D952E3A242496C9A634808D86DC07',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ape-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }
      ]
    },
    {
      description: 'Axie Infinity Shard on Axelar',
      denom_units: [
        {
          denom:
            'ibc/2C6CDA86FA7F45A39C053584422C5B76C287DB9E3746CAF623C3EC7717D4EC5B',
          exponent: 0,
          aliases: ['axs-wei']
        },
        {
          denom: 'axs',
          exponent: 18
        }
      ],
      base: 'ibc/2C6CDA86FA7F45A39C053584422C5B76C287DB9E3746CAF623C3EC7717D4EC5B',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'axs-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }
      ]
    },
    {
      description: 'Chainlink on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1FD62537E1FBE67DF7574E0234112B4FE417B20AADC2F574026CB664EA9492C7',
          exponent: 0,
          aliases: ['link-wei']
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      base: 'ibc/1FD62537E1FBE67DF7574E0234112B4FE417B20AADC2F574026CB664EA9492C7',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'link-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }
      ]
    },
    {
      description: 'Maker on Axelar',
      denom_units: [
        {
          denom:
            'ibc/EF21BC562B7EB4D22BBF467D011E3118B7E3AD6D095000A672A9FCECA5ABCF15',
          exponent: 0,
          aliases: ['mkr-wei']
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      base: 'ibc/EF21BC562B7EB4D22BBF467D011E3118B7E3AD6D095000A672A9FCECA5ABCF15',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'mkr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }
      ]
    },
    {
      description: 'Rai Reflex Index on Axelar',
      denom_units: [
        {
          denom:
            'ibc/88C5B3E62FD8ECC8825107D86C4AC8CDECDC7B44135DD757D1D83E27203B6C9D',
          exponent: 0,
          aliases: ['rai-wei']
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      base: 'ibc/88C5B3E62FD8ECC8825107D86C4AC8CDECDC7B44135DD757D1D83E27203B6C9D',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'rai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }
      ]
    },
    {
      description: 'Shiba Inu on Axelar',
      denom_units: [
        {
          denom:
            'ibc/62CC85ED0F0C43C453B1A059BF5A147498550C2A7ADDEE6324A0B4E9E371C9C7',
          exponent: 0,
          aliases: ['shib-wei']
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      base: 'ibc/62CC85ED0F0C43C453B1A059BF5A147498550C2A7ADDEE6324A0B4E9E371C9C7',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'shib-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }
      ]
    },
    {
      description: 'Lido Staked Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/DBA10CEE0874A76DA817F4BA19D611F08910EF213D1698AF06F10D7096A0F3E9',
          exponent: 0,
          aliases: ['steth-wei']
        },
        {
          denom: 'steth',
          exponent: 18
        }
      ],
      base: 'ibc/DBA10CEE0874A76DA817F4BA19D611F08910EF213D1698AF06F10D7096A0F3E9',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'steth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }
      ]
    },
    {
      description: 'Uniswap on Axelar',
      denom_units: [
        {
          denom:
            'ibc/6EFF21F9E65C9101370C38AA53049E4D1FF2B206A7C350B45F0ED3660E57AC75',
          exponent: 0,
          aliases: ['uni-wei']
        },
        {
          denom: 'uni',
          exponent: 18
        }
      ],
      base: 'ibc/6EFF21F9E65C9101370C38AA53049E4D1FF2B206A7C350B45F0ED3660E57AC75',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uni-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }
      ]
    },
    {
      description: 'Chain on Axelar',
      denom_units: [
        {
          denom:
            'ibc/C22747737204871040AE896E7CA7791CF541AC269BF1D521870891E67AC83DA4',
          exponent: 0,
          aliases: ['xcn-wei']
        },
        {
          denom: 'xcn',
          exponent: 18
        }
      ],
      base: 'ibc/C22747737204871040AE896E7CA7791CF541AC269BF1D521870891E67AC83DA4',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'xcn-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }
      ]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/5B01781626783C316A22ACBB55ECA8C6C57AA92C1565C69128C192FA36680AFB',
          exponent: 0,
          aliases: ['dot-planck']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      base: 'ibc/5B01781626783C316A22ACBB55ECA8C6C57AA92C1565C69128C192FA36680AFB',
      name: 'Wrapped Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'dot-planck',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ]
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom:
            'ibc/D54CE4CD2927F744CDCA844DD0E1A5DF88762274C55CD9AAB13E504A29BE8933',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/D54CE4CD2927F744CDCA844DD0E1A5DF88762274C55CD9AAB13E504A29BE8933',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wglmr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ]
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom:
            'ibc/14E4FD1AB72DE9BF1D6725CBA18373C406CB9A7DA17955299F3F4DC5C6131A4E',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/14E4FD1AB72DE9BF1D6725CBA18373C406CB9A7DA17955299F3F4DC5C6131A4E',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wmatic-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }
      ]
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1319C6B38CA613C89D78C2D1461B305038B1085F6855E8CD276FE3F7C9600B4C',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/1319C6B38CA613C89D78C2D1461B305038B1085F6855E8CD276FE3F7C9600B4C',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wbnb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }
      ]
    },
    {
      description: 'Binance USD on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/FDDF98401F29AC63212C1742F9EC86D3AA1E1BE94BF9EB2F72B990C490303F42',
          exponent: 0,
          aliases: ['busd-wei']
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      base: 'ibc/FDDF98401F29AC63212C1742F9EC86D3AA1E1BE94BF9EB2F72B990C490303F42',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'busd-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }
      ]
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/F992067A054C819B42D2DAB57F5CCE347D38352EB90453E59D566BFE64F1614B',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/F992067A054C819B42D2DAB57F5CCE347D38352EB90453E59D566BFE64F1614B',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wavax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ]
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/19E687E77D1AE3CADBB3DE487277AFEC0E340A84334D6ED3F216EF25A7075746',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/19E687E77D1AE3CADBB3DE487277AFEC0E340A84334D6ED3F216EF25A7075746',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wftm-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      ]
    },
    {
      description: "Circle's stablecoin from Polygon on Axelar",
      denom_units: [
        {
          denom:
            'ibc/917EFFDB1BC7782E8D2CD02BEDBC853325C03B88F5FFA016B5E7F689E3F61C7F',
          exponent: 0,
          aliases: ['polygon-uusdc']
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/917EFFDB1BC7782E8D2CD02BEDBC853325C03B88F5FFA016B5E7F689E3F61C7F',
      name: 'USD Coin from Polygon',
      display: 'polygon-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'polygon-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: "Circle's stablecoin from Avalanche on Axelar",
      denom_units: [
        {
          denom:
            'ibc/6956CF004D0D83EE638D58AE45A390C7D296CE1597D2925F8146AFE5BB2B5539',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/6956CF004D0D83EE638D58AE45A390C7D296CE1597D2925F8146AFE5BB2B5539',
      name: 'USD Coin from Avalanche',
      display: 'avalanche-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'avalanche-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: 'Wrapped FIL on Axelar',
      denom_units: [
        {
          denom:
            'ibc/A203631DE58D5033FFC37676C7F6E715707E9A37B49757EC63B1F6DC3A9A1C10',
          exponent: 0,
          aliases: ['wfil-wei']
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      base: 'ibc/A203631DE58D5033FFC37676C7F6E715707E9A37B49757EC63B1F6DC3A9A1C10',
      name: 'Wrapped FIL from Filecoin',
      display: 'fil',
      symbol: 'axlFIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wfil-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
        }
      ]
    },
    {
      description: 'Arbitrum on Axelar',
      denom_units: [
        {
          denom:
            'ibc/0A31B4B46B4C5F10ED3EF4BFBD1453CE96A270D168FC672436ABCA2DB4CC1401',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      base: 'ibc/0A31B4B46B4C5F10ED3EF4BFBD1453CE96A270D168FC672436ABCA2DB4CC1401',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'arb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/ED1D1CEACDB852377A99B1776BF3459472084BBA8F39D2D41AAF3E86E67CA8F3',
          exponent: 0,
          aliases: ['pepe-wei']
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      base: 'ibc/ED1D1CEACDB852377A99B1776BF3459472084BBA8F39D2D41AAF3E86E67CA8F3',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'pepe-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4BF711A183E1FE1AA8875AE079BB6CE86E80BE4237D169E11CCB986F0A78DF4D',
          exponent: 0,
          aliases: ['cbeth-wei']
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      base: 'ibc/4BF711A183E1FE1AA8875AE079BB6CE86E80BE4237D169E11CCB986F0A78DF4D',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'cbeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/655515DE6E1E7CD9DDDEC9E1A06141AEF7BB612F7EB57504B16EB171D61F4D87',
          exponent: 0,
          aliases: ['reth-wei']
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      base: 'ibc/655515DE6E1E7CD9DDDEC9E1A06141AEF7BB612F7EB57504B16EB171D61F4D87',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'reth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F89222965B85BEDE242359DDB25339BCEEFDA8C687F49E78623FD5713F2DEE03',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      base: 'ibc/F89222965B85BEDE242359DDB25339BCEEFDA8C687F49E78623FD5713F2DEE03',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'sfrxeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/57C5ECAE3AAA7382AC93CFE971CA2F9B669323FDF5A5A138B535E4F9EAD185BD',
          exponent: 0,
          aliases: ['wsteth-wei']
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      base: 'ibc/57C5ECAE3AAA7382AC93CFE971CA2F9B669323FDF5A5A138B535E4F9EAD185BD',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'wsteth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/587E6080DBD37FDF30B7377D34AFD038A3F199E30FD31A23495D34685569E97D',
          exponent: 0,
          aliases: ['yieldeth-wei']
        },
        {
          denom: 'YieldETH',
          exponent: 18
        }
      ],
      base: 'ibc/587E6080DBD37FDF30B7377D34AFD038A3F199E30FD31A23495D34685569E97D',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'yieldeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      }
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
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
      base: 'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [
        {
          denom:
            'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
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
      base: 'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/653AE25E923ECC8BF649AFDD37256CA6BF6D65B3B6F25D3AF2FF2AE9973DCA78',
          exponent: 0,
          aliases: ['bnb.1.6.773edb']
        },
        {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }
      ],
      base: 'ibc/653AE25E923ECC8BF649AFDD37256CA6BF6D65B3B6F25D3AF2FF2AE9973DCA78',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'bnb.1.6.773edb',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }
      ]
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/4B1894E5AD46173A5AC4F014D958B2228E8B5060F66BD6487A0A47FB5B733681',
          exponent: 0,
          aliases: ['bneo.1.14.e2e5f6']
        },
        {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }
      ],
      base: 'ibc/4B1894E5AD46173A5AC4F014D958B2228E8B5060F66BD6487A0A47FB5B733681',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'bneo.1.14.e2e5f6',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
        }
      ]
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/334AD41CE64F4D9FFEB7DA4F533B2C1A872FBBD1524A47531FB105C174313B16',
          exponent: 0,
          aliases: ['busd.1.6.754a80']
        },
        {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }
      ],
      base: 'ibc/334AD41CE64F4D9FFEB7DA4F533B2C1A872FBBD1524A47531FB105C174313B16',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'busd.1.6.754a80',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }
      ]
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [
        {
          denom:
            'ibc/6AA4F2E13CF2A6D756723E127E588C7A46BC832807F47C71639EBDF9C3821335',
          exponent: 0,
          aliases: ['cglp.1.19.1698d3']
        },
        {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }
      ],
      base: 'ibc/6AA4F2E13CF2A6D756723E127E588C7A46BC832807F47C71639EBDF9C3821335',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'cglp.1.19.1698d3',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
        }
      ]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [
        {
          denom:
            'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
          exponent: 0,
          aliases: ['cgt/1']
        },
        {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }
      ],
      base: 'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/A315D6D927BB9F0969A35B82C2DC1DAB056F9BB770F112B1EB3200BBBDB03CE2',
          exponent: 0,
          aliases: ['eth.1.19.c3b805']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/A315D6D927BB9F0969A35B82C2DC1DAB056F9BB770F112B1EB3200BBBDB03CE2',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'eth.1.19.c3b805',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }
      ]
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/2362890CB9F19127D83DD751E9E76CD6F05AB3BFC9AD427D5FFE4CADAE11D2B5',
          exponent: 0,
          aliases: ['eth.1.2.942d87']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/2362890CB9F19127D83DD751E9E76CD6F05AB3BFC9AD427D5FFE4CADAE11D2B5',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'eth.1.2.942d87',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }
      ]
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/B3190AE77173EF9533A1AA3166C1DCA2AB9F2DF7028006661FC926D013205B3E',
          exponent: 0,
          aliases: ['usdc.1.2.343151']
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/B3190AE77173EF9533A1AA3166C1DCA2AB9F2DF7028006661FC926D013205B3E',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'usdc.1.2.343151',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
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
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/0B626BC39EDCB4C92CFBC0BE196A82B708FCA5BB028A36513589B665C8CCF654',
          exponent: 0,
          aliases: ['usdc.1.6.53ff75']
        },
        {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/0B626BC39EDCB4C92CFBC0BE196A82B708FCA5BB028A36513589B665C8CCF654',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'usdc.1.6.53ff75',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
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
      description: 'ZIL token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/269836791BBC3A10B95B4469D4E54E53416B5FFDEFEBB1F2827174FCE479640C',
          exponent: 0,
          aliases: ['zil.1.18.1a4a06']
        },
        {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL']
        }
      ],
      base: 'ibc/269836791BBC3A10B95B4469D4E54E53416B5FFDEFEBB1F2827174FCE479640C',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'zil.1.18.1a4a06',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
        }
      ]
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      base: 'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-300'
          }
        }
      ]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
          exponent: 0,
          aliases: ['ncheq']
        },
        {
          denom: 'cheq',
          exponent: 9
        }
      ],
      base: 'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-34',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
          exponent: 0,
          aliases: ['ucmdx']
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      base: 'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
          exponent: 0,
          aliases: ['uharbor']
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      base: 'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
          exponent: 0,
          aliases: ['ucmst']
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      base: 'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
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
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
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
      description: 'Tether USDt on the Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB',
          exponent: 0,
          aliases: [
            'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom:
              'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'FX on Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE',
          exponent: 0,
          aliases: [
            'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom:
              'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      }
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      base: 'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
          exponent: 0,
          aliases: ['ubcre']
        },
        {
          denom: 'bcre',
          exponent: 6
        }
      ],
      base: 'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }
      ]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [
        {
          denom:
            'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
          exponent: 0,
          aliases: ['udec']
        },
        {
          denom: 'dec',
          exponent: 6
        }
      ],
      base: 'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-315'
          }
        }
      ]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
          exponent: 0,
          aliases: ['adydx']
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      base: 'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-299'
          }
        }
      ]
    },
    {
      description: 'Noble USDC on dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/D3DEAE1F633BBFE7DE85B360CE061678AD335E24554CE1B8EA58A7EBE0BD7669',
          exponent: 0,
          aliases: [
            'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3DEAE1F633BBFE7DE85B360CE061678AD335E24554CE1B8EA58A7EBE0BD7669',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-299'
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
      description: 'The native token of Furya',
      denom_units: [
        {
          denom:
            'ibc/285542A3C81252D7A2D9D79D8182E440309DEE320BE8E5269E1E7268D94D6CDF',
          exponent: 0,
          aliases: ['ufury']
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      base: 'ibc/285542A3C81252D7A2D9D79D8182E440309DEE320BE8E5269E1E7268D94D6CDF',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-271'
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
            'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Injective',
      denom_units: [
        {
          denom:
            'ibc/E48BE55375A0897FF3FC9C8F14AD0C8A2B46EE4723313ACB9DC3A79491C6C998',
          exponent: 0,
          aliases: [
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E48BE55375A0897FF3FC9C8F14AD0C8A2B46EE4723313ACB9DC3A79491C6C998',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'ERIS liquid staked INJ',
      denom_units: [
        {
          denom:
            'ibc/544ABE7E35AB20EB722AC9384744A68704EF11EF083E61FF180F8913AB40659A',
          exponent: 0,
          aliases: ['factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ']
        },
        {
          denom: 'ampINJ',
          exponent: 6
        }
      ],
      base: 'ibc/544ABE7E35AB20EB722AC9384744A68704EF11EF083E61FF180F8913AB40659A',
      name: 'ERIS Amplified INJ',
      display: 'ampINJ',
      symbol: 'ampINJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom:
              'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ]
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom:
            'ibc/745F771553C6359177F99817B0CCC5F7E7606904EF0856016D34DC9EBAA6745C',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      base: 'ibc/745F771553C6359177F99817B0CCC5F7E7606904EF0856016D34DC9EBAA6745C',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      coingecko_id: 'autism',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ]
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom:
            'ibc/43C85ADA16065523D49CC2505A9634A475CDA452912DE921F75FC725305D1BDE',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      base: 'ibc/43C85ADA16065523D49CC2505A9634A475CDA452912DE921F75FC725305D1BDE',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      coingecko_id: 'dog-wif-nuchucks',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom:
              'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ]
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denom_units: [
        {
          denom:
            'ibc/B4D36E8B101A6CC6731D80644F77FCAC7851F473522DFA94353972AF4FF03747',
          exponent: 0,
          aliases: ['factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI']
        },
        {
          denom: 'WGMI',
          exponent: 6
        }
      ],
      base: 'ibc/B4D36E8B101A6CC6731D80644F77FCAC7851F473522DFA94353972AF4FF03747',
      name: 'WGMI',
      display: 'WGMI',
      symbol: 'WGMI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom:
              'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
          exponent: 0,
          aliases: ['ujuno']
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FCE390D49328DA97EE71B40B3C0085C5D80845B7C77009CD791F87179F86DEFB',
          exponent: 0,
          aliases: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FCE390D49328DA97EE71B40B3C0085C5D80845B7C77009CD791F87179F86DEFB',
      name: 'ATOM on Juno',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
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
      base: 'ibc/D07580A7D155F80ADA6CF31E75A964453CC179AF91CC591A040F214708E9D94E',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom:
              'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4B99C00937D3B974B5407DE23EA5F5ED5600709C765C764DAD984224E8898D4E',
          exponent: 0,
          aliases: ['factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX']
        },
        {
          denom: 'nexx',
          exponent: 6
        }
      ],
      address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
      base: 'ibc/4B99C00937D3B974B5407DE23EA5F5ED5600709C765C764DAD984224E8898D4E',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom:
              'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D2A9F46C664C0C789B8D884B5082232D4E3FD1DFBE729B91B94A45F8BCFF13A5',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        },
        {
          denom: 'dgl',
          exponent: 6
        }
      ],
      address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
      base: 'ibc/D2A9F46C664C0C789B8D884B5082232D4E3FD1DFBE729B91B94A45F8BCFF13A5',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom:
              'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      description:
        'Hava Coin is the lifeblood of the Cosmos & Juno networks, rewarding builders and welcoming supporters. https://havacoin.xyz/',
      denom_units: [
        {
          denom:
            'ibc/B72BEDF087485A4F349BCAAB8A882668B7EAFB7E23DF1CA0CB28C2E9DA1182D0',
          exponent: 0,
          aliases: ['factory/juno195asgku87kxgu48s447z0ryhsyn5rl3yzvfw0d/uhava']
        },
        {
          denom: 'hava',
          exponent: 6
        }
      ],
      base: 'ibc/B72BEDF087485A4F349BCAAB8A882668B7EAFB7E23DF1CA0CB28C2E9DA1182D0',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hava.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hava.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom:
              'factory/juno195asgku87kxgu48s447z0ryhsyn5rl3yzvfw0d/uhava',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
          exponent: 0,
          aliases: ['ukava']
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      base: 'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
          exponent: 0,
          aliases: ['hard']
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      base: 'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
          exponent: 0,
          aliases: ['swp']
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      base: 'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
          exponent: 0,
          aliases: ['usdx']
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      base: 'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
          exponent: 0,
          aliases: ['ukuji']
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      base: 'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
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
            'ibc/064760EBACCE86C3789222B211A91F235D6AE1F3E502A2B41139159367DDAF9E',
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
      base: 'ibc/064760EBACCE86C3789222B211A91F235D6AE1F3E502A2B41139159367DDAF9E',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      coingecko_id: 'usk',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: "Quark's auto-compounding KUJI derivative",
      denom_units: [
        {
          denom:
            'ibc/4F6B7EFA2D7D0A41FE57AE71F6A6E25C6946869A3258E302E89EB5DA4AC05B5C',
          exponent: 0,
          aliases: [
            'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt'
          ]
        },
        {
          denom: 'qcKUJI',
          exponent: 6
        }
      ],
      base: 'ibc/4F6B7EFA2D7D0A41FE57AE71F6A6E25C6946869A3258E302E89EB5DA4AC05B5C',
      name: 'qcKUJI',
      display: 'qcKUJI',
      symbol: 'qcKUJI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'ampKUJI',
      denom_units: [
        {
          denom:
            'ibc/6EFF29339976D6BE9131059FBC03957C8FF6866A4FD559D315440FA03408AD74',
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
      base: 'ibc/6EFF29339976D6BE9131059FBC03957C8FF6866A4FD559D315440FA03408AD74',
      name: 'ampKUJI',
      display: 'ampKUJI',
      symbol: 'ampKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/B52BB7A9F5E251207CE1082F1FC88D0F6A1DA0ADEE0EA733B833259F822028A0',
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
      base: 'ibc/B52BB7A9F5E251207CE1082F1FC88D0F6A1DA0ADEE0EA733B833259F822028A0',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      coingecko_id: 'mantadao',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: "Quark's auto-compounding MNTA derivative",
      denom_units: [
        {
          denom:
            'ibc/80D9E1590AC0996E3D1CC66E51516711CEF5F285ECCF288A94E90E4F740A7396',
          exponent: 0,
          aliases: [
            'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt'
          ]
        },
        {
          denom: 'qcMNTA',
          exponent: 6
        }
      ],
      base: 'ibc/80D9E1590AC0996E3D1CC66E51516711CEF5F285ECCF288A94E90E4F740A7396',
      name: 'qcMNTA',
      display: 'qcMNTA',
      symbol: 'qcMNTA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'ERIS Liquid Staked MNTA',
      denom_units: [
        {
          denom:
            'ibc/4F963EA43250D3324BCD0C868ECC11AB0D392C096A1BED5AD5B0DB344BDF1ABC',
          exponent: 0,
          aliases: [
            'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA'
          ]
        },
        {
          denom: 'ampMNTA',
          exponent: 6
        }
      ],
      base: 'ibc/4F963EA43250D3324BCD0C868ECC11AB0D392C096A1BED5AD5B0DB344BDF1ABC',
      name: 'ERIS Amplified MNTA',
      display: 'ampMNTA',
      symbol: 'ampMNTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'The content house of Kujira',
      denom_units: [
        {
          denom:
            'ibc/8569884AF81B9F7FC864ADFCF441E2CDD740A90DF25987F6C8AEAC99B907EBCC',
          exponent: 0,
          aliases: [
            'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink'
          ]
        },
        {
          denom: 'wink',
          exponent: 6
        }
      ],
      base: 'ibc/8569884AF81B9F7FC864ADFCF441E2CDD740A90DF25987F6C8AEAC99B907EBCC',
      name: 'WINK',
      display: 'wink',
      symbol: 'WINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'Blend Token',
      denom_units: [
        {
          denom:
            'ibc/F8945C1E432754DA5DBFB0A6C8CE2167C5D47E0D6F92A04CFE8C2424038D0FEF',
          exponent: 0,
          aliases: [
            'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend'
          ]
        },
        {
          denom: 'blend',
          exponent: 6
        }
      ],
      base: 'ibc/F8945C1E432754DA5DBFB0A6C8CE2167C5D47E0D6F92A04CFE8C2424038D0FEF',
      name: 'BLEND',
      display: 'blend',
      symbol: 'BLEND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Kujira',
      denom_units: [
        {
          denom:
            'ibc/E62BD8B044D74A4E725796162F06301D8CA86FFC8FB103EA8651B99E50F92804',
          exponent: 0,
          aliases: [
            'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E62BD8B044D74A4E725796162F06301D8CA86FFC8FB103EA8651B99E50F92804',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The staking and governance token of Fuzion',
      denom_units: [
        {
          denom:
            'ibc/08A257D8100D24665F7F18770F1114D66D0457A11E138E511934739B7E0B8E70',
          exponent: 0,
          aliases: [
            'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn'
          ]
        },
        {
          denom: 'fuzn',
          exponent: 6
        }
      ],
      base: 'ibc/08A257D8100D24665F7F18770F1114D66D0457A11E138E511934739B7E0B8E70',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'The receipt token of Fuzion',
      denom_units: [
        {
          denom:
            'ibc/C83FE7E3C1C2603EE6479A566987A7E7305B7D094828AE257B3DE0A8FF49C937',
          exponent: 0,
          aliases: [
            'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn'
          ]
        },
        {
          denom: 'rfuzn',
          exponent: 6
        }
      ],
      base: 'ibc/C83FE7E3C1C2603EE6479A566987A7E7305B7D094828AE257B3DE0A8FF49C937',
      name: 'Fuzion Receipt',
      display: 'rfuzn',
      symbol: 'rFUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'The yield token of Fuzion',
      denom_units: [
        {
          denom:
            'ibc/D023A46BF58C42223C89B5D68E736232727019B185F8A497C3229046FE59D53C',
          exponent: 0,
          aliases: [
            'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn'
          ]
        },
        {
          denom: 'yfuzn',
          exponent: 6
        }
      ],
      base: 'ibc/D023A46BF58C42223C89B5D68E736232727019B185F8A497C3229046FE59D53C',
      name: 'Fuzion Yield',
      display: 'yfuzn',
      symbol: 'yFUZN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: "Quark's auto-compounding FUZN derivative",
      denom_units: [
        {
          denom:
            'ibc/4E81108116576B4CC429FD5EB38D349F8529475ED4F63E77231A7E6599A7A3C9',
          exponent: 0,
          aliases: [
            'factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt'
          ]
        },
        {
          denom: 'qcFUZN',
          exponent: 6
        }
      ],
      base: 'ibc/4E81108116576B4CC429FD5EB38D349F8529475ED4F63E77231A7E6599A7A3C9',
      name: 'qcFUZN',
      display: 'qcFUZN',
      symbol: 'qcFUZN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom:
            'ibc/83E5B7C857F1E07115E29F9F81D0473D614F02C8070547BF2E4201BACF920A02',
          exponent: 0,
          aliases: [
            'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk'
          ]
        },
        {
          denom: 'nstk',
          exponent: 6
        }
      ],
      base: 'ibc/83E5B7C857F1E07115E29F9F81D0473D614F02C8070547BF2E4201BACF920A02',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      coingecko_id: 'unstake-fi',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'Local Money',
      denom_units: [
        {
          denom:
            'ibc/5050E1EDCAD2206E84F8C6DEA638CFC7F239955C658B46078F0715295E662C14',
          exponent: 0,
          aliases: [
            'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local'
          ]
        },
        {
          denom: 'local',
          exponent: 6
        }
      ],
      base: 'ibc/5050E1EDCAD2206E84F8C6DEA638CFC7F239955C658B46078F0715295E662C14',
      name: 'LOCAL',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description: 'Food for whales',
      denom_units: [
        {
          denom:
            'ibc/4E98D101DC9A543C604610A087118701D81301A019CBACEE8B6E5B435EFB3C5E',
          exponent: 0,
          aliases: [
            'factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk'
          ]
        },
        {
          denom: 'PLNK',
          exponent: 6
        }
      ],
      base: 'ibc/4E98D101DC9A543C604610A087118701D81301A019CBACEE8B6E5B435EFB3C5E',
      name: 'Plankton',
      display: 'PLNK',
      symbol: 'PLNK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5E550355C73ADF308AB0ED8A70F76303D456745560119561941B199B40EABC38',
          exponent: 0,
          aliases: [
            'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3'
          ]
        },
        {
          denom: 'sol',
          exponent: 8
        }
      ],
      base: 'ibc/5E550355C73ADF308AB0ED8A70F76303D456745560119561941B199B40EABC38',
      name: 'Wormhole Solana',
      display: 'sol',
      symbol: 'whSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/34E33680F4E9DD2D0163CF4D029871B55C3281AA211828C8122F48046ED5E0BA',
          exponent: 0,
          aliases: [
            'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10'
          ]
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      base: 'ibc/34E33680F4E9DD2D0163CF4D029871B55C3281AA211828C8122F48046ED5E0BA',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/173BC8BBC924713272B6F3E2F78E48AFD9A065C3654193BE3036B2EEA08D1EBD',
          exponent: 0,
          aliases: [
            'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2'
          ]
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/173BC8BBC924713272B6F3E2F78E48AFD9A065C3654193BE3036B2EEA08D1EBD',
      name: 'Axelar Wrapped AVAX',
      display: 'avax',
      symbol: 'wAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5414A792DE2A310682DA8C35C1F5D07B5F2571E7AF62017D7C6CE9B9F019E13C',
          exponent: 0,
          aliases: [
            'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5414A792DE2A310682DA8C35C1F5D07B5F2571E7AF62017D7C6CE9B9F019E13C',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
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
            'ibc/7D13D3A6E3FB8DD686E0C052C0699329E33B8630C2D779056E52981DE93DE260',
          exponent: 0,
          aliases: [
            'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7D13D3A6E3FB8DD686E0C052C0699329E33B8630C2D779056E52981DE93DE260',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
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
            'ibc/192CE21811502C16A6E34BE14F9263721EBAB6C8F0798F42AD5DE6385D6BF846',
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
      base: 'ibc/192CE21811502C16A6E34BE14F9263721EBAB6C8F0798F42AD5DE6385D6BF846',
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C6380C79C86D6D5EA580A3AAE7D8DAEAF13998D2F18A0B1F2A2FB8D29C343997',
          exponent: 0,
          aliases: [
            'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07'
          ]
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C6380C79C86D6D5EA580A3AAE7D8DAEAF13998D2F18A0B1F2A2FB8D29C343997',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'comdex',
            base_denom: 'ucmdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/178972FBD54E75AC07BBF55925D861F78DF65336DEFFB8D19C74A03D1465D758',
          exponent: 0,
          aliases: [
            'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5'
          ]
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ibc/178972FBD54E75AC07BBF55925D861F78DF65336DEFFB8D19C74A03D1465D758',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/82FB2079A938946C0A545DB9CC19BEB148F9145D2C091AB5E7E71AAFD5B8710C',
          exponent: 0,
          aliases: [
            'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7'
          ]
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/82FB2079A938946C0A545DB9CC19BEB148F9145D2C091AB5E7E71AAFD5B8710C',
      name: 'Axelar Wrapped Ether',
      display: 'weth',
      symbol: 'wETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/2CA7FA605E0E3AF2E30FF14B7AC2474F2A8533835A16041A044277AED0A8E614',
          exponent: 0,
          aliases: [
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2CA7FA605E0E3AF2E30FF14B7AC2474F2A8533835A16041A044277AED0A8E614',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
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
      denom_units: [
        {
          denom:
            'ibc/41FCD89744CE60F040B8E0192D4C1CF27511A0DD077E44721D434B967CC71779',
          exponent: 0,
          aliases: [
            'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986'
          ]
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      base: 'ibc/41FCD89744CE60F040B8E0192D4C1CF27511A0DD077E44721D434B967CC71779',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'luna',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B8417648B2321FEBB7387D69DEDAA7BA15641FE9983BB7E370BCB3F4C44D4A7E',
          exponent: 0,
          aliases: [
            'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602'
          ]
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B8417648B2321FEBB7387D69DEDAA7BA15641FE9983BB7E370BCB3F4C44D4A7E',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/30D2779B2D021A919DF3ACEDB31D5B118A3FDF8B13CA44A1454FA839A00AE14B',
          exponent: 0,
          aliases: [
            'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5'
          ]
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/30D2779B2D021A919DF3ACEDB31D5B118A3FDF8B13CA44A1454FA839A00AE14B',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'scrt',
            base_denom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      }
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/2C50C2CC304FAE4C87868ED4B4279F8BF769F10CCFFD3154B6101C61E57AA498',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/2C50C2CC304FAE4C87868ED4B4279F8BF769F10CCFFD3154B6101C61E57AA498',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
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
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
          exponent: 0,
          aliases: ['uwhale']
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      base: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'ampWHALE',
      denom_units: [
        {
          denom:
            'ibc/B3F639855EE7478750CC8F82072307ED6E131A8EFF20345E1D136B50C4E5EC36',
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
      base: 'ibc/B3F639855EE7478750CC8F82072307ED6E131A8EFF20345E1D136B50C4E5EC36',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'boneWHALE',
      denom_units: [
        {
          denom:
            'ibc/517E13F14A1245D4DE8CF467ADD4DA0058974CDCC880FA6AE536DBCA1D16D84E',
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
      base: 'ibc/517E13F14A1245D4DE8CF467ADD4DA0058974CDCC880FA6AE536DBCA1D16D84E',
      name: 'boneWHALE',
      display: 'boneWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'FABLE',
      denom_units: [
        {
          denom:
            'ibc/CFE5902FC4463DA839B77B4BD3611AD57B8C74D674AE1C6A58FD48DBA575432D',
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
      base: 'ibc/CFE5902FC4463DA839B77B4BD3611AD57B8C74D674AE1C6A58FD48DBA575432D',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [
        {
          denom:
            'ibc/3F73632E9BF78A4BF552872627CCE862732D3B6B3D9941C04D7A3EAC10E821EA',
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
      base: 'ibc/3F73632E9BF78A4BF552872627CCE862732D3B6B3D9941C04D7A3EAC10E821EA',
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
            channel_id: 'channel-0',
            base_denom:
              'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        }
      ]
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/C2103F4B4373016B4B844A461CE2083DE3DE33136F3C9D3C8E1AD9F77A8F588E',
          exponent: 0,
          aliases: [
            'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          ]
        },
        {
          denom: 'RAC',
          exponent: 6
        }
      ],
      base: 'ibc/C2103F4B4373016B4B844A461CE2083DE3DE33136F3C9D3C8E1AD9F77A8F588E',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/390B25B1BA21312C031FC6273F2E421DDE62466D858EEE88B7FC48E13B1D47B5',
          exponent: 0,
          aliases: [
            'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          ]
        },
        {
          denom: 'ASH',
          exponent: 6
        }
      ],
      base: 'ibc/390B25B1BA21312C031FC6273F2E421DDE62466D858EEE88B7FC48E13B1D47B5',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Migaloo',
      denom_units: [
        {
          denom:
            'ibc/6C4A3410AAD6E595F1C1ECB9EE281A4D1CC9B279BBD4C1E0D97CECBB48680A8F',
          exponent: 0,
          aliases: [
            'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6C4A3410AAD6E595F1C1ECB9EE281A4D1CC9B279BBD4C1E0D97CECBB48680A8F',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'GUPPY',
      denom_units: [
        {
          denom:
            'ibc/C17F17047DCB2187CA917A5C9FE99E9AF5B17760BF7D0C2274B5AE0961F02E15',
          exponent: 0,
          aliases: [
            'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          ]
        },
        {
          denom: 'GUPPY',
          exponent: 6
        }
      ],
      base: 'ibc/C17F17047DCB2187CA917A5C9FE99E9AF5B17760BF7D0C2274B5AE0961F02E15',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO established on Migaloo.',
      denom_units: [
        {
          denom:
            'ibc/C57B5D7B27D05A03FBC865B9C5F1216FE8C550E69BAF42A1D787CD560F9235B6',
          exponent: 0,
          aliases: [
            'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir'
          ]
        },
        {
          denom: 'OPHIR',
          exponent: 6
        }
      ],
      base: 'ibc/C57B5D7B27D05A03FBC865B9C5F1216FE8C550E69BAF42A1D787CD560F9235B6',
      name: 'OPHIR',
      display: 'OPHIR',
      symbol: 'OPHIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
          exponent: 0,
          aliases: ['untrn']
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      base: 'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [
        {
          denom:
            'ibc/E94774E9A23F6FCDF55F57D51BC5E3E0F82F3869E04DC442681B49A2BDECE572',
          exponent: 0,
          aliases: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E94774E9A23F6FCDF55F57D51BC5E3E0F82F3869E04DC442681B49A2BDECE572',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
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
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [
        {
          denom:
            'ibc/94A97ABE08433DB7E6AC29EC05F8846ED64E2274393C7F26B28D28BB5BD9E2E4',
          exponent: 0,
          aliases: [
            'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/94A97ABE08433DB7E6AC29EC05F8846ED64E2274393C7F26B28D28BB5BD9E2E4',
      name: 'IBC usdc',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      description: 'Tia on Neutron',
      denom_units: [
        {
          denom:
            'ibc/D3319E438CC1DD5A4D874C059257508A507014821EF01EB001E4C6D7A3AB61FB',
          exponent: 0,
          aliases: [
            'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7'
          ]
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3319E438CC1DD5A4D874C059257508A507014821EF01EB001E4C6D7A3AB61FB',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [
        {
          denom:
            'ibc/52B30BB501A222D586222700F241EBC8CA97A4A17C9737DDCC00DD0BBC24CEAD',
          exponent: 0,
          aliases: [
            'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe'
          ]
        },
        {
          denom: 'ASTROPEPE',
          exponent: 6
        }
      ],
      base: 'ibc/52B30BB501A222D586222700F241EBC8CA97A4A17C9737DDCC00DD0BBC24CEAD',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [
        {
          denom:
            'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
          exponent: 0,
          aliases: [
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          ]
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      base: 'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'NBTC on Neutron',
      denom_units: [
        {
          denom:
            'ibc/158D13833EC525394EF5D155BBDD6C12039CB96E4EC138F813B1E1B54B2BFFF5',
          exponent: 0,
          aliases: [
            'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920'
          ]
        },
        {
          denom: 'sat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/158D13833EC525394EF5D155BBDD6C12039CB96E4EC138F813B1E1B54B2BFFF5',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      }
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [
        {
          denom:
            'ibc/1E4CE9101C45B0C0AB2132BF54C279C2F15D9412136C6DA0BBE8EA30968560CC',
          exponent: 0,
          aliases: [
            'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E4CE9101C45B0C0AB2132BF54C279C2F15D9412136C6DA0BBE8EA30968560CC',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/9B438414080DC6959E299834446B3F1ED08D4DB445C0B51D4927805532A1C542',
          exponent: 0,
          aliases: [
            'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          ]
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      base: 'ibc/9B438414080DC6959E299834446B3F1ED08D4DB445C0B51D4927805532A1C542',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      coingecko_id: 'newt',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'ASTRO on Neutron',
      denom_units: [
        {
          denom:
            'ibc/4A097D095A286BA6E9176B5425DC4AC8CE6063A353F7E8240C53272571576F20',
          exponent: 0,
          aliases: [
            'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A'
          ]
        },
        {
          denom: 'astro',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4A097D095A286BA6E9176B5425DC4AC8CE6063A353F7E8240C53272571576F20',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
      }
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denom_units: [
        {
          denom:
            'ibc/1CCBDC0937F7DF8851FCB939384390476158380CB26C611C159E5D83C8D3B298',
          exponent: 0,
          aliases: [
            'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi'
          ]
        },
        {
          denom: 'corgi',
          exponent: 6
        }
      ],
      base: 'ibc/1CCBDC0937F7DF8851FCB939384390476158380CB26C611C159E5D83C8D3B298',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'ibc/629BFE028BD1307AD0A46FE6773BC7FF79D79F6BB6D9A870B7AF7417ACCBA7CD',
          exponent: 0,
          aliases: [
            'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          ]
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      base: 'ibc/629BFE028BD1307AD0A46FE6773BC7FF79D79F6BB6D9A870B7AF7417ACCBA7CD',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'Jimmy Neutron Finance',
      denom_units: [
        {
          denom:
            'ibc/F1A51D8961847B3535553ECC555922C7244B71C57038DA691CAB9BB06A754292',
          exponent: 0,
          aliases: [
            'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY'
          ]
        },
        {
          denom: 'jimmy',
          exponent: 6
        }
      ],
      base: 'ibc/F1A51D8961847B3535553ECC555922C7244B71C57038DA691CAB9BB06A754292',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom:
            'ibc/D274A17CF49F8A05793A72EC7BD90FCD4B869E79509AA609046BEEC9D5BC0898',
          exponent: 0,
          aliases: [
            'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          ]
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      base: 'ibc/D274A17CF49F8A05793A72EC7BD90FCD4B869E79509AA609046BEEC9D5BC0898',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [
        {
          denom:
            'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
          exponent: 0,
          aliases: [
            'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj'
          ]
        },
        {
          denom: 'bitcosmos',
          exponent: 6
        }
      ],
      base: 'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'What the Fuck',
      denom_units: [
        {
          denom:
            'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
          exponent: 0,
          aliases: [
            'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf'
          ]
        },
        {
          denom: 'wtf',
          exponent: 6
        }
      ],
      base: 'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'NLS on Neutron',
      denom_units: [
        {
          denom:
            'ibc/E61317E42B868DDEBF24ED8A093E3E110F0D2BB4F013805571A027FB555BE0E0',
          exponent: 0,
          aliases: [
            'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972'
          ]
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E61317E42B868DDEBF24ED8A093E3E110F0D2BB4F013805571A027FB555BE0E0',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      }
    },
    {
      description: 'A Mechanical Canine',
      denom_units: [
        {
          denom:
            'ibc/3D74654BF24DB0BC5F992D13EBCA86389F4CE53444FA90635C4C086B3F037CDB',
          exponent: 0,
          aliases: [
            'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard'
          ]
        },
        {
          denom: 'goddard',
          exponent: 6
        }
      ],
      base: 'ibc/3D74654BF24DB0BC5F992D13EBCA86389F4CE53444FA90635C4C086B3F037CDB',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/724090386B617F168512CE62FF7B71E996A362A17D88ED820CB6D834801A2E56',
          exponent: 0,
          aliases: [
            'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          ]
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      base: 'ibc/724090386B617F168512CE62FF7B71E996A362A17D88ED820CB6D834801A2E56',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'NEWTROLL',
      denom_units: [
        {
          denom:
            'ibc/D5820E7A2DDDB18EE0E9AD7DD2FBA318E5F8DBEE30467D22D5020FE02EAA37F5',
          exponent: 0,
          aliases: [
            'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll'
          ]
        },
        {
          denom: 'newtroll',
          exponent: 6
        }
      ],
      base: 'ibc/D5820E7A2DDDB18EE0E9AD7DD2FBA318E5F8DBEE30467D22D5020FE02EAA37F5',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'Retro Game',
      denom_units: [
        {
          denom:
            'ibc/DEEEAF9C4968CCFF7AE92C94F6963FDA5E490D429BE1215BE129ECF15E3D55A3',
          exponent: 0,
          aliases: [
            'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro'
          ]
        },
        {
          denom: 'retro',
          exponent: 6
        }
      ],
      base: 'ibc/DEEEAF9C4968CCFF7AE92C94F6963FDA5E490D429BE1215BE129ECF15E3D55A3',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom:
              'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }
      ]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
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
            'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
          exponent: 0,
          aliases: ['ufrienzies']
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      base: 'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }
      ]
    },
    {
      description: 'ATOM token on Noble',
      denom_units: [
        {
          denom:
            'ibc/B18997C75582486FD95A94A27C3BBAE2416EADED83760B5BA9D2578DAF263134',
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
      base: 'ibc/B18997C75582486FD95A94A27C3BBAE2416EADED83760B5BA9D2578DAF263134',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom:
              'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ]
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'uusdc',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
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
            channel_id: 'channel-251',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
      name: 'Ion DAO',
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
            channel_id: 'channel-251',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4FBFB92ED8EBA5AB1454C1215D1FE536BB09393A58E27E3891FD5D9AE18B6A37',
          exponent: 0,
          aliases: [
            'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx'
          ]
        },
        {
          denom: 'ibcx',
          exponent: 6
        }
      ],
      address:
        'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'ibc/4FBFB92ED8EBA5AB1454C1215D1FE536BB09393A58E27E3891FD5D9AE18B6A37',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      coingecko_id: 'ibc-index',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6D0DCE67DFE046EC06CC24175C7AB225A9C083BB7F01EA597A343870D38C158A',
          exponent: 0,
          aliases: [
            'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx'
          ]
        },
        {
          denom: 'stibcx',
          exponent: 6
        }
      ],
      address:
        'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'ibc/6D0DCE67DFE046EC06CC24175C7AB225A9C083BB7F01EA597A343870D38C158A',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
          exponent: 0,
          aliases: [
            'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/BD9451F387367AA88FA3D18333B2F1D56607449F20B15B4557042DA869703E25',
          exponent: 0,
          aliases: [
            'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43'
          ]
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BD9451F387367AA88FA3D18333B2F1D56607449F20B15B4557042DA869703E25',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6B199312B29CF047BF8B1337450EF3AA0475FE0C312DB94055F2D5B22CD1E71A',
          exponent: 0,
          aliases: [
            'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B199312B29CF047BF8B1337450EF3AA0475FE0C312DB94055F2D5B22CD1E71A',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
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
            'ibc/9E58E47857A51FFB728EDB7DD54CDFC2AB5E8FF358B9B010BF0A92AB18930BEA',
          exponent: 0,
          aliases: [
            'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
          ]
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9E58E47857A51FFB728EDB7DD54CDFC2AB5E8FF358B9B010BF0A92AB18930BEA',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
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
            'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
          exponent: 0,
          aliases: [
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
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
      denom_units: [
        {
          denom:
            'ibc/74B0BDD3C0941166F5E96BFBC847219BBE609535F3A0D941C22342A60BD43A08',
          exponent: 0,
          aliases: [
            'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901'
          ]
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/74B0BDD3C0941166F5E96BFBC847219BBE609535F3A0D941C22342A60BD43A08',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/37B7C1AABC243067278C28C77973A28D7844EF5465ACD0EBE6E506BE4C6816C2',
          exponent: 0,
          aliases: [
            'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
          ]
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/37B7C1AABC243067278C28C77973A28D7844EF5465ACD0EBE6E506BE4C6816C2',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'weth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/DA1BE182A23423A7031255C608B68D1E54AD30087AEB7F25B48D2CF8A5FE1DDB',
          exponent: 0,
          aliases: [
            'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
          ]
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DA1BE182A23423A7031255C608B68D1E54AD30087AEB7F25B48D2CF8A5FE1DDB',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png'
      }
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/E0687047EA2BDEFC10A211E27502C2A78441684F624B41FD2FCFDEFDFB5AA569',
          exponent: 0,
          aliases: [
            'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO'
          ]
        },
        {
          denom: 'ampOSMO',
          exponent: 6
        }
      ],
      address:
        'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'ibc/E0687047EA2BDEFC10A211E27502C2A78441684F624B41FD2FCFDEFDFB5AA569',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'Tether USDT on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/C3131D228C3163DFD9068B14B920F10A4D37BE10E76CDC6C847B80AA83E40D40',
          exponent: 0,
          aliases: [
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C3131D228C3163DFD9068B14B920F10A4D37BE10E76CDC6C847B80AA83E40D40',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'ibc/9F977CFD6084FD4B83DF6BD27CECC0F805D0F6D95ED099650F330D94510F7F19',
          exponent: 0,
          aliases: [
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          ]
        },
        {
          denom: 'cdt',
          exponent: 6
        }
      ],
      base: 'ibc/9F977CFD6084FD4B83DF6BD27CECC0F805D0F6D95ED099650F330D94510F7F19',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      coingecko_id: 'collateralized-debt-token',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'ibc/CC0A5E28C584A93AB762E71DD3D5991928637042AC3E900EE94E19E46CBFE935',
          exponent: 0,
          aliases: [
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          ]
        },
        {
          denom: 'mbrn',
          exponent: 6
        }
      ],
      base: 'ibc/CC0A5E28C584A93AB762E71DD3D5991928637042AC3E900EE94E19E46CBFE935',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      coingecko_id: 'membrane',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'TIA on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B',
          exponent: 0,
          aliases: [
            'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877'
          ]
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [
        {
          denom:
            'ibc/03FB4E4D1043755015ABF1A84773EA334B2726EF464CF90D926C888ECE2D64FD',
          exponent: 0,
          aliases: [
            'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo'
          ]
        },
        {
          denom: 'sqosmo',
          exponent: 6
        }
      ],
      base: 'ibc/03FB4E4D1043755015ABF1A84773EA334B2726EF464CF90D926C888ECE2D64FD',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'NOIS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/8349192BE84F63ECBCDE2E0195DAC22453C9AAC740971FE95D382CA8075E6A1C',
          exponent: 0,
          aliases: [
            'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90'
          ]
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8349192BE84F63ECBCDE2E0195DAC22453C9AAC740971FE95D382CA8075E6A1C',
      name: 'Nois NOIS',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      }
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom:
            'ibc/EA3D1D169CAF4C6A1B813D41337614C5785DD018514333C301B92B981A46CE02',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      base: 'ibc/EA3D1D169CAF4C6A1B813D41337614C5785DD018514333C301B92B981A46CE02',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom:
            'ibc/8ACFBDDF77DA174672D246AA2083FC83067F2FB669D9F6BB00632A3F635EBAF9',
          exponent: 0,
          aliases: [
            'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom'
          ]
        },
        {
          denom: 'sqatom',
          exponent: 6
        }
      ],
      base: 'ibc/8ACFBDDF77DA174672D246AA2083FC83067F2FB669D9F6BB00632A3F635EBAF9',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/FBA34C2BCE61066AED99D1797EB05A419F5FDB523E36F30F6C254BE61BCCAE29',
          exponent: 0,
          aliases: [
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1'
          ]
        },
        {
          denom: 'cro',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FBA34C2BCE61066AED99D1797EB05A419F5FDB523E36F30F6C254BE61BCCAE29',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      }
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/BE9116F49581FF59F018C64FB4A445B307332F77381640AAB05380473D0D7642',
          exponent: 0,
          aliases: [
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
          ]
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE9116F49581FF59F018C64FB4A445B307332F77381640AAB05380473D0D7642',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      description:
        'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [
        {
          denom:
            'ibc/03B109DEE70C41E7D69206D670E3839BFB72891FF2FB5D7D980703953CB8E62B',
          exponent: 0,
          aliases: [
            'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668'
          ]
        },
        {
          denom: 'YieldETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/03B109DEE70C41E7D69206D670E3839BFB72891FF2FB5D7D980703953CB8E62B',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/A6FAB4141ECE6F85BAAC00989FDF7F96409673735B845DE730645EC67335E1C0',
          exponent: 0,
          aliases: [
            'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A6FAB4141ECE6F85BAAC00989FDF7F96409673735B845DE730645EC67335E1C0',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/74C6A071817288DE90F3FC2555B4C18816F327437EB0E825F05A6E3C62DAA2A6',
          exponent: 0,
          aliases: [
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477'
          ]
        },
        {
          denom: 'qsr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/74C6A071817288DE90F3FC2555B4C18816F327437EB0E825F05A6E3C62DAA2A6',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      }
    },
    {
      description: 'Levana native token',
      denom_units: [
        {
          denom:
            'ibc/6A9571DE6A3F60D7703C3290E2944E806C15A47C1EA6D4AFCD3AE4DC8AF080B1',
          exponent: 0,
          aliases: [
            'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      base: 'ibc/6A9571DE6A3F60D7703C3290E2944E806C15A47C1EA6D4AFCD3AE4DC8AF080B1',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      coingecko_id: 'levana-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/C0DB3E0C7F3CD32FA24FC031FD8B6833627A1C690B741BA85D7A4752D974A77F',
          exponent: 0,
          aliases: [
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          ]
        },
        {
          denom: 'milkTIA',
          exponent: 6
        }
      ],
      base: 'ibc/C0DB3E0C7F3CD32FA24FC031FD8B6833627A1C690B741BA85D7A4752D974A77F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      coingecko_id: 'milkyway-staked-tia',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/814F2057808DF5C7C9F9E1A513D9E6669061FF1B010CED198B3352EBA29EFBF6',
          exponent: 0,
          aliases: [
            'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E'
          ]
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/814F2057808DF5C7C9F9E1A513D9E6669061FF1B010CED198B3352EBA29EFBF6',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      }
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/A389921DD5551011E2176A1030D7DFA195CD82EA762C6E621964A0416CBFD836',
          exponent: 0,
          aliases: [
            'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99'
          ]
        },
        {
          denom: 'page',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A389921DD5551011E2176A1030D7DFA195CD82EA762C6E621964A0416CBFD836',
      name: 'PageDAO',
      display: 'page',
      symbol: 'PAGE.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      }
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/F5D24D849000F1EA14946E9BED504C3736E3730FB9D7008C2D78CEFDC79061DE',
          exponent: 0,
          aliases: [
            'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C'
          ]
        },
        {
          denom: 'nom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F5D24D849000F1EA14946E9BED504C3736E3730FB9D7008C2D78CEFDC79061DE',
      name: 'Nomic',
      display: 'nomic',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/D5CDA64730157DB9928A8E3CEEA19526A94F933443503A90D375394CA173F829',
          exponent: 0,
          aliases: [
            'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F'
          ]
        },
        {
          denom: 'nbtc',
          exponent: 14
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D5CDA64730157DB9928A8E3CEEA19526A94F933443503A90D375394CA173F829',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      }
    },
    {
      description: 'AUTISM on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/EB87F22692D3AFC92F6062F57E020FFCFB6399BEFF09329E839FBEAF0EE1942E',
          exponent: 0,
          aliases: [
            'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D'
          ]
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EB87F22692D3AFC92F6062F57E020FFCFB6399BEFF09329E839FBEAF0EE1942E',
      name: 'Injective AUTISM',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      }
    },
    {
      description: 'Woof on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/3679EB0FAF260324A44EF05260EB747D81CA61017AC7D2BCD1BFD29AC927DB7A',
          exponent: 0,
          aliases: [
            'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53'
          ]
        },
        {
          denom: 'WOOF',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3679EB0FAF260324A44EF05260EB747D81CA61017AC7D2BCD1BFD29AC927DB7A',
      name: 'WOOF chihuahua',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }
      ]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/F89F635D97BC6400E17521B4220E3E08F44CE794EB80F5CABB356D3557E72637',
          exponent: 0,
          aliases: [
            'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F'
          ]
        },
        {
          denom: 'sneaky',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F89F635D97BC6400E17521B4220E3E08F44CE794EB80F5CABB356D3557E72637',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/CF57A83CED6CEC7D706631B5DC53ABC21B7EDA7DF7490732B4361E6D5DD19C73',
          exponent: 0,
          aliases: [
            'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc'
          ]
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      address:
        'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      type_asset: 'sdk.coin',
      base: 'ibc/CF57A83CED6CEC7D706631B5DC53ABC21B7EDA7DF7490732B4361E6D5DD19C73',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      }
    },
    {
      description:
        "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      denom_units: [
        {
          denom:
            'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
          exponent: 0,
          aliases: ['factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO']
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'NLS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/F722502EC90B3084DBD73589FC055E658EF9972A19ADDE61D3AA8BBF39B63883',
          exponent: 0,
          aliases: [
            'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782'
          ]
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F722502EC90B3084DBD73589FC055E658EF9972A19ADDE61D3AA8BBF39B63883',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      }
    },
    {
      description: 'STRD on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/38B29F6563DDADC81C9399EB5CDF140492CC2C58FB70048BC4430567A26ED193',
          exponent: 0,
          aliases: [
            'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4'
          ]
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/38B29F6563DDADC81C9399EB5CDF140492CC2C58FB70048BC4430567A26ED193',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      }
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom:
            'ibc/C975417951A4AA121B7C0A137510DBEEF3008E1DB58A8129C439C0F4FF77F684',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      base: 'ibc/C975417951A4AA121B7C0A137510DBEEF3008E1DB58A8129C439C0F4FF77F684',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'Sail DAO Token',
      denom_units: [
        {
          denom:
            'ibc/A42883E20767D7FF9D69D3CAF21FE2F8666AD1CCFA660CEF61AEB2A262085609',
          exponent: 0,
          aliases: [
            'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail'
          ]
        },
        {
          denom: 'sail',
          exponent: 6
        }
      ],
      base: 'ibc/A42883E20767D7FF9D69D3CAF21FE2F8666AD1CCFA660CEF61AEB2A262085609',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-251',
            base_denom:
              'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom:
            'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
          exponent: 0,
          aliases: ['ufis']
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      base: 'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom:
            'ibc/404F9855A533B939B4BC6DB82C7AF840C7931E89172E9117FA4F1D99E45E694C',
          exponent: 0,
          aliases: ['uratom']
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      base: 'ibc/404F9855A533B939B4BC6DB82C7AF840C7931E89172E9117FA4F1D99E45E694C',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uratom',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked IRISs',
      denom_units: [
        {
          denom:
            'ibc/9A25F481F75CC72A962C890F37265D0D4F65DFA23A227A0ABDEF735416B3BB5E',
          exponent: 0,
          aliases: ['uriris']
        },
        {
          denom: 'riris',
          exponent: 6
        }
      ],
      base: 'ibc/9A25F481F75CC72A962C890F37265D0D4F65DFA23A227A0ABDEF735416B3BB5E',
      name: 'rIRIS',
      display: 'riris',
      symbol: 'rIRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uriris',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked HUAHUAs',
      denom_units: [
        {
          denom:
            'ibc/12627F4BD98762A839A77643592840AB264DC32E7AAC6D922EB8260C64AB0E09',
          exponent: 0,
          aliases: ['urhuahua']
        },
        {
          denom: 'rhuahua',
          exponent: 6
        }
      ],
      base: 'ibc/12627F4BD98762A839A77643592840AB264DC32E7AAC6D922EB8260C64AB0E09',
      name: 'rHUAHUA',
      display: 'rhuahua',
      symbol: 'rHUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'urhuahua',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked SWTHs',
      denom_units: [
        {
          denom:
            'ibc/0E90026619DD296AD4EF9546396F292B465BAB6B5BE00ABD6162AA1CE8E68098',
          exponent: 0,
          aliases: ['urswth']
        },
        {
          denom: 'rswth',
          exponent: 8
        }
      ],
      base: 'ibc/0E90026619DD296AD4EF9546396F292B465BAB6B5BE00ABD6162AA1CE8E68098',
      name: 'rSWTH',
      display: 'rswth',
      symbol: 'rSWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'urswth',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/37BDD25A140F98135E4A6B6D11796ECB2D0B6ADE950C11137E4DB9BC123A89D6',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      base: 'ibc/37BDD25A140F98135E4A6B6D11796ECB2D0B6ADE950C11137E4DB9BC123A89D6',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [
        {
          denom:
            'ibc/1CF3929C88C6EEEBB30F615BE94F67EE05BBA07AD9550ACE02C5224F193D4D36',
          exponent: 0,
          aliases: [
            'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE'
          ]
        },
        {
          denom: 'GAZE',
          exponent: 6
        }
      ],
      base: 'ibc/1CF3929C88C6EEEBB30F615BE94F67EE05BBA07AD9550ACE02C5224F193D4D36',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/0720038678EB7286AF3183B4F08F52F21C9B6604FF5A4CF270F5BE7170B9FEC4',
          exponent: 0,
          aliases: [
            'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          ]
        },
        {
          denom: 'BRNCH',
          exponent: 6
        }
      ],
      base: 'ibc/0720038678EB7286AF3183B4F08F52F21C9B6604FF5A4CF270F5BE7170B9FEC4',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [
        {
          denom:
            'ibc/61C4C435116490E3E749663631CB839BD9507E029F5D7D700371A8436A641082',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH']
        },
        {
          denom: 'OHH',
          exponent: 6
        }
      ],
      base: 'ibc/61C4C435116490E3E749663631CB839BD9507E029F5D7D700371A8436A641082',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/1C8AA191A0B2FF62D7A85FFBD3117A3F5AB7CBA6769941A5DBDF2E9216007307',
          exponent: 0,
          aliases: [
            'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          ]
        },
        {
          denom: 'sneaky',
          exponent: 6
        }
      ],
      base: 'ibc/1C8AA191A0B2FF62D7A85FFBD3117A3F5AB7CBA6769941A5DBDF2E9216007307',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      base: 'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FD9DBF0DB4D301313195159303811FD2FD72185C4B11A51659EFCD49D7FF1228',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      base: 'ibc/FD9DBF0DB4D301313195159303811FD2FD72185C4B11A51659EFCD49D7FF1228',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/1645FDF541F13E9C382BD7B76557BA826404A493E2FEE58E45FA21F81D58C5FA',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      base: 'ibc/1645FDF541F13E9C382BD7B76557BA826404A493E2FEE58E45FA21F81D58C5FA',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      coingecko_id: 'stride-staked-stars',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/02833502787A39DD2FF18CB11599CAF6D172DE6065F807A6C1BC02566F87C3DB',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      base: 'ibc/02833502787A39DD2FF18CB11599CAF6D172DE6065F807A6C1BC02566F87C3DB',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingecko_id: 'stride-staked-osmo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/59B00BB2F90F72AC7A1973AC79A02F76707A4C6A9B208BB9A712C7804B37D0C7',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      base: 'ibc/59B00BB2F90F72AC7A1973AC79A02F76707A4C6A9B208BB9A712C7804B37D0C7',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingecko_id: 'stride-staked-juno',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/08095CEDEA29977C9DD0CE9A48329FDA622C183359D5F90CF04CC4FF80CBE431',
          exponent: 0,
          aliases: ['stuluna']
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      base: 'ibc/08095CEDEA29977C9DD0CE9A48329FDA622C183359D5F90CF04CC4FF80CBE431',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stuluna',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      coingecko_id: 'stride-staked-luna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/EEDCCB3A5A58F2EEB63BECC2FE0827C8251931AF492D924F21A4B886B2742567',
          exponent: 0,
          aliases: ['stinj']
        },
        {
          denom: 'stINJ',
          exponent: 18
        }
      ],
      base: 'ibc/EEDCCB3A5A58F2EEB63BECC2FE0827C8251931AF492D924F21A4B886B2742567',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stinj',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B6C5098D4514CCF47450B79C86307F75434DCD0D57EA098CB7C2492FA33AF397',
          exponent: 0,
          aliases: ['staevmos']
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      base: 'ibc/B6C5098D4514CCF47450B79C86307F75434DCD0D57EA098CB7C2492FA33AF397',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'staevmos',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      coingecko_id: 'stride-staked-evmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F19828D553A6A13B164800D5249DCCE7D690F5FF4ECAAC6AD2357746BE094EB2',
          exponent: 0,
          aliases: ['stuumee']
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      base: 'ibc/F19828D553A6A13B164800D5249DCCE7D690F5FF4ECAAC6AD2357746BE094EB2',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stuumee',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      coingecko_id: 'stride-staked-umee',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B54BCAA2917118FD9DE3E99037B5E7D165EA2CA11A5A58A1AA1ADF649990AB5A',
          exponent: 0,
          aliases: ['stucmdx']
        },
        {
          denom: 'stcmdx',
          exponent: 6
        }
      ],
      base: 'ibc/B54BCAA2917118FD9DE3E99037B5E7D165EA2CA11A5A58A1AA1ADF649990AB5A',
      name: 'Stride Staked CMDX',
      display: 'stcmdx',
      symbol: 'stCMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stucmdx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/61CFFCA70927C39E1D5777B85722C5EF213E3FD0F28132D06A55E374985AF823',
          exponent: 0,
          aliases: ['stusomm']
        },
        {
          denom: 'stsomm',
          exponent: 6
        }
      ],
      base: 'ibc/61CFFCA70927C39E1D5777B85722C5EF213E3FD0F28132D06A55E374985AF823',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'stusomm',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      coingecko_id: 'stride-staked-sommelier',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
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
      base: 'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
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
      base: 'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
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
      base: 'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      coingecko_id: 'terrakrw',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
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
      base: 'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
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
      base: 'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
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
      base: 'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
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
      base: 'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
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
      base: 'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
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
      base: 'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
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
      base: 'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
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
      base: 'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
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
      base: 'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
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
      base: 'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
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
      base: 'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
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
      base: 'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
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
      base: 'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
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
      base: 'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
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
      base: 'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
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
      base: 'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
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
      base: 'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
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
      base: 'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
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
      base: 'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
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
      base: 'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }
      ]
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [
        {
          denom:
            'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
          exponent: 0,
          aliases: [
            'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v'
          ]
        },
        {
          denom: 'mUSDC',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-2',
            base_denom:
              'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            chain_name: 'migaloo'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87'
          }
        }
      ]
    }
  ]
};
export default assets;
