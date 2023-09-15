import { AssetList } from '@chain-registry/types';
const asset_list: AssetList = {
  chain_name: 'juno',
  assets: [
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
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
            channel_id: 'channel-35',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
          exponent: 0,
          aliases: ['umntl']
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      base: 'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
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
            channel_id: 'channel-2',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-83'
          }
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
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
            channel_id: 'channel-4',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
      },
      coingecko_id: 'axlusdc'
    },
    {
      description: "Frax's fractional-algorithmic stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036',
          exponent: 0,
          aliases: ['frax-wei']
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      base: 'ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'frax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F',
          exponent: 0,
          aliases: ['dai-wei']
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      base: 'ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'dai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA',
          exponent: 0,
          aliases: ['uusdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uusdt',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17',
          exponent: 0,
          aliases: ['weth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'weth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      base: 'ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wbtc-satoshi',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/686AF664CCC44119B3DED5267CCA02CE6FA877A4C3EF71408FCA7B30EBD505C4',
          exponent: 0,
          aliases: ['aave-wei']
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      base: 'ibc/686AF664CCC44119B3DED5267CCA02CE6FA877A4C3EF71408FCA7B30EBD505C4',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aave-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/9D4421F8337456349864798C4928500797AF09C002A288041F1748F7846EFA19',
          exponent: 0,
          aliases: ['ape-wei']
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      base: 'ibc/9D4421F8337456349864798C4928500797AF09C002A288041F1748F7846EFA19',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ape-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/424DD4BE67F6ADD52BA9A810B0B4157694A962B96BC676E4A22EB1E50679677F',
          exponent: 0,
          aliases: ['axs-wei']
        },
        {
          denom: 'axs',
          exponent: 18
        }
      ],
      base: 'ibc/424DD4BE67F6ADD52BA9A810B0B4157694A962B96BC676E4A22EB1E50679677F',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'axs-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/0409596DFE559E1B05D821CA3A5F8E290A7C2C3408B4872595CA0E22F13A09FE',
          exponent: 0,
          aliases: ['link-wei']
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      base: 'ibc/0409596DFE559E1B05D821CA3A5F8E290A7C2C3408B4872595CA0E22F13A09FE',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'link-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/4A59932EAD8A140F66554E8E2B5CB80DCA5314A75A889F0AA2E648D96B69847F',
          exponent: 0,
          aliases: ['mkr-wei']
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      base: 'ibc/4A59932EAD8A140F66554E8E2B5CB80DCA5314A75A889F0AA2E648D96B69847F',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'mkr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/4AA19294AE89888CE7DB64CA76781EE2FE9A0B703B8A5F156AD258428F7A77C4',
          exponent: 0,
          aliases: ['rai-wei']
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      base: 'ibc/4AA19294AE89888CE7DB64CA76781EE2FE9A0B703B8A5F156AD258428F7A77C4',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'rai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/D66D0A82177FF29CBB8A83705C26C28D45A14678579E350B10493D359ECFD851',
          exponent: 0,
          aliases: ['shib-wei']
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      base: 'ibc/D66D0A82177FF29CBB8A83705C26C28D45A14678579E350B10493D359ECFD851',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'shib-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/C740EF04C154165820688D9438AD90EA1E6B59BFF3715197AA570E928A44A937',
          exponent: 0,
          aliases: ['steth-wei']
        },
        {
          denom: 'steth',
          exponent: 18
        }
      ],
      base: 'ibc/C740EF04C154165820688D9438AD90EA1E6B59BFF3715197AA570E928A44A937',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'steth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/0313AD311FA169EC5A130DB2EF0840CBA4B300ADB6B85A79FBA952FBD3E7B107',
          exponent: 0,
          aliases: ['uni-wei']
        },
        {
          denom: 'uni',
          exponent: 18
        }
      ],
      base: 'ibc/0313AD311FA169EC5A130DB2EF0840CBA4B300ADB6B85A79FBA952FBD3E7B107',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uni-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/30B50C044D1074F0DC1916D9DA79B9F26434632609C3ED0158E22A5D40890D81',
          exponent: 0,
          aliases: ['xcn-wei']
        },
        {
          denom: 'xcn',
          exponent: 18
        }
      ],
      base: 'ibc/30B50C044D1074F0DC1916D9DA79B9F26434632609C3ED0158E22A5D40890D81',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'xcn-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/5D681936B803C055E34687752EE1AA3117EACCA98260F98CC1706E040DCBAC4D',
          exponent: 0,
          aliases: ['dot-planck']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      base: 'ibc/5D681936B803C055E34687752EE1AA3117EACCA98260F98CC1706E040DCBAC4D',
      name: 'Wrapped Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'dot-planck',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wglmr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wmatic-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/735AFF12D7AF5EEC8F4339448BBF001547AEA05CCA6F1CAA60C139AE87828EB1',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/735AFF12D7AF5EEC8F4339448BBF001547AEA05CCA6F1CAA60C139AE87828EB1',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wbnb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/01D29B33757B631D6E02A4AE8A852969273E2476ED83CB3F947D4AA5DB9F151E',
          exponent: 0,
          aliases: ['busd-wei']
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      base: 'ibc/01D29B33757B631D6E02A4AE8A852969273E2476ED83CB3F947D4AA5DB9F151E',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'busd-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/02B88E41C96FCADA33F15642CEE961EE17A63866EDCA4098EDDB6F9C6671EB92',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/02B88E41C96FCADA33F15642CEE961EE17A63866EDCA4098EDDB6F9C6671EB92',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wavax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/BCA8E085B8D4D9D89D5316165E51545B826C5E034EACD6C00A7464C58F318379',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/BCA8E085B8D4D9D89D5316165E51545B826C5E034EACD6C00A7464C58F318379',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wftm-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/AA6342A4B85CBEECD8B97EA11BF78266FD8900D0782BBA64B2A546025A4C2A13',
          exponent: 0,
          aliases: ['polygon-uusdc']
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/AA6342A4B85CBEECD8B97EA11BF78266FD8900D0782BBA64B2A546025A4C2A13',
      name: 'USD Coin from Polygon',
      display: 'polygon-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'polygon-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/AE29EC52972A51930675D851D414CFFC1FB0850B0956C9E06F001358EC46F3A4',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/AE29EC52972A51930675D851D414CFFC1FB0850B0956C9E06F001358EC46F3A4',
      name: 'USD Coin from Avalanche',
      display: 'avalanche-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'avalanche-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/9DC98F4F0ED2816422497CA3D1BE02E38D0656F031173654903ADD248A1C3720',
          exponent: 0,
          aliases: ['wfil-wei']
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      base: 'ibc/9DC98F4F0ED2816422497CA3D1BE02E38D0656F031173654903ADD248A1C3720',
      name: 'Wrapped FIL from Filecoin',
      display: 'fil',
      symbol: 'axlFIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wfil-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png'
      }
    },
    {
      description: 'Arbitrum on Axelar',
      denom_units: [
        {
          denom:
            'ibc/CFBDAF961EC673ADC67091377E56D338E390B8A0953F5FED80387B765E8DCD53',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      base: 'ibc/CFBDAF961EC673ADC67091377E56D338E390B8A0953F5FED80387B765E8DCD53',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'arb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/3406FBBAEB20E62FF238FF6FD061BCF21F515E1546D3E9FF8571B12BDA29DDBB',
          exponent: 0,
          aliases: ['pepe-wei']
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      base: 'ibc/3406FBBAEB20E62FF238FF6FD061BCF21F515E1546D3E9FF8571B12BDA29DDBB',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'pepe-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/847E4A6698D469C9328F1BE68759C78C82891F90B42B7B13BC86462B7F2BE12B',
          exponent: 0,
          aliases: ['cbeth-wei']
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      base: 'ibc/847E4A6698D469C9328F1BE68759C78C82891F90B42B7B13BC86462B7F2BE12B',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'cbeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/10B9D995E2011BA306A3FFDBCD2B6A091002EF225DE02ACED49694B42940DD1F',
          exponent: 0,
          aliases: ['reth-wei']
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      base: 'ibc/10B9D995E2011BA306A3FFDBCD2B6A091002EF225DE02ACED49694B42940DD1F',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'reth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/39A90E0FA128DAE477510F0B9BE848B0D3C6D3BE2A464667B79EAD9BB847CC47',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      base: 'ibc/39A90E0FA128DAE477510F0B9BE848B0D3C6D3BE2A464667B79EAD9BB847CC47',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'sfrxeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D5D1F7B6004D1918CE125862C942F3289DE06E271661C2DD32E3F71479BAF751',
          exponent: 0,
          aliases: ['wsteth-wei']
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      base: 'ibc/D5D1F7B6004D1918CE125862C942F3289DE06E271661C2DD32E3F71479BAF751',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'wsteth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
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
            'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
          exponent: 0,
          aliases: ['ubcna']
        },
        {
          denom: 'bcna',
          exponent: 6
        }
      ],
      base: 'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
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
            channel_id: 'channel-10',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
          exponent: 0,
          aliases: ['ubtsg']
        },
        {
          denom: 'btsg',
          exponent: 6
        }
      ],
      base: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
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
            channel_id: 'channel-5',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Adam Clay a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/FA6CFD7006CF117B671ABAC04A793F76E414A26A5C04EA53AE09640C6E31A647',
          exponent: 0,
          aliases: ['ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09']
        },
        {
          denom: 'clay',
          exponent: 6
        }
      ],
      base: 'ibc/FA6CFD7006CF117B671ABAC04A793F76E414A26A5C04EA53AE09640C6E31A647',
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
            channel_id: 'channel-5',
            base_denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Nicola Fasano a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/E43D26D4E10EAC2EA3C84233CE745A7764E84C76D05BC5E2521E864374C72C05',
          exponent: 0,
          aliases: ['ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7']
        },
        {
          denom: 'fasano',
          exponent: 6
        }
      ],
      base: 'ibc/E43D26D4E10EAC2EA3C84233CE745A7764E84C76D05BC5E2521E864374C72C05',
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
            channel_id: 'channel-5',
            base_denom: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Delta 9 a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/E21E8AC479AC7A7ED6075AC67F6BE30A80035476E63A4BE62811AC8F996D9A9C',
          exponent: 0,
          aliases: ['ft575B10B0CEE2C164D9ED6A96313496F164A9607C']
        },
        {
          denom: 'd9x',
          exponent: 6
        }
      ],
      base: 'ibc/E21E8AC479AC7A7ED6075AC67F6BE30A80035476E63A4BE62811AC8F996D9A9C',
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
            channel_id: 'channel-5',
            base_denom: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'FONTI a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/40F1DDC85C13E9B0ACE9142A369E13E205C82E3DB13B5926B6647BB3EA740AB8',
          exponent: 0,
          aliases: ['ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305']
        },
        {
          denom: 'fonti',
          exponent: 6
        }
      ],
      base: 'ibc/40F1DDC85C13E9B0ACE9142A369E13E205C82E3DB13B5926B6647BB3EA740AB8',
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
            channel_id: 'channel-5',
            base_denom: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'BlackJack a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/7AA7E31096BE94321E240B1C107DBAB48BADBED2460F5BB0D49884F9881EEAFC',
          exponent: 0,
          aliases: ['ft52EEB0EE509AC546ED92EAC8591F731F213DDD16']
        },
        {
          denom: 'bjks',
          exponent: 6
        }
      ],
      base: 'ibc/7AA7E31096BE94321E240B1C107DBAB48BADBED2460F5BB0D49884F9881EEAFC',
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
            channel_id: 'channel-5',
            base_denom: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Rawanne a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/B7DF1BF0322E000392E8EE2EA4AA66E77D73A275C08370086F01D659AD9CC669',
          exponent: 0,
          aliases: ['ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A']
        },
        {
          denom: 'rwne',
          exponent: 6
        }
      ],
      base: 'ibc/B7DF1BF0322E000392E8EE2EA4AA66E77D73A275C08370086F01D659AD9CC669',
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
            channel_id: 'channel-5',
            base_denom: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Enmoda a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/ECCD9807D20166417567FD0ABE9ADDB20BD55EA8C27A994DF343D437B430E8B0',
          exponent: 0,
          aliases: ['ft85AE1716C5E39EA6D64BBD7898C3899A7B500626']
        },
        {
          denom: 'enmoda',
          exponent: 6
        }
      ],
      base: 'ibc/ECCD9807D20166417567FD0ABE9ADDB20BD55EA8C27A994DF343D437B430E8B0',
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
            channel_id: 'channel-5',
            base_denom: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: '404Deep Records a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/4E2AB358B9691EBBFEBFC8AA72A8DE55351A5695C579F18AB2438B2B99E4DFB1',
          exponent: 0,
          aliases: ['ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A']
        },
        {
          denom: '404dr',
          exponent: 6
        }
      ],
      base: 'ibc/4E2AB358B9691EBBFEBFC8AA72A8DE55351A5695C579F18AB2438B2B99E4DFB1',
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
            channel_id: 'channel-5',
            base_denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'N43 a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/0678E1B0A5535B49F8DEDFE85E77C0FB733A04F81B53B580A176D57699889C0A',
          exponent: 0,
          aliases: ['ft387C1C279D962ED80C09C1D592A92C4275FD7C5D']
        },
        {
          denom: 'n43',
          exponent: 6
        }
      ],
      base: 'ibc/0678E1B0A5535B49F8DEDFE85E77C0FB733A04F81B53B580A176D57699889C0A',
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
            channel_id: 'channel-5',
            base_denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Puro Lobo a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/F413DA1C7902686B64FFB0094A6473FABDE421DC8A4B72082535599143E66AAE',
          exponent: 0,
          aliases: ['ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB']
        },
        {
          denom: 'lobo',
          exponent: 6
        }
      ],
      base: 'ibc/F413DA1C7902686B64FFB0094A6473FABDE421DC8A4B72082535599143E66AAE',
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
            channel_id: 'channel-5',
            base_denom: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Vibranium a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/1507C239F92834EEB80B8BD2508E98D5FA24F4272AD6A6E214255C7E445C1025',
          exponent: 0,
          aliases: ['ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B']
        },
        {
          denom: 'vibra',
          exponent: 6
        }
      ],
      base: 'ibc/1507C239F92834EEB80B8BD2508E98D5FA24F4272AD6A6E214255C7E445C1025',
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
            channel_id: 'channel-5',
            base_denom: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Karina a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/5DE20120602E89CB89E4948521092DAB1D8B75E70DE77DEC35B3D527CAF445E6',
          exponent: 0,
          aliases: ['ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE']
        },
        {
          denom: 'karina',
          exponent: 6
        }
      ],
      base: 'ibc/5DE20120602E89CB89E4948521092DAB1D8B75E70DE77DEC35B3D527CAF445E6',
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
            channel_id: 'channel-5',
            base_denom: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Luca Testa a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/915E8D0A4C82F7D910810C3956530FDA3BBB2161D406390146D0F357A3922B97',
          exponent: 0,
          aliases: ['ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12']
        },
        {
          denom: 'testa',
          exponent: 6
        }
      ],
      base: 'ibc/915E8D0A4C82F7D910810C3956530FDA3BBB2161D406390146D0F357A3922B97',
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
            channel_id: 'channel-5',
            base_denom: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'Carolina Marquez a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/75A06513054A2C0CB4555918E789357BD36634FF6EE4678FD0B803557DBC666A',
          exponent: 0,
          aliases: ['ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3']
        },
        {
          denom: 'cmqz',
          exponent: 6
        }
      ],
      base: 'ibc/75A06513054A2C0CB4555918E789357BD36634FF6EE4678FD0B803557DBC666A',
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
            channel_id: 'channel-5',
            base_denom: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'L DON a BitSong Music FanToken',
      denom_units: [
        {
          denom:
            'ibc/98DDD2EC382F0BB185A0EC8206D939673B62FB2EA511D79ECC4A623E7FBC413E',
          exponent: 0,
          aliases: ['ft347B1612A2B7659913679CF6CD45B8B130C50A00']
        },
        {
          denom: 'ldon',
          exponent: 6
        }
      ],
      base: 'ibc/98DDD2EC382F0BB185A0EC8206D939673B62FB2EA511D79ECC4A623E7FBC413E',
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
            channel_id: 'channel-5',
            base_denom: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }
      ]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
          exponent: 0,
          aliases: ['uhuahua']
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      base: 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
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
            channel_id: 'channel-11',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
          exponent: 0,
          aliases: ['ucmdx']
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      base: 'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
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
            channel_id: 'channel-18',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
          exponent: 0,
          aliases: ['uharbor']
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      base: 'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
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
            channel_id: 'channel-18',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
          exponent: 0,
          aliases: ['ucmst']
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      base: 'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
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
            channel_id: 'channel-18',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom:
            'ibc/ED5C62BE7D20C4B53779300805744223DDBFFF538C2A60B106AF95D7BE1AEE1F',
          exponent: 0,
          aliases: ['ppica']
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      base: 'ibc/ED5C62BE7D20C4B53779300805744223DDBFFF538C2A60B106AF95D7BE1AEE1F',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'ppica',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-280'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/47A81B7CC895D1A767CFCEE688E9E313B718BEE6E21F36B85FB754C093464937',
          exponent: 0,
          aliases: [
            'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9'
          ]
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/47A81B7CC895D1A767CFCEE688E9E313B718BEE6E21F36B85FB754C093464937',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-280'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/31FA1475DFA211FC7BE4D04DAED2D8F276001936C118489DC0E0059857094A4E',
          exponent: 0,
          aliases: [
            'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/31FA1475DFA211FC7BE4D04DAED2D8F276001936C118489DC0E0059857094A4E',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-280'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of Statemine parachain.',
      denom_units: [
        {
          denom:
            'ibc/7CB135576CFC5CDE342A5EA3FF76C6DBBED42A30A6A68A1257071100CBF3E84D',
          exponent: 0,
          aliases: [
            'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7CB135576CFC5CDE342A5EA3FF76C6DBBED42A30A6A68A1257071100CBF3E84D',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-280'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
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
            channel_id: 'channel-207',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      base: 'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
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
            channel_id: 'channel-3',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }
      ]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
          exponent: 0,
          aliases: ['ubcre']
        },
        {
          denom: 'bcre',
          exponent: 6
        }
      ],
      base: 'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
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
            channel_id: 'channel-3',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }
      ]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom:
            'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
          exponent: 0,
          aliases: ['udig']
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      base: 'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
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
            channel_id: 'channel-2',
            base_denom: 'udig',
            chain_name: 'dig'
          },
          chain: {
            channel_id: 'channel-37'
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
            'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
          exponent: 0,
          aliases: ['ungm']
        },
        {
          denom: 'ngm',
          exponent: 6
        }
      ],
      base: 'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
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
            channel_id: 'channel-15',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
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
            'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
          exponent: 0,
          aliases: ['eeur']
        },
        {
          denom: 'eur',
          exponent: 6
        }
      ],
      base: 'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
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
            channel_id: 'channel-15',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
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
            'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
          exponent: 0,
          aliases: ['echf']
        },
        {
          denom:
            'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
          exponent: 6,
          aliases: ['echf']
        }
      ],
      base: 'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
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
            channel_id: 'channel-15',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
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
            'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
          exponent: 0,
          aliases: ['enok']
        },
        {
          denom:
            'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
          exponent: 6,
          aliases: ['enok']
        }
      ],
      base: 'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
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
            channel_id: 'channel-15',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
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
            'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
          exponent: 0,
          aliases: ['edkk']
        },
        {
          denom:
            'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
          exponent: 6,
          aliases: ['edkk']
        }
      ],
      base: 'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
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
            channel_id: 'channel-15',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
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
            'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
          exponent: 0,
          aliases: ['esek']
        },
        {
          denom:
            'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
          exponent: 6,
          aliases: ['esek']
        }
      ],
      base: 'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
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
            channel_id: 'channel-15',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ]
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
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
            channel_id: 'channel-3',
            base_denom: 'umars',
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-209'
          }
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
          exponent: 0,
          aliases: ['uwhale']
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      base: 'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
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
            channel_id: 'channel-1',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'ampWHALE',
      denom_units: [
        {
          denom:
            'ibc/2F7C2A3D5D42553ED46F57D8B0DE3733B1B5FF571E2C6A051D34525904B4C0AF',
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
      base: 'ibc/2F7C2A3D5D42553ED46F57D8B0DE3733B1B5FF571E2C6A051D34525904B4C0AF',
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
            channel_id: 'channel-1',
            base_denom:
              'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'boneWHALE',
      denom_units: [
        {
          denom:
            'ibc/01BAE2E69D02670B22758FBA74E4114B6E88FC1878936C919DA345E6C6C92ABF',
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
      base: 'ibc/01BAE2E69D02670B22758FBA74E4114B6E88FC1878936C919DA345E6C6C92ABF',
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
            channel_id: 'channel-1',
            base_denom:
              'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'FABLE',
      denom_units: [
        {
          denom:
            'ibc/935315FB6394554CEB9AA671A4E79C49DC8C6207C3AEE283C9241A2C89CF9853',
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
      base: 'ibc/935315FB6394554CEB9AA671A4E79C49DC8C6207C3AEE283C9241A2C89CF9853',
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
            channel_id: 'channel-1',
            base_denom:
              'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [
        {
          denom:
            'ibc/1475E38A6C1F650746B735885F8DD75A69F1CD1439334E3237543C19B75B0A4E',
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
      base: 'ibc/1475E38A6C1F650746B735885F8DD75A69F1CD1439334E3237543C19B75B0A4E',
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
            channel_id: 'channel-1',
            base_denom:
              'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      }
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/D8D6271EC54E3A96C6B9FB6C2BA9E99692B07CEB42754638029657072EA48337',
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
      base: 'ibc/D8D6271EC54E3A96C6B9FB6C2BA9E99692B07CEB42754638029657072EA48337',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/9B36B61BBB374C8DBE98FFB6958732B81BC2A2CB9CE55832E4026C4BAD35002F',
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
      base: 'ibc/9B36B61BBB374C8DBE98FFB6958732B81BC2A2CB9CE55832E4026C4BAD35002F',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom:
              'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }
      ]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
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
            channel_id: 'channel-3',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
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
            'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
          exponent: 0,
          aliases: ['ufrienzies']
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      base: 'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
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
            channel_id: 'channel-3',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }
      ]
    },
    {
      description: 'ATOM token on Noble',
      denom_units: [
        {
          denom:
            'ibc/D8A84E5EB5A99A90F1439141AD6DADA335CC886534B2845BE9251738ACCFBFB1',
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
      base: 'ibc/D8A84E5EB5A99A90F1439141AD6DADA335CC886534B2845BE9251738ACCFBFB1',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
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
            'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
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
            channel_id: 'channel-3',
            base_denom: 'uusdc',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      base: 'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: ['nois', 'randomness', 'drand', 'wasm'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-225'
          }
        }
      ]
    },
    {
      description: 'The native token of OKExChain',
      denom_units: [
        {
          denom:
            'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
          exponent: 0,
          aliases: ['wei']
        },
        {
          denom: 'okt',
          exponent: 18
        }
      ],
      base: 'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'wei',
            chain_name: 'okexchain'
          },
          chain: {
            channel_id: 'channel-212'
          }
        }
      ]
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
          exponent: 6
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
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
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
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uion',
            chain_name: 'osmosis'
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
            'ibc/3616134E71F4F7C0AFD22C439567E8C514BE88955903834F4580D9E3E4E3470F',
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
      base: 'ibc/3616134E71F4F7C0AFD22C439567E8C514BE88955903834F4580D9E3E4E3470F',
      name: 'IBCX Core <Product of ION DAO>',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
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
            'ibc/D4A5AE8E8DD0D49F559F9D85EDF17643E3444BD424FFE7158A8187A5BAFDD463',
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
      base: 'ibc/D4A5AE8E8DD0D49F559F9D85EDF17643E3444BD424FFE7158A8187A5BAFDD463',
      name: 'stIBCX Core <Product of ION DAO>',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
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
            'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
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
      base: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
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
            'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
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
      base: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
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
            'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
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
      base: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
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
            'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
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
      base: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
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
            'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
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
      base: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
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
            'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
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
      base: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/AA054FD00F476B91C63F27F591B410CCC8F9DB1FC829B51353C51458E2817434',
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
      base: 'ibc/AA054FD00F476B91C63F27F591B410CCC8F9DB1FC829B51353C51458E2817434',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amp.osmo.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      base: 'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
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
            channel_id: 'channel-37',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/436673B3C7C0923C904EEA4AC97AB0DD7DC5627751AE7E2F8CFF489A3D43D805',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      base: 'ibc/436673B3C7C0923C904EEA4AC97AB0DD7DC5627751AE7E2F8CFF489A3D43D805',
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
            channel_id: 'channel-37',
            base_denom: 'stk/uatom',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-33'
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
            'ibc/BA3EB643F46DD1CB95246A5419CCB3A4BA9BB1A85C589C49F27B4A6BB11AACD1',
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
      base: 'ibc/BA3EB643F46DD1CB95246A5419CCB3A4BA9BB1A85C589C49F27B4A6BB11AACD1',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-33'
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
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
          exponent: 0,
          aliases: ['uqck']
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
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
            channel_id: 'channel-22',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
          }
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [
        {
          denom:
            'ibc/A8329EF9938F24002D235DAD9DFF5FD7A7175E7691C74FB5D4C080DE76D15D4A',
          exponent: 0,
          aliases: ['uqstars']
        },
        {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/A8329EF9938F24002D235DAD9DFF5FD7A7175E7691C74FB5D4C080DE76D15D4A',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqstars',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
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
            'ibc/15002134A042F4E60A1BB7AF5C71B6621D362485A6FE7CBBE9CD22B4497515D4',
          exponent: 0,
          aliases: ['uqatom']
        },
        {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/15002134A042F4E60A1BB7AF5C71B6621D362485A6FE7CBBE9CD22B4497515D4',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqatom',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
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
            'ibc/E5E2DC973727C8DEB8A3D0E076D148A92667709C95411BE1C08A1C3D716A6F70',
          exponent: 0,
          aliases: ['uqregen']
        },
        {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/E5E2DC973727C8DEB8A3D0E076D148A92667709C95411BE1C08A1C3D716A6F70',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqregen',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
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
            'ibc/0979EC8BBF3B0EDF0D684754CB193F98B5CA5FD66F64B88BB9440BC1A30236B7',
          exponent: 0,
          aliases: ['uqosmo']
        },
        {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/0979EC8BBF3B0EDF0D684754CB193F98B5CA5FD66F64B88BB9440BC1A30236B7',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqosmo',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      }
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
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
            channel_id: 'channel-8',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-48'
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
            'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
          exponent: 0,
          aliases: ['rowan']
        },
        {
          denom: 'ROWAN',
          exponent: 18
        }
      ],
      base: 'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
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
            channel_id: 'channel-14',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
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
            channel_id: 'channel-5',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/658F3665B5DE0A736AEDD5DCD3D71A01F0273174066DA55F9E30A9F5EB5CD9FB',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      base: 'ibc/658F3665B5DE0A736AEDD5DCD3D71A01F0273174066DA55F9E30A9F5EB5CD9FB',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [
        {
          denom:
            'ibc/15E9C3405C00ACC9BAA6EED0A2FB2BAA0F63CB4A4EB6C998975D3022121FF424',
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
      base: 'ibc/15E9C3405C00ACC9BAA6EED0A2FB2BAA0F63CB4A4EB6C998975D3022121FF424',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/FBC80069073EDA6BC3D152AFC99ABEB6B42C83B5234775C5BE2F60C2DB9E46AE',
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
      base: 'ibc/FBC80069073EDA6BC3D152AFC99ABEB6B42C83B5234775C5BE2F60C2DB9E46AE',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [
        {
          denom:
            'ibc/C678638E81A2A20CEABAFA3D74A7E18486554262D00E1EE1D4C18406189C8810',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH']
        },
        {
          denom: 'OHH',
          exponent: 6
        }
      ],
      base: 'ibc/C678638E81A2A20CEABAFA3D74A7E18486554262D00E1EE1D4C18406189C8810',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      base: 'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
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
            channel_id: 'channel-24',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/680F35B5D3DC99BA4A6BD8A1106847DC4CF42D2A20B42AEB1931CC8F0918B013',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      base: 'ibc/680F35B5D3DC99BA4A6BD8A1106847DC4CF42D2A20B42AEB1931CC8F0918B013',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/0A3FD262BFF3F7CBDE8DD8F0B45DF6D28E339ACBBC92D37A3726534C79C7E016',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      base: 'ibc/0A3FD262BFF3F7CBDE8DD8F0B45DF6D28E339ACBBC92D37A3726534C79C7E016',
      name: 'stSTARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/8CBAE8833FA65F04A64B4179F9BB8DCD9B7DEA9E6C66E0774252D6A1D84256AC',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      base: 'ibc/8CBAE8833FA65F04A64B4179F9BB8DCD9B7DEA9E6C66E0774252D6A1D84256AC',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/F4F5F27F40F927F8A4FF9F5601F80AD5D77B366570E7C59856B8CE4135AC1F59',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      base: 'ibc/F4F5F27F40F927F8A4FF9F5601F80AD5D77B366570E7C59856B8CE4135AC1F59',
      name: 'stJUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/132D49B0571241584C3081B4DAB5B405F26569EA79CA0B137F96BA7E741E70B0',
          exponent: 0,
          aliases: ['stuluna']
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      base: 'ibc/132D49B0571241584C3081B4DAB5B405F26569EA79CA0B137F96BA7E741E70B0',
      name: 'stLUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stuluna',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/7E4A6EEFA0425CF99DE169A586D9BADF39C40153194CD6784BF8C9F6123BF5D0',
          exponent: 0,
          aliases: ['stinj']
        },
        {
          denom: 'stINJ',
          exponent: 18
        }
      ],
      base: 'ibc/7E4A6EEFA0425CF99DE169A586D9BADF39C40153194CD6784BF8C9F6123BF5D0',
      name: 'stINJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stinj',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/C19D8F369BE4279B727B58D225DB6D4916625BDE024D415B79288AC6705E0BB0',
          exponent: 0,
          aliases: ['staevmos']
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      base: 'ibc/C19D8F369BE4279B727B58D225DB6D4916625BDE024D415B79288AC6705E0BB0',
      name: 'stEVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'staevmos',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
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
            'ibc/94C84307CAA7E1D83FF0E4FECB83926B1992AD5956278FB319501AFA6D61F8AE',
          exponent: 0,
          aliases: ['stuumee']
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      base: 'ibc/94C84307CAA7E1D83FF0E4FECB83926B1992AD5956278FB319501AFA6D61F8AE',
      name: 'stUMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stuumee',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F2FED6CFFF814D916DB3788406455D3E0927C367BACA1EAC523C9E63BDC15593',
          exponent: 0,
          aliases: ['stucmdx']
        },
        {
          denom: 'stcmdx',
          exponent: 6
        }
      ],
      base: 'ibc/F2FED6CFFF814D916DB3788406455D3E0927C367BACA1EAC523C9E63BDC15593',
      name: 'stCMDX',
      display: 'stcmdx',
      symbol: 'stCMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'stucmdx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
      }
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
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
      base: 'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
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
            channel_id: 'channel-20',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
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
      base: 'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
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
            channel_id: 'channel-20',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
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
      base: 'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
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
            channel_id: 'channel-20',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
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
      base: 'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
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
            channel_id: 'channel-20',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
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
      base: 'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
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
            channel_id: 'channel-20',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
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
      base: 'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
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
            channel_id: 'channel-20',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
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
      base: 'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
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
            channel_id: 'channel-20',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
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
      base: 'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
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
            channel_id: 'channel-20',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
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
      base: 'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
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
            channel_id: 'channel-20',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
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
      base: 'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
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
            channel_id: 'channel-20',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
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
      base: 'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
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
            channel_id: 'channel-20',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
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
      base: 'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
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
            channel_id: 'channel-20',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
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
      base: 'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
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
            channel_id: 'channel-20',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
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
      base: 'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
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
            channel_id: 'channel-20',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
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
      base: 'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
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
            channel_id: 'channel-20',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
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
      base: 'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
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
            channel_id: 'channel-20',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
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
      base: 'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
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
            channel_id: 'channel-20',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
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
      base: 'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
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
            channel_id: 'channel-20',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
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
      base: 'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
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
            channel_id: 'channel-20',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
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
      base: 'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
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
            channel_id: 'channel-20',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
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
      base: 'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
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
            channel_id: 'channel-20',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
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
      base: 'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
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
            channel_id: 'channel-20',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
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
      base: 'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
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
            channel_id: 'channel-20',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }
      ]
    }
  ]
};
export default asset_list;
