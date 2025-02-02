import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'carbon',
  assets: [
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primary_color_hex: '#1c1f1f'
          }
        }],
      socials: {
        website: 'https://canto.io/',
        twitter: 'https://twitter.com/CantoPublic'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primary_color_hex: '#1c1f1f'
          }
        }],
      socials: {
        website: 'https://canto.io/',
        twitter: 'https://twitter.com/CantoPublic'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-342',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/DB17D8D720B09503376E950B6AD1F04C456861480787ADF7BE61406ACB8BC0F3',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/DB17D8D720B09503376E950B6AD1F04C456861480787ADF7BE61406ACB8BC0F3',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/3543CC7E24618A3BEF1084D8A83AE24B3212EFEC11B353347EC1CFD3CC517064',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/3543CC7E24618A3BEF1084D8A83AE24B3212EFEC11B353347EC1CFD3CC517064',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/D47925C96FBA6365468FD7D94797B39DB80258C30F60782F3E3D2455552ED8D5',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/D47925C96FBA6365468FD7D94797B39DB80258C30F60782F3E3D2455552ED8D5',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primary_color_hex: '#5664ad'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-68',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-46',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-188',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-188',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-123',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-47',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-342',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/DB17D8D720B09503376E950B6AD1F04C456861480787ADF7BE61406ACB8BC0F3',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/DB17D8D720B09503376E950B6AD1F04C456861480787ADF7BE61406ACB8BC0F3',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/3543CC7E24618A3BEF1084D8A83AE24B3212EFEC11B353347EC1CFD3CC517064',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/3543CC7E24618A3BEF1084D8A83AE24B3212EFEC11B353347EC1CFD3CC517064',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/D47925C96FBA6365468FD7D94797B39DB80258C30F60782F3E3D2455552ED8D5',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/D47925C96FBA6365468FD7D94797B39DB80258C30F60782F3E3D2455552ED8D5',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primary_color_hex: '#5664ad'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-68',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-46',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-188',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-188',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-123',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-47',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/768903789BCBE018F25174371F0EC4F2173DD0B098E731D7344B00FB98EDE307',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/768903789BCBE018F25174371F0EC4F2173DD0B098E731D7344B00FB98EDE307',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }],
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      }
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/1F8933F0FE76598DB96F750BBDC3D7F2B0432455BF746001F657F6BBBDF2378B',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/1F8933F0FE76598DB96F750BBDC3D7F2B0432455BF746001F657F6BBBDF2378B',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
          theme: {
            primary_color_hex: '#244c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/257F63A5D5B5CDC39A8962671E12B55C123FBE1ACC7AA487277B43D1E1C7BD49',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/257F63A5D5B5CDC39A8962671E12B55C123FBE1ACC7AA487277B43D1E1C7BD49',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
          theme: {
            primary_color_hex: '#1d5c65'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/7C4A54456C75D32CC766459EE11A3BA72DF52A70BE31F6D497DEAD3A56AD2CCC',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/7C4A54456C75D32CC766459EE11A3BA72DF52A70BE31F6D497DEAD3A56AD2CCC',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/15089D94EC7158374C4B22244E1A6EC817F63282D0138ED964738D30FA357DD7',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/15089D94EC7158374C4B22244E1A6EC817F63282D0138ED964738D30FA357DD7',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/6A6E374A6BBF21084B8CC28DB82674C9B3AF0EBC759E613B9E0E1D6333E7B66B',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/6A6E374A6BBF21084B8CC28DB82674C9B3AF0EBC759E613B9E0E1D6333E7B66B',
      name: 'almagem',
      display: 'AMG',
      symbol: 'AMG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/137A008E03E1EA2B5A86C4E4A947DF33E6876FEF48AC31FAB507A09DB66CC699',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/137A008E03E1EA2B5A86C4E4A947DF33E6876FEF48AC31FAB507A09DB66CC699',
      name: 'arika',
      display: 'ARK',
      symbol: 'ARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/1CDC8DA88767C1FE76FAD24D2EDE13B90E0DCC6499D3E4DBA84C06BF1A586EE1',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/1CDC8DA88767C1FE76FAD24D2EDE13B90E0DCC6499D3E4DBA84C06BF1A586EE1',
      name: 'danu',
      display: 'DANU',
      symbol: 'DANU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/1BF98308078B8438AC161E4FBBFAFFD196B4E69505660521F40C7AA7E853B301',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/1BF98308078B8438AC161E4FBBFAFFD196B4E69505660521F40C7AA7E853B301',
      name: 'torus',
      display: 'TRS',
      symbol: 'TRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/A4BBB91ECE7322B26ED9FF7E851C2D17CE6E71D68928284BA6D61DE3614DDD1A',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/A4BBB91ECE7322B26ED9FF7E851C2D17CE6E71D68928284BA6D61DE3614DDD1A',
      name: 'plasma',
      display: 'PLASMA',
      symbol: 'PLASMA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/2987E86862728F098B49333041328D3916029B6E09D341AA16B740AFAC93019F',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/2987E86862728F098B49333041328D3916029B6E09D341AA16B740AFAC93019F',
      name: 'dmt',
      display: 'DMT',
      symbol: 'DMT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/62A3870B9804FC3A92EAAA1F0F3F07E089DBF76CC521466CA33F5AAA8AD42290',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/62A3870B9804FC3A92EAAA1F0F3F07E089DBF76CC521466CA33F5AAA8AD42290',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/DCE71037372C2ECF5DEE299B9B3CAFC84309BB5FA9C1AD80C91D057BB5EDA39D',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/DCE71037372C2ECF5DEE299B9B3CAFC84309BB5FA9C1AD80C91D057BB5EDA39D',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primary_color_hex: '#f3f313'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/55D4EEA7C39289C2119651FBA59D88CB65CF00F42626E72F4D23AA43CD768BB3',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/55D4EEA7C39289C2119651FBA59D88CB65CF00F42626E72F4D23AA43CD768BB3',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
          theme: {
            primary_color_hex: '#21b6b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/262959ED1639A090F7C10E85FB46DC5974FE65D14E101D2E104272E4347C74D8',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/262959ED1639A090F7C10E85FB46DC5974FE65D14E101D2E104272E4347C74D8',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primary_color_hex: '#f3d343'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/06034D37A21FC23C20C277613997270CF6CBE6F35A4FAD1858AE3506E91A7FAA',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/06034D37A21FC23C20C277613997270CF6CBE6F35A4FAD1858AE3506E91A7FAA',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/3A5F96C1C305DF7EE2FA4B911473F4341CED430D9F3E26FD02C9B60AD2108DF4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/3A5F96C1C305DF7EE2FA4B911473F4341CED430D9F3E26FD02C9B60AD2108DF4',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
          theme: {
            primary_color_hex: '#efe8e9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/54CC794AA52170A042F78F5838BF3D37A4067A621D31A1F3B2E3C381BE17C543',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/54CC794AA52170A042F78F5838BF3D37A4067A621D31A1F3B2E3C381BE17C543',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png',
          theme: {
            primary_color_hex: '#e3e2e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/D96A686AF4C5A5960FBFC6A61A552DA910647B3EA02F25CC17483555AEFCC20D',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/D96A686AF4C5A5960FBFC6A61A552DA910647B3EA02F25CC17483555AEFCC20D',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/F21114987B694AE05A61289122A465676830C25F28C660976CDD92E62A7ADC2D',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/F21114987B694AE05A61289122A465676830C25F28C660976CDD92E62A7ADC2D',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/E1A1D8F98B6D046337DF9F64B7BCC892DC3F29929708F7373B3352C25A31A74C',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/E1A1D8F98B6D046337DF9F64B7BCC892DC3F29929708F7373B3352C25A31A74C',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png',
          theme: {
            primary_color_hex: '#f1cc79'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/F778F727D342E57298B4C481B4A87136D96163A443EA51011894C0519A20F9B4',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/F778F727D342E57298B4C481B4A87136D96163A443EA51011894C0519A20F9B4',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png',
          theme: {
            primary_color_hex: '#c0943f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/D0BF277792604A753BED55A72A7D5F132CC510105A605B44B9150EC536BDAF79',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/D0BF277792604A753BED55A72A7D5F132CC510105A605B44B9150EC536BDAF79',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png',
          theme: {
            primary_color_hex: '#dd6a30'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/4708ED5E07759DC98A6E4420DE397081B5D746E5F6D21C9FF12AB1DECDFDFE19',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/4708ED5E07759DC98A6E4420DE397081B5D746E5F6D21C9FF12AB1DECDFDFE19',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png',
          theme: {
            primary_color_hex: '#0da8c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/2A169FC626E8A09C9B78892D643F0A784F02860B594D6880FFDF5B9D2B27107A',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/2A169FC626E8A09C9B78892D643F0A784F02860B594D6880FFDF5B9D2B27107A',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png',
          theme: {
            primary_color_hex: '#0ba7ce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/AAECF45853AF0C7A3E5415205C16AFCDED6BA2460700A3DFD6F5300169E77BA0',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/AAECF45853AF0C7A3E5415205C16AFCDED6BA2460700A3DFD6F5300169E77BA0',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png',
          theme: {
            primary_color_hex: '#f8d034'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/E5EB51D814ED5634AB35CBE957CC54EFA68EA31CDD687E549DEC211A5569134C',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/E5EB51D814ED5634AB35CBE957CC54EFA68EA31CDD687E549DEC211A5569134C',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png',
          theme: {
            primary_color_hex: '#d19a84'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/B9E06F6F5A8B801B89B320F222D92CC3A4CAA2C593B1D643CBFF129695F7FF8E',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/B9E06F6F5A8B801B89B320F222D92CC3A4CAA2C593B1D643CBFF129695F7FF8E',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png',
          theme: {
            primary_color_hex: '#ae987b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/FFF19F27282675F758A9C549DE660D342C219607243C189D86B0C79ECAFDBA59',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/FFF19F27282675F758A9C549DE660D342C219607243C189D86B0C79ECAFDBA59',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png',
          theme: {
            primary_color_hex: '#040607'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/237087663DC7D917247E1FD598DE7675DDE840D929E626B90DEB11C5DF971761',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/237087663DC7D917247E1FD598DE7675DDE840D929E626B90DEB11C5DF971761',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png',
          theme: {
            primary_color_hex: '#232333'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/3BB8B5197DA377AB95A9F58AE523D8BA60D47892EF37D6A1DEE71C08976AAC4A',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/3BB8B5197DA377AB95A9F58AE523D8BA60D47892EF37D6A1DEE71C08976AAC4A',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primary_color_hex: '#0c0704'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/C0A3A820D19EC3D83364B3017128740D5B3A839104DB3BD073219C93FCDBF4D2',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/C0A3A820D19EC3D83364B3017128740D5B3A839104DB3BD073219C93FCDBF4D2',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png',
          theme: {
            primary_color_hex: '#040507'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/B1A81D9C790BB52E6C1770D9366B62AD51CE90281F61962FF2A9D38CC14F0D68',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/B1A81D9C790BB52E6C1770D9366B62AD51CE90281F61962FF2A9D38CC14F0D68',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png',
          theme: {
            primary_color_hex: '#c7cbcf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/781B32DD8EBFC502EC6F1C023706AA74F1232880D70AC2EB7C6A903F4ED6242B',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/781B32DD8EBFC502EC6F1C023706AA74F1232880D70AC2EB7C6A903F4ED6242B',
      name: 'ERIS Arb LUNA',
      display: 'arbLUNA',
      symbol: 'arbLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/768903789BCBE018F25174371F0EC4F2173DD0B098E731D7344B00FB98EDE307',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/768903789BCBE018F25174371F0EC4F2173DD0B098E731D7344B00FB98EDE307',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }],
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      }
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/1F8933F0FE76598DB96F750BBDC3D7F2B0432455BF746001F657F6BBBDF2378B',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/1F8933F0FE76598DB96F750BBDC3D7F2B0432455BF746001F657F6BBBDF2378B',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
          theme: {
            primary_color_hex: '#244c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/257F63A5D5B5CDC39A8962671E12B55C123FBE1ACC7AA487277B43D1E1C7BD49',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/257F63A5D5B5CDC39A8962671E12B55C123FBE1ACC7AA487277B43D1E1C7BD49',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
          theme: {
            primary_color_hex: '#1d5c65'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/7C4A54456C75D32CC766459EE11A3BA72DF52A70BE31F6D497DEAD3A56AD2CCC',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/7C4A54456C75D32CC766459EE11A3BA72DF52A70BE31F6D497DEAD3A56AD2CCC',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/15089D94EC7158374C4B22244E1A6EC817F63282D0138ED964738D30FA357DD7',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/15089D94EC7158374C4B22244E1A6EC817F63282D0138ED964738D30FA357DD7',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/6A6E374A6BBF21084B8CC28DB82674C9B3AF0EBC759E613B9E0E1D6333E7B66B',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/6A6E374A6BBF21084B8CC28DB82674C9B3AF0EBC759E613B9E0E1D6333E7B66B',
      name: 'almagem',
      display: 'AMG',
      symbol: 'AMG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/137A008E03E1EA2B5A86C4E4A947DF33E6876FEF48AC31FAB507A09DB66CC699',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/137A008E03E1EA2B5A86C4E4A947DF33E6876FEF48AC31FAB507A09DB66CC699',
      name: 'arika',
      display: 'ARK',
      symbol: 'ARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/1CDC8DA88767C1FE76FAD24D2EDE13B90E0DCC6499D3E4DBA84C06BF1A586EE1',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/1CDC8DA88767C1FE76FAD24D2EDE13B90E0DCC6499D3E4DBA84C06BF1A586EE1',
      name: 'danu',
      display: 'DANU',
      symbol: 'DANU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/1BF98308078B8438AC161E4FBBFAFFD196B4E69505660521F40C7AA7E853B301',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/1BF98308078B8438AC161E4FBBFAFFD196B4E69505660521F40C7AA7E853B301',
      name: 'torus',
      display: 'TRS',
      symbol: 'TRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/A4BBB91ECE7322B26ED9FF7E851C2D17CE6E71D68928284BA6D61DE3614DDD1A',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/A4BBB91ECE7322B26ED9FF7E851C2D17CE6E71D68928284BA6D61DE3614DDD1A',
      name: 'plasma',
      display: 'PLASMA',
      symbol: 'PLASMA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/2987E86862728F098B49333041328D3916029B6E09D341AA16B740AFAC93019F',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/2987E86862728F098B49333041328D3916029B6E09D341AA16B740AFAC93019F',
      name: 'dmt',
      display: 'DMT',
      symbol: 'DMT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/62A3870B9804FC3A92EAAA1F0F3F07E089DBF76CC521466CA33F5AAA8AD42290',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/62A3870B9804FC3A92EAAA1F0F3F07E089DBF76CC521466CA33F5AAA8AD42290',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/DCE71037372C2ECF5DEE299B9B3CAFC84309BB5FA9C1AD80C91D057BB5EDA39D',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/DCE71037372C2ECF5DEE299B9B3CAFC84309BB5FA9C1AD80C91D057BB5EDA39D',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primary_color_hex: '#f3f313'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/55D4EEA7C39289C2119651FBA59D88CB65CF00F42626E72F4D23AA43CD768BB3',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/55D4EEA7C39289C2119651FBA59D88CB65CF00F42626E72F4D23AA43CD768BB3',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
          theme: {
            primary_color_hex: '#21b6b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/262959ED1639A090F7C10E85FB46DC5974FE65D14E101D2E104272E4347C74D8',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/262959ED1639A090F7C10E85FB46DC5974FE65D14E101D2E104272E4347C74D8',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primary_color_hex: '#f3d343'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/06034D37A21FC23C20C277613997270CF6CBE6F35A4FAD1858AE3506E91A7FAA',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/06034D37A21FC23C20C277613997270CF6CBE6F35A4FAD1858AE3506E91A7FAA',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/3A5F96C1C305DF7EE2FA4B911473F4341CED430D9F3E26FD02C9B60AD2108DF4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/3A5F96C1C305DF7EE2FA4B911473F4341CED430D9F3E26FD02C9B60AD2108DF4',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
          theme: {
            primary_color_hex: '#efe8e9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/54CC794AA52170A042F78F5838BF3D37A4067A621D31A1F3B2E3C381BE17C543',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/54CC794AA52170A042F78F5838BF3D37A4067A621D31A1F3B2E3C381BE17C543',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png',
          theme: {
            primary_color_hex: '#e3e2e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/D96A686AF4C5A5960FBFC6A61A552DA910647B3EA02F25CC17483555AEFCC20D',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/D96A686AF4C5A5960FBFC6A61A552DA910647B3EA02F25CC17483555AEFCC20D',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/F21114987B694AE05A61289122A465676830C25F28C660976CDD92E62A7ADC2D',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/F21114987B694AE05A61289122A465676830C25F28C660976CDD92E62A7ADC2D',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/E1A1D8F98B6D046337DF9F64B7BCC892DC3F29929708F7373B3352C25A31A74C',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/E1A1D8F98B6D046337DF9F64B7BCC892DC3F29929708F7373B3352C25A31A74C',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png',
          theme: {
            primary_color_hex: '#f1cc79'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/F778F727D342E57298B4C481B4A87136D96163A443EA51011894C0519A20F9B4',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/F778F727D342E57298B4C481B4A87136D96163A443EA51011894C0519A20F9B4',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png',
          theme: {
            primary_color_hex: '#c0943f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/D0BF277792604A753BED55A72A7D5F132CC510105A605B44B9150EC536BDAF79',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/D0BF277792604A753BED55A72A7D5F132CC510105A605B44B9150EC536BDAF79',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png',
          theme: {
            primary_color_hex: '#dd6a30'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/4708ED5E07759DC98A6E4420DE397081B5D746E5F6D21C9FF12AB1DECDFDFE19',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/4708ED5E07759DC98A6E4420DE397081B5D746E5F6D21C9FF12AB1DECDFDFE19',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png',
          theme: {
            primary_color_hex: '#0da8c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/2A169FC626E8A09C9B78892D643F0A784F02860B594D6880FFDF5B9D2B27107A',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/2A169FC626E8A09C9B78892D643F0A784F02860B594D6880FFDF5B9D2B27107A',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png',
          theme: {
            primary_color_hex: '#0ba7ce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/AAECF45853AF0C7A3E5415205C16AFCDED6BA2460700A3DFD6F5300169E77BA0',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/AAECF45853AF0C7A3E5415205C16AFCDED6BA2460700A3DFD6F5300169E77BA0',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png',
          theme: {
            primary_color_hex: '#f8d034'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/E5EB51D814ED5634AB35CBE957CC54EFA68EA31CDD687E549DEC211A5569134C',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/E5EB51D814ED5634AB35CBE957CC54EFA68EA31CDD687E549DEC211A5569134C',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png',
          theme: {
            primary_color_hex: '#d19a84'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/B9E06F6F5A8B801B89B320F222D92CC3A4CAA2C593B1D643CBFF129695F7FF8E',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/B9E06F6F5A8B801B89B320F222D92CC3A4CAA2C593B1D643CBFF129695F7FF8E',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png',
          theme: {
            primary_color_hex: '#ae987b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/FFF19F27282675F758A9C549DE660D342C219607243C189D86B0C79ECAFDBA59',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/FFF19F27282675F758A9C549DE660D342C219607243C189D86B0C79ECAFDBA59',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png',
          theme: {
            primary_color_hex: '#040607'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/237087663DC7D917247E1FD598DE7675DDE840D929E626B90DEB11C5DF971761',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/237087663DC7D917247E1FD598DE7675DDE840D929E626B90DEB11C5DF971761',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png',
          theme: {
            primary_color_hex: '#232333'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/3BB8B5197DA377AB95A9F58AE523D8BA60D47892EF37D6A1DEE71C08976AAC4A',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/3BB8B5197DA377AB95A9F58AE523D8BA60D47892EF37D6A1DEE71C08976AAC4A',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primary_color_hex: '#0c0704'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/C0A3A820D19EC3D83364B3017128740D5B3A839104DB3BD073219C93FCDBF4D2',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/C0A3A820D19EC3D83364B3017128740D5B3A839104DB3BD073219C93FCDBF4D2',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png',
          theme: {
            primary_color_hex: '#040507'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/B1A81D9C790BB52E6C1770D9366B62AD51CE90281F61962FF2A9D38CC14F0D68',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/B1A81D9C790BB52E6C1770D9366B62AD51CE90281F61962FF2A9D38CC14F0D68',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png',
          theme: {
            primary_color_hex: '#c7cbcf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/781B32DD8EBFC502EC6F1C023706AA74F1232880D70AC2EB7C6A903F4ED6242B',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/781B32DD8EBFC502EC6F1C023706AA74F1232880D70AC2EB7C6A903F4ED6242B',
      name: 'ERIS Arb LUNA',
      display: 'arbLUNA',
      symbol: 'arbLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-41',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-16'
          }
        }]
    }
  ]
};
export default assets;
    