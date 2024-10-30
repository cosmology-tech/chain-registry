import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'archway',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
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
            channel_id: 'channel-60',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
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
            channel_id: 'channel-60',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/A4EBDD0DDFAE12FDBB04B35B81BF30DEB59A153973412A8C3AFE316A092A2BC3',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/A4EBDD0DDFAE12FDBB04B35B81BF30DEB59A153973412A8C3AFE316A092A2BC3',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-109',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingecko_id: 'andromeda-2',
      base: 'ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-97'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
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
            channel_id: 'channel-60',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
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
            channel_id: 'channel-60',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/A4EBDD0DDFAE12FDBB04B35B81BF30DEB59A153973412A8C3AFE316A092A2BC3',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/A4EBDD0DDFAE12FDBB04B35B81BF30DEB59A153973412A8C3AFE316A092A2BC3',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-109',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingecko_id: 'andromeda-2',
      base: 'ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-97'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/E21808AEBCB7E02F594897100186C126E3BC9A36B0974196AF116750A4573F06',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/E21808AEBCB7E02F594897100186C126E3BC9A36B0974196AF116750A4573F06',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-111',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/477BF795EE81A93C4B278F032FF847261D1FA5A3E41C5338DA3D8173699D9739',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/477BF795EE81A93C4B278F032FF847261D1FA5A3E41C5338DA3D8173699D9739',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primary_color_hex: '#079fd7'
          }
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        twitter: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-147'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primary_color_hex: '#3cc494'
          }
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E6208E49B5FA2353C9C47D2EB9AABA03FED788E4970C7C623F6B511263E7CB11',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E6208E49B5FA2353C9C47D2EB9AABA03FED788E4970C7C623F6B511263E7CB11',
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
            channel_id: 'channel-29',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
            channel_id: 'channel-623',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      base: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primary_color_hex: '#4678e9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/31F64223268EE70F0B172E500148208EA5580869A1054D860B35A25B87930AC3',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/31F64223268EE70F0B172E500148208EA5580869A1054D860B35A25B87930AC3',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primary_color_hex: '#fba214'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/5BAD723F09B0CDBB5AC6B439BF9670DA77DEE1F2330CF74D855937E2D6E15E49',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BAD723F09B0CDBB5AC6B439BF9670DA77DEE1F2330CF74D855937E2D6E15E49',
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
            channel_id: 'channel-45',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primary_color_hex: '#042ca4'
          }
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
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
            channel_id: 'channel-41',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC',
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
            channel_id: 'channel-290',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/27357E0424B1895B62F7A63584266AA6C6E536B2830416C16440A17AD9837AD3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/27357E0424B1895B62F7A63584266AA6C6E536B2830416C16440A17AD9837AD3',
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
            channel_id: 'channel-99',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/9E3CDA65E02637E219B43802452D6B37D782F466CF76ECB9F47A2E00C07C4769',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/9E3CDA65E02637E219B43802452D6B37D782F466CF76ECB9F47A2E00C07C4769',
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
            channel_id: 'channel-41',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/C97840033E5DF2EF0D4B9AFE2E0E55BFAA6D76978579CD87058FD622C4C7EE06',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/C97840033E5DF2EF0D4B9AFE2E0E55BFAA6D76978579CD87058FD622C4C7EE06',
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
            channel_id: 'channel-41',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/7E29FBF56F169F744250D62489F5D4D5E2F99EF1561BB9E2DE1B05FAE623F2B2',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/7E29FBF56F169F744250D62489F5D4D5E2F99EF1561BB9E2DE1B05FAE623F2B2',
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
            channel_id: 'channel-41',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/91992316B3371C1C00D6075F1D78DC26295E94131E42B265A61EB3626DB79134',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/91992316B3371C1C00D6075F1D78DC26295E94131E42B265A61EB3626DB79134',
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
            channel_id: 'channel-41',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/AF9A28F3CADC646513160435B2286EA7740ED524A231208AEB4206F951F0DC06',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/AF9A28F3CADC646513160435B2286EA7740ED524A231208AEB4206F951F0DC06',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/10737C87E3FD42F5854617AB28C0FC1F70532813EF712CBC7C4CC47D5427E21F',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/10737C87E3FD42F5854617AB28C0FC1F70532813EF712CBC7C4CC47D5427E21F',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/DB3EB419D050EC969A41AA0FDBC5B58498D45A0794CB2B6E64F9093AB88B4421',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/DB3EB419D050EC969A41AA0FDBC5B58498D45A0794CB2B6E64F9093AB88B4421',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A399023C1ACCA397C485D5A9EAC9EFEC32C2664A99A1D9E41C758D8863FF21EC',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A399023C1ACCA397C485D5A9EAC9EFEC32C2664A99A1D9E41C758D8863FF21EC',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
          theme: {
            primary_color_hex: '#0c0c14'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/8E6E7AB89246F87DA936F0EEA0A40654E7FB6B0C3E834F447EB444AAD95A106F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/8E6E7AB89246F87DA936F0EEA0A40654E7FB6B0C3E834F447EB444AAD95A106F',
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
            channel_id: 'channel-32',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-37'
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
            channel_id: 'channel-1429',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
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
            channel_id: 'channel-1429',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/CFD58F8A64F93940D00CABE85B05A6D0FBA1FF4DF42D3C1E23C06DF30A2BAE1F',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/CFD58F8A64F93940D00CABE85B05A6D0FBA1FF4DF42D3C1E23C06DF30A2BAE1F',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-112'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/DD5160D037E67CCC444E19E37F595A62A9AF383958CB8E01E483CEF6B741A707',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/DD5160D037E67CCC444E19E37F595A62A9AF383958CB8E01E483CEF6B741A707',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-112'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/4A56C5B7B9B26F8F094469D083AF7C26C27B8267E132B5AED5A43A9BF95FDF0A',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/4A56C5B7B9B26F8F094469D083AF7C26C27B8267E132B5AED5A43A9BF95FDF0A',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-34'
          }
        }]
    },
    {
      description: 'The native governance token for Qwoyn Network',
      denom_units: [{
          denom: 'ibc/1112DFAC11501682456D28D0728C1E35E134729F4D8EAA897377ACDFB29F46CC',
          exponent: 0,
          aliases: ['uqwoyn']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      base: 'ibc/1112DFAC11501682456D28D0728C1E35E134729F4D8EAA897377ACDFB29F46CC',
      name: 'Qwoyn Network',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primary_color_hex: '#04e4fc'
          }
        }],
      coingecko_id: 'qwoyn',
      keywords: ['gaming'],
      socials: {
        website: 'https://qwoyn.studio',
        twitter: 'https://twitter.com/Qwoyn_Studios'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uqwoyn',
            chain_name: 'qwoyn'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/A848807F524E08C87BF9B95275D29D892A2248E9C4A602C3FF9B69607CCDC5C5',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/A848807F524E08C87BF9B95275D29D892A2248E9C4A602C3FF9B69607CCDC5C5',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/BB5E5F8E4558CD5A0150EE8EC141D581D17F0FE42E29CAD354CB272CF59CDC44',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/BB5E5F8E4558CD5A0150EE8EC141D581D17F0FE42E29CAD354CB272CF59CDC44',
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
            channel_id: 'channel-265',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/03FCE7D3C5C385D1ACCB262094D95EB8B9F047D2B202C2395B6937550FC69BEB',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/03FCE7D3C5C385D1ACCB262094D95EB8B9F047D2B202C2395B6937550FC69BEB',
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
            channel_id: 'channel-97',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/E21808AEBCB7E02F594897100186C126E3BC9A36B0974196AF116750A4573F06',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/E21808AEBCB7E02F594897100186C126E3BC9A36B0974196AF116750A4573F06',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-111',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/477BF795EE81A93C4B278F032FF847261D1FA5A3E41C5338DA3D8173699D9739',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/477BF795EE81A93C4B278F032FF847261D1FA5A3E41C5338DA3D8173699D9739',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primary_color_hex: '#079fd7'
          }
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        twitter: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-147'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primary_color_hex: '#3cc494'
          }
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E6208E49B5FA2353C9C47D2EB9AABA03FED788E4970C7C623F6B511263E7CB11',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E6208E49B5FA2353C9C47D2EB9AABA03FED788E4970C7C623F6B511263E7CB11',
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
            channel_id: 'channel-29',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
            channel_id: 'channel-623',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      base: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primary_color_hex: '#4678e9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/31F64223268EE70F0B172E500148208EA5580869A1054D860B35A25B87930AC3',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/31F64223268EE70F0B172E500148208EA5580869A1054D860B35A25B87930AC3',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primary_color_hex: '#fba214'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/5BAD723F09B0CDBB5AC6B439BF9670DA77DEE1F2330CF74D855937E2D6E15E49',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BAD723F09B0CDBB5AC6B439BF9670DA77DEE1F2330CF74D855937E2D6E15E49',
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
            channel_id: 'channel-45',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primary_color_hex: '#042ca4'
          }
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
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
            channel_id: 'channel-41',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC',
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
            channel_id: 'channel-290',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/27357E0424B1895B62F7A63584266AA6C6E536B2830416C16440A17AD9837AD3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/27357E0424B1895B62F7A63584266AA6C6E536B2830416C16440A17AD9837AD3',
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
            channel_id: 'channel-99',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/9E3CDA65E02637E219B43802452D6B37D782F466CF76ECB9F47A2E00C07C4769',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/9E3CDA65E02637E219B43802452D6B37D782F466CF76ECB9F47A2E00C07C4769',
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
            channel_id: 'channel-41',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/C97840033E5DF2EF0D4B9AFE2E0E55BFAA6D76978579CD87058FD622C4C7EE06',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/C97840033E5DF2EF0D4B9AFE2E0E55BFAA6D76978579CD87058FD622C4C7EE06',
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
            channel_id: 'channel-41',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/7E29FBF56F169F744250D62489F5D4D5E2F99EF1561BB9E2DE1B05FAE623F2B2',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/7E29FBF56F169F744250D62489F5D4D5E2F99EF1561BB9E2DE1B05FAE623F2B2',
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
            channel_id: 'channel-41',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/91992316B3371C1C00D6075F1D78DC26295E94131E42B265A61EB3626DB79134',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/91992316B3371C1C00D6075F1D78DC26295E94131E42B265A61EB3626DB79134',
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
            channel_id: 'channel-41',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/AF9A28F3CADC646513160435B2286EA7740ED524A231208AEB4206F951F0DC06',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/AF9A28F3CADC646513160435B2286EA7740ED524A231208AEB4206F951F0DC06',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/10737C87E3FD42F5854617AB28C0FC1F70532813EF712CBC7C4CC47D5427E21F',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/10737C87E3FD42F5854617AB28C0FC1F70532813EF712CBC7C4CC47D5427E21F',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/DB3EB419D050EC969A41AA0FDBC5B58498D45A0794CB2B6E64F9093AB88B4421',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/DB3EB419D050EC969A41AA0FDBC5B58498D45A0794CB2B6E64F9093AB88B4421',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A399023C1ACCA397C485D5A9EAC9EFEC32C2664A99A1D9E41C758D8863FF21EC',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A399023C1ACCA397C485D5A9EAC9EFEC32C2664A99A1D9E41C758D8863FF21EC',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
          theme: {
            primary_color_hex: '#0c0c14'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/8E6E7AB89246F87DA936F0EEA0A40654E7FB6B0C3E834F447EB444AAD95A106F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/8E6E7AB89246F87DA936F0EEA0A40654E7FB6B0C3E834F447EB444AAD95A106F',
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
            channel_id: 'channel-32',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-37'
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
            channel_id: 'channel-1429',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
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
            channel_id: 'channel-1429',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/CFD58F8A64F93940D00CABE85B05A6D0FBA1FF4DF42D3C1E23C06DF30A2BAE1F',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/CFD58F8A64F93940D00CABE85B05A6D0FBA1FF4DF42D3C1E23C06DF30A2BAE1F',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-112'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/DD5160D037E67CCC444E19E37F595A62A9AF383958CB8E01E483CEF6B741A707',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/DD5160D037E67CCC444E19E37F595A62A9AF383958CB8E01E483CEF6B741A707',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-62',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-112'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/4A56C5B7B9B26F8F094469D083AF7C26C27B8267E132B5AED5A43A9BF95FDF0A',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/4A56C5B7B9B26F8F094469D083AF7C26C27B8267E132B5AED5A43A9BF95FDF0A',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-34'
          }
        }]
    },
    {
      description: 'The native governance token for Qwoyn Network',
      denom_units: [{
          denom: 'ibc/1112DFAC11501682456D28D0728C1E35E134729F4D8EAA897377ACDFB29F46CC',
          exponent: 0,
          aliases: ['uqwoyn']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      base: 'ibc/1112DFAC11501682456D28D0728C1E35E134729F4D8EAA897377ACDFB29F46CC',
      name: 'Qwoyn Network',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primary_color_hex: '#04e4fc'
          }
        }],
      coingecko_id: 'qwoyn',
      keywords: ['gaming'],
      socials: {
        website: 'https://qwoyn.studio',
        twitter: 'https://twitter.com/Qwoyn_Studios'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uqwoyn',
            chain_name: 'qwoyn'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/A848807F524E08C87BF9B95275D29D892A2248E9C4A602C3FF9B69607CCDC5C5',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/A848807F524E08C87BF9B95275D29D892A2248E9C4A602C3FF9B69607CCDC5C5',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-84',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/BB5E5F8E4558CD5A0150EE8EC141D581D17F0FE42E29CAD354CB272CF59CDC44',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/BB5E5F8E4558CD5A0150EE8EC141D581D17F0FE42E29CAD354CB272CF59CDC44',
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
            channel_id: 'channel-265',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/03FCE7D3C5C385D1ACCB262094D95EB8B9F047D2B202C2395B6937550FC69BEB',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/03FCE7D3C5C385D1ACCB262094D95EB8B9F047D2B202C2395B6937550FC69BEB',
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
            channel_id: 'channel-97',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    }
  ]
};
export default assets;
    