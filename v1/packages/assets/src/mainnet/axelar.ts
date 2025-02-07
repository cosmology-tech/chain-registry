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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
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
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/8C5DC6699095C035C444AFCF756DF7374A653189559F3FBB598DF34752A6DEA4',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/8C5DC6699095C035C444AFCF756DF7374A653189559F3FBB598DF34752A6DEA4',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
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
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/8C5DC6699095C035C444AFCF756DF7374A653189559F3FBB598DF34752A6DEA4',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/8C5DC6699095C035C444AFCF756DF7374A653189559F3FBB598DF34752A6DEA4',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/343F755B3A654F9138B1F5C6D1DAC5DECB5EDD9FB1D0BE428647C971039AAAAE',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/343F755B3A654F9138B1F5C6D1DAC5DECB5EDD9FB1D0BE428647C971039AAAAE',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      coingecko_id: 'pulsara',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg',
          theme: {
            primary_color_hex: '#0517b1'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/888A3CCCE4A3793E13202A03F8FA0D8958AC094B3EF222104743983EF8919733',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/888A3CCCE4A3793E13202A03F8FA0D8958AC094B3EF222104743983EF8919733',
      name: 'liCORE',
      display: 'licore',
      symbol: 'LICORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
      },
      coingecko_id: 'licore',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg',
          theme: {
            primary_color_hex: '#ea00c5'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
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
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/62EED9812C9184F2EA24F8008D9D2C05AD23CEA2632958B6D5906F478FA1DBA6',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/62EED9812C9184F2EA24F8008D9D2C05AD23CEA2632958B6D5906F478FA1DBA6',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingecko_id: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/1A50974318E1165F361358B7F0BC0C0026276C7C644E1DC97754D52362261C5C',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/1A50974318E1165F361358B7F0BC0C0026276C7C644E1DC97754D52362261C5C',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-163'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
          denom: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
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
      type_asset: 'sdk.coin',
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
      socials: {
        website: 'https://islamiccoin.net',
        twitter: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/0F4A0619F89C185E8DA475C8ABE0AFB2CF2FCD06E43654858664EDB8D5D68CCE',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/0F4A0619F89C185E8DA475C8ABE0AFB2CF2FCD06E43654858664EDB8D5D68CCE',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      coingecko_id: 'deenar-gold',
      socials: {
        website: 'https://deenar.com',
        twitter: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/A510E27678EF927ABF6781D9A96D3AE1FCA083ACE89EBFF3CC55D343C5192444',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/A510E27678EF927ABF6781D9A96D3AE1FCA083ACE89EBFF3CC55D343C5192444',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-153',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-168'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      denom_units: [
        {
          denom: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
          exponent: 0,
          aliases: ['unibi']
        },
        {
          denom: 'nibi',
          exponent: 6
        },
        {
          denom: 'attonibi',
          exponent: 18
        }
      ],
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
      type_asset: 'sdk.coin',
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
      description: 'AXV',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denom_units: [{
          denom: 'ibc/CFBB272C7BA45372A94453E524A549D505AC5B1F9B214E82FBBF1461C1F22EA4',
          exponent: 0,
          aliases: ['tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'ibc/CFBB272C7BA45372A94453E524A549D505AC5B1F9B214E82FBBF1461C1F22EA4',
      name: 'AXV',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/37731EEEAE2D4A18C296FA1B3808719ACCBFFF7BF7F6A1D6EEA1044472B689E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/37731EEEAE2D4A18C296FA1B3808719ACCBFFF7BF7F6A1D6EEA1044472B689E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingecko_id: 'nolus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
          theme: {
            primary_color_hex: '#fc542c'
          }
        }],
      socials: {
        website: 'https://nolus.io/',
        twitter: 'https://twitter.com/NolusProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10177',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }]
    },
    {
      description: 'ODIN is the Staking and governance token for ODIN Protocol',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      socials: {
        website: 'https://odinprotocol.io/',
        twitter: 'https://twitter.com/odinprotocol'
      },
      type_asset: 'sdk.coin',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'DOKI the last Dragon',
      denom_units: [{
          denom: 'ibc/2CD69A93A9FB69F6E3E1029021822E19D11C3942108A066234B8715D98B1596B',
          exponent: 0,
          aliases: ['udoki']
        }, {
          denom: 'doki',
          exponent: 6
        }],
      base: 'ibc/2CD69A93A9FB69F6E3E1029021822E19D11C3942108A066234B8715D98B1596B',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      coingecko_id: 'doki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png',
          theme: {
            primary_color_hex: '#2e2d2a'
          }
        }],
      socials: {
        website: 'https://dokicoin.io/',
        twitter: 'https://twitter.com/doki_coin'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'udoki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'Myrkur the leader of OLD Order',
      denom_units: [{
          denom: 'ibc/083B5AA8C6C2A17AD00A9275DAA79EA92F511D5F7CE4B30321C2605CB5F754A9',
          exponent: 0,
          aliases: ['umyrk']
        }, {
          denom: 'myrk',
          exponent: 6
        }],
      base: 'ibc/083B5AA8C6C2A17AD00A9275DAA79EA92F511D5F7CE4B30321C2605CB5F754A9',
      name: 'MYRK',
      display: 'myrk',
      symbol: 'MYRK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png',
          theme: {
            primary_color_hex: '#0a0707'
          }
        }],
      socials: {
        twitter: 'https://twitter.com/myrkweilds'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'umyrk',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.odin9worlds.io/',
        twitter: 'https://twitter.com/odin9worlds'
      },
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }],
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/A571AD8A8111FDB7C6A75EC095BD4F78C10A9F614E4CEDC1A33BF80471B02640',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/A571AD8A8111FDB7C6A75EC095BD4F78C10A9F614E4CEDC1A33BF80471B02640',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7C0E91B6476B427F7B2FB1980A7BA00B2B6CC7DB2433C02E9603F22E0987D669',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/7C0E91B6476B427F7B2FB1980A7BA00B2B6CC7DB2433C02E9603F22E0987D669',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/372725E18ED25F02B8DAB099FBE1699D6E8F7601B8FC10310A5AA24D5E501E9E',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/372725E18ED25F02B8DAB099FBE1699D6E8F7601B8FC10310A5AA24D5E501E9E',
      name: 'pAtom (31Mar2025)',
      display: 'pATOM31Mar2025',
      symbol: 'pATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FC50E6E0AFD0DFDFC13C0CBFDD80337F28379F3BA48349F73600AE77184BAAD9',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/FC50E6E0AFD0DFDFC13C0CBFDD80337F28379F3BA48349F73600AE77184BAAD9',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BFBC135140C1A880BCECD5EB20BED3DC587F57B1D6B24E917CE78221BE9157B1',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/BFBC135140C1A880BCECD5EB20BED3DC587F57B1D6B24E917CE78221BE9157B1',
      name: 'pAtom (31Dec2026)',
      display: 'pATOM31Dec2026',
      symbol: 'pATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/F74F9EDE4E570314EC97AB95F833159A6B578414C5D11704FCFB3BC19973E7F4',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/F74F9EDE4E570314EC97AB95F833159A6B578414C5D11704FCFB3BC19973E7F4',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/EA4B104E4F3E5B4CBE5F28A08987A2B25FC3D59191DB20207DDA62C3E08A47CB',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/EA4B104E4F3E5B4CBE5F28A08987A2B25FC3D59191DB20207DDA62C3E08A47CB',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/4320BE4A81CE47B8C034C45AAC6415F675A2CAC518D68B4306E31B2128AE9CE3',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/4320BE4A81CE47B8C034C45AAC6415F675A2CAC518D68B4306E31B2128AE9CE3',
      name: 'pOsmo (31Mar2025)',
      display: 'pOSMO31Mar2025',
      symbol: 'pOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/B90C77F7B351FCB264171868476D74ECA6BF5547DA20F2211CAD3140F954AE3D',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/B90C77F7B351FCB264171868476D74ECA6BF5547DA20F2211CAD3140F954AE3D',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/FB00A1CD2C2D9DBCDB916C7E8482D1E82089000D1EB4E48CDFA116BCF37966E0',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/FB00A1CD2C2D9DBCDB916C7E8482D1E82089000D1EB4E48CDFA116BCF37966E0',
      name: 'pOsmo (31Dec2026)',
      display: 'pOSMO31Dec2026',
      symbol: 'pOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2F638FC558149F7B1696437117043233411C0DC568691CF2DDD0DE723F9C857E',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2F638FC558149F7B1696437117043233411C0DC568691CF2DDD0DE723F9C857E',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/056C73BB436274671274C357B00962A3CFB70949D5EEF1F8F93DDA747B402859',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/056C73BB436274671274C357B00962A3CFB70949D5EEF1F8F93DDA747B402859',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/5493011CE666DCBAF314046CC053067E738DAA6E670753638CD80481C53E6E81',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/5493011CE666DCBAF314046CC053067E738DAA6E670753638CD80481C53E6E81',
      name: 'pInj (31Mar2025)',
      display: 'pINJ31Mar2025',
      symbol: 'pINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2160C79C4FD2A2F482114ECBD4C55A4DDB5276E8B3D39D4A5A346A005808C664',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/2160C79C4FD2A2F482114ECBD4C55A4DDB5276E8B3D39D4A5A346A005808C664',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A7000D6F76A124C61791A24F6EB281AECCB7E930284C7DF449115EAF8E216590',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A7000D6F76A124C61791A24F6EB281AECCB7E930284C7DF449115EAF8E216590',
      name: 'pInj (31Dec2026)',
      display: 'pINJ31Dec2026',
      symbol: 'pINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/4E56FD42960A1F52BE474248C23208E431358BC202E6EE9DAB37189CC7C317F0',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/4E56FD42960A1F52BE474248C23208E431358BC202E6EE9DAB37189CC7C317F0',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/93C96CF275B95E607EA6CB85B97794BCCE32C3A67D8B5FF74CA328E03751F661',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/93C96CF275B95E607EA6CB85B97794BCCE32C3A67D8B5FF74CA328E03751F661',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/C0E432FA8F73DBD5691BD275147D115BF69CB8C57BF3FD566C52591D067362D6',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/C0E432FA8F73DBD5691BD275147D115BF69CB8C57BF3FD566C52591D067362D6',
      name: 'pLuna (31Mar2025)',
      display: 'pLUNA31Mar2025',
      symbol: 'pLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/90AA2C9AA204A6246E39C4B44EA0115C549367CDED72318DBF7162CF33C4B164',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/90AA2C9AA204A6246E39C4B44EA0115C549367CDED72318DBF7162CF33C4B164',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/0E2DF093CEABB97A35D8CB77647D830E8C19D3B10FEA5D92CA8B31C8940B8A1B',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/0E2DF093CEABB97A35D8CB77647D830E8C19D3B10FEA5D92CA8B31C8940B8A1B',
      name: 'pLuna (31Dec2026)',
      display: 'pLUNA31Dec2026',
      symbol: 'pLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2730EBFF434EAA601D98A348B96230256F3B154C765E2AFB39F496F5B97A4584',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2730EBFF434EAA601D98A348B96230256F3B154C765E2AFB39F496F5B97A4584',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B55480B25D7686145ABC4B21354597BAF3CBDA52368EC0440E57CA76653B4E53',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B55480B25D7686145ABC4B21354597BAF3CBDA52368EC0440E57CA76653B4E53',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/196D420C083E4C0B1998A23D477FCC2E7E3E5291B4B94EDA60737D0D79005D5E',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/196D420C083E4C0B1998A23D477FCC2E7E3E5291B4B94EDA60737D0D79005D5E',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A26DC0E969F8C774737BF95EE45B495B376EF4D437C46A68BC002FA69AD5CD4C',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A26DC0E969F8C774737BF95EE45B495B376EF4D437C46A68BC002FA69AD5CD4C',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/403BA4C1FC4FEED74DC705A68A330A544A9925C943ADA728CE63D2FBE998FB06',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/403BA4C1FC4FEED74DC705A68A330A544A9925C943ADA728CE63D2FBE998FB06',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/03CDD29C115C600D869BE1B763E6716A0E3DCB43C56861F4166EEFA09998B182',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/03CDD29C115C600D869BE1B763E6716A0E3DCB43C56861F4166EEFA09998B182',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8E99840A0545B4BF7C953B583F2A4FAF12587B880F174C054AFEFE534EEE99F2',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8E99840A0545B4BF7C953B583F2A4FAF12587B880F174C054AFEFE534EEE99F2',
      name: 'pstTia (31Mar2025)',
      display: 'pstTIA31Mar2025',
      symbol: 'pstTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E6322846AD85FCFB1E1AD209E311F862381DA4B7F730433C1DDA44DD52DCB0B0',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/E6322846AD85FCFB1E1AD209E311F862381DA4B7F730433C1DDA44DD52DCB0B0',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9D0F5FDB9C3B2B867CF8BD25D68DCDB4C48A9A7EB785DEB39336B5644F4F09B5',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9D0F5FDB9C3B2B867CF8BD25D68DCDB4C48A9A7EB785DEB39336B5644F4F09B5',
      name: 'pstTia (31Dec2026)',
      display: 'pstTIA31Dec2026',
      symbol: 'pstTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/4AEC5986E3A0EE69EF5F7764918E868420FB6B0214E4CFAF05BA60CD484ADF56',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/4AEC5986E3A0EE69EF5F7764918E868420FB6B0214E4CFAF05BA60CD484ADF56',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D829A82C205965A05DF619ABF10F34416573C60300A5ED86D6901ED4EF1E3C9B',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D829A82C205965A05DF619ABF10F34416573C60300A5ED86D6901ED4EF1E3C9B',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/73CF9FBC1B6B59F63E2B9CCCBD3C138EA4862326C198C38D17051E717E893B4C',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/73CF9FBC1B6B59F63E2B9CCCBD3C138EA4862326C198C38D17051E717E893B4C',
      name: 'pstDydx (31Mar2025)',
      display: 'pstDYDX31Mar2025',
      symbol: 'pstDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A99CC2D97766C011AF6CD0BF84AF003CD99854212A00765D2FDE0F53DD0B296F',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/A99CC2D97766C011AF6CD0BF84AF003CD99854212A00765D2FDE0F53DD0B296F',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3B28BC38F5E950BCA560D730D9C3C2DA39CCA7814AD60FD11F04A3057B69FD80',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/3B28BC38F5E950BCA560D730D9C3C2DA39CCA7814AD60FD11F04A3057B69FD80',
      name: 'pstDydx (31Dec2026)',
      display: 'pstDYDX31Dec2026',
      symbol: 'pstDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C67E4607E1F96490F8BCC40579B15899BD9AFB652BF2E9C46F492522DDF691C0',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C67E4607E1F96490F8BCC40579B15899BD9AFB652BF2E9C46F492522DDF691C0',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/6DEC1DCBB8051E723B131A4C7986A0753B5FB835773485AC1CC692CA1DEEF40B',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/6DEC1DCBB8051E723B131A4C7986A0753B5FB835773485AC1CC692CA1DEEF40B',
      name: 'pdAtom (31Mar2025)',
      display: 'pdATOM31Mar2025',
      symbol: 'pdATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1C9E192A974B5E5CEF78CC63145BCEA1453646B0FCAEDCB4EC2822299046943C',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1C9E192A974B5E5CEF78CC63145BCEA1453646B0FCAEDCB4EC2822299046943C',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BE5FA1ECF44D3C74163A0D03A4A529FC73A35CFBC48FE705D7C89528935E41E4',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BE5FA1ECF44D3C74163A0D03A4A529FC73A35CFBC48FE705D7C89528935E41E4',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/B202078F3A0D32EABC49150829377F2FE14AE6CDEFA6DC0CBE8C6C707BD6E9CB',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/B202078F3A0D32EABC49150829377F2FE14AE6CDEFA6DC0CBE8C6C707BD6E9CB',
      name: 'pdAtom (31Dec2026)',
      display: 'pdATOM31Dec2026',
      symbol: 'pdATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4E0364015465CF13CF984B94154E09073635B70B53DF41184C907B55423E0EF8',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4E0364015465CF13CF984B94154E09073635B70B53DF41184C907B55423E0EF8',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/40632A454503DF6230DB901272995A714B7DC801AC18FF105AC123ED964B3A53',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/40632A454503DF6230DB901272995A714B7DC801AC18FF105AC123ED964B3A53',
      name: 'pTia (31Mar2025)',
      display: 'pTIA31Mar2025',
      symbol: 'pTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3202379D36D7B250BC09901E7AFA42134D5B13E87B90FB483B668AEB45420C31',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3202379D36D7B250BC09901E7AFA42134D5B13E87B90FB483B668AEB45420C31',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/DDC617D5324ACC04132EFFBA14B064AF7C3E02FABB31373E6D374CCB9BEB5EAD',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/DDC617D5324ACC04132EFFBA14B064AF7C3E02FABB31373E6D374CCB9BEB5EAD',
      name: 'pTia (31Dec2026)',
      display: 'pTIA31Dec2026',
      symbol: 'pTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/668B350DD18A2A4E92FDDD93E38759FDF2D16453A9C755298809370878E13187',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/668B350DD18A2A4E92FDDD93E38759FDF2D16453A9C755298809370878E13187',
      name: 'pUsdy (31Mar2025)',
      display: 'pUSDY31Mar2025',
      symbol: 'pUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/CC566491B2CC7772DADEE7FDD48DCFB63313DED67979C6DFE074F7A4CBE72862',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/CC566491B2CC7772DADEE7FDD48DCFB63313DED67979C6DFE074F7A4CBE72862',
      name: 'pUsdy (30Jun2025)',
      display: 'pUSDY30Jun2025',
      symbol: 'pUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/00F24AEA2FD9FC60F0C82AC3D389DDD76DA462A011B3595380E156D9B8803282',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/00F24AEA2FD9FC60F0C82AC3D389DDD76DA462A011B3595380E156D9B8803282',
      name: 'pUsdy (30Sep2025)',
      display: 'pUSDY30Sep2025',
      symbol: 'pUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/65027CBFEF26D272018FF76214A962275DC7ACF1C7B5804F0FFA2F26D4FE7B76',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/65027CBFEF26D272018FF76214A962275DC7ACF1C7B5804F0FFA2F26D4FE7B76',
      name: 'pUsdy (31Dec2025)',
      display: 'pUSDY31Dec2025',
      symbol: 'pUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2EE1910232CC1873B69E049B4BE3A1CA227B79F45F0BDFC858B85E83EDB087A4',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2EE1910232CC1873B69E049B4BE3A1CA227B79F45F0BDFC858B85E83EDB087A4',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/EC0C23740C82D3DA0B814260E72AB4FE0EB9992FE2FB3859D968EC8FB71A1DA3',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/EC0C23740C82D3DA0B814260E72AB4FE0EB9992FE2FB3859D968EC8FB71A1DA3',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FAD98922A5A54D26578781E2549DD1A19CDD46972756F7D958EBA10AC87B80B6',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FAD98922A5A54D26578781E2549DD1A19CDD46972756F7D958EBA10AC87B80B6',
      name: 'yAtom (31Mar2025)',
      display: 'yATOM31Mar2025',
      symbol: 'yATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/ABCEBB4F5E537873C65E9F5F40391C8BFB717C1FC67580C2C57C9EE6B42E46CE',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/ABCEBB4F5E537873C65E9F5F40391C8BFB717C1FC67580C2C57C9EE6B42E46CE',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/56B27EDE2180074D85B12649B623EAE63DEC768FFC33DFB59882924E99126CC7',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/56B27EDE2180074D85B12649B623EAE63DEC768FFC33DFB59882924E99126CC7',
      name: 'yAtom (31Dec2026)',
      display: 'yATOM31Dec2026',
      symbol: 'yATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/909CA2CB0269447C75E1AF708B1490581091F5A886C0019B62269E8C069444DF',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/909CA2CB0269447C75E1AF708B1490581091F5A886C0019B62269E8C069444DF',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/238E778A6264C8782FC5C264F108A3D5BF147376070D53CC8953AAF00844EDC9',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/238E778A6264C8782FC5C264F108A3D5BF147376070D53CC8953AAF00844EDC9',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/059C8BA5F71DCD2650E87683E0FB2A7B304B75F35AE2F612F974B51F0E5869EA',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/059C8BA5F71DCD2650E87683E0FB2A7B304B75F35AE2F612F974B51F0E5869EA',
      name: 'yOsmo (31Mar2025)',
      display: 'yOSMO31Mar2025',
      symbol: 'yOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/283431ED5D9D454D61CC70AD0AD1BD0D881700D65EEEE215E94212EDDB1A5C3C',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/283431ED5D9D454D61CC70AD0AD1BD0D881700D65EEEE215E94212EDDB1A5C3C',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/B175B659CBE79B01323EF2B238F3DDF45B943FE99EC797CD237CB5DFB3177ACD',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/B175B659CBE79B01323EF2B238F3DDF45B943FE99EC797CD237CB5DFB3177ACD',
      name: 'yOsmo (31Dec2026)',
      display: 'yOSMO31Dec2026',
      symbol: 'yOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/15A59371D19C0C0B8DDDD8BCCD67A7255C6FD9637A0673E640B61C05779D990B',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/15A59371D19C0C0B8DDDD8BCCD67A7255C6FD9637A0673E640B61C05779D990B',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C8213417520D52BE803CB9EA7C81CAC615940DF32A419757E2ADD389ECE2BE5F',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/C8213417520D52BE803CB9EA7C81CAC615940DF32A419757E2ADD389ECE2BE5F',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/661CFB7FF21E4ADC13F84DEC672AEDD27FB2940A1B744512B20D2E8E695ABCBA',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/661CFB7FF21E4ADC13F84DEC672AEDD27FB2940A1B744512B20D2E8E695ABCBA',
      name: 'yInj (31Mar2025)',
      display: 'yINJ31Mar2025',
      symbol: 'yINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/85DDF91FD985840181AF5A4BA81C971691F19A0A68B077192CF33A0EFE3E1B84',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/85DDF91FD985840181AF5A4BA81C971691F19A0A68B077192CF33A0EFE3E1B84',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/F216C4020277BC71DD43E7B2CBA4694935E4982BABFF442FE7AF330D42BC3C9C',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/F216C4020277BC71DD43E7B2CBA4694935E4982BABFF442FE7AF330D42BC3C9C',
      name: 'yInj (31Dec2026)',
      display: 'yINJ31Dec2026',
      symbol: 'yINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8D0A05FBE8E74A45F2063C2312DD7C23A43A49B9BDA9776C08982048458151C0',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/8D0A05FBE8E74A45F2063C2312DD7C23A43A49B9BDA9776C08982048458151C0',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F48A9109A6564DEBBC4D2CF5984F0232CC69AEE296994D8ACE25DE8E939BE3F9',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F48A9109A6564DEBBC4D2CF5984F0232CC69AEE296994D8ACE25DE8E939BE3F9',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F1A3FCA3407B7A9886F808DF4C76D50589C0A7E494740752AC9D8BB8CB947BBD',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F1A3FCA3407B7A9886F808DF4C76D50589C0A7E494740752AC9D8BB8CB947BBD',
      name: 'yLuna (31Mar2025)',
      display: 'yLUNA31Mar2025',
      symbol: 'yLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C40FD75E9CB5CB4B05050590780F7068C15486FFCEB69056CE33A86B391E1139',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/C40FD75E9CB5CB4B05050590780F7068C15486FFCEB69056CE33A86B391E1139',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9C70F832998E81BFC537C97CC872CAF8A0C1AE47BC610951CA04D3B24D229011',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9C70F832998E81BFC537C97CC872CAF8A0C1AE47BC610951CA04D3B24D229011',
      name: 'yLuna (31Dec2026)',
      display: 'yLUNA31Dec2026',
      symbol: 'yLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C2E978100BD590B02ACD21D6043C047370EB7007DB6A8C0353C8DA7373C333C1',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C2E978100BD590B02ACD21D6043C047370EB7007DB6A8C0353C8DA7373C333C1',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/3A84FE66A73007705DA07204E0044B928C3F542883895B77B919FE85578F5C46',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/3A84FE66A73007705DA07204E0044B928C3F542883895B77B919FE85578F5C46',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/90AE5B628749D0008090C2BC5F42A529B962EC116F17AA65FBBEF61C159F4862',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/90AE5B628749D0008090C2BC5F42A529B962EC116F17AA65FBBEF61C159F4862',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/20F996473422923ACE608300F6DBDB198702550F1FFAD379FFE08CCAC0703939',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/20F996473422923ACE608300F6DBDB198702550F1FFAD379FFE08CCAC0703939',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/426B039C812A1DFD683846BB22D0DA1B0A4530EB2554FD73AFA822E5B2297AFA',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/426B039C812A1DFD683846BB22D0DA1B0A4530EB2554FD73AFA822E5B2297AFA',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2DC795F93976B4BEC4F015766B5A95242DA071AA115548341FB981842B6739C7',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2DC795F93976B4BEC4F015766B5A95242DA071AA115548341FB981842B6739C7',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/05664AAF92D35085721DBD1F534CEAE497C60949198FF8C9E12B82917D8C3697',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/05664AAF92D35085721DBD1F534CEAE497C60949198FF8C9E12B82917D8C3697',
      name: 'ystTia (31Mar2025)',
      display: 'ystTIA31Mar2025',
      symbol: 'ystTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5098141C4FFDB76C5338C285E782FF376BB95BE5B5426138158E691EC59EF55D',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5098141C4FFDB76C5338C285E782FF376BB95BE5B5426138158E691EC59EF55D',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C090B36A0F7B1C4977AA234846D064D25C5375095B86AEEAE15EC8023D8F03B5',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C090B36A0F7B1C4977AA234846D064D25C5375095B86AEEAE15EC8023D8F03B5',
      name: 'ystTia (31Dec2026)',
      display: 'ystTIA31Dec2026',
      symbol: 'ystTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/14C6A21B8C7CFC0CF3C4D120CFDE76E9DCE5C6451B6096131F0E3CB34260D7AE',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/14C6A21B8C7CFC0CF3C4D120CFDE76E9DCE5C6451B6096131F0E3CB34260D7AE',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/AE2B7CBF1FCBD0734878F2624D6FCF2CEAC472656AC8CB151C73271B6DEA17B2',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/AE2B7CBF1FCBD0734878F2624D6FCF2CEAC472656AC8CB151C73271B6DEA17B2',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/6477E49E59D2CC4381E6379DC95EB9CA99BFA9A9464BF2C2077A655E78D55434',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/6477E49E59D2CC4381E6379DC95EB9CA99BFA9A9464BF2C2077A655E78D55434',
      name: 'ystDydx (31Mar2025)',
      display: 'ystDYDX31Mar2025',
      symbol: 'ystDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3CE8B68553A7365B72FD2BF971ED6BE456CC166D06E0CED61FFCA48C67BE7DE9',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/3CE8B68553A7365B72FD2BF971ED6BE456CC166D06E0CED61FFCA48C67BE7DE9',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E3A2D2DE06CE0499F2D0ED250E7B6AF9089E3BD168B40113200D82AE9882689E',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/E3A2D2DE06CE0499F2D0ED250E7B6AF9089E3BD168B40113200D82AE9882689E',
      name: 'ystDydx (31Dec2026)',
      display: 'ystDYDX31Dec2026',
      symbol: 'ystDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/CAB4387ACCE198B7EE77CA7624A32DF8412BE75AF053DB215A6AB7BF64BADBFD',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/CAB4387ACCE198B7EE77CA7624A32DF8412BE75AF053DB215A6AB7BF64BADBFD',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F60625AEC84B5E373C500D71285FEAE59052C44AC78F37E27F764BD250F80AEC',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F60625AEC84B5E373C500D71285FEAE59052C44AC78F37E27F764BD250F80AEC',
      name: 'ydAtom (31Mar2025)',
      display: 'ydATOM31Mar2025',
      symbol: 'ydATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/01C41E95F8B5DF0B3E3AFACF8D229C3957A437FDC38CBE7CB3ACED7029E3D7CC',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/01C41E95F8B5DF0B3E3AFACF8D229C3957A437FDC38CBE7CB3ACED7029E3D7CC',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6CBE18DBC458EAE2A1911EB9FF54D0E3C3BDF9113F1BCBBB95108F8951153CFB',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/6CBE18DBC458EAE2A1911EB9FF54D0E3C3BDF9113F1BCBBB95108F8951153CFB',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E8A756F88D012FF2CD5DB2F09627EBA7CBCDE0A0D9A229AA89E20450887312FC',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/E8A756F88D012FF2CD5DB2F09627EBA7CBCDE0A0D9A229AA89E20450887312FC',
      name: 'ydAtom (31Dec2026)',
      display: 'ydATOM31Dec2026',
      symbol: 'ydATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/91F878597B87DE1C1ED8BE283E260DFAD323BB4AA3EDD81F08A3BEB3F3E628A0',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/91F878597B87DE1C1ED8BE283E260DFAD323BB4AA3EDD81F08A3BEB3F3E628A0',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/03AD0A4BD0BC696C5B26D97F2BBDD94AB0FD76599538E85B2F0FCA70C3287BB5',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/03AD0A4BD0BC696C5B26D97F2BBDD94AB0FD76599538E85B2F0FCA70C3287BB5',
      name: 'yTia (31Mar2025)',
      display: 'yTIA31Mar2025',
      symbol: 'yTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/1E2C87BD659AA51DEFB5331B7F8426F54519992E664CF41591FF397AB45A482A',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/1E2C87BD659AA51DEFB5331B7F8426F54519992E664CF41591FF397AB45A482A',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/349828A73500BC3A951A56F9E89A32B60C876AC771A35553CD0AAAE8D8966F01',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/349828A73500BC3A951A56F9E89A32B60C876AC771A35553CD0AAAE8D8966F01',
      name: 'yTia (31Dec2026)',
      display: 'yTIA31Dec2026',
      symbol: 'yTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/67B7A57D6FDACCA3365909781C48B54F9B259DE948BBA4075A29EC3A08A015D5',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/67B7A57D6FDACCA3365909781C48B54F9B259DE948BBA4075A29EC3A08A015D5',
      name: 'yUsdy (31Mar2025)',
      display: 'yUSDY31Mar2025',
      symbol: 'yUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7BC5E09AB84C8785BC0A695C0C690C9CF8D0772D3884F8469F3FFDC6A96E0008',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/7BC5E09AB84C8785BC0A695C0C690C9CF8D0772D3884F8469F3FFDC6A96E0008',
      name: 'yUsdy (30Jun2025)',
      display: 'yUSDY30Jun2025',
      symbol: 'yUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4D6B804ED84369BD31B9718B699B17F7F4759031030DFF68037582A7DD199CD5',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/4D6B804ED84369BD31B9718B699B17F7F4759031030DFF68037582A7DD199CD5',
      name: 'yUsdy (30Sep2025)',
      display: 'yUSDY30Sep2025',
      symbol: 'yUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D8B1B7BB308984B92A883F4A487751BE915F4A646AC3510ED09D600EF0823CD3',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/D8B1B7BB308984B92A883F4A487751BE915F4A646AC3510ED09D600EF0823CD3',
      name: 'yUsdy (31Dec2025)',
      display: 'yUSDY31Dec2025',
      symbol: 'yUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/04478491EAF8CAABCFC93E6DA3F769E106A74CFF572551E55C198F9F37681FA3',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/04478491EAF8CAABCFC93E6DA3F769E106A74CFF572551E55C198F9F37681FA3',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/FB77DD4FEF0FA70DF636ACA5D117ED3648EE9F965FE01856FC647E57A0C814E9',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/FB77DD4FEF0FA70DF636ACA5D117ED3648EE9F965FE01856FC647E57A0C814E9',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/A696A1841D6882990C4352A4D2F12D41EC3087F8AA0AA9A905788853F37BD47C',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/A696A1841D6882990C4352A4D2F12D41EC3087F8AA0AA9A905788853F37BD47C',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/F423B425CD13E2343D6661038B8ED97AA5DA7A2B56615D92A8FF3FF9E15FBB2E',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/F423B425CD13E2343D6661038B8ED97AA5DA7A2B56615D92A8FF3FF9E15FBB2E',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/1083EF1051AA6E2C4745FC82DA400633F8D74FE105C536C37AEEE0BE99FE267E',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/1083EF1051AA6E2C4745FC82DA400633F8D74FE105C536C37AEEE0BE99FE267E',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/A918D92109578EC93257A500F30886CA875F1F8A38BCFED71618034F80E79D59',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/A918D92109578EC93257A500F30886CA875F1F8A38BCFED71618034F80E79D59',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/583B70BDD32525FE231DA4E8934F1053F0E6052EF3B75F309C2EF3FBC4ED5F28',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/583B70BDD32525FE231DA4E8934F1053F0E6052EF3B75F309C2EF3FBC4ED5F28',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/810DB2399F0E67D30990A03E4288CF8CF7C7ABD05446D866F4BB343DB2F2D3C3',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/810DB2399F0E67D30990A03E4288CF8CF7C7ABD05446D866F4BB343DB2F2D3C3',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/5D4B0900C7750D99995DF6156ECBDB67EA52D252DFCA4B3A7BA3F86E49F4E2FD',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/5D4B0900C7750D99995DF6156ECBDB67EA52D252DFCA4B3A7BA3F86E49F4E2FD',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/3D724A839454BC5C4E0C3853C8401F67B9470D22B8A7362A0CD1D8078A312D4C',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/3D724A839454BC5C4E0C3853C8401F67B9470D22B8A7362A0CD1D8078A312D4C',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/7DA45E0636E1C8DCF2F35783B19204AB7220D8350866C62EEF454180C18ED0B7',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/7DA45E0636E1C8DCF2F35783B19204AB7220D8350866C62EEF454180C18ED0B7',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/ECB3ACA0D1E960C2A82A05265B380B5EB9FE2D52B4EC0ACD4281E83A054680BC',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/ECB3ACA0D1E960C2A82A05265B380B5EB9FE2D52B4EC0ACD4281E83A054680BC',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/2A5BFEB7CEC7BA4751A8967D842AA09E5C26CAEB26EB58D12847B2C9753AE6BB',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/2A5BFEB7CEC7BA4751A8967D842AA09E5C26CAEB26EB58D12847B2C9753AE6BB',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/28B05115EC196C2A35C306D406DDF15C5FC428E725302DB261E3FE22F495C3AA',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/28B05115EC196C2A35C306D406DDF15C5FC428E725302DB261E3FE22F495C3AA',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/E9320C3641CCFD90EFD70BC65D6A6FCF514FEC05E5F93D6B177D4F16158DD12F',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/E9320C3641CCFD90EFD70BC65D6A6FCF514FEC05E5F93D6B177D4F16158DD12F',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/EAD5C972C1DAFB992568C2FE8FAB3F78126EEBF58A38199AA9A8727F1CE3F91C',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/EAD5C972C1DAFB992568C2FE8FAB3F78126EEBF58A38199AA9A8727F1CE3F91C',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/BDBABEF0765934CF3FBA904795658E4193F94E86A77F5E5198E99EEC3C95C5DC',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/BDBABEF0765934CF3FBA904795658E4193F94E86A77F5E5198E99EEC3C95C5DC',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/D05F749D067656BF382C4F2CF05A28C66A55479675D1F0AABAA936795FA4FE14',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/D05F749D067656BF382C4F2CF05A28C66A55479675D1F0AABAA936795FA4FE14',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/736C06F268D28993E6AAB397B104DC4BC7A2371A5795EB779383C9B93695C2AD',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/736C06F268D28993E6AAB397B104DC4BC7A2371A5795EB779383C9B93695C2AD',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/E9A0A27D37FC13ABAB20AD51E6B75FDF2ADEBA9D5C18C6566659EA453A816243',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/E9A0A27D37FC13ABAB20AD51E6B75FDF2ADEBA9D5C18C6566659EA453A816243',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/2E5C4ABF556CEA1B7347DCB743F64987A754F94ED830CFAD915E1676596BBF77',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/2E5C4ABF556CEA1B7347DCB743F64987A754F94ED830CFAD915E1676596BBF77',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/0397F7558E4AAD51E416BA2D262225B21A4017360FC9D86DEAADDE62BFCBD8F9',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/0397F7558E4AAD51E416BA2D262225B21A4017360FC9D86DEAADDE62BFCBD8F9',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/DAF5698153669355DE3FA4BBF114640BAC8B8A50AE65D0DD4F63F0F31FAFEC1D',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/DAF5698153669355DE3FA4BBF114640BAC8B8A50AE65D0DD4F63F0F31FAFEC1D',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/76A7C96081802A042F834E12FF2F7B4CC7503AA30932F366DC9821219A68490E',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/76A7C96081802A042F834E12FF2F7B4CC7503AA30932F366DC9821219A68490E',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/1AB51B4CD388D678153A0C3022CC2690C317756F1D17386DB0E5524EA91FA9E8',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/1AB51B4CD388D678153A0C3022CC2690C317756F1D17386DB0E5524EA91FA9E8',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C10CDCEB069B22EA324241050141E75E340BC54D5EC5685C34C31AA53D8A0D32',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C10CDCEB069B22EA324241050141E75E340BC54D5EC5685C34C31AA53D8A0D32',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/8CC9D62E8CE46492A80137B9C77EB2BFA27746B9BDFD22601C67166DBA1D9DC3',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/8CC9D62E8CE46492A80137B9C77EB2BFA27746B9BDFD22601C67166DBA1D9DC3',
      name: 'USDY Yield LP',
      display: 'lp:31:usdy',
      symbol: 'USDY-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/C0C08176342444D384304BF3EAD727E022838992B4131156D122A6FA1C5440A4',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/C0C08176342444D384304BF3EAD727E022838992B4131156D122A6FA1C5440A4',
      name: 'USDY Boost LP',
      display: 'lp:32:usdyypt-usdc',
      symbol: 'USDY-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:32:ausdyypt-uusdc',
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
      type_asset: 'sdk.coin',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/0BAF18A6E6D2F9886005DC2C365E142074DF47094FB1E621ED3089BD8B02D15B',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/0BAF18A6E6D2F9886005DC2C365E142074DF47094FB1E621ED3089BD8B02D15B',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primary_color_hex: '#10a7ef'
          }
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://x.com/SentinelDVPN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-96',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-165'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
      denom_units: [{
          denom: 'ibc/53F0D1647EB6153E1C1D98A9134D4CD8503FC5C4406D6776A9E5086E00FBA268',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/53F0D1647EB6153E1C1D98A9134D4CD8503FC5C4406D6776A9E5086E00FBA268',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      coingecko_id: 'xion-2',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        website: 'https://xion.burnt.com/',
        twitter: 'https://twitter.com/burnt_xion'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uxion',
            chain_name: 'xion'
          },
          chain: {
            channel_id: 'channel-161'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/343F755B3A654F9138B1F5C6D1DAC5DECB5EDD9FB1D0BE428647C971039AAAAE',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/343F755B3A654F9138B1F5C6D1DAC5DECB5EDD9FB1D0BE428647C971039AAAAE',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      coingecko_id: 'pulsara',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg',
          theme: {
            primary_color_hex: '#0517b1'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/888A3CCCE4A3793E13202A03F8FA0D8958AC094B3EF222104743983EF8919733',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/888A3CCCE4A3793E13202A03F8FA0D8958AC094B3EF222104743983EF8919733',
      name: 'liCORE',
      display: 'licore',
      symbol: 'LICORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
      },
      coingecko_id: 'licore',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg',
          theme: {
            primary_color_hex: '#ea00c5'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
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
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/62EED9812C9184F2EA24F8008D9D2C05AD23CEA2632958B6D5906F478FA1DBA6',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/62EED9812C9184F2EA24F8008D9D2C05AD23CEA2632958B6D5906F478FA1DBA6',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingecko_id: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/1A50974318E1165F361358B7F0BC0C0026276C7C644E1DC97754D52362261C5C',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/1A50974318E1165F361358B7F0BC0C0026276C7C644E1DC97754D52362261C5C',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-163'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
          denom: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
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
            channel_id: 'channel-21',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
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
      type_asset: 'sdk.coin',
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
      socials: {
        website: 'https://islamiccoin.net',
        twitter: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/0F4A0619F89C185E8DA475C8ABE0AFB2CF2FCD06E43654858664EDB8D5D68CCE',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/0F4A0619F89C185E8DA475C8ABE0AFB2CF2FCD06E43654858664EDB8D5D68CCE',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      coingecko_id: 'deenar-gold',
      socials: {
        website: 'https://deenar.com',
        twitter: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/A510E27678EF927ABF6781D9A96D3AE1FCA083ACE89EBFF3CC55D343C5192444',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/A510E27678EF927ABF6781D9A96D3AE1FCA083ACE89EBFF3CC55D343C5192444',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-153',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-168'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      denom_units: [
        {
          denom: 'ibc/52C9B73B0D9665A4FA1E973B001A83FCFF3B6062E44B564230D20536F1103112',
          exponent: 0,
          aliases: ['unibi']
        },
        {
          denom: 'nibi',
          exponent: 6
        },
        {
          denom: 'attonibi',
          exponent: 18
        }
      ],
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
      type_asset: 'sdk.coin',
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
      description: 'AXV',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denom_units: [{
          denom: 'ibc/CFBB272C7BA45372A94453E524A549D505AC5B1F9B214E82FBBF1461C1F22EA4',
          exponent: 0,
          aliases: ['tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'ibc/CFBB272C7BA45372A94453E524A549D505AC5B1F9B214E82FBBF1461C1F22EA4',
      name: 'AXV',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/37731EEEAE2D4A18C296FA1B3808719ACCBFFF7BF7F6A1D6EEA1044472B689E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/37731EEEAE2D4A18C296FA1B3808719ACCBFFF7BF7F6A1D6EEA1044472B689E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingecko_id: 'nolus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
          theme: {
            primary_color_hex: '#fc542c'
          }
        }],
      socials: {
        website: 'https://nolus.io/',
        twitter: 'https://twitter.com/NolusProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10177',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-143'
          }
        }]
    },
    {
      description: 'ODIN is the Staking and governance token for ODIN Protocol',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      socials: {
        website: 'https://odinprotocol.io/',
        twitter: 'https://twitter.com/odinprotocol'
      },
      type_asset: 'sdk.coin',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      type_asset: 'sdk.coin',
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
      description: 'DOKI the last Dragon',
      denom_units: [{
          denom: 'ibc/2CD69A93A9FB69F6E3E1029021822E19D11C3942108A066234B8715D98B1596B',
          exponent: 0,
          aliases: ['udoki']
        }, {
          denom: 'doki',
          exponent: 6
        }],
      base: 'ibc/2CD69A93A9FB69F6E3E1029021822E19D11C3942108A066234B8715D98B1596B',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      coingecko_id: 'doki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png',
          theme: {
            primary_color_hex: '#2e2d2a'
          }
        }],
      socials: {
        website: 'https://dokicoin.io/',
        twitter: 'https://twitter.com/doki_coin'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'udoki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'Myrkur the leader of OLD Order',
      denom_units: [{
          denom: 'ibc/083B5AA8C6C2A17AD00A9275DAA79EA92F511D5F7CE4B30321C2605CB5F754A9',
          exponent: 0,
          aliases: ['umyrk']
        }, {
          denom: 'myrk',
          exponent: 6
        }],
      base: 'ibc/083B5AA8C6C2A17AD00A9275DAA79EA92F511D5F7CE4B30321C2605CB5F754A9',
      name: 'MYRK',
      display: 'myrk',
      symbol: 'MYRK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png',
          theme: {
            primary_color_hex: '#0a0707'
          }
        }],
      socials: {
        twitter: 'https://twitter.com/myrkweilds'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'umyrk',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.odin9worlds.io/',
        twitter: 'https://twitter.com/odin9worlds'
      },
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }],
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/A571AD8A8111FDB7C6A75EC095BD4F78C10A9F614E4CEDC1A33BF80471B02640',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/A571AD8A8111FDB7C6A75EC095BD4F78C10A9F614E4CEDC1A33BF80471B02640',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7C0E91B6476B427F7B2FB1980A7BA00B2B6CC7DB2433C02E9603F22E0987D669',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/7C0E91B6476B427F7B2FB1980A7BA00B2B6CC7DB2433C02E9603F22E0987D669',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/372725E18ED25F02B8DAB099FBE1699D6E8F7601B8FC10310A5AA24D5E501E9E',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/372725E18ED25F02B8DAB099FBE1699D6E8F7601B8FC10310A5AA24D5E501E9E',
      name: 'pAtom (31Mar2025)',
      display: 'pATOM31Mar2025',
      symbol: 'pATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FC50E6E0AFD0DFDFC13C0CBFDD80337F28379F3BA48349F73600AE77184BAAD9',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/FC50E6E0AFD0DFDFC13C0CBFDD80337F28379F3BA48349F73600AE77184BAAD9',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BFBC135140C1A880BCECD5EB20BED3DC587F57B1D6B24E917CE78221BE9157B1',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/BFBC135140C1A880BCECD5EB20BED3DC587F57B1D6B24E917CE78221BE9157B1',
      name: 'pAtom (31Dec2026)',
      display: 'pATOM31Dec2026',
      symbol: 'pATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/F74F9EDE4E570314EC97AB95F833159A6B578414C5D11704FCFB3BC19973E7F4',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/F74F9EDE4E570314EC97AB95F833159A6B578414C5D11704FCFB3BC19973E7F4',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/EA4B104E4F3E5B4CBE5F28A08987A2B25FC3D59191DB20207DDA62C3E08A47CB',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/EA4B104E4F3E5B4CBE5F28A08987A2B25FC3D59191DB20207DDA62C3E08A47CB',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/4320BE4A81CE47B8C034C45AAC6415F675A2CAC518D68B4306E31B2128AE9CE3',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/4320BE4A81CE47B8C034C45AAC6415F675A2CAC518D68B4306E31B2128AE9CE3',
      name: 'pOsmo (31Mar2025)',
      display: 'pOSMO31Mar2025',
      symbol: 'pOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/B90C77F7B351FCB264171868476D74ECA6BF5547DA20F2211CAD3140F954AE3D',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/B90C77F7B351FCB264171868476D74ECA6BF5547DA20F2211CAD3140F954AE3D',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/FB00A1CD2C2D9DBCDB916C7E8482D1E82089000D1EB4E48CDFA116BCF37966E0',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/FB00A1CD2C2D9DBCDB916C7E8482D1E82089000D1EB4E48CDFA116BCF37966E0',
      name: 'pOsmo (31Dec2026)',
      display: 'pOSMO31Dec2026',
      symbol: 'pOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2F638FC558149F7B1696437117043233411C0DC568691CF2DDD0DE723F9C857E',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2F638FC558149F7B1696437117043233411C0DC568691CF2DDD0DE723F9C857E',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/056C73BB436274671274C357B00962A3CFB70949D5EEF1F8F93DDA747B402859',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/056C73BB436274671274C357B00962A3CFB70949D5EEF1F8F93DDA747B402859',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/5493011CE666DCBAF314046CC053067E738DAA6E670753638CD80481C53E6E81',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/5493011CE666DCBAF314046CC053067E738DAA6E670753638CD80481C53E6E81',
      name: 'pInj (31Mar2025)',
      display: 'pINJ31Mar2025',
      symbol: 'pINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2160C79C4FD2A2F482114ECBD4C55A4DDB5276E8B3D39D4A5A346A005808C664',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/2160C79C4FD2A2F482114ECBD4C55A4DDB5276E8B3D39D4A5A346A005808C664',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A7000D6F76A124C61791A24F6EB281AECCB7E930284C7DF449115EAF8E216590',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A7000D6F76A124C61791A24F6EB281AECCB7E930284C7DF449115EAF8E216590',
      name: 'pInj (31Dec2026)',
      display: 'pINJ31Dec2026',
      symbol: 'pINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/4E56FD42960A1F52BE474248C23208E431358BC202E6EE9DAB37189CC7C317F0',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/4E56FD42960A1F52BE474248C23208E431358BC202E6EE9DAB37189CC7C317F0',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/93C96CF275B95E607EA6CB85B97794BCCE32C3A67D8B5FF74CA328E03751F661',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/93C96CF275B95E607EA6CB85B97794BCCE32C3A67D8B5FF74CA328E03751F661',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/C0E432FA8F73DBD5691BD275147D115BF69CB8C57BF3FD566C52591D067362D6',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/C0E432FA8F73DBD5691BD275147D115BF69CB8C57BF3FD566C52591D067362D6',
      name: 'pLuna (31Mar2025)',
      display: 'pLUNA31Mar2025',
      symbol: 'pLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/90AA2C9AA204A6246E39C4B44EA0115C549367CDED72318DBF7162CF33C4B164',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/90AA2C9AA204A6246E39C4B44EA0115C549367CDED72318DBF7162CF33C4B164',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/0E2DF093CEABB97A35D8CB77647D830E8C19D3B10FEA5D92CA8B31C8940B8A1B',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/0E2DF093CEABB97A35D8CB77647D830E8C19D3B10FEA5D92CA8B31C8940B8A1B',
      name: 'pLuna (31Dec2026)',
      display: 'pLUNA31Dec2026',
      symbol: 'pLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2730EBFF434EAA601D98A348B96230256F3B154C765E2AFB39F496F5B97A4584',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2730EBFF434EAA601D98A348B96230256F3B154C765E2AFB39F496F5B97A4584',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B55480B25D7686145ABC4B21354597BAF3CBDA52368EC0440E57CA76653B4E53',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B55480B25D7686145ABC4B21354597BAF3CBDA52368EC0440E57CA76653B4E53',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/196D420C083E4C0B1998A23D477FCC2E7E3E5291B4B94EDA60737D0D79005D5E',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/196D420C083E4C0B1998A23D477FCC2E7E3E5291B4B94EDA60737D0D79005D5E',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A26DC0E969F8C774737BF95EE45B495B376EF4D437C46A68BC002FA69AD5CD4C',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A26DC0E969F8C774737BF95EE45B495B376EF4D437C46A68BC002FA69AD5CD4C',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/403BA4C1FC4FEED74DC705A68A330A544A9925C943ADA728CE63D2FBE998FB06',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/403BA4C1FC4FEED74DC705A68A330A544A9925C943ADA728CE63D2FBE998FB06',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/03CDD29C115C600D869BE1B763E6716A0E3DCB43C56861F4166EEFA09998B182',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/03CDD29C115C600D869BE1B763E6716A0E3DCB43C56861F4166EEFA09998B182',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8E99840A0545B4BF7C953B583F2A4FAF12587B880F174C054AFEFE534EEE99F2',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8E99840A0545B4BF7C953B583F2A4FAF12587B880F174C054AFEFE534EEE99F2',
      name: 'pstTia (31Mar2025)',
      display: 'pstTIA31Mar2025',
      symbol: 'pstTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E6322846AD85FCFB1E1AD209E311F862381DA4B7F730433C1DDA44DD52DCB0B0',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/E6322846AD85FCFB1E1AD209E311F862381DA4B7F730433C1DDA44DD52DCB0B0',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9D0F5FDB9C3B2B867CF8BD25D68DCDB4C48A9A7EB785DEB39336B5644F4F09B5',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9D0F5FDB9C3B2B867CF8BD25D68DCDB4C48A9A7EB785DEB39336B5644F4F09B5',
      name: 'pstTia (31Dec2026)',
      display: 'pstTIA31Dec2026',
      symbol: 'pstTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/4AEC5986E3A0EE69EF5F7764918E868420FB6B0214E4CFAF05BA60CD484ADF56',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/4AEC5986E3A0EE69EF5F7764918E868420FB6B0214E4CFAF05BA60CD484ADF56',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D829A82C205965A05DF619ABF10F34416573C60300A5ED86D6901ED4EF1E3C9B',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D829A82C205965A05DF619ABF10F34416573C60300A5ED86D6901ED4EF1E3C9B',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/73CF9FBC1B6B59F63E2B9CCCBD3C138EA4862326C198C38D17051E717E893B4C',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/73CF9FBC1B6B59F63E2B9CCCBD3C138EA4862326C198C38D17051E717E893B4C',
      name: 'pstDydx (31Mar2025)',
      display: 'pstDYDX31Mar2025',
      symbol: 'pstDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A99CC2D97766C011AF6CD0BF84AF003CD99854212A00765D2FDE0F53DD0B296F',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/A99CC2D97766C011AF6CD0BF84AF003CD99854212A00765D2FDE0F53DD0B296F',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3B28BC38F5E950BCA560D730D9C3C2DA39CCA7814AD60FD11F04A3057B69FD80',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/3B28BC38F5E950BCA560D730D9C3C2DA39CCA7814AD60FD11F04A3057B69FD80',
      name: 'pstDydx (31Dec2026)',
      display: 'pstDYDX31Dec2026',
      symbol: 'pstDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C67E4607E1F96490F8BCC40579B15899BD9AFB652BF2E9C46F492522DDF691C0',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C67E4607E1F96490F8BCC40579B15899BD9AFB652BF2E9C46F492522DDF691C0',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/6DEC1DCBB8051E723B131A4C7986A0753B5FB835773485AC1CC692CA1DEEF40B',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/6DEC1DCBB8051E723B131A4C7986A0753B5FB835773485AC1CC692CA1DEEF40B',
      name: 'pdAtom (31Mar2025)',
      display: 'pdATOM31Mar2025',
      symbol: 'pdATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1C9E192A974B5E5CEF78CC63145BCEA1453646B0FCAEDCB4EC2822299046943C',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1C9E192A974B5E5CEF78CC63145BCEA1453646B0FCAEDCB4EC2822299046943C',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BE5FA1ECF44D3C74163A0D03A4A529FC73A35CFBC48FE705D7C89528935E41E4',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BE5FA1ECF44D3C74163A0D03A4A529FC73A35CFBC48FE705D7C89528935E41E4',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/B202078F3A0D32EABC49150829377F2FE14AE6CDEFA6DC0CBE8C6C707BD6E9CB',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/B202078F3A0D32EABC49150829377F2FE14AE6CDEFA6DC0CBE8C6C707BD6E9CB',
      name: 'pdAtom (31Dec2026)',
      display: 'pdATOM31Dec2026',
      symbol: 'pdATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4E0364015465CF13CF984B94154E09073635B70B53DF41184C907B55423E0EF8',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4E0364015465CF13CF984B94154E09073635B70B53DF41184C907B55423E0EF8',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/40632A454503DF6230DB901272995A714B7DC801AC18FF105AC123ED964B3A53',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/40632A454503DF6230DB901272995A714B7DC801AC18FF105AC123ED964B3A53',
      name: 'pTia (31Mar2025)',
      display: 'pTIA31Mar2025',
      symbol: 'pTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3202379D36D7B250BC09901E7AFA42134D5B13E87B90FB483B668AEB45420C31',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3202379D36D7B250BC09901E7AFA42134D5B13E87B90FB483B668AEB45420C31',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/DDC617D5324ACC04132EFFBA14B064AF7C3E02FABB31373E6D374CCB9BEB5EAD',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/DDC617D5324ACC04132EFFBA14B064AF7C3E02FABB31373E6D374CCB9BEB5EAD',
      name: 'pTia (31Dec2026)',
      display: 'pTIA31Dec2026',
      symbol: 'pTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/668B350DD18A2A4E92FDDD93E38759FDF2D16453A9C755298809370878E13187',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/668B350DD18A2A4E92FDDD93E38759FDF2D16453A9C755298809370878E13187',
      name: 'pUsdy (31Mar2025)',
      display: 'pUSDY31Mar2025',
      symbol: 'pUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/CC566491B2CC7772DADEE7FDD48DCFB63313DED67979C6DFE074F7A4CBE72862',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/CC566491B2CC7772DADEE7FDD48DCFB63313DED67979C6DFE074F7A4CBE72862',
      name: 'pUsdy (30Jun2025)',
      display: 'pUSDY30Jun2025',
      symbol: 'pUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/00F24AEA2FD9FC60F0C82AC3D389DDD76DA462A011B3595380E156D9B8803282',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/00F24AEA2FD9FC60F0C82AC3D389DDD76DA462A011B3595380E156D9B8803282',
      name: 'pUsdy (30Sep2025)',
      display: 'pUSDY30Sep2025',
      symbol: 'pUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/65027CBFEF26D272018FF76214A962275DC7ACF1C7B5804F0FFA2F26D4FE7B76',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/65027CBFEF26D272018FF76214A962275DC7ACF1C7B5804F0FFA2F26D4FE7B76',
      name: 'pUsdy (31Dec2025)',
      display: 'pUSDY31Dec2025',
      symbol: 'pUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2EE1910232CC1873B69E049B4BE3A1CA227B79F45F0BDFC858B85E83EDB087A4',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2EE1910232CC1873B69E049B4BE3A1CA227B79F45F0BDFC858B85E83EDB087A4',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/EC0C23740C82D3DA0B814260E72AB4FE0EB9992FE2FB3859D968EC8FB71A1DA3',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/EC0C23740C82D3DA0B814260E72AB4FE0EB9992FE2FB3859D968EC8FB71A1DA3',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FAD98922A5A54D26578781E2549DD1A19CDD46972756F7D958EBA10AC87B80B6',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FAD98922A5A54D26578781E2549DD1A19CDD46972756F7D958EBA10AC87B80B6',
      name: 'yAtom (31Mar2025)',
      display: 'yATOM31Mar2025',
      symbol: 'yATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/ABCEBB4F5E537873C65E9F5F40391C8BFB717C1FC67580C2C57C9EE6B42E46CE',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/ABCEBB4F5E537873C65E9F5F40391C8BFB717C1FC67580C2C57C9EE6B42E46CE',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/56B27EDE2180074D85B12649B623EAE63DEC768FFC33DFB59882924E99126CC7',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/56B27EDE2180074D85B12649B623EAE63DEC768FFC33DFB59882924E99126CC7',
      name: 'yAtom (31Dec2026)',
      display: 'yATOM31Dec2026',
      symbol: 'yATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/909CA2CB0269447C75E1AF708B1490581091F5A886C0019B62269E8C069444DF',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/909CA2CB0269447C75E1AF708B1490581091F5A886C0019B62269E8C069444DF',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/238E778A6264C8782FC5C264F108A3D5BF147376070D53CC8953AAF00844EDC9',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/238E778A6264C8782FC5C264F108A3D5BF147376070D53CC8953AAF00844EDC9',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/059C8BA5F71DCD2650E87683E0FB2A7B304B75F35AE2F612F974B51F0E5869EA',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/059C8BA5F71DCD2650E87683E0FB2A7B304B75F35AE2F612F974B51F0E5869EA',
      name: 'yOsmo (31Mar2025)',
      display: 'yOSMO31Mar2025',
      symbol: 'yOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/283431ED5D9D454D61CC70AD0AD1BD0D881700D65EEEE215E94212EDDB1A5C3C',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/283431ED5D9D454D61CC70AD0AD1BD0D881700D65EEEE215E94212EDDB1A5C3C',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/B175B659CBE79B01323EF2B238F3DDF45B943FE99EC797CD237CB5DFB3177ACD',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/B175B659CBE79B01323EF2B238F3DDF45B943FE99EC797CD237CB5DFB3177ACD',
      name: 'yOsmo (31Dec2026)',
      display: 'yOSMO31Dec2026',
      symbol: 'yOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/15A59371D19C0C0B8DDDD8BCCD67A7255C6FD9637A0673E640B61C05779D990B',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/15A59371D19C0C0B8DDDD8BCCD67A7255C6FD9637A0673E640B61C05779D990B',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C8213417520D52BE803CB9EA7C81CAC615940DF32A419757E2ADD389ECE2BE5F',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/C8213417520D52BE803CB9EA7C81CAC615940DF32A419757E2ADD389ECE2BE5F',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/661CFB7FF21E4ADC13F84DEC672AEDD27FB2940A1B744512B20D2E8E695ABCBA',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/661CFB7FF21E4ADC13F84DEC672AEDD27FB2940A1B744512B20D2E8E695ABCBA',
      name: 'yInj (31Mar2025)',
      display: 'yINJ31Mar2025',
      symbol: 'yINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/85DDF91FD985840181AF5A4BA81C971691F19A0A68B077192CF33A0EFE3E1B84',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/85DDF91FD985840181AF5A4BA81C971691F19A0A68B077192CF33A0EFE3E1B84',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/F216C4020277BC71DD43E7B2CBA4694935E4982BABFF442FE7AF330D42BC3C9C',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/F216C4020277BC71DD43E7B2CBA4694935E4982BABFF442FE7AF330D42BC3C9C',
      name: 'yInj (31Dec2026)',
      display: 'yINJ31Dec2026',
      symbol: 'yINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8D0A05FBE8E74A45F2063C2312DD7C23A43A49B9BDA9776C08982048458151C0',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/8D0A05FBE8E74A45F2063C2312DD7C23A43A49B9BDA9776C08982048458151C0',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F48A9109A6564DEBBC4D2CF5984F0232CC69AEE296994D8ACE25DE8E939BE3F9',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F48A9109A6564DEBBC4D2CF5984F0232CC69AEE296994D8ACE25DE8E939BE3F9',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F1A3FCA3407B7A9886F808DF4C76D50589C0A7E494740752AC9D8BB8CB947BBD',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F1A3FCA3407B7A9886F808DF4C76D50589C0A7E494740752AC9D8BB8CB947BBD',
      name: 'yLuna (31Mar2025)',
      display: 'yLUNA31Mar2025',
      symbol: 'yLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C40FD75E9CB5CB4B05050590780F7068C15486FFCEB69056CE33A86B391E1139',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/C40FD75E9CB5CB4B05050590780F7068C15486FFCEB69056CE33A86B391E1139',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9C70F832998E81BFC537C97CC872CAF8A0C1AE47BC610951CA04D3B24D229011',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9C70F832998E81BFC537C97CC872CAF8A0C1AE47BC610951CA04D3B24D229011',
      name: 'yLuna (31Dec2026)',
      display: 'yLUNA31Dec2026',
      symbol: 'yLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C2E978100BD590B02ACD21D6043C047370EB7007DB6A8C0353C8DA7373C333C1',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C2E978100BD590B02ACD21D6043C047370EB7007DB6A8C0353C8DA7373C333C1',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/3A84FE66A73007705DA07204E0044B928C3F542883895B77B919FE85578F5C46',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/3A84FE66A73007705DA07204E0044B928C3F542883895B77B919FE85578F5C46',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/90AE5B628749D0008090C2BC5F42A529B962EC116F17AA65FBBEF61C159F4862',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/90AE5B628749D0008090C2BC5F42A529B962EC116F17AA65FBBEF61C159F4862',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/20F996473422923ACE608300F6DBDB198702550F1FFAD379FFE08CCAC0703939',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/20F996473422923ACE608300F6DBDB198702550F1FFAD379FFE08CCAC0703939',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/426B039C812A1DFD683846BB22D0DA1B0A4530EB2554FD73AFA822E5B2297AFA',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/426B039C812A1DFD683846BB22D0DA1B0A4530EB2554FD73AFA822E5B2297AFA',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2DC795F93976B4BEC4F015766B5A95242DA071AA115548341FB981842B6739C7',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2DC795F93976B4BEC4F015766B5A95242DA071AA115548341FB981842B6739C7',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/05664AAF92D35085721DBD1F534CEAE497C60949198FF8C9E12B82917D8C3697',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/05664AAF92D35085721DBD1F534CEAE497C60949198FF8C9E12B82917D8C3697',
      name: 'ystTia (31Mar2025)',
      display: 'ystTIA31Mar2025',
      symbol: 'ystTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5098141C4FFDB76C5338C285E782FF376BB95BE5B5426138158E691EC59EF55D',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5098141C4FFDB76C5338C285E782FF376BB95BE5B5426138158E691EC59EF55D',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C090B36A0F7B1C4977AA234846D064D25C5375095B86AEEAE15EC8023D8F03B5',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C090B36A0F7B1C4977AA234846D064D25C5375095B86AEEAE15EC8023D8F03B5',
      name: 'ystTia (31Dec2026)',
      display: 'ystTIA31Dec2026',
      symbol: 'ystTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/14C6A21B8C7CFC0CF3C4D120CFDE76E9DCE5C6451B6096131F0E3CB34260D7AE',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/14C6A21B8C7CFC0CF3C4D120CFDE76E9DCE5C6451B6096131F0E3CB34260D7AE',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/AE2B7CBF1FCBD0734878F2624D6FCF2CEAC472656AC8CB151C73271B6DEA17B2',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/AE2B7CBF1FCBD0734878F2624D6FCF2CEAC472656AC8CB151C73271B6DEA17B2',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/6477E49E59D2CC4381E6379DC95EB9CA99BFA9A9464BF2C2077A655E78D55434',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/6477E49E59D2CC4381E6379DC95EB9CA99BFA9A9464BF2C2077A655E78D55434',
      name: 'ystDydx (31Mar2025)',
      display: 'ystDYDX31Mar2025',
      symbol: 'ystDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3CE8B68553A7365B72FD2BF971ED6BE456CC166D06E0CED61FFCA48C67BE7DE9',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/3CE8B68553A7365B72FD2BF971ED6BE456CC166D06E0CED61FFCA48C67BE7DE9',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E3A2D2DE06CE0499F2D0ED250E7B6AF9089E3BD168B40113200D82AE9882689E',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/E3A2D2DE06CE0499F2D0ED250E7B6AF9089E3BD168B40113200D82AE9882689E',
      name: 'ystDydx (31Dec2026)',
      display: 'ystDYDX31Dec2026',
      symbol: 'ystDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/CAB4387ACCE198B7EE77CA7624A32DF8412BE75AF053DB215A6AB7BF64BADBFD',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/CAB4387ACCE198B7EE77CA7624A32DF8412BE75AF053DB215A6AB7BF64BADBFD',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F60625AEC84B5E373C500D71285FEAE59052C44AC78F37E27F764BD250F80AEC',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F60625AEC84B5E373C500D71285FEAE59052C44AC78F37E27F764BD250F80AEC',
      name: 'ydAtom (31Mar2025)',
      display: 'ydATOM31Mar2025',
      symbol: 'ydATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/01C41E95F8B5DF0B3E3AFACF8D229C3957A437FDC38CBE7CB3ACED7029E3D7CC',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/01C41E95F8B5DF0B3E3AFACF8D229C3957A437FDC38CBE7CB3ACED7029E3D7CC',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6CBE18DBC458EAE2A1911EB9FF54D0E3C3BDF9113F1BCBBB95108F8951153CFB',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/6CBE18DBC458EAE2A1911EB9FF54D0E3C3BDF9113F1BCBBB95108F8951153CFB',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E8A756F88D012FF2CD5DB2F09627EBA7CBCDE0A0D9A229AA89E20450887312FC',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/E8A756F88D012FF2CD5DB2F09627EBA7CBCDE0A0D9A229AA89E20450887312FC',
      name: 'ydAtom (31Dec2026)',
      display: 'ydATOM31Dec2026',
      symbol: 'ydATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/91F878597B87DE1C1ED8BE283E260DFAD323BB4AA3EDD81F08A3BEB3F3E628A0',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/91F878597B87DE1C1ED8BE283E260DFAD323BB4AA3EDD81F08A3BEB3F3E628A0',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/03AD0A4BD0BC696C5B26D97F2BBDD94AB0FD76599538E85B2F0FCA70C3287BB5',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/03AD0A4BD0BC696C5B26D97F2BBDD94AB0FD76599538E85B2F0FCA70C3287BB5',
      name: 'yTia (31Mar2025)',
      display: 'yTIA31Mar2025',
      symbol: 'yTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/1E2C87BD659AA51DEFB5331B7F8426F54519992E664CF41591FF397AB45A482A',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/1E2C87BD659AA51DEFB5331B7F8426F54519992E664CF41591FF397AB45A482A',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/349828A73500BC3A951A56F9E89A32B60C876AC771A35553CD0AAAE8D8966F01',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/349828A73500BC3A951A56F9E89A32B60C876AC771A35553CD0AAAE8D8966F01',
      name: 'yTia (31Dec2026)',
      display: 'yTIA31Dec2026',
      symbol: 'yTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/67B7A57D6FDACCA3365909781C48B54F9B259DE948BBA4075A29EC3A08A015D5',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/67B7A57D6FDACCA3365909781C48B54F9B259DE948BBA4075A29EC3A08A015D5',
      name: 'yUsdy (31Mar2025)',
      display: 'yUSDY31Mar2025',
      symbol: 'yUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7BC5E09AB84C8785BC0A695C0C690C9CF8D0772D3884F8469F3FFDC6A96E0008',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/7BC5E09AB84C8785BC0A695C0C690C9CF8D0772D3884F8469F3FFDC6A96E0008',
      name: 'yUsdy (30Jun2025)',
      display: 'yUSDY30Jun2025',
      symbol: 'yUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4D6B804ED84369BD31B9718B699B17F7F4759031030DFF68037582A7DD199CD5',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/4D6B804ED84369BD31B9718B699B17F7F4759031030DFF68037582A7DD199CD5',
      name: 'yUsdy (30Sep2025)',
      display: 'yUSDY30Sep2025',
      symbol: 'yUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D8B1B7BB308984B92A883F4A487751BE915F4A646AC3510ED09D600EF0823CD3',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/D8B1B7BB308984B92A883F4A487751BE915F4A646AC3510ED09D600EF0823CD3',
      name: 'yUsdy (31Dec2025)',
      display: 'yUSDY31Dec2025',
      symbol: 'yUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/04478491EAF8CAABCFC93E6DA3F769E106A74CFF572551E55C198F9F37681FA3',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/04478491EAF8CAABCFC93E6DA3F769E106A74CFF572551E55C198F9F37681FA3',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/FB77DD4FEF0FA70DF636ACA5D117ED3648EE9F965FE01856FC647E57A0C814E9',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/FB77DD4FEF0FA70DF636ACA5D117ED3648EE9F965FE01856FC647E57A0C814E9',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/A696A1841D6882990C4352A4D2F12D41EC3087F8AA0AA9A905788853F37BD47C',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/A696A1841D6882990C4352A4D2F12D41EC3087F8AA0AA9A905788853F37BD47C',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/F423B425CD13E2343D6661038B8ED97AA5DA7A2B56615D92A8FF3FF9E15FBB2E',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/F423B425CD13E2343D6661038B8ED97AA5DA7A2B56615D92A8FF3FF9E15FBB2E',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/1083EF1051AA6E2C4745FC82DA400633F8D74FE105C536C37AEEE0BE99FE267E',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/1083EF1051AA6E2C4745FC82DA400633F8D74FE105C536C37AEEE0BE99FE267E',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/A918D92109578EC93257A500F30886CA875F1F8A38BCFED71618034F80E79D59',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/A918D92109578EC93257A500F30886CA875F1F8A38BCFED71618034F80E79D59',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/583B70BDD32525FE231DA4E8934F1053F0E6052EF3B75F309C2EF3FBC4ED5F28',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/583B70BDD32525FE231DA4E8934F1053F0E6052EF3B75F309C2EF3FBC4ED5F28',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/810DB2399F0E67D30990A03E4288CF8CF7C7ABD05446D866F4BB343DB2F2D3C3',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/810DB2399F0E67D30990A03E4288CF8CF7C7ABD05446D866F4BB343DB2F2D3C3',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/5D4B0900C7750D99995DF6156ECBDB67EA52D252DFCA4B3A7BA3F86E49F4E2FD',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/5D4B0900C7750D99995DF6156ECBDB67EA52D252DFCA4B3A7BA3F86E49F4E2FD',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/3D724A839454BC5C4E0C3853C8401F67B9470D22B8A7362A0CD1D8078A312D4C',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/3D724A839454BC5C4E0C3853C8401F67B9470D22B8A7362A0CD1D8078A312D4C',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/7DA45E0636E1C8DCF2F35783B19204AB7220D8350866C62EEF454180C18ED0B7',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/7DA45E0636E1C8DCF2F35783B19204AB7220D8350866C62EEF454180C18ED0B7',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/ECB3ACA0D1E960C2A82A05265B380B5EB9FE2D52B4EC0ACD4281E83A054680BC',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/ECB3ACA0D1E960C2A82A05265B380B5EB9FE2D52B4EC0ACD4281E83A054680BC',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/2A5BFEB7CEC7BA4751A8967D842AA09E5C26CAEB26EB58D12847B2C9753AE6BB',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/2A5BFEB7CEC7BA4751A8967D842AA09E5C26CAEB26EB58D12847B2C9753AE6BB',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/28B05115EC196C2A35C306D406DDF15C5FC428E725302DB261E3FE22F495C3AA',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/28B05115EC196C2A35C306D406DDF15C5FC428E725302DB261E3FE22F495C3AA',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/E9320C3641CCFD90EFD70BC65D6A6FCF514FEC05E5F93D6B177D4F16158DD12F',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/E9320C3641CCFD90EFD70BC65D6A6FCF514FEC05E5F93D6B177D4F16158DD12F',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/EAD5C972C1DAFB992568C2FE8FAB3F78126EEBF58A38199AA9A8727F1CE3F91C',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/EAD5C972C1DAFB992568C2FE8FAB3F78126EEBF58A38199AA9A8727F1CE3F91C',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/BDBABEF0765934CF3FBA904795658E4193F94E86A77F5E5198E99EEC3C95C5DC',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/BDBABEF0765934CF3FBA904795658E4193F94E86A77F5E5198E99EEC3C95C5DC',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/D05F749D067656BF382C4F2CF05A28C66A55479675D1F0AABAA936795FA4FE14',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/D05F749D067656BF382C4F2CF05A28C66A55479675D1F0AABAA936795FA4FE14',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/736C06F268D28993E6AAB397B104DC4BC7A2371A5795EB779383C9B93695C2AD',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/736C06F268D28993E6AAB397B104DC4BC7A2371A5795EB779383C9B93695C2AD',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/E9A0A27D37FC13ABAB20AD51E6B75FDF2ADEBA9D5C18C6566659EA453A816243',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/E9A0A27D37FC13ABAB20AD51E6B75FDF2ADEBA9D5C18C6566659EA453A816243',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/2E5C4ABF556CEA1B7347DCB743F64987A754F94ED830CFAD915E1676596BBF77',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/2E5C4ABF556CEA1B7347DCB743F64987A754F94ED830CFAD915E1676596BBF77',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/0397F7558E4AAD51E416BA2D262225B21A4017360FC9D86DEAADDE62BFCBD8F9',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/0397F7558E4AAD51E416BA2D262225B21A4017360FC9D86DEAADDE62BFCBD8F9',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/DAF5698153669355DE3FA4BBF114640BAC8B8A50AE65D0DD4F63F0F31FAFEC1D',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/DAF5698153669355DE3FA4BBF114640BAC8B8A50AE65D0DD4F63F0F31FAFEC1D',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/76A7C96081802A042F834E12FF2F7B4CC7503AA30932F366DC9821219A68490E',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/76A7C96081802A042F834E12FF2F7B4CC7503AA30932F366DC9821219A68490E',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/1AB51B4CD388D678153A0C3022CC2690C317756F1D17386DB0E5524EA91FA9E8',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/1AB51B4CD388D678153A0C3022CC2690C317756F1D17386DB0E5524EA91FA9E8',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C10CDCEB069B22EA324241050141E75E340BC54D5EC5685C34C31AA53D8A0D32',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C10CDCEB069B22EA324241050141E75E340BC54D5EC5685C34C31AA53D8A0D32',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/8CC9D62E8CE46492A80137B9C77EB2BFA27746B9BDFD22601C67166DBA1D9DC3',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/8CC9D62E8CE46492A80137B9C77EB2BFA27746B9BDFD22601C67166DBA1D9DC3',
      name: 'USDY Yield LP',
      display: 'lp:31:usdy',
      symbol: 'USDY-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-155'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/C0C08176342444D384304BF3EAD727E022838992B4131156D122A6FA1C5440A4',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/C0C08176342444D384304BF3EAD727E022838992B4131156D122A6FA1C5440A4',
      name: 'USDY Boost LP',
      display: 'lp:32:usdyypt-usdc',
      symbol: 'USDY-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'lp:32:ausdyypt-uusdc',
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
      type_asset: 'sdk.coin',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/0BAF18A6E6D2F9886005DC2C365E142074DF47094FB1E621ED3089BD8B02D15B',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/0BAF18A6E6D2F9886005DC2C365E142074DF47094FB1E621ED3089BD8B02D15B',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primary_color_hex: '#10a7ef'
          }
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://x.com/SentinelDVPN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-96',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-165'
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
      description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
      denom_units: [{
          denom: 'ibc/53F0D1647EB6153E1C1D98A9134D4CD8503FC5C4406D6776A9E5086E00FBA268',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/53F0D1647EB6153E1C1D98A9134D4CD8503FC5C4406D6776A9E5086E00FBA268',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      coingecko_id: 'xion-2',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        website: 'https://xion.burnt.com/',
        twitter: 'https://twitter.com/burnt_xion'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uxion',
            chain_name: 'xion'
          },
          chain: {
            channel_id: 'channel-161'
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
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
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
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
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
    