import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'osmosistestnet',
  assets: [
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
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
            channel_id: 'channel-6',
            base_denom: 'uakt',
            chain_name: 'akashtestnet'
          },
          chain: {
            channel_id: 'channel-4171'
          }
        }
      ]
    },
    {
      description: 'The native token of Archway testnetwork',
      denom_units: [
        {
          denom:
            'ibc/B317B0AF2B4E47C4F69665403AF2E6E1BE0096CA4B7D9926B22911590899AF66',
          exponent: 0,
          aliases: ['aconst']
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'ibc/B317B0AF2B4E47C4F69665403AF2E6E1BE0096CA4B7D9926B22911590899AF66',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-58',
            base_denom: 'aconst',
            chain_name: 'archwaytestnet'
          },
          chain: {
            channel_id: 'channel-3938'
          }
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
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
            channel_id: 'channel-339',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
          exponent: 0,
          aliases: ['uausdc']
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      base: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'uausdc',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
          exponent: 0,
          aliases: ['eth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'eth-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/E955F50D0EDC3A8A5E687AC9F020BE4A1A48337901295F62C7ED7F8C1915807B',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/E955F50D0EDC3A8A5E687AC9F020BE4A1A48337901295F62C7ED7F8C1915807B',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'wglmr-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/1C19EF236F56F8AD878DDF64AA09BA2CAE6EDF3A5EF6113AFA2387CA536F9215',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/1C19EF236F56F8AD878DDF64AA09BA2CAE6EDF3A5EF6113AFA2387CA536F9215',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'wmatic-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/E0E53B563B13E28E8954DEA9A044475BC44E2AFBAAC0774F316EF216B259C890',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/E0E53B563B13E28E8954DEA9A044475BC44E2AFBAAC0774F316EF216B259C890',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'wbnb-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/C3F1CA360184EE671CFFD4F533571E67EEB1AD200CBE7F388995F13A21F543D6',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/C3F1CA360184EE671CFFD4F533571E67EEB1AD200CBE7F388995F13A21F543D6',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'wavax-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
            'ibc/B6261551E7E9C9C906D09AF0C5392453939607738C3F7ED8C33081CB77DE2AFE',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/B6261551E7E9C9C906D09AF0C5392453939607738C3F7ED8C33081CB77DE2AFE',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'wftm-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
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
      description: '',
      denom_units: [
        {
          denom:
            'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      base: 'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
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
            channel_id: 'channel-25',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-4370'
          }
        }
      ]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [
        {
          denom:
            'ibc/E3D323CB6F427C49E56F913C853A416F6B71BAA9B0164625AD0203266F92B3ED',
          exponent: 0,
          aliases: ['uc4e']
        },
        {
          denom: 'c4e',
          exponent: 6
        }
      ],
      base: 'ibc/E3D323CB6F427C49E56F913C853A416F6B71BAA9B0164625AD0203266F92B3ED',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uc4e',
            chain_name: 'chain4energytestnet'
          },
          chain: {
            channel_id: 'channel-111'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Composable testnet.',
      denom_units: [
        {
          denom:
            'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
          exponent: 0,
          aliases: ['ppica']
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      base: 'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ppica',
            chain_name: 'composabletestnet'
          },
          chain: {
            channel_id: 'channel-329'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
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
            channel_id: 'channel-3306',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-4156'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.',
      denom_units: [
        {
          denom:
            'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
          exponent: 0,
          aliases: ['peaka']
        },
        {
          denom: 'DORA',
          exponent: 18
        }
      ],
      base: 'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
      name: 'Dora Vota Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'peaka',
            chain_name: 'doravotatestnet'
          },
          chain: {
            channel_id: 'channel-1260'
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
            'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
          exponent: 0,
          aliases: ['umpwr']
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      base: 'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
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
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }
      ]
    },
    {
      description: 'The native token of EntryPoint',
      denom_units: [
        {
          denom:
            'ibc/8B620DE1585B38FEDEA05944B2E471D19F7208203A3E68DC2736D9B3769549FE',
          exponent: 0,
          aliases: ['uentry']
        },
        {
          denom: 'entry',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/8B620DE1585B38FEDEA05944B2E471D19F7208203A3E68DC2736D9B3769549FE',
      name: 'EntryPoint',
      display: 'entry',
      symbol: 'ENTRY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
      },
      keywords: ['staking', 'governance', 'vaults'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uentry',
            chain_name: 'entrypointtestnet'
          },
          chain: {
            channel_id: 'channel-1543'
          }
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub, via Osmosis.',
      denom_units: [
        {
          denom:
            'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
          exponent: 0
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/9E6AD21A09AA5B1695EFDE5167F2B5512D56C4100C322D5E72F2574724CF4E28',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom:
              'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
            chain_name: 'entrypointtestnet'
          },
          chain: {
            channel_id: 'channel-1543'
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
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
          exponent: 0,
          aliases: ['uixo']
        },
        {
          denom: 'ixo',
          exponent: 6
        }
      ],
      base: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'uixo',
            chain_name: 'impacthubtestnet'
          },
          chain: {
            channel_id: 'channel-1637'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      }
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
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
            channel_id: 'channel-129',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-4174'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
          exponent: 0,
          aliases: ['ujunox']
        },
        {
          denom: 'junox',
          exponent: 6
        }
      ],
      base: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
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
            channel_id: 'channel-889',
            base_denom: 'ujunox',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-5498'
          }
        }
      ]
    },
    {
      description: 'The native token of NEXX GEN AI',
      denom_units: [
        {
          denom:
            'ibc/7AA5DD4B6FDD05E141A7ECC2D795D0011F8E4FB70C7A537ECF1A67FE76D2D58D',
          exponent: 0,
          aliases: ['factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX']
        },
        {
          denom: 'nexx',
          exponent: 6
        }
      ],
      base: 'ibc/7AA5DD4B6FDD05E141A7ECC2D795D0011F8E4FB70C7A537ECF1A67FE76D2D58D',
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
            channel_id: 'channel-889',
            base_denom:
              'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-5498'
          }
        }
      ]
    },
    {
      description:
        'The native utility token of the Kaon testnet version of KYVE.',
      denom_units: [
        {
          denom:
            'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
          exponent: 0,
          aliases: ['tkyve']
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      base: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tkyve',
            chain_name: 'kyvetestnet'
          },
          chain: {
            channel_id: 'channel-10'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          }
        }
      ]
    },
    {
      description: 'The native token of Lava',
      denom_units: [
        {
          denom:
            'ibc/D547C68046B6AAF0172FB2851A3A7A23EC47269E8CC44189BDF0139D88C3B5DF',
          exponent: 0,
          aliases: ['ulava']
        },
        {
          denom: 'lava',
          exponent: 6
        }
      ],
      base: 'ibc/D547C68046B6AAF0172FB2851A3A7A23EC47269E8CC44189BDF0139D88C3B5DF',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ulava',
            chain_name: 'lavatestnet2'
          },
          chain: {
            channel_id: 'channel-5286'
          }
        }
      ]
    },
    {
      description: 'EKIL is the native token for LikeCoin Testnet',
      denom_units: [
        {
          denom:
            'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
          exponent: 0,
          aliases: ['nanoekil']
        },
        {
          denom: 'ekil',
          exponent: 9
        }
      ],
      base: 'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
      name: 'LikeCoin',
      display: 'ekil',
      symbol: 'EKIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'nanoekil',
            chain_name: 'likecointestnet'
          },
          chain: {
            channel_id: 'channel-4357'
          }
        }
      ]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [
        {
          denom:
            'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
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
            channel_id: 'channel-28',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-5499'
          }
        }
      ]
    },
    {
      description: 'The native token of Neutron chain',
      denom_units: [
        {
          denom:
            'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
          exponent: 0,
          aliases: ['untrn']
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      base: 'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-196',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-4172'
          }
        }
      ]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
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
            'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
          exponent: 0,
          aliases: ['ulove']
        },
        {
          denom: 'love',
          exponent: 6
        }
      ],
      base: 'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }
      ]
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uusdc',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
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
            'ibc/BD1ECCEA9A5F72465AEB29B93FD8454741E3B2E34F6F30712A1761A7E80F1D16',
          exponent: 0,
          aliases: ['uusdlr']
        },
        {
          denom: 'usdlr',
          exponent: 6
        }
      ],
      base: 'ibc/BD1ECCEA9A5F72465AEB29B93FD8454741E3B2E34F6F30712A1761A7E80F1D16',
      display: 'usdlr',
      name: 'USDLR by Stable',
      symbol: 'USDLR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uusdlr',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
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
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/95359FD9C5D15DBD7B9A6B7271F5E769776999590DE138ED62B6E89D5D010B7C',
          exponent: 0,
          aliases: ['unls']
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      base: 'ibc/95359FD9C5D15DBD7B9A6B7271F5E769776999590DE138ED62B6E89D5D010B7C',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-110'
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
            'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
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
            channel_id: 'channel-7',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      base: 'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
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
            channel_id: 'channel-7',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
          exponent: 0,
          aliases: ['stk/uosmo']
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      base: 'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
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
            channel_id: 'channel-7',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [
        {
          denom:
            'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        },
        {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }
      ],
      base: 'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
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
            channel_id: 'channel-7',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }
      ]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uqck',
            chain_name: 'quicksilvertestnet'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }
      ]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [
        {
          denom:
            'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        },
        {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'utsaga',
            chain_name: 'sagatestnet'
          },
          chain: {
            channel_id: 'channel-4946'
          }
        }
      ]
    },
    {
      description:
        'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [
        {
          denom:
            'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
          exponent: 0,
          aliases: ['usge']
        },
        {
          denom:
            'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
          exponent: 6,
          aliases: ['usge']
        }
      ],
      base: 'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usge',
            chain_name: 'sgetestnet'
          },
          chain: {
            channel_id: 'channel-1568'
          }
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-638',
            base_denom: 'ustars',
            chain_name: 'stargazetestnet'
          },
          chain: {
            channel_id: 'channel-4175'
          }
        }
      ]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [
        {
          denom:
            'ibc/3642669AD14386D3E38F43F30CFCA859B3E8A05BF6BD6A23DEBD2115AD1325E9',
          exponent: 0,
          aliases: ['uxion']
        },
        {
          denom: 'mxion',
          exponent: 3,
          aliases: ['millixion']
        },
        {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }
      ],
      base: 'ibc/3642669AD14386D3E38F43F30CFCA859B3E8A05BF6BD6A23DEBD2115AD1325E9',
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
            channel_id: 'channel-12',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-4410'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4914A190217D35A06D4A92F9BE1E4E6A6A59825701ECB4C08E0A827C773679DC',
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
      base: 'ibc/4914A190217D35A06D4A92F9BE1E4E6A6A59825701ECB4C08E0A827C773679DC',
      name: 'Axelar AXL Token',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom:
              'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-4410'
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
            'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D278EA93F12028D3F2BB45F9DC680884E20280E3B46C6F1339C591D80CB6D14C',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uosmo',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-4410'
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
            'ibc/D12E5518FBBD3B4394CC088A979E04991EFFCE7FFC7225DB4F8F529D8A34A401',
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
      base: 'ibc/D12E5518FBBD3B4394CC088A979E04991EFFCE7FFC7225DB4F8F529D8A34A401',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom:
              'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-4410'
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
    }
  ]
};
export default assets;
