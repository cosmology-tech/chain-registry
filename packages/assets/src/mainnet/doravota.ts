import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'doravota',
  assets: [
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
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
            channel_id: 'channel-125',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Akash',
      denom_units: [
        {
          denom:
            'ibc/A95EBDF88AC1E3FDECAA1D6E250B07C0C86475A3E2BFA2E7DC94A6CDE23DF6D6',
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
      base: 'ibc/A95EBDF88AC1E3FDECAA1D6E250B07C0C86475A3E2BFA2E7DC94A6CDE23DF6D6',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-125',
            base_denom:
              'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-7'
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
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom:
            'ibc/1C8A050BBE4C060A4392CC062B2D3B7C3BFD68E0FA6BB5A5D03DEFCBC0FA7C38',
          exponent: 0,
          aliases: ['ucore']
        },
        {
          denom: 'core',
          exponent: 6
        }
      ],
      base: 'ibc/1C8A050BBE4C060A4392CC062B2D3B7C3BFD68E0FA6BB5A5D03DEFCBC0FA7C38',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
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
            channel_id: 'channel-750',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on the Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/0F0156FE21F5BA86C95A8FD8D2AEFEFA0286F82D295D655498487E0DFBD123FA',
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
      base: 'ibc/0F0156FE21F5BA86C95A8FD8D2AEFEFA0286F82D295D655498487E0DFBD123FA',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom:
              'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4'
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
            'ibc/F35746BFF53445195901060CB930A299DB82EA97EECB50CB2131A7396D03B764',
          exponent: 0,
          aliases: [
            'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F35746BFF53445195901060CB930A299DB82EA97EECB50CB2131A7396D03B764',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom:
              'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4'
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
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/D0C5DCA29836D2FD5937714B21206DD8243E5E76B1D0F180741CCB43DCAC1584',
          exponent: 0,
          aliases: ['adydx']
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      base: 'ibc/D0C5DCA29836D2FD5937714B21206DD8243E5E76B1D0F180741CCB43DCAC1584',
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
            channel_id: 'channel-15',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }
      ]
    },
    {
      description: 'Noble USDC on dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/593AA89EF61182F3705BD3B95A2B58AFA128D7FA4D6076BA2476033D8BF0576D',
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
      base: 'ibc/593AA89EF61182F3705BD3B95A2B58AFA128D7FA4D6076BA2476033D8BF0576D',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom:
              'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-6'
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
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/4F9BFE4F1919009E01C5D5960E35D15EFF330B846ADC4B2BECE5170E1AAEC0CE',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/4F9BFE4F1919009E01C5D5960E35D15EFF330B846ADC4B2BECE5170E1AAEC0CE',
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
            channel_id: 'channel-182',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Injective',
      denom_units: [
        {
          denom:
            'ibc/DA8A1CBA4EE61F380822C6D95930E3E52E0CE252413C8C513F8319AB44313CA3',
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
      base: 'ibc/DA8A1CBA4EE61F380822C6D95930E3E52E0CE252413C8C513F8319AB44313CA3',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-182',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
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
            'ibc/DEFA4431885D7F005B1C18C3DDCC4ABD55C921C6743326214A379D69DD5EBF18',
          exponent: 0,
          aliases: ['factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ']
        },
        {
          denom: 'ampINJ',
          exponent: 6
        }
      ],
      base: 'ibc/DEFA4431885D7F005B1C18C3DDCC4ABD55C921C6743326214A379D69DD5EBF18',
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
            channel_id: 'channel-182',
            base_denom:
              'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
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
            'ibc/8ED7ADC4588F6CB9D54E1E11F95EEEABE0D770671C5F9FBE9EFFC933858F3E5E',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      base: 'ibc/8ED7ADC4588F6CB9D54E1E11F95EEEABE0D770671C5F9FBE9EFFC933858F3E5E',
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
            channel_id: 'channel-182',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
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
            'ibc/12FB481950032554A74D52B18A61146A705F1EF0CAE17DCF00AD8F2CEA5C17DC',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      base: 'ibc/12FB481950032554A74D52B18A61146A705F1EF0CAE17DCF00AD8F2CEA5C17DC',
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
            channel_id: 'channel-182',
            base_denom:
              'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denom_units: [
        {
          denom:
            'ibc/D1F574127A2D17468F0C16803482AF1F8890C3FAF7510A10E87006BE4C05DECB',
          exponent: 0,
          aliases: ['factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI']
        },
        {
          denom: 'WGMI',
          exponent: 6
        }
      ],
      base: 'ibc/D1F574127A2D17468F0C16803482AF1F8890C3FAF7510A10E87006BE4C05DECB',
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
            channel_id: 'channel-182',
            base_denom:
              'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/C6824D6F41FC8F906D9656AC77B41FCF7CF136DD74A47E11385B021F6D578FE9',
          exponent: 0,
          aliases: ['unls']
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      base: 'ibc/C6824D6F41FC8F906D9656AC77B41FCF7CF136DD74A47E11385B021F6D578FE9',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingecko_id: 'nolus',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description:
        'axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/6660BFFBB57431AF3069D31E529913FFA80CFAB6D42E918E105A7B05D3FC70DE',
          exponent: 0,
          aliases: [
            'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6660BFFBB57431AF3069D31E529913FFA80CFAB6D42E918E105A7B05D3FC70DE',
      name: 'axlUSDC',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
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
      description:
        'OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/603E270A2472596F2D36CD80DA96C29B1DECD596CA21A97B21A945266C9B11E8',
          exponent: 0,
          aliases: [
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/603E270A2472596F2D36CD80DA96C29B1DECD596CA21A97B21A945266C9B11E8',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
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
      description:
        'stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/F021D13C5B3EAE6921AF8450B650045138AF9449B730EDB5DCC0041CE5F58614',
          exponent: 0,
          aliases: [
            'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1'
          ]
        },
        {
          denom: 'stosmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F021D13C5B3EAE6921AF8450B650045138AF9449B730EDB5DCC0041CE5F58614',
      name: 'Osmosis',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
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
      description:
        'ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/46B090A88099265F788C31422C685F545489DBB16B4000BE69430BB0CDF99E16',
          exponent: 0,
          aliases: [
            'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388'
          ]
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/46B090A88099265F788C31422C685F545489DBB16B4000BE69430BB0CDF99E16',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
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
      description:
        'stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/F0496E4E3A3E0EB208DB0FF0B10B6AA008AD903BBFFE739AC6009DBB9C3667D3',
          exponent: 0,
          aliases: [
            'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8'
          ]
        },
        {
          denom: 'statom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F0496E4E3A3E0EB208DB0FF0B10B6AA008AD903BBFFE739AC6009DBB9C3667D3',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901'
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
      description:
        'WETH transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/4515EF7E1686A5FD235AC39E150A60F8FB51031BB04EA00ECDB4BFDD70D11DA4',
          exponent: 0,
          aliases: [
            'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C'
          ]
        },
        {
          denom: 'weth',
          exponent: 18,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4515EF7E1686A5FD235AC39E150A60F8FB51031BB04EA00ECDB4BFDD70D11DA4',
      name: 'WETH',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      }
    },
    {
      description:
        'WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/5A66AB886B1C26CEE275E711E9FDFA3FC26E357D832A9E3B5FC044C8D1E71614',
          exponent: 0,
          aliases: [
            'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221'
          ]
        },
        {
          denom: 'wbtc',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5A66AB886B1C26CEE275E711E9FDFA3FC26E357D832A9E3B5FC044C8D1E71614',
      name: 'WBTC',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      }
    },
    {
      description:
        'AKT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/55BE68CD236B03FAF8B63FB16BD19322FB6BBA10EE284CE375A1E9C0B64549F3',
          exponent: 0,
          aliases: [
            'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459'
          ]
        },
        {
          denom: 'akt',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/55BE68CD236B03FAF8B63FB16BD19322FB6BBA10EE284CE375A1E9C0B64549F3',
      name: 'AKT',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
          }
        }
      ]
    },
    {
      description:
        'AXL transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/A6173C210544F7907DDA14F310FF1C649009F0EB6750831064B695393AE1A9DC',
          exponent: 0,
          aliases: [
            'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717'
          ]
        },
        {
          denom: 'axl',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A6173C210544F7907DDA14F310FF1C649009F0EB6750831064B695393AE1A9DC',
      name: 'AXL',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
          }
        }
      ]
    },
    {
      description:
        'JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/19352129F5D8C3230FCBB41C5E7A9420B4CB66441DF69BEE088CA1072EF836AC',
          exponent: 0,
          aliases: [
            'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C'
          ]
        },
        {
          denom: 'juno',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/19352129F5D8C3230FCBB41C5E7A9420B4CB66441DF69BEE088CA1072EF836AC',
      name: 'JUNO',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
          }
        }
      ]
    },
    {
      description:
        'EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/E3C2D67C07D5AAA6E38457161367952B9C0D848DD3A744AEC902CAC9C78FC769',
          exponent: 0,
          aliases: [
            'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE'
          ]
        },
        {
          denom: 'evmos',
          exponent: 18,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E3C2D67C07D5AAA6E38457161367952B9C0D848DD3A744AEC902CAC9C78FC769',
      name: 'EVMOS',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
          }
        }
      ]
    },
    {
      description:
        'stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/6B17EE0D7D4A7B7836350B754DECA9587B596426D9A7EB9FA4FCBEE8D7FE8392',
          exponent: 0,
          aliases: [
            'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865'
          ]
        },
        {
          denom: 'stk/atom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B17EE0D7D4A7B7836350B754DECA9587B596426D9A7EB9FA4FCBEE8D7FE8392',
      name: 'stkATOM',
      display: 'stk/atom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC'
          }
        }
      ]
    },
    {
      description:
        'SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/6A87D98DF30A648EA2EA5AEF394E6CAC231AD671806C12E2300B71356BFFF4AA',
          exponent: 0,
          aliases: [
            'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107'
          ]
        },
        {
          denom: 'scrt',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6A87D98DF30A648EA2EA5AEF394E6CAC231AD671806C12E2300B71356BFFF4AA',
      name: 'SCRT',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
          }
        }
      ]
    },
    {
      description:
        'CRO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/96B8FC73FD892D06DBE2B08FD2F91680D5148143F62A33DEF16C07F1A6A6A5CF',
          exponent: 0,
          aliases: [
            'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48'
          ]
        },
        {
          denom: 'cro',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/96B8FC73FD892D06DBE2B08FD2F91680D5148143F62A33DEF16C07F1A6A6A5CF',
      name: 'CRO',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      }
    },
    {
      description:
        'STARS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/8986ECA60B85C596F38BF8D21603F76DC426C705FE59EF257178C75B4C90257A',
          exponent: 0,
          aliases: [
            'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5'
          ]
        },
        {
          denom: 'stars',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8986ECA60B85C596F38BF8D21603F76DC426C705FE59EF257178C75B4C90257A',
      name: 'STARS',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
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
        'TIA transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/04A1B93D1D1136656FA589F19BAC0E390B5D52C1F5B24F637D4A5A8A96E6389D',
          exponent: 0,
          aliases: [
            'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5'
          ]
        },
        {
          denom: 'tia',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/04A1B93D1D1136656FA589F19BAC0E390B5D52C1F5B24F637D4A5A8A96E6389D',
      name: 'TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877'
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
      description:
        'STRD transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/491C5F109B39AB4CE54A57FB1780928B6FE559DD9AE933EBA6D524C56DD6DA37',
          exponent: 0,
          aliases: [
            'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B'
          ]
        },
        {
          denom: 'strd',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/491C5F109B39AB4CE54A57FB1780928B6FE559DD9AE933EBA6D524C56DD6DA37',
      name: 'STRD',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4'
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
      description:
        'NTRN transferred from the Neutron mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/75C7410A2238A418318956045F446ABDECE02E762E73E113829ADC356295219D',
          exponent: 0,
          aliases: [
            'ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09'
          ]
        },
        {
          denom: 'ntrn',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/75C7410A2238A418318956045F446ABDECE02E762E73E113829ADC356295219D',
      name: 'NTRN',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg'
      }
    },
    {
      description:
        'DYDX transferred from the Neutron mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/01C3820CC77344FEF092FC9F01534D7042163C5D7BA8A96BBE14443D47839FA9',
          exponent: 0,
          aliases: [
            'ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/01C3820CC77344FEF092FC9F01534D7042163C5D7BA8A96BBE14443D47839FA9',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4092',
            base_denom:
              'ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'neutron',
            base_denom:
              'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130'
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
            channel_id: 'channel-2694',
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
            channel_id: 'channel-2694',
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
            channel_id: 'channel-2694',
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
            channel_id: 'channel-2694',
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
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/18624EAC27898C0DD81951E6638AA8F32B35C626A93142A37E2B17D3F4527B0A',
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
      base: 'ibc/18624EAC27898C0DD81951E6638AA8F32B35C626A93142A37E2B17D3F4527B0A',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
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
      base: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-2694',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-2694',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-2694',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-2694',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-2694',
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
      description: 'Tether USDT on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/A291356F2AE84BEB344DEA335F837AAFBA43C873009D0AC9333E6E3B04AB1AA9',
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
      base: 'ibc/A291356F2AE84BEB344DEA335F837AAFBA43C873009D0AC9333E6E3B04AB1AA9',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
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
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
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
      base: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
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
      base: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'TIA on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
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
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/A5BA3F1C38ADAA11F941D66B19A7CD67B127F25DE2EA581BCD2DC4D8D50BEED9',
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
      base: 'ibc/A5BA3F1C38ADAA11F941D66B19A7CD67B127F25DE2EA581BCD2DC4D8D50BEED9',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'NOIS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/B4D30D3FC770F58F0FAC4C593D18DED847844942A2B8D15E0ABDDBF110AE7A6E',
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
      base: 'ibc/B4D30D3FC770F58F0FAC4C593D18DED847844942A2B8D15E0ABDDBF110AE7A6E',
      name: 'Nois NOIS',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/8361A05D7FEB200168AD58B4BE8B9A4F4EC3386FED621B94026B925EFBD2DD88',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      base: 'ibc/8361A05D7FEB200168AD58B4BE8B9A4F4EC3386FED621B94026B925EFBD2DD88',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom:
            'ibc/92CA10D8AD5DFA69918E5860570A33922EC9181F013328034D9423D7A3A95C89',
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
      base: 'ibc/92CA10D8AD5DFA69918E5860570A33922EC9181F013328034D9423D7A3A95C89',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
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
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
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
      base: 'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
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
      base: 'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/9F4C0779B5198070691EA6E6630FFD9C714092FD7F8DEB595A9F8B4421A940AC',
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
      base: 'ibc/9F4C0779B5198070691EA6E6630FFD9C714092FD7F8DEB595A9F8B4421A940AC',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/64C2F728722DA2B30083372FD2DDDC86B976F963F5BC18122B86E571E91D6BA3',
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
      base: 'ibc/64C2F728722DA2B30083372FD2DDDC86B976F963F5BC18122B86E571E91D6BA3',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/FF456FD21AA44251D2122BF19B20C5FE717A1EBD054A59FA1CA4B21742048CA0',
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
      base: 'ibc/FF456FD21AA44251D2122BF19B20C5FE717A1EBD054A59FA1CA4B21742048CA0',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/4786BEBBFDD989C467C4552AD73065D8B2578230B8428B3B9275D540EB04C851',
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
      base: 'ibc/4786BEBBFDD989C467C4552AD73065D8B2578230B8428B3B9275D540EB04C851',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
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
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/4E19777F57A46073C673FDAB58A4C6BA85208DCBD5E2948107DE0B7248F0D3B0',
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
      base: 'ibc/4E19777F57A46073C673FDAB58A4C6BA85208DCBD5E2948107DE0B7248F0D3B0',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/B79B0B919C27401AC597C7C31CC7492EF208A58DCB451A3CCB379BADE3109E5F',
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
      base: 'ibc/B79B0B919C27401AC597C7C31CC7492EF208A58DCB451A3CCB379BADE3109E5F',
      name: 'PageDAO',
      display: 'page',
      symbol: 'PAGE.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/AD1095193A389090566F66B9F9E1DE8F10D81F7B787717E7EC231369046D0ABF',
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
      base: 'ibc/AD1095193A389090566F66B9F9E1DE8F10D81F7B787717E7EC231369046D0ABF',
      name: 'Nomic',
      display: 'nomic',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/05F447D15EE51344959C2EFBCE22B14DA3CB55FB4C56EA71F09CCC54E0BF9678',
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
      base: 'ibc/05F447D15EE51344959C2EFBCE22B14DA3CB55FB4C56EA71F09CCC54E0BF9678',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/35065FCFC0E3F13EE449D9C02E79ECB91CFAD36F56DF5299CBFD442578ED826E',
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
      base: 'ibc/35065FCFC0E3F13EE449D9C02E79ECB91CFAD36F56DF5299CBFD442578ED826E',
      name: 'Injective AUTISM',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/A5E921253495F2A8827BAF18DA3BF18F72E88D7EC9DF047D262915783EA2B272',
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
      base: 'ibc/A5E921253495F2A8827BAF18DA3BF18F72E88D7EC9DF047D262915783EA2B272',
      name: 'WOOF chihuahua',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/E890CC919F2CF9442F0A6C5ED8D3375D8A4121D99CA0B97513089AE58BD95336',
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
      base: 'ibc/E890CC919F2CF9442F0A6C5ED8D3375D8A4121D99CA0B97513089AE58BD95336',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/CE99B4D2A172275C064595B750827855E04D5E068FB7C642C8469CA9B5DB0EE1',
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
      base: 'ibc/CE99B4D2A172275C064595B750827855E04D5E068FB7C642C8469CA9B5DB0EE1',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
          exponent: 0,
          aliases: ['factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO']
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'NLS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/989DF9B673551127FB0176F748F43E6CF67BAF429535DBC8CA1644B5FAF80453',
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
      base: 'ibc/989DF9B673551127FB0176F748F43E6CF67BAF429535DBC8CA1644B5FAF80453',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
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
      base: 'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2694',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            'ibc/0A15AC1985AFEA902D4EBE897DABBD28100894D2ECE76E081963145EFC1C5BFF',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      base: 'ibc/0A15AC1985AFEA902D4EBE897DABBD28100894D2ECE76E081963145EFC1C5BFF',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'Sail DAO Token',
      denom_units: [
        {
          denom:
            'ibc/7577185E42939EE57EF73E2DE57A28BBE7693EDC0766C506E570C5D6B7636B33',
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
      base: 'ibc/7577185E42939EE57EF73E2DE57A28BBE7693EDC0766C506E570C5D6B7636B33',
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
            channel_id: 'channel-2694',
            base_denom:
              'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
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
