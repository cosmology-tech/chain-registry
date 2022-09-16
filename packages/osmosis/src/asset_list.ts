import { AssetList } from '@chain-registry/types';
const asset_list: AssetList = {
  chain_name: 'osmosis',
  assets: [
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png'
      },
      coingecko_id: 'agoric',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel: 'channel-320'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel: 'channel-320'
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
            channel: 'channel-9',
            denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel: 'channel-1'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png'
      },
      coingecko_id: 'assetmantle',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel: 'channel-232'
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
      coingecko_id: 'axelar-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-3',
            denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
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
            channel: 'channel-3',
            denom: 'uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
      },
      coingecko_id: 'usd-coin'
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
            channel: 'channel-3',
            denom: 'frax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png'
      },
      coingecko_id: 'frax'
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
            channel: 'channel-3',
            denom: 'dai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png'
      },
      coingecko_id: 'dai'
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
            channel: 'channel-3',
            denom: 'uusdt',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png'
      },
      coingecko_id: 'tether'
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
            channel: 'channel-3',
            denom: 'weth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      coingecko_id: 'weth'
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
            channel: 'channel-3',
            denom: 'wbtc-satoshi',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      coingecko_id: 'wrapped-bitcoin'
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
            channel: 'channel-3',
            denom: 'aave-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingecko_id: 'aave'
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
            channel: 'channel-3',
            denom: 'ape-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      coingecko_id: 'apecoin'
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
            channel: 'channel-3',
            denom: 'axs-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingecko_id: 'axie-infinity'
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
            channel: 'channel-3',
            denom: 'link-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingecko_id: 'chainlink'
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
            channel: 'channel-3',
            denom: 'mkr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingecko_id: 'maker'
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
            channel: 'channel-3',
            denom: 'rai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      coingecko_id: 'rai'
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
            channel: 'channel-3',
            denom: 'shib-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingecko_id: 'shiba-inu'
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
            channel: 'channel-3',
            denom: 'steth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      coingecko_id: 'staked-ether'
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
            channel: 'channel-3',
            denom: 'uni-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingecko_id: 'uniswap'
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
            channel: 'channel-3',
            denom: 'xcn-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      coingecko_id: 'chain-2'
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
            channel: 'channel-3',
            denom: 'dot-planck',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png'
      },
      coingecko_id: 'polkadot'
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
            channel: 'channel-3',
            denom: 'wglmr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png'
      },
      coingecko_id: 'wrapped-moonbeam'
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
            channel: 'channel-3',
            denom: 'wmatic-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel: 'channel-208'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      coingecko_id: 'matic-network'
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
            channel: 'channel-83',
            denom: 'uband',
            chain_name: 'bandchain'
          },
          chain: {
            channel: 'channel-148'
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
            channel: 'channel-1',
            denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel: 'channel-51'
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
            channel: 'channel-0',
            denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
            channel: 'channel-0',
            denom: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
            chain_name: 'bitsong'
          },
          chain: {
            channel: 'channel-73'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png'
      },
      coingecko_id: 'bostrom',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-2',
            denom: 'boot',
            chain_name: 'bostrom'
          },
          chain: {
            channel: 'channel-95'
          }
        }
      ]
    },
    {
      description: 'The native token of Carbon',
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
            channel: 'channel-0',
            denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel: 'channel-188'
          }
        }
      ]
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png'
      },
      coingecko_id: 'cerberus-2',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'ucrbrus',
            chain_name: 'cerberus'
          },
          chain: {
            channel: 'channel-212'
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
            channel: 'channel-0',
            denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel: 'channel-108'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png'
      },
      coingecko_id: 'chihuahua-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-7',
            denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel: 'channel-113'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
      },
      coingecko_id: 'comdex',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel: 'channel-87'
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
      name: 'Cosmos',
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
            channel: 'channel-141',
            denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel: 'channel-0'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-9',
            denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel: 'channel-297'
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
          exponent: 6,
          aliases: []
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
      coingecko_id: 'crescent-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-9',
            denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel: 'channel-297'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
      },
      coingecko_id: 'crypto-com-chain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-10',
            denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel: 'channel-5'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-1',
            denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel: 'channel-181'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-2',
            denom: 'udsm',
            chain_name: 'desmos'
          },
          chain: {
            channel: 'channel-135'
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
            channel: 'channel-1',
            denom: 'udig',
            chain_name: 'dig'
          },
          chain: {
            channel: 'channel-128'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png'
      },
      coingecko_id: 'e-money',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel: 'channel-37'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png'
      },
      coingecko_id: 'e-money-eur',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel: 'channel-37'
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
            channel: 'channel-0',
            denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel: 'channel-204'
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
            channel: 'channel-10',
            denom: 'afet',
            chain_name: 'fetchhub'
          },
          chain: {
            channel: 'channel-229'
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
            channel: 'channel-10',
            denom: 'nanomobx',
            chain_name: 'fetchhub'
          },
          chain: {
            channel: 'channel-229'
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
            channel: 'channel-0',
            denom: 'uglx',
            chain_name: 'galaxy'
          },
          chain: {
            channel: 'channel-236'
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
            'ibc/DABCB5B2232B630C196330AC2A8010C9DBDE8B783FDFF3FB105540939BE27775',
          exponent: 0,
          aliases: ['el1']
        },
        {
          denom: 'l1',
          exponent: 18
        }
      ],
      base: 'ibc/DABCB5B2232B630C196330AC2A8010C9DBDE8B783FDFF3FB105540939BE27775',
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
            channel: 'channel-1',
            denom: 'el1',
            chain_name: 'genesisl1'
          },
          chain: {
            channel: 'channel-235'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-10',
            denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel: 'channel-144'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png'
      },
      coingecko_id: 'ixo',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-4',
            denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel: 'channel-38'
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
            channel: 'channel-8',
            denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel: 'channel-122'
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
            channel: 'channel-3',
            denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel: 'channel-6'
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
            channel: 'channel-0',
            denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel: 'channel-42'
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
            channel: 'channel-0',
            denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'juno'
          },
          chain: {
            channel: 'channel-42'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png'
      },
      coingecko_id: 'kava',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel: 'channel-143'
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
            channel: 'channel-1',
            denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel: 'channel-143'
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
            channel: 'channel-1',
            denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel: 'channel-143'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png'
      },
      coingecko_id: 'usdx',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel: 'channel-143'
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
            channel: 'channel-0',
            denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel: 'channel-77'
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
            channel: 'channel-0',
            denom: 'udarc',
            chain_name: 'konstellation'
          },
          chain: {
            channel: 'channel-171'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-3',
            denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel: 'channel-259'
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
            channel: 'channel-3',
            denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel: 'channel-53'
          }
        }
      ]
    },
    {
      description: 'The native token of Lumen Network',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-3',
            denom: 'ulumen',
            chain_name: 'lumenx'
          },
          chain: {
            channel: 'channel-286'
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
            channel: 'channel-3',
            denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel: 'channel-115'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'umeme',
            chain_name: 'meme'
          },
          chain: {
            channel: 'channel-238'
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
            channel: 'channel-16',
            denom: 'utick',
            chain_name: 'microtick'
          },
          chain: {
            channel: 'channel-39'
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
            channel: 'channel-13',
            denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel: 'channel-216'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png'
      },
      coingecko_id: 'medibloc',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'umed',
            chain_name: 'panacea'
          },
          chain: {
            channel: 'channel-82'
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
            channel: 'channel-6',
            denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel: 'channel-4'
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
            'ibc/CF780ADED86E541AD7A8D5B7D33D2E3D9C61D8ECD228B8ED951986D782CB630A',
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
      base: 'ibc/CF780ADED86E541AD7A8D5B7D33D2E3D9C61D8ECD228B8ED951986D782CB630A',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-6',
            denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            chain_name: 'persistence'
          },
          chain: {
            channel: 'channel-4'
          }
        }
      ],
      ibc: {
        source_channel: 'channel-24',
        dst_channel: 'channel-38',
        source_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
      },
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      coingecko_id: 'pstake-finance'
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
          exponent: 9,
          aliases: []
        }
      ],
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.svg'
      },
      coingecko_id: 'provenance-blockchain',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-7',
            denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel: 'channel-222'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
      },
      coingecko_id: 'regen',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-1',
            denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel: 'channel-8'
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
            channel: 'channel-1',
            denom: 'uatolo',
            chain_name: 'rizon'
          },
          chain: {
            channel: 'channel-221'
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
            channel: 'channel-1',
            denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel: 'channel-88'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png'
      },
      coingecko_id: 'sentinel',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel: 'channel-2'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png'
      },
      coingecko_id: 'certik',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-8',
            denom: 'uctk',
            chain_name: 'shentu'
          },
          chain: {
            channel: 'channel-146'
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
          exponent: 18,
          aliases: ['rowan']
        }
      ],
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain Rowan',
      display: 'rowan',
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
            channel: 'channel-17',
            denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel: 'channel-47'
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
            channel: 'channel-0',
            denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel: 'channel-165'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel: 'channel-75'
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
            channel: 'channel-2',
            denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel: 'channel-15'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-5',
            denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel: 'channel-326'
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-5',
            denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel: 'channel-326'
          }
        }
      ]
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-5',
            denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel: 'channel-326'
          }
        }
      ]
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-5',
            denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel: 'channel-326'
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
            channel: 'channel-1',
            denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
            channel: 'channel-1',
            denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel: 'channel-72'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-0',
            denom: 'utgd',
            chain_name: 'tgrade'
          },
          chain: {
            channel: 'channel-263'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png'
      },
      coingecko_id: 'umee',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel: 'channel-0',
            denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel: 'channel-184'
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
          exponent: 6,
          aliases: []
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
            channel: 'channel-0',
            denom: 'uvdl',
            chain_name: 'vidulum'
          },
          chain: {
            channel: 'channel-124'
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
            channel: 'channel-47',
            denom:
              'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png'
      },
      coingecko_id: 'junoswap-raw-dao',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel: 'channel-47',
            denom:
              'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel: 'channel-47',
            denom:
              'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel: 'channel-47',
            denom:
              'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-47',
            denom:
              'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel: 'channel-47',
            denom:
              'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            chain_name: 'juno'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-169'
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
            channel: 'channel-18',
            denom:
              'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            chain_name: 'kichain'
          },
          chain: {
            port: 'transfer',
            channel: 'channel-261'
          }
        }
      ]
    }
  ]
};
export default asset_list;
