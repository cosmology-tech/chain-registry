import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'arkh',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        webiste: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        webiste: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/6F73FCFF907B0ECC6433FAFB0C8C737ECCAC5316B3F9D00D72F3C72E48616F02',
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
      base: 'ibc/6F73FCFF907B0ECC6433FAFB0C8C737ECCAC5316B3F9D00D72F3C72E48616F02',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description:
        "Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It's the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.",
      denom_units: [
        {
          denom:
            'ibc/FB76F534D5617D4CD5A746831C10AAC4A879FEDB64DEB49B16E56B3A16513EB4',
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
      base: 'ibc/FB76F534D5617D4CD5A746831C10AAC4A879FEDB64DEB49B16E56B3A16513EB4',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png'
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/BB1EC032FCC64441C9AF35B71A4D83DC021B89ED8E27EF12394070E4BC6E5610',
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
      base: 'ibc/BB1EC032FCC64441C9AF35B71A4D83DC021B89ED8E27EF12394070E4BC6E5610',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ]
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/D0D7CC045C5C44688489906C3291F31F923DCAC61F208DFB5F139429D0455F87',
          exponent: 0,
          aliases: [
            'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D0D7CC045C5C44688489906C3291F31F923DCAC61F208DFB5F139429D0455F87',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
        }
      ]
    },
    {
      description:
        'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denom_units: [
        {
          denom:
            'ibc/6DED9959448EEEBE8CC5D8CC6E78EE2A2CA90753F9511959E03FF7D5A9FFE08F',
          exponent: 0,
          aliases: [
            'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7'
          ]
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6DED9959448EEEBE8CC5D8CC6E78EE2A2CA90753F9511959E03FF7D5A9FFE08F',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      ]
    },
    {
      description:
        'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denom_units: [
        {
          denom:
            'ibc/C02B42F51517745D192CB63E8BA0DE7C6290AB3075AC77E607D809BB62458DC6',
          exponent: 0,
          aliases: [
            'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D'
          ]
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C02B42F51517745D192CB63E8BA0DE7C6290AB3075AC77E607D809BB62458DC6',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/C76F5D1B53B931E72503A6ADF230BF00858A8ED9CD0309F9CD874CC994BF2FA3',
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
      base: 'ibc/C76F5D1B53B931E72503A6ADF230BF00858A8ED9CD0309F9CD874CC994BF2FA3',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ]
    },
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/E859AC102F4780B12301281924248960DDDFB271F014A6BC6F4177D871373E07',
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
      base: 'ibc/E859AC102F4780B12301281924248960DDDFB271F014A6BC6F4177D871373E07',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ]
    },
    {
      description:
        'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denom_units: [
        {
          denom:
            'ibc/4B53A034F00FB9B0B9837A194922D0932FD28003B70D8B589531B2CB98F72200',
          exponent: 0,
          aliases: [
            'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D'
          ]
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4B53A034F00FB9B0B9837A194922D0932FD28003B70D8B589531B2CB98F72200',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description:
        'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [
        {
          denom:
            'ibc/D633303BA6535C59C8C1009D909DBCAE228CC743813BB1F5040C68630FC8E778',
          exponent: 0,
          aliases: [
            'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB'
          ]
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D633303BA6535C59C8C1009D909DBCAE228CC743813BB1F5040C68630FC8E778',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png'
        }
      ]
    },
    {
      description:
        'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [
        {
          denom:
            'ibc/7E480FD5F69F7A699B6C241C4D0149B1FE05D91EDD3BBEF74B22F04741E510FD',
          exponent: 0,
          aliases: [
            'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373'
          ]
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7E480FD5F69F7A699B6C241C4D0149B1FE05D91EDD3BBEF74B22F04741E510FD',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png'
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/384E345C603A5641440898BE6F7D740E64A46436DF719570395C31D8DF56ED4D',
          exponent: 0,
          aliases: [
            'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0'
          ]
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
      type_asset: 'ics20',
      base: 'ibc/384E345C603A5641440898BE6F7D740E64A46436DF719570395C31D8DF56ED4D',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/42BE7BB106CFE53141C0ECD8713CA9CEBFBAE781301CCC15908B00BDBF74FD0F',
          exponent: 0,
          aliases: [
            'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
          ]
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/42BE7BB106CFE53141C0ECD8713CA9CEBFBAE781301CCC15908B00BDBF74FD0F',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/964140711975FF816727D7064A174A5B5B6EE596157C4C09D04B6446AC1591A5',
          exponent: 0,
          aliases: [
            'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/964140711975FF816727D7064A174A5B5B6EE596157C4C09D04B6446AC1591A5',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'DOT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom:
            'ibc/A562854000BFA866EBCFEFE5138C6425BE6CB7A97359E8C1E98E3E02EC295F23',
          exponent: 0,
          aliases: [
            'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
          ]
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A562854000BFA866EBCFEFE5138C6425BE6CB7A97359E8C1E98E3E02EC295F23',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/AF37CF2D4578F731D989B7335C85051BBB177A3BA80ECF7D3EE990D85445D5A7',
          exponent: 0,
          aliases: [
            'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205'
          ]
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AF37CF2D4578F731D989B7335C85051BBB177A3BA80ECF7D3EE990D85445D5A7',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/E5C1036BED64E915C9BA0E978E1CDD8BCFB2BE786CF52E8058E93649337267FC',
          exponent: 0,
          aliases: [
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
          ]
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E5C1036BED64E915C9BA0E978E1CDD8BCFB2BE786CF52E8058E93649337267FC',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/677DE786CC4084CEF8A13C20CB22252B8414B4BF418BCF60614D0A6BCE317B51',
          exponent: 0,
          aliases: [
            'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC'
          ]
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
      type_asset: 'ics20',
      base: 'ibc/677DE786CC4084CEF8A13C20CB22252B8414B4BF418BCF60614D0A6BCE317B51',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/C37584D423239BC480D6C3B239D5C4A858CBF1BB8623AC7C3621F5B423E578E8',
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
      base: 'ibc/C37584D423239BC480D6C3B239D5C4A858CBF1BB8623AC7C3621F5B423E578E8',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/3B1041E371FFADC4BEE240B9A4F5C61F543824DB494BDF9EE2AE6805463373F9',
          exponent: 0,
          aliases: [
            'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
          ]
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3B1041E371FFADC4BEE240B9A4F5C61F543824DB494BDF9EE2AE6805463373F9',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }
      ]
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/458DD8A570784BC276B61F3DDB1E5670A24C281CF8B5F2F1BEEAC1EA9D5B4F65',
          exponent: 0,
          aliases: [
            'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293'
          ]
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/458DD8A570784BC276B61F3DDB1E5670A24C281CF8B5F2F1BEEAC1EA9D5B4F65',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [
        {
          denom:
            'ibc/D2AACB6BE91D828BF46BCFA425A3C30D92A9785783FAF97BF26C2E789A8EA5AF',
          exponent: 0,
          aliases: [
            'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
          ]
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D2AACB6BE91D828BF46BCFA425A3C30D92A9785783FAF97BF26C2E789A8EA5AF',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }
      ],
      keywords: ['canon']
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/C8FE59BBD3BECACF97DC187DF4B39957E466F85D7CB68D20E8CC68DC1B3FA702',
          exponent: 0,
          aliases: [
            'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
          ]
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C8FE59BBD3BECACF97DC187DF4B39957E466F85D7CB68D20E8CC68DC1B3FA702',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }
      ]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/B834FD4F4E923D4D47905F6D91F5ED9EF6FFA5FDF86866C4422A0FEF0716FC36',
          exponent: 0,
          aliases: [
            'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076'
          ]
        },
        {
          denom: 'regen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B834FD4F4E923D4D47905F6D91F5ED9EF6FFA5FDF86866C4422A0FEF0716FC36',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }
      ]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom:
            'ibc/993A4BD544E732D46F627D4885A3603A00EDAE5657581597D01B8AF25191E24E',
          exponent: 0,
          aliases: [
            'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84'
          ]
        },
        {
          denom: 'dvpn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/993A4BD544E732D46F627D4885A3603A00EDAE5657581597D01B8AF25191E24E',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }
      ]
    },
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom:
            'ibc/4E5D0A6EDE876123821B3D80AC4D38D5E00147E2032A5000BA2399EA15973453',
          exponent: 0,
          aliases: [
            'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0'
          ]
        },
        {
          denom: 'iris',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4E5D0A6EDE876123821B3D80AC4D38D5E00147E2032A5000BA2399EA15973453',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }
      ]
    },
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom:
            'ibc/B0E09CA26CB4DDD3E5B08ABCF1974A8170858ED801683390C78A994470B32CF5',
          exponent: 0,
          aliases: [
            'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC'
          ]
        },
        {
          denom: 'iov',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B0E09CA26CB4DDD3E5B08ABCF1974A8170858ED801683390C78A994470B32CF5',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }
      ]
    },
    {
      description:
        'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [
        {
          denom:
            'ibc/B20580203C194A0AF0F806733CC695054C72FE4973E3046B9237E077F2C19F6A',
          exponent: 0,
          aliases: [
            'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59'
          ]
        },
        {
          denom: 'ngm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B20580203C194A0AF0F806733CC695054C72FE4973E3046B9237E077F2C19F6A',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }
      ]
    },
    {
      description:
        'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/DEC2D712110811C23D5C1CDDC60EFD13A7694F3AFE8CC1BA28BE2855C90D63C0',
          exponent: 0,
          aliases: [
            'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F'
          ]
        },
        {
          denom: 'eur',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DEC2D712110811C23D5C1CDDC60EFD13A7694F3AFE8CC1BA28BE2855C90D63C0',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }
      ]
    },
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom:
            'ibc/17357B3C4713BAB9D305FE946F4D9A8B3032C4FB968700C3B3C345F1132BBDF2',
          exponent: 0,
          aliases: [
            'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525'
          ]
        },
        {
          denom: 'like',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/17357B3C4713BAB9D305FE946F4D9A8B3032C4FB968700C3B3C345F1132BBDF2',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }
      ]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/0E70F276D87AF1242100813AF3B5B561F23046A2A1A2965B855C09958F4E5AC9',
          exponent: 0,
          aliases: [
            'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B'
          ]
        },
        {
          denom: 'ixo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0E70F276D87AF1242100813AF3B5B561F23046A2A1A2965B855C09958F4E5AC9',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }
      ]
    },
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom:
            'ibc/81F194C549C7D7871FA8DFFDF0FA3503CAE392D4857FE0A495C0CAD938AA34B2',
          exponent: 0,
          aliases: [
            'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5'
          ]
        },
        {
          denom: 'bcna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/81F194C549C7D7871FA8DFFDF0FA3503CAE392D4857FE0A495C0CAD938AA34B2',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }
      ]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/319B574E7B11F359BCCF54E0A432C923EE9B65B8A2DD49D489E8B5DAB25FE7D4',
          exponent: 0,
          aliases: [
            'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452'
          ]
        },
        {
          denom: 'btsg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/319B574E7B11F359BCCF54E0A432C923EE9B65B8A2DD49D489E8B5DAB25FE7D4',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }
      ]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom:
            'ibc/28EA937CF81C5F0B6E311DF9308BFF3FD4D3AB87A3E3736BBB5BEFE066B49FA8',
          exponent: 0,
          aliases: [
            'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E'
          ]
        },
        {
          denom: 'xki',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/28EA937CF81C5F0B6E311DF9308BFF3FD4D3AB87A3E3736BBB5BEFE066B49FA8',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }
      ]
    },
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom:
            'ibc/A11BEAB68493229C5D6D54EFE1A45777A9E63E1DB8B0FFD4C5F1B0CEF003E91C',
          exponent: 0,
          aliases: [
            'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB'
          ]
        },
        {
          denom: 'med',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A11BEAB68493229C5D6D54EFE1A45777A9E63E1DB8B0FFD4C5F1B0CEF003E91C',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }
      ]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/913BDF5A14095C7816C55049E957F2B353B881A50EAFAE897F4265B6EEFE5D06',
          exponent: 0,
          aliases: [
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/913BDF5A14095C7816C55049E957F2B353B881A50EAFAE897F4265B6EEFE5D06',
      name: 'bostrom',
      display:
        'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/3CEF82FB3CAE9C69A484E78D47268A6B28C76FD0B34618E779C467188FF439F7',
          exponent: 0,
          aliases: [
            'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0'
          ]
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3CEF82FB3CAE9C69A484E78D47268A6B28C76FD0B34618E779C467188FF439F7',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/DE7C1B417417D3B1EEA718A10FE25156765024B7C3C8A31D6C845761F1DBCEF9',
          exponent: 0,
          aliases: [
            'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA'
          ]
        },
        {
          denom: 'cheq',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DE7C1B417417D3B1EEA718A10FE25156765024B7C3C8A31D6C845761F1DBCEF9',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }
      ]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom:
            'ibc/5587E4C28ABECA321F9EA12922BE3FDFC374390C7B043F87A232B35BD071FB04',
          exponent: 0,
          aliases: [
            'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2'
          ]
        },
        {
          denom: 'lum',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5587E4C28ABECA321F9EA12922BE3FDFC374390C7B043F87A232B35BD071FB04',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }
      ]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/02B7AC6FAE768B51266393C255E8C17C686B22BEDC84DBFA1384F6AADA6B6F72',
          exponent: 0,
          aliases: [
            'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD'
          ]
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/02B7AC6FAE768B51266393C255E8C17C686B22BEDC84DBFA1384F6AADA6B6F72',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }
      ]
    },
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom:
            'ibc/B1E4C09DD4F8AF4865C4CC09CA23751A79F28881C476A4B5F130B8FA670AEC0C',
          exponent: 0,
          aliases: [
            'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C'
          ]
        },
        {
          denom: 'dsm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B1E4C09DD4F8AF4865C4CC09CA23751A79F28881C476A4B5F130B8FA670AEC0C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }
      ]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom:
            'ibc/24709C80ED3C6C2A8F5BEFDA0F54A59047CD80B093A9F44A3B8D7D3991490679',
          exponent: 0,
          aliases: [
            'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D'
          ]
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/24709C80ED3C6C2A8F5BEFDA0F54A59047CD80B093A9F44A3B8D7D3991490679',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom:
            'ibc/2FF16CC38F7FA271FE8BC964088F0FC4AC92C8E2FD73F0FF59656B1E7A560F83',
          exponent: 0,
          aliases: [
            'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E'
          ]
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
      type_asset: 'ics20',
      base: 'ibc/2FF16CC38F7FA271FE8BC964088F0FC4AC92C8E2FD73F0FF59656B1E7A560F83',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }
      ]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom:
            'ibc/298568325A320B6E834C737677EE9011D68FE1927980347BDC6C151AD3DDFC94',
          exponent: 0,
          aliases: [
            'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE'
          ]
        },
        {
          denom: 'band',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/298568325A320B6E834C737677EE9011D68FE1927980347BDC6C151AD3DDFC94',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }
      ]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [
        {
          denom:
            'ibc/FC3201748E2D8314CDF04868E6A85B420367D61E9A46673B60FE10BA7A0D5534',
          exponent: 0,
          aliases: [
            'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593'
          ]
        },
        {
          denom: 'darc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FC3201748E2D8314CDF04868E6A85B420367D61E9A46673B60FE10BA7A0D5534',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }
      ]
    },
    {
      description: 'The native token of Umee',
      denom_units: [
        {
          denom:
            'ibc/D58C6C85E709F92AA536C349D5BD8282A6D284C86056E14248EE878AB0E5498F',
          exponent: 0,
          aliases: [
            'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C'
          ]
        },
        {
          denom: 'umee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D58C6C85E709F92AA536C349D5BD8282A6D284C86056E14248EE878AB0E5498F',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }
      ]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/156CE67FCA193091C75B5C157FBD01C473C27F2D6E7B5893A3D770B4425174A2',
          exponent: 0,
          aliases: [
            'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44'
          ]
        },
        {
          denom: 'graviton',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/156CE67FCA193091C75B5C157FBD01C473C27F2D6E7B5893A3D770B4425174A2',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }
      ]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [
        {
          denom:
            'ibc/14A7A8CBA8009D6C953CC1AD638A6A6053EAABCA6A532D15A8838CE8E4C9F57D',
          exponent: 0,
          aliases: [
            'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84'
          ]
        },
        {
          denom: 'dec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/14A7A8CBA8009D6C953CC1AD638A6A6053EAABCA6A532D15A8838CE8E4C9F57D',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/5375047A4AD8EDCABB45DEB57C680DF2EF5C7C28F35E3D29E6EC4D1B487AFD48',
          exponent: 0,
          aliases: [
            'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6'
          ]
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5375047A4AD8EDCABB45DEB57C680DF2EF5C7C28F35E3D29E6EC4D1B487AFD48',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }
      ]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/BDED1B4B21294A1B03A1E6396FC4E58B6CB7082825BB64186F557093DBF9D682',
          exponent: 0,
          aliases: [
            'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3'
          ]
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BDED1B4B21294A1B03A1E6396FC4E58B6CB7082825BB64186F557093DBF9D682',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }
      ]
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom:
            'ibc/AFE4B9633FADDD5584DFDDB203C627610C6312B2920FD0416F3A8B5B2D8498DB',
          exponent: 0,
          aliases: [
            'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7'
          ]
        },
        {
          denom: 'crbrus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AFE4B9633FADDD5584DFDDB203C627610C6312B2920FD0416F3A8B5B2D8498DB',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom:
            'ibc/AF9ED748BD3B5820E6707ED0646B0A8B295611A7A126474A5996F454E1836C74',
          exponent: 0,
          aliases: [
            'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447'
          ]
        },
        {
          denom: 'fet',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AF9ED748BD3B5820E6707ED0646B0A8B295611A7A126474A5996F454E1836C74',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/3F4762FD4A51FCA24670B38853C7D63BC2F4FDB0053669A1F55C57FDA641081B',
          exponent: 0,
          aliases: [
            'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC'
          ]
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3F4762FD4A51FCA24670B38853C7D63BC2F4FDB0053669A1F55C57FDA641081B',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/9624257F138A32401406583556E57450F0B168E3CAD9FC6E11BDC1A7EBC75211',
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
      type_asset: 'ics20',
      base: 'ibc/9624257F138A32401406583556E57450F0B168E3CAD9FC6E11BDC1A7EBC75211',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }
      ]
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/175EE1332600B9A62EA4E527D21E1800FC2821E02D708EBE5B0678E9ED952A88',
          exponent: 0,
          aliases: [
            'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273'
          ]
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/175EE1332600B9A62EA4E527D21E1800FC2821E02D708EBE5B0678E9ED952A88',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/8CEB7D2FB63FFE6B060C78CA3E54F6BBB27EED8038B5CC051DFF2E6F33522CF4',
          exponent: 0,
          aliases: [
            'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780'
          ]
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
      type_asset: 'ics20',
      base: 'ibc/8CEB7D2FB63FFE6B060C78CA3E54F6BBB27EED8038B5CC051DFF2E6F33522CF4',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }
      ]
    },
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom:
            'ibc/BCECF672DBB345A334D9B7AFF3B582942DBF16195742F08B8210E0F1C92D9CD8',
          exponent: 0,
          aliases: [
            'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8'
          ]
        },
        {
          denom: 'tick',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BCECF672DBB345A334D9B7AFF3B582942DBF16195742F08B8210E0F1C92D9CD8',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/8B713169E6BF04E9A21B24733D5CECFB545A639C2C10AEFE835DD00FC57671EB',
          exponent: 0,
          aliases: [
            'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB'
          ]
        },
        {
          denom: 'ROWAN',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8B713169E6BF04E9A21B24733D5CECFB545A639C2C10AEFE835DD00FC57671EB',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Shentu',
      denom_units: [
        {
          denom:
            'ibc/F8A75DA4BA65DA9AC4AE2D0C8E049E1F0A54ACA693A78736CF0D652250D77DE5',
          exponent: 0,
          aliases: [
            'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3'
          ]
        },
        {
          denom: 'ctk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F8A75DA4BA65DA9AC4AE2D0C8E049E1F0A54ACA693A78736CF0D652250D77DE5',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }
      ]
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denom_units: [
        {
          denom:
            'ibc/29826FC6135FAA5632D879D1A781C9F07CFE44DD6E6F172CB3AB0F682D172A2D',
          exponent: 0,
          aliases: [
            'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B'
          ]
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/29826FC6135FAA5632D879D1A781C9F07CFE44DD6E6F172CB3AB0F682D172A2D',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }
      ]
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denom_units: [
        {
          denom:
            'ibc/9E489760A947E6086F63CE784EC9834E2191B653C5E66B6FBBC477C282B96A62',
          exponent: 0,
          aliases: [
            'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788'
          ]
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9E489760A947E6086F63CE784EC9834E2191B653C5E66B6FBBC477C282B96A62',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }
      ]
    },
    {
      description:
        'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denom_units: [
        {
          denom:
            'ibc/38A5A5115FA281E4A3D6776C617A1BF291406623C20C55DCB29AE4E8A4BA028F',
          exponent: 0,
          aliases: [
            'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE'
          ]
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/38A5A5115FA281E4A3D6776C617A1BF291406623C20C55DCB29AE4E8A4BA028F',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description: 'Gravity Bridge WBTC',
      denom_units: [
        {
          denom:
            'ibc/8A4FEFE146C8F390B42D1A11A051BE38CE9301B313209A2277C2179331D53D67',
          exponent: 0,
          aliases: [
            'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796'
          ]
        },
        {
          denom: 'gwbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8A4FEFE146C8F390B42D1A11A051BE38CE9301B313209A2277C2179331D53D67',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [
        {
          denom:
            'ibc/B16750E346069FFBF81FB22B27C783BC12EFD2A3540FBD815CDE887597A62892',
          exponent: 0,
          aliases: [
            'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5'
          ]
        },
        {
          denom: 'gweth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B16750E346069FFBF81FB22B27C783BC12EFD2A3540FBD815CDE887597A62892',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [
        {
          denom:
            'ibc/5D987BEC3D8DA389F6BDC0EE69302520B45BCF08389BAF1FCE6515DBE8F24996',
          exponent: 0,
          aliases: [
            'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E'
          ]
        },
        {
          denom: 'gusdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5D987BEC3D8DA389F6BDC0EE69302520B45BCF08389BAF1FCE6515DBE8F24996',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [
        {
          denom:
            'ibc/083603210207958B1A2DD993B79A8614F26E2A9819C35D9BF0CB90706252A347',
          exponent: 0,
          aliases: [
            'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5'
          ]
        },
        {
          denom: 'gdai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/083603210207958B1A2DD993B79A8614F26E2A9819C35D9BF0CB90706252A347',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [
        {
          denom:
            'ibc/89B54D976401FB6267D9C66E5261DC8ADD6AE48647EA37BFF4C0866583FAA7DE',
          exponent: 0,
          aliases: [
            'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805'
          ]
        },
        {
          denom: 'gusdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/89B54D976401FB6267D9C66E5261DC8ADD6AE48647EA37BFF4C0866583FAA7DE',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
        }
      ]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/DC661D3CCB636060BE557F2721E9624D4920DF431A15781FE365CC1AFD1DBAC3',
          exponent: 0,
          aliases: [
            'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3'
          ]
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DC661D3CCB636060BE557F2721E9624D4920DF431A15781FE365CC1AFD1DBAC3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }
      ]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [
        {
          denom:
            'ibc/FEE553894B99346D12BE5887F8E54F8544035C98872A6C11E02A7671DC04298F',
          exponent: 0,
          aliases: [
            'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2'
          ]
        },
        {
          denom: 'hash',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FEE553894B99346D12BE5887F8E54F8544035C98872A6C11E02A7671DC04298F',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }
      ]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [
        {
          denom:
            'ibc/F7D1DA6C8BDDA647731628AAFC5DD8E8FB2A5DA1EF02A423061FFF91E6B7B419',
          exponent: 0,
          aliases: [
            'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2'
          ]
        },
        {
          denom: 'glx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F7D1DA6C8BDDA647731628AAFC5DD8E8FB2A5DA1EF02A423061FFF91E6B7B419',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        }
      ]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denom_units: [
        {
          denom:
            'ibc/10AABDCCEE63B677B851E2BCB50B3A7610D7C7F9DF3E60F2FCBDFF9580EF45DB',
          exponent: 0,
          aliases: [
            'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/10AABDCCEE63B677B851E2BCB50B3A7610D7C7F9DF3E60F2FCBDFF9580EF45DB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }
      ]
    },
    {
      description: 'Token governance for Junoswap',
      denom_units: [
        {
          denom:
            'ibc/5C9A9AA89C607F0C4988A96793070676FA96E25163B2117F4034D6F317F7E24F',
          exponent: 0,
          aliases: [
            'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC'
          ]
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5C9A9AA89C607F0C4988A96793070676FA96E25163B2117F4034D6F317F7E24F',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }
      ]
    },
    {
      description:
        'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [
        {
          denom:
            'ibc/1201350ADD75F61976AD702723F01205780B419F2C023546E37A78A70618C9DB',
          exponent: 0,
          aliases: [
            'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA'
          ]
        },
        {
          denom: 'meme',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1201350ADD75F61976AD702723F01205780B419F2C023546E37A78A70618C9DB',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }
      ]
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denom_units: [
        {
          denom:
            'ibc/3B8149ADC6EFD8A7A75363E1D6101BA744A557D22E7327BC8E89FCE9ADCB84B3',
          exponent: 0,
          aliases: [
            'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7'
          ]
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3B8149ADC6EFD8A7A75363E1D6101BA744A557D22E7327BC8E89FCE9ADCB84B3',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }
      ]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denom_units: [
        {
          denom:
            'ibc/4697F67E536427B8A260613B0FEC312D6BAB9566FED3FC670175A3ACFCD5B626',
          exponent: 0,
          aliases: [
            'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484'
          ]
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4697F67E536427B8A260613B0FEC312D6BAB9566FED3FC670175A3ACFCD5B626',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }
      ]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/A55BAFD6272C9DA8876306BC757E6E8537B30D0B0B32C48B5DD86CDB48065510',
          exponent: 0,
          aliases: [
            'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9'
          ]
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A55BAFD6272C9DA8876306BC757E6E8537B30D0B0B32C48B5DD86CDB48065510',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }
      ]
    },
    {
      description: 'Native token of Rizon Chain',
      denom_units: [
        {
          denom:
            'ibc/4D8C33A493388C44381E8DA43C97528EDCF16021A01A91EFBB6070A8744B822A',
          exponent: 0,
          aliases: [
            'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219'
          ]
        },
        {
          denom: 'atolo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4D8C33A493388C44381E8DA43C97528EDCF16021A01A91EFBB6070A8744B822A',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/82AEECB472180520FA97FA0CCE715F0A849B07F743AC4976DD959AEFF3AE5C33',
          exponent: 0,
          aliases: [
            'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC'
          ]
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/82AEECB472180520FA97FA0CCE715F0A849B07F743AC4976DD959AEFF3AE5C33',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/4711A506660A7ED9E18C6B8E7F8EA470C34F7B7982F26E621B3CC47C7A0E914C',
          exponent: 0,
          aliases: [
            'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5'
          ]
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4711A506660A7ED9E18C6B8E7F8EA470C34F7B7982F26E621B3CC47C7A0E914C',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }
      ]
    },
    {
      description:
        'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denom_units: [
        {
          denom:
            'ibc/EED9ED82CF66B04AEE7867EFD6FF3D23A38391D6D9F45630FE8A7ACCFE9179C8',
          exponent: 0,
          aliases: [
            'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049'
          ]
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EED9ED82CF66B04AEE7867EFD6FF3D23A38391D6D9F45630FE8A7ACCFE9179C8',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description:
        'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [
        {
          denom:
            'ibc/3F1D85ACA99E94358CB2286E8C9D0400DAA6400AA920BCAFA7F6ECEE0D55542B',
          exponent: 0,
          aliases: [
            'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4'
          ]
        },
        {
          denom: 'l1',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3F1D85ACA99E94358CB2286E8C9D0400DAA6400AA920BCAFA7F6ECEE0D55542B',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denom_units: [
        {
          denom:
            'ibc/67A65C6211A42FAC7B7069AA673CD7870DC0360BC4D8F55723D3DA8166034C01',
          exponent: 0,
          aliases: [
            'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE'
          ]
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/67A65C6211A42FAC7B7069AA673CD7870DC0360BC4D8F55723D3DA8166034C01',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denom_units: [
        {
          denom:
            'ibc/2178358EF5A9AAA9EB85AFAC3B56EFB241130C5575A00143E58B1DF6B869C749',
          exponent: 0,
          aliases: [
            'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4'
          ]
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2178358EF5A9AAA9EB85AFAC3B56EFB241130C5575A00143E58B1DF6B869C749',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denom_units: [
        {
          denom:
            'ibc/973564B625A7BB61859F2BD68A30C0B688E9940864272BFDA9D2825278C9B9B8',
          exponent: 0,
          aliases: [
            'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3'
          ]
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/973564B625A7BB61859F2BD68A30C0B688E9940864272BFDA9D2825278C9B9B8',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description:
        "RAI is a non-pegged, ETH-backed stable asset. It is useful as more 'stable' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.",
      denom_units: [
        {
          denom:
            'ibc/29BF576EACE59A6FAB7411BDA8FEDF6D2F8BA530ACE5C9DA224D6CE2C8AE7536',
          exponent: 0,
          aliases: [
            'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E'
          ]
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/29BF576EACE59A6FAB7411BDA8FEDF6D2F8BA530ACE5C9DA224D6CE2C8AE7536',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denom_units: [
        {
          denom:
            'ibc/CE36D6B95302D4895E7FE93310443B06C2DCFE04CDFC8E883CD7629F176ECC89',
          exponent: 0,
          aliases: [
            'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2'
          ]
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CE36D6B95302D4895E7FE93310443B06C2DCFE04CDFC8E883CD7629F176ECC89',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/982ECA18A23D8D9C1B71E354EAF00236A28AEB4B4E39EBC1B2A2ED8C4E763541',
          exponent: 0,
          aliases: [
            'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE'
          ]
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/982ECA18A23D8D9C1B71E354EAF00236A28AEB4B4E39EBC1B2A2ED8C4E763541',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }
      ]
    },
    {
      description: 'The native token of Tgrade',
      denom_units: [
        {
          denom:
            'ibc/DE34BA4EB8E7FEBA8ACC1879BA4F93ADBE9B02E3776EA45E5B9F98BEACE37E6C',
          exponent: 0,
          aliases: [
            'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C'
          ]
        },
        {
          denom: 'tgd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DE34BA4EB8E7FEBA8ACC1879BA4F93ADBE9B02E3776EA45E5B9F98BEACE37E6C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        }
      ]
    },
    {
      description:
        'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [
        {
          denom:
            'ibc/5AA2F43E35A0AA21B4A1C59732759A967745D29538281885C35F92F6F21A95F1',
          exponent: 0,
          aliases: [
            'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D'
          ]
        },
        {
          denom: 'echelon',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5AA2F43E35A0AA21B4A1C59732759A967745D29538281885C35F92F6F21A95F1',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }
      ]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/B45A023AAD72DD80E011C76F33B48C05D6F43302012548D9D4A9E8FEA6BCF32E',
          exponent: 0,
          aliases: [
            'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B'
          ]
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B45A023AAD72DD80E011C76F33B48C05D6F43302012548D9D4A9E8FEA6BCF32E',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/C57EC57365144EDF9BC61F97288AE0DE0D02D6BA729218401A06F25FB2594FBE',
          exponent: 0,
          aliases: [
            'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A'
          ]
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C57EC57365144EDF9BC61F97288AE0DE0D02D6BA729218401A06F25FB2594FBE',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/CCDA930CC2F775C1A0CD0C74837794E14F0532FA87D9BD5285C1AEA22CC07470',
          exponent: 0,
          aliases: [
            'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D'
          ]
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CCDA930CC2F775C1A0CD0C74837794E14F0532FA87D9BD5285C1AEA22CC07470',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denom_units: [
        {
          denom:
            'ibc/6778A79C60C1616E1C8AB18DD41EADEF547B1DF38D900586A356A86D8B70DA24',
          exponent: 0,
          aliases: [
            'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6778A79C60C1616E1C8AB18DD41EADEF547B1DF38D900586A356A86D8B70DA24',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        }
      ]
    },
    {
      description:
        'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denom_units: [
        {
          denom:
            'ibc/FAA403CD836EC3414A5183E7E70E1FC59C06F7C2A205A8C334081D766956A3AA',
          exponent: 0,
          aliases: [
            'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49'
          ]
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FAA403CD836EC3414A5183E7E70E1FC59C06F7C2A205A8C334081D766956A3AA',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denom_units: [
        {
          denom:
            'ibc/15FC3F06161901136E7B5C450FFB7702D7CE67A30FF0A41D5A10431EF301AB72',
          exponent: 0,
          aliases: [
            'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/15FC3F06161901136E7B5C450FFB7702D7CE67A30FF0A41D5A10431EF301AB72',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denom_units: [
        {
          denom:
            'ibc/A3B09F75BB0587AC9FEFC829CEF5736FCE0AB5F45E0AD520FEFBFE6211BC166C',
          exponent: 0,
          aliases: [
            'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8'
          ]
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A3B09F75BB0587AC9FEFC829CEF5736FCE0AB5F45E0AD520FEFBFE6211BC166C',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }
      ]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/DF55A4767C4EDAF8A0B4FAAFAF4137D26402B7A7C1225C3C334BEA0D5EFE8839',
          exponent: 0,
          aliases: [
            'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580'
          ]
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DF55A4767C4EDAF8A0B4FAAFAF4137D26402B7A7C1225C3C334BEA0D5EFE8839',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }
      ]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [
        {
          denom:
            'ibc/3AE9A4990653D9AE35391B3CA6D0E1A0A49704414F543D746E0A17A5DE23DB6D',
          exponent: 0,
          aliases: [
            'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7'
          ]
        },
        {
          denom: 'lumen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3AE9A4990653D9AE35391B3CA6D0E1A0A49704414F543D746E0A17A5DE23DB6D',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom:
            'ibc/0F4E9A41DCDBD34C9643B9617D864E9BBAC01882FD1F5A4A9D9868B1361DB153',
          exponent: 0,
          aliases: [
            'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D'
          ]
        },
        {
          denom: 'ORAI',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0F4E9A41DCDBD34C9643B9617D864E9BBAC01882FD1F5A4A9D9868B1361DB153',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [
        {
          denom:
            'ibc/FA2FA12ACD621EF4C1C2D5BC7289695985223FC803B48E3B099913CFD7364E4C',
          exponent: 0,
          aliases: [
            'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B'
          ]
        },
        {
          denom: 'cudos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA2FA12ACD621EF4C1C2D5BC7289695985223FC803B48E3B099913CFD7364E4C',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/DAF0D072C8786BDD4E147C60F0F606582E6BFADDDF63847D82DC07F93F6A0EE4',
          exponent: 0,
          aliases: [
            'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE'
          ]
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DAF0D072C8786BDD4E147C60F0F606582E6BFADDDF63847D82DC07F93F6A0EE4',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }
      ]
    },
    {
      description:
        'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [
        {
          denom:
            'ibc/60E6FDC08555FA443A856AAC454E63B4EA374B52C882F2CE424814C7AF90055B',
          exponent: 0,
          aliases: [
            'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604'
          ]
        },
        {
          denom: 'bld',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/60E6FDC08555FA443A856AAC454E63B4EA374B52C882F2CE424814C7AF90055B',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }
      ]
    },
    {
      description:
        'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [
        {
          denom:
            'ibc/047934271BA7967DF046623E15ABB6BB4500C7F35ED4FC48495AD4505A9E131C',
          exponent: 0,
          aliases: [
            'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5'
          ]
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/047934271BA7967DF046623E15ABB6BB4500C7F35ED4FC48495AD4505A9E131C',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/37543175E2672B4CBC1D90E6E14C90F089F6C3841F5FD93825F4F1B6FA42DA68',
          exponent: 0,
          aliases: [
            'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B'
          ]
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/37543175E2672B4CBC1D90E6E14C90F089F6C3841F5FD93825F4F1B6FA42DA68',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }
      ]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/44FC4594D42A0D7862813A10750DCFCB2626E9BA3A4E822566EC73CEC0A70BF8',
          exponent: 0,
          aliases: [
            'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3'
          ]
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/44FC4594D42A0D7862813A10750DCFCB2626E9BA3A4E822566EC73CEC0A70BF8',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/A26AE98A766D66F95E801F2808780BED72D93D31B30414071748A70F6CE6D97D',
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
      base: 'ibc/A26AE98A766D66F95E801F2808780BED72D93D31B30414071748A70F6CE6D97D',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F50F39482F0E1BED97A4D97D402A2162034624DD6726755AD0152E07E01A9751',
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
      base: 'ibc/F50F39482F0E1BED97A4D97D402A2162034624DD6726755AD0152E07E01A9751',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/89C4E75AE39FF1B180F90BE9EDBF5B2B81915C0A32997AAB7A4EA9874F40492C',
          exponent: 0,
          aliases: [
            'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A'
          ]
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/89C4E75AE39FF1B180F90BE9EDBF5B2B81915C0A32997AAB7A4EA9874F40492C',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }
      ]
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denom_units: [
        {
          denom:
            'ibc/E1016541CE6CC45C91AEA23F4B09D887DBADA9C20DC06305F6AC3CE18FBA1C0D',
          exponent: 0,
          aliases: [
            'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C'
          ]
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E1016541CE6CC45C91AEA23F4B09D887DBADA9C20DC06305F6AC3CE18FBA1C0D',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }
      ]
    },
    {
      description: 'StakeEasy governance token',
      denom_units: [
        {
          denom:
            'ibc/8C31C219A7EF401D521159ACC4B742A9CA04AA0E6E5416B412AF3E0033D63C64',
          exponent: 0,
          aliases: [
            'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6'
          ]
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8C31C219A7EF401D521159ACC4B742A9CA04AA0E6E5416B412AF3E0033D63C64',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/B58699CE26FABEC239B3B0F7EDE0816178391983E82240DE01B08C6427BFA94F',
          exponent: 0,
          aliases: [
            'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
          ]
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B58699CE26FABEC239B3B0F7EDE0816178391983E82240DE01B08C6427BFA94F',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom:
            'ibc/8101BE4720352E137B2401D37972DB774C77EB044E319824E9A4494B22055B39',
          exponent: 0,
          aliases: [
            'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9'
          ]
        },
        {
          denom: 'rebus',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8101BE4720352E137B2401D37972DB774C77EB044E319824E9A4494B22055B39',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }
      ]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [
        {
          denom:
            'ibc/E727E55A7E9F1AF82B096AD98AB6441A901493D59CC836D908387D0DBC2C37F0',
          exponent: 0,
          aliases: [
            'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC'
          ]
        },
        {
          denom: 'tori',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E727E55A7E9F1AF82B096AD98AB6441A901493D59CC836D908387D0DBC2C37F0',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/A558B18F6A6EDA52B16B6EFBB10E60CF9FFE535F9342AF974CCA7BBC7761E826',
          exponent: 0,
          aliases: [
            'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE'
          ]
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A558B18F6A6EDA52B16B6EFBB10E60CF9FFE535F9342AF974CCA7BBC7761E826',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
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
            'ibc/BD0D862FD355FA27BAA6048F650901949BA456A8BC85158EBCCBD95D7B2C2C71',
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
      base: 'ibc/BD0D862FD355FA27BAA6048F650901949BA456A8BC85158EBCCBD95D7B2C2C71',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/BDEE1373BD3F33FF938EE4DB0A88E6DE36DEE3A250555509966EFC99F16588F7',
          exponent: 0,
          aliases: [
            'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F'
          ]
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BDEE1373BD3F33FF938EE4DB0A88E6DE36DEE3A250555509966EFC99F16588F7',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }
      ]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [
        {
          denom:
            'ibc/19891D716689B5FEF0CE7C4CCF66988B0603C71B5891425FF641372ECB7D3FDB',
          exponent: 0,
          aliases: [
            'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB'
          ]
        },
        {
          denom: 'lamb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/19891D716689B5FEF0CE7C4CCF66988B0603C71B5891425FF641372ECB7D3FDB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }
      ]
    },
    {
      description:
        'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/4A6A7581BCBE463CB0573669D0001975CFF6D619C1E72FE1D739D473C0D73E80',
          exponent: 0,
          aliases: [
            'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC'
          ]
        },
        {
          denom: 'usk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4A6A7581BCBE463CB0573669D0001975CFF6D619C1E72FE1D739D473C0D73E80',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }
      ]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [
        {
          denom:
            'ibc/1D0958E65B7B7CEC51F40B841133F37D0D7D1CF5FCEBB30079E569B3070F3304',
          exponent: 0,
          aliases: [
            'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC'
          ]
        },
        {
          denom: 'FUND',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1D0958E65B7B7CEC51F40B841133F37D0D7D1CF5FCEBB30079E569B3070F3304',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom:
            'ibc/F27AF3163AB709F9CBA089FDB0C8AD5230CE099B9FF9A0C38C8A374999490BB3',
          exponent: 0,
          aliases: [
            'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA'
          ]
        },
        {
          denom: 'jkl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F27AF3163AB709F9CBA089FDB0C8AD5230CE099B9FF9A0C38C8A374999490BB3',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/27633AA56E64C920A79EF54DC35F3E1893A54E3B16E1539259657EC66081A9AC',
          exponent: 0,
          aliases: [
            'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3'
          ]
        },
        {
          denom: 'alter',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/27633AA56E64C920A79EF54DC35F3E1893A54E3B16E1539259657EC66081A9AC',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/C3435085A8BF34AE03DBF564553058992274D993A370A87648C95E26E79F9242',
          exponent: 0,
          aliases: [
            'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8'
          ]
        },
        {
          denom: 'butt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C3435085A8BF34AE03DBF564553058992274D993A370A87648C95E26E79F9242',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/40CC80780DB20A0EDD5BF4BFC6484D3F5C3690257D5DEDB30295F6ACCA8AD260',
          exponent: 0,
          aliases: [
            'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C'
          ]
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/40CC80780DB20A0EDD5BF4BFC6484D3F5C3690257D5DEDB30295F6ACCA8AD260',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/B9C35A9FF95A6E862783DE8B66D34CB70D7EF77262F1D3880D1A7243FDE00349',
          exponent: 0,
          aliases: [
            'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213'
          ]
        },
        {
          denom: 'sienna',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B9C35A9FF95A6E862783DE8B66D34CB70D7EF77262F1D3880D1A7243FDE00349',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }
      ]
    },
    {
      description:
        'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/FF3779E6B4CE41FA7B2F81A20BE313FD3C24E938497AF570C641B70D551520FC',
          exponent: 0,
          aliases: [
            'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4'
          ]
        },
        {
          denom: 'stkd-scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FF3779E6B4CE41FA7B2F81A20BE313FD3C24E938497AF570C641B70D551520FC',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }
      ]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [
        {
          denom:
            'ibc/FB362923E5F43F64EE75DFB7864971CC9D23236A28E2FA929B04292B2ABA41D9',
          exponent: 0,
          aliases: [
            'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88'
          ]
        },
        {
          denom: 'bze',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FB362923E5F43F64EE75DFB7864971CC9D23236A28E2FA929B04292B2ABA41D9',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/E3E6C862292B7F83C315145EB14D3DAD910E6C5E4D58B7824FAEE70E7C1B7535',
          exponent: 0,
          aliases: [
            'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF'
          ]
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E3E6C862292B7F83C315145EB14D3DAD910E6C5E4D58B7824FAEE70E7C1B7535',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/E244B87036542B1274526300C0B5DE6E610A8C44F22D53FCD95AC97C421B9786',
          exponent: 0,
          aliases: [
            'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06'
          ]
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E244B87036542B1274526300C0B5DE6E610A8C44F22D53FCD95AC97C421B9786',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/FBFECA18E4E0717D929A6C0B15DF28DAFDFBE60D18D77AFE3DBBCBF5ADF9002B',
          exponent: 0,
          aliases: [
            'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E'
          ]
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FBFECA18E4E0717D929A6C0B15DF28DAFDFBE60D18D77AFE3DBBCBF5ADF9002B',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Imversed',
      denom_units: [
        {
          denom:
            'ibc/D26E7BA40DD5D5E4375BBB2AEE3DBC52BEB99DE803A6AAF097CE92909B76E2E7',
          exponent: 0,
          aliases: [
            'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4'
          ]
        },
        {
          denom: 'imv',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D26E7BA40DD5D5E4375BBB2AEE3DBC52BEB99DE803A6AAF097CE92909B76E2E7',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        }
      ]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [
        {
          denom:
            'ibc/CF8A3CB2941F3B2A0766D98FC38EEA9875EFAC5C11EF3EF44BF6A3A611999BCB',
          exponent: 0,
          aliases: [
            'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C'
          ]
        },
        {
          denom: 'medas',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CF8A3CB2941F3B2A0766D98FC38EEA9875EFAC5C11EF3EF44BF6A3A611999BCB',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }
      ],
      keywords: ['medas']
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/EEFD4DA7CC6B691CF55CBA70895C900876517AB6F02C03B3A7E4BE014158F662',
          exponent: 0,
          aliases: [
            'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B'
          ]
        },
        {
          denom: 'phmn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EEFD4DA7CC6B691CF55CBA70895C900876517AB6F02C03B3A7E4BE014158F662',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/E13308DFE3904F02636DBA83352C0750106EA4F07188C5BFD93445B368CD2564',
          exponent: 0,
          aliases: [
            'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55'
          ]
        },
        {
          denom: 'amber',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E13308DFE3904F02636DBA83352C0750106EA4F07188C5BFD93445B368CD2564',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }
      ]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [
        {
          denom:
            'ibc/2D0F5E2EDB42F3B81BFE70ADE62C39E09E3C3FEC1B82946168236D1F5CEEF6E9',
          exponent: 0,
          aliases: [
            'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163'
          ]
        },
        {
          denom: 'nom',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2D0F5E2EDB42F3B81BFE70ADE62C39E09E3C3FEC1B82946168236D1F5CEEF6E9',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }
      ],
      keywords: ['dex', 'stablecoin', 'bridge', 'staking']
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/BFB08DCDDACA086F4F896AF4193357D4B8BD022534E881FE80EF601416CB11EB',
          exponent: 0,
          aliases: [
            'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC'
          ]
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BFB08DCDDACA086F4F896AF4193357D4B8BD022534E881FE80EF601416CB11EB',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Dyson Protocol',
      denom_units: [
        {
          denom:
            'ibc/F09665103129781A5FB2FB10CC478C78A57950F944B4C51BA8F8E185611FB03A',
          exponent: 0,
          aliases: [
            'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F09665103129781A5FB2FB10CC478C78A57950F944B4C51BA8F8E185611FB03A',
      name: 'Dyson Protocol',
      display:
        'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/18B1C8D108A2EE74E99739EDC11E26AAC93FF291C7812AA64D5C388CA6486F38',
          exponent: 0,
          aliases: [
            'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099'
          ]
        },
        {
          denom: 'hopers',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/18B1C8D108A2EE74E99739EDC11E26AAC93FF291C7812AA64D5C388CA6486F38',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/BA3B04B20FBAA3F153078A7D6C0427CA65222B551AEA295418D5776231E6742F',
          exponent: 0,
          aliases: [
            'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F'
          ]
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BA3B04B20FBAA3F153078A7D6C0427CA65222B551AEA295418D5776231E6742F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom:
            'ibc/A1B8A2BD310FA70C3EE9145C1240E935808F2C2008EA0C33EF52DE12E2BE6233',
          exponent: 0,
          aliases: [
            'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF'
          ]
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A1B8A2BD310FA70C3EE9145C1240E935808F2C2008EA0C33EF52DE12E2BE6233',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }
      ]
    },
    {
      description:
        "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
      denom_units: [
        {
          denom:
            'ibc/9A65CDF6A4FFFB2235150A08296580A4F6C3B1C1F4818ECF83E57AECC5BDF6E9',
          exponent: 0,
          aliases: [
            'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4'
          ]
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9A65CDF6A4FFFB2235150A08296580A4F6C3B1C1F4818ECF83E57AECC5BDF6E9',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }
      ]
    },
    {
      description:
        'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom:
            'ibc/D8336E1AE7A91F8D666C51D31845D9C6EA2B94E5B0242209DAD305B25B2AF5DD',
          exponent: 0,
          aliases: [
            'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F'
          ]
        },
        {
          denom: 'canto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D8336E1AE7A91F8D666C51D31845D9C6EA2B94E5B0242209DAD305B25B2AF5DD',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [
        {
          denom:
            'ibc/853DADD1AC5A5D1DF346EDC0305205C88AE81845B4ECF6F5F21CDC149B86B879',
          exponent: 0,
          aliases: [
            'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83'
          ]
        },
        {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/853DADD1AC5A5D1DF346EDC0305205C88AE81845B4ECF6F5F21CDC149B86B879',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }
      ]
    },
    {
      description: 'WYND DAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/A49B5C93D77681ECA1345500601701A8F24D22750117188C4F494DE18C9BA12F',
          exponent: 0,
          aliases: [
            'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3'
          ]
        },
        {
          denom: 'wynd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A49B5C93D77681ECA1345500601701A8F24D22750117188C4F494DE18C9BA12F',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/0F3DB005BDF88ED81BCCA15AAFFBC05AAAFF42520C03B0BFC3317E445E589B31',
          exponent: 0,
          aliases: [
            'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A'
          ]
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0F3DB005BDF88ED81BCCA15AAFFBC05AAAFF42520C03B0BFC3317E445E589B31',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/B2128324D4982F9E7ADF25F46899AF6E2D48FBBD815A5E03DF87A9D42898C47D',
          exponent: 0,
          aliases: [
            'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C'
          ]
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B2128324D4982F9E7ADF25F46899AF6E2D48FBBD815A5E03DF87A9D42898C47D',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        }
      ]
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/CF0B551A803D04510F5736B95F2BB3B97F6685BE7C70B1EAEFDE658EF4D58E0D',
          exponent: 0,
          aliases: [
            'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580'
          ]
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CF0B551A803D04510F5736B95F2BB3B97F6685BE7C70B1EAEFDE658EF4D58E0D',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/385F722882A0E36573EC2619AFF79475D77D1FCB72F5F3F569A56B4C60FF62A3',
          exponent: 0,
          aliases: [
            'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5'
          ]
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/385F722882A0E36573EC2619AFF79475D77D1FCB72F5F3F569A56B4C60FF62A3',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B1B66745BF23158DBB77DA1C6AAD58EEF431417665CC1B376CD526A6036B712E',
          exponent: 0,
          aliases: [
            'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372'
          ]
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B1B66745BF23158DBB77DA1C6AAD58EEF431417665CC1B376CD526A6036B712E',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
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
            'ibc/5CAFD05A1C5D50D07C6CDD58BED409D369B49715EDA59A0F19181D780021EB0B',
          exponent: 0,
          aliases: [
            'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01'
          ]
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5CAFD05A1C5D50D07C6CDD58BED409D369B49715EDA59A0F19181D780021EB0B',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }
      ]
    },
    {
      description: 'nRide Token',
      denom_units: [
        {
          denom:
            'ibc/96BF7C4018572E1A2D889F90AD4972526727931D9E2C4FE5A0B7448F2AC4BC79',
          exponent: 0,
          aliases: [
            'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C'
          ]
        },
        {
          denom: 'nride',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/96BF7C4018572E1A2D889F90AD4972526727931D9E2C4FE5A0B7448F2AC4BC79',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }
      ]
    },
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom:
            'ibc/5EACE5F20580879B5680532B7C40399F1E43397EB47DF490246AE2E053F1CCFF',
          exponent: 0,
          aliases: [
            'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F'
          ]
        },
        {
          denom: 'ebl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5EACE5F20580879B5680532B7C40399F1E43397EB47DF490246AE2E053F1CCFF',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/D2407FD23572591565FBA2AFE3A545D84F53F7051DF886157EA80E5D065BACA1',
          exponent: 0,
          aliases: [
            'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC'
          ]
        },
        {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D2407FD23572591565FBA2AFE3A545D84F53F7051DF886157EA80E5D065BACA1',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/0C12202E349B5EE1065EFA3110A40B9F40139A243D3AAB67ADD675A231318989',
          exponent: 0,
          aliases: [
            'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A'
          ]
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0C12202E349B5EE1065EFA3110A40B9F40139A243D3AAB67ADD675A231318989',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [
        {
          denom:
            'ibc/00FDF28C522048892A20BC0CA54F1390C83DE8A74ADD1F9A10E0798FE1C2081A',
          exponent: 0,
          aliases: [
            'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206'
          ]
        },
        {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/00FDF28C522048892A20BC0CA54F1390C83DE8A74ADD1F9A10E0798FE1C2081A',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }
      ]
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denom_units: [
        {
          denom:
            'ibc/FA068860AC97BF2FA640D5A6043AAF6F8C2A7401F06D02F0F9E0194840AD2F92',
          exponent: 0,
          aliases: [
            'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6'
          ]
        },
        {
          denom: 'fox',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA068860AC97BF2FA640D5A6043AAF6F8C2A7401F06D02F0F9E0194840AD2F92',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }
      ]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/A4AC9198D5EC86F1E32DDBE5FA6C2DD8979EC8004382125B7222CE44C0AD2CF7',
          exponent: 0,
          aliases: [
            'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D'
          ]
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A4AC9198D5EC86F1E32DDBE5FA6C2DD8979EC8004382125B7222CE44C0AD2CF7',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }
      ]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [
        {
          denom:
            'ibc/CCE80F8908DEAF818B90DD5D2D1D98E08D7D0192B9E9CA73350D1BAE5C55D4A6',
          exponent: 0,
          aliases: [
            'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28'
          ]
        },
        {
          denom: 'ARKH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CCE80F8908DEAF818B90DD5D2D1D98E08D7D0192B9E9CA73350D1BAE5C55D4A6',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/63B90458263237BE0E75C2183C91DE27138DEDA458E323E1634B107291414AB2',
          exponent: 0,
          aliases: [
            'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC'
          ]
        },
        {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/63B90458263237BE0E75C2183C91DE27138DEDA458E323E1634B107291414AB2',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }
      ]
    },
    {
      description:
        'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [
        {
          denom:
            'ibc/C0D9F7F9FFAA55A8972E718BFCB7C5097AD86D58486523E285E393A11118891E',
          exponent: 0,
          aliases: [
            'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9'
          ]
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C0D9F7F9FFAA55A8972E718BFCB7C5097AD86D58486523E285E393A11118891E',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/A2A2201277583B01199F50754E37D8E606CBF2B81CDF9F40210AAB6980FC5991',
          exponent: 0,
          aliases: [
            'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D'
          ]
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A2A2201277583B01199F50754E37D8E606CBF2B81CDF9F40210AAB6980FC5991',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }
      ]
    },
    {
      description: 'Evmos Guardians governance token.',
      denom_units: [
        {
          denom:
            'ibc/942C93A4E7274FD379EA840267DFB25CFCED51AB2E01B6F4DE175AEEC5D46BA1',
          exponent: 0,
          aliases: [
            'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA'
          ]
        },
        {
          denom: 'grdn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/942C93A4E7274FD379EA840267DFB25CFCED51AB2E01B6F4DE175AEEC5D46BA1',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }
      ]
    },
    {
      description: 'Mini Punks Token',
      denom_units: [
        {
          denom:
            'ibc/96AFD3538362AE86098ADF677984C28399836752F2AE228B0A3CCBD786E5C2BB',
          exponent: 0,
          aliases: [
            'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E'
          ]
        },
        {
          denom: 'mnpu',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/96AFD3538362AE86098ADF677984C28399836752F2AE228B0A3CCBD786E5C2BB',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }
      ]
    },
    {
      description: 'Shiba Cosmos',
      denom_units: [
        {
          denom:
            'ibc/B3BC3EFBBCDAA66322ED26E86CC061EA4EDB4B0B434804C36047BABB9C336646',
          exponent: 0,
          aliases: [
            'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8'
          ]
        },
        {
          denom: 'shibac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B3BC3EFBBCDAA66322ED26E86CC061EA4EDB4B0B434804C36047BABB9C336646',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }
      ]
    },
    {
      description: 'Sikoba Governance Token',
      denom_units: [
        {
          denom:
            'ibc/29F21162382A80981DA10B305082B05FDA99CECE4FC3E8323133A11C7B2AC6C4',
          exponent: 0,
          aliases: [
            'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E'
          ]
        },
        {
          denom: 'sikoba',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/29F21162382A80981DA10B305082B05FDA99CECE4FC3E8323133A11C7B2AC6C4',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }
      ]
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom:
            'ibc/04952DD9D68AC7CD69FD4F1C6A9233AE403046F836412848B8ADDB681941018F',
          exponent: 0,
          aliases: [
            'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68'
          ]
        },
        {
          denom: 'nct',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/04952DD9D68AC7CD69FD4F1C6A9233AE403046F836412848B8ADDB681941018F',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }
      ]
    },
    {
      description: 'Celestims',
      denom_units: [
        {
          denom:
            'ibc/4C25A3D00F197FF6C207D4E3F65D24CAC9A279EF41FCE0BC8C178DBF9D4DD717',
          exponent: 0,
          aliases: [
            'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA'
          ]
        },
        {
          denom: 'clst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4C25A3D00F197FF6C207D4E3F65D24CAC9A279EF41FCE0BC8C178DBF9D4DD717',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }
      ]
    },
    {
      description: 'The First Doge on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/F723C6BA18B7DC6219FD0F9FAAA170DCDAE5D79B109C1F67EF83EC61331C7F6D',
          exponent: 0,
          aliases: [
            'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156'
          ]
        },
        {
          denom: 'osdoge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F723C6BA18B7DC6219FD0F9FAAA170DCDAE5D79B109C1F67EF83EC61331C7F6D',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }
      ]
    },
    {
      description: 'Apemos',
      denom_units: [
        {
          denom:
            'ibc/62C4AD33169AF4507EE59389C112DFA5A6BFD65B7A75AB8951C4165D67BD41DB',
          exponent: 0,
          aliases: [
            'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D'
          ]
        },
        {
          denom: 'apemos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/62C4AD33169AF4507EE59389C112DFA5A6BFD65B7A75AB8951C4165D67BD41DB',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }
      ]
    },
    {
      description: "Evmos Guardians' Invaders DAO token.",
      denom_units: [
        {
          denom:
            'ibc/1299E508C4A8B9F7433C2E1208A4B798E2CF0122AFCF16349B6F1751D7AC2349',
          exponent: 0,
          aliases: [
            'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54'
          ]
        },
        {
          denom: 'invdrs',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1299E508C4A8B9F7433C2E1208A4B798E2CF0122AFCF16349B6F1751D7AC2349',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }
      ]
    },
    {
      description: 'Doge Apr',
      denom_units: [
        {
          denom:
            'ibc/59064A56985319F4281FBEA826B7609437B4D124FAF256D8C3B6B2FCB5606DB6',
          exponent: 0,
          aliases: [
            'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250'
          ]
        },
        {
          denom: 'doga',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/59064A56985319F4281FBEA826B7609437B4D124FAF256D8C3B6B2FCB5606DB6',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }
      ]
    },
    {
      description: 'Catmos',
      denom_units: [
        {
          denom:
            'ibc/7B2C0B2D2F340B9B8A086B4265C081E7C868056353295040B5D995B1C69E98FB',
          exponent: 0,
          aliases: [
            'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835'
          ]
        },
        {
          denom: 'catmos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7B2C0B2D2F340B9B8A086B4265C081E7C868056353295040B5D995B1C69E98FB',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denom_units: [
        {
          denom:
            'ibc/5979EF907CC20BA28A321B09D7BF7D80A4EE2D1C6921732F2ABA62F7FAE93370',
          exponent: 0,
          aliases: [
            'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A'
          ]
        },
        {
          denom: 'summit',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5979EF907CC20BA28A321B09D7BF7D80A4EE2D1C6921732F2ABA62F7FAE93370',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }
      ]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom:
            'ibc/B00EE95DB5CA20CE19F1892A5E405911FCC97D7E70A62AA7F81BA7C818F51C0A',
          exponent: 0,
          aliases: [
            'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F'
          ]
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B00EE95DB5CA20CE19F1892A5E405911FCC97D7E70A62AA7F81BA7C818F51C0A',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }
      ]
    },
    {
      description: 'Spacer',
      denom_units: [
        {
          denom:
            'ibc/1A7A7CEE3BB10BF3C8191E4D5A5511990F41F728233F6206097C569FEF6EB8A8',
          exponent: 0,
          aliases: [
            'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C'
          ]
        },
        {
          denom: 'spacer',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1A7A7CEE3BB10BF3C8191E4D5A5511990F41F728233F6206097C569FEF6EB8A8',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }
      ]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denom_units: [
        {
          denom:
            'ibc/B70422DCE718A1B60C8AB72B8D65260E3F031C75FD9AAF869F7F904458931EDC',
          exponent: 0,
          aliases: [
            'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29'
          ]
        },
        {
          denom: 'light',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B70422DCE718A1B60C8AB72B8D65260E3F031C75FD9AAF869F7F904458931EDC',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/F9B4696D5C14002838EDF7155C23FD2652C0BD55249D96C93993CD78F77E622A',
          exponent: 0,
          aliases: [
            'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7'
          ]
        },
        {
          denom: 'silk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F9B4696D5C14002838EDF7155C23FD2652C0BD55249D96C93993CD78F77E622A',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }
      ]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denom_units: [
        {
          denom:
            'ibc/E3E910C802F20BCCE1122CDE006C920C83256774E404B4F0C2C6BC40B8373D48',
          exponent: 0,
          aliases: [
            'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF'
          ]
        },
        {
          denom: 'mile',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E3E910C802F20BCCE1122CDE006C920C83256774E404B4F0C2C6BC40B8373D48',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denom_units: [
        {
          denom:
            'ibc/B07280E91A68AF8581E06B77A9E49B04762F0C30615283832C1F74216D3CFA32',
          exponent: 0,
          aliases: [
            'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B'
          ]
        },
        {
          denom: 'manna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B07280E91A68AF8581E06B77A9E49B04762F0C30615283832C1F74216D3CFA32',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }
      ]
    },
    {
      description:
        "Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin's model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.",
      denom_units: [
        {
          denom:
            'ibc/F850999198C687DEB97C64AF826C02FFC9C8E2028E9FC06C2C5D7B0E2AAAA1E4',
          exponent: 0,
          aliases: [
            'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D'
          ]
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F850999198C687DEB97C64AF826C02FFC9C8E2028E9FC06C2C5D7B0E2AAAA1E4',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }
      ]
    },
    {
      description: 'Void',
      denom_units: [
        {
          denom:
            'ibc/3A3FDC872B05ADCA95C77E6CF3695715D7DC12FE10E26B34FAF8899E9EDC03EE',
          exponent: 0,
          aliases: [
            'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960'
          ]
        },
        {
          denom: 'void',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3A3FDC872B05ADCA95C77E6CF3695715D7DC12FE10E26B34FAF8899E9EDC03EE',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/2D3C084EF8B3AFB9B75A896D86AE7951922F699C861E28C6310856E1A42BAE7B',
          exponent: 0,
          aliases: [
            'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A'
          ]
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2D3C084EF8B3AFB9B75A896D86AE7951922F699C861E28C6310856E1A42BAE7B',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }
      ]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [
        {
          denom:
            'ibc/42BDE363262246EFD907589331871DAE6920FCD75186877E2461C6664B6BE7E0',
          exponent: 0,
          aliases: [
            'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8'
          ]
        },
        {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/42BDE363262246EFD907589331871DAE6920FCD75186877E2461C6664B6BE7E0',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }
      ],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denom_units: [
        {
          denom:
            'ibc/CCDB54AA126DC63C359344F7A30F2406E1C78BE8E8EB5C642E6DD3E25E5777F4',
          exponent: 0,
          aliases: [
            'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6'
          ]
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CCDB54AA126DC63C359344F7A30F2406E1C78BE8E8EB5C642E6DD3E25E5777F4',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description: 'Silica',
      denom_units: [
        {
          denom:
            'ibc/095DB5526E7181214EC35F4B2B5C8B47359571FC2917CFD578FB9392A875EBC7',
          exponent: 0,
          aliases: [
            'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07'
          ]
        },
        {
          denom: 'silica',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/095DB5526E7181214EC35F4B2B5C8B47359571FC2917CFD578FB9392A875EBC7',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }
      ]
    },
    {
      description: 'Pepec',
      denom_units: [
        {
          denom:
            'ibc/FADA997BD7DE8000085D86B538D3788DEE3C47C505DDBDDFB034E8641E1E3D06',
          exponent: 0,
          aliases: [
            'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93'
          ]
        },
        {
          denom: 'pepec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FADA997BD7DE8000085D86B538D3788DEE3C47C505DDBDDFB034E8641E1E3D06',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }
      ]
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/51D38E6C8A6E586C7C064041964CA2AEDFC5E265989E61E062ABD0C0232DD85E',
          exponent: 0,
          aliases: [
            'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B'
          ]
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/51D38E6C8A6E586C7C064041964CA2AEDFC5E265989E61E062ABD0C0232DD85E',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/20F466EFE3320DB60CEC68E81EF071D61BD1B6E4488576BF3F3E74F563D27AEE',
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
      type_asset: 'sdk.coin',
      address:
        'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'ibc/20F466EFE3320DB60CEC68E81EF071D61BD1B6E4488576BF3F3E74F563D27AEE',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }
      ],
      coingecko_id: 'ibc-index',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description:
        'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denom_units: [
        {
          denom:
            'ibc/CA735A7695150E79FC48766B8D6DE19DBE00505B37E9F1C77DF05E4DDE76B056',
          exponent: 0,
          aliases: [
            'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A'
          ]
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CA735A7695150E79FC48766B8D6DE19DBE00505B37E9F1C77DF05E4DDE76B056',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      ]
    },
    {
      description:
        'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denom_units: [
        {
          denom:
            'ibc/5C868535AC1EE7FDEE4125399E54C9A1AA0212BDB3B30606893C709D36215A90',
          exponent: 0,
          aliases: [
            'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222'
          ]
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5C868535AC1EE7FDEE4125399E54C9A1AA0212BDB3B30606893C709D36215A90',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      ]
    },
    {
      description:
        "sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become's eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.",
      denom_units: [
        {
          denom:
            'ibc/FFE133CB2C299C07163CEE73F3DBF51D5C758549F88265AD1FB9B9280709C8E9',
          exponent: 0,
          aliases: [
            'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46'
          ]
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FFE133CB2C299C07163CEE73F3DBF51D5C758549F88265AD1FB9B9280709C8E9',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FB879CDE29CE93D95F906019A2DABFF7B079C60D4D986EF9AA4BBCA7D4AB0976',
          exponent: 0,
          aliases: [
            'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C'
          ]
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FB879CDE29CE93D95F906019A2DABFF7B079C60D4D986EF9AA4BBCA7D4AB0976',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }
      ]
    },
    {
      description: 'The native token of Gitopia',
      denom_units: [
        {
          denom:
            'ibc/384D6A7EE8AF3280996F23B19344580FC83DEA4E1E8FCD67DA9D3963A260EDAE',
          exponent: 0,
          aliases: [
            'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3'
          ]
        },
        {
          denom: 'LORE',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/384D6A7EE8AF3280996F23B19344580FC83DEA4E1E8FCD67DA9D3963A260EDAE',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }
      ]
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denom_units: [
        {
          denom:
            'ibc/84C2AC521CB9EDE0C979503F2233E18C92A24D91ED5408CAD7F71E3FA52A5179',
          exponent: 0,
          aliases: [
            'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0'
          ]
        },
        {
          denom: 'roar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/84C2AC521CB9EDE0C979503F2233E18C92A24D91ED5408CAD7F71E3FA52A5179',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FA164FB815B33A3F65B5BB53229DBAB7803EC6874AD20F780BC3BC2C88610DCF',
          exponent: 0,
          aliases: [
            'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F'
          ]
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA164FB815B33A3F65B5BB53229DBAB7803EC6874AD20F780BC3BC2C88610DCF',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
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
            'ibc/9A50FA450E6C8437C1AE8F999294613E875987E27E3A89DE96DAD6FCCED80DBC',
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
      type_asset: 'sdk.coin',
      address:
        'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'ibc/9A50FA450E6C8437C1AE8F999294613E875987E27E3A89DE96DAD6FCCED80DBC',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/5D656270EB15A4C9CD2073E15DCE2013C41EADE797F3C6E861410C32B06EE265',
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
      base: 'ibc/5D656270EB15A4C9CD2073E15DCE2013C41EADE797F3C6E861410C32B06EE265',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/75B44197C84F4109BB0CFFA976357CCAF2726C24B00219C385AC8DC69C3128D3',
          exponent: 0,
          aliases: [
            'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3'
          ]
        },
        {
          denom: 'cub',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/75B44197C84F4109BB0CFFA976357CCAF2726C24B00219C385AC8DC69C3128D3',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }
      ]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/2C35778FE3AB3FA95E860434C11E5CA9D5E335AE5BD2682F4340E73BFD20017F',
          exponent: 0,
          aliases: [
            'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E'
          ]
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2C35778FE3AB3FA95E860434C11E5CA9D5E335AE5BD2682F4340E73BFD20017F',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/1358053AB88CA0573269806959237E4668DF798B74FA4D865FAC4913E936BA45',
          exponent: 0,
          aliases: [
            'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682'
          ]
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1358053AB88CA0573269806959237E4668DF798B74FA4D865FAC4913E936BA45',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denom_units: [
        {
          denom:
            'ibc/864A466B2FDCFA9B7D4A0161732674C78CDCF3AA39D1E50316F47E98A32ADF90',
          exponent: 0,
          aliases: [
            'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE'
          ]
        },
        {
          denom: 'casa',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/864A466B2FDCFA9B7D4A0161732674C78CDCF3AA39D1E50316F47E98A32ADF90',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom:
            'ibc/44C40438B0B414922044897FFFE800835A56F9CFF072DBBE2B020E39F2ACEEB2',
          exponent: 0,
          aliases: [
            'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516'
          ]
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/44C40438B0B414922044897FFFE800835A56F9CFF072DBBE2B020E39F2ACEEB2',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/113AAF7CFCD12E0814416D634B17A9697A4920430133773B07F07C51FC32FF71',
          exponent: 0,
          aliases: [
            'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C'
          ]
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/113AAF7CFCD12E0814416D634B17A9697A4920430133773B07F07C51FC32FF71',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/CA9D1E26F5FFD2D168731EE9B3D0BDD07EEB50A9BED504F4B93CC2232404CA83',
          exponent: 0,
          aliases: [
            'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CA9D1E26F5FFD2D168731EE9B3D0BDD07EEB50A9BED504F4B93CC2232404CA83',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/DC625C72488F2F1237216A2E7B867C93E94F0E3E57A73C9E6F8CE2EB2DC1BF32',
          exponent: 0,
          aliases: [
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477'
          ]
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DC625C72488F2F1237216A2E7B867C93E94F0E3E57A73C9E6F8CE2EB2DC1BF32',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }
      ]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom:
            'ibc/9E762595D8B005EA4C79E79F4E3D97366FCA31201A96C408113A0D22BA49999C',
          exponent: 0,
          aliases: [
            'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85'
          ]
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
      type_asset: 'ics20',
      base: 'ibc/9E762595D8B005EA4C79E79F4E3D97366FCA31201A96C408113A0D22BA49999C',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [
        {
          denom:
            'ibc/AF48F63B9265A8BA80B714B58458987925C038B0C517C8790D65EC7105271339',
          exponent: 0,
          aliases: [
            'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38'
          ]
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AF48F63B9265A8BA80B714B58458987925C038B0C517C8790D65EC7105271339',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }
      ]
    },
    {
      description:
        'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denom_units: [
        {
          denom:
            'ibc/5FA3971B899BE86E322FC299743B8BC2D73D5C98B7F721116518A6658803938D',
          exponent: 0,
          aliases: [
            'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E'
          ]
        },
        {
          denom: 'watr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5FA3971B899BE86E322FC299743B8BC2D73D5C98B7F721116518A6658803938D',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }
      ]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [
        {
          denom:
            'ibc/99F1E68EDBD93FB828954A1BB398C877A6E7E75FC2C65364B56CB2900057E921',
          exponent: 0,
          aliases: [
            'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13'
          ]
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/99F1E68EDBD93FB828954A1BB398C877A6E7E75FC2C65364B56CB2900057E921',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }
      ]
    },
    {
      description:
        'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denom_units: [
        {
          denom:
            'ibc/2A355FC92C66709803AA554518A10BDD9F92604022CD15DE7DDBF1C062BE9736',
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
      base: 'ibc/2A355FC92C66709803AA554518A10BDD9F92604022CD15DE7DDBF1C062BE9736',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/A59EA89D8D9098698794E6511AD8B278C12A4ED87D1A617A435212CA17A8BA7E',
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
      type_asset: 'sdk.coin',
      address:
        'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'ibc/A59EA89D8D9098698794E6511AD8B278C12A4ED87D1A617A435212CA17A8BA7E',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom:
            'ibc/99E39DC4835400E6ABE07C8006F557911921924159DBBD936D2BE8C7C9963466',
          exponent: 0,
          aliases: [
            'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D'
          ]
        },
        {
          denom: 'sei',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/99E39DC4835400E6ABE07C8006F557911921924159DBBD936D2BE8C7C9963466',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [
        {
          denom:
            'ibc/229EF0C49295F62EE5EDA926E46BC5D03691349A1AEBDBE42F60F3ABB62688FA',
          exponent: 0,
          aliases: [
            'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208'
          ]
        },
        {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/229EF0C49295F62EE5EDA926E46BC5D03691349A1AEBDBE42F60F3ABB62688FA',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom:
            'ibc/F20F9CED86828C4A0E8BFABD28D857D9E6F888DD04E79B04B607F25006BCBF80',
          exponent: 0,
          aliases: [
            'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED'
          ]
        },
        {
          denom: 'pasg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F20F9CED86828C4A0E8BFABD28D857D9E6F888DD04E79B04B607F25006BCBF80',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/A9F2FD87620F56146BCC198573D00C7B6A3DB459608F479531714CC7B8F8B805',
          exponent: 0,
          aliases: [
            'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B'
          ]
        },
        {
          denom: 'stsomm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A9F2FD87620F56146BCC198573D00C7B6A3DB459608F479531714CC7B8F8B805',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }
      ]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [
        {
          denom:
            'ibc/360DDA2657B2CE8ABFF5840F68315C49FC1BD7094CA33F79B38380AF67E22495',
          exponent: 0,
          aliases: [
            'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA'
          ]
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/360DDA2657B2CE8ABFF5840F68315C49FC1BD7094CA33F79B38380AF67E22495',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }
      ]
    },
    {
      description: 'The Official Bonk Inu token',
      denom_units: [
        {
          denom:
            'ibc/5414F0E491188A46D673409FF457BA5E2D0A958C326911625984C71141FD1922',
          exponent: 0,
          aliases: [
            'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E'
          ]
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5414F0E491188A46D673409FF457BA5E2D0A958C326911625984C71141FD1922',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }
      ]
    },
    {
      description:
        'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [
        {
          denom:
            'ibc/84665B27A6F1DCA2DD272DD9C1B70F2F3523EDB26F21BD2239E491C53E009CD9',
          exponent: 0,
          aliases: [
            'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C'
          ]
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/84665B27A6F1DCA2DD272DD9C1B70F2F3523EDB26F21BD2239E491C53E009CD9',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
        }
      ]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [
        {
          denom:
            'ibc/0050E712DCBC7B82B58F7642443D44CD993AED097C4DB6140DC94105F3B6594F',
          exponent: 0,
          aliases: [
            'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5'
          ]
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0050E712DCBC7B82B58F7642443D44CD993AED097C4DB6140DC94105F3B6594F',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }
      ]
    },
    {
      description:
        'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [
        {
          denom:
            'ibc/A2EEA29A2B4BBBE0305A3AE0F68C9813B198A8C7C5F39453E8EA563740E02F08',
          exponent: 0,
          aliases: [
            'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE'
          ]
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A2EEA29A2B4BBBE0305A3AE0F68C9813B198A8C7C5F39453E8EA563740E02F08',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            dark_mode: true
          }
        }
      ]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/107C57F2AC87B537B39673D51292CAAA3F4E491B8F42EF4D906740F5063BCB18',
          exponent: 0,
          aliases: [
            'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B'
          ]
        },
        {
          denom: 'mnta',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/107C57F2AC87B537B39673D51292CAAA3F4E491B8F42EF4D906740F5063BCB18',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4DC2BB18DBB9A87421EFBCF96C91075D45AA1B525367CA435D999A5350930ACD',
          exponent: 0,
          aliases: [
            'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9'
          ]
        },
        {
          denom: 'dgl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4DC2BB18DBB9A87421EFBCF96C91075D45AA1B525367CA435D999A5350930ACD',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }
      ]
    },
    {
      description:
        'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [
        {
          denom:
            'ibc/0B91F778B2411F41B8D5DAD35770328F07B114A7B3939D627BA7A062146520E4',
          exponent: 0,
          aliases: [
            'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695'
          ]
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0B91F778B2411F41B8D5DAD35770328F07B114A7B3939D627BA7A062146520E4',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ]
    },
    {
      description:
        'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [
        {
          denom:
            'ibc/B6E6AD761661C0968BBAE03FC13DA822D0E0EB26F3A710CCC7F9BE8942567B2F',
          exponent: 0,
          aliases: [
            'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC'
          ]
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B6E6AD761661C0968BBAE03FC13DA822D0E0EB26F3A710CCC7F9BE8942567B2F',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/2A067C5633225FD7D6E149938FA71A6148B352EFBD527F91EF67775D6DF54A5C',
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
      base: 'ibc/2A067C5633225FD7D6E149938FA71A6148B352EFBD527F91EF67775D6DF54A5C',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description:
        'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [
        {
          denom:
            'ibc/7BD9A8B4F6B70055821D5693C3E7EB1081642B9C956795A762A6AF4EBB3A5F23',
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
      base: 'ibc/7BD9A8B4F6B70055821D5693C3E7EB1081642B9C956795A762A6AF4EBB3A5F23',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
      ]
    },
    {
      description: 'The native staking token of XPLA.',
      denom_units: [
        {
          denom:
            'ibc/868B84AA3907A235640839CE4BDC7A3B91CF56B7BE4CF83C9F1D24692F540E5F',
          exponent: 0,
          aliases: [
            'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8'
          ]
        },
        {
          denom: 'xpla',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/868B84AA3907A235640839CE4BDC7A3B91CF56B7BE4CF83C9F1D24692F540E5F',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }
      ]
    },
    {
      description:
        'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [
        {
          denom:
            'ibc/B19DCE3E2EC4562EB2C8B49D9C09EEACDC74B0CA7A3DA436ACDC96616D2E6E04',
          exponent: 0,
          aliases: [
            'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6'
          ]
        },
        {
          denom: 'oin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B19DCE3E2EC4562EB2C8B49D9C09EEACDC74B0CA7A3DA436ACDC96616D2E6E04',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }
      ]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [
        {
          denom:
            'ibc/1C09744DBFAF0E8C4C185F6009C8114E117D3751E08B2C91FF8737F77E8D6E91',
          exponent: 0,
          aliases: [
            'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71'
          ]
        },
        {
          denom: 'neok',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1C09744DBFAF0E8C4C185F6009C8114E117D3751E08B2C91FF8737F77E8D6E91',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }
      ]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [
        {
          denom:
            'ibc/B2F64206A3F3DFA82715D57F77C605D3C41BF57F3153D0E67B7CBAD2A1DF5385',
          exponent: 0,
          aliases: [
            'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF'
          ]
        },
        {
          denom: 'rio',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B2F64206A3F3DFA82715D57F77C605D3C41BF57F3153D0E67B7CBAD2A1DF5385',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }
      ]
    },
    {
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'ibc/93250C5210C17A2F9E866A6A1431028B90FC2E38CF54025E085CC6AEE0D66656',
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
      type_asset: 'sdk.coin',
      base: 'ibc/93250C5210C17A2F9E866A6A1431028B90FC2E38CF54025E085CC6AEE0D66656',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }
      ],
      coingecko_id: 'collateralized-debt-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'ibc/B9D7B03F021DFC95C2119779C004E9637F7DD4A7E0BEFFDA851BA1775BB9F72D',
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
      type_asset: 'sdk.coin',
      base: 'ibc/B9D7B03F021DFC95C2119779C004E9637F7DD4A7E0BEFFDA851BA1775BB9F72D',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }
      ],
      coingecko_id: 'membrane',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [
        {
          denom:
            'ibc/D9DDFE90764BE0D513769E6A7952DCC3D6FC5EC7509237954EFB9C86A6AFED9F',
          exponent: 0,
          aliases: [
            'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA'
          ]
        },
        {
          denom: 'sge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D9DDFE90764BE0D513769E6A7952DCC3D6FC5EC7509237954EFB9C86A6AFED9F',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom:
            'ibc/EFC2E1C1D5152499896AF9C55E98911014237CED988F056DC12FD03A734E4FDE',
          exponent: 0,
          aliases: [
            'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862'
          ]
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EFC2E1C1D5152499896AF9C55E98911014237CED988F056DC12FD03A734E4FDE',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom:
            'ibc/D9FD2C174503DC2A761DC183B059861208872D4ADFC3E009B90063035FB19BEE',
          exponent: 0,
          aliases: [
            'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7'
          ]
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D9FD2C174503DC2A761DC183B059861208872D4ADFC3E009B90063035FB19BEE',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/59398E8F440E35BEFAC091ADE7F9C14D956F2DF28949D87281135DB8F5FF2C75',
          exponent: 0,
          aliases: [
            'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B'
          ]
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/59398E8F440E35BEFAC091ADE7F9C14D956F2DF28949D87281135DB8F5FF2C75',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [
        {
          denom:
            'ibc/C0CFFC7F8995378D77CBE0FCAA77003348165DFE4681EEDAFC52CE0E53732CC7',
          exponent: 0,
          aliases: [
            'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A'
          ]
        },
        {
          denom: 'DORA',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C0CFFC7F8995378D77CBE0FCAA77003348165DFE4681EEDAFC52CE0E53732CC7',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }
      ]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom:
            'ibc/2CC246FC58D1FBA0D83C987B0FFF2E687551273B7AD2F600BD5378BC71764FDD',
          exponent: 0,
          aliases: [
            'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65'
          ]
        },
        {
          denom: 'core',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2CC246FC58D1FBA0D83C987B0FFF2E687551273B7AD2F600BD5378BC71764FDD',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }
      ],
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft']
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/276CD1A23496A0224C9F011662397F8ACC4A128BAF5C0D45F91F4FA02087B53B',
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
      base: 'ibc/276CD1A23496A0224C9F011662397F8ACC4A128BAF5C0D45F91F4FA02087B53B',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/E98311BFB9D8D8966B14F6FEDCDEE037D7127ACD1F0B789264F6DA7B6388F561',
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
      base: 'ibc/E98311BFB9D8D8966B14F6FEDCDEE037D7127ACD1F0B789264F6DA7B6388F561',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }
      ]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [
        {
          denom:
            'ibc/0953230E6A58B0E488D59815C7591947E13E95E355C81C3E0BD6C1672609455B',
          exponent: 0,
          aliases: [
            'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9'
          ]
        },
        {
          denom: 'WFX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0953230E6A58B0E488D59815C7591947E13E95E355C81C3E0BD6C1672609455B',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
      ]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/9AD76D14427A8C99942A98736384DDE2FC0DDE334DCC44BDF1791AFFB97875C8',
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
      base: 'ibc/9AD76D14427A8C99942A98736384DDE2FC0DDE334DCC44BDF1791AFFB97875C8',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/62B4BB26997C574A5A0351ED61A30FC4F08A7CBDA798AC4A78B6113408E781B4',
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
      base: 'ibc/62B4BB26997C574A5A0351ED61A30FC4F08A7CBDA798AC4A78B6113408E781B4',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
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
      keywords: ['nois', 'randomness', 'drand', 'wasm']
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [
        {
          denom:
            'ibc/99C06DFA6767D64F3D6F88549C0B3BA095F83181F9C372F43479CD7125D56972',
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
      type_asset: 'sdk.coin',
      base: 'ibc/99C06DFA6767D64F3D6F88549C0B3BA095F83181F9C372F43479CD7125D56972',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom:
            'ibc/F191171C77E4FD1438ED106B8095CA63A818AD66A843DD1468548DD94506DC80',
          exponent: 0,
          aliases: [
            'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7'
          ]
        },
        {
          denom: 'nstk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F191171C77E4FD1438ED106B8095CA63A818AD66A843DD1468548DD94506DC80',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/DA151697608867B9E8441522CF2BC71B58F92D4E8AFD6C5A769DB8FB135B48C0',
          exponent: 0,
          aliases: [
            'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02'
          ]
        },
        {
          denom: 'BRNCH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DA151697608867B9E8441522CF2BC71B58F92D4E8AFD6C5A769DB8FB135B48C0',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }
      ]
    },
    {
      description:
        'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denom_units: [
        {
          denom:
            'ibc/67F0CF880EF3953B0BC47C29561A4F8589499E7C8396980378A0B82E829B6D62',
          exponent: 0,
          aliases: [
            'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5'
          ]
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/67F0CF880EF3953B0BC47C29561A4F8589499E7C8396980378A0B82E829B6D62',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom:
            'ibc/52C26285125768598C4B5C1307322E732C1F9564B3B7A0E850F8FF5F0278129B',
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
      type_asset: 'sdk.coin',
      base: 'ibc/52C26285125768598C4B5C1307322E732C1F9564B3B7A0E850F8FF5F0278129B',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom:
            'ibc/CA80CD7832A1AB3E503CA87EF0B4B89D8617C8B03669BE110536ECA861AAE954',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/CA80CD7832A1AB3E503CA87EF0B4B89D8617C8B03669BE110536ECA861AAE954',
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
      keywords: ['osmosis_unlisted'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [
        {
          denom:
            'ibc/7888C7A129FC059F0321C09963588D653165100ADD75863A577746A92C615DA6',
          exponent: 0,
          aliases: [
            'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D'
          ]
        },
        {
          denom: 'qwoyn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7888C7A129FC059F0321C09963588D653165100ADD75863A577746A92C615DA6',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }
      ]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/7826292C305DFC02118D9E8AF175304E9D0C059576E9417A2E4263D69D072FD2',
          exponent: 0,
          aliases: [
            'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7826292C305DFC02118D9E8AF175304E9D0C059576E9417A2E4263D69D072FD2',
      name: 'Bostrom Hydrogen',
      display:
        'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }
      ]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [
        {
          denom:
            'ibc/BD9B098AA684F5BD2AD25882A7B1E2E87713D86CAE78C97D198DEE59F1C3E219',
          exponent: 0,
          aliases: [
            'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BD9B098AA684F5BD2AD25882A7B1E2E87713D86CAE78C97D198DEE59F1C3E219',
      name: 'Bostrom Tocyb',
      display:
        'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/E455ABA538050F48407FD8EACDAF188287940036A008138B96680D76619A3F83',
          exponent: 0,
          aliases: [
            'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA'
          ]
        },
        {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E455ABA538050F48407FD8EACDAF188287940036A008138B96680D76619A3F83',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/9931E92269314E4130C271BDDCCE9A05E2729B66100CB3D9372D29E4147D0E18',
          exponent: 0,
          aliases: [
            'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424'
          ]
        },
        {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9931E92269314E4130C271BDDCCE9A05E2729B66100CB3D9372D29E4147D0E18',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }
      ]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [
        {
          denom:
            'ibc/796C9983E626B211F04993DF50B8219B34D88C47272C05AF1222C187DA0F0981',
          exponent: 0,
          aliases: [
            'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7'
          ]
        },
        {
          denom: 'source',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/796C9983E626B211F04993DF50B8219B34D88C47272C05AF1222C187DA0F0981',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }
      ]
    },
    {
      description:
        "Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth's oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth's oracle program combines publishers' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth's oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.",
      denom_units: [
        {
          denom:
            'ibc/5851B322BD7414A060D0EE4D997EE8D01CB8A9FD19ED7F8732AE07236EF76F8A',
          exponent: 0,
          aliases: [
            'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5'
          ]
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5851B322BD7414A060D0EE4D997EE8D01CB8A9FD19ED7F8732AE07236EF76F8A',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/B505ECAC36964541F7EC8F4461B561B86DA4408BB8AFA34C549AD384116EA1A6',
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
      base: 'ibc/B505ECAC36964541F7EC8F4461B561B86DA4408BB8AFA34C549AD384116EA1A6',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ]
    },
    {
      description: 'Levana native token',
      denom_units: [
        {
          denom:
            'ibc/D62F15D5C1ACD29239B4DC01E4268423FD7AB81293E93F1E7FB864498A722AAC',
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
      type_asset: 'sdk.coin',
      base: 'ibc/D62F15D5C1ACD29239B4DC01E4268423FD7AB81293E93F1E7FB864498A722AAC',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png'
        }
      ],
      coingecko_id: 'levana-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'Puppy',
      denom_units: [
        {
          denom:
            'ibc/25E52FA492A2D596A5D68EF6DFF17C197B9C40C5FF88BBF3EF67033E4FA3C387',
          exponent: 0,
          aliases: [
            'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963'
          ]
        },
        {
          denom: 'puppy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/25E52FA492A2D596A5D68EF6DFF17C197B9C40C5FF88BBF3EF67033E4FA3C387',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/174240B1B4E54F450976586E6E8DA50275C23062350F80B3DA0BEEEE1176C35A',
          exponent: 0,
          aliases: [
            'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD'
          ]
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/174240B1B4E54F450976586E6E8DA50275C23062350F80B3DA0BEEEE1176C35A',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ]
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/7CDDD9D3DDEA33E9058DC9EC2C07DAADED612CCBD0662D421C2799AFCE80259C',
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
      type_asset: 'sdk.coin',
      base: 'ibc/7CDDD9D3DDEA33E9058DC9EC2C07DAADED612CCBD0662D421C2799AFCE80259C',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }
      ],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/4D2C4CC9BB006F8B3F2555066ED2FE2EA159B5E0026C6A45A0DA14462B7C0CDA',
          exponent: 0,
          aliases: [
            'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC'
          ]
        },
        {
          denom: 'ASH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4D2C4CC9BB006F8B3F2555066ED2FE2EA159B5E0026C6A45A0DA14462B7C0CDA',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }
      ]
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/4A906E5A397756F33835F7102BD7C114E3DB4E939FB864C0868382CB4CE3C352',
          exponent: 0,
          aliases: [
            'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493'
          ]
        },
        {
          denom: 'RAC',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4A906E5A397756F33835F7102BD7C114E3DB4E939FB864C0868382CB4CE3C352',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }
      ]
    },
    {
      description: 'GUPPY',
      denom_units: [
        {
          denom:
            'ibc/858BB7D45AB8CD8D0FB8845D530017022B1B078269D68D95B2E9CFE920462406',
          exponent: 0,
          aliases: [
            'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D'
          ]
        },
        {
          denom: 'GUPPY',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/858BB7D45AB8CD8D0FB8845D530017022B1B078269D68D95B2E9CFE920462406',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [
        {
          denom:
            'ibc/0D297307314C21A4633C7422DDCE63BA067112E00AD8B514FE95430BFF271831',
          exponent: 0,
          aliases: [
            'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA'
          ]
        },
        {
          denom: 'ISLM',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0D297307314C21A4633C7422DDCE63BA067112E00AD8B514FE95430BFF271831',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }
      ]
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom:
            'ibc/78A4FD546B87E200599AD38A5DD22C245C78415F704AE844BF8FCEC9F76BD00E',
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
      base: 'ibc/78A4FD546B87E200599AD38A5DD22C245C78415F704AE844BF8FCEC9F76BD00E',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
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
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/FAAD87CCD158456C602E71535ED9A0C86167B8356E3CAB22CA26D1633C151DE1',
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
      base: 'ibc/FAAD87CCD158456C602E71535ED9A0C86167B8356E3CAB22CA26D1633C151DE1',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }
      ]
    },
    {
      description: 'PURSE Token',
      denom_units: [
        {
          denom:
            'ibc/6945AAC7CBA183EA846D64E689636933B1FE81D2C16176523A515F3832AD331C',
          exponent: 0,
          aliases: [
            'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519'
          ]
        },
        {
          denom: 'PURSE',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6945AAC7CBA183EA846D64E689636933B1FE81D2C16176523A515F3832AD331C',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom:
            'ibc/3F54AD479C54E0D9196965BF34F3B0940AF1078EC99B4F9E117AD676D8257FAD',
          exponent: 0,
          aliases: [
            'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3'
          ]
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3F54AD479C54E0D9196965BF34F3B0940AF1078EC99B4F9E117AD676D8257FAD',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }
      ]
    },
    {
      description: 'Kleomedes Token',
      denom_units: [
        {
          denom:
            'ibc/3347A57DC80659449A0F47A83F6B12EAEF0C620DC2127665AE3884A55875BD99',
          exponent: 0,
          aliases: [
            'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF'
          ]
        },
        {
          denom: 'kleo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3347A57DC80659449A0F47A83F6B12EAEF0C620DC2127665AE3884A55875BD99',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }
      ]
    },
    {
      description: "NYX Token (NYX) is the Nym Network's native token.",
      denom_units: [
        {
          denom:
            'ibc/BAB79A07B3AF704C8CB49E93841A8C18B3265FC2741DFB1DDD606DE5F9B9031E',
          exponent: 0,
          aliases: [
            'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317'
          ]
        },
        {
          denom: 'nyx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BAB79A07B3AF704C8CB49E93841A8C18B3265FC2741DFB1DDD606DE5F9B9031E',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
      denom_units: [
        {
          denom:
            'ibc/ACE5D2A7E840F6158F2E88AEF08432840F8B40379F6F3E86379B49826F72D0B0',
          exponent: 0,
          aliases: [
            'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539'
          ]
        },
        {
          denom: 'nym',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/ACE5D2A7E840F6158F2E88AEF08432840F8B40379F6F3E86379B49826F72D0B0',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }
      ]
    },
    {
      description: 'has a hat',
      denom_units: [
        {
          denom:
            'ibc/1D7A0DD6C5936FA09BB306E15047B1FAA0F4511DB205027E215FADE8B08A505E',
          exponent: 0,
          aliases: [
            'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7'
          ]
        },
        {
          denom: 'achihuahuawifhat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1D7A0DD6C5936FA09BB306E15047B1FAA0F4511DB205027E215FADE8B08A505E',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }
      ]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'ibc/FB67C843E6C2B176236E344B7A4C7611B507F0DB4CF2B98EDA94E5AA05DD45D9',
          exponent: 0,
          aliases: [
            'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C'
          ]
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FB67C843E6C2B176236E344B7A4C7611B507F0DB4CF2B98EDA94E5AA05DD45D9',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ]
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      denom_units: [
        {
          denom:
            'ibc/697BE2DC0E100C2993A3DBC1A1669855E1B0ECF05447E3A6FC46B4C11D1F59A7',
          exponent: 0,
          aliases: [
            'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE'
          ]
        },
        {
          denom: 'jape',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/697BE2DC0E100C2993A3DBC1A1669855E1B0ECF05447E3A6FC46B4C11D1F59A7',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }
      ]
    },
    {
      description: 'Woof',
      denom_units: [
        {
          denom:
            'ibc/CD012512B2B28E27C121020781145FFF6102CCD6536E74695C6ED81701316625',
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
      base: 'ibc/CD012512B2B28E27C121020781145FFF6102CCD6536E74695C6ED81701316625',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
            'ibc/A84280E0CE97624F2B0E1700B0C0B88AFF9E411082F101AE92C44C47E47D5950',
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
      base: 'ibc/A84280E0CE97624F2B0E1700B0C0B88AFF9E411082F101AE92C44C47E47D5950',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/8C231AC29DD1CF61C10A6886CD345FF5068C2112A4F59FB9D7BFA81B91928B0B',
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
      type_asset: 'sdk.coin',
      address:
        'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'ibc/8C231AC29DD1CF61C10A6886CD345FF5068C2112A4F59FB9D7BFA81B91928B0B',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom:
            'ibc/66054A8398FBEDEEA0C11E72567362D4EACA1FC63847FE9D926033B2B64E9FF1',
          exponent: 0,
          aliases: [
            'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23'
          ]
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/66054A8398FBEDEEA0C11E72567362D4EACA1FC63847FE9D926033B2B64E9FF1',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denom_units: [
        {
          denom:
            'ibc/84D095DB35BBE19846EFE88D016FC5F82244C796BCD9C1E07623DBEB9A2A061A',
          exponent: 0,
          aliases: [
            'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A'
          ]
        },
        {
          denom: 'sgnl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/84D095DB35BBE19846EFE88D016FC5F82244C796BCD9C1E07623DBEB9A2A061A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }
      ]
    },
    {
      description:
        "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      denom_units: [
        {
          denom:
            'ibc/DCF9B3D3A29B1F1642F9788A437823AAA575937AE88C1447C7D798F8891CFCB6',
          exponent: 0,
          aliases: ['factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO']
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'ibc/DCF9B3D3A29B1F1642F9788A437823AAA575937AE88C1447C7D798F8891CFCB6',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom:
            'ibc/831E7B0724F88D43FCAE944D68546CB7A60CD84D165B567252C02B8CCEA9ECB3',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/831E7B0724F88D43FCAE944D68546CB7A60CD84D165B567252C02B8CCEA9ECB3',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/6FC2FF399FDEDB44EE66D29AC3341656C592DE45BEC22082E6320940B153FB51',
          exponent: 0,
          aliases: [
            'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1'
          ]
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6FC2FF399FDEDB44EE66D29AC3341656C592DE45BEC22082E6320940B153FB51',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked DYDX",
      denom_units: [
        {
          denom:
            'ibc/1C37217456687C3C0D01503046B7958F131CCD0E9616BD1E9D2D312B4E31EDA1',
          exponent: 0,
          aliases: [
            'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C'
          ]
        },
        {
          denom: 'stDYDX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1C37217456687C3C0D01503046B7958F131CCD0E9616BD1E9D2D312B4E31EDA1',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/43BB0CDE5E207AF422ADF0B660889D7E48F120518312A523C07BB01CFE96F0D9',
          exponent: 0,
          aliases: [
            'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9'
          ]
        },
        {
          denom: 'stTIA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/43BB0CDE5E207AF422ADF0B660889D7E48F120518312A523C07BB01CFE96F0D9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }
      ]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [
        {
          denom:
            'ibc/2148583F33A6235DEE9A979960CD6A0B7F4C57AEF89A502D363BA128147A2AF5',
          exponent: 0,
          aliases: [
            'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2148583F33A6235DEE9A979960CD6A0B7F4C57AEF89A502D363BA128147A2AF5',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom:
            'ibc/AEAB83620CCF7F530C19C71C62691C8F3F47D2EABCF0E3D936E55E0F9DCC4A53',
          exponent: 0,
          aliases: [
            'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110'
          ]
        },
        {
          denom: 'dym',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AEAB83620CCF7F530C19C71C62691C8F3F47D2EABCF0E3D936E55E0F9DCC4A53',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }
      ]
    },
    {
      description:
        'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denom_units: [
        {
          denom:
            'ibc/AD3C275D75E9E0BBEDF7BDCB39B0C53CA0D7198D16EDB75CF2549C23D2B2BD89',
          exponent: 0,
          aliases: ['factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR']
        },
        {
          denom: 'RAPTR',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'ibc/AD3C275D75E9E0BBEDF7BDCB39B0C53CA0D7198D16EDB75CF2549C23D2B2BD89',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
        }
      ],
      keywords: ['osmosis_unlisted'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F461EFCFD7EF31870A04DEB4D76AD2B0B6F4530149147530486B897B7A90B5A1',
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
      base: 'ibc/F461EFCFD7EF31870A04DEB4D76AD2B0B6F4530149147530486B897B7A90B5A1',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description: 'Sail DAO Token',
      denom_units: [
        {
          denom:
            'ibc/76802F4445087E6DC961C58E848FDE150B21A5107BEFA6EF86CBAE889E644663',
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
      base: 'ibc/76802F4445087E6DC961C58E848FDE150B21A5107BEFA6EF86CBAE889E644663',
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
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/2C0DF851BB20ED29666580D7D867368F0C3AB83BDBFC54A9A74D305F34428E45',
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
      base: 'ibc/2C0DF851BB20ED29666580D7D867368F0C3AB83BDBFC54A9A74D305F34428E45',
      name: 'Nomic',
      display: 'nomic',
      symbol: 'nomic.NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
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
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom:
            'ibc/9F5E6D43312B477A0E79B1E6D7D8D876372C26108B1FB85F2186C15BE67EE0F2',
          exponent: 0,
          aliases: [
            'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          ]
        },
        {
          denom: 'BADKID',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'ibc/9F5E6D43312B477A0E79B1E6D7D8D876372C26108B1FB85F2186C15BE67EE0F2',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description:
        'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denom_units: [
        {
          denom:
            'ibc/E898A914BB764F154B3156C4EE3B35BECEDEE4ADB73DA93D9C73D4C053D30A3C',
          exponent: 0,
          aliases: [
            'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos'
          ]
        },
        {
          denom: 'ymos',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'ibc/E898A914BB764F154B3156C4EE3B35BECEDEE4ADB73DA93D9C73D4C053D30A3C',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'The memecoin built for the Celestia community',
      denom_units: [
        {
          denom:
            'ibc/B162AFFC2C0ABB9399741D01E683FF1E6E01E817B7365118AFF3A5580D6CC268',
          exponent: 0,
          aliases: ['factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro']
        },
        {
          denom: 'toro',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'ibc/B162AFFC2C0ABB9399741D01E683FF1E6E01E817B7365118AFF3A5580D6CC268',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/4623452418F14E40D19E2018C3997E0C12CE070B41133DE3A3D54DC5B781E981',
          exponent: 0,
          aliases: [
            'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834'
          ]
        },
        {
          denom: 'SHARK',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4623452418F14E40D19E2018C3997E0C12CE070B41133DE3A3D54DC5B781E981',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom:
              'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }
      ]
    }
  ]
};
export default assets;
