import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: '8ball',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/4A3AAD07BC4EBEBC10FC2560EAA3B7A1D3B541B5264ED8E5E13E6B74AC76127B',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/4A3AAD07BC4EBEBC10FC2560EAA3B7A1D3B541B5264ED8E5E13E6B74AC76127B',
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
            channel_id: 'channel-641',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/65F2AFA2F7AC0FC1ACA0EC1710A5AB381BF87B25CB74E903C5847ED86CAE213A',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/65F2AFA2F7AC0FC1ACA0EC1710A5AB381BF87B25CB74E903C5847ED86CAE213A',
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
            channel_id: 'channel-641',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/BF9D23E0455824BE1C3334360230681EED17CB3C4D7219F71ED13AE51079EBE8',
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
      base: 'ibc/BF9D23E0455824BE1C3334360230681EED17CB3C4D7219F71ED13AE51079EBE8',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0807948EC189E63D495805214E776A6BB4B2678F700D89C321E36FDAC0632485',
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
      base: 'ibc/0807948EC189E63D495805214E776A6BB4B2678F700D89C321E36FDAC0632485',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/FCE6F6B5116C2DC07F2326691C8CA2AD63D38089B6C7DF6954708986FE70A85C',
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
      base: 'ibc/FCE6F6B5116C2DC07F2326691C8CA2AD63D38089B6C7DF6954708986FE70A85C',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0108D7A964051053F3B3F523947E32197F157FC8C74D598D3B07E74C730BA119',
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
      base: 'ibc/0108D7A964051053F3B3F523947E32197F157FC8C74D598D3B07E74C730BA119',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BE4E350A68F85507E217E4AF717CDDF7CAE005101E58A4B136E7C27F732C0311',
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
      base: 'ibc/BE4E350A68F85507E217E4AF717CDDF7CAE005101E58A4B136E7C27F732C0311',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B3EE0AE62355B1B8C2AB50B803D993EE8DC429DAE7841CD1FE54C2FBB47B993F',
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
      base: 'ibc/B3EE0AE62355B1B8C2AB50B803D993EE8DC429DAE7841CD1FE54C2FBB47B993F',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/CE5A2A20007B6FD312388A1118A0FAEEE6B49DFE71B083B501CD9E171BBC23A3',
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
      base: 'ibc/CE5A2A20007B6FD312388A1118A0FAEEE6B49DFE71B083B501CD9E171BBC23A3',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/31CC7BF160B51E199B1C068703F0B63FE9CBCCE698833E5AA2E3AC7885AE6ED0',
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
      base: 'ibc/31CC7BF160B51E199B1C068703F0B63FE9CBCCE698833E5AA2E3AC7885AE6ED0',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/90A0B93AA3520D6408C722D74336537015D442468276952CE3BD838432A01A31',
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
      base: 'ibc/90A0B93AA3520D6408C722D74336537015D442468276952CE3BD838432A01A31',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/94E71C82060A1FC1E91B6074D70FF2FE823FD29B07F6DB22BCA5A26B2560FF35',
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
      base: 'ibc/94E71C82060A1FC1E91B6074D70FF2FE823FD29B07F6DB22BCA5A26B2560FF35',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
        }
      ]
    },
    {
      description:
        'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [
        {
          denom:
            'ibc/C904D89B1ACB2A52980AA6B0B3D0A0C4233B7CA2DC3CD9FBB80BD2786E00A7B1',
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
      base: 'ibc/C904D89B1ACB2A52980AA6B0B3D0A0C4233B7CA2DC3CD9FBB80BD2786E00A7B1',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/CB09E779F84A8BD2D3BBD37D776482B7323B3A657F298E16DB152F90997D1899',
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
      base: 'ibc/CB09E779F84A8BD2D3BBD37D776482B7323B3A657F298E16DB152F90997D1899',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/051CAF0C2E08DC268F8C7781DBD116C653447AF365D1CA5B951EF290761473F5',
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
      base: 'ibc/051CAF0C2E08DC268F8C7781DBD116C653447AF365D1CA5B951EF290761473F5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2F1A777FC62637EF3E57D5739021752C0D9360DBE04A43B31F230120C86F6AD6',
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
      base: 'ibc/2F1A777FC62637EF3E57D5739021752C0D9360DBE04A43B31F230120C86F6AD6',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'DOT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0DD017B62656E48336329EA3BFBEF7B1CA60BC7008227D82A8ED218C713CC00A',
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
      base: 'ibc/0DD017B62656E48336329EA3BFBEF7B1CA60BC7008227D82A8ED218C713CC00A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/49BBBB8035866FC8ECB5BEB538074C011EC1E95C444AE129A94C36076C926A58',
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
      base: 'ibc/49BBBB8035866FC8ECB5BEB538074C011EC1E95C444AE129A94C36076C926A58',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2A332F74D387DA6E53A6E3913D574E322ABACF8EF01861A1F00272ED1BDBD962',
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
      base: 'ibc/2A332F74D387DA6E53A6E3913D574E322ABACF8EF01861A1F00272ED1BDBD962',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B106A9F97D78DBDF40E193811276F7B5F5C2D8F0A944DAC9F9849184199B9242',
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
      base: 'ibc/B106A9F97D78DBDF40E193811276F7B5F5C2D8F0A944DAC9F9849184199B9242',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C006C0884EB6359017D3412A406C565B73BF644087B1829447AB206C27CAA296',
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
      base: 'ibc/C006C0884EB6359017D3412A406C565B73BF644087B1829447AB206C27CAA296',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/28AD7D6E19F5869CF09D63487498352A939483537FD4727CB18CAC2C6AC6A7E9',
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
      base: 'ibc/28AD7D6E19F5869CF09D63487498352A939483537FD4727CB18CAC2C6AC6A7E9',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6DB934AE59D70DD5E4F70B2E781FEE3791D4D95B2CA3F83DF6CC91A05C5BFD78',
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
      base: 'ibc/6DB934AE59D70DD5E4F70B2E781FEE3791D4D95B2CA3F83DF6CC91A05C5BFD78',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/85DFC355801B77FCED0EBC19503F148B83903BDDDF280316B358363D2AEC5CA6',
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
      base: 'ibc/85DFC355801B77FCED0EBC19503F148B83903BDDDF280316B358363D2AEC5CA6',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/912BB34A327341FF21B7F13CD2C885AA98B3C6A2402035F8588C7A822F64C4DF',
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
      base: 'ibc/912BB34A327341FF21B7F13CD2C885AA98B3C6A2402035F8588C7A822F64C4DF',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A0EC2EAEED442B0B6819CB19998FCC396200E1F34FBEE4F70F0EF2AA02C918C6',
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
      base: 'ibc/A0EC2EAEED442B0B6819CB19998FCC396200E1F34FBEE4F70F0EF2AA02C918C6',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/25EE7D95A632D667D32B71D0D081C88603B33673E6B09A432F3BDDE690B98139',
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
      base: 'ibc/25EE7D95A632D667D32B71D0D081C88603B33673E6B09A432F3BDDE690B98139',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/FE6C2A83D6B88C66A72010A56434B9B1CB2A8B1209EABC1DEADC1D9D56A24F1A',
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
      base: 'ibc/FE6C2A83D6B88C66A72010A56434B9B1CB2A8B1209EABC1DEADC1D9D56A24F1A',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/7E638B45847B342203168E6A8FD9153B6EAD4F364FB76EA14A6F8AC77EF2A07C',
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
      base: 'ibc/7E638B45847B342203168E6A8FD9153B6EAD4F364FB76EA14A6F8AC77EF2A07C',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B44EFC46834961FB1D5F97AB7E2841E3B595AF8BDB54A1A0875FB4A1DD355401',
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
      base: 'ibc/B44EFC46834961FB1D5F97AB7E2841E3B595AF8BDB54A1A0875FB4A1DD355401',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EA4267A7B29B879B6083C91339C7ABA9243CEDED018B8C4423CDB3BD3AFE020D',
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
      base: 'ibc/EA4267A7B29B879B6083C91339C7ABA9243CEDED018B8C4423CDB3BD3AFE020D',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3A977F5B5B1389A4EE9A870EF5460C2D16CE64C12D69AC1D92CD7479C7129218',
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
      base: 'ibc/3A977F5B5B1389A4EE9A870EF5460C2D16CE64C12D69AC1D92CD7479C7129218',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/546866D8E8139FD911DCA00DFB14D1DF0CD46EB98B4E8BBEA7EC55DD4030EBB7',
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
      base: 'ibc/546866D8E8139FD911DCA00DFB14D1DF0CD46EB98B4E8BBEA7EC55DD4030EBB7',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/61784A279752124365236C2F4744F9DC2434A3F0EBA630720D8E50D0932E915A',
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
      base: 'ibc/61784A279752124365236C2F4744F9DC2434A3F0EBA630720D8E50D0932E915A',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BF90679C39638EA74E172E783009A548518DCC0EDA4F23F01E697D94648F8323',
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
      base: 'ibc/BF90679C39638EA74E172E783009A548518DCC0EDA4F23F01E697D94648F8323',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BF66EECFCC0E913D9A204B1CA3CB9EB6BC6EDDA857438D2CE72E6A629ABEF0A9',
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
      base: 'ibc/BF66EECFCC0E913D9A204B1CA3CB9EB6BC6EDDA857438D2CE72E6A629ABEF0A9',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DB6FF182B0F5108E1B566551154BFDB1B5EBBB03B26856083C70E1735DE39174',
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
      base: 'ibc/DB6FF182B0F5108E1B566551154BFDB1B5EBBB03B26856083C70E1735DE39174',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1BA62201EC2E5196722FA027447C0E698F756637D4ED846C25892CAF0CFFA721',
          exponent: 0,
          aliases: [
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1BA62201EC2E5196722FA027447C0E698F756637D4ED846C25892CAF0CFFA721',
      name: 'bostrom',
      display:
        'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E35CD3FA900636906DD9B70CD347D8E311E2796EA17835FADA9F3547B6939BD7',
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
      base: 'ibc/E35CD3FA900636906DD9B70CD347D8E311E2796EA17835FADA9F3547B6939BD7',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/90C711E41CFB443EB34F6395D9D73A2B61F2FF8721A191B78A0886E5868C1BE2',
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
      base: 'ibc/90C711E41CFB443EB34F6395D9D73A2B61F2FF8721A191B78A0886E5868C1BE2',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AEE7F030C210DDD8923B54AEFF775E08F3F578E97749487A31F587DE79CFBF30',
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
      base: 'ibc/AEE7F030C210DDD8923B54AEFF775E08F3F578E97749487A31F587DE79CFBF30',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/033C2A7D175A67C8B4ADD4261BDE9CE7A244A473DAA4E4F81BCFDE6EF4BC2CAC',
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
      base: 'ibc/033C2A7D175A67C8B4ADD4261BDE9CE7A244A473DAA4E4F81BCFDE6EF4BC2CAC',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5EBA0FCF9000A7E4E833728BD909028BD4203D8CE276E85AF83BA34069BAA4F2',
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
      base: 'ibc/5EBA0FCF9000A7E4E833728BD909028BD4203D8CE276E85AF83BA34069BAA4F2',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/73F5F8B4DE3CCD51AB903D5A841B406428587E2BE6A35998AC5A908E09274276',
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
      base: 'ibc/73F5F8B4DE3CCD51AB903D5A841B406428587E2BE6A35998AC5A908E09274276',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/59E29062B1D9400005C099D42E4837BB716655C429D1880B199AFB4E368B69B3',
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
      base: 'ibc/59E29062B1D9400005C099D42E4837BB716655C429D1880B199AFB4E368B69B3',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/49A1B1BD2404FB8E94312D0557E10F24C649B13AFB8EB7E702EA209A94037AAF',
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
      base: 'ibc/49A1B1BD2404FB8E94312D0557E10F24C649B13AFB8EB7E702EA209A94037AAF',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F6FC7EC96AAA95184FC50A92ACF39081DC40335A88F770A5AAE33A9B78C3CEED',
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
      base: 'ibc/F6FC7EC96AAA95184FC50A92ACF39081DC40335A88F770A5AAE33A9B78C3CEED',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/87DFB8604775FE5D4F48F7FE8B57D1EC58CC65978A373743BDC70404F6E69864',
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
      base: 'ibc/87DFB8604775FE5D4F48F7FE8B57D1EC58CC65978A373743BDC70404F6E69864',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DEEDEB40E7C99425FBEB22369C1A771275BC21638665DD574D9CA34E5191A84E',
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
      base: 'ibc/DEEDEB40E7C99425FBEB22369C1A771275BC21638665DD574D9CA34E5191A84E',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AF2B6C2448C57F6AD16C627076EA8296E38B526A30CDE4D72066346D70921D9C',
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
      base: 'ibc/AF2B6C2448C57F6AD16C627076EA8296E38B526A30CDE4D72066346D70921D9C',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/60F8C9251534C828C6859170513A86C87AB7A4EF1A7A3ABF683C72169C28178F',
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
      base: 'ibc/60F8C9251534C828C6859170513A86C87AB7A4EF1A7A3ABF683C72169C28178F',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5AA818E46504993FCD08AB23958E7015EAB73E79804AF746735DD59004E44D5A',
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
      base: 'ibc/5AA818E46504993FCD08AB23958E7015EAB73E79804AF746735DD59004E44D5A',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4B0713029C32C8DB2E04E8770B58E75F1FA6839502831DB94B0346F823727A53',
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
      base: 'ibc/4B0713029C32C8DB2E04E8770B58E75F1FA6839502831DB94B0346F823727A53',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1B09B9E7E1707451EE146BE6BB4AFF5254E96ADEDE8A195AC53B41107D67BB51',
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
      base: 'ibc/1B09B9E7E1707451EE146BE6BB4AFF5254E96ADEDE8A195AC53B41107D67BB51',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A021FE05C3E0407236F2A1E55C0F5D8A273AE1B835D87CE69AA4922046806BD4',
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
      base: 'ibc/A021FE05C3E0407236F2A1E55C0F5D8A273AE1B835D87CE69AA4922046806BD4',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/FD9FB134FCC3093EE1588AFA12B41B28F840427A4A8E8CAAC063FA37FB30B52F',
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
      base: 'ibc/FD9FB134FCC3093EE1588AFA12B41B28F840427A4A8E8CAAC063FA37FB30B52F',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BA930215261C9744C32E6C8B2B041C123378DC8B1FB24EA5687D2D47414DAD81',
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
      base: 'ibc/BA930215261C9744C32E6C8B2B041C123378DC8B1FB24EA5687D2D47414DAD81',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6B2C0BB1E60E150ED7F877A15737520DD149507B2E842D3423A05C19A79F4731',
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
      base: 'ibc/6B2C0BB1E60E150ED7F877A15737520DD149507B2E842D3423A05C19A79F4731',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9D63E8834E205297210EA5EA0F5AF9B0177EE3E7F5DA30431B50B765BE6881CD',
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
      base: 'ibc/9D63E8834E205297210EA5EA0F5AF9B0177EE3E7F5DA30431B50B765BE6881CD',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4DF244028247BACB4858E38FC545FE364337315E0748F62420BE75F80B242370',
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
      base: 'ibc/4DF244028247BACB4858E38FC545FE364337315E0748F62420BE75F80B242370',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/D95968245C297862648084B2F3302AB7FDF724F51F92B2C3DB494468D042B654',
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
      base: 'ibc/D95968245C297862648084B2F3302AB7FDF724F51F92B2C3DB494468D042B654',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1579DD8554E72D6B36B59FCFF1CA7C82465C0B6AF54D550E6B44B82DB6023B6B',
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
      base: 'ibc/1579DD8554E72D6B36B59FCFF1CA7C82465C0B6AF54D550E6B44B82DB6023B6B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/409F56C2B0D3728EEE9A5B71117B62E918C2644081A1490EDDE11EFE95805353',
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
      base: 'ibc/409F56C2B0D3728EEE9A5B71117B62E918C2644081A1490EDDE11EFE95805353',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/36B7B1BE24C8271DA16ED272CA5B23EEA895CF80D8F2AF56240045EBC0170A61',
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
      base: 'ibc/36B7B1BE24C8271DA16ED272CA5B23EEA895CF80D8F2AF56240045EBC0170A61',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2102984F663D18010ABA9128DD959B912C8B1424FEAC6618CF6C41B9A04AB432',
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
      base: 'ibc/2102984F663D18010ABA9128DD959B912C8B1424FEAC6618CF6C41B9A04AB432',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A5E0CF4EA58708FD92C7A3D1F0BB2D808B9858D6A5F94EDB69CD8FAF43DD8F4E',
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
      base: 'ibc/A5E0CF4EA58708FD92C7A3D1F0BB2D808B9858D6A5F94EDB69CD8FAF43DD8F4E',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/830B789789C7557526D79F0918038B5F41E10C95FE56404BE926DBB62235C069',
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
      base: 'ibc/830B789789C7557526D79F0918038B5F41E10C95FE56404BE926DBB62235C069',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E826246E8A3A79716EEC06F3286A2BA299A538808B178AEEC16732B38EF140C8',
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
      base: 'ibc/E826246E8A3A79716EEC06F3286A2BA299A538808B178AEEC16732B38EF140C8',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5098AE343481FBB5C0B251D920CEC5EF4C39D32957AA9D9EA7B42B4B6498ACCA',
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
      base: 'ibc/5098AE343481FBB5C0B251D920CEC5EF4C39D32957AA9D9EA7B42B4B6498ACCA',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F8AC7873F8BAAB85D5184DBDF1F2919989E7759C310E59026C67791F33E728E7',
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
      base: 'ibc/F8AC7873F8BAAB85D5184DBDF1F2919989E7759C310E59026C67791F33E728E7',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F03A94AEFC15D8B27B9DA46E070D6E0B7C6B99EDD80C313AA044DCABEBE2D0A0',
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
      base: 'ibc/F03A94AEFC15D8B27B9DA46E070D6E0B7C6B99EDD80C313AA044DCABEBE2D0A0',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4F548ECFD75FADFFFE92AFA0E5E9CC6BE68BE649840BF154DFFC63BF7D40C0BC',
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
      base: 'ibc/4F548ECFD75FADFFFE92AFA0E5E9CC6BE68BE649840BF154DFFC63BF7D40C0BC',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/22B75A954B78AD1D4FBE866A5FB4DCB658154DCD79241940F67BE9963A8705F8',
          exponent: 0,
          aliases: [
            'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/22B75A954B78AD1D4FBE866A5FB4DCB658154DCD79241940F67BE9963A8705F8',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EF39D1CB524CFB72358A94413A4CE4E2EAA604F4EAAA4DCAC1AAD40BD6880D6A',
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
      base: 'ibc/EF39D1CB524CFB72358A94413A4CE4E2EAA604F4EAAA4DCAC1AAD40BD6880D6A',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/95AF02C8F3D93A16A9DAC26C249EBC0E4C56E76517170E6997A884375BDCA52E',
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
      base: 'ibc/95AF02C8F3D93A16A9DAC26C249EBC0E4C56E76517170E6997A884375BDCA52E',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/15C0E525EAAC65D550F595DEB5BE8DFAD2DAED5A22520408ECDB9C88712E326D',
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
      base: 'ibc/15C0E525EAAC65D550F595DEB5BE8DFAD2DAED5A22520408ECDB9C88712E326D',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/976616B4555C2FF444B2A158C6A424FB70FF5539D977E17F94F952F0B8FD205C',
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
      base: 'ibc/976616B4555C2FF444B2A158C6A424FB70FF5539D977E17F94F952F0B8FD205C',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3E7F5C909527FE8C03B1855707255360E847D5AA6CBACBDF0B130F8E50E0D3B9',
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
      base: 'ibc/3E7F5C909527FE8C03B1855707255360E847D5AA6CBACBDF0B130F8E50E0D3B9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5B2C0BA49D0221155C4C086B3DA45368AB36BB9180913182FF693C4B97CA1868',
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
      base: 'ibc/5B2C0BA49D0221155C4C086B3DA45368AB36BB9180913182FF693C4B97CA1868',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9060B8EAB6697FFDC598652596D065C48DC1B1EFEA281712A2DF99B37D2CCB91',
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
      base: 'ibc/9060B8EAB6697FFDC598652596D065C48DC1B1EFEA281712A2DF99B37D2CCB91',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9FD99AFAC3F1F53C26FBDED0E62194F275603979D3AEB2C8A6CF8C724A453CB2',
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
      base: 'ibc/9FD99AFAC3F1F53C26FBDED0E62194F275603979D3AEB2C8A6CF8C724A453CB2',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/016C3BAD6B69A84902CE2F9321B38F2663337DFCA8D64B9133D164AA6E01A36D',
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
      base: 'ibc/016C3BAD6B69A84902CE2F9321B38F2663337DFCA8D64B9133D164AA6E01A36D',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/633FEE0F494323ED25193A91B511B01F79D96143CD8358989CF0949C5110092D',
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
      base: 'ibc/633FEE0F494323ED25193A91B511B01F79D96143CD8358989CF0949C5110092D',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/FF409807A68B609B920778B4A34AC1237D54ED391D350C74DF57F15347AE5794',
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
      base: 'ibc/FF409807A68B609B920778B4A34AC1237D54ED391D350C74DF57F15347AE5794',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F643A93AD152C965D9187F10B53B1D3462EFA337892E3720D72075ABE559FC2F',
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
      base: 'ibc/F643A93AD152C965D9187F10B53B1D3462EFA337892E3720D72075ABE559FC2F',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/28CDC13B8BB85AD81D61522CC6E976438DFC4A7333176CFBFB1F7A1F7F44A4B6',
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
      base: 'ibc/28CDC13B8BB85AD81D61522CC6E976438DFC4A7333176CFBFB1F7A1F7F44A4B6',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DA5211D581EC0234BCB0EF14A4224ECE065FD78B1D574CFF305DB38D428519E1',
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
      base: 'ibc/DA5211D581EC0234BCB0EF14A4224ECE065FD78B1D574CFF305DB38D428519E1',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/81E1FDD5720B9E26346EF4FE96599C626A635AE4D19B3FDFBCB976B6154C34A5',
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
      base: 'ibc/81E1FDD5720B9E26346EF4FE96599C626A635AE4D19B3FDFBCB976B6154C34A5',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/89C805A4491F16A050301B0EDA3F07A220C6E558F2DB63C0F4BBEECFA8921FCD',
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
      base: 'ibc/89C805A4491F16A050301B0EDA3F07A220C6E558F2DB63C0F4BBEECFA8921FCD',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2044BF3C1404ABE54A22FF43D5FF500F75CA4071DC66B091C835C45E540328F9',
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
      base: 'ibc/2044BF3C1404ABE54A22FF43D5FF500F75CA4071DC66B091C835C45E540328F9',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C035F2624695282B747BE9C660FB254F384FBCF2BFD35FCD6F18034439E6F36F',
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
      base: 'ibc/C035F2624695282B747BE9C660FB254F384FBCF2BFD35FCD6F18034439E6F36F',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/06598952C395E4F34C446DD934FCBD9C8FAA7CDF2EC936959FF09BFB7560D49E',
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
      base: 'ibc/06598952C395E4F34C446DD934FCBD9C8FAA7CDF2EC936959FF09BFB7560D49E',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DC7D0667AC346346E95C3065A1E52D38E2340E357DB9A3D001F08814B8DF190C',
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
      base: 'ibc/DC7D0667AC346346E95C3065A1E52D38E2340E357DB9A3D001F08814B8DF190C',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A93580DC733B250A5B5BEF165FCD2DC071F08265D14EEB336EB268FD1ED00A9D',
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
      base: 'ibc/A93580DC733B250A5B5BEF165FCD2DC071F08265D14EEB336EB268FD1ED00A9D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E93071FFC59E70152E44F294ADC010E6FB2B094B2740EA25F462B2AFDC0B1857',
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
      base: 'ibc/E93071FFC59E70152E44F294ADC010E6FB2B094B2740EA25F462B2AFDC0B1857',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1D816F1DF006838352173D4EC180E0A72A3CBC43BC0DA9DE3B84CC866DFBF6C6',
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
      base: 'ibc/1D816F1DF006838352173D4EC180E0A72A3CBC43BC0DA9DE3B84CC866DFBF6C6',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4213FE3BAF7D4DFB4A86FEB30BB28DFE9DEC203FD27D897C73A8F344F745167A',
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
      base: 'ibc/4213FE3BAF7D4DFB4A86FEB30BB28DFE9DEC203FD27D897C73A8F344F745167A',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AD539D297001BAB512E314CADA60105871DBFF39EB3BA4B2C6A9DDCA5E075EE6',
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
      base: 'ibc/AD539D297001BAB512E314CADA60105871DBFF39EB3BA4B2C6A9DDCA5E075EE6',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B8278EB9CD641CB156FA2EA022AFB1C43DD9F888AF52083DE201FD38BC802567',
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
      base: 'ibc/B8278EB9CD641CB156FA2EA022AFB1C43DD9F888AF52083DE201FD38BC802567',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C40D45393A229A4B8DA450ECD9F913B6A4ACCA8DBA3EE808887E14C68CABEE7A',
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
      base: 'ibc/C40D45393A229A4B8DA450ECD9F913B6A4ACCA8DBA3EE808887E14C68CABEE7A',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1D4D92BE641075070A3B5EA7656C303A52913A465AF33BFD1AEBD5E427BE4E74',
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
      base: 'ibc/1D4D92BE641075070A3B5EA7656C303A52913A465AF33BFD1AEBD5E427BE4E74',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E927115844C0CEE1546517ED16652422E03CF9766313DA29B23FC05FB91B91E0',
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
      base: 'ibc/E927115844C0CEE1546517ED16652422E03CF9766313DA29B23FC05FB91B91E0',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/56298BC496D5C91004AED545D9DDE4465836026F9029B3A5B5C6677872B0CC68',
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
      base: 'ibc/56298BC496D5C91004AED545D9DDE4465836026F9029B3A5B5C6677872B0CC68',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/68CC592D968945A97FBA4258F69FCD14BBC6F2B201502354D7C763947254B5D1',
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
      base: 'ibc/68CC592D968945A97FBA4258F69FCD14BBC6F2B201502354D7C763947254B5D1',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/93D26056F4FB17B72BE59A080D66BE235DD59BC7D7DAA6168BA205F4445F35FF',
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
      base: 'ibc/93D26056F4FB17B72BE59A080D66BE235DD59BC7D7DAA6168BA205F4445F35FF',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5E2111AA96A43B148F85311E0278E4FFA2D876270A2310E847DDB84E4C2F4C51',
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
      base: 'ibc/5E2111AA96A43B148F85311E0278E4FFA2D876270A2310E847DDB84E4C2F4C51',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/06FADD878EFC2C932548F01FECA933AF5ABFAD09B4A117B3ED19D4F0AD105C39',
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
      base: 'ibc/06FADD878EFC2C932548F01FECA933AF5ABFAD09B4A117B3ED19D4F0AD105C39',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0E2DC4A660CEB75804E31BFA70ACC0786BCCFEBBFDAE56250F7DDCF514EC235B',
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
      base: 'ibc/0E2DC4A660CEB75804E31BFA70ACC0786BCCFEBBFDAE56250F7DDCF514EC235B',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/639BBB3CEC0692575537C5534800E189A5FB3AF9F052D0B34682D6A5C9D805AC',
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
      base: 'ibc/639BBB3CEC0692575537C5534800E189A5FB3AF9F052D0B34682D6A5C9D805AC',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4C961C21227543EC65E57316AB0AD943D6B655E6CF635DF901EFA670B5A106D0',
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
      base: 'ibc/4C961C21227543EC65E57316AB0AD943D6B655E6CF635DF901EFA670B5A106D0',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0C059CEF1C41B09C80E01FE38F40D35DF38CA573E2ECC9CA31C5F22D8704571F',
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
      base: 'ibc/0C059CEF1C41B09C80E01FE38F40D35DF38CA573E2ECC9CA31C5F22D8704571F',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DC38E0EE94FA374EBF33DAC28778E01612050273FCFA299B2863F35C01C358BC',
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
      base: 'ibc/DC38E0EE94FA374EBF33DAC28778E01612050273FCFA299B2863F35C01C358BC',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1949CB83B8A43099C1065405EC29F6A0C1A2D250CAC5289A8262EBE5FA69801A',
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
      base: 'ibc/1949CB83B8A43099C1065405EC29F6A0C1A2D250CAC5289A8262EBE5FA69801A',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/493251F18F07E72B31935F5E92BE57C6A2FD24D90E61D6AC4B54A13D5FEF8EB0',
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
      base: 'ibc/493251F18F07E72B31935F5E92BE57C6A2FD24D90E61D6AC4B54A13D5FEF8EB0',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EFC9C4DE71B5FF54B3C64A5F15BE3D838A15DEB717A8A56D5E261E52CB0FCFF4',
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
      base: 'ibc/EFC9C4DE71B5FF54B3C64A5F15BE3D838A15DEB717A8A56D5E261E52CB0FCFF4',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/53E945E3EE130A67F51C3205F0E9AFFFF6DF3EF0E58C3929ADB7E99A0954FCAF',
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
      base: 'ibc/53E945E3EE130A67F51C3205F0E9AFFFF6DF3EF0E58C3929ADB7E99A0954FCAF',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/95EAE825798489ABACD7E6BDDAA504A5E3575F707ADB3B75ABD8D771AE254D65',
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
      base: 'ibc/95EAE825798489ABACD7E6BDDAA504A5E3575F707ADB3B75ABD8D771AE254D65',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B5A3C0D8DAD790DC279FE1F1A02A17B22A9303BCED806D5A39F3CC9A6B8075E0',
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
      base: 'ibc/B5A3C0D8DAD790DC279FE1F1A02A17B22A9303BCED806D5A39F3CC9A6B8075E0',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6606B88DDD9735992BB15217546586DED9611F2919CB99FDD77F9EFBB4CE5BD1',
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
      base: 'ibc/6606B88DDD9735992BB15217546586DED9611F2919CB99FDD77F9EFBB4CE5BD1',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6B2F3C42B151C1605E1334CB909941F05FE717CB830DF18BEB6ABA5B30273629',
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
      base: 'ibc/6B2F3C42B151C1605E1334CB909941F05FE717CB830DF18BEB6ABA5B30273629',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/347B5D501211A45F389C6D745F74AB029AF9995979B2095D4D6B3765520DE0EA',
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
      base: 'ibc/347B5D501211A45F389C6D745F74AB029AF9995979B2095D4D6B3765520DE0EA',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4ED50779E7CAEF153C41F416A78A742618A5BBB99BCCD0957E0C879C01811831',
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
      base: 'ibc/4ED50779E7CAEF153C41F416A78A742618A5BBB99BCCD0957E0C879C01811831',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5805FEC9EDBE4BE0EF7245D44614FB9389935D0CF14300D613B10B57CDE924AC',
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
      base: 'ibc/5805FEC9EDBE4BE0EF7245D44614FB9389935D0CF14300D613B10B57CDE924AC',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4D57AD5E6DC1F129DBBE46B6AB1BFE978E87B20825DBEBFCCCD476CD6DDC28B0',
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
      base: 'ibc/4D57AD5E6DC1F129DBBE46B6AB1BFE978E87B20825DBEBFCCCD476CD6DDC28B0',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F8D38737484372CC067AAA5F994E078001E3582117961A512C187700870DCDB5',
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
      base: 'ibc/F8D38737484372CC067AAA5F994E078001E3582117961A512C187700870DCDB5',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A6FD29861A6B3F91190FEDF5FB31BCD3513155855EC2877A172F2D2134FAB60E',
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
      base: 'ibc/A6FD29861A6B3F91190FEDF5FB31BCD3513155855EC2877A172F2D2134FAB60E',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/78C3753F1E72625FDE198C1EA3A7141B861025435A3D375F4E59A156971CB3EA',
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
      base: 'ibc/78C3753F1E72625FDE198C1EA3A7141B861025435A3D375F4E59A156971CB3EA',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/8198BF062A6B20E234401AD4F331D4524B586159ADBA3AC722D19911C30C3FA1',
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
      base: 'ibc/8198BF062A6B20E234401AD4F331D4524B586159ADBA3AC722D19911C30C3FA1',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/72B98DB8549381DD89CE99845E4FA880A38208D41C665755A65485618E047F58',
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
      base: 'ibc/72B98DB8549381DD89CE99845E4FA880A38208D41C665755A65485618E047F58',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/245603482D029B2667BF067DF6C48A230A0C171D833B391C88E7D0BBA70DF563',
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
      base: 'ibc/245603482D029B2667BF067DF6C48A230A0C171D833B391C88E7D0BBA70DF563',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/FF9F99F1E51512CC8318BDA95C489E4C36F77BED247BB97C7D36F0A7B5FC0DB1',
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
      base: 'ibc/FF9F99F1E51512CC8318BDA95C489E4C36F77BED247BB97C7D36F0A7B5FC0DB1',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6F516F1F1281E683E77602576B8D1C4FAC88D81BC8DE08F62C1F2F725800295F',
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
      base: 'ibc/6F516F1F1281E683E77602576B8D1C4FAC88D81BC8DE08F62C1F2F725800295F',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F73D1BD887C1985D9EDA88832B89CDD9399F0E330A29A6B55BE18A378122953C',
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
      base: 'ibc/F73D1BD887C1985D9EDA88832B89CDD9399F0E330A29A6B55BE18A378122953C',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EF0B948F93BB9C63B338C79781D26DD655468554F6576B9F82A34E3757C1935E',
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
      base: 'ibc/EF0B948F93BB9C63B338C79781D26DD655468554F6576B9F82A34E3757C1935E',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/770D2589B22AECC777F40B760B18CEC9A22E85F142654193C58973516B9A9C8D',
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
      base: 'ibc/770D2589B22AECC777F40B760B18CEC9A22E85F142654193C58973516B9A9C8D',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/15F81CFC9F04CFA0023E96F74A96FEB8EB231AE847EA0B0B5E83408A763EA7F7',
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
      base: 'ibc/15F81CFC9F04CFA0023E96F74A96FEB8EB231AE847EA0B0B5E83408A763EA7F7',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EC0446AD5F09B1FF4509123B3DB9D45ED71270D689024D8474FB4F8C8A3F7C97',
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
      base: 'ibc/EC0446AD5F09B1FF4509123B3DB9D45ED71270D689024D8474FB4F8C8A3F7C97',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B5BAA1AE3DF54611C53D83D73EC9B4508B70D8ACC923295E002F39053A3C08A1',
          exponent: 0,
          aliases: [
            'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B5BAA1AE3DF54611C53D83D73EC9B4508B70D8ACC923295E002F39053A3C08A1',
      name: 'Dyson Protocol',
      display:
        'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/438202D7B33DF655AD3B466EF332F9C3AD880E4C47820D1A71D9CEBBFD4ACF59',
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
      base: 'ibc/438202D7B33DF655AD3B466EF332F9C3AD880E4C47820D1A71D9CEBBFD4ACF59',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BC391C1D70993586734F4C24E1159CA9C0ECABD9DF496750A07F3D2B20BB2904',
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
      base: 'ibc/BC391C1D70993586734F4C24E1159CA9C0ECABD9DF496750A07F3D2B20BB2904',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/619F579981ACA09EAC024502C0233D12D56169CED6F5C84C9930134FEC2F9C38',
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
      base: 'ibc/619F579981ACA09EAC024502C0233D12D56169CED6F5C84C9930134FEC2F9C38',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/CBF6E1BF82FDEE1E878F46408C7FEF1257A3077D1C8B45AFB9FECE3A4E0D2C26',
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
      base: 'ibc/CBF6E1BF82FDEE1E878F46408C7FEF1257A3077D1C8B45AFB9FECE3A4E0D2C26',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AE2A3E4A2F7731FC1D09C5611BC7A46E330779E2B082F67634D06D79DC0C2B6D',
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
      base: 'ibc/AE2A3E4A2F7731FC1D09C5611BC7A46E330779E2B082F67634D06D79DC0C2B6D',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/50D989D4206155D0EF29F26AA73BE8C9D130980614E31DB81520E323070C0FAC',
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
      base: 'ibc/50D989D4206155D0EF29F26AA73BE8C9D130980614E31DB81520E323070C0FAC',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/8B74D68FD831A9593DF136340D35D3FE1B8FC986A84B76C57C5C90F8A76D509D',
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
      base: 'ibc/8B74D68FD831A9593DF136340D35D3FE1B8FC986A84B76C57C5C90F8A76D509D',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/81DC6890AF86F5C8DCC7F8BA6548993F365564B60A3A6924D1842185D1F9D03D',
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
      base: 'ibc/81DC6890AF86F5C8DCC7F8BA6548993F365564B60A3A6924D1842185D1F9D03D',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/61F37FC4B44FD56A312CC3BB4410191F2B588F28436A3B7ED88CA8BE89038B13',
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
      base: 'ibc/61F37FC4B44FD56A312CC3BB4410191F2B588F28436A3B7ED88CA8BE89038B13',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6CE64761821330BE2CB4042B17F7D5E9F30716AD7ABE16161F30BAB57405CAAE',
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
      base: 'ibc/6CE64761821330BE2CB4042B17F7D5E9F30716AD7ABE16161F30BAB57405CAAE',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/85B26A3986A267F67E47983369C6E672ABD96C1EFD609E7E26636599489A52F3',
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
      base: 'ibc/85B26A3986A267F67E47983369C6E672ABD96C1EFD609E7E26636599489A52F3',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C550A18B3525E011915C0DE65F23432573C3D6D990F7C33ED5F105B3830FD79F',
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
      base: 'ibc/C550A18B3525E011915C0DE65F23432573C3D6D990F7C33ED5F105B3830FD79F',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9A3417C68A4080F9EB16593FCAFE2A465B06EDD0EDFD4EE5489AE6D4D76EEBC0',
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
      base: 'ibc/9A3417C68A4080F9EB16593FCAFE2A465B06EDD0EDFD4EE5489AE6D4D76EEBC0',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DA37E6ECA84802839AAA96B980DF6374D45039C0CC4DC88B90B9DE78FBCEE08B',
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
      base: 'ibc/DA37E6ECA84802839AAA96B980DF6374D45039C0CC4DC88B90B9DE78FBCEE08B',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0C53E62EDCF4B0A5183CC09CBF91F97096854FE20F69A4FB9329102F748C10D5',
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
      base: 'ibc/0C53E62EDCF4B0A5183CC09CBF91F97096854FE20F69A4FB9329102F748C10D5',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/418794CF8B84FCAA095BF6B6F7EE63EBA6DF6C701F34641DB3E51A829E00A042',
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
      base: 'ibc/418794CF8B84FCAA095BF6B6F7EE63EBA6DF6C701F34641DB3E51A829E00A042',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E75EDD1DD5B7299B5FA17CBEEE8DE6DE8AAB6439251AA5D5524C210C17B448BA',
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
      base: 'ibc/E75EDD1DD5B7299B5FA17CBEEE8DE6DE8AAB6439251AA5D5524C210C17B448BA',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E74594FE98CAAA871869A42F59A74393680D9EDF6DB7CF217D179FF02D065EEC',
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
      base: 'ibc/E74594FE98CAAA871869A42F59A74393680D9EDF6DB7CF217D179FF02D065EEC',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/10DC8892C67931CB8263C7D1630681C16FE0000810FE2F154FAA1B5A35BD3942',
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
      base: 'ibc/10DC8892C67931CB8263C7D1630681C16FE0000810FE2F154FAA1B5A35BD3942',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/522AB164B4C614C164B93F80F3FFCAA472E3ED1EEF0EF40AA9B3FB338ABF8611',
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
      base: 'ibc/522AB164B4C614C164B93F80F3FFCAA472E3ED1EEF0EF40AA9B3FB338ABF8611',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6741F52748DC872D1306AE967479124001217D344AF1003EE75D4ED80825FD6F',
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
      base: 'ibc/6741F52748DC872D1306AE967479124001217D344AF1003EE75D4ED80825FD6F',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4E79098C704EF8D92062A97B03E08205ED45260EB71C4E79931EB5D8F5532709',
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
      base: 'ibc/4E79098C704EF8D92062A97B03E08205ED45260EB71C4E79931EB5D8F5532709',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A18C492A7A42A701E769FFCC9FBC848EF6690187CDF70908DE8BAECE9C7071DC',
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
      base: 'ibc/A18C492A7A42A701E769FFCC9FBC848EF6690187CDF70908DE8BAECE9C7071DC',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/68954672B31529F69CB067215DDC548257F87C256C8F2B002A6EAE0D57508E51',
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
      base: 'ibc/68954672B31529F69CB067215DDC548257F87C256C8F2B002A6EAE0D57508E51',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AC7C49C55B20055A99FBA6AC1BFD0A32A308E9ABCB6F91F2F14622BCFD126278',
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
      base: 'ibc/AC7C49C55B20055A99FBA6AC1BFD0A32A308E9ABCB6F91F2F14622BCFD126278',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/990E16FCBD0511E55C629F43F39976AC654FE85EBDF3B25EA51559218F00D64D',
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
      base: 'ibc/990E16FCBD0511E55C629F43F39976AC654FE85EBDF3B25EA51559218F00D64D',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/31EB466B68287AD0BB5095BBADFC61C21D60EEC975726E8A78F5B44F62C4895A',
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
      base: 'ibc/31EB466B68287AD0BB5095BBADFC61C21D60EEC975726E8A78F5B44F62C4895A',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A7F0520829FA9C7E6BD84365853DA4113766B22963969168DC2C333E9D4C6853',
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
      base: 'ibc/A7F0520829FA9C7E6BD84365853DA4113766B22963969168DC2C333E9D4C6853',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B5D345D5164F857B494CBA6809A2FB94BCBEEA303DE4925D74DFB07ED24F6132',
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
      base: 'ibc/B5D345D5164F857B494CBA6809A2FB94BCBEEA303DE4925D74DFB07ED24F6132',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/7DA8E9930D768D1A232DFBD97F2242FC45309CFB012D2AC1092E259188C55503',
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
      base: 'ibc/7DA8E9930D768D1A232DFBD97F2242FC45309CFB012D2AC1092E259188C55503',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/94A00CB8709BD9CBE6A7FA43FFE55917AB7A924632540379932EEC447262A7D7',
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
      base: 'ibc/94A00CB8709BD9CBE6A7FA43FFE55917AB7A924632540379932EEC447262A7D7',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E37EAFDBB9653E22B362B77BA115793A9B7154AD98CFCDB56352A77BAB306D34',
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
      base: 'ibc/E37EAFDBB9653E22B362B77BA115793A9B7154AD98CFCDB56352A77BAB306D34',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AEA805754BEB8F1AE9D4F940B186EF4209017A00D71583A6120784A06C4FD406',
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
      base: 'ibc/AEA805754BEB8F1AE9D4F940B186EF4209017A00D71583A6120784A06C4FD406',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0F1A425C4822EB633F6310FA972B1B6D8F57A914324BE0FA69A2D14D30A69AD7',
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
      base: 'ibc/0F1A425C4822EB633F6310FA972B1B6D8F57A914324BE0FA69A2D14D30A69AD7',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A2CB2608D0FAB2B37F26105A7B760C7FB26EBA25D4B7BAAE9162DA49A3ED321F',
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
      base: 'ibc/A2CB2608D0FAB2B37F26105A7B760C7FB26EBA25D4B7BAAE9162DA49A3ED321F',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/139DFB8837E28D0B8815E65A4FEFE786300FAC69DB6A16579242E973ED4FA2D5',
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
      base: 'ibc/139DFB8837E28D0B8815E65A4FEFE786300FAC69DB6A16579242E973ED4FA2D5',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F3A34E50DE79BB209E8000F473CF2CE251C3446F1E72FAB8ED426ECA3434797C',
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
      base: 'ibc/F3A34E50DE79BB209E8000F473CF2CE251C3446F1E72FAB8ED426ECA3434797C',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C55AA0CB4302F48666E86EFFB06DE8E3E01E28B0764E146E73D03A9A8F4FF8CA',
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
      base: 'ibc/C55AA0CB4302F48666E86EFFB06DE8E3E01E28B0764E146E73D03A9A8F4FF8CA',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/7784D38B215696537AEAE221C883975F52A504AFFFFC3628FDA36D9B2A462297',
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
      base: 'ibc/7784D38B215696537AEAE221C883975F52A504AFFFFC3628FDA36D9B2A462297',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9E83FD51062914A9033AA783307BFA1EC4463CC8C5D95C94BAD66DB6507A7309',
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
      base: 'ibc/9E83FD51062914A9033AA783307BFA1EC4463CC8C5D95C94BAD66DB6507A7309',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/62F40277AE83D1E23DB0B9BBA39C900CB1BF690E82B94F0827FB8F0E86B6D649',
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
      base: 'ibc/62F40277AE83D1E23DB0B9BBA39C900CB1BF690E82B94F0827FB8F0E86B6D649',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2E9F31E488DE8EAA3CC709F03A3F9C75E25389EE2D286678C6C9728295604955',
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
      base: 'ibc/2E9F31E488DE8EAA3CC709F03A3F9C75E25389EE2D286678C6C9728295604955',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BDD0F40B5531BB33EF875CF6B35C395A249FCC1E67DF8022E49A26B4D4671549',
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
      base: 'ibc/BDD0F40B5531BB33EF875CF6B35C395A249FCC1E67DF8022E49A26B4D4671549',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2425756A3919902D05AF404897363BBD590CEEB4D28A92A33F8B41F369A12B0C',
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
      base: 'ibc/2425756A3919902D05AF404897363BBD590CEEB4D28A92A33F8B41F369A12B0C',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/63065E81E8C65F5F8062F42C26C14F06FB9DD326A45F03B8DBE652DD656CE744',
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
      base: 'ibc/63065E81E8C65F5F8062F42C26C14F06FB9DD326A45F03B8DBE652DD656CE744',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BF96B29121C15BB8EBB9638DF97EFA17500921EABB7D7CC6858E732061CF450B',
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
      base: 'ibc/BF96B29121C15BB8EBB9638DF97EFA17500921EABB7D7CC6858E732061CF450B',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3CC0FB4106D781B9043D6D2B48F053A56EE0BE93694A0FE12769EEB18B2A5ED7',
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
      base: 'ibc/3CC0FB4106D781B9043D6D2B48F053A56EE0BE93694A0FE12769EEB18B2A5ED7',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0A9B749FF3A0E86C9F6D46919D081450BE65482594E7417BE69D5D65A62761E7',
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
      base: 'ibc/0A9B749FF3A0E86C9F6D46919D081450BE65482594E7417BE69D5D65A62761E7',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/CF15744F91508EA5E1908CDA8B31B971FFAF517128FAB6F700F665D974F97CFD',
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
      base: 'ibc/CF15744F91508EA5E1908CDA8B31B971FFAF517128FAB6F700F665D974F97CFD',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/65D7BAABFB2A4BD9DBEC7615B94750662823D92932A6325E81005FAD2C224F62',
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
      base: 'ibc/65D7BAABFB2A4BD9DBEC7615B94750662823D92932A6325E81005FAD2C224F62',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2DEDF53019EB1CD539EAA43FB04D46782FEE7C799CB7503F93941FA947131566',
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
      base: 'ibc/2DEDF53019EB1CD539EAA43FB04D46782FEE7C799CB7503F93941FA947131566',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0EC328DD91331768108986A07829B30EB0E67DF987C0A3D3B1E449A27B15AE5C',
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
      base: 'ibc/0EC328DD91331768108986A07829B30EB0E67DF987C0A3D3B1E449A27B15AE5C',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/339C4DE5BAEE2D622310575C098989288DBE91D131B43DAFF6A836CE247099C5',
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
      base: 'ibc/339C4DE5BAEE2D622310575C098989288DBE91D131B43DAFF6A836CE247099C5',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/69D624F62A48B973A43ADA776DAEEB3314F6CBD84F8D7A75DC1EBB45A0AB7688',
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
      base: 'ibc/69D624F62A48B973A43ADA776DAEEB3314F6CBD84F8D7A75DC1EBB45A0AB7688',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/D66EEC1E843C5AAAED8105076DCF873C976E02B0CED6AF279E74D9FB9D43084C',
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
      base: 'ibc/D66EEC1E843C5AAAED8105076DCF873C976E02B0CED6AF279E74D9FB9D43084C',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A08A30B8A1E879E2ADAC95DDF57EA062B058A1EAC1E51FDE56CF0CE1BD195348',
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
      base: 'ibc/A08A30B8A1E879E2ADAC95DDF57EA062B058A1EAC1E51FDE56CF0CE1BD195348',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/29FB17C59314D7BDA947C320747525A7FB071FF867BF395DCAC106D5EC0913FC',
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
      base: 'ibc/29FB17C59314D7BDA947C320747525A7FB071FF867BF395DCAC106D5EC0913FC',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/02C5DF5EB3CC0054F7B79192511713B5422A6B2244EAAB7C0A5E2A1946C6DFE4',
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
      base: 'ibc/02C5DF5EB3CC0054F7B79192511713B5422A6B2244EAAB7C0A5E2A1946C6DFE4',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C7E9A883C9B866CC95563E6F13EBB3DF387A0793C1148A308BC4BF86545CE42B',
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
      base: 'ibc/C7E9A883C9B866CC95563E6F13EBB3DF387A0793C1148A308BC4BF86545CE42B',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/0D67200132ACB86CAB913EF9B7E3F63C13C327A67EC516271123A21DFE2F06E9',
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
      base: 'ibc/0D67200132ACB86CAB913EF9B7E3F63C13C327A67EC516271123A21DFE2F06E9',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/7EBF2C3F0C03FBADFBA490C304B7EDF72B4BEE3F6165F72A08E770B95C98B25B',
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
      base: 'ibc/7EBF2C3F0C03FBADFBA490C304B7EDF72B4BEE3F6165F72A08E770B95C98B25B',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C9E4B61FD1B0A052C3C247F27526F3870AF92456E490A61388180B89F54BAE8F',
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
      base: 'ibc/C9E4B61FD1B0A052C3C247F27526F3870AF92456E490A61388180B89F54BAE8F',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/72F72764596167108799DAF6772E4838AD45C4D607609D33D2517BF1B206974F',
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
      base: 'ibc/72F72764596167108799DAF6772E4838AD45C4D607609D33D2517BF1B206974F',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3208F16BDD7B6B8DF917DF6C759174AA65F4E3663F58149452B174D377BDF32A',
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
      base: 'ibc/3208F16BDD7B6B8DF917DF6C759174AA65F4E3663F58149452B174D377BDF32A',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/81C4C57B3D86E2642955AE9A2504A6F6EBFC78D0DB11E58ACDC5BC0F73883223',
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
      base: 'ibc/81C4C57B3D86E2642955AE9A2504A6F6EBFC78D0DB11E58ACDC5BC0F73883223',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AC642F3C00D6EB4673AABA4DA3BD92E615A580D5CAA0C9A767C3C8F25665A2E4',
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
      base: 'ibc/AC642F3C00D6EB4673AABA4DA3BD92E615A580D5CAA0C9A767C3C8F25665A2E4',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/76805CEF98AE5DE544A14278910E609FB228886FE69D211DBBFD1E8940852B98',
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
      base: 'ibc/76805CEF98AE5DE544A14278910E609FB228886FE69D211DBBFD1E8940852B98',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/39323DD21E2D1CA1AF5F079033D7A8D1FE82D16D77DDB87C3671ECFE1DDC1902',
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
      base: 'ibc/39323DD21E2D1CA1AF5F079033D7A8D1FE82D16D77DDB87C3671ECFE1DDC1902',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/ACBE768EBE5B13F6B97745252535D2499297E219422A9E0DC94AE2641DCC0A84',
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
      base: 'ibc/ACBE768EBE5B13F6B97745252535D2499297E219422A9E0DC94AE2641DCC0A84',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/33BB189B5C6ED8475096BB179690CAA7CBF01F4754687B0DF7B490333513FB48',
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
      base: 'ibc/33BB189B5C6ED8475096BB179690CAA7CBF01F4754687B0DF7B490333513FB48',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9C174165D9AE68B6CFEABD201A0279164D7C56078C85C03768F470F4D2830540',
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
      base: 'ibc/9C174165D9AE68B6CFEABD201A0279164D7C56078C85C03768F470F4D2830540',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/25AE0EE54228E90FEC6AF85FDDE45A2D27372077F632C1D2059BA8F09B05F1DC',
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
      base: 'ibc/25AE0EE54228E90FEC6AF85FDDE45A2D27372077F632C1D2059BA8F09B05F1DC',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6C09584928DF88DD23638FE30BC17AA10DF249743BC96BB66DF827D558F86B82',
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
      base: 'ibc/6C09584928DF88DD23638FE30BC17AA10DF249743BC96BB66DF827D558F86B82',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C42AE4E32F8A98AC46599CC6216EA5112DC416B0156F2CBBC4BDF48F6903A1BB',
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
      base: 'ibc/C42AE4E32F8A98AC46599CC6216EA5112DC416B0156F2CBBC4BDF48F6903A1BB',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom:
            'ibc/ED456C2A1ABDEA97AF2D10E77715A87700C13CD79AC096C27FADC4243FF2D839',
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
      base: 'ibc/ED456C2A1ABDEA97AF2D10E77715A87700C13CD79AC096C27FADC4243FF2D839',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A5F194C88E7746208E68DC75562B55FB029A1CD78C8AEFFD2981793FAC2630D8',
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
      base: 'ibc/A5F194C88E7746208E68DC75562B55FB029A1CD78C8AEFFD2981793FAC2630D8',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/65CD09224ABF3E786B76EABD55BA3F89D827C1168A66FAFBA6F93765484DCD61',
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
      base: 'ibc/65CD09224ABF3E786B76EABD55BA3F89D827C1168A66FAFBA6F93765484DCD61',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/39074AEF44B6C98EDB3A9AFDE46D601AD02B7548FC10795A705EB397286758E3',
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
      base: 'ibc/39074AEF44B6C98EDB3A9AFDE46D601AD02B7548FC10795A705EB397286758E3',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B1EC2BFF1740DD0FB0D8622CBFD9A673C1CB3F6946F518167C6CF955C31BC426',
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
      base: 'ibc/B1EC2BFF1740DD0FB0D8622CBFD9A673C1CB3F6946F518167C6CF955C31BC426',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/18CF407621E7FE774223450D1E67A1FD39937ADE378D1757C28F0F8FA5FE7819',
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
      base: 'ibc/18CF407621E7FE774223450D1E67A1FD39937ADE378D1757C28F0F8FA5FE7819',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5F80DACB67B3FAF21C369FB329E95FAFB8EACABC5DAEF3851226EE6E730EED79',
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
      base: 'ibc/5F80DACB67B3FAF21C369FB329E95FAFB8EACABC5DAEF3851226EE6E730EED79',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9D5AA5994A865B072CAB2FAE403E83077BB9DE18AECE0F92AE1E13B850A9BBE7',
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
      base: 'ibc/9D5AA5994A865B072CAB2FAE403E83077BB9DE18AECE0F92AE1E13B850A9BBE7',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E79385A11979A6C9247DE50EC1E8E324A7D82364EAB9789E5AF51B96A7AC862B',
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
      base: 'ibc/E79385A11979A6C9247DE50EC1E8E324A7D82364EAB9789E5AF51B96A7AC862B',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C68BE2454B92D473B768A19AE06F3FE8A4C5E598C498ADD10C3D366F7B34055F',
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
      base: 'ibc/C68BE2454B92D473B768A19AE06F3FE8A4C5E598C498ADD10C3D366F7B34055F',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/377EAC3F23229FF44A9B256F9DAE177C2AE0CCCA96C4D5DC3C6F9D199F5B058B',
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
      base: 'ibc/377EAC3F23229FF44A9B256F9DAE177C2AE0CCCA96C4D5DC3C6F9D199F5B058B',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6709D1F3D54000496DFD5BA7EDF1FC2E0168FC689B5CD95C7DDF57602E106A15',
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
      base: 'ibc/6709D1F3D54000496DFD5BA7EDF1FC2E0168FC689B5CD95C7DDF57602E106A15',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6419186BEC422BE52AA8F667D9A9AFBA41F36C0AE9486B96768595AC1F3C2D32',
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
      base: 'ibc/6419186BEC422BE52AA8F667D9A9AFBA41F36C0AE9486B96768595AC1F3C2D32',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DFB23CC98B8E215086E12F5AF252C07EA737150BE1ED4FBF48C10D532A1F6581',
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
      base: 'ibc/DFB23CC98B8E215086E12F5AF252C07EA737150BE1ED4FBF48C10D532A1F6581',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/8FC342C271659DC2F7185B8DA0255833DD26292B8CB3755C3D2C295A5A79C2FE',
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
      base: 'ibc/8FC342C271659DC2F7185B8DA0255833DD26292B8CB3755C3D2C295A5A79C2FE',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9EDA6CE46F6786D1BACFA9D06CA33E1F5B3E6040702A5F454B7257854FFCD02C',
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
      base: 'ibc/9EDA6CE46F6786D1BACFA9D06CA33E1F5B3E6040702A5F454B7257854FFCD02C',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/98839F0201E946B59E79B04D3EF4190468559480E3DAE8B21E92E2B98A9109FA',
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
      base: 'ibc/98839F0201E946B59E79B04D3EF4190468559480E3DAE8B21E92E2B98A9109FA',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/88FA9F9599494C967E7770830149E2567331533B5CFF59D237345BBC41C572BE',
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
      base: 'ibc/88FA9F9599494C967E7770830149E2567331533B5CFF59D237345BBC41C572BE',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/361AAB34670910081F1D6B347EAE064E7CBBAE9F9CF374FB4E6BF86B07E90506',
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
      base: 'ibc/361AAB34670910081F1D6B347EAE064E7CBBAE9F9CF374FB4E6BF86B07E90506',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A8A8C07C52B2F29FB99A376A37D521F5B5EB58ED450F6528D1B3D6248A6C9AF0',
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
      base: 'ibc/A8A8C07C52B2F29FB99A376A37D521F5B5EB58ED450F6528D1B3D6248A6C9AF0',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'ibc/6495F2BBA2F4989E25F6AD15D0229D80533DD75C772BCF061070B9DD30C302F8',
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
      base: 'ibc/6495F2BBA2F4989E25F6AD15D0229D80533DD75C772BCF061070B9DD30C302F8',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [
        {
          denom:
            'ibc/B7F987660FEE4750F2D8AF3991063BB58EE962BD2F180DD9622E4DB727809669',
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
      base: 'ibc/B7F987660FEE4750F2D8AF3991063BB58EE962BD2F180DD9622E4DB727809669',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/EF538F0E6EBD3177410E93F3F7412FDA265937288B2F5A15EBAEB640928CDEE0',
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
      base: 'ibc/EF538F0E6EBD3177410E93F3F7412FDA265937288B2F5A15EBAEB640928CDEE0',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A9E2509A6AB3605DE4210278AD10F007DC5EADC0765F02C374EA49AEF7C7377E',
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
      base: 'ibc/A9E2509A6AB3605DE4210278AD10F007DC5EADC0765F02C374EA49AEF7C7377E',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/DA4E1488E49BA4A6688F7D251299C92C31D2621C887CD0BF8AD44CD1CAF3D4B6',
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
      base: 'ibc/DA4E1488E49BA4A6688F7D251299C92C31D2621C887CD0BF8AD44CD1CAF3D4B6',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/BA52C1B7A044E85E02148291A534F0F7C5F049CAF73823354A37FEC14CEF20F6',
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
      base: 'ibc/BA52C1B7A044E85E02148291A534F0F7C5F049CAF73823354A37FEC14CEF20F6',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B79C1427E77BA44A5DBCE43A81AD5A62FCA75D37166D5020215C9C5584D2DE65',
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
      base: 'ibc/B79C1427E77BA44A5DBCE43A81AD5A62FCA75D37166D5020215C9C5584D2DE65',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/ACEA7AC3115457B00956045E2EF9706049867E74EEF6570E537C499DE221A2AD',
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
      base: 'ibc/ACEA7AC3115457B00956045E2EF9706049867E74EEF6570E537C499DE221A2AD',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3C32365D2503AABEF9BC2FDFEAC2761FF63E8AF78941FD429300965E4213BE3D',
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
      base: 'ibc/3C32365D2503AABEF9BC2FDFEAC2761FF63E8AF78941FD429300965E4213BE3D',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/D4DC1306287E54D78F9B78B628D36F958EC9E8D13ACA826A41B67375E3680CB6',
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
      base: 'ibc/D4DC1306287E54D78F9B78B628D36F958EC9E8D13ACA826A41B67375E3680CB6',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/213EFF9D52AD0B99C62B9EF965B4A2B2220BF0AA66B6380BE483D215F195AE09',
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
      base: 'ibc/213EFF9D52AD0B99C62B9EF965B4A2B2220BF0AA66B6380BE483D215F195AE09',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1C86C8AA60D0A4E011AF15625F24CD4FB408ABA4D4DFF146F79AA6F0E8FF2E7E',
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
      base: 'ibc/1C86C8AA60D0A4E011AF15625F24CD4FB408ABA4D4DFF146F79AA6F0E8FF2E7E',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4CB3B57445ED791DEAF0336D87C6299C6271387E447512908B3AD1C22A01ABBB',
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
      base: 'ibc/4CB3B57445ED791DEAF0336D87C6299C6271387E447512908B3AD1C22A01ABBB',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom:
            'ibc/F188817257B011CB94ED8BF0B3B3790FA8F875C29449D951AD2292EA8D8DF4D9',
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
      base: 'ibc/F188817257B011CB94ED8BF0B3B3790FA8F875C29449D951AD2292EA8D8DF4D9',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1CC9B76DE5F1EFF39A2ED4BBF6A2C9D327AE097B5975DFDE01F49C25AC2CF3E4',
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
      base: 'ibc/1CC9B76DE5F1EFF39A2ED4BBF6A2C9D327AE097B5975DFDE01F49C25AC2CF3E4',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/3C69678B4C2E4EE2BA97818FD14D07B9A1302E0D6513CE8CCCE7A66E26549228',
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
      base: 'ibc/3C69678B4C2E4EE2BA97818FD14D07B9A1302E0D6513CE8CCCE7A66E26549228',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/2F6FA0BE9EA559728B6F19BEB3BDF40A5C08153602F125134FA58C2A1B51FD9D',
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
      base: 'ibc/2F6FA0BE9EA559728B6F19BEB3BDF40A5C08153602F125134FA58C2A1B51FD9D',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom:
            'ibc/C32234F68B4483BC0A3D3349D83B4A10C71EE40199A53FC3BE69CB2EACD4929E',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/C32234F68B4483BC0A3D3349D83B4A10C71EE40199A53FC3BE69CB2EACD4929E',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [
        {
          denom:
            'ibc/EC7817D663C01A19498AD6B51B4EB18E661C1709E686112D6D76056662EF3A83',
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
      base: 'ibc/EC7817D663C01A19498AD6B51B4EB18E661C1709E686112D6D76056662EF3A83',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/C67D506E224689F5A0D6F1114FE1571A5AA98BB101617D8BA43CF63444D64D52',
          exponent: 0,
          aliases: [
            'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C67D506E224689F5A0D6F1114FE1571A5AA98BB101617D8BA43CF63444D64D52',
      name: 'Bostrom Hydrogen',
      display:
        'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6337A8B3B1C73D35E2B7E92CBDE8667E527565FCB01E994B1003AEC1E8DF96AE',
          exponent: 0,
          aliases: [
            'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6337A8B3B1C73D35E2B7E92CBDE8667E527565FCB01E994B1003AEC1E8DF96AE',
      name: 'Bostrom Tocyb',
      display:
        'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1526B8C23AC4BEF45DC29910AF1DB37BE8A5064C5A7595011A4D87A4FCE42C0F',
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
      base: 'ibc/1526B8C23AC4BEF45DC29910AF1DB37BE8A5064C5A7595011A4D87A4FCE42C0F',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6B0DAD60ED3D21EEB67A4C716CBB8FF089027F01EBDCD3C5EA0BC6DA0CE4C098',
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
      base: 'ibc/6B0DAD60ED3D21EEB67A4C716CBB8FF089027F01EBDCD3C5EA0BC6DA0CE4C098',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/766006AE086A06706DB46705B1358D8343FE031C9AE1FE995BA52B17C4531290',
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
      base: 'ibc/766006AE086A06706DB46705B1358D8343FE031C9AE1FE995BA52B17C4531290',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E4F7BDC63A2D7FE1AFFF0A03FFBE6FE8EC0972962EAD589F5105E3DF584AB5DE',
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
      base: 'ibc/E4F7BDC63A2D7FE1AFFF0A03FFBE6FE8EC0972962EAD589F5105E3DF584AB5DE',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/94AE40EA1E2CA35FC176AA0A5068F284CA6A95ADC3347C056AC5338345F30E05',
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
      base: 'ibc/94AE40EA1E2CA35FC176AA0A5068F284CA6A95ADC3347C056AC5338345F30E05',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/46715A8DBE58F52E050123B7D26F06E492AB41EA958E3EE92DE2DDCB648B96A9',
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
      base: 'ibc/46715A8DBE58F52E050123B7D26F06E492AB41EA958E3EE92DE2DDCB648B96A9',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'Puppy',
      denom_units: [
        {
          denom:
            'ibc/3B49C132894AF87814BFF6CE5C340AED7A95A1C99BBA7CB4BE9E5CB6A21BC954',
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
      base: 'ibc/3B49C132894AF87814BFF6CE5C340AED7A95A1C99BBA7CB4BE9E5CB6A21BC954',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/ECF4B671BEE659080BBA656B168BDD2A60E88C9138112E3A47B08DC108686401',
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
      base: 'ibc/ECF4B671BEE659080BBA656B168BDD2A60E88C9138112E3A47B08DC108686401',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/7714A73F9122992F9542C4FF9B0FD572828191E9FAD7C21465A029FCD1914A20',
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
      base: 'ibc/7714A73F9122992F9542C4FF9B0FD572828191E9FAD7C21465A029FCD1914A20',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/85E221C9C371076A041F67FC9ED65FB3251A2A18D9C2A3A48BBE8E8D1E2A1839',
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
      base: 'ibc/85E221C9C371076A041F67FC9ED65FB3251A2A18D9C2A3A48BBE8E8D1E2A1839',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/A3C16A91FC33248670F14113E0D5DBB78FBC85BEF978F6F5854D306990160BC5',
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
      base: 'ibc/A3C16A91FC33248670F14113E0D5DBB78FBC85BEF978F6F5854D306990160BC5',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B48C1A79063C1F54EE9B24159BF77E35CAD39243BD2A350F256B5CB9DEA2934F',
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
      base: 'ibc/B48C1A79063C1F54EE9B24159BF77E35CAD39243BD2A350F256B5CB9DEA2934F',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0D376C07E600F4186489CBD9AD87F9F235E168146BB47CA4473756CB433C9949',
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
      base: 'ibc/0D376C07E600F4186489CBD9AD87F9F235E168146BB47CA4473756CB433C9949',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/040290527BCA8FD6734141169893DA5A40F42DE1AB692AF49B58CFC284AAD774',
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
      base: 'ibc/040290527BCA8FD6734141169893DA5A40F42DE1AB692AF49B58CFC284AAD774',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/79C219F19C1E6CD4356657FE5A52EC33E3B5C273AD7EB772A64929FFC730CDB6',
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
      base: 'ibc/79C219F19C1E6CD4356657FE5A52EC33E3B5C273AD7EB772A64929FFC730CDB6',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/83C54E980DD1A605676D970533EB1E8AD32A8050E2496AA193DB3FB819580EB5',
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
      base: 'ibc/83C54E980DD1A605676D970533EB1E8AD32A8050E2496AA193DB3FB819580EB5',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
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
            'ibc/AD5F4C0FAF230E2BD8BE6FCD320E22994DE0F74712B2020EE70DFB7FF8F77F17',
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
      base: 'ibc/AD5F4C0FAF230E2BD8BE6FCD320E22994DE0F74712B2020EE70DFB7FF8F77F17',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/9A3E557F91FA7DD9240216FF6AE04BF84EE7D0768F19A1F5444DF38937165E8C',
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
      base: 'ibc/9A3E557F91FA7DD9240216FF6AE04BF84EE7D0768F19A1F5444DF38937165E8C',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B4842E0D986864FAE9201116F488B56332687DCE5CD0DD8DBDF63867F248B229',
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
      base: 'ibc/B4842E0D986864FAE9201116F488B56332687DCE5CD0DD8DBDF63867F248B229',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AF2E5AB6FEE6340B964FDF88D81593BF9C7DC4C0AFA92FC9081F9C950193B4D4',
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
      base: 'ibc/AF2E5AB6FEE6340B964FDF88D81593BF9C7DC4C0AFA92FC9081F9C950193B4D4',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/1EF45B545CEF14BA1247321D77E57B0CA6A27FD3BD6C52FF2E1B71C146D68BEB',
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
      base: 'ibc/1EF45B545CEF14BA1247321D77E57B0CA6A27FD3BD6C52FF2E1B71C146D68BEB',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/41CF654844215AD72D5F674A6B6299B538ADBEDA87E458B7322536951F861AFC',
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
      base: 'ibc/41CF654844215AD72D5F674A6B6299B538ADBEDA87E458B7322536951F861AFC',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/B407E7077631F955FDB208A6830923EDB568B0EC1A69EE61E7B012627F59DFF1',
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
      base: 'ibc/B407E7077631F955FDB208A6830923EDB568B0EC1A69EE61E7B012627F59DFF1',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/5D6C77E639FBEB7FEB009D5974147020D36BD7505D699CE26FE118E49F2829CA',
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
      base: 'ibc/5D6C77E639FBEB7FEB009D5974147020D36BD7505D699CE26FE118E49F2829CA',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/AD8D5D52F63305E6F053151A4C3E453512475C7A1CCC209D44CA3FEB8FED2635',
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
      base: 'ibc/AD8D5D52F63305E6F053151A4C3E453512475C7A1CCC209D44CA3FEB8FED2635',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/047BEDBC2BFA6E7B22CE9C7B14A1C7C5D2DD9E99548D4953C2C2B7252F45F39F',
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
      base: 'ibc/047BEDBC2BFA6E7B22CE9C7B14A1C7C5D2DD9E99548D4953C2C2B7252F45F39F',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/D99517D5906B71A9D3CD4F25728BCC967EAE878B58ABE3EC5B4E327A7571CFA9',
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
      base: 'ibc/D99517D5906B71A9D3CD4F25728BCC967EAE878B58ABE3EC5B4E327A7571CFA9',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/8B0CE63700AFCBE0DF164DE330E2EADDB0DD107BCEC1E8CBC253241E90FA530C',
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
      base: 'ibc/8B0CE63700AFCBE0DF164DE330E2EADDB0DD107BCEC1E8CBC253241E90FA530C',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/F36867FF75B8741DB5FCA733514ACB84A6E80CD667A69631AA74F85852FC435B',
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
      base: 'ibc/F36867FF75B8741DB5FCA733514ACB84A6E80CD667A69631AA74F85852FC435B',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom:
            'ibc/1F5267EB2D2184DBEE86426D21B6BBED59A1819EC53B68B181483DA6E04E130A',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/1F5267EB2D2184DBEE86426D21B6BBED59A1819EC53B68B181483DA6E04E130A',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/9B32CB7753679A6675208D88AD5367F0322CBBDE2D53FA9D65B8A5313DC07C5E',
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
      base: 'ibc/9B32CB7753679A6675208D88AD5367F0322CBBDE2D53FA9D65B8A5313DC07C5E',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/621FAFCBADB869E5A15F77A55F0FCB746A3A5DD4678EF26EC2A86789FA665C85',
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
      base: 'ibc/621FAFCBADB869E5A15F77A55F0FCB746A3A5DD4678EF26EC2A86789FA665C85',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/62830EA7499633E86D24D30503DA4E6EC5F7D6EADEDAB768EAACA33DCD52336C',
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
      base: 'ibc/62830EA7499633E86D24D30503DA4E6EC5F7D6EADEDAB768EAACA33DCD52336C',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/50662F0842DCE2E70402CB28D5EA91A64C5CDB88D096013DC80E6319E8CCC7C5',
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
      base: 'ibc/50662F0842DCE2E70402CB28D5EA91A64C5CDB88D096013DC80E6319E8CCC7C5',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/6A968EABDB9E0A52B811505C043F27AFAD7024505C85C6A6237AC28A6B645A22',
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
      base: 'ibc/6A968EABDB9E0A52B811505C043F27AFAD7024505C85C6A6237AC28A6B645A22',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/4891B91016E23539422191C4726AFF704F8927509FE813406BF94054FF166F08',
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
      base: 'ibc/4891B91016E23539422191C4726AFF704F8927509FE813406BF94054FF166F08',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5653A65EEE2A9EA7913354A5433FC5EE230439A30EFE1B1FCD26937799F60F6F',
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
      base: 'ibc/5653A65EEE2A9EA7913354A5433FC5EE230439A30EFE1B1FCD26937799F60F6F',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/E725B9C4222F1352988044350EBD28B4640CF078702ACF9595BC53C8DF36BF98',
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
      base: 'ibc/E725B9C4222F1352988044350EBD28B4640CF078702ACF9595BC53C8DF36BF98',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/554A1DD781968E01912BD8D9F12E07D77A66A02E3BF0ABCB0C5E7BFA0F48D970',
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
      base: 'ibc/554A1DD781968E01912BD8D9F12E07D77A66A02E3BF0ABCB0C5E7BFA0F48D970',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/CC98B33870B1324B9635CA4118E907B41A65C309BCFC92450CFEACDA336529B2',
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
      base: 'ibc/CC98B33870B1324B9635CA4118E907B41A65C309BCFC92450CFEACDA336529B2',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
            'ibc/0E2ED7C8E6E100CB923F42923EF19010B6FFAA1B6866ECACB99339060A192BFC',
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
      base: 'ibc/0E2ED7C8E6E100CB923F42923EF19010B6FFAA1B6866ECACB99339060A192BFC',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'The memecoin built for the Celestia community',
      denom_units: [
        {
          denom:
            'ibc/7E90903AB09B12991D3FA93B121B7DA4EA04650CD233D6D196A3B0F8090FA84C',
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
      base: 'ibc/7E90903AB09B12991D3FA93B121B7DA4EA04650CD233D6D196A3B0F8090FA84C',
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
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/45610025C9415408B354F29EEF535ADFD94151414305FD3E41BFE121B5CA5790',
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
      base: 'ibc/45610025C9415408B354F29EEF535ADFD94151414305FD3E41BFE121B5CA5790',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
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
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/6E3AB802140FBCE271E5C3A91910D18D67CE2D376F3186FAB7F4E26ABCCCAE73',
          exponent: 0,
          aliases: [
            'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo'
          ]
        },
        {
          denom: 'bOSMO',
          exponent: 6
        }
      ],
      address:
        'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'ibc/6E3AB802140FBCE271E5C3A91910D18D67CE2D376F3186FAB7F4E26ABCCCAE73',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-641',
            base_denom:
              'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }
      ]
    }
  ]
};
export default assets;
