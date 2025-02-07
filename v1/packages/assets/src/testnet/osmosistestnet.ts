import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'osmosistestnet',
  assets: [
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uakt',
            chain_name: 'akashtestnet'
          },
          chain: {
            channel_id: 'channel-4171'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-4370'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/539BC2B6E70117D220834D6DF8E27307655D1325C0CADF7E3AF90AB00D9F8D69',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'ibc/539BC2B6E70117D220834D6DF8E27307655D1325C0CADF7E3AF90AB00D9F8D69',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uc4e',
            chain_name: 'chain4energytestnet'
          },
          chain: {
            channel_id: 'channel-7735'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Composable testnet.',
      denom_units: [{
          denom: 'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ppica',
            chain_name: 'composabletestnet'
          },
          chain: {
            channel_id: 'channel-329'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/35CA3AB73EF616E989E6DDD91EA33BEBAF77CA710641973028460CCFE69452AB',
          exponent: 0,
          aliases: ['utestcore']
        }, {
          denom: 'testcore',
          exponent: 6
        }],
      base: 'ibc/35CA3AB73EF616E989E6DDD91EA33BEBAF77CA710641973028460CCFE69452AB',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-47',
            base_denom: 'utestcore',
            chain_name: 'coreumtestnet'
          },
          chain: {
            channel_id: 'channel-7894'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3306',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-4156'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.',
      denom_units: [{
          denom: 'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
      name: 'Dora Vota Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'peaka',
            chain_name: 'doravotatestnet'
          },
          chain: {
            channel_id: 'channel-1260'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-129',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-4174'
          }
        }]
    },
    {
      description: 'The native token of Lava',
      denom_units: [{
          denom: 'ibc/6E2853D2B0D521D6CD05CFD8597251AD5CC8E3B4141701311679944753A4A03F',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      base: 'ibc/6E2853D2B0D521D6CD05CFD8597251AD5CC8E3B4141701311679944753A4A03F',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ulava',
            chain_name: 'lavatestnet'
          },
          chain: {
            channel_id: 'channel-6092'
          }
        }]
    },
    {
      description: 'EKIL is the native token for LikeCoin Testnet',
      denom_units: [{
          denom: 'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
          exponent: 0,
          aliases: ['nanoekil']
        }, {
          denom: 'ekil',
          exponent: 9
        }],
      base: 'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
      name: 'LikeCoin',
      display: 'ekil',
      symbol: 'EKIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'nanoekil',
            chain_name: 'likecointestnet'
          },
          chain: {
            channel_id: 'channel-4357'
          }
        }]
    },
    {
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umfx',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-10016'
          }
        }]
    },
    {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'ibc/A9339AC5FDA8086F277935ED905B4B0FCF1824DBACAB11B80EFA8E0F889FF45E',
          exponent: 0,
          aliases: ['upoa']
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'ibc/A9339AC5FDA8086F277935ED905B4B0FCF1824DBACAB11B80EFA8E0F889FF45E',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upoa',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-10016'
          }
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [{
          denom: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-28',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-5499'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain',
      denom_units: [{
          denom: 'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-196',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-4172'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/1A0B3E71D4DECB10DBCD327EF8D8EF5E87580898A2A3D9D6ACB1DF2BFD127063',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/1A0B3E71D4DECB10DBCD327EF8D8EF5E87580898A2A3D9D6ACB1DF2BFD127063',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/EF145240FE393A1CEC9C35ED1866A235D23176EA9B32069F714C9309FEA55718',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/EF145240FE393A1CEC9C35ED1866A235D23176EA9B32069F714C9309FEA55718',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-8272'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uakt',
            chain_name: 'akashtestnet'
          },
          chain: {
            channel_id: 'channel-4171'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/CAC33C89EFB6AD6064184EB63289F76C0447B25D720C21275D5E4D3C1890405F',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4170'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0E22FFB61DB307FE01D3D0DFF4A8EBEB6CC4997DCF9E901AE0751A2FFF4B90DD',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-4370'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/539BC2B6E70117D220834D6DF8E27307655D1325C0CADF7E3AF90AB00D9F8D69',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'ibc/539BC2B6E70117D220834D6DF8E27307655D1325C0CADF7E3AF90AB00D9F8D69',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uc4e',
            chain_name: 'chain4energytestnet'
          },
          chain: {
            channel_id: 'channel-7735'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Composable testnet.',
      denom_units: [{
          denom: 'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/27689601842A99059DFD79EB0A34A089FC2F7337491B5555C176400A8FA7F2A4',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ppica',
            chain_name: 'composabletestnet'
          },
          chain: {
            channel_id: 'channel-329'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/35CA3AB73EF616E989E6DDD91EA33BEBAF77CA710641973028460CCFE69452AB',
          exponent: 0,
          aliases: ['utestcore']
        }, {
          denom: 'testcore',
          exponent: 6
        }],
      base: 'ibc/35CA3AB73EF616E989E6DDD91EA33BEBAF77CA710641973028460CCFE69452AB',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-47',
            base_denom: 'utestcore',
            chain_name: 'coreumtestnet'
          },
          chain: {
            channel_id: 'channel-7894'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3306',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-4156'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.',
      denom_units: [{
          denom: 'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/7AF17F89F81663C5EAF71BA3A538D03AEA47921C95ACD2212FF0ED2383A571FE',
      name: 'Dora Vota Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'peaka',
            chain_name: 'doravotatestnet'
          },
          chain: {
            channel_id: 'channel-1260'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/C53E4BB8F7975D31DC9C8BA6A6EC2EA6F1F2A77C39D4E158459BB379D14CC9B0',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-129',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-4174'
          }
        }]
    },
    {
      description: 'The native token of Lava',
      denom_units: [{
          denom: 'ibc/6E2853D2B0D521D6CD05CFD8597251AD5CC8E3B4141701311679944753A4A03F',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      base: 'ibc/6E2853D2B0D521D6CD05CFD8597251AD5CC8E3B4141701311679944753A4A03F',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ulava',
            chain_name: 'lavatestnet'
          },
          chain: {
            channel_id: 'channel-6092'
          }
        }]
    },
    {
      description: 'EKIL is the native token for LikeCoin Testnet',
      denom_units: [{
          denom: 'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
          exponent: 0,
          aliases: ['nanoekil']
        }, {
          denom: 'ekil',
          exponent: 9
        }],
      base: 'ibc/CFC141C6D8B98AE34F446CF9A6CE39406F94A7F901CD82A352EF9E2C52B1CFF9',
      name: 'LikeCoin',
      display: 'ekil',
      symbol: 'EKIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'nanoekil',
            chain_name: 'likecointestnet'
          },
          chain: {
            channel_id: 'channel-4357'
          }
        }]
    },
    {
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umfx',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-10016'
          }
        }]
    },
    {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'ibc/A9339AC5FDA8086F277935ED905B4B0FCF1824DBACAB11B80EFA8E0F889FF45E',
          exponent: 0,
          aliases: ['upoa']
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'ibc/A9339AC5FDA8086F277935ED905B4B0FCF1824DBACAB11B80EFA8E0F889FF45E',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upoa',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-10016'
          }
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [{
          denom: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-28',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-5499'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain',
      denom_units: [{
          denom: 'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/6E74FCA8851F2F81213A6F0D61DB78D1898454C3BF924105DF6549500E1C4785',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-196',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-4172'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5C6404C2D9BAE2BE397908F6503464EBC3EAEE448AE6B7ED218248FF7E7A3236',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/C1E2C2C2B161C797B19965ADB14CD65216B1499DC99E7A551AD9499314923353',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/1A0B3E71D4DECB10DBCD327EF8D8EF5E87580898A2A3D9D6ACB1DF2BFD127063',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/1A0B3E71D4DECB10DBCD327EF8D8EF5E87580898A2A3D9D6ACB1DF2BFD127063',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-4280'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/EF145240FE393A1CEC9C35ED1866A235D23176EA9B32069F714C9309FEA55718',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/EF145240FE393A1CEC9C35ED1866A235D23176EA9B32069F714C9309FEA55718',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-8272'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uqck',
            chain_name: 'quicksilvertestnet'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'utsaga',
            chain_name: 'sagatestnet'
          },
          chain: {
            channel_id: 'channel-4946'
          }
        }]
    },
    {
      description: 'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [{
          denom: 'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
          exponent: 0,
          aliases: ['usge']
        }, {
          denom: 'sge',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usge',
            chain_name: 'sgetestnet'
          },
          chain: {
            channel_id: 'channel-1568'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-638',
            base_denom: 'ustars',
            chain_name: 'stargazetestnet'
          },
          chain: {
            channel_id: 'channel-4175'
          }
        }]
    },
    {
      description: 'The native currency of Swisstronik.',
      denom_units: [{
          denom: 'ibc/7693B5E16070750C244B382F151E7347F324AEA7F4FFE94F4A3E02D26B35DE67',
          exponent: 0,
          aliases: ['aswtr']
        }, {
          denom: 'swtr',
          exponent: 18
        }],
      base: 'ibc/7693B5E16070750C244B382F151E7347F324AEA7F4FFE94F4A3E02D26B35DE67',
      name: 'Swisstronik Testnet',
      display: 'swtr',
      symbol: 'SWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'aswtr',
            chain_name: 'swisstroniktestnet'
          },
          chain: {
            channel_id: 'channel-8295'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/C5B7196709BDFC3A312B06D7292892FA53F379CD3D556B65DB00E1531D471BBA',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C5B7196709BDFC3A312B06D7292892FA53F379CD3D556B65DB00E1531D471BBA',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/32E0369D76BE8DD8071DF98AC078906DB583E0BBB5A6E2A3DFD4213CF90CD026',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6,
          aliases: ['harmony USD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/32E0369D76BE8DD8071DF98AC078906DB583E0BBB5A6E2A3DFD4213CF90CD026',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/8779E4C3F83063A8AC8FDD5E3C71B0992A5A1CC09FCAE12413C17E994126D15E',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6,
          aliases: ['harmony HKD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/8779E4C3F83063A8AC8FDD5E3C71B0992A5A1CC09FCAE12413C17E994126D15E',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/B8E2C7589D16766EA8E272B4872B15F8337683ED86CFE3F68E459EE9C548148A',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6,
          aliases: ['harmony VND']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B8E2C7589D16766EA8E272B4872B15F8337683ED86CFE3F68E459EE9C548148A',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Synternet chain.',
      denom_units: [{
          denom: 'ibc/5A40E4FFC9DD1E4BF7BF7C77AC2B0F72C179DB4C64D4B351969FC8EBB9D12B97',
          exponent: 0,
          aliases: ['uamber']
        }, {
          denom: 'AMBER',
          exponent: 6
        }],
      base: 'ibc/5A40E4FFC9DD1E4BF7BF7C77AC2B0F72C179DB4C64D4B351969FC8EBB9D12B97',
      name: 'Synternet',
      display: 'AMBER',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'synternet',
            base_denom: 'usynt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uamber',
            chain_name: 'synternettestnet'
          },
          chain: {
            channel_id: 'channel-9152'
          }
        }]
    },
    {
      description: 'TTNT is the native token of the Titan Network testnet, serving as a medium of value, staking token, and transparency mechanism for the ecosystem.',
      denom_units: [{
          denom: 'ibc/C46DB64CBA325B311FA2595F70B2C99DAA4CE86483F28213AC81838E754E5DF0',
          exponent: 0,
          aliases: ['uttnt']
        }, {
          denom: 'ttnt',
          exponent: 6
        }],
      base: 'ibc/C46DB64CBA325B311FA2595F70B2C99DAA4CE86483F28213AC81838E754E5DF0',
      name: 'Titan Testnet TTNT',
      display: 'ttnt',
      symbol: 'TTNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uttnt',
            chain_name: 'titannettestnet'
          },
          chain: {
            channel_id: 'channel-9941'
          }
        }]
    },
    {
      description: 'TNT4 is the incentive token of the Titan Network\'s Galileo testnet, rewarding contributors who provide bandwidth resources for commercial use.',
      denom_units: [{
          denom: 'ibc/1CAED08A9A93AE357DDF458058FFDD7C9CC70EF67C0E4C2375B8E4414AAE2686',
          exponent: 0,
          aliases: ['utnt4']
        }, {
          denom: 'tnt4',
          exponent: 2
        }],
      base: 'ibc/1CAED08A9A93AE357DDF458058FFDD7C9CC70EF67C0E4C2375B8E4414AAE2686',
      name: 'Titan Testnet TNT4',
      display: 'tnt4',
      symbol: 'TNT4',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'utnt4',
            chain_name: 'titannettestnet'
          },
          chain: {
            channel_id: 'channel-9941'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
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
      base: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-5969'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/5C274155106FEB0C093F76A12BB67222E479E1EBE043F319CE4463E54F7A357C',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/5C274155106FEB0C093F76A12BB67222E479E1EBE043F319CE4463E54F7A357C',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-490',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-6668'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/D9A34ACE6D4867DB2C0C33158DBAED4344544FCAE8E7CA8CE99D3E8D6B2288EC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/8CE20F6604DB1F06CFDAEEEF906F5A8FC9D2A9F8F01E0A807A8F316EF59DF2CB',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/D982A6760247DF2A691771C968150BD87A9B2DEB93B8EB830F92498485B97448',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-1037'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uqck',
            chain_name: 'quicksilvertestnet'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'utsaga',
            chain_name: 'sagatestnet'
          },
          chain: {
            channel_id: 'channel-4946'
          }
        }]
    },
    {
      description: 'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [{
          denom: 'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
          exponent: 0,
          aliases: ['usge']
        }, {
          denom: 'sge',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/8446486081A4086F4C6D5846FC5DC12E01D2DDD0C6A89B00B2F25EDD9986D026',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usge',
            chain_name: 'sgetestnet'
          },
          chain: {
            channel_id: 'channel-1568'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/1D082F4F5EE0A1F582B03B35F0F663A9CF9C6333874EDBF405559F8ABA024F24',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-638',
            base_denom: 'ustars',
            chain_name: 'stargazetestnet'
          },
          chain: {
            channel_id: 'channel-4175'
          }
        }]
    },
    {
      description: 'The native currency of Swisstronik.',
      denom_units: [{
          denom: 'ibc/7693B5E16070750C244B382F151E7347F324AEA7F4FFE94F4A3E02D26B35DE67',
          exponent: 0,
          aliases: ['aswtr']
        }, {
          denom: 'swtr',
          exponent: 18
        }],
      base: 'ibc/7693B5E16070750C244B382F151E7347F324AEA7F4FFE94F4A3E02D26B35DE67',
      name: 'Swisstronik Testnet',
      display: 'swtr',
      symbol: 'SWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'aswtr',
            chain_name: 'swisstroniktestnet'
          },
          chain: {
            channel_id: 'channel-8295'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/C5B7196709BDFC3A312B06D7292892FA53F379CD3D556B65DB00E1531D471BBA',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C5B7196709BDFC3A312B06D7292892FA53F379CD3D556B65DB00E1531D471BBA',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/32E0369D76BE8DD8071DF98AC078906DB583E0BBB5A6E2A3DFD4213CF90CD026',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6,
          aliases: ['harmony USD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/32E0369D76BE8DD8071DF98AC078906DB583E0BBB5A6E2A3DFD4213CF90CD026',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/8779E4C3F83063A8AC8FDD5E3C71B0992A5A1CC09FCAE12413C17E994126D15E',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6,
          aliases: ['harmony HKD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/8779E4C3F83063A8AC8FDD5E3C71B0992A5A1CC09FCAE12413C17E994126D15E',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/B8E2C7589D16766EA8E272B4872B15F8337683ED86CFE3F68E459EE9C548148A',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6,
          aliases: ['harmony VND']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B8E2C7589D16766EA8E272B4872B15F8337683ED86CFE3F68E459EE9C548148A',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-9540'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Synternet chain.',
      denom_units: [{
          denom: 'ibc/5A40E4FFC9DD1E4BF7BF7C77AC2B0F72C179DB4C64D4B351969FC8EBB9D12B97',
          exponent: 0,
          aliases: ['uamber']
        }, {
          denom: 'AMBER',
          exponent: 6
        }],
      base: 'ibc/5A40E4FFC9DD1E4BF7BF7C77AC2B0F72C179DB4C64D4B351969FC8EBB9D12B97',
      name: 'Synternet',
      display: 'AMBER',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'synternet',
            base_denom: 'usynt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uamber',
            chain_name: 'synternettestnet'
          },
          chain: {
            channel_id: 'channel-9152'
          }
        }]
    },
    {
      description: 'TTNT is the native token of the Titan Network testnet, serving as a medium of value, staking token, and transparency mechanism for the ecosystem.',
      denom_units: [{
          denom: 'ibc/C46DB64CBA325B311FA2595F70B2C99DAA4CE86483F28213AC81838E754E5DF0',
          exponent: 0,
          aliases: ['uttnt']
        }, {
          denom: 'ttnt',
          exponent: 6
        }],
      base: 'ibc/C46DB64CBA325B311FA2595F70B2C99DAA4CE86483F28213AC81838E754E5DF0',
      name: 'Titan Testnet TTNT',
      display: 'ttnt',
      symbol: 'TTNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uttnt',
            chain_name: 'titannettestnet'
          },
          chain: {
            channel_id: 'channel-9941'
          }
        }]
    },
    {
      description: 'TNT4 is the incentive token of the Titan Network\'s Galileo testnet, rewarding contributors who provide bandwidth resources for commercial use.',
      denom_units: [{
          denom: 'ibc/1CAED08A9A93AE357DDF458058FFDD7C9CC70EF67C0E4C2375B8E4414AAE2686',
          exponent: 0,
          aliases: ['utnt4']
        }, {
          denom: 'tnt4',
          exponent: 2
        }],
      base: 'ibc/1CAED08A9A93AE357DDF458058FFDD7C9CC70EF67C0E4C2375B8E4414AAE2686',
      name: 'Titan Testnet TNT4',
      display: 'tnt4',
      symbol: 'TNT4',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'utnt4',
            chain_name: 'titannettestnet'
          },
          chain: {
            channel_id: 'channel-9941'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
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
      base: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-5969'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/5C274155106FEB0C093F76A12BB67222E479E1EBE043F319CE4463E54F7A357C',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/5C274155106FEB0C093F76A12BB67222E479E1EBE043F319CE4463E54F7A357C',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-490',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-6668'
          }
        }]
    }
  ]
};
export default assets;
    