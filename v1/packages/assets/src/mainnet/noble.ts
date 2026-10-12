import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'noble',
  assets: [
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/C02E01BB12C9DA857695CD8C63D5FE5F9B4E8BDEF39C22A36A3DEB73A997141C',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C02E01BB12C9DA857695CD8C63D5FE5F9B4E8BDEF39C22A36A3DEB73A997141C',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        x: 'https://x.com/namada'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-136',
            path: 'transfer/channel-136/unam'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/3C01172339ABAE4EAF1EB56FE9A69B7C818601FF9252E7DD633C14B165113C6B',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/3C01172339ABAE4EAF1EB56FE9A69B7C818601FF9252E7DD633C14B165113C6B',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-21',
            path: 'transfer/channel-21/ubld'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/AE11EEF6A1995EDE7A2F6732BF5C4F79731CB0F8D4ED7716F76D0028540964FF',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/AE11EEF6A1995EDE7A2F6732BF5C4F79731CB0F8D4ED7716F76D0028540964FF',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-21',
            path: 'transfer/channel-21/uist'
          }
        }]
    },
    {
      description: 'The native token of the Amitis Network. AMTS powers the cooperative Layer 1 blockchain that returns 80% of transaction fees to users.',
      type_asset: 'sdk.coin',
      denom_units: [{
          denom: 'ibc/87D96C2C18BC0BAECE373C44657687D10B3813B31EE0B32004034719934B33CA',
          exponent: 0,
          aliases: ['uamts']
        }, {
          denom: 'amts',
          exponent: 6
        }],
      base: 'ibc/87D96C2C18BC0BAECE373C44657687D10B3813B31EE0B32004034719934B33CA',
      name: 'Amitis',
      display: 'amts',
      symbol: 'AMTS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
        }],
      keywords: [
        'native',
        'fee-rebate',
        'cooperative'
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uamts',
            chain_name: 'amitis'
          },
          chain: {
            channel_id: 'channel-635',
            path: 'transfer/channel-635/uamts'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/E0B5D7EFB3548A248615A599DCF8A2EC59AAA096B3C8476E5B61D0A64EE4DB50',
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
      base: 'ibc/E0B5D7EFB3548A248615A599DCF8A2EC59AAA096B3C8476E5B61D0A64EE4DB50',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        x: 'https://x.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-29',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/aarch'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/7F6E6511003DBC592D3BAB0F05C8963ADC49D99A3E2295A680902B6B781CCF35',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/7F6E6511003DBC592D3BAB0F05C8963ADC49D99A3E2295A680902B6B781CCF35',
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
            channel_id: 'channel-29',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/B20E274EE534A7EFCF269FE302EDCBC5DFD9144673B3B03BE1067085FFFFC3BE',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/B20E274EE534A7EFCF269FE302EDCBC5DFD9144673B3B03BE1067085FFFFC3BE',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-41',
            path: 'transfer/channel-41/uaura'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/0C817F0C77FAE08034E5354D1BDEF1672104ECC3E5B1B8811A580290A4A80614',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/0C817F0C77FAE08034E5354D1BDEF1672104ECC3E5B1B8811A580290A4A80614',
      name: 'BABY',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      coingecko_id: 'babylon',
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        x: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-132',
            path: 'transfer/channel-132/ubbn'
          }
        }]
    },
    {
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/013AE50CCCE7DC02463EE602010A0F25C8405F39D7CB3BB4E944DCF2213C18AF',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/013AE50CCCE7DC02463EE602010A0F25C8405F39D7CB3BB4E944DCF2213C18AF',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        x: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/ubze'
          }
        }]
    },
    {
      description: '$BADGE is the native in-app token for BitBadges.',
      denom_units: [{
          denom: 'ibc/7AC51F7240CF2A49D18F5DACC4DC66B932B82E11D871754174115860499E3D75',
          exponent: 0,
          aliases: ['ubadge']
        }, {
          denom: 'badge',
          exponent: 9
        }],
      base: 'ibc/7AC51F7240CF2A49D18F5DACC4DC66B932B82E11D871754174115860499E3D75',
      name: 'BitBadges',
      display: 'badge',
      symbol: 'BADGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        x: 'https://x.com/bitbadges_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubadge',
            chain_name: 'bitbadges'
          },
          chain: {
            channel_id: 'channel-158',
            path: 'transfer/channel-158/ubadge'
          }
        }]
    },
    {
      description: 'The native token of Bitway.',
      denom_units: [{
          denom: 'ibc/196CFA568DDE4A9CE3D617057D82A0280AF5D4AA3E219784B5694910EF476ABB',
          exponent: 0,
          aliases: ['ubtw']
        }, {
          denom: 'btw',
          exponent: 6
        }],
      base: 'ibc/196CFA568DDE4A9CE3D617057D82A0280AF5D4AA3E219784B5694910EF476ABB',
      name: 'Bitway native token',
      display: 'btw',
      symbol: 'BTW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
        }],
      socials: {
        website: 'https://bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ubtw',
            chain_name: 'bitway'
          },
          chain: {
            channel_id: 'channel-172',
            path: 'transfer/channel-172/ubtw'
          }
        }]
    },
    {
      description: 'The native token of TX',
      denom_units: [{
          denom: 'ibc/1B229CD41D9F3787A48B822DE2E963E8F7BEADEF28AE45941940E2406A6D596F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'tx',
          exponent: 6
        }],
      base: 'ibc/1B229CD41D9F3787A48B822DE2E963E8F7BEADEF28AE45941940E2406A6D596F',
      name: 'TX',
      display: 'tx',
      symbol: 'TX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
      },
      coingecko_id: 'tx',
      keywords: [
        'L1',
        'RWA',
        'RWA Protocol',
        'RWA Marketplace',
        'tokenization'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
        }],
      socials: {
        website: 'https://tx.org/',
        x: 'https://x.com/txEcosystem'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ucore'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/8921861E2422AFE6F21B3D57173BEC563237BC9310FDC705FF9777D5F987D9B9',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/8921861E2422AFE6F21B3D57173BEC563237BC9310FDC705FF9777D5F987D9B9',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/8ADEBDB5BFBF76FCE0B510BE4139BE001FEFCAEEC736CA7234E97F9A67E09DD6',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/8ADEBDB5BFBF76FCE0B510BE4139BE001FEFCAEEC736CA7234E97F9A67E09DD6',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9'
          }
        }]
    },
    {
      description: 'Rewards token designed to incentivize participation in Coreum Community DAO',
      denom_units: [{
          denom: 'ibc/5D05ABD0EFAA3DE9E1DEA87DC1E8EECEBEBF692198E4135C5DB4457CC7104475',
          exponent: 0,
          aliases: ['uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv']
        }, {
          denom: 'ccd',
          exponent: 6
        }],
      base: 'ibc/5D05ABD0EFAA3DE9E1DEA87DC1E8EECEBEBF692198E4135C5DB4457CC7104475',
      name: 'Coreum Community DAO Token',
      display: 'ccd',
      symbol: 'CCD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
        }],
      socials: {
        website: 'https://coreumcommunitydao.com/',
        x: 'https://x.com/Cor3_Community'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv'
          }
        }]
    },
    {
      description: '$COREZ is the chillest coin on Coreum, built for stakers who believe slow and steady wins the race.',
      denom_units: [{
          denom: 'ibc/1A7420A14B9A568EDCEBB4D3DAF850529555ADB88596DCB9A6E0F1748869766F',
          exponent: 0,
          aliases: ['ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23']
        }, {
          denom: 'COREZ',
          exponent: 6
        }],
      base: 'ibc/1A7420A14B9A568EDCEBB4D3DAF850529555ADB88596DCB9A6E0F1748869766F',
      name: 'COREZ',
      display: 'COREZ',
      symbol: 'COREZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.svg'
        }],
      socials: {
        website: 'https://coreezy.xyz',
        x: 'https://x.com/CoreezyVibes'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        x: 'https://x.com/cosmoshub',
        telegram: 'https://t.me/CosmosOG',
        discord: 'https://discord.com/invite/interchain',
        reddit: 'https://www.reddit.com/r/cosmosnetwork/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-536',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/uatom'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/A7304EE764FD4AAE4D81A75F0F396D3C2038F4BB8DA655ED2F8735F2F9F36295',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/A7304EE764FD4AAE4D81A75F0F396D3C2038F4BB8DA655ED2F8735F2F9F36295',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/ucre'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/077B9B56E6EFA247E88E6E0BEC3810E6654481D350609C055AD2B1B12EE85C55',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/077B9B56E6EFA247E88E6E0BEC3810E6654481D350609C055AD2B1B12EE85C55',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/ubcre'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/D45B6BDB791870F38781721956A71405AEC0C0B2B7F56C8693A8D80B36B5473D',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/D45B6BDB791870F38781721956A71405AEC0C0B2B7F56C8693A8D80B36B5473D',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-94',
            path: 'transfer/channel-94/peaka'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/BB84F86E86047879CF9D8D8929D771D1D1CF1C98C8171BEE7B9DB32ABF35C0AD',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/BB84F86E86047879CF9D8D8929D771D1D1CF1C98C8171BEE7B9DB32ABF35C0AD',
      name: 'Dragon Coin',
      display: 'DGN',
      coingecko_id: 'dragon-coin-2',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://dungeongames.io',
        x: 'https://x.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5307',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-150',
            path: 'transfer/channel-150/udgn'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/DBC1802D65B51FCD3C82A84415F54254CC8233A13644421F85128DC500248ECD',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/DBC1802D65B51FCD3C82A84415F54254CC8233A13644421F85128DC500248ECD',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        x: 'https://x.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-33',
            path: 'transfer/channel-33/adydx'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/079EF4321138241B91C926627ACFFE98B538F93463F3845486191A98A61198FA',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/079EF4321138241B91C926627ACFFE98B538F93463F3845486191A98A61198FA',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        x: 'https://x.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-62',
            path: 'transfer/channel-62/adym'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/56491B1C481B1849911D59DBE464FC689B48E356787E59579F2D65731F1F7022',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/56491B1C481B1849911D59DBE464FC689B48E356787E59579F2D65731F1F7022',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
        }],
      keywords: ['gaming', 'staking'],
      socials: {
        x: 'https://x.com/furyachain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/ufury'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/0E4647411AB1261E0C82F213536B9CFAE488B2E44CE0C6830D2190558AE57EEF',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/0E4647411AB1261E0C82F213536B9CFAE488B2E44CE0C6830D2190558AE57EEF',
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
        x: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/aISLM'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/55EEB5EF5A085FF51ED02705A0C3224E2FFC40141A9A85BA5BF25EE53D3BD550',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/55EEB5EF5A085FF51ED02705A0C3224E2FFC40141A9A85BA5BF25EE53D3BD550',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      socials: {
        website: 'https://deenar.com',
        x: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'HAQQ is the ecosystem token of the Haqq ecosystem',
      denom_units: [{
          denom: 'ibc/40040BDFA5530DD0543FB55BDF2EEF1985922F4456E51B06381DC00F861E353E',
          exponent: 0,
          aliases: ['aHAQQ']
        }, {
          denom: 'HAQQ',
          exponent: 18
        }],
      base: 'ibc/40040BDFA5530DD0543FB55BDF2EEF1985922F4456E51B06381DC00F861E353E',
      name: 'HAQQ Token',
      display: 'HAQQ',
      address: '0x3af1695e3354Ec35F892b3d0880D4f7E12F4A172',
      symbol: 'HAQQ',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
      },
      socials: {
        website: 'https://ethiq.network',
        x: 'https://x.com/The_HaqqNetwork'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aHAQQ',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/aHAQQ'
          }
        }]
    },
    {
      description: 'The native staking, governance and gas token of HyveChain.',
      denom_units: [{
          denom: 'ibc/5EA0E2EF9B29E97C07036707635A1CEBE22B757097CE4E59AD5D0840E90F3135',
          exponent: 0,
          aliases: ['ahyve']
        }, {
          denom: 'HYVE',
          exponent: 18
        }],
      base: 'ibc/5EA0E2EF9B29E97C07036707635A1CEBE22B757097CE4E59AD5D0840E90F3135',
      name: 'Hyve',
      display: 'HYVE',
      symbol: 'HYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
        }],
      socials: {
        website: 'https://hyvechain.com'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ahyve',
            chain_name: 'hyve'
          },
          chain: {
            channel_id: 'channel-610',
            path: 'transfer/channel-610/ahyve'
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
      denom_units: [{
          denom: 'ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/uixo'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/C13664951326AE95004297843B30BA98FAB102B8F6904A68C03576D1812D1D72',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/C13664951326AE95004297843B30BA98FAB102B8F6904A68C03576D1812D1D72',
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
      socials: {
        website: 'https://injective.com/',
        x: 'https://x.com/Injective',
        telegram: 'https://t.me/joininjective',
        discord: 'https://discord.com/invite/injective',
        reddit: 'https://www.reddit.com/r/injective/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/5D69916A9B575E04FB2CFFBDC6527D869A02AE6537F6DC149B5679CEACDB671A',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/5D69916A9B575E04FB2CFFBDC6527D869A02AE6537F6DC149B5679CEACDB671A',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/DDBB01967FED93BBB2E848F078073969099D1E09441B0F720AC8FBC51A0DD9B0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/DDBB01967FED93BBB2E848F078073969099D1E09441B0F720AC8FBC51A0DD9B0',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/93AC6562CAA08F16FACD5E410FF043F9B8C67AA745DA6DC46D0467D3C5C8F75C',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/93AC6562CAA08F16FACD5E410FF043F9B8C67AA745DA6DC46D0467D3C5C8F75C',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C1F1EA789CFBF03664072FAD40E14975FB62B04E3612BEB4CC96E89ACA701200',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/C1F1EA789CFBF03664072FAD40E14975FB62B04E3612BEB4CC96E89ACA701200',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/9DFB13FAE13D191678FA1E1C9CAB4984A1FEE20EA1609FADE629C055FE543D57',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/9DFB13FAE13D191678FA1E1C9CAB4984A1FEE20EA1609FADE629C055FE543D57',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F0FB4B38AEBEF7DCBFD75691888F32E5DD7B91DB0BFA8CE6268D0407963EE297',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/F0FB4B38AEBEF7DCBFD75691888F32E5DD7B91DB0BFA8CE6268D0407963EE297',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2B2DCB8171CA90E7730985C9D88AB58D918426F41E857C555050A14FDA066B1F',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2B2DCB8171CA90E7730985C9D88AB58D918426F41E857C555050A14FDA066B1F',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/65EA348F02942489EDA268CF050DBD03F1842C97C60DB2F598F54CAAFC90FF0F',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/65EA348F02942489EDA268CF050DBD03F1842C97C60DB2F598F54CAAFC90FF0F',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg'
        }],
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        x: 'https://x.com/joltify_finance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-81',
            path: 'transfer/channel-81/ujolt'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        x: 'https://x.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-224',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-3',
            path: 'transfer/channel-3/ujuno'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/348171100CAD3F034526085EAA764D6CA1C1C0D6DD4BA50490C962263FCC27CB',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/348171100CAD3F034526085EAA764D6CA1C1C0D6DD4BA50490C962263FCC27CB',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        x: 'https://x.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/ukava'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/FE8B677FE6D8E8BF4DF59CD89F3393313707837796F732EF9265B027F1CF32BD',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/FE8B677FE6D8E8BF4DF59CD89F3393313707837796F732EF9265B027F1CF32BD',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/hard'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/5C2796FC34F983B1B01CD89EDF5A7BF110AF18A7DE65D692BF32369870E2D19D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/5C2796FC34F983B1B01CD89EDF5A7BF110AF18A7DE65D692BF32369870E2D19D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/swp'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/0F60C7463F870F1B98CB39A2C764020F813BF3BE5A53939D23DDCB0637BC704A',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/0F60C7463F870F1B98CB39A2C764020F813BF3BE5A53939D23DDCB0637BC704A',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/usdx'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/96675A2C89AFB75C624A0A5226A883836A608593D6A278ECFEF3A08413F7FA97',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/96675A2C89AFB75C624A0A5226A883836A608593D6A278ECFEF3A08413F7FA97',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/erc20/tether/usdt'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/E8DE832D1BBC6937D620DE6B03983849AC5740E6CA0A78437228714948212FEC',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/E8DE832D1BBC6937D620DE6B03983849AC5740E6CA0A78437228714948212FEC',
      name: 'XKP',
      display: 'XKP',
      symbol: 'XKP',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'staking',
        'automations'
      ],
      socials: {
        website: 'https://kopi.money/',
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ukopi'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/E74E767B0313316F860EB6F97C2D2AE33BE2692CB208B498375A8902A1C20147',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/E74E767B0313316F860EB6F97C2D2AE33BE2692CB208B498375A8902A1C20147',
      name: 'ckUSD',
      display: 'ckUSD',
      symbol: 'CKUSD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
        }],
      keywords: ['dex', 'mm'],
      socials: {
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uckusd'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/74CD35E0F3A4830EBFB0F182857F0EF0F5669C31FBFD0F6873FFE7BF75827338',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/74CD35E0F3A4830EBFB0F182857F0EF0F5669C31FBFD0F6873FFE7BF75827338',
      name: 'cUSDC',
      display: 'cUSDC',
      symbol: 'CUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ucusdc'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/559507EDB0A8014AF0FBE7679134EEBC5997AFE9429AD50CE8F3344BE7B66285',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/559507EDB0A8014AF0FBE7679134EEBC5997AFE9429AD50CE8F3344BE7B66285',
      name: 'cUSDT.inj',
      display: 'cUSDT.inj',
      symbol: 'cUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ucusdtinj'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/58EF1962961A804CC8DA69B3B414AC3BB8AF1D8F43443590D399AE6D40C37913',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/58EF1962961A804CC8DA69B3B414AC3BB8AF1D8F43443590D399AE6D40C37913',
      name: 'asUSDT.inj',
      display: 'asusdtinj',
      symbol: 'asUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uasusdtinj'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/C84F207872DD04FDE6840BADB87A46EACDFF4303F7D1C7CC8672EEE447417680',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/C84F207872DD04FDE6840BADB87A46EACDFF4303F7D1C7CC8672EEE447417680',
      name: 'asUSDC',
      display: 'asUSDC',
      symbol: 'ASUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uasusdc'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/D78D2139CE19A59D2EB05B38B6E5BC9BAC6B31058291B3613F84529140A451CC',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/D78D2139CE19A59D2EB05B38B6E5BC9BAC6B31058291B3613F84529140A451CC',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        x: 'https://x.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/ukuji'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/73982CE9E59A59330E68602337E178E6B1044B97AEC5EDF46AA159A386B50E6C',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/73982CE9E59A59330E68602337E178E6B1044B97AEC5EDF46AA159A386B50E6C',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
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
        x: 'https://x.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-105',
            path: 'transfer/channel-105/ulava'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/705FC684E370DE5FC56FD8349FA6D9B73CE4CD3DA8B8C158E37DCA5747583E09',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/705FC684E370DE5FC56FD8349FA6D9B73CE4CD3DA8B8C158E37DCA5747583E09',
      name: 'MANTRA Chain',
      display: 'mantra',
      symbol: 'MANTRA',
      coingecko_id: 'mantra',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'amantra',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-101',
            path: 'transfer/channel-101/amantra'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Chain used as the gas token on NVNM Chain.',
      denom_units: [{
          denom: 'ibc/1D0A10C563E6F5C429E80C95B1E71FF6928D375BD98400299507D0F3A7463FD2',
          exponent: 0,
          aliases: ['erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
      base: 'ibc/1D0A10C563E6F5C429E80C95B1E71FF6928D375BD98400299507D0F3A7463FD2',
      name: 'Wrapped mantraUSD',
      display: 'wmantrausd',
      symbol: 'wmantraUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-101',
            path: 'transfer/channel-101/erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/825CBB2F938AC6E79D69EED47E82FA85C190BA4A2888E3979F2245ECE4C1ECB2',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/825CBB2F938AC6E79D69EED47E82FA85C190BA4A2888E3979F2245ECE4C1ECB2',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-60',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-14',
            path: 'transfer/channel-14/uwhale'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
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
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        x: 'https://x.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/untrn'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv'
          }
        }]
    },
    {
      name: 'Nibiru',
      description: 'The native token of Nibiru blockchain',
      socials: {
        website: 'https://nibiru.fi',
        x: 'https://x.com/nibiruchain'
      },
      denom_units: [
        {
          denom: 'ibc/A77035AF12BBB11C0340BE804798C4B49F5332EA8C7523F471850C202C0742C5',
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
      base: 'ibc/A77035AF12BBB11C0340BE804798C4B49F5332EA8C7523F471850C202C0742C5',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingecko_id: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'unibi',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/unibi'
          }
        }]
    },
    {
      name: 'uoprek',
      description: 'uoprek',
      denom_units: [{
          denom: 'ibc/2F6E2A3510C2600C770434FB09A8DC64CCCC5F261A6CDA208593BB94A5AF0FF7',
          exponent: 0,
          aliases: ['tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek']
        }],
      base: 'ibc/2F6E2A3510C2600C770434FB09A8DC64CCCC5F261A6CDA208593BB94A5AF0FF7',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek'
          }
        }]
    },
    {
      name: 'utestate',
      description: 'utestate',
      denom_units: [{
          denom: 'ibc/CD12360DCE3B042C849D530727D5E7DCB924454E065C28733335801C6554048C',
          exponent: 0,
          aliases: ['tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate']
        }],
      base: 'ibc/CD12360DCE3B042C849D530727D5E7DCB924454E065C28733335801C6554048C',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate'
          }
        }]
    },
    {
      name: 'npp',
      description: 'npp',
      denom_units: [{
          denom: 'ibc/45CD3A0C3A7FC82161F2A1793745058F407FF241B152D274FA7E0984573C1495',
          exponent: 0,
          aliases: ['tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP']
        }],
      base: 'ibc/45CD3A0C3A7FC82161F2A1793745058F407FF241B152D274FA7E0984573C1495',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/3C01172339ABAE4EAF1EB56FE9A69B7C818601FF9252E7DD633C14B165113C6B',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/3C01172339ABAE4EAF1EB56FE9A69B7C818601FF9252E7DD633C14B165113C6B',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-21',
            path: 'transfer/channel-21/ubld'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/AE11EEF6A1995EDE7A2F6732BF5C4F79731CB0F8D4ED7716F76D0028540964FF',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/AE11EEF6A1995EDE7A2F6732BF5C4F79731CB0F8D4ED7716F76D0028540964FF',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-21',
            path: 'transfer/channel-21/uist'
          }
        }]
    },
    {
      description: 'The native token of the Amitis Network. AMTS powers the cooperative Layer 1 blockchain that returns 80% of transaction fees to users.',
      type_asset: 'sdk.coin',
      denom_units: [{
          denom: 'ibc/87D96C2C18BC0BAECE373C44657687D10B3813B31EE0B32004034719934B33CA',
          exponent: 0,
          aliases: ['uamts']
        }, {
          denom: 'amts',
          exponent: 6
        }],
      base: 'ibc/87D96C2C18BC0BAECE373C44657687D10B3813B31EE0B32004034719934B33CA',
      name: 'Amitis',
      display: 'amts',
      symbol: 'AMTS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
        }],
      keywords: [
        'native',
        'fee-rebate',
        'cooperative'
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uamts',
            chain_name: 'amitis'
          },
          chain: {
            channel_id: 'channel-635',
            path: 'transfer/channel-635/uamts'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/E0B5D7EFB3548A248615A599DCF8A2EC59AAA096B3C8476E5B61D0A64EE4DB50',
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
      base: 'ibc/E0B5D7EFB3548A248615A599DCF8A2EC59AAA096B3C8476E5B61D0A64EE4DB50',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        x: 'https://x.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-29',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/aarch'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/7F6E6511003DBC592D3BAB0F05C8963ADC49D99A3E2295A680902B6B781CCF35',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/7F6E6511003DBC592D3BAB0F05C8963ADC49D99A3E2295A680902B6B781CCF35',
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
            channel_id: 'channel-29',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/B20E274EE534A7EFCF269FE302EDCBC5DFD9144673B3B03BE1067085FFFFC3BE',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/B20E274EE534A7EFCF269FE302EDCBC5DFD9144673B3B03BE1067085FFFFC3BE',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-41',
            path: 'transfer/channel-41/uaura'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/0C817F0C77FAE08034E5354D1BDEF1672104ECC3E5B1B8811A580290A4A80614',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/0C817F0C77FAE08034E5354D1BDEF1672104ECC3E5B1B8811A580290A4A80614',
      name: 'BABY',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      coingecko_id: 'babylon',
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        x: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-132',
            path: 'transfer/channel-132/ubbn'
          }
        }]
    },
    {
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/013AE50CCCE7DC02463EE602010A0F25C8405F39D7CB3BB4E944DCF2213C18AF',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/013AE50CCCE7DC02463EE602010A0F25C8405F39D7CB3BB4E944DCF2213C18AF',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        x: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/ubze'
          }
        }]
    },
    {
      description: '$BADGE is the native in-app token for BitBadges.',
      denom_units: [{
          denom: 'ibc/7AC51F7240CF2A49D18F5DACC4DC66B932B82E11D871754174115860499E3D75',
          exponent: 0,
          aliases: ['ubadge']
        }, {
          denom: 'badge',
          exponent: 9
        }],
      base: 'ibc/7AC51F7240CF2A49D18F5DACC4DC66B932B82E11D871754174115860499E3D75',
      name: 'BitBadges',
      display: 'badge',
      symbol: 'BADGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        x: 'https://x.com/bitbadges_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubadge',
            chain_name: 'bitbadges'
          },
          chain: {
            channel_id: 'channel-158',
            path: 'transfer/channel-158/ubadge'
          }
        }]
    },
    {
      description: 'The native token of Bitway.',
      denom_units: [{
          denom: 'ibc/196CFA568DDE4A9CE3D617057D82A0280AF5D4AA3E219784B5694910EF476ABB',
          exponent: 0,
          aliases: ['ubtw']
        }, {
          denom: 'btw',
          exponent: 6
        }],
      base: 'ibc/196CFA568DDE4A9CE3D617057D82A0280AF5D4AA3E219784B5694910EF476ABB',
      name: 'Bitway native token',
      display: 'btw',
      symbol: 'BTW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
        }],
      socials: {
        website: 'https://bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ubtw',
            chain_name: 'bitway'
          },
          chain: {
            channel_id: 'channel-172',
            path: 'transfer/channel-172/ubtw'
          }
        }]
    },
    {
      description: 'The native token of TX',
      denom_units: [{
          denom: 'ibc/1B229CD41D9F3787A48B822DE2E963E8F7BEADEF28AE45941940E2406A6D596F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'tx',
          exponent: 6
        }],
      base: 'ibc/1B229CD41D9F3787A48B822DE2E963E8F7BEADEF28AE45941940E2406A6D596F',
      name: 'TX',
      display: 'tx',
      symbol: 'TX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
      },
      coingecko_id: 'tx',
      keywords: [
        'L1',
        'RWA',
        'RWA Protocol',
        'RWA Marketplace',
        'tokenization'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
        }],
      socials: {
        website: 'https://tx.org/',
        x: 'https://x.com/txEcosystem'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ucore'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/8921861E2422AFE6F21B3D57173BEC563237BC9310FDC705FF9777D5F987D9B9',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/8921861E2422AFE6F21B3D57173BEC563237BC9310FDC705FF9777D5F987D9B9',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/8ADEBDB5BFBF76FCE0B510BE4139BE001FEFCAEEC736CA7234E97F9A67E09DD6',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/8ADEBDB5BFBF76FCE0B510BE4139BE001FEFCAEEC736CA7234E97F9A67E09DD6',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9'
          }
        }]
    },
    {
      description: 'Rewards token designed to incentivize participation in Coreum Community DAO',
      denom_units: [{
          denom: 'ibc/5D05ABD0EFAA3DE9E1DEA87DC1E8EECEBEBF692198E4135C5DB4457CC7104475',
          exponent: 0,
          aliases: ['uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv']
        }, {
          denom: 'ccd',
          exponent: 6
        }],
      base: 'ibc/5D05ABD0EFAA3DE9E1DEA87DC1E8EECEBEBF692198E4135C5DB4457CC7104475',
      name: 'Coreum Community DAO Token',
      display: 'ccd',
      symbol: 'CCD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
        }],
      socials: {
        website: 'https://coreumcommunitydao.com/',
        x: 'https://x.com/Cor3_Community'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv'
          }
        }]
    },
    {
      description: '$COREZ is the chillest coin on Coreum, built for stakers who believe slow and steady wins the race.',
      denom_units: [{
          denom: 'ibc/1A7420A14B9A568EDCEBB4D3DAF850529555ADB88596DCB9A6E0F1748869766F',
          exponent: 0,
          aliases: ['ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23']
        }, {
          denom: 'COREZ',
          exponent: 6
        }],
      base: 'ibc/1A7420A14B9A568EDCEBB4D3DAF850529555ADB88596DCB9A6E0F1748869766F',
      name: 'COREZ',
      display: 'COREZ',
      symbol: 'COREZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/corez.svg'
        }],
      socials: {
        website: 'https://coreezy.xyz',
        x: 'https://x.com/CoreezyVibes'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/ucorez-core1astd8pqhs7mslk9rnygy9kzc5s2cqnwftcvmquxr7z9z78szzvzqljlc23'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        x: 'https://x.com/cosmoshub',
        telegram: 'https://t.me/CosmosOG',
        discord: 'https://discord.com/invite/interchain',
        reddit: 'https://www.reddit.com/r/cosmosnetwork/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-536',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/uatom'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/A7304EE764FD4AAE4D81A75F0F396D3C2038F4BB8DA655ED2F8735F2F9F36295',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/A7304EE764FD4AAE4D81A75F0F396D3C2038F4BB8DA655ED2F8735F2F9F36295',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/ucre'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/077B9B56E6EFA247E88E6E0BEC3810E6654481D350609C055AD2B1B12EE85C55',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/077B9B56E6EFA247E88E6E0BEC3810E6654481D350609C055AD2B1B12EE85C55',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/ubcre'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/D45B6BDB791870F38781721956A71405AEC0C0B2B7F56C8693A8D80B36B5473D',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/D45B6BDB791870F38781721956A71405AEC0C0B2B7F56C8693A8D80B36B5473D',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-94',
            path: 'transfer/channel-94/peaka'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/BB84F86E86047879CF9D8D8929D771D1D1CF1C98C8171BEE7B9DB32ABF35C0AD',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/BB84F86E86047879CF9D8D8929D771D1D1CF1C98C8171BEE7B9DB32ABF35C0AD',
      name: 'Dragon Coin',
      display: 'DGN',
      coingecko_id: 'dragon-coin-2',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://dungeongames.io',
        x: 'https://x.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5307',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-150',
            path: 'transfer/channel-150/udgn'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/DBC1802D65B51FCD3C82A84415F54254CC8233A13644421F85128DC500248ECD',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/DBC1802D65B51FCD3C82A84415F54254CC8233A13644421F85128DC500248ECD',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        x: 'https://x.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-33',
            path: 'transfer/channel-33/adydx'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/079EF4321138241B91C926627ACFFE98B538F93463F3845486191A98A61198FA',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/079EF4321138241B91C926627ACFFE98B538F93463F3845486191A98A61198FA',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        x: 'https://x.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-62',
            path: 'transfer/channel-62/adym'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/56491B1C481B1849911D59DBE464FC689B48E356787E59579F2D65731F1F7022',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/56491B1C481B1849911D59DBE464FC689B48E356787E59579F2D65731F1F7022',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
        }],
      keywords: ['gaming', 'staking'],
      socials: {
        x: 'https://x.com/furyachain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/ufury'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/0E4647411AB1261E0C82F213536B9CFAE488B2E44CE0C6830D2190558AE57EEF',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/0E4647411AB1261E0C82F213536B9CFAE488B2E44CE0C6830D2190558AE57EEF',
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
        x: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/aISLM'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/55EEB5EF5A085FF51ED02705A0C3224E2FFC40141A9A85BA5BF25EE53D3BD550',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/55EEB5EF5A085FF51ED02705A0C3224E2FFC40141A9A85BA5BF25EE53D3BD550',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      socials: {
        website: 'https://deenar.com',
        x: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'HAQQ is the ecosystem token of the Haqq ecosystem',
      denom_units: [{
          denom: 'ibc/40040BDFA5530DD0543FB55BDF2EEF1985922F4456E51B06381DC00F861E353E',
          exponent: 0,
          aliases: ['aHAQQ']
        }, {
          denom: 'HAQQ',
          exponent: 18
        }],
      base: 'ibc/40040BDFA5530DD0543FB55BDF2EEF1985922F4456E51B06381DC00F861E353E',
      name: 'HAQQ Token',
      display: 'HAQQ',
      address: '0x3af1695e3354Ec35F892b3d0880D4f7E12F4A172',
      symbol: 'HAQQ',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
      },
      socials: {
        website: 'https://ethiq.network',
        x: 'https://x.com/The_HaqqNetwork'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aHAQQ',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-32',
            path: 'transfer/channel-32/aHAQQ'
          }
        }]
    },
    {
      description: 'The native staking, governance and gas token of HyveChain.',
      denom_units: [{
          denom: 'ibc/5EA0E2EF9B29E97C07036707635A1CEBE22B757097CE4E59AD5D0840E90F3135',
          exponent: 0,
          aliases: ['ahyve']
        }, {
          denom: 'HYVE',
          exponent: 18
        }],
      base: 'ibc/5EA0E2EF9B29E97C07036707635A1CEBE22B757097CE4E59AD5D0840E90F3135',
      name: 'Hyve',
      display: 'HYVE',
      symbol: 'HYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
        }],
      socials: {
        website: 'https://hyvechain.com'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ahyve',
            chain_name: 'hyve'
          },
          chain: {
            channel_id: 'channel-610',
            path: 'transfer/channel-610/ahyve'
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
      denom_units: [{
          denom: 'ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/uixo'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/C13664951326AE95004297843B30BA98FAB102B8F6904A68C03576D1812D1D72',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/C13664951326AE95004297843B30BA98FAB102B8F6904A68C03576D1812D1D72',
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
      socials: {
        website: 'https://injective.com/',
        x: 'https://x.com/Injective',
        telegram: 'https://t.me/joininjective',
        discord: 'https://discord.com/invite/injective',
        reddit: 'https://www.reddit.com/r/injective/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/5D69916A9B575E04FB2CFFBDC6527D869A02AE6537F6DC149B5679CEACDB671A',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/5D69916A9B575E04FB2CFFBDC6527D869A02AE6537F6DC149B5679CEACDB671A',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/DDBB01967FED93BBB2E848F078073969099D1E09441B0F720AC8FBC51A0DD9B0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/DDBB01967FED93BBB2E848F078073969099D1E09441B0F720AC8FBC51A0DD9B0',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/93AC6562CAA08F16FACD5E410FF043F9B8C67AA745DA6DC46D0467D3C5C8F75C',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/93AC6562CAA08F16FACD5E410FF043F9B8C67AA745DA6DC46D0467D3C5C8F75C',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C1F1EA789CFBF03664072FAD40E14975FB62B04E3612BEB4CC96E89ACA701200',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/C1F1EA789CFBF03664072FAD40E14975FB62B04E3612BEB4CC96E89ACA701200',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/9DFB13FAE13D191678FA1E1C9CAB4984A1FEE20EA1609FADE629C055FE543D57',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/9DFB13FAE13D191678FA1E1C9CAB4984A1FEE20EA1609FADE629C055FE543D57',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F0FB4B38AEBEF7DCBFD75691888F32E5DD7B91DB0BFA8CE6268D0407963EE297',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/F0FB4B38AEBEF7DCBFD75691888F32E5DD7B91DB0BFA8CE6268D0407963EE297',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2B2DCB8171CA90E7730985C9D88AB58D918426F41E857C555050A14FDA066B1F',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2B2DCB8171CA90E7730985C9D88AB58D918426F41E857C555050A14FDA066B1F',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-148',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-31',
            path: 'transfer/channel-31/inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/65EA348F02942489EDA268CF050DBD03F1842C97C60DB2F598F54CAAFC90FF0F',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/65EA348F02942489EDA268CF050DBD03F1842C97C60DB2F598F54CAAFC90FF0F',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg'
        }],
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        x: 'https://x.com/joltify_finance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-81',
            path: 'transfer/channel-81/ujolt'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        x: 'https://x.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-224',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-3',
            path: 'transfer/channel-3/ujuno'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/348171100CAD3F034526085EAA764D6CA1C1C0D6DD4BA50490C962263FCC27CB',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/348171100CAD3F034526085EAA764D6CA1C1C0D6DD4BA50490C962263FCC27CB',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        x: 'https://x.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/ukava'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/FE8B677FE6D8E8BF4DF59CD89F3393313707837796F732EF9265B027F1CF32BD',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/FE8B677FE6D8E8BF4DF59CD89F3393313707837796F732EF9265B027F1CF32BD',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/hard'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/5C2796FC34F983B1B01CD89EDF5A7BF110AF18A7DE65D692BF32369870E2D19D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/5C2796FC34F983B1B01CD89EDF5A7BF110AF18A7DE65D692BF32369870E2D19D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/swp'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/0F60C7463F870F1B98CB39A2C764020F813BF3BE5A53939D23DDCB0637BC704A',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/0F60C7463F870F1B98CB39A2C764020F813BF3BE5A53939D23DDCB0637BC704A',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/usdx'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/96675A2C89AFB75C624A0A5226A883836A608593D6A278ECFEF3A08413F7FA97',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/96675A2C89AFB75C624A0A5226A883836A608593D6A278ECFEF3A08413F7FA97',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/erc20/tether/usdt'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/E8DE832D1BBC6937D620DE6B03983849AC5740E6CA0A78437228714948212FEC',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/E8DE832D1BBC6937D620DE6B03983849AC5740E6CA0A78437228714948212FEC',
      name: 'XKP',
      display: 'XKP',
      symbol: 'XKP',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'staking',
        'automations'
      ],
      socials: {
        website: 'https://kopi.money/',
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ukopi'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/E74E767B0313316F860EB6F97C2D2AE33BE2692CB208B498375A8902A1C20147',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/E74E767B0313316F860EB6F97C2D2AE33BE2692CB208B498375A8902A1C20147',
      name: 'ckUSD',
      display: 'ckUSD',
      symbol: 'CKUSD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
        }],
      keywords: ['dex', 'mm'],
      socials: {
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uckusd'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/74CD35E0F3A4830EBFB0F182857F0EF0F5669C31FBFD0F6873FFE7BF75827338',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/74CD35E0F3A4830EBFB0F182857F0EF0F5669C31FBFD0F6873FFE7BF75827338',
      name: 'cUSDC',
      display: 'cUSDC',
      symbol: 'CUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ucusdc'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/559507EDB0A8014AF0FBE7679134EEBC5997AFE9429AD50CE8F3344BE7B66285',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/559507EDB0A8014AF0FBE7679134EEBC5997AFE9429AD50CE8F3344BE7B66285',
      name: 'cUSDT.inj',
      display: 'cUSDT.inj',
      symbol: 'cUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/ucusdtinj'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/58EF1962961A804CC8DA69B3B414AC3BB8AF1D8F43443590D399AE6D40C37913',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/58EF1962961A804CC8DA69B3B414AC3BB8AF1D8F43443590D399AE6D40C37913',
      name: 'asUSDT.inj',
      display: 'asusdtinj',
      symbol: 'asUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uasusdtinj'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/C84F207872DD04FDE6840BADB87A46EACDFF4303F7D1C7CC8672EEE447417680',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/C84F207872DD04FDE6840BADB87A46EACDFF4303F7D1C7CC8672EEE447417680',
      name: 'asUSDC',
      display: 'asUSDC',
      symbol: 'ASUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/uasusdc'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/D78D2139CE19A59D2EB05B38B6E5BC9BAC6B31058291B3613F84529140A451CC',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/D78D2139CE19A59D2EB05B38B6E5BC9BAC6B31058291B3613F84529140A451CC',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        x: 'https://x.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/ukuji'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/73982CE9E59A59330E68602337E178E6B1044B97AEC5EDF46AA159A386B50E6C',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/73982CE9E59A59330E68602337E178E6B1044B97AEC5EDF46AA159A386B50E6C',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
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
        x: 'https://x.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-105',
            path: 'transfer/channel-105/ulava'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/705FC684E370DE5FC56FD8349FA6D9B73CE4CD3DA8B8C158E37DCA5747583E09',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/705FC684E370DE5FC56FD8349FA6D9B73CE4CD3DA8B8C158E37DCA5747583E09',
      name: 'MANTRA Chain',
      display: 'mantra',
      symbol: 'MANTRA',
      coingecko_id: 'mantra',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'amantra',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-101',
            path: 'transfer/channel-101/amantra'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Chain used as the gas token on NVNM Chain.',
      denom_units: [{
          denom: 'ibc/1D0A10C563E6F5C429E80C95B1E71FF6928D375BD98400299507D0F3A7463FD2',
          exponent: 0,
          aliases: ['erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
      base: 'ibc/1D0A10C563E6F5C429E80C95B1E71FF6928D375BD98400299507D0F3A7463FD2',
      name: 'Wrapped mantraUSD',
      display: 'wmantrausd',
      symbol: 'wmantraUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-101',
            path: 'transfer/channel-101/erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/825CBB2F938AC6E79D69EED47E82FA85C190BA4A2888E3979F2245ECE4C1ECB2',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/825CBB2F938AC6E79D69EED47E82FA85C190BA4A2888E3979F2245ECE4C1ECB2',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-60',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-14',
            path: 'transfer/channel-14/uwhale'
          }
        }]
    },
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/C02E01BB12C9DA857695CD8C63D5FE5F9B4E8BDEF39C22A36A3DEB73A997141C',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C02E01BB12C9DA857695CD8C63D5FE5F9B4E8BDEF39C22A36A3DEB73A997141C',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        x: 'https://x.com/namada'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-136',
            path: 'transfer/channel-136/unam'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
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
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        x: 'https://x.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/untrn'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv'
          }
        }]
    },
    {
      name: 'Nibiru',
      description: 'The native token of Nibiru blockchain',
      socials: {
        website: 'https://nibiru.fi',
        x: 'https://x.com/nibiruchain'
      },
      denom_units: [
        {
          denom: 'ibc/A77035AF12BBB11C0340BE804798C4B49F5332EA8C7523F471850C202C0742C5',
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
      base: 'ibc/A77035AF12BBB11C0340BE804798C4B49F5332EA8C7523F471850C202C0742C5',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingecko_id: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'unibi',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/unibi'
          }
        }]
    },
    {
      name: 'uoprek',
      description: 'uoprek',
      denom_units: [{
          denom: 'ibc/2F6E2A3510C2600C770434FB09A8DC64CCCC5F261A6CDA208593BB94A5AF0FF7',
          exponent: 0,
          aliases: ['tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek']
        }],
      base: 'ibc/2F6E2A3510C2600C770434FB09A8DC64CCCC5F261A6CDA208593BB94A5AF0FF7',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek'
          }
        }]
    },
    {
      name: 'utestate',
      description: 'utestate',
      denom_units: [{
          denom: 'ibc/CD12360DCE3B042C849D530727D5E7DCB924454E065C28733335801C6554048C',
          exponent: 0,
          aliases: ['tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate']
        }],
      base: 'ibc/CD12360DCE3B042C849D530727D5E7DCB924454E065C28733335801C6554048C',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate'
          }
        }]
    },
    {
      name: 'npp',
      description: 'npp',
      denom_units: [{
          denom: 'ibc/45CD3A0C3A7FC82161F2A1793745058F407FF241B152D274FA7E0984573C1495',
          exponent: 0,
          aliases: ['tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP']
        }],
      base: 'ibc/45CD3A0C3A7FC82161F2A1793745058F407FF241B152D274FA7E0984573C1495',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
            chain_name: 'nibiru'
          },
          chain: {
            channel_id: 'channel-67',
            path: 'transfer/channel-67/tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uosmo'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uion'
          }
        }]
    },
    {
      description: 'Paxi Network is a Layer 1, general-purpose decentralized blockchain designed for everyone.Built for speed, security, and scalability, it empowers individuals and communities to participate freely — anyone can become a validator and help secure the network.With native support for DeFi, DAOs, cross-chain interoperability, and dApps, Paxi makes blockchain simple, inclusive, and truly decentralized.Ultimately, Paxi aims to become a universal blockchain — hosting a vast ecosystem of dApps that seamlessly integrate into everyday life.',
      denom_units: [{
          denom: 'ibc/99BDB05C04DA3F606B4F0F6A5344F2D0078F614B2D1EA6ED5320E9CA52FE32F1',
          exponent: 0,
          aliases: ['upaxi']
        }, {
          denom: 'paxi',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/99BDB05C04DA3F606B4F0F6A5344F2D0078F614B2D1EA6ED5320E9CA52FE32F1',
      name: 'Paxi Network',
      display: 'paxi',
      symbol: 'PAXI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
          theme: {
            circle: false
          }
        }],
      keywords: [
        'staking',
        'layer1',
        'DAO'
      ],
      coingecko_id: 'paxi-network',
      socials: {
        website: 'https://paxinet.io',
        x: 'https://x.com/paxiweb3',
        telegram: 'https://t.me/paxi_network',
        discord: 'https://discord.gg/yxZRnxvrr5'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'upaxi',
            chain_name: 'paxi'
          },
          chain: {
            channel_id: 'channel-205',
            path: 'transfer/channel-205/upaxi'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/8B511C5792C4E0E3F8EF3CD02A9CB7CC2CB9931A4042A7B3A5D0F2DDD4EEED88',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/8B511C5792C4E0E3F8EF3CD02A9CB7CC2CB9931A4042A7B3A5D0F2DDD4EEED88',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        x: 'https://x.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-132',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-36',
            path: 'transfer/channel-36/uxprt'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/BE8141075AE7950E12CE1821638C8AB9C7FFDBAEC4205714EE8D4A08169271BD',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/BE8141075AE7950E12CE1821638C8AB9C7FFDBAEC4205714EE8D4A08169271BD',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }],
      socials: {
        website: 'https://planq.network',
        x: 'https://x.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/aplanq'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/2582AC072D9D80ED244FF78E8392AADA41AE01979A9310B96508BBA7A967197B',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/2582AC072D9D80ED244FF78E8392AADA41AE01979A9310B96508BBA7A967197B',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The token of Anubis.',
      denom_units: [{
          denom: 'ibc/8A2BB5AC98A30B057A3362E23FEF334BFAAADC7FCEAA0D96C17ABB0F2E1D7A18',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/8A2BB5AC98A30B057A3362E23FEF334BFAAADC7FCEAA0D96C17ABB0F2E1D7A18',
      name: 'Anubis',
      display: 'anubi',
      symbol: 'ANUBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
        }],
      socials: {
        x: 'https://x.com/Anubis_Phy'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/89D85DD0B3ABA269272C16C67ED5AC40C7FCEC6DF17917CD37BCB03D787F634C',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/89D85DD0B3ABA269272C16C67ED5AC40C7FCEC6DF17917CD37BCB03D787F634C',
      name: 'Astonic',
      display: 'astonic',
      symbol: 'ATC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/E4632DA01B3A9F5DD8B2D380E78730F857F80E182E1F7D6C03C13938F9B39FD5',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/E4632DA01B3A9F5DD8B2D380E78730F857F80E182E1F7D6C03C13938F9B39FD5',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro.',
      denom_units: [{
          denom: 'ibc/FC240BDEF19DF7125EDECA0BF92CBC4BA55A07B1B5F366D9E643A0E7486A9D37',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/FC240BDEF19DF7125EDECA0BF92CBC4BA55A07B1B5F366D9E643A0E7486A9D37',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real.',
      denom_units: [{
          denom: 'ibc/3295F7171FD9F302B2101755AB96EE45C5E3E6A633E60D627875DB8D34C21F9B',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/3295F7171FD9F302B2101755AB96EE45C5E3E6A633E60D627875DB8D34C21F9B',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/ADDA7F388EBD91BA9EBE1D996E28902738CED906CA4E8200549C3BF8CDF155A4',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'ibc/ADDA7F388EBD91BA9EBE1D996E28902738CED906CA4E8200549C3BF8CDF155A4',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }],
      type_asset: 'sdk.coin',
      coingecko_id: 'hash-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel_id: 'channel-20',
            path: 'transfer/channel-20/nhash'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/94A226B8B40465682AD3F4AB14BA19BC3B9AA7BD2D1C9BDB7871A7464F19CE82',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/94A226B8B40465682AD3F4AB14BA19BC3B9AA7BD2D1C9BDB7871A7464F19CE82',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }],
      socials: {
        website: 'https://www.regen.network/',
        x: 'https://x.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-165',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-83',
            path: 'transfer/channel-83/uregen'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/C15E5758621B9ECD61D6EE4A6B8E21238E9C8873539523F1A3A2921611A37767',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/C15E5758621B9ECD61D6EE4A6B8E21238E9C8873539523F1A3A2921611A37767',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-165',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-83',
            path: 'transfer/channel-83/eco.uC.NCT'
          }
        }]
    },
    {
      description: 'RIT is the native staking and governance token of RITBIT, the network that powers the Rubin Trade decentralized exchange.',
      denom_units: [{
          denom: 'ibc/2AD8B69F4CABF1118852564F8DFBAE83F46785AD8C80E0DB19106E70CB79C133',
          exponent: 0,
          aliases: ['urit']
        }, {
          denom: 'rit',
          exponent: 18
        }],
      base: 'ibc/2AD8B69F4CABF1118852564F8DFBAE83F46785AD8C80E0DB19106E70CB79C133',
      name: 'Rubin',
      display: 'rit',
      symbol: 'RIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'urit',
            chain_name: 'ritbit'
          },
          chain: {
            channel_id: 'channel-607',
            path: 'transfer/channel-607/urit'
          }
        }]
    },
    {
      description: 'The native staking, governance, and fee token of Safrochain, a mobile-first mobile-money-powered blockchain connecting mobile wallets to on-chain finance and interoperable digital rails.',
      denom_units: [{
          denom: 'ibc/416D906365215CB6641B38CCDAA01385AA4B20E5E8EF2D65702A1B3F383FBBA2',
          exponent: 0,
          aliases: ['usaf']
        }, {
          denom: 'saf',
          exponent: 6
        }],
      base: 'ibc/416D906365215CB6641B38CCDAA01385AA4B20E5E8EF2D65702A1B3F383FBBA2',
      name: 'Safrochain',
      display: 'saf',
      symbol: 'SAF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usaf',
            chain_name: 'safrochain'
          },
          chain: {
            channel_id: 'channel-581',
            path: 'transfer/channel-581/usaf'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/B7DFB783DD437306048703B818F81EB8C8ED06856DB9FD126EA7F2248907C1FF',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/B7DFB783DD437306048703B818F81EB8C8ED06856DB9FD126EA7F2248907C1FF',
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
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        x: 'https://x.com/Sagaxyz__'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-169',
            path: 'transfer/channel-169/usaga'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1B28CD5F3CDC17E585A7F2F05931FA694B3EFF0233D98CEF3505A35410D53CED',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1B28CD5F3CDC17E585A7F2F05931FA694B3EFF0233D98CEF3505A35410D53CED',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-88',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-17',
            path: 'transfer/channel-17/uscrt'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/61911671206AA9798E403274D78F3ED3CAD9CD66AD12255BF89824F640E9D24A',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/61911671206AA9798E403274D78F3ED3CAD9CD66AD12255BF89824F640E9D24A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }],
      socials: {
        website: 'https://www.sei.io/',
        x: 'https://x.com/SeiNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/usei'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/9F058162A280B51EA31256997963B1F93DF5BCF024C5B141606C605478691D3A',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/9F058162A280B51EA31256997963B1F93DF5BCF024C5B141606C605478691D3A',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [{
          denom: 'ibc/7A3DE0BD9545098B328261DFF34EFEBD6CAE2A7181D5116737A922BD43BAB8D1',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      base: 'ibc/7A3DE0BD9545098B328261DFF34EFEBD6CAE2A7181D5116737A922BD43BAB8D1',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png'
      },
      coingecko_id: 'shido-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png'
        }],
      socials: {
        website: 'https://shido.io/',
        x: 'https://x.com/ShidoGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'shido',
            chain_name: 'shido'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/shido'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/84B654AB6D8BF61EDAC7EFAAF36DB7E4BD7DE0219C6C7005D9CCAD0F9B6E33CA',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/84B654AB6D8BF61EDAC7EFAAF36DB7E4BD7DE0219C6C7005D9CCAD0F9B6E33CA',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
        }],
      socials: {
        website: 'https://side.one',
        x: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-123',
            path: 'transfer/channel-123/uside'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denom_units: [{
          denom: 'ibc/8CC07CEE6B2889BB018C2FA0AB8904931E21FE659F05C783B085A9F9A51248CA',
          exponent: 0,
          aliases: ['uvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'ibc/8CC07CEE6B2889BB018C2FA0AB8904931E21FE659F05C783B085A9F9A51248CA',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uvrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/uvrise'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network.',
      denom_units: [{
          denom: 'ibc/3895588D9C6B47E5B838E5ED3A64F7F728A1C41F0D97EE9E2F4817E46B445B38',
          exponent: 0,
          aliases: ['urise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'ibc/3895588D9C6B47E5B838E5ED3A64F7F728A1C41F0D97EE9E2F4817E46B445B38',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'urise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/urise'
          }
        }]
    },
    {
      description: 'The USD stable coin of the Sunrise network for fees.',
      denom_units: [{
          denom: 'ibc/66382B8DABAC0CBDC669E8D3551F26D123BB28CE0C73D3705A571F58E23DCE81',
          exponent: 0,
          aliases: ['uusdrise']
        }, {
          denom: 'usdrise',
          exponent: 6
        }],
      base: 'ibc/66382B8DABAC0CBDC669E8D3551F26D123BB28CE0C73D3705A571F58E23DCE81',
      name: 'Sunrise USDrise',
      display: 'usdrise',
      symbol: 'USDrise',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uusdrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/uusdrise'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/1810DC539AB32D3C33A66E19D8880072449D6699C9E1B58E8F88CBBDEBB31B96',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/1810DC539AB32D3C33A66E19D8880072449D6699C9E1B58E8F88CBBDEBB31B96',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-54',
            path: 'transfer/channel-54/utori'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/557F32AB960241677962D6A1AED510CFA6EB34FE8D3C17FCFB3A88CB27380087',
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
      base: 'ibc/557F32AB960241677962D6A1AED510CFA6EB34FE8D3C17FCFB3A88CB27380087',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uluna'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/916C9261968E4904C2D0F449BC5C853AE337A0D0E2FEDDD59202818BEFDE9EB4',
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
      base: 'ibc/916C9261968E4904C2D0F449BC5C853AE337A0D0E2FEDDD59202818BEFDE9EB4',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uusd'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F22F72821012AE6A929161001FF0353EF146C4998558C4B7FA934E8A91172658',
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
      base: 'ibc/F22F72821012AE6A929161001FF0353EF146C4998558C4B7FA934E8A91172658',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ukrw'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B4D51BEC0B8411F6134D5383281CF9D608236FFE2129701265C5805F24A35041',
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
      base: 'ibc/B4D51BEC0B8411F6134D5383281CF9D608236FFE2129701265C5805F24A35041',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uaud'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/66060A8D9D739BDF54C15EC7B7DC30BC699882DB6A84433F7654BD8D48713864',
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
      base: 'ibc/66060A8D9D739BDF54C15EC7B7DC30BC699882DB6A84433F7654BD8D48713864',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ucad'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D532CF77B36211E6EC31F678B141E3631699DDCFF92B45DE0633155A17039643',
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
      base: 'ibc/D532CF77B36211E6EC31F678B141E3631699DDCFF92B45DE0633155A17039643',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uchf'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8FD1860025A1601E79CE64760EA42DE83193DAC2E862164EA18FC7C378FA462B',
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
      base: 'ibc/8FD1860025A1601E79CE64760EA42DE83193DAC2E862164EA18FC7C378FA462B',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ucny'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3E0BA97AB9478146BBBC31A7CED337F1410F9A1148DD2FB09091897B033149B8',
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
      base: 'ibc/3E0BA97AB9478146BBBC31A7CED337F1410F9A1148DD2FB09091897B033149B8',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/udkk'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FD797DFE3A31FF4860C2BB6BF5EBFEBF3BD49655DB9EBD3B2D58A966F071CD6F',
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
      base: 'ibc/FD797DFE3A31FF4860C2BB6BF5EBFEBF3BD49655DB9EBD3B2D58A966F071CD6F',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ueur'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F989619E798F31174D54734DE9EF56EC2908D3BB6943084666AE0293EDD8CC10',
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
      base: 'ibc/F989619E798F31174D54734DE9EF56EC2908D3BB6943084666AE0293EDD8CC10',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ugbp'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/9CBC4656B1C79225939396C931D46B05B83D2636051E9369CEBE65E272CC22C2',
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
      base: 'ibc/9CBC4656B1C79225939396C931D46B05B83D2636051E9369CEBE65E272CC22C2',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uhkd'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F75A57B94DC333E1AC228490F42C9FB81DF34081B1230B6257943B81D1EB1246',
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
      base: 'ibc/F75A57B94DC333E1AC228490F42C9FB81DF34081B1230B6257943B81D1EB1246',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uidr'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/699ACF5A008F972AC25E1C79A9BF12FC4B68337B6B3A1D8EAAA9D07B65D8B693',
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
      base: 'ibc/699ACF5A008F972AC25E1C79A9BF12FC4B68337B6B3A1D8EAAA9D07B65D8B693',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uinr'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D9A58421F3DCA222C95982D251A2AABFF6EECFF45A624D35B7E7FEC0A0542996',
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
      base: 'ibc/D9A58421F3DCA222C95982D251A2AABFF6EECFF45A624D35B7E7FEC0A0542996',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ujpy'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A6DB649941408CA62C2A1A42D37C3476A5D82065CA3C0D0222DF7CF48D092127',
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
      base: 'ibc/A6DB649941408CA62C2A1A42D37C3476A5D82065CA3C0D0222DF7CF48D092127',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/umnt'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/5DD4C696095FE91B45A88D104AAE25B7ED849037E674ED39D0CB68FC7247C262',
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
      base: 'ibc/5DD4C696095FE91B45A88D104AAE25B7ED849037E674ED39D0CB68FC7247C262',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/umyr'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/992A8C24D68CC1CB9B5780B6E84533B0A2DC0F5B75FC6BC7CC45DA502716BD25',
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
      base: 'ibc/992A8C24D68CC1CB9B5780B6E84533B0A2DC0F5B75FC6BC7CC45DA502716BD25',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/unok'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/7EDD45DFD1BAD104511E70FA1C7A9322E2E5B892D0B0A0C07A00787E54875914',
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
      base: 'ibc/7EDD45DFD1BAD104511E70FA1C7A9322E2E5B892D0B0A0C07A00787E54875914',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uphp'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/291ACE86C74C947DCB067127945638C2A68C83113E83D20B442D35BDBB19B8B1',
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
      base: 'ibc/291ACE86C74C947DCB067127945638C2A68C83113E83D20B442D35BDBB19B8B1',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usdr'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/84CB8B7AEDBCF935307587C0A4CB7FD1A3BD3F35C8F64EFAB59DC612503E830C',
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
      base: 'ibc/84CB8B7AEDBCF935307587C0A4CB7FD1A3BD3F35C8F64EFAB59DC612503E830C',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usek'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2B7D7BA960A7558FB83A58F4438B6EAA3EE01608ECAC3870C03940E3BE8DC9AD',
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
      base: 'ibc/2B7D7BA960A7558FB83A58F4438B6EAA3EE01608ECAC3870C03940E3BE8DC9AD',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usgd'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A583394AA1912F5DC4974F391DE8FBDC2DF01F4DBFFCB3587BE44F2E0DDCFEA9',
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
      base: 'ibc/A583394AA1912F5DC4974F391DE8FBDC2DF01F4DBFFCB3587BE44F2E0DDCFEA9',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uthb'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B228967192B04944DA47E69CB24735FB8934DE24AF6231F1FDED20C7CBA52B31',
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
      base: 'ibc/B228967192B04944DA47E69CB24735FB8934DE24AF6231F1FDED20C7CBA52B31',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/utwd'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/BE8B9A10C7F6E014F617E4C883D24A8E34A4399C2E18D583DD9506CEADF0D7E5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/BE8B9A10C7F6E014F617E4C883D24A8E34A4399C2E18D583DD9506CEADF0D7E5',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.phoenix.money/',
        x: 'https://x.com/phoenix_dir'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-253',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-30',
            path: 'transfer/channel-30/uluna'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/3485BBB356BE4227DEC383C84B78D3D0673DF6DEF80AE41348FCCC7C38B37C44',
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
      base: 'ibc/3485BBB356BE4227DEC383C84B78D3D0673DF6DEF80AE41348FCCC7C38B37C44',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      coingecko_id: 'tokenize-xchange',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titan'
          },
          chain: {
            channel_id: 'channel-99',
            path: 'transfer/channel-99/atkx'
          }
        }]
    },
    {
      description: 'Verona is the intelligence layer for AI.',
      denom_units: [{
          denom: 'ibc/E7D78F7EEF80EC9B57BB833298FD0E2928CF41F3019D2A125AFF90F43298E46B',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion', 'VERONA']
        }],
      base: 'ibc/E7D78F7EEF80EC9B57BB833298FD0E2928CF41F3019D2A125AFF90F43298E46B',
      display: 'VERONA',
      name: 'Verona',
      symbol: 'VERONA',
      coingecko_id: 'xion-2',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.svg'
        }],
      socials: {
        discord: 'https://discord.com/invite/burnt',
        github: 'https://github.com/burnt-labs',
        telegram: 'https://t.me/xion_announcements',
        website: 'https://verona.dev',
        x: 'https://x.com/burnt_xion'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uxion',
            chain_name: 'xion'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/uxion'
          }
        }]
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denom_units: [{
          denom: 'ibc/4E9DC9647844885BB36F543D1699D4A141B4ABFA343A7F5370CE7F0C07C5F830',
          exponent: 0,
          aliases: ['coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig']
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'ibc/4E9DC9647844885BB36F543D1699D4A141B4ABFA343A7F5370CE7F0C07C5F830',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://valdora.finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora',
        x: 'https://x.com/Valdora_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
            chain_name: 'zigchain'
          },
          chain: {
            channel_id: 'channel-175',
            path: 'transfer/channel-175/coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uosmo'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-750',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uion'
          }
        }]
    },
    {
      description: 'Paxi Network is a Layer 1, general-purpose decentralized blockchain designed for everyone.Built for speed, security, and scalability, it empowers individuals and communities to participate freely — anyone can become a validator and help secure the network.With native support for DeFi, DAOs, cross-chain interoperability, and dApps, Paxi makes blockchain simple, inclusive, and truly decentralized.Ultimately, Paxi aims to become a universal blockchain — hosting a vast ecosystem of dApps that seamlessly integrate into everyday life.',
      denom_units: [{
          denom: 'ibc/99BDB05C04DA3F606B4F0F6A5344F2D0078F614B2D1EA6ED5320E9CA52FE32F1',
          exponent: 0,
          aliases: ['upaxi']
        }, {
          denom: 'paxi',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/99BDB05C04DA3F606B4F0F6A5344F2D0078F614B2D1EA6ED5320E9CA52FE32F1',
      name: 'Paxi Network',
      display: 'paxi',
      symbol: 'PAXI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
          theme: {
            circle: false
          }
        }],
      keywords: [
        'staking',
        'layer1',
        'DAO'
      ],
      coingecko_id: 'paxi-network',
      socials: {
        website: 'https://paxinet.io',
        x: 'https://x.com/paxiweb3',
        telegram: 'https://t.me/paxi_network',
        discord: 'https://discord.gg/yxZRnxvrr5'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'upaxi',
            chain_name: 'paxi'
          },
          chain: {
            channel_id: 'channel-205',
            path: 'transfer/channel-205/upaxi'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/8B511C5792C4E0E3F8EF3CD02A9CB7CC2CB9931A4042A7B3A5D0F2DDD4EEED88',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/8B511C5792C4E0E3F8EF3CD02A9CB7CC2CB9931A4042A7B3A5D0F2DDD4EEED88',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        x: 'https://x.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-132',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-36',
            path: 'transfer/channel-36/uxprt'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/BE8141075AE7950E12CE1821638C8AB9C7FFDBAEC4205714EE8D4A08169271BD',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/BE8141075AE7950E12CE1821638C8AB9C7FFDBAEC4205714EE8D4A08169271BD',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }],
      socials: {
        website: 'https://planq.network',
        x: 'https://x.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/aplanq'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/2582AC072D9D80ED244FF78E8392AADA41AE01979A9310B96508BBA7A967197B',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/2582AC072D9D80ED244FF78E8392AADA41AE01979A9310B96508BBA7A967197B',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The token of Anubis.',
      denom_units: [{
          denom: 'ibc/8A2BB5AC98A30B057A3362E23FEF334BFAAADC7FCEAA0D96C17ABB0F2E1D7A18',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/8A2BB5AC98A30B057A3362E23FEF334BFAAADC7FCEAA0D96C17ABB0F2E1D7A18',
      name: 'Anubis',
      display: 'anubi',
      symbol: 'ANUBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
        }],
      socials: {
        x: 'https://x.com/Anubis_Phy'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/89D85DD0B3ABA269272C16C67ED5AC40C7FCEC6DF17917CD37BCB03D787F634C',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/89D85DD0B3ABA269272C16C67ED5AC40C7FCEC6DF17917CD37BCB03D787F634C',
      name: 'Astonic',
      display: 'astonic',
      symbol: 'ATC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/E4632DA01B3A9F5DD8B2D380E78730F857F80E182E1F7D6C03C13938F9B39FD5',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/E4632DA01B3A9F5DD8B2D380E78730F857F80E182E1F7D6C03C13938F9B39FD5',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro.',
      denom_units: [{
          denom: 'ibc/FC240BDEF19DF7125EDECA0BF92CBC4BA55A07B1B5F366D9E643A0E7486A9D37',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/FC240BDEF19DF7125EDECA0BF92CBC4BA55A07B1B5F366D9E643A0E7486A9D37',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real.',
      denom_units: [{
          denom: 'ibc/3295F7171FD9F302B2101755AB96EE45C5E3E6A633E60D627875DB8D34C21F9B',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/3295F7171FD9F302B2101755AB96EE45C5E3E6A633E60D627875DB8D34C21F9B',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/ADDA7F388EBD91BA9EBE1D996E28902738CED906CA4E8200549C3BF8CDF155A4',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'ibc/ADDA7F388EBD91BA9EBE1D996E28902738CED906CA4E8200549C3BF8CDF155A4',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }],
      type_asset: 'sdk.coin',
      coingecko_id: 'hash-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'nhash',
            chain_name: 'provenance'
          },
          chain: {
            channel_id: 'channel-20',
            path: 'transfer/channel-20/nhash'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/94A226B8B40465682AD3F4AB14BA19BC3B9AA7BD2D1C9BDB7871A7464F19CE82',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/94A226B8B40465682AD3F4AB14BA19BC3B9AA7BD2D1C9BDB7871A7464F19CE82',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }],
      socials: {
        website: 'https://www.regen.network/',
        x: 'https://x.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-165',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-83',
            path: 'transfer/channel-83/uregen'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/C15E5758621B9ECD61D6EE4A6B8E21238E9C8873539523F1A3A2921611A37767',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/C15E5758621B9ECD61D6EE4A6B8E21238E9C8873539523F1A3A2921611A37767',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-165',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-83',
            path: 'transfer/channel-83/eco.uC.NCT'
          }
        }]
    },
    {
      description: 'RIT is the native staking and governance token of RITBIT, the network that powers the Rubin Trade decentralized exchange.',
      denom_units: [{
          denom: 'ibc/2AD8B69F4CABF1118852564F8DFBAE83F46785AD8C80E0DB19106E70CB79C133',
          exponent: 0,
          aliases: ['urit']
        }, {
          denom: 'rit',
          exponent: 18
        }],
      base: 'ibc/2AD8B69F4CABF1118852564F8DFBAE83F46785AD8C80E0DB19106E70CB79C133',
      name: 'Rubin',
      display: 'rit',
      symbol: 'RIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'urit',
            chain_name: 'ritbit'
          },
          chain: {
            channel_id: 'channel-607',
            path: 'transfer/channel-607/urit'
          }
        }]
    },
    {
      description: 'The native staking, governance, and fee token of Safrochain, a mobile-first mobile-money-powered blockchain connecting mobile wallets to on-chain finance and interoperable digital rails.',
      denom_units: [{
          denom: 'ibc/416D906365215CB6641B38CCDAA01385AA4B20E5E8EF2D65702A1B3F383FBBA2',
          exponent: 0,
          aliases: ['usaf']
        }, {
          denom: 'saf',
          exponent: 6
        }],
      base: 'ibc/416D906365215CB6641B38CCDAA01385AA4B20E5E8EF2D65702A1B3F383FBBA2',
      name: 'Safrochain',
      display: 'saf',
      symbol: 'SAF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usaf',
            chain_name: 'safrochain'
          },
          chain: {
            channel_id: 'channel-581',
            path: 'transfer/channel-581/usaf'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/B7DFB783DD437306048703B818F81EB8C8ED06856DB9FD126EA7F2248907C1FF',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/B7DFB783DD437306048703B818F81EB8C8ED06856DB9FD126EA7F2248907C1FF',
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
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        x: 'https://x.com/Sagaxyz__'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-169',
            path: 'transfer/channel-169/usaga'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1B28CD5F3CDC17E585A7F2F05931FA694B3EFF0233D98CEF3505A35410D53CED',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1B28CD5F3CDC17E585A7F2F05931FA694B3EFF0233D98CEF3505A35410D53CED',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-88',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-17',
            path: 'transfer/channel-17/uscrt'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/61911671206AA9798E403274D78F3ED3CAD9CD66AD12255BF89824F640E9D24A',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/61911671206AA9798E403274D78F3ED3CAD9CD66AD12255BF89824F640E9D24A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }],
      socials: {
        website: 'https://www.sei.io/',
        x: 'https://x.com/SeiNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/usei'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/9F058162A280B51EA31256997963B1F93DF5BCF024C5B141606C605478691D3A',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/9F058162A280B51EA31256997963B1F93DF5BCF024C5B141606C605478691D3A',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [{
          denom: 'ibc/7A3DE0BD9545098B328261DFF34EFEBD6CAE2A7181D5116737A922BD43BAB8D1',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      base: 'ibc/7A3DE0BD9545098B328261DFF34EFEBD6CAE2A7181D5116737A922BD43BAB8D1',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png'
      },
      coingecko_id: 'shido-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png'
        }],
      socials: {
        website: 'https://shido.io/',
        x: 'https://x.com/ShidoGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'shido',
            chain_name: 'shido'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/shido'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/84B654AB6D8BF61EDAC7EFAAF36DB7E4BD7DE0219C6C7005D9CCAD0F9B6E33CA',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/84B654AB6D8BF61EDAC7EFAAF36DB7E4BD7DE0219C6C7005D9CCAD0F9B6E33CA',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
        }],
      socials: {
        website: 'https://side.one',
        x: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-123',
            path: 'transfer/channel-123/uside'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denom_units: [{
          denom: 'ibc/8CC07CEE6B2889BB018C2FA0AB8904931E21FE659F05C783B085A9F9A51248CA',
          exponent: 0,
          aliases: ['uvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'ibc/8CC07CEE6B2889BB018C2FA0AB8904931E21FE659F05C783B085A9F9A51248CA',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uvrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/uvrise'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network.',
      denom_units: [{
          denom: 'ibc/3895588D9C6B47E5B838E5ED3A64F7F728A1C41F0D97EE9E2F4817E46B445B38',
          exponent: 0,
          aliases: ['urise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'ibc/3895588D9C6B47E5B838E5ED3A64F7F728A1C41F0D97EE9E2F4817E46B445B38',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'urise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/urise'
          }
        }]
    },
    {
      description: 'The USD stable coin of the Sunrise network for fees.',
      denom_units: [{
          denom: 'ibc/66382B8DABAC0CBDC669E8D3551F26D123BB28CE0C73D3705A571F58E23DCE81',
          exponent: 0,
          aliases: ['uusdrise']
        }, {
          denom: 'usdrise',
          exponent: 6
        }],
      base: 'ibc/66382B8DABAC0CBDC669E8D3551F26D123BB28CE0C73D3705A571F58E23DCE81',
      name: 'Sunrise USDrise',
      display: 'usdrise',
      symbol: 'USDrise',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uusdrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-168',
            path: 'transfer/channel-168/uusdrise'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/1810DC539AB32D3C33A66E19D8880072449D6699C9E1B58E8F88CBBDEBB31B96',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/1810DC539AB32D3C33A66E19D8880072449D6699C9E1B58E8F88CBBDEBB31B96',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-54',
            path: 'transfer/channel-54/utori'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/557F32AB960241677962D6A1AED510CFA6EB34FE8D3C17FCFB3A88CB27380087',
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
      base: 'ibc/557F32AB960241677962D6A1AED510CFA6EB34FE8D3C17FCFB3A88CB27380087',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uluna'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/916C9261968E4904C2D0F449BC5C853AE337A0D0E2FEDDD59202818BEFDE9EB4',
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
      base: 'ibc/916C9261968E4904C2D0F449BC5C853AE337A0D0E2FEDDD59202818BEFDE9EB4',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uusd'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F22F72821012AE6A929161001FF0353EF146C4998558C4B7FA934E8A91172658',
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
      base: 'ibc/F22F72821012AE6A929161001FF0353EF146C4998558C4B7FA934E8A91172658',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ukrw'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B4D51BEC0B8411F6134D5383281CF9D608236FFE2129701265C5805F24A35041',
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
      base: 'ibc/B4D51BEC0B8411F6134D5383281CF9D608236FFE2129701265C5805F24A35041',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uaud'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/66060A8D9D739BDF54C15EC7B7DC30BC699882DB6A84433F7654BD8D48713864',
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
      base: 'ibc/66060A8D9D739BDF54C15EC7B7DC30BC699882DB6A84433F7654BD8D48713864',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ucad'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D532CF77B36211E6EC31F678B141E3631699DDCFF92B45DE0633155A17039643',
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
      base: 'ibc/D532CF77B36211E6EC31F678B141E3631699DDCFF92B45DE0633155A17039643',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uchf'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8FD1860025A1601E79CE64760EA42DE83193DAC2E862164EA18FC7C378FA462B',
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
      base: 'ibc/8FD1860025A1601E79CE64760EA42DE83193DAC2E862164EA18FC7C378FA462B',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ucny'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3E0BA97AB9478146BBBC31A7CED337F1410F9A1148DD2FB09091897B033149B8',
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
      base: 'ibc/3E0BA97AB9478146BBBC31A7CED337F1410F9A1148DD2FB09091897B033149B8',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/udkk'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FD797DFE3A31FF4860C2BB6BF5EBFEBF3BD49655DB9EBD3B2D58A966F071CD6F',
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
      base: 'ibc/FD797DFE3A31FF4860C2BB6BF5EBFEBF3BD49655DB9EBD3B2D58A966F071CD6F',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ueur'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F989619E798F31174D54734DE9EF56EC2908D3BB6943084666AE0293EDD8CC10',
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
      base: 'ibc/F989619E798F31174D54734DE9EF56EC2908D3BB6943084666AE0293EDD8CC10',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ugbp'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/9CBC4656B1C79225939396C931D46B05B83D2636051E9369CEBE65E272CC22C2',
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
      base: 'ibc/9CBC4656B1C79225939396C931D46B05B83D2636051E9369CEBE65E272CC22C2',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uhkd'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F75A57B94DC333E1AC228490F42C9FB81DF34081B1230B6257943B81D1EB1246',
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
      base: 'ibc/F75A57B94DC333E1AC228490F42C9FB81DF34081B1230B6257943B81D1EB1246',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uidr'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/699ACF5A008F972AC25E1C79A9BF12FC4B68337B6B3A1D8EAAA9D07B65D8B693',
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
      base: 'ibc/699ACF5A008F972AC25E1C79A9BF12FC4B68337B6B3A1D8EAAA9D07B65D8B693',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uinr'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D9A58421F3DCA222C95982D251A2AABFF6EECFF45A624D35B7E7FEC0A0542996',
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
      base: 'ibc/D9A58421F3DCA222C95982D251A2AABFF6EECFF45A624D35B7E7FEC0A0542996',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/ujpy'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A6DB649941408CA62C2A1A42D37C3476A5D82065CA3C0D0222DF7CF48D092127',
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
      base: 'ibc/A6DB649941408CA62C2A1A42D37C3476A5D82065CA3C0D0222DF7CF48D092127',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/umnt'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/5DD4C696095FE91B45A88D104AAE25B7ED849037E674ED39D0CB68FC7247C262',
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
      base: 'ibc/5DD4C696095FE91B45A88D104AAE25B7ED849037E674ED39D0CB68FC7247C262',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/umyr'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/992A8C24D68CC1CB9B5780B6E84533B0A2DC0F5B75FC6BC7CC45DA502716BD25',
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
      base: 'ibc/992A8C24D68CC1CB9B5780B6E84533B0A2DC0F5B75FC6BC7CC45DA502716BD25',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/unok'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/7EDD45DFD1BAD104511E70FA1C7A9322E2E5B892D0B0A0C07A00787E54875914',
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
      base: 'ibc/7EDD45DFD1BAD104511E70FA1C7A9322E2E5B892D0B0A0C07A00787E54875914',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uphp'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/291ACE86C74C947DCB067127945638C2A68C83113E83D20B442D35BDBB19B8B1',
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
      base: 'ibc/291ACE86C74C947DCB067127945638C2A68C83113E83D20B442D35BDBB19B8B1',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usdr'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/84CB8B7AEDBCF935307587C0A4CB7FD1A3BD3F35C8F64EFAB59DC612503E830C',
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
      base: 'ibc/84CB8B7AEDBCF935307587C0A4CB7FD1A3BD3F35C8F64EFAB59DC612503E830C',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usek'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2B7D7BA960A7558FB83A58F4438B6EAA3EE01608ECAC3870C03940E3BE8DC9AD',
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
      base: 'ibc/2B7D7BA960A7558FB83A58F4438B6EAA3EE01608ECAC3870C03940E3BE8DC9AD',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/usgd'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A583394AA1912F5DC4974F391DE8FBDC2DF01F4DBFFCB3587BE44F2E0DDCFEA9',
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
      base: 'ibc/A583394AA1912F5DC4974F391DE8FBDC2DF01F4DBFFCB3587BE44F2E0DDCFEA9',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/uthb'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B228967192B04944DA47E69CB24735FB8934DE24AF6231F1FDED20C7CBA52B31',
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
      base: 'ibc/B228967192B04944DA47E69CB24735FB8934DE24AF6231F1FDED20C7CBA52B31',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-113',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-149',
            path: 'transfer/channel-149/utwd'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/BE8B9A10C7F6E014F617E4C883D24A8E34A4399C2E18D583DD9506CEADF0D7E5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/BE8B9A10C7F6E014F617E4C883D24A8E34A4399C2E18D583DD9506CEADF0D7E5',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.phoenix.money/',
        x: 'https://x.com/phoenix_dir'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-253',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-30',
            path: 'transfer/channel-30/uluna'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/3485BBB356BE4227DEC383C84B78D3D0673DF6DEF80AE41348FCCC7C38B37C44',
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
      base: 'ibc/3485BBB356BE4227DEC383C84B78D3D0673DF6DEF80AE41348FCCC7C38B37C44',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      coingecko_id: 'tokenize-xchange',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titan'
          },
          chain: {
            channel_id: 'channel-99',
            path: 'transfer/channel-99/atkx'
          }
        }]
    },
    {
      description: 'Verona is the intelligence layer for AI.',
      denom_units: [{
          denom: 'ibc/E7D78F7EEF80EC9B57BB833298FD0E2928CF41F3019D2A125AFF90F43298E46B',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion', 'VERONA']
        }],
      base: 'ibc/E7D78F7EEF80EC9B57BB833298FD0E2928CF41F3019D2A125AFF90F43298E46B',
      display: 'VERONA',
      name: 'Verona',
      symbol: 'VERONA',
      coingecko_id: 'xion-2',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.svg'
        }],
      socials: {
        discord: 'https://discord.com/invite/burnt',
        github: 'https://github.com/burnt-labs',
        telegram: 'https://t.me/xion_announcements',
        website: 'https://verona.dev',
        x: 'https://x.com/burnt_xion'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uxion',
            chain_name: 'xion'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/uxion'
          }
        }]
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denom_units: [{
          denom: 'ibc/4E9DC9647844885BB36F543D1699D4A141B4ABFA343A7F5370CE7F0C07C5F830',
          exponent: 0,
          aliases: ['coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig']
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'ibc/4E9DC9647844885BB36F543D1699D4A141B4ABFA343A7F5370CE7F0C07C5F830',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://valdora.finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora',
        x: 'https://x.com/Valdora_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
            chain_name: 'zigchain'
          },
          chain: {
            channel_id: 'channel-175',
            path: 'transfer/channel-175/coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig'
          }
        }]
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      type_asset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denom_units: [{
          denom: 'ibc/7D4162A63DB6140F058B63277AEFE18E401EADDFC801C04981AC74647058AF84',
          exponent: 0,
          aliases: ['cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49']
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'ibc/7D4162A63DB6140F058B63277AEFE18E401EADDFC801C04981AC74647058AF84',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/6AEA8D916A106700F2D2A192278CA0A289B764DD3807BD69490A95C9E5F1ECC9',
          exponent: 0,
          aliases: ['cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'ibc/6AEA8D916A106700F2D2A192278CA0A289B764DD3807BD69490A95C9E5F1ECC9',
      name: 'Usdt',
      display: 'usdt',
      symbol: 'USDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh'
          }
        }]
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/12315B0BAE68EFF6F1EEE12CC29DEE6470ED7FFE354DE963B762310D1360AD8E',
          exponent: 0,
          aliases: ['cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg']
        }, {
          denom: 'airi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'ibc/12315B0BAE68EFF6F1EEE12CC29DEE6470ED7FFE354DE963B762310D1360AD8E',
      name: 'Airight',
      display: 'airi',
      coingecko_id: 'airight',
      symbol: 'AIRI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg'
          }
        }]
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/A20134CB5B4C1551B8E1319CB602B0F5EE03E9EAA05AC05818F21A1266C12FFE',
          exponent: 0,
          aliases: ['cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge']
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'ibc/A20134CB5B4C1551B8E1319CB602B0F5EE03E9EAA05AC05818F21A1266C12FFE',
      name: 'Oraix',
      coingecko_id: 'oraidex',
      display: 'oraix',
      symbol: 'ORAIX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge'
          }
        }]
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/AFC8DAAA06E75C0FF70913E1D1FFC2C919114F9CFDA5F7B32688301DBE1179CD',
          exponent: 0,
          aliases: ['cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5']
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'ibc/AFC8DAAA06E75C0FF70913E1D1FFC2C919114F9CFDA5F7B32688301DBE1179CD',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5'
          }
        }]
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/6951130CB306D9C93A8481C425E22B081A4BB22A5E960117D01FDD36D6A985F7',
          exponent: 0,
          aliases: ['cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw']
        }, {
          denom: 'milky',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'ibc/6951130CB306D9C93A8481C425E22B081A4BB22A5E960117D01FDD36D6A985F7',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw'
          }
        }]
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/26E9FFCA4B6525662272F3EEB9AD4CEFFF46728B2A4DB330B97EB2064F28A79C',
          exponent: 0,
          aliases: ['cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp']
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'ibc/26E9FFCA4B6525662272F3EEB9AD4CEFFF46728B2A4DB330B97EB2064F28A79C',
      name: 'Scorai',
      display: 'scorai',
      symbol: 'SCORAI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp'
          }
        }]
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/36E45A294594D71A88948DBE727FE8766846DB1175131D4F2323555EC4CDE94A',
          exponent: 0,
          aliases: ['cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0']
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'ibc/36E45A294594D71A88948DBE727FE8766846DB1175131D4F2323555EC4CDE94A',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      }
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/4F31B7A7494B62C5315679A61704E64D24D0C07860952D1B7866723D46259E5A',
          exponent: 0,
          aliases: ['cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq']
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'ibc/4F31B7A7494B62C5315679A61704E64D24D0C07860952D1B7866723D46259E5A',
      name: 'scATOM',
      display: 'scatom',
      symbol: 'scATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq'
          }
        }]
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/D5A6CB81707BF41EADD264EC2891E6DF5C6EE6379B32623ADDB90DD2AB1D6D76',
          exponent: 0,
          aliases: ['cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt']
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'ibc/D5A6CB81707BF41EADD264EC2891E6DF5C6EE6379B32623ADDB90DD2AB1D6D76',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt'
          }
        }]
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/931285E93C15F2039F2444327F0FE3A6DC4C189DC7133A33CA72981579E0FFB4',
          exponent: 0,
          aliases: ['cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez']
        }, {
          denom: 'weth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'ibc/931285E93C15F2039F2444327F0FE3A6DC4C189DC7133A33CA72981579E0FFB4',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/9F34C674212D01B817EFA48FEA3DB852C40030766CCE4C7D542580302B7E1A16',
          exponent: 0,
          aliases: ['cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd']
        }, {
          denom: 'btc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'ibc/9F34C674212D01B817EFA48FEA3DB852C40030766CCE4C7D542580302B7E1A16',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      }
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/B30D941E6BC8D2418B47701D4CB018F547743E66E0BEE12E2882321A65EBE50B',
          exponent: 0,
          aliases: ['cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q']
        }, {
          denom: 'och',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'ibc/B30D941E6BC8D2418B47701D4CB018F547743E66E0BEE12E2882321A65EBE50B',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingecko_id: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q'
          }
        }]
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      type_asset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denom_units: [{
          denom: 'ibc/7D4162A63DB6140F058B63277AEFE18E401EADDFC801C04981AC74647058AF84',
          exponent: 0,
          aliases: ['cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49']
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'ibc/7D4162A63DB6140F058B63277AEFE18E401EADDFC801C04981AC74647058AF84',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/6AEA8D916A106700F2D2A192278CA0A289B764DD3807BD69490A95C9E5F1ECC9',
          exponent: 0,
          aliases: ['cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'ibc/6AEA8D916A106700F2D2A192278CA0A289B764DD3807BD69490A95C9E5F1ECC9',
      name: 'Usdt',
      display: 'usdt',
      symbol: 'USDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh'
          }
        }]
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/12315B0BAE68EFF6F1EEE12CC29DEE6470ED7FFE354DE963B762310D1360AD8E',
          exponent: 0,
          aliases: ['cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg']
        }, {
          denom: 'airi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'ibc/12315B0BAE68EFF6F1EEE12CC29DEE6470ED7FFE354DE963B762310D1360AD8E',
      name: 'Airight',
      display: 'airi',
      coingecko_id: 'airight',
      symbol: 'AIRI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg'
          }
        }]
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/A20134CB5B4C1551B8E1319CB602B0F5EE03E9EAA05AC05818F21A1266C12FFE',
          exponent: 0,
          aliases: ['cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge']
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'ibc/A20134CB5B4C1551B8E1319CB602B0F5EE03E9EAA05AC05818F21A1266C12FFE',
      name: 'Oraix',
      coingecko_id: 'oraidex',
      display: 'oraix',
      symbol: 'ORAIX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge'
          }
        }]
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/AFC8DAAA06E75C0FF70913E1D1FFC2C919114F9CFDA5F7B32688301DBE1179CD',
          exponent: 0,
          aliases: ['cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5']
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'ibc/AFC8DAAA06E75C0FF70913E1D1FFC2C919114F9CFDA5F7B32688301DBE1179CD',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5'
          }
        }]
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/6951130CB306D9C93A8481C425E22B081A4BB22A5E960117D01FDD36D6A985F7',
          exponent: 0,
          aliases: ['cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw']
        }, {
          denom: 'milky',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'ibc/6951130CB306D9C93A8481C425E22B081A4BB22A5E960117D01FDD36D6A985F7',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw'
          }
        }]
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/26E9FFCA4B6525662272F3EEB9AD4CEFFF46728B2A4DB330B97EB2064F28A79C',
          exponent: 0,
          aliases: ['cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp']
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'ibc/26E9FFCA4B6525662272F3EEB9AD4CEFFF46728B2A4DB330B97EB2064F28A79C',
      name: 'Scorai',
      display: 'scorai',
      symbol: 'SCORAI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp'
          }
        }]
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/36E45A294594D71A88948DBE727FE8766846DB1175131D4F2323555EC4CDE94A',
          exponent: 0,
          aliases: ['cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0']
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'ibc/36E45A294594D71A88948DBE727FE8766846DB1175131D4F2323555EC4CDE94A',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      }
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/4F31B7A7494B62C5315679A61704E64D24D0C07860952D1B7866723D46259E5A',
          exponent: 0,
          aliases: ['cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq']
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'ibc/4F31B7A7494B62C5315679A61704E64D24D0C07860952D1B7866723D46259E5A',
      name: 'scATOM',
      display: 'scatom',
      symbol: 'scATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq'
          }
        }]
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/D5A6CB81707BF41EADD264EC2891E6DF5C6EE6379B32623ADDB90DD2AB1D6D76',
          exponent: 0,
          aliases: ['cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt']
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'ibc/D5A6CB81707BF41EADD264EC2891E6DF5C6EE6379B32623ADDB90DD2AB1D6D76',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt'
          }
        }]
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/931285E93C15F2039F2444327F0FE3A6DC4C189DC7133A33CA72981579E0FFB4',
          exponent: 0,
          aliases: ['cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez']
        }, {
          denom: 'weth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'ibc/931285E93C15F2039F2444327F0FE3A6DC4C189DC7133A33CA72981579E0FFB4',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/9F34C674212D01B817EFA48FEA3DB852C40030766CCE4C7D542580302B7E1A16',
          exponent: 0,
          aliases: ['cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd']
        }, {
          denom: 'btc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'ibc/9F34C674212D01B817EFA48FEA3DB852C40030766CCE4C7D542580302B7E1A16',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      }
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/B30D941E6BC8D2418B47701D4CB018F547743E66E0BEE12E2882321A65EBE50B',
          exponent: 0,
          aliases: ['cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q']
        }, {
          denom: 'och',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'ibc/B30D941E6BC8D2418B47701D4CB018F547743E66E0BEE12E2882321A65EBE50B',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingecko_id: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm',
            channel_id: 'channel-147',
            base_denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-34',
            path: 'transfer/channel-34/cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q'
          }
        }]
    }
  ]
};
export default assets;
    