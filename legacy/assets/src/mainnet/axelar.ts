import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'axelar',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/47F03B29C23ADD8E97F5209E907E1A765FE69FC60C414D7E80E7419E62874F27',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/47F03B29C23ADD8E97F5209E907E1A765FE69FC60C414D7E80E7419E62874F27',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/B46F7431C564183F580DEF1AD36CCE98183F3811C76DC7DB6CC61E32E274DBA2',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/B46F7431C564183F580DEF1AD36CCE98183F3811C76DC7DB6CC61E32E274DBA2',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/B28692C9B7C8519DD02329EE1C1977B16B184069DAB71A262A990B50A13CF369',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/B28692C9B7C8519DD02329EE1C1977B16B184069DAB71A262A990B50A13CF369',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/904127FBA8462A67ABE600B66DA04A51E7301F82757E58592078087F28757359',
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
      base: 'ibc/904127FBA8462A67ABE600B66DA04A51E7301F82757E58592078087F28757359',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-111'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/4D4A1D1E93450D7BE94F86BF8BC06C157D841949FBDB65B168CC38611CFBB30F',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/4D4A1D1E93450D7BE94F86BF8BC06C157D841949FBDB65B168CC38611CFBB30F',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
          theme: {
            primary_color_hex: '#a7c8d4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-104'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/47F03B29C23ADD8E97F5209E907E1A765FE69FC60C414D7E80E7419E62874F27',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/47F03B29C23ADD8E97F5209E907E1A765FE69FC60C414D7E80E7419E62874F27',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/B46F7431C564183F580DEF1AD36CCE98183F3811C76DC7DB6CC61E32E274DBA2',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/B46F7431C564183F580DEF1AD36CCE98183F3811C76DC7DB6CC61E32E274DBA2',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/B28692C9B7C8519DD02329EE1C1977B16B184069DAB71A262A990B50A13CF369',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/B28692C9B7C8519DD02329EE1C1977B16B184069DAB71A262A990B50A13CF369',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/904127FBA8462A67ABE600B66DA04A51E7301F82757E58592078087F28757359',
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
      base: 'ibc/904127FBA8462A67ABE600B66DA04A51E7301F82757E58592078087F28757359',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-111'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/4D4A1D1E93450D7BE94F86BF8BC06C157D841949FBDB65B168CC38611CFBB30F',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/4D4A1D1E93450D7BE94F86BF8BC06C157D841949FBDB65B168CC38611CFBB30F',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
          theme: {
            primary_color_hex: '#a7c8d4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-104'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/2F740C82769D1D7697CFB3D211F952E835AFD9C1852D23B49F3FA7F0475D794B',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/2F740C82769D1D7697CFB3D211F952E835AFD9C1852D23B49F3FA7F0475D794B',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-125'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/51DF28237DFCC73155B2F3E61300F5BF0F4989BD9F0C103A5939B03BB5A62649',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'ibc/51DF28237DFCC73155B2F3E61300F5BF0F4989BD9F0C103A5939B03BB5A62649',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      coingecko_id: 'chain4energy',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
          theme: {
            primary_color_hex: '#24344c'
          }
        }],
      socials: {
        website: 'https://c4e.io/',
        twitter: 'https://twitter.com/Chain4Energy'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uc4e',
            chain_name: 'chain4energy'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/4D5EB920B907F2270899EE1B196B44A8764E28847EEA42E70530685125EE6DA9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/4D5EB920B907F2270899EE1B196B44A8764E28847EEA42E70530685125EE6DA9',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-293',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/0F9EA9664729F336E5DC0FCB341E1C1993B6A272F5E4003CA74D9F8D54CEF43A',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0F9EA9664729F336E5DC0FCB341E1C1993B6A272F5E4003CA74D9F8D54CEF43A',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/B755889E03BCC776D971B24434A22F9907CC4745116A032CC0179730510C509E',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/B755889E03BCC776D971B24434A22F9907CC4745116A032CC0179730510C509E',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-109'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/73D370D177CC659EA123B423D1AC194F0733537E5A346ECEA1DCBC8FEBB45FD3',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/73D370D177CC659EA123B423D1AC194F0733537E5A346ECEA1DCBC8FEBB45FD3',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/DF9C2A453418DDCD76467432228E2D3A54B6427192C02047A36A66716DC4532E',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/DF9C2A453418DDCD76467432228E2D3A54B6427192C02047A36A66716DC4532E',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A87C7282021D27AFB3356130F807E2FA3C792966CE7DDD6861EDCD2E10FEED15',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A87C7282021D27AFB3356130F807E2FA3C792966CE7DDD6861EDCD2E10FEED15',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/7107E690DF19ABABC671E80D15319D4493647134E0A7AD89F2BC236BB780B89D',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/7107E690DF19ABABC671E80D15319D4493647134E0A7AD89F2BC236BB780B89D',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4C64C29DD6CC71639E9C3FB7F43D0068F86C447F38951527B95F0DF4CABD0E66',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4C64C29DD6CC71639E9C3FB7F43D0068F86C447F38951527B95F0DF4CABD0E66',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      socials: {
        website: 'https://functionx.io',
        twitter: 'https://x.com/functionx_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-128'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/0B1A2FD6D40BBD60EEAF9ED619767EA8047CC7A46DC2A103183D7E9EE1063599',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/0B1A2FD6D40BBD60EEAF9ED619767EA8047CC7A46DC2A103183D7E9EE1063599',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/EC8E01D2F4F6890AE180845C8CE27F9E64240CC824D8DCCD137B82B548DB74CD',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/EC8E01D2F4F6890AE180845C8CE27F9E64240CC824D8DCCD137B82B548DB74CD',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/8D065F116ED0F967E6A73C8EE96E11C1DABB1C0B1F531BDA01D79FAC439F434E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/8D065F116ED0F967E6A73C8EE96E11C1DABB1C0B1F531BDA01D79FAC439F434E',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/A958074A992C4CA9B836F4989F2B68A3F3FEDFEE75C3A1B0AE9744A0C79A1FE9',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/A958074A992C4CA9B836F4989F2B68A3F3FEDFEE75C3A1B0AE9744A0C79A1FE9',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/657466BD9388512F46BC835FA1DE9B6C582F7A475EC5CDDABF1AF490A4FDCF49',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/657466BD9388512F46BC835FA1DE9B6C582F7A475EC5CDDABF1AF490A4FDCF49',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1838575AC6BB412E0E9C749E22E01F48EE9D0555EA59698B84ED4A9614DCD4EA',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/1838575AC6BB412E0E9C749E22E01F48EE9D0555EA59698B84ED4A9614DCD4EA',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C6DFA549E5DC7882F21ACC542EDC699D020794B57A4DA1CC2C7355D8E9136F9E',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/C6DFA549E5DC7882F21ACC542EDC699D020794B57A4DA1CC2C7355D8E9136F9E',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C27CF4A435C0D8CDD059CFA7F467F8215EF8693DEE9A106D0A34C5FBADADFB9C',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/C27CF4A435C0D8CDD059CFA7F467F8215EF8693DEE9A106D0A34C5FBADADFB9C',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D396A730DC0BB26B2C3E15D40098F689D95503D52488145D80F1ECBC78666FD3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D396A730DC0BB26B2C3E15D40098F689D95503D52488145D80F1ECBC78666FD3',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'DRUGS meme coin',
      denom_units: [{
          denom: 'ibc/2C3119EDB2787E91823D4DF24B47A0E4878F0F7A6C5B50014F77ADBAF515811D',
          exponent: 0,
          aliases: ['inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej']
        }, {
          denom: 'DRUGS',
          exponent: 6
        }],
      base: 'ibc/2C3119EDB2787E91823D4DF24B47A0E4878F0F7A6C5B50014F77ADBAF515811D',
      name: 'DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/2027EC8CD73EB3F0E7E46FFFD71F5A06F91067BE188ADC9D5F512CD8F2145226',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/2027EC8CD73EB3F0E7E46FFFD71F5A06F91067BE188ADC9D5F512CD8F2145226',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingecko_id: 'jackal-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primary_color_hex: '#dbdbcb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-137'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-71',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/1EDB735A58AA984F6FF11E332077D8A05D5E70E355427C2CF419BD1566FC1E2C',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/1EDB735A58AA984F6FF11E332077D8A05D5E70E355427C2CF419BD1566FC1E2C',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/449794253B2DCC4B539FED01A8CA80A3879A631A1E9E4BBAD3E207BDBE24C54D',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ibc/449794253B2DCC4B539FED01A8CA80A3879A631A1E9E4BBAD3E207BDBE24C54D',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingecko_id: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primary_color_hex: '#335350'
          }
        }],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukyve',
            chain_name: 'kyve'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/2C675DF5F8A49C2685775C6A692015A3B059FA6656B4DBB4DF4052F84F7DEDEA',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/2C675DF5F8A49C2685775C6A692015A3B059FA6656B4DBB4DF4052F84F7DEDEA',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
          theme: {
            primary_color_hex: '#6f043e'
          }
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        twitter: 'https://twitter.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-156'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/64E172EE7DCCA19E715FDBB23599E09672232C121B32D7E93F79767560A0B427',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/64E172EE7DCCA19E715FDBB23599E09672232C121B32D7E93F79767560A0B427',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-53',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-121'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/8DB695F4C0D5C0F82B147DDABED413AEBDA586CDDB9C7CBE705041B5EBCB5C4E',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/8DB695F4C0D5C0F82B147DDABED413AEBDA586CDDB9C7CBE705041B5EBCB5C4E',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/1DED99E32D9B9D6299038E500CCD8C6D03BBB0B39552A3BA1D46669CB8E69D19',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/1DED99E32D9B9D6299038E500CCD8C6D03BBB0B39552A3BA1D46669CB8E69D19',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/B57D1B7F856AE7BB501B618C0EE5DC2006947E6369ACF52354712BF11A471F2B',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/B57D1B7F856AE7BB501B618C0EE5DC2006947E6369ACF52354712BF11A471F2B',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E9654E4A7BFB39B8CF948EA666FD21BC858873802A87CF54E97331CD8E2A161D',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E9654E4A7BFB39B8CF948EA666FD21BC858873802A87CF54E97331CD8E2A161D',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'The native token of Nibiru network',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denom_units: [{
          denom: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
          exponent: 0,
          aliases: ['unibi']
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      base: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingecko_id: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unibi',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'uoprek',
      denom_units: [{
          denom: 'ibc/156C8BCC21BD4109444240C5138A5239C4432127B8E092B55369405452F86C63',
          exponent: 0,
          aliases: ['tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek']
        }],
      base: 'ibc/156C8BCC21BD4109444240C5138A5239C4432127B8E092B55369405452F86C63',
      name: 'uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'utestate',
      denom_units: [{
          denom: 'ibc/057AE0D6341E14801F21207D500B9F0230DC26011DA23DE28EE03BCE837E4CFD',
          exponent: 0,
          aliases: ['tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate']
        }],
      base: 'ibc/057AE0D6341E14801F21207D500B9F0230DC26011DA23DE28EE03BCE837E4CFD',
      name: 'utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'npp',
      denom_units: [{
          denom: 'ibc/ADEC8C91DF95EA9215BD0EE2743CEC78F3350D99907AFDA13A9CCE1899FFA1D9',
          exponent: 0,
          aliases: ['tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP']
        }],
      base: 'ibc/ADEC8C91DF95EA9215BD0EE2743CEC78F3350D99907AFDA13A9CCE1899FFA1D9',
      name: 'npp',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/8D58BF228C8B8930F5D8D45ED617FFC34CA2AA397288495444FD822201A315DF',
          exponent: 0,
          aliases: ['loki']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      base: 'ibc/8D58BF228C8B8930F5D8D45ED617FFC34CA2AA397288495444FD822201A315DF',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingecko_id: 'odin-protocol',
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'loki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'loki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/9C41C0CFF8BA0B8D4CA3FB9E21C75E327AB2FD9F98127EEA6457BF1C158E6A8F',
          exponent: 0,
          aliases: ['mGeo']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      base: 'ibc/9C41C0CFF8BA0B8D4CA3FB9E21C75E327AB2FD9F98127EEA6457BF1C158E6A8F',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mGeo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'mGeo',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/2EEF48676AB7BAE28BD631B9484E0C957C738B95AE3988571E68A958C0F1A40C',
          exponent: 0,
          aliases: ['mO9W']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      base: 'ibc/2EEF48676AB7BAE28BD631B9484E0C957C738B95AE3988571E68A958C0F1A40C',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mO9W'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'mO9W',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/E94D6C0D4076E91E75C331B3B9075EDB4A5714A9516A86B75DF4B4DC87944D7F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/E94D6C0D4076E91E75C331B3B9075EDB4A5714A9516A86B75DF4B4DC87944D7F',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primary_color_hex: '#c33635'
          }
        }],
      socials: {
        website: 'https://omniflix.network/',
        twitter: 'https://twitter.com/OmniFlixNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
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
            channel_id: 'channel-208',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
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
            channel_id: 'channel-208',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/3D4931D8D0FC8E1FF552C29F126C43448514DEDD156F4B6A5C7750D29A53FCCF',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'ibc/3D4931D8D0FC8E1FF552C29F126C43448514DEDD156F4B6A5C7750D29A53FCCF',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      coingecko_id: 'provenance-blockchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/073577C4EBEA41C59CEC70217300F09D4F4A6442B5EF22E882E1CD9CEDEAD799',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/073577C4EBEA41C59CEC70217300F09D4F4A6442B5EF22E882E1CD9CEDEAD799',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/AFE3377888BF66513E7D48A6D4D409626114481E3CC6F6E1C9B92C9AA25673FA',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/AFE3377888BF66513E7D48A6D4D409626114481E3CC6F6E1C9B92C9AA25673FA',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      coingecko_id: 'saga-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primary_color_hex: '#000000',
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primary_color_hex: '#FFFFFF',
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        twitter: 'https://twitter.com/Sagaxyz__'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/07B3CA39C1A40FE3ACF1CA5CCBC92D7C37957AE35D41E1954AF4951250AC2961',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/07B3CA39C1A40FE3ACF1CA5CCBC92D7C37957AE35D41E1954AF4951250AC2961',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/097C7F089CC601CDDB8AF64B2F5C81171619B28967F44D7E5B70F50D5CC8903E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/097C7F089CC601CDDB8AF64B2F5C81171619B28967F44D7E5B70F50D5CC8903E',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/A3F82E2FAA04727360424B2A7F40FCBA8880E4278F1A5D3DFA4218AF9B0CF7A1',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/A3F82E2FAA04727360424B2A7F40FCBA8880E4278F1A5D3DFA4218AF9B0CF7A1',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primary_color_hex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [{
          denom: 'ibc/69610BB9AA825ED55EC650937F3AD9FD94FEFE7488354C0824C65C9DD04D4511',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      base: 'ibc/69610BB9AA825ED55EC650937F3AD9FD94FEFE7488354C0824C65C9DD04D4511',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      coingecko_id: 'shido-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
          theme: {
            primary_color_hex: '#046ffc'
          }
        }],
      socials: {
        website: 'https://shido.io/',
        twitter: 'https://twitter.com/ShidoGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'shido',
            chain_name: 'shido'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/12A9901F2B585B3563C2AD4919D20ED478CCAB3D7F9ACBB76E829583B99B1DAA',
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
      base: 'ibc/12A9901F2B585B3563C2AD4919D20ED478CCAB3D7F9ACBB76E829583B99B1DAA',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
          theme: {
            primary_color_hex: '#f36353'
          }
        }],
      socials: {
        website: 'https://www.sommelier.finance/',
        twitter: 'https://twitter.com/sommfinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [{
          denom: 'ibc/F6D0827F10AB04D63596542BFC84B454A90FAE386324325CFD59265F0E08B5EF',
          exponent: 0,
          aliases: ['usource']
        }, {
          denom: 'source',
          exponent: 6
        }],
      base: 'ibc/F6D0827F10AB04D63596542BFC84B454A90FAE386324325CFD59265F0E08B5EF',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      coingecko_id: 'source',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
          theme: {
            primary_color_hex: '#39a5fc'
          }
        }],
      socials: {
        website: 'https://www.sourceprotocol.io/',
        twitter: 'https://twitter.com/sourceprotocol_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usource',
            chain_name: 'source'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/F42AC6E51C46D30F7F39ADCA1A38E29374745771F23AB3250444F09EBBB4A107',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/F42AC6E51C46D30F7F39ADCA1A38E29374745771F23AB3250444F09EBBB4A107',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/6896F977DF5B427359BA77B5AF1052E5512D460F3CE59C8F6A7CB51408351F3C',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/6896F977DF5B427359BA77B5AF1052E5512D460F3CE59C8F6A7CB51408351F3C',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DA8D591FFA8836FDF3AD0F9F8AF4EAA77D9D4F23DA3D10DFD1FC3B9A3644B26D',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DA8D591FFA8836FDF3AD0F9F8AF4EAA77D9D4F23DA3D10DFD1FC3B9A3644B26D',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/2F740C82769D1D7697CFB3D211F952E835AFD9C1852D23B49F3FA7F0475D794B',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/2F740C82769D1D7697CFB3D211F952E835AFD9C1852D23B49F3FA7F0475D794B',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-125'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/51DF28237DFCC73155B2F3E61300F5BF0F4989BD9F0C103A5939B03BB5A62649',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'ibc/51DF28237DFCC73155B2F3E61300F5BF0F4989BD9F0C103A5939B03BB5A62649',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      coingecko_id: 'chain4energy',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
          theme: {
            primary_color_hex: '#24344c'
          }
        }],
      socials: {
        website: 'https://c4e.io/',
        twitter: 'https://twitter.com/Chain4Energy'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uc4e',
            chain_name: 'chain4energy'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/4D5EB920B907F2270899EE1B196B44A8764E28847EEA42E70530685125EE6DA9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/4D5EB920B907F2270899EE1B196B44A8764E28847EEA42E70530685125EE6DA9',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-293',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/0F9EA9664729F336E5DC0FCB341E1C1993B6A272F5E4003CA74D9F8D54CEF43A',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0F9EA9664729F336E5DC0FCB341E1C1993B6A272F5E4003CA74D9F8D54CEF43A',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/B755889E03BCC776D971B24434A22F9907CC4745116A032CC0179730510C509E',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/B755889E03BCC776D971B24434A22F9907CC4745116A032CC0179730510C509E',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-109'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/73D370D177CC659EA123B423D1AC194F0733537E5A346ECEA1DCBC8FEBB45FD3',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/73D370D177CC659EA123B423D1AC194F0733537E5A346ECEA1DCBC8FEBB45FD3',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/DF9C2A453418DDCD76467432228E2D3A54B6427192C02047A36A66716DC4532E',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/DF9C2A453418DDCD76467432228E2D3A54B6427192C02047A36A66716DC4532E',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A87C7282021D27AFB3356130F807E2FA3C792966CE7DDD6861EDCD2E10FEED15',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A87C7282021D27AFB3356130F807E2FA3C792966CE7DDD6861EDCD2E10FEED15',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/7107E690DF19ABABC671E80D15319D4493647134E0A7AD89F2BC236BB780B89D',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/7107E690DF19ABABC671E80D15319D4493647134E0A7AD89F2BC236BB780B89D',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4C64C29DD6CC71639E9C3FB7F43D0068F86C447F38951527B95F0DF4CABD0E66',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4C64C29DD6CC71639E9C3FB7F43D0068F86C447F38951527B95F0DF4CABD0E66',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      socials: {
        website: 'https://functionx.io',
        twitter: 'https://x.com/functionx_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-128'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/0B1A2FD6D40BBD60EEAF9ED619767EA8047CC7A46DC2A103183D7E9EE1063599',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/0B1A2FD6D40BBD60EEAF9ED619767EA8047CC7A46DC2A103183D7E9EE1063599',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/EC8E01D2F4F6890AE180845C8CE27F9E64240CC824D8DCCD137B82B548DB74CD',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/EC8E01D2F4F6890AE180845C8CE27F9E64240CC824D8DCCD137B82B548DB74CD',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/8D065F116ED0F967E6A73C8EE96E11C1DABB1C0B1F531BDA01D79FAC439F434E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/8D065F116ED0F967E6A73C8EE96E11C1DABB1C0B1F531BDA01D79FAC439F434E',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/A958074A992C4CA9B836F4989F2B68A3F3FEDFEE75C3A1B0AE9744A0C79A1FE9',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/A958074A992C4CA9B836F4989F2B68A3F3FEDFEE75C3A1B0AE9744A0C79A1FE9',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/657466BD9388512F46BC835FA1DE9B6C582F7A475EC5CDDABF1AF490A4FDCF49',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/657466BD9388512F46BC835FA1DE9B6C582F7A475EC5CDDABF1AF490A4FDCF49',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1838575AC6BB412E0E9C749E22E01F48EE9D0555EA59698B84ED4A9614DCD4EA',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/1838575AC6BB412E0E9C749E22E01F48EE9D0555EA59698B84ED4A9614DCD4EA',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C6DFA549E5DC7882F21ACC542EDC699D020794B57A4DA1CC2C7355D8E9136F9E',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/C6DFA549E5DC7882F21ACC542EDC699D020794B57A4DA1CC2C7355D8E9136F9E',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C27CF4A435C0D8CDD059CFA7F467F8215EF8693DEE9A106D0A34C5FBADADFB9C',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/C27CF4A435C0D8CDD059CFA7F467F8215EF8693DEE9A106D0A34C5FBADADFB9C',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D396A730DC0BB26B2C3E15D40098F689D95503D52488145D80F1ECBC78666FD3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D396A730DC0BB26B2C3E15D40098F689D95503D52488145D80F1ECBC78666FD3',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'DRUGS meme coin',
      denom_units: [{
          denom: 'ibc/2C3119EDB2787E91823D4DF24B47A0E4878F0F7A6C5B50014F77ADBAF515811D',
          exponent: 0,
          aliases: ['inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej']
        }, {
          denom: 'DRUGS',
          exponent: 6
        }],
      base: 'ibc/2C3119EDB2787E91823D4DF24B47A0E4878F0F7A6C5B50014F77ADBAF515811D',
      name: 'DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/2027EC8CD73EB3F0E7E46FFFD71F5A06F91067BE188ADC9D5F512CD8F2145226',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/2027EC8CD73EB3F0E7E46FFFD71F5A06F91067BE188ADC9D5F512CD8F2145226',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingecko_id: 'jackal-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primary_color_hex: '#dbdbcb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-137'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-71',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/1EDB735A58AA984F6FF11E332077D8A05D5E70E355427C2CF419BD1566FC1E2C',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/1EDB735A58AA984F6FF11E332077D8A05D5E70E355427C2CF419BD1566FC1E2C',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/449794253B2DCC4B539FED01A8CA80A3879A631A1E9E4BBAD3E207BDBE24C54D',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ibc/449794253B2DCC4B539FED01A8CA80A3879A631A1E9E4BBAD3E207BDBE24C54D',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingecko_id: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primary_color_hex: '#335350'
          }
        }],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukyve',
            chain_name: 'kyve'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/2C675DF5F8A49C2685775C6A692015A3B059FA6656B4DBB4DF4052F84F7DEDEA',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/2C675DF5F8A49C2685775C6A692015A3B059FA6656B4DBB4DF4052F84F7DEDEA',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
          theme: {
            primary_color_hex: '#6f043e'
          }
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        twitter: 'https://twitter.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-156'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/64E172EE7DCCA19E715FDBB23599E09672232C121B32D7E93F79767560A0B427',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/64E172EE7DCCA19E715FDBB23599E09672232C121B32D7E93F79767560A0B427',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-53',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-121'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/8DB695F4C0D5C0F82B147DDABED413AEBDA586CDDB9C7CBE705041B5EBCB5C4E',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/8DB695F4C0D5C0F82B147DDABED413AEBDA586CDDB9C7CBE705041B5EBCB5C4E',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/1DED99E32D9B9D6299038E500CCD8C6D03BBB0B39552A3BA1D46669CB8E69D19',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/1DED99E32D9B9D6299038E500CCD8C6D03BBB0B39552A3BA1D46669CB8E69D19',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/B57D1B7F856AE7BB501B618C0EE5DC2006947E6369ACF52354712BF11A471F2B',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/B57D1B7F856AE7BB501B618C0EE5DC2006947E6369ACF52354712BF11A471F2B',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E9654E4A7BFB39B8CF948EA666FD21BC858873802A87CF54E97331CD8E2A161D',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E9654E4A7BFB39B8CF948EA666FD21BC858873802A87CF54E97331CD8E2A161D',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-78'
          }
        }]
    },
    {
      description: 'The native token of Nibiru network',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denom_units: [{
          denom: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
          exponent: 0,
          aliases: ['unibi']
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      base: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingecko_id: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unibi',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'uoprek',
      denom_units: [{
          denom: 'ibc/156C8BCC21BD4109444240C5138A5239C4432127B8E092B55369405452F86C63',
          exponent: 0,
          aliases: ['tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek']
        }],
      base: 'ibc/156C8BCC21BD4109444240C5138A5239C4432127B8E092B55369405452F86C63',
      name: 'uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'utestate',
      denom_units: [{
          denom: 'ibc/057AE0D6341E14801F21207D500B9F0230DC26011DA23DE28EE03BCE837E4CFD',
          exponent: 0,
          aliases: ['tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate']
        }],
      base: 'ibc/057AE0D6341E14801F21207D500B9F0230DC26011DA23DE28EE03BCE837E4CFD',
      name: 'utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'npp',
      denom_units: [{
          denom: 'ibc/ADEC8C91DF95EA9215BD0EE2743CEC78F3350D99907AFDA13A9CCE1899FFA1D9',
          exponent: 0,
          aliases: ['tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP']
        }],
      base: 'ibc/ADEC8C91DF95EA9215BD0EE2743CEC78F3350D99907AFDA13A9CCE1899FFA1D9',
      name: 'npp',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/8D58BF228C8B8930F5D8D45ED617FFC34CA2AA397288495444FD822201A315DF',
          exponent: 0,
          aliases: ['loki']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      base: 'ibc/8D58BF228C8B8930F5D8D45ED617FFC34CA2AA397288495444FD822201A315DF',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingecko_id: 'odin-protocol',
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'loki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'loki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/9C41C0CFF8BA0B8D4CA3FB9E21C75E327AB2FD9F98127EEA6457BF1C158E6A8F',
          exponent: 0,
          aliases: ['mGeo']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      base: 'ibc/9C41C0CFF8BA0B8D4CA3FB9E21C75E327AB2FD9F98127EEA6457BF1C158E6A8F',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mGeo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'mGeo',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/2EEF48676AB7BAE28BD631B9484E0C957C738B95AE3988571E68A958C0F1A40C',
          exponent: 0,
          aliases: ['mO9W']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      base: 'ibc/2EEF48676AB7BAE28BD631B9484E0C957C738B95AE3988571E68A958C0F1A40C',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mO9W'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'mO9W',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/E94D6C0D4076E91E75C331B3B9075EDB4A5714A9516A86B75DF4B4DC87944D7F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/E94D6C0D4076E91E75C331B3B9075EDB4A5714A9516A86B75DF4B4DC87944D7F',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primary_color_hex: '#c33635'
          }
        }],
      socials: {
        website: 'https://omniflix.network/',
        twitter: 'https://twitter.com/OmniFlixNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
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
            channel_id: 'channel-208',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
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
            channel_id: 'channel-208',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/3D4931D8D0FC8E1FF552C29F126C43448514DEDD156F4B6A5C7750D29A53FCCF',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'ibc/3D4931D8D0FC8E1FF552C29F126C43448514DEDD156F4B6A5C7750D29A53FCCF',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      coingecko_id: 'provenance-blockchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/073577C4EBEA41C59CEC70217300F09D4F4A6442B5EF22E882E1CD9CEDEAD799',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/073577C4EBEA41C59CEC70217300F09D4F4A6442B5EF22E882E1CD9CEDEAD799',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/AFE3377888BF66513E7D48A6D4D409626114481E3CC6F6E1C9B92C9AA25673FA',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/AFE3377888BF66513E7D48A6D4D409626114481E3CC6F6E1C9B92C9AA25673FA',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      coingecko_id: 'saga-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primary_color_hex: '#000000',
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primary_color_hex: '#FFFFFF',
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        twitter: 'https://twitter.com/Sagaxyz__'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/07B3CA39C1A40FE3ACF1CA5CCBC92D7C37957AE35D41E1954AF4951250AC2961',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/07B3CA39C1A40FE3ACF1CA5CCBC92D7C37957AE35D41E1954AF4951250AC2961',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/097C7F089CC601CDDB8AF64B2F5C81171619B28967F44D7E5B70F50D5CC8903E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/097C7F089CC601CDDB8AF64B2F5C81171619B28967F44D7E5B70F50D5CC8903E',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/A3F82E2FAA04727360424B2A7F40FCBA8880E4278F1A5D3DFA4218AF9B0CF7A1',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/A3F82E2FAA04727360424B2A7F40FCBA8880E4278F1A5D3DFA4218AF9B0CF7A1',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primary_color_hex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [{
          denom: 'ibc/69610BB9AA825ED55EC650937F3AD9FD94FEFE7488354C0824C65C9DD04D4511',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      base: 'ibc/69610BB9AA825ED55EC650937F3AD9FD94FEFE7488354C0824C65C9DD04D4511',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      coingecko_id: 'shido-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
          theme: {
            primary_color_hex: '#046ffc'
          }
        }],
      socials: {
        website: 'https://shido.io/',
        twitter: 'https://twitter.com/ShidoGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'shido',
            chain_name: 'shido'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/12A9901F2B585B3563C2AD4919D20ED478CCAB3D7F9ACBB76E829583B99B1DAA',
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
      base: 'ibc/12A9901F2B585B3563C2AD4919D20ED478CCAB3D7F9ACBB76E829583B99B1DAA',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
          theme: {
            primary_color_hex: '#f36353'
          }
        }],
      socials: {
        website: 'https://www.sommelier.finance/',
        twitter: 'https://twitter.com/sommfinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-72'
          }
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [{
          denom: 'ibc/F6D0827F10AB04D63596542BFC84B454A90FAE386324325CFD59265F0E08B5EF',
          exponent: 0,
          aliases: ['usource']
        }, {
          denom: 'source',
          exponent: 6
        }],
      base: 'ibc/F6D0827F10AB04D63596542BFC84B454A90FAE386324325CFD59265F0E08B5EF',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      coingecko_id: 'source',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
          theme: {
            primary_color_hex: '#39a5fc'
          }
        }],
      socials: {
        website: 'https://www.sourceprotocol.io/',
        twitter: 'https://twitter.com/sourceprotocol_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usource',
            chain_name: 'source'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/F42AC6E51C46D30F7F39ADCA1A38E29374745771F23AB3250444F09EBBB4A107',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/F42AC6E51C46D30F7F39ADCA1A38E29374745771F23AB3250444F09EBBB4A107',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/6896F977DF5B427359BA77B5AF1052E5512D460F3CE59C8F6A7CB51408351F3C',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/6896F977DF5B427359BA77B5AF1052E5512D460F3CE59C8F6A7CB51408351F3C',
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
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DA8D591FFA8836FDF3AD0F9F8AF4EAA77D9D4F23DA3D10DFD1FC3B9A3644B26D',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DA8D591FFA8836FDF3AD0F9F8AF4EAA77D9D4F23DA3D10DFD1FC3B9A3644B26D',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/FBC20BF50FEF9F1CAA011D9E3C34123373DA076793CEE7507943CCB184E82F94',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/FBC20BF50FEF9F1CAA011D9E3C34123373DA076793CEE7507943CCB184E82F94',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/8D136C877488081ADD5E831E646C17E1394C7495E5D3FDEA150ADEA1CC057607',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/8D136C877488081ADD5E831E646C17E1394C7495E5D3FDEA150ADEA1CC057607',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/1D8AB2BF6AEC8890A532FD80773AD02F6752641384ACDF2DDE7B1D29D42BF846',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/1D8AB2BF6AEC8890A532FD80773AD02F6752641384ACDF2DDE7B1D29D42BF846',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/AD9671D5316B40DC1FBDB5F0E0818FF8F8722781D5BF681727B0DE33FF93D409',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/AD9671D5316B40DC1FBDB5F0E0818FF8F8722781D5BF681727B0DE33FF93D409',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/B7BCD04BEC37874DE506B3168CDB0AEB4CBEC67C952FAB6A088CE7E541DCC27A',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/B7BCD04BEC37874DE506B3168CDB0AEB4CBEC67C952FAB6A088CE7E541DCC27A',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/DBBF89116C1464B4BD20521E38D33DC2A0FF7B21220C653C8DC61B97299EBE32',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/DBBF89116C1464B4BD20521E38D33DC2A0FF7B21220C653C8DC61B97299EBE32',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/241AAB9964EFC970E8029119B395491AA1772E42F077BFE7EE2E5BABF1D223FF',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/241AAB9964EFC970E8029119B395491AA1772E42F077BFE7EE2E5BABF1D223FF',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/1D2E0FCCBEAE8A6AAAB6E41467E7537680F5ABF0CEDA931F9F947C8E3A9738F9',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/1D2E0FCCBEAE8A6AAAB6E41467E7537680F5ABF0CEDA931F9F947C8E3A9738F9',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/4DD7AB5C32FEB905638F7B29B6A5149C914E4A4516FD9972CC9E4587F25DEB15',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/4DD7AB5C32FEB905638F7B29B6A5149C914E4A4516FD9972CC9E4587F25DEB15',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/FBC20BF50FEF9F1CAA011D9E3C34123373DA076793CEE7507943CCB184E82F94',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/FBC20BF50FEF9F1CAA011D9E3C34123373DA076793CEE7507943CCB184E82F94',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/8D136C877488081ADD5E831E646C17E1394C7495E5D3FDEA150ADEA1CC057607',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/8D136C877488081ADD5E831E646C17E1394C7495E5D3FDEA150ADEA1CC057607',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/1D8AB2BF6AEC8890A532FD80773AD02F6752641384ACDF2DDE7B1D29D42BF846',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/1D8AB2BF6AEC8890A532FD80773AD02F6752641384ACDF2DDE7B1D29D42BF846',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/AD9671D5316B40DC1FBDB5F0E0818FF8F8722781D5BF681727B0DE33FF93D409',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/AD9671D5316B40DC1FBDB5F0E0818FF8F8722781D5BF681727B0DE33FF93D409',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/B7BCD04BEC37874DE506B3168CDB0AEB4CBEC67C952FAB6A088CE7E541DCC27A',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/B7BCD04BEC37874DE506B3168CDB0AEB4CBEC67C952FAB6A088CE7E541DCC27A',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/DBBF89116C1464B4BD20521E38D33DC2A0FF7B21220C653C8DC61B97299EBE32',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/DBBF89116C1464B4BD20521E38D33DC2A0FF7B21220C653C8DC61B97299EBE32',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/241AAB9964EFC970E8029119B395491AA1772E42F077BFE7EE2E5BABF1D223FF',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/241AAB9964EFC970E8029119B395491AA1772E42F077BFE7EE2E5BABF1D223FF',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/1D2E0FCCBEAE8A6AAAB6E41467E7537680F5ABF0CEDA931F9F947C8E3A9738F9',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/1D2E0FCCBEAE8A6AAAB6E41467E7537680F5ABF0CEDA931F9F947C8E3A9738F9',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/4DD7AB5C32FEB905638F7B29B6A5149C914E4A4516FD9972CC9E4587F25DEB15',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/4DD7AB5C32FEB905638F7B29B6A5149C914E4A4516FD9972CC9E4587F25DEB15',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
            channel_id: 'channel-61',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-69'
          }
        }]
    }
  ]
};
export default assets;
    