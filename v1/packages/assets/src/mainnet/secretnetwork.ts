import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'secretnetwork',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C',
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
            channel_id: 'channel-10',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414',
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
            channel_id: 'channel-10',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D',
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
            channel_id: 'channel-43',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-21'
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
            channel_id: 'channel-2',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-97'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618',
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
      base: 'ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618',
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
            channel_id: 'channel-21',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-84'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/92DA3E9AAB81EF3AACAD9E91EFFD37D3AB19EAB8FEC17FDBFA80636F33DE358E',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/92DA3E9AAB81EF3AACAD9E91EFFD37D3AB19EAB8FEC17FDBFA80636F33DE358E',
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
            channel_id: 'channel-21',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-84'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E',
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
            channel_id: 'channel-12',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB',
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
            channel_id: 'channel-14',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/0D5DA8508A67E30C3C268A0400EA15FAFB553C0C371757994C90BFA023FF0B93',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/0D5DA8508A67E30C3C268A0400EA15FAFB553C0C371757994C90BFA023FF0B93',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primary_color_hex: '#fc5f04'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C',
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
            channel_id: 'channel-25',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/1E391FEA430B33116246DAE829F24E962400F23C5208C2398F6CA10D4F124E27',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/1E391FEA430B33116246DAE829F24E962400F23C5208C2398F6CA10D4F124E27',
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
            channel_id: 'channel-25',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/258F8C95FD9857719E198D445224A6A0F4CE86C3CE1D60E2177DCACCDB9203C0',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/258F8C95FD9857719E198D445224A6A0F4CE86C3CE1D60E2177DCACCDB9203C0',
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
            channel_id: 'channel-25',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
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
            channel_id: 'channel-235',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE',
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
            channel_id: 'channel-10',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5',
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
            channel_id: 'channel-10',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE',
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
            channel_id: 'channel-35',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-130'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59',
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
            channel_id: 'channel-15',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/1C2250B55990EB4F92F3B7D944BFB251A6A49D8969C559B518E17E4864DC8225',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/1C2250B55990EB4F92F3B7D944BFB251A6A49D8969C559B518E17E4864DC8225',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67',
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
            channel_id: 'channel-79',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
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
            channel_id: 'channel-88',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85',
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
            channel_id: 'channel-88',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D',
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
            channel_id: 'channel-88',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BF0F1BE7E022836BF594FD1908CE5F52206D415CB4A71C7B7A5F1076360968FE',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/BF0F1BE7E022836BF594FD1908CE5F52206D415CB4A71C7B7A5F1076360968FE',
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
            channel_id: 'channel-88',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/DBCF9008246405FC128D2C49F9A12312F6AFEFA487C6FBC1F248B7147A463BA8',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/DBCF9008246405FC128D2C49F9A12312F6AFEFA487C6FBC1F248B7147A463BA8',
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
            channel_id: 'channel-88',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/46DA21F68DEE2EF19401FB854D0C600D311BC2478D935B4B8C4D26409BE011D3',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/46DA21F68DEE2EF19401FB854D0C600D311BC2478D935B4B8C4D26409BE011D3',
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
            channel_id: 'channel-88',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1AA5F4D3496B4A56B0A50BD35ED4336C6B0AC02D2C5EE6934E89D3D89B7BA607',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/1AA5F4D3496B4A56B0A50BD35ED4336C6B0AC02D2C5EE6934E89D3D89B7BA607',
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
            channel_id: 'channel-88',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1BC0F08D31C459E55DB977843506A9A95E42F42F544ADD2087150FC899677039',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/1BC0F08D31C459E55DB977843506A9A95E42F42F544ADD2087150FC899677039',
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
            channel_id: 'channel-88',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB',
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
            channel_id: 'channel-2',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
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
            channel_id: 'channel-48',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A',
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
            channel_id: 'channel-10',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E',
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
            channel_id: 'channel-4',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/F1E2912B7740A256EE98F87F464CC50EEB4511CEDFA9512365B2DA93057482DC',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/F1E2912B7740A256EE98F87F464CC50EEB4511CEDFA9512365B2DA93057482DC',
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
            channel_id: 'channel-1551',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/0E95F1FA29438C4DD69E2833B6DAE4D6F5525A6CC7851DDDA7CE7B77FD0A045E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/0E95F1FA29438C4DD69E2833B6DAE4D6F5525A6CC7851DDDA7CE7B77FD0A045E',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/3CAFE3329BA40D5B200801D5F894CF3DAE422E59C14D28681383889BC27E8A74',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/3CAFE3329BA40D5B200801D5F894CF3DAE422E59C14D28681383889BC27E8A74',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/7490B6BBCEA4A7170C56A289CA6A3B53F66BD84D70A1349ECA1139FD424D3B05',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/7490B6BBCEA4A7170C56A289CA6A3B53F66BD84D70A1349ECA1139FD424D3B05',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6',
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
            channel_id: 'channel-17',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F',
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
            channel_id: 'channel-17',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/F478850AE05C181B02E94EA6234063301BCC3CD91CEE3322293736CAC6709A29',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/F478850AE05C181B02E94EA6234063301BCC3CD91CEE3322293736CAC6709A29',
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
            channel_id: 'channel-17',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/862D31E2B69C7E2C08AF52E564E05FFE7A55061337912E43F55198268598E2D9',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/862D31E2B69C7E2C08AF52E564E05FFE7A55061337912E43F55198268598E2D9',
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
            channel_id: 'channel-13995',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denom_units: [{
          denom: 'ibc/D08C48DD2EC0510E9B4610ECE180AB104DDFF69FB42497E187058E2D42B9C71B',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'ibc/D08C48DD2EC0510E9B4610ECE180AB104DDFF69FB42497E187058E2D42B9C71B',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'unyx',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/3D94B1D3EA1E52407BC69A78BC0A52D2440F0524F5268B899B67F18DEACB0B5F',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'ibc/3D94B1D3EA1E52407BC69A78BC0A52D2440F0524F5268B899B67F18DEACB0B5F',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingecko_id: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'unym',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingecko_id: 'oraichain-token',
      socials: {
        website: 'https://orai.io/',
        twitter: 'https://x.com/oraichain'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true,
            primary_color_hex: '#000000',
            background_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            dark_mode: true,
            primary_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            dark_mode: false,
            primary_color_hex: '#000000'
          }
        }
      ],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-217'
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
            channel_id: 'channel-88',
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
            channel_id: 'channel-88',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696',
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
            circle: true,
            primary_color_hex: '#E59636',
            background_color_hex: '#000000'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6',
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
            channel_id: 'channel-52',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/5938378D6974EF73519C90789CBBFFFAEC43992A3D2B5E3F465F5DA96E434029',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/5938378D6974EF73519C90789CBBFFFAEC43992A3D2B5E3F465F5DA96E434029',
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
            channel_id: 'channel-17',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-152'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C',
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
            channel_id: 'channel-10',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414',
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
            channel_id: 'channel-10',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D',
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
            channel_id: 'channel-43',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-21'
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
            channel_id: 'channel-2',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-97'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618',
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
      base: 'ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618',
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
            channel_id: 'channel-21',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-84'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/92DA3E9AAB81EF3AACAD9E91EFFD37D3AB19EAB8FEC17FDBFA80636F33DE358E',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/92DA3E9AAB81EF3AACAD9E91EFFD37D3AB19EAB8FEC17FDBFA80636F33DE358E',
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
            channel_id: 'channel-21',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-84'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E',
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
            channel_id: 'channel-12',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB',
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
            channel_id: 'channel-14',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/0D5DA8508A67E30C3C268A0400EA15FAFB553C0C371757994C90BFA023FF0B93',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/0D5DA8508A67E30C3C268A0400EA15FAFB553C0C371757994C90BFA023FF0B93',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primary_color_hex: '#fc5f04'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C',
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
            channel_id: 'channel-25',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/1E391FEA430B33116246DAE829F24E962400F23C5208C2398F6CA10D4F124E27',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/1E391FEA430B33116246DAE829F24E962400F23C5208C2398F6CA10D4F124E27',
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
            channel_id: 'channel-25',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/258F8C95FD9857719E198D445224A6A0F4CE86C3CE1D60E2177DCACCDB9203C0',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/258F8C95FD9857719E198D445224A6A0F4CE86C3CE1D60E2177DCACCDB9203C0',
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
            channel_id: 'channel-25',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-101'
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
            channel_id: 'channel-235',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE',
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
            channel_id: 'channel-10',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5',
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
            channel_id: 'channel-10',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE',
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
            channel_id: 'channel-35',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-130'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59',
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
            channel_id: 'channel-15',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/1C2250B55990EB4F92F3B7D944BFB251A6A49D8969C559B518E17E4864DC8225',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/1C2250B55990EB4F92F3B7D944BFB251A6A49D8969C559B518E17E4864DC8225',
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
            channel_id: 'channel-15',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67',
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
            channel_id: 'channel-79',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
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
            channel_id: 'channel-88',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85',
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
            channel_id: 'channel-88',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D',
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
            channel_id: 'channel-88',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BF0F1BE7E022836BF594FD1908CE5F52206D415CB4A71C7B7A5F1076360968FE',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/BF0F1BE7E022836BF594FD1908CE5F52206D415CB4A71C7B7A5F1076360968FE',
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
            channel_id: 'channel-88',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/DBCF9008246405FC128D2C49F9A12312F6AFEFA487C6FBC1F248B7147A463BA8',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/DBCF9008246405FC128D2C49F9A12312F6AFEFA487C6FBC1F248B7147A463BA8',
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
            channel_id: 'channel-88',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/46DA21F68DEE2EF19401FB854D0C600D311BC2478D935B4B8C4D26409BE011D3',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/46DA21F68DEE2EF19401FB854D0C600D311BC2478D935B4B8C4D26409BE011D3',
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
            channel_id: 'channel-88',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1AA5F4D3496B4A56B0A50BD35ED4336C6B0AC02D2C5EE6934E89D3D89B7BA607',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/1AA5F4D3496B4A56B0A50BD35ED4336C6B0AC02D2C5EE6934E89D3D89B7BA607',
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
            channel_id: 'channel-88',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1BC0F08D31C459E55DB977843506A9A95E42F42F544ADD2087150FC899677039',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/1BC0F08D31C459E55DB977843506A9A95E42F42F544ADD2087150FC899677039',
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
            channel_id: 'channel-88',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      denom_units: [{
          denom: 'ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB',
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
            channel_id: 'channel-2',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
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
            channel_id: 'channel-48',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A',
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
            channel_id: 'channel-10',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E',
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
            channel_id: 'channel-4',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/F1E2912B7740A256EE98F87F464CC50EEB4511CEDFA9512365B2DA93057482DC',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/F1E2912B7740A256EE98F87F464CC50EEB4511CEDFA9512365B2DA93057482DC',
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
            channel_id: 'channel-1551',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/0E95F1FA29438C4DD69E2833B6DAE4D6F5525A6CC7851DDDA7CE7B77FD0A045E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/0E95F1FA29438C4DD69E2833B6DAE4D6F5525A6CC7851DDDA7CE7B77FD0A045E',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/3CAFE3329BA40D5B200801D5F894CF3DAE422E59C14D28681383889BC27E8A74',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/3CAFE3329BA40D5B200801D5F894CF3DAE422E59C14D28681383889BC27E8A74',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/7490B6BBCEA4A7170C56A289CA6A3B53F66BD84D70A1349ECA1139FD424D3B05',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/7490B6BBCEA4A7170C56A289CA6A3B53F66BD84D70A1349ECA1139FD424D3B05',
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
            channel_id: 'channel-1551',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6',
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
            channel_id: 'channel-17',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F',
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
            channel_id: 'channel-17',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/F478850AE05C181B02E94EA6234063301BCC3CD91CEE3322293736CAC6709A29',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/F478850AE05C181B02E94EA6234063301BCC3CD91CEE3322293736CAC6709A29',
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
            channel_id: 'channel-17',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/862D31E2B69C7E2C08AF52E564E05FFE7A55061337912E43F55198268598E2D9',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/862D31E2B69C7E2C08AF52E564E05FFE7A55061337912E43F55198268598E2D9',
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
            channel_id: 'channel-13995',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-146'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denom_units: [{
          denom: 'ibc/D08C48DD2EC0510E9B4610ECE180AB104DDFF69FB42497E187058E2D42B9C71B',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'ibc/D08C48DD2EC0510E9B4610ECE180AB104DDFF69FB42497E187058E2D42B9C71B',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'unyx',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/3D94B1D3EA1E52407BC69A78BC0A52D2440F0524F5268B899B67F18DEACB0B5F',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'ibc/3D94B1D3EA1E52407BC69A78BC0A52D2440F0524F5268B899B67F18DEACB0B5F',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingecko_id: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'unym',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingecko_id: 'oraichain-token',
      socials: {
        website: 'https://orai.io/',
        twitter: 'https://x.com/oraichain'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true,
            primary_color_hex: '#000000',
            background_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            dark_mode: true,
            primary_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            dark_mode: false,
            primary_color_hex: '#000000'
          }
        }
      ],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-135',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-217'
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
            channel_id: 'channel-88',
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
            channel_id: 'channel-88',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696',
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
            circle: true,
            primary_color_hex: '#E59636',
            background_color_hex: '#000000'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6',
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
            channel_id: 'channel-52',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/5938378D6974EF73519C90789CBBFFFAEC43992A3D2B5E3F465F5DA96E434029',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/5938378D6974EF73519C90789CBBFFFAEC43992A3D2B5E3F465F5DA96E434029',
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
            channel_id: 'channel-17',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-152'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B',
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
            channel_id: 'channel-50',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primary_color_hex: '#be9926'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
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
            channel_id: 'channel-48',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF',
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
            channel_id: 'channel-40',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-111'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2',
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
      base: 'ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primary_color_hex: '#fcdb5b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E',
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
      base: 'ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primary_color_hex: '#5493f2'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5',
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
      base: 'ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primary_color_hex: '#4b83e0'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C',
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
      base: 'ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
          theme: {
            primary_color_hex: '#5981d7'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3',
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
      base: 'ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
          theme: {
            primary_color_hex: '#de725b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8',
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
      base: 'ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
          theme: {
            primary_color_hex: '#c95c41'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB',
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
      base: 'ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
          theme: {
            primary_color_hex: '#d3684c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D',
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
      base: 'ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
          theme: {
            primary_color_hex: '#db300a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39',
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
      base: 'ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
          theme: {
            primary_color_hex: '#1535b2'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570',
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
      base: 'ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
          theme: {
            primary_color_hex: '#d49b9c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E',
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
      base: 'ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
          theme: {
            primary_color_hex: '#dc300a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F',
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
      base: 'ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633',
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
      base: 'ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
          theme: {
            primary_color_hex: '#4b87e6'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB',
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
      base: 'ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
          theme: {
            primary_color_hex: '#cfcfcf'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04',
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
      base: 'ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
          theme: {
            primary_color_hex: '#4085f0'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834',
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
      base: 'ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63',
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
      base: 'ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840',
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
      base: 'ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
          theme: {
            primary_color_hex: '#e88057'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B',
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
      base: 'ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
          theme: {
            primary_color_hex: '#2fa4f1'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17',
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
      base: 'ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
          theme: {
            primary_color_hex: '#2e71e1'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482',
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
      base: 'ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
          theme: {
            primary_color_hex: '#4886e7'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435',
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
      base: 'ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5',
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
      base: 'ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5',
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
            channel_id: 'channel-3',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/1B5D8D2E9B85030391AE48EB992A0466F8DE5DB8F15E745CF25D5714142391BD',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/1B5D8D2E9B85030391AE48EB992A0466F8DE5DB8F15E745CF25D5714142391BD',
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
            channel_id: 'channel-123',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-126'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B',
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
            channel_id: 'channel-50',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primary_color_hex: '#be9926'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
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
            channel_id: 'channel-48',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF',
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
            channel_id: 'channel-40',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-111'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2',
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
      base: 'ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primary_color_hex: '#fcdb5b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E',
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
      base: 'ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primary_color_hex: '#5493f2'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5',
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
      base: 'ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primary_color_hex: '#4b83e0'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C',
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
      base: 'ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
          theme: {
            primary_color_hex: '#5981d7'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3',
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
      base: 'ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
          theme: {
            primary_color_hex: '#de725b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8',
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
      base: 'ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
          theme: {
            primary_color_hex: '#c95c41'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB',
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
      base: 'ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
          theme: {
            primary_color_hex: '#d3684c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D',
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
      base: 'ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
          theme: {
            primary_color_hex: '#db300a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39',
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
      base: 'ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
          theme: {
            primary_color_hex: '#1535b2'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570',
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
      base: 'ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
          theme: {
            primary_color_hex: '#d49b9c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E',
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
      base: 'ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
          theme: {
            primary_color_hex: '#dc300a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F',
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
      base: 'ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633',
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
      base: 'ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
          theme: {
            primary_color_hex: '#4b87e6'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB',
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
      base: 'ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
          theme: {
            primary_color_hex: '#cfcfcf'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04',
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
      base: 'ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
          theme: {
            primary_color_hex: '#4085f0'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834',
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
      base: 'ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63',
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
      base: 'ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840',
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
      base: 'ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
          theme: {
            primary_color_hex: '#e88057'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B',
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
      base: 'ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
          theme: {
            primary_color_hex: '#2fa4f1'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17',
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
      base: 'ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
          theme: {
            primary_color_hex: '#2e71e1'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482',
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
      base: 'ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
          theme: {
            primary_color_hex: '#4886e7'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435',
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
      base: 'ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5',
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
      base: 'ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5',
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
            channel_id: 'channel-3',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/1B5D8D2E9B85030391AE48EB992A0466F8DE5DB8F15E745CF25D5714142391BD',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/1B5D8D2E9B85030391AE48EB992A0466F8DE5DB8F15E745CF25D5714142391BD',
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
            channel_id: 'channel-123',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-126'
          }
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address: 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [{
          denom: 'ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA',
          exponent: 0,
          aliases: ['cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      base: 'ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingecko_id: 'neta',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
          theme: {
            primary_color_hex: '#f87b7b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [{
          denom: 'ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699',
          exponent: 0,
          aliases: ['cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      base: 'ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address: 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [{
          denom: 'ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43',
          exponent: 0,
          aliases: ['cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      base: 'ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
          theme: {
            primary_color_hex: '#e2877e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address: 'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [{
          denom: 'ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00',
          exponent: 0,
          aliases: ['cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      base: 'ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingecko_id: 'racoon',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
          theme: {
            primary_color_hex: '#070f0e'
          }
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [{
          denom: 'ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE',
          exponent: 0,
          aliases: ['cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq']
        }, {
          denom: 'block',
          exponent: 6
        }],
      base: 'ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address: 'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [{
          denom: 'ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5',
          exponent: 0,
          aliases: ['cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49']
        }],
      base: 'ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
          theme: {
            primary_color_hex: '#fae204'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address: 'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [{
          denom: 'ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0',
          exponent: 0,
          aliases: ['cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      base: 'ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
          theme: {
            primary_color_hex: '#f07c92'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address: 'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [{
          denom: 'ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9',
          exponent: 0,
          aliases: ['cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      base: 'ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
          theme: {
            primary_color_hex: '#402e5d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.',
      type_asset: 'cw20',
      address: 'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [{
          denom: 'ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F',
          exponent: 0,
          aliases: ['cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k']
        }, {
          denom: 'hns',
          exponent: 6
        }],
      base: 'ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address: 'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [{
          denom: 'ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8',
          exponent: 0,
          aliases: ['cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      base: 'ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
          theme: {
            primary_color_hex: '#f3baaf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address: 'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [{
          denom: 'ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008',
          exponent: 0,
          aliases: ['cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr']
        }, {
          denom: 'dla',
          exponent: 6
        }],
      base: 'ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg',
          theme: {
            primary_color_hex: '#263a70'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address: 'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [{
          denom: 'ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210',
          exponent: 0,
          aliases: ['cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address: 'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [{
          denom: 'ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D',
          exponent: 0,
          aliases: ['cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      base: 'ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
          theme: {
            primary_color_hex: '#521caf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [{
          denom: 'ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8',
          exponent: 0,
          aliases: ['cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m']
        }, {
          denom: 'hole',
          exponent: 6
        }],
      base: 'ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address: 'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [{
          denom: 'ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5',
          exponent: 0,
          aliases: ['cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      base: 'ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
          theme: {
            primary_color_hex: '#26363f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [{
          denom: 'ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68',
          exponent: 0,
          aliases: ['cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      base: 'ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
          theme: {
            primary_color_hex: '#254454'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address: 'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [{
          denom: 'ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1',
          exponent: 0,
          aliases: ['cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      base: 'ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address: 'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [{
          denom: 'ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771',
          exponent: 0,
          aliases: ['cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      base: 'ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
          theme: {
            primary_color_hex: '#2d2c2d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [{
          denom: 'ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910',
          exponent: 0,
          aliases: ['cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      base: 'ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
          theme: {
            primary_color_hex: '#32255f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [{
          denom: 'ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F',
          exponent: 0,
          aliases: ['cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup']
        }, {
          denom: 'loop',
          exponent: 6
        }],
      base: 'ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png',
          theme: {
            primary_color_hex: '#2d2c45'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The deprecated cw20 token for Fanfury on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denom_units: [{
          denom: 'ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7',
          exponent: 0,
          aliases: ['cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.legacy',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
          theme: {
            primary_color_hex: '#14045c'
          }
        }]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denom_units: [{
          denom: 'ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      base: 'ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      coingecko_id: 'posthuman',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
          theme: {
            primary_color_hex: '#bbc2c6'
          }
        }],
      socials: {
        website: 'https://posthuman.digital/',
        twitter: 'https://twitter.com/POSTHUMAN_DVS'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denom_units: [{
          denom: 'ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A',
          exponent: 0,
          aliases: ['cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      base: 'ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
          theme: {
            primary_color_hex: '#08d890'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'RED',
      type_asset: 'cw20',
      address: 'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denom_units: [{
          denom: 'ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F',
          exponent: 0,
          aliases: ['cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za']
        }, {
          denom: 'red',
          exponent: 6
        }],
      base: 'ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png',
          theme: {
            primary_color_hex: '#e40404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BLUE',
      type_asset: 'cw20',
      address: 'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denom_units: [{
          denom: 'ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4',
          exponent: 0,
          aliases: ['cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png',
          theme: {
            primary_color_hex: '#041ce4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      type_asset: 'cw20',
      address: 'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denom_units: [{
          denom: 'ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6',
          exponent: 0,
          aliases: ['cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      base: 'ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
          theme: {
            primary_color_hex: '#6bcc95'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address: 'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [{
          denom: 'ibc/FD066EB0729B4E56928737B10A3DEE7A3E886ACAB23D01092A00D0C49789B9D3',
          exponent: 0,
          aliases: ['cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj']
        }, {
          denom: 'banana',
          exponent: 6
        }],
      base: 'ibc/FD066EB0729B4E56928737B10A3DEE7A3E886ACAB23D01092A00D0C49789B9D3',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png',
          theme: {
            primary_color_hex: '#046fc6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'nRide Token',
      type_asset: 'cw20',
      address: 'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denom_units: [{
          denom: 'ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      base: 'ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primary_color_hex: '#050505'
          }
        }],
      socials: {
        website: 'https://www.nride.com',
        twitter: 'https://twitter.com/nRide12'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      type_asset: 'cw20',
      address: 'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denom_units: [{
          denom: 'ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA',
          exponent: 0,
          aliases: ['cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      base: 'ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
          theme: {
            primary_color_hex: '#c5c2c2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      type_asset: 'cw20',
      address: 'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denom_units: [{
          denom: 'ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB',
          exponent: 0,
          aliases: ['cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      base: 'ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
          theme: {
            primary_color_hex: '#ee8179'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      type_asset: 'cw20',
      address: 'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denom_units: [{
          denom: 'ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390',
          exponent: 0,
          aliases: ['cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa']
        }, {
          denom: 'catom',
          exponent: 6
        }],
      base: 'ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png',
          theme: {
            primary_color_hex: '#25221f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      type_asset: 'cw20',
      address: 'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denom_units: [{
          denom: 'ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62',
          exponent: 0,
          aliases: ['cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz']
        }, {
          denom: 'howl',
          exponent: 6
        }],
      base: 'ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png',
          theme: {
            primary_color_hex: '#e30d2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      type_asset: 'cw20',
      address: 'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denom_units: [{
          denom: 'ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927',
          exponent: 0,
          aliases: ['cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      base: 'ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
          theme: {
            primary_color_hex: '#ee5f06'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      type_asset: 'cw20',
      address: 'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      denom_units: [{
          denom: 'ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C',
          exponent: 0,
          aliases: ['cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      base: 'ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
          theme: {
            primary_color_hex: '#07d7ac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Mini Punks Token',
      type_asset: 'cw20',
      address: 'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      denom_units: [{
          denom: 'ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300',
          exponent: 0,
          aliases: ['cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      base: 'ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
          theme: {
            primary_color_hex: '#dadbce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Kleomedes Token',
      type_asset: 'cw20',
      address: 'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      denom_units: [{
          denom: 'ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790',
          exponent: 0,
          aliases: ['cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      base: 'ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
          theme: {
            primary_color_hex: '#240454'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Sikoba Governance Token',
      type_asset: 'cw20',
      address: 'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      denom_units: [{
          denom: 'ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6',
          exponent: 0,
          aliases: ['cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      base: 'ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
          theme: {
            primary_color_hex: '#fbfbfb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Shiba Cosmos',
      type_asset: 'cw20',
      address: 'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      denom_units: [{
          denom: 'ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804',
          exponent: 0,
          aliases: ['cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      base: 'ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
          theme: {
            primary_color_hex: '#eea95d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Celestims',
      type_asset: 'cw20',
      address: 'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      denom_units: [{
          denom: 'ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647',
          exponent: 0,
          aliases: ['cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      base: 'ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
          theme: {
            primary_color_hex: '#0b1d33'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      type_asset: 'cw20',
      address: 'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      denom_units: [{
          denom: 'ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2',
          exponent: 0,
          aliases: ['cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      base: 'ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
          theme: {
            primary_color_hex: '#38b5c5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      type_asset: 'cw20',
      address: 'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      denom_units: [{
          denom: 'ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95',
          exponent: 0,
          aliases: ['cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      base: 'ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
          theme: {
            primary_color_hex: '#04040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      type_asset: 'cw20',
      address: 'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      denom_units: [{
          denom: 'ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F',
          exponent: 0,
          aliases: ['cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      base: 'ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
          theme: {
            primary_color_hex: '#cbdb44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      type_asset: 'cw20',
      address: 'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      denom_units: [{
          denom: 'ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461',
          exponent: 0,
          aliases: ['cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      base: 'ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
          theme: {
            primary_color_hex: '#299544'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO focused on youth empowerment',
      type_asset: 'cw20',
      address: 'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      denom_units: [{
          denom: 'ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D',
          exponent: 0,
          aliases: ['cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v']
        }, {
          denom: 'empwr',
          exponent: 6
        }],
      base: 'ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D',
      name: 'EMPWR',
      display: 'empwr',
      symbol: 'EMPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png',
          theme: {
            primary_color_hex: '#5561aa'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Join us in fighting against world hunger',
      type_asset: 'cw20',
      address: 'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      denom_units: [{
          denom: 'ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625',
          exponent: 0,
          aliases: ['cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd']
        }, {
          denom: 'middle',
          exponent: 6
        }],
      base: 'ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625',
      name: 'Middle',
      display: 'middle',
      symbol: 'MIDDLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png',
          theme: {
            primary_color_hex: '#04040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
      type_asset: 'cw20',
      address: 'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      denom_units: [{
          denom: 'ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D',
          exponent: 0,
          aliases: ['cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w']
        }, {
          denom: 'sunset',
          exponent: 6
        }],
      base: 'ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D',
      name: 'Sunset',
      display: 'sunset',
      symbol: 'SUNSET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png',
          theme: {
            primary_color_hex: '#e0372c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to helping restore and protect our environment',
      type_asset: 'cw20',
      address: 'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      denom_units: [{
          denom: 'ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6',
          exponent: 0,
          aliases: ['cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e']
        }, {
          denom: 'tree',
          exponent: 6
        }],
      base: 'ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6',
      name: 'Living Tree',
      display: 'tree',
      symbol: 'TREE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png',
          theme: {
            primary_color_hex: '#469743'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      type_asset: 'cw20',
      address: 'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      denom_units: [{
          denom: 'ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112',
          exponent: 0,
          aliases: ['cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      base: 'ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
          theme: {
            primary_color_hex: '#04ccab'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Apemos',
      type_asset: 'cw20',
      address: 'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      denom_units: [{
          denom: 'ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD',
          exponent: 0,
          aliases: ['cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      base: 'ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
          theme: {
            primary_color_hex: '#4d5264'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      type_asset: 'cw20',
      address: 'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      denom_units: [{
          denom: 'ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70',
          exponent: 0,
          aliases: ['cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      base: 'ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
          theme: {
            primary_color_hex: '#f49c4c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Doge Apr',
      type_asset: 'cw20',
      address: 'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      denom_units: [{
          denom: 'ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72',
          exponent: 0,
          aliases: ['cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      base: 'ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
          theme: {
            primary_color_hex: '#d6a84f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Osmo Pepe',
      type_asset: 'cw20',
      address: 'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      denom_units: [{
          denom: 'ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF',
          exponent: 0,
          aliases: ['cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7']
        }, {
          denom: 'pepe',
          exponent: 6
        }],
      base: 'ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF',
      name: 'Osmo Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png',
          theme: {
            primary_color_hex: '#f3c79e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Catmos',
      type_asset: 'cw20',
      address: 'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      denom_units: [{
          denom: 'ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39',
          exponent: 0,
          aliases: ['cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      base: 'ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
          theme: {
            primary_color_hex: '#140c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Spacer',
      type_asset: 'cw20',
      address: 'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      denom_units: [{
          denom: 'ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10',
          exponent: 0,
          aliases: ['cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      base: 'ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
          theme: {
            primary_color_hex: '#695335'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      type_asset: 'cw20',
      address: 'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      denom_units: [{
          denom: 'ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9',
          exponent: 0,
          aliases: ['cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l']
        }, {
          denom: 'light',
          exponent: 9
        }],
      base: 'ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
          theme: {
            primary_color_hex: '#e5e5e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      type_asset: 'cw20',
      address: 'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      denom_units: [{
          denom: 'ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27',
          exponent: 0,
          aliases: ['cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      base: 'ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Void',
      type_asset: 'cw20',
      address: 'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      denom_units: [{
          denom: 'ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86',
          exponent: 0,
          aliases: ['cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8']
        }, {
          denom: 'void',
          exponent: 6
        }],
      base: 'ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
          theme: {
            primary_color_hex: '#5b2e96'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Silica',
      type_asset: 'cw20',
      address: 'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      denom_units: [{
          denom: 'ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E',
          exponent: 0,
          aliases: ['cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      base: 'ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
          theme: {
            primary_color_hex: '#21538f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Pepec',
      type_asset: 'cw20',
      address: 'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      denom_units: [{
          denom: 'ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857',
          exponent: 0,
          aliases: ['cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      base: 'ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
          theme: {
            primary_color_hex: '#e9bc37'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Palantin',
      type_asset: 'cw20',
      address: 'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      denom_units: [{
          denom: 'ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51',
          exponent: 0,
          aliases: ['cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp']
        }, {
          denom: 'pltn',
          exponent: 6
        }],
      base: 'ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51',
      name: 'Palantin',
      display: 'pltn',
      symbol: 'PLTN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Propose. Vote. Build.',
      type_asset: 'cw20',
      address: 'juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      denom_units: [{
          denom: 'ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8',
          exponent: 0,
          aliases: ['cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw']
        }, {
          denom: 'yfd',
          exponent: 6
        }],
      base: 'ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8',
      name: 'Y-Foundry DAO',
      display: 'yfd',
      symbol: 'YFD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg',
          theme: {
            primary_color_hex: '#dc542c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'ERIS liquid staked JUNO',
      type_asset: 'cw20',
      address: 'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      denom_units: [{
          denom: 'ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64',
          exponent: 0,
          aliases: ['cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a']
        }, {
          denom: 'ampJUNO',
          exponent: 6
        }],
      base: 'ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64',
      name: 'ERIS Amplified JUNO',
      display: 'ampJUNO',
      symbol: 'ampJUNO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BITS - Native token of Bitswift Cash',
      type_asset: 'cw20',
      address: 'juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      denom_units: [{
          denom: 'ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49',
          exponent: 0,
          aliases: ['cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h']
        }, {
          denom: 'bits',
          exponent: 8
        }],
      base: 'ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49',
      name: 'BITS',
      display: 'bits',
      symbol: 'BITS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png',
          theme: {
            primary_color_hex: '#7bbc43'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The least memeable memecoin in existence. The cats have had their day, it\'s time for $POIL coin to take reign.',
      type_asset: 'cw20',
      address: 'juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      denom_units: [{
          denom: 'ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057',
          exponent: 0,
          aliases: ['cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw']
        }, {
          denom: 'poil',
          exponent: 6
        }],
      base: 'ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057',
      name: 'POIL',
      display: 'poil',
      symbol: 'POIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png',
          theme: {
            primary_color_hex: '#ef6d1d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Minerva was one of the main goddesses worshiped by the Roman Pagans and is a goddess from Roman Mythology.',
      type_asset: 'cw20',
      address: 'juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      denom_units: [{
          denom: 'ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2',
          exponent: 0,
          aliases: ['cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82']
        }, {
          denom: 'minerva',
          exponent: 6
        }],
      base: 'ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2',
      name: 'MINERVA',
      display: 'minerva',
      symbol: 'MRVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png',
          theme: {
            primary_color_hex: '#744c2f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'In Roman mythology, Juno (Latin: Iuno; pronounced [[Help:Pronunciation|[ˈjuːnoː]]]) was the protector and advisor of the state.',
      type_asset: 'cw20',
      address: 'juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      denom_units: [{
          denom: 'ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00',
          exponent: 0,
          aliases: ['cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk']
        }, {
          denom: 'luno',
          exponent: 6
        }],
      base: 'ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00',
      name: 'LUNO',
      display: 'luno',
      symbol: 'LUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'ATEN is NETA.',
      type_asset: 'cw20',
      address: 'juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      denom_units: [{
          denom: 'ibc/4226D7A5F93E94AD5BEA5C67AA067878280390C8D3D03049400F1590EEAC174E',
          exponent: 0,
          aliases: ['cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r']
        }, {
          denom: 'aten',
          exponent: 6
        }],
      base: 'ibc/4226D7A5F93E94AD5BEA5C67AA067878280390C8D3D03049400F1590EEAC174E',
      name: 'ATEN',
      display: 'aten',
      symbol: 'ATEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png',
          theme: {
            primary_color_hex: '#1e1d1d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'HERA is the goddess of marriage in Greek mythology.',
      type_asset: 'cw20',
      address: 'juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      denom_units: [{
          denom: 'ibc/CE97DE4B0BAA4D013E5FD4D8D067FA8ABDF244EF4A549135BEF25B5EBD96AFE0',
          exponent: 0,
          aliases: ['cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0']
        }, {
          denom: 'hera',
          exponent: 6
        }],
      base: 'ibc/CE97DE4B0BAA4D013E5FD4D8D067FA8ABDF244EF4A549135BEF25B5EBD96AFE0',
      name: 'HERA',
      display: 'hera',
      symbol: 'HERA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png',
          theme: {
            primary_color_hex: '#a9784c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked JUNO',
      type_asset: 'cw20',
      address: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      denom_units: [{
          denom: 'ibc/14B3B1CF026FBACF7D343ED40B6C61FC2C286CC64983F76B986F5E214F3785E6',
          exponent: 0,
          aliases: ['cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m']
        }, {
          denom: 'bJUNO',
          exponent: 6
        }],
      base: 'ibc/14B3B1CF026FBACF7D343ED40B6C61FC2C286CC64983F76B986F5E214F3785E6',
      name: 'BackBone Labs Liquid Staked JUNO',
      display: 'bJUNO',
      symbol: 'bJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png',
          theme: {
            primary_color_hex: '#d17e7f'
          }
        }],
      coingecko_id: 'backbone-labs-staked-juno'
    },
    {
      description: 'Airdrop For All [AFA - New Name on Cosmos Ecosystem, A4A - Old Name on TurtleNetwork] is a token from turtleNetwork towards cosmos ecosystem.',
      type_asset: 'cw20',
      address: 'juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      denom_units: [{
          denom: 'ibc/FAFBFE28EA6F983FEACFCED0D573B2D7E3788195664ACA29877555283660FAA2',
          exponent: 0,
          aliases: ['cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg']
        }],
      base: 'ibc/FAFBFE28EA6F983FEACFCED0D573B2D7E3788195664ACA29877555283660FAA2',
      name: 'Airdrop For All',
      display: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      symbol: 'AFA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png',
          theme: {
            primary_color_hex: '#f3cb0c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [{
          denom: 'ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD',
          exponent: 0,
          aliases: ['cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v']
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-103',
            base_denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            chain_name: 'migaloo'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Astrovault AXV',
      denom_units: [{
          denom: 'ibc/0E9D95B87EC0B34B0689B3E1BB9A31376BD380F22E357D21D5D6ED72B1DA7A4A',
          exponent: 0,
          aliases: ['cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      base: 'ibc/0E9D95B87EC0B34B0689B3E1BB9A31376BD380F22E357D21D5D6ED72B1DA7A4A',
      name: 'Astrovault AXV (Neutron)',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
        }],
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      coingecko_id: 'astrovault',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-1950',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151'
          }
        }]
    },
    {
      description: 'Astrovault xATOM on Neutron Chain',
      denom_units: [{
          denom: 'ibc/93CDA629E04C7E55B2A4BA99C244E0E2C3E0EB8B958FB417D07C002EFA655A9F',
          exponent: 0,
          aliases: ['cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj']
        }, {
          denom: 'xATOM',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      base: 'ibc/93CDA629E04C7E55B2A4BA99C244E0E2C3E0EB8B958FB417D07C002EFA655A9F',
      name: 'Astrovault xATOM (Neutron)',
      display: 'xATOM',
      symbol: 'xATOM',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-1950',
            base_denom: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
        }],
      coingecko_id: 'astrovault-xatom'
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      type_asset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denom_units: [{
          denom: 'ibc/00454780C89CD74EF846AA50C7ED3C7258075F3D7B1E3C527BE8FA19A6E8F32C',
          exponent: 0,
          aliases: ['cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49']
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'ibc/00454780C89CD74EF846AA50C7ED3C7258075F3D7B1E3C527BE8FA19A6E8F32C',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/0793FCB8E2507A2E10E982CBE9DD544832B0093FCD5CB54C6B629AA75BAB7323',
          exponent: 0,
          aliases: ['cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'ibc/0793FCB8E2507A2E10E982CBE9DD544832B0093FCD5CB54C6B629AA75BAB7323',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/43960E85CE53AC46C9353F91FBE65FDF6E817DEC583AFB208BE8C5379C681786',
          exponent: 0,
          aliases: ['cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg']
        }, {
          denom: 'airi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'ibc/43960E85CE53AC46C9353F91FBE65FDF6E817DEC583AFB208BE8C5379C681786',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/7BE0B80F1D97F481912E5DF37BC48FD0070A98EDDA6EDAA32255D7439B498DC4',
          exponent: 0,
          aliases: ['cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge']
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'ibc/7BE0B80F1D97F481912E5DF37BC48FD0070A98EDDA6EDAA32255D7439B498DC4',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/E87B465C619D3D094C81FA71DBECE858BF95BA7ACD092CCBCC006D3AB0476171',
          exponent: 0,
          aliases: ['cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5']
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'ibc/E87B465C619D3D094C81FA71DBECE858BF95BA7ACD092CCBCC006D3AB0476171',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/433D801D34CA7EF76231664CFCA977BE8B92E2C327BB7203C23AC0FBEC2BD9D2',
          exponent: 0,
          aliases: ['cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw']
        }, {
          denom: 'milky',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'ibc/433D801D34CA7EF76231664CFCA977BE8B92E2C327BB7203C23AC0FBEC2BD9D2',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/FF4AE67A638C561EAECCD8B86C4C2F55AE3E5C8D1B39D5E3D6F0287CC55C64E0',
          exponent: 0,
          aliases: ['cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp']
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'ibc/FF4AE67A638C561EAECCD8B86C4C2F55AE3E5C8D1B39D5E3D6F0287CC55C64E0',
      name: 'Scorai',
      display: 'scorai',
      coingecko_id: 'scorai',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/D299B875FBB5CCA848170C55E293A974618D15238DBE50D42DDB57E33A1CA7A9',
          exponent: 0,
          aliases: ['cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0']
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'ibc/D299B875FBB5CCA848170C55E293A974618D15238DBE50D42DDB57E33A1CA7A9',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/646BC7E542BB3B3C31D118830D7D12010A3C56B38E631D87731707B7DFE253ED',
          exponent: 0,
          aliases: ['cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq']
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'ibc/646BC7E542BB3B3C31D118830D7D12010A3C56B38E631D87731707B7DFE253ED',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/F4457E829D31209950FCC5ED05D68AB62324F2369846A7A5CBF4FB880D43DA33',
          exponent: 0,
          aliases: ['cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt']
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'ibc/F4457E829D31209950FCC5ED05D68AB62324F2369846A7A5CBF4FB880D43DA33',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/73E63407B83B16343706630BCAC51B94D44A938E5B2FCBE5E0725B6936F18890',
          exponent: 0,
          aliases: ['cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez']
        }, {
          denom: 'weth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'ibc/73E63407B83B16343706630BCAC51B94D44A938E5B2FCBE5E0725B6936F18890',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primary_color_hex: '#303030'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/DCBF5429FBED78231627CC5D97A98EE590DE07B4056543026C97CD75805C2581',
          exponent: 0,
          aliases: ['cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd']
        }, {
          denom: 'btc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'ibc/DCBF5429FBED78231627CC5D97A98EE590DE07B4056543026C97CD75805C2581',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/603E2BB1F1A66A1A1F7B9BAA72B4BC191D28A3FFC676B8C0465E8017F5E3AC71',
          exponent: 0,
          aliases: ['cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q']
        }, {
          denom: 'och',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'ibc/603E2BB1F1A66A1A1F7B9BAA72B4BC191D28A3FFC676B8C0465E8017F5E3AC71',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingecko_id: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address: 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [{
          denom: 'ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA',
          exponent: 0,
          aliases: ['cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      base: 'ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingecko_id: 'neta',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
          theme: {
            primary_color_hex: '#f87b7b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [{
          denom: 'ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699',
          exponent: 0,
          aliases: ['cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      base: 'ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address: 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [{
          denom: 'ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43',
          exponent: 0,
          aliases: ['cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      base: 'ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
          theme: {
            primary_color_hex: '#e2877e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address: 'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [{
          denom: 'ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00',
          exponent: 0,
          aliases: ['cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      base: 'ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingecko_id: 'racoon',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
          theme: {
            primary_color_hex: '#070f0e'
          }
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [{
          denom: 'ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE',
          exponent: 0,
          aliases: ['cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq']
        }, {
          denom: 'block',
          exponent: 6
        }],
      base: 'ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address: 'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [{
          denom: 'ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5',
          exponent: 0,
          aliases: ['cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49']
        }],
      base: 'ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
          theme: {
            primary_color_hex: '#fae204'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address: 'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [{
          denom: 'ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0',
          exponent: 0,
          aliases: ['cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      base: 'ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
          theme: {
            primary_color_hex: '#f07c92'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address: 'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [{
          denom: 'ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9',
          exponent: 0,
          aliases: ['cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      base: 'ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
          theme: {
            primary_color_hex: '#402e5d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.',
      type_asset: 'cw20',
      address: 'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [{
          denom: 'ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F',
          exponent: 0,
          aliases: ['cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k']
        }, {
          denom: 'hns',
          exponent: 6
        }],
      base: 'ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address: 'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [{
          denom: 'ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8',
          exponent: 0,
          aliases: ['cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      base: 'ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
          theme: {
            primary_color_hex: '#f3baaf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address: 'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [{
          denom: 'ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008',
          exponent: 0,
          aliases: ['cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr']
        }, {
          denom: 'dla',
          exponent: 6
        }],
      base: 'ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg',
          theme: {
            primary_color_hex: '#263a70'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address: 'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [{
          denom: 'ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210',
          exponent: 0,
          aliases: ['cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address: 'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [{
          denom: 'ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D',
          exponent: 0,
          aliases: ['cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      base: 'ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
          theme: {
            primary_color_hex: '#521caf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [{
          denom: 'ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8',
          exponent: 0,
          aliases: ['cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m']
        }, {
          denom: 'hole',
          exponent: 6
        }],
      base: 'ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address: 'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [{
          denom: 'ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5',
          exponent: 0,
          aliases: ['cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      base: 'ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
          theme: {
            primary_color_hex: '#26363f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [{
          denom: 'ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68',
          exponent: 0,
          aliases: ['cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      base: 'ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
          theme: {
            primary_color_hex: '#254454'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address: 'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [{
          denom: 'ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1',
          exponent: 0,
          aliases: ['cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      base: 'ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address: 'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [{
          denom: 'ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771',
          exponent: 0,
          aliases: ['cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      base: 'ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
          theme: {
            primary_color_hex: '#2d2c2d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [{
          denom: 'ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910',
          exponent: 0,
          aliases: ['cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      base: 'ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
          theme: {
            primary_color_hex: '#32255f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [{
          denom: 'ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F',
          exponent: 0,
          aliases: ['cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup']
        }, {
          denom: 'loop',
          exponent: 6
        }],
      base: 'ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png',
          theme: {
            primary_color_hex: '#2d2c45'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The deprecated cw20 token for Fanfury on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denom_units: [{
          denom: 'ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7',
          exponent: 0,
          aliases: ['cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.legacy',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
          theme: {
            primary_color_hex: '#14045c'
          }
        }]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denom_units: [{
          denom: 'ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      base: 'ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      coingecko_id: 'posthuman',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
          theme: {
            primary_color_hex: '#bbc2c6'
          }
        }],
      socials: {
        website: 'https://posthuman.digital/',
        twitter: 'https://twitter.com/POSTHUMAN_DVS'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      type_asset: 'cw20',
      address: 'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denom_units: [{
          denom: 'ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A',
          exponent: 0,
          aliases: ['cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      base: 'ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
          theme: {
            primary_color_hex: '#08d890'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'RED',
      type_asset: 'cw20',
      address: 'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denom_units: [{
          denom: 'ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F',
          exponent: 0,
          aliases: ['cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za']
        }, {
          denom: 'red',
          exponent: 6
        }],
      base: 'ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png',
          theme: {
            primary_color_hex: '#e40404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BLUE',
      type_asset: 'cw20',
      address: 'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denom_units: [{
          denom: 'ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4',
          exponent: 0,
          aliases: ['cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png',
          theme: {
            primary_color_hex: '#041ce4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      type_asset: 'cw20',
      address: 'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denom_units: [{
          denom: 'ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6',
          exponent: 0,
          aliases: ['cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      base: 'ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
          theme: {
            primary_color_hex: '#6bcc95'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address: 'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [{
          denom: 'ibc/FD066EB0729B4E56928737B10A3DEE7A3E886ACAB23D01092A00D0C49789B9D3',
          exponent: 0,
          aliases: ['cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj']
        }, {
          denom: 'banana',
          exponent: 6
        }],
      base: 'ibc/FD066EB0729B4E56928737B10A3DEE7A3E886ACAB23D01092A00D0C49789B9D3',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png',
          theme: {
            primary_color_hex: '#046fc6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'nRide Token',
      type_asset: 'cw20',
      address: 'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denom_units: [{
          denom: 'ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      base: 'ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primary_color_hex: '#050505'
          }
        }],
      socials: {
        website: 'https://www.nride.com',
        twitter: 'https://twitter.com/nRide12'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      type_asset: 'cw20',
      address: 'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denom_units: [{
          denom: 'ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA',
          exponent: 0,
          aliases: ['cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      base: 'ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
          theme: {
            primary_color_hex: '#c5c2c2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      type_asset: 'cw20',
      address: 'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denom_units: [{
          denom: 'ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB',
          exponent: 0,
          aliases: ['cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      base: 'ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
          theme: {
            primary_color_hex: '#ee8179'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      type_asset: 'cw20',
      address: 'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denom_units: [{
          denom: 'ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390',
          exponent: 0,
          aliases: ['cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa']
        }, {
          denom: 'catom',
          exponent: 6
        }],
      base: 'ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png',
          theme: {
            primary_color_hex: '#25221f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      type_asset: 'cw20',
      address: 'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denom_units: [{
          denom: 'ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62',
          exponent: 0,
          aliases: ['cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz']
        }, {
          denom: 'howl',
          exponent: 6
        }],
      base: 'ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png',
          theme: {
            primary_color_hex: '#e30d2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      type_asset: 'cw20',
      address: 'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denom_units: [{
          denom: 'ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927',
          exponent: 0,
          aliases: ['cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      base: 'ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
          theme: {
            primary_color_hex: '#ee5f06'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      type_asset: 'cw20',
      address: 'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      denom_units: [{
          denom: 'ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C',
          exponent: 0,
          aliases: ['cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      base: 'ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
          theme: {
            primary_color_hex: '#07d7ac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Mini Punks Token',
      type_asset: 'cw20',
      address: 'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      denom_units: [{
          denom: 'ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300',
          exponent: 0,
          aliases: ['cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      base: 'ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
          theme: {
            primary_color_hex: '#dadbce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Kleomedes Token',
      type_asset: 'cw20',
      address: 'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      denom_units: [{
          denom: 'ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790',
          exponent: 0,
          aliases: ['cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      base: 'ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
          theme: {
            primary_color_hex: '#240454'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Sikoba Governance Token',
      type_asset: 'cw20',
      address: 'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      denom_units: [{
          denom: 'ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6',
          exponent: 0,
          aliases: ['cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      base: 'ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
          theme: {
            primary_color_hex: '#fbfbfb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Shiba Cosmos',
      type_asset: 'cw20',
      address: 'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      denom_units: [{
          denom: 'ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804',
          exponent: 0,
          aliases: ['cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      base: 'ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
          theme: {
            primary_color_hex: '#eea95d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Celestims',
      type_asset: 'cw20',
      address: 'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      denom_units: [{
          denom: 'ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647',
          exponent: 0,
          aliases: ['cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      base: 'ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
          theme: {
            primary_color_hex: '#0b1d33'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      type_asset: 'cw20',
      address: 'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      denom_units: [{
          denom: 'ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2',
          exponent: 0,
          aliases: ['cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      base: 'ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
          theme: {
            primary_color_hex: '#38b5c5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      type_asset: 'cw20',
      address: 'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      denom_units: [{
          denom: 'ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95',
          exponent: 0,
          aliases: ['cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      base: 'ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
          theme: {
            primary_color_hex: '#04040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      type_asset: 'cw20',
      address: 'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      denom_units: [{
          denom: 'ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F',
          exponent: 0,
          aliases: ['cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      base: 'ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
          theme: {
            primary_color_hex: '#cbdb44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      type_asset: 'cw20',
      address: 'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      denom_units: [{
          denom: 'ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461',
          exponent: 0,
          aliases: ['cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      base: 'ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
          theme: {
            primary_color_hex: '#299544'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO focused on youth empowerment',
      type_asset: 'cw20',
      address: 'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      denom_units: [{
          denom: 'ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D',
          exponent: 0,
          aliases: ['cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v']
        }, {
          denom: 'empwr',
          exponent: 6
        }],
      base: 'ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D',
      name: 'EMPWR',
      display: 'empwr',
      symbol: 'EMPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png',
          theme: {
            primary_color_hex: '#5561aa'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Join us in fighting against world hunger',
      type_asset: 'cw20',
      address: 'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      denom_units: [{
          denom: 'ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625',
          exponent: 0,
          aliases: ['cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd']
        }, {
          denom: 'middle',
          exponent: 6
        }],
      base: 'ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625',
      name: 'Middle',
      display: 'middle',
      symbol: 'MIDDLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png',
          theme: {
            primary_color_hex: '#04040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
      type_asset: 'cw20',
      address: 'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      denom_units: [{
          denom: 'ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D',
          exponent: 0,
          aliases: ['cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w']
        }, {
          denom: 'sunset',
          exponent: 6
        }],
      base: 'ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D',
      name: 'Sunset',
      display: 'sunset',
      symbol: 'SUNSET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png',
          theme: {
            primary_color_hex: '#e0372c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to helping restore and protect our environment',
      type_asset: 'cw20',
      address: 'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      denom_units: [{
          denom: 'ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6',
          exponent: 0,
          aliases: ['cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e']
        }, {
          denom: 'tree',
          exponent: 6
        }],
      base: 'ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6',
      name: 'Living Tree',
      display: 'tree',
      symbol: 'TREE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png',
          theme: {
            primary_color_hex: '#469743'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      type_asset: 'cw20',
      address: 'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      denom_units: [{
          denom: 'ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112',
          exponent: 0,
          aliases: ['cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      base: 'ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
          theme: {
            primary_color_hex: '#04ccab'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Apemos',
      type_asset: 'cw20',
      address: 'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      denom_units: [{
          denom: 'ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD',
          exponent: 0,
          aliases: ['cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      base: 'ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
          theme: {
            primary_color_hex: '#4d5264'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      type_asset: 'cw20',
      address: 'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      denom_units: [{
          denom: 'ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70',
          exponent: 0,
          aliases: ['cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      base: 'ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
          theme: {
            primary_color_hex: '#f49c4c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Doge Apr',
      type_asset: 'cw20',
      address: 'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      denom_units: [{
          denom: 'ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72',
          exponent: 0,
          aliases: ['cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      base: 'ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
          theme: {
            primary_color_hex: '#d6a84f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Osmo Pepe',
      type_asset: 'cw20',
      address: 'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      denom_units: [{
          denom: 'ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF',
          exponent: 0,
          aliases: ['cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7']
        }, {
          denom: 'pepe',
          exponent: 6
        }],
      base: 'ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF',
      name: 'Osmo Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png',
          theme: {
            primary_color_hex: '#f3c79e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Catmos',
      type_asset: 'cw20',
      address: 'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      denom_units: [{
          denom: 'ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39',
          exponent: 0,
          aliases: ['cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      base: 'ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
          theme: {
            primary_color_hex: '#140c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Spacer',
      type_asset: 'cw20',
      address: 'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      denom_units: [{
          denom: 'ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10',
          exponent: 0,
          aliases: ['cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      base: 'ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
          theme: {
            primary_color_hex: '#695335'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      type_asset: 'cw20',
      address: 'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      denom_units: [{
          denom: 'ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9',
          exponent: 0,
          aliases: ['cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l']
        }, {
          denom: 'light',
          exponent: 9
        }],
      base: 'ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
          theme: {
            primary_color_hex: '#e5e5e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      type_asset: 'cw20',
      address: 'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      denom_units: [{
          denom: 'ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27',
          exponent: 0,
          aliases: ['cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      base: 'ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Void',
      type_asset: 'cw20',
      address: 'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      denom_units: [{
          denom: 'ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86',
          exponent: 0,
          aliases: ['cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8']
        }, {
          denom: 'void',
          exponent: 6
        }],
      base: 'ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
          theme: {
            primary_color_hex: '#5b2e96'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Silica',
      type_asset: 'cw20',
      address: 'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      denom_units: [{
          denom: 'ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E',
          exponent: 0,
          aliases: ['cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      base: 'ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
          theme: {
            primary_color_hex: '#21538f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Pepec',
      type_asset: 'cw20',
      address: 'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      denom_units: [{
          denom: 'ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857',
          exponent: 0,
          aliases: ['cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      base: 'ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
          theme: {
            primary_color_hex: '#e9bc37'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Palantin',
      type_asset: 'cw20',
      address: 'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      denom_units: [{
          denom: 'ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51',
          exponent: 0,
          aliases: ['cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp']
        }, {
          denom: 'pltn',
          exponent: 6
        }],
      base: 'ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51',
      name: 'Palantin',
      display: 'pltn',
      symbol: 'PLTN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Propose. Vote. Build.',
      type_asset: 'cw20',
      address: 'juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      denom_units: [{
          denom: 'ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8',
          exponent: 0,
          aliases: ['cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw']
        }, {
          denom: 'yfd',
          exponent: 6
        }],
      base: 'ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8',
      name: 'Y-Foundry DAO',
      display: 'yfd',
      symbol: 'YFD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg',
          theme: {
            primary_color_hex: '#dc542c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'ERIS liquid staked JUNO',
      type_asset: 'cw20',
      address: 'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      denom_units: [{
          denom: 'ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64',
          exponent: 0,
          aliases: ['cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a']
        }, {
          denom: 'ampJUNO',
          exponent: 6
        }],
      base: 'ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64',
      name: 'ERIS Amplified JUNO',
      display: 'ampJUNO',
      symbol: 'ampJUNO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BITS - Native token of Bitswift Cash',
      type_asset: 'cw20',
      address: 'juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      denom_units: [{
          denom: 'ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49',
          exponent: 0,
          aliases: ['cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h']
        }, {
          denom: 'bits',
          exponent: 8
        }],
      base: 'ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49',
      name: 'BITS',
      display: 'bits',
      symbol: 'BITS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png',
          theme: {
            primary_color_hex: '#7bbc43'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'The least memeable memecoin in existence. The cats have had their day, it\'s time for $POIL coin to take reign.',
      type_asset: 'cw20',
      address: 'juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      denom_units: [{
          denom: 'ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057',
          exponent: 0,
          aliases: ['cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw']
        }, {
          denom: 'poil',
          exponent: 6
        }],
      base: 'ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057',
      name: 'POIL',
      display: 'poil',
      symbol: 'POIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png',
          theme: {
            primary_color_hex: '#ef6d1d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Minerva was one of the main goddesses worshiped by the Roman Pagans and is a goddess from Roman Mythology.',
      type_asset: 'cw20',
      address: 'juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      denom_units: [{
          denom: 'ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2',
          exponent: 0,
          aliases: ['cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82']
        }, {
          denom: 'minerva',
          exponent: 6
        }],
      base: 'ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2',
      name: 'MINERVA',
      display: 'minerva',
      symbol: 'MRVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png',
          theme: {
            primary_color_hex: '#744c2f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'In Roman mythology, Juno (Latin: Iuno; pronounced [[Help:Pronunciation|[ˈjuːnoː]]]) was the protector and advisor of the state.',
      type_asset: 'cw20',
      address: 'juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      denom_units: [{
          denom: 'ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00',
          exponent: 0,
          aliases: ['cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk']
        }, {
          denom: 'luno',
          exponent: 6
        }],
      base: 'ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00',
      name: 'LUNO',
      display: 'luno',
      symbol: 'LUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'ATEN is NETA.',
      type_asset: 'cw20',
      address: 'juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      denom_units: [{
          denom: 'ibc/4226D7A5F93E94AD5BEA5C67AA067878280390C8D3D03049400F1590EEAC174E',
          exponent: 0,
          aliases: ['cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r']
        }, {
          denom: 'aten',
          exponent: 6
        }],
      base: 'ibc/4226D7A5F93E94AD5BEA5C67AA067878280390C8D3D03049400F1590EEAC174E',
      name: 'ATEN',
      display: 'aten',
      symbol: 'ATEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png',
          theme: {
            primary_color_hex: '#1e1d1d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'HERA is the goddess of marriage in Greek mythology.',
      type_asset: 'cw20',
      address: 'juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      denom_units: [{
          denom: 'ibc/CE97DE4B0BAA4D013E5FD4D8D067FA8ABDF244EF4A549135BEF25B5EBD96AFE0',
          exponent: 0,
          aliases: ['cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0']
        }, {
          denom: 'hera',
          exponent: 6
        }],
      base: 'ibc/CE97DE4B0BAA4D013E5FD4D8D067FA8ABDF244EF4A549135BEF25B5EBD96AFE0',
      name: 'HERA',
      display: 'hera',
      symbol: 'HERA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png',
          theme: {
            primary_color_hex: '#a9784c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked JUNO',
      type_asset: 'cw20',
      address: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      denom_units: [{
          denom: 'ibc/14B3B1CF026FBACF7D343ED40B6C61FC2C286CC64983F76B986F5E214F3785E6',
          exponent: 0,
          aliases: ['cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m']
        }, {
          denom: 'bJUNO',
          exponent: 6
        }],
      base: 'ibc/14B3B1CF026FBACF7D343ED40B6C61FC2C286CC64983F76B986F5E214F3785E6',
      name: 'BackBone Labs Liquid Staked JUNO',
      display: 'bJUNO',
      symbol: 'bJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png',
          theme: {
            primary_color_hex: '#d17e7f'
          }
        }],
      coingecko_id: 'backbone-labs-staked-juno'
    },
    {
      description: 'Airdrop For All [AFA - New Name on Cosmos Ecosystem, A4A - Old Name on TurtleNetwork] is a token from turtleNetwork towards cosmos ecosystem.',
      type_asset: 'cw20',
      address: 'juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      denom_units: [{
          denom: 'ibc/FAFBFE28EA6F983FEACFCED0D573B2D7E3788195664ACA29877555283660FAA2',
          exponent: 0,
          aliases: ['cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg']
        }],
      base: 'ibc/FAFBFE28EA6F983FEACFCED0D573B2D7E3788195664ACA29877555283660FAA2',
      name: 'Airdrop For All',
      display: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      symbol: 'AFA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png',
          theme: {
            primary_color_hex: '#f3cb0c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-163',
            base_denom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
            chain_name: 'juno'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45'
          }
        }]
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [{
          denom: 'ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD',
          exponent: 0,
          aliases: ['cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v']
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-103',
            base_denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            chain_name: 'migaloo'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Astrovault AXV',
      denom_units: [{
          denom: 'ibc/0E9D95B87EC0B34B0689B3E1BB9A31376BD380F22E357D21D5D6ED72B1DA7A4A',
          exponent: 0,
          aliases: ['cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      base: 'ibc/0E9D95B87EC0B34B0689B3E1BB9A31376BD380F22E357D21D5D6ED72B1DA7A4A',
      name: 'Astrovault AXV (Neutron)',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
        }],
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      coingecko_id: 'astrovault',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-1950',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151'
          }
        }]
    },
    {
      description: 'Astrovault xATOM on Neutron Chain',
      denom_units: [{
          denom: 'ibc/93CDA629E04C7E55B2A4BA99C244E0E2C3E0EB8B958FB417D07C002EFA655A9F',
          exponent: 0,
          aliases: ['cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj']
        }, {
          denom: 'xATOM',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      base: 'ibc/93CDA629E04C7E55B2A4BA99C244E0E2C3E0EB8B958FB417D07C002EFA655A9F',
      name: 'Astrovault xATOM (Neutron)',
      display: 'xATOM',
      symbol: 'xATOM',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-1950',
            base_denom: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
        }],
      coingecko_id: 'astrovault-xatom'
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      type_asset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denom_units: [{
          denom: 'ibc/00454780C89CD74EF846AA50C7ED3C7258075F3D7B1E3C527BE8FA19A6E8F32C',
          exponent: 0,
          aliases: ['cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49']
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'ibc/00454780C89CD74EF846AA50C7ED3C7258075F3D7B1E3C527BE8FA19A6E8F32C',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/0793FCB8E2507A2E10E982CBE9DD544832B0093FCD5CB54C6B629AA75BAB7323',
          exponent: 0,
          aliases: ['cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'ibc/0793FCB8E2507A2E10E982CBE9DD544832B0093FCD5CB54C6B629AA75BAB7323',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/43960E85CE53AC46C9353F91FBE65FDF6E817DEC583AFB208BE8C5379C681786',
          exponent: 0,
          aliases: ['cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg']
        }, {
          denom: 'airi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'ibc/43960E85CE53AC46C9353F91FBE65FDF6E817DEC583AFB208BE8C5379C681786',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/7BE0B80F1D97F481912E5DF37BC48FD0070A98EDDA6EDAA32255D7439B498DC4',
          exponent: 0,
          aliases: ['cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge']
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'ibc/7BE0B80F1D97F481912E5DF37BC48FD0070A98EDDA6EDAA32255D7439B498DC4',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/E87B465C619D3D094C81FA71DBECE858BF95BA7ACD092CCBCC006D3AB0476171',
          exponent: 0,
          aliases: ['cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5']
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'ibc/E87B465C619D3D094C81FA71DBECE858BF95BA7ACD092CCBCC006D3AB0476171',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/433D801D34CA7EF76231664CFCA977BE8B92E2C327BB7203C23AC0FBEC2BD9D2',
          exponent: 0,
          aliases: ['cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw']
        }, {
          denom: 'milky',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'ibc/433D801D34CA7EF76231664CFCA977BE8B92E2C327BB7203C23AC0FBEC2BD9D2',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/FF4AE67A638C561EAECCD8B86C4C2F55AE3E5C8D1B39D5E3D6F0287CC55C64E0',
          exponent: 0,
          aliases: ['cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp']
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'ibc/FF4AE67A638C561EAECCD8B86C4C2F55AE3E5C8D1B39D5E3D6F0287CC55C64E0',
      name: 'Scorai',
      display: 'scorai',
      coingecko_id: 'scorai',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/D299B875FBB5CCA848170C55E293A974618D15238DBE50D42DDB57E33A1CA7A9',
          exponent: 0,
          aliases: ['cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0']
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'ibc/D299B875FBB5CCA848170C55E293A974618D15238DBE50D42DDB57E33A1CA7A9',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/646BC7E542BB3B3C31D118830D7D12010A3C56B38E631D87731707B7DFE253ED',
          exponent: 0,
          aliases: ['cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq']
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'ibc/646BC7E542BB3B3C31D118830D7D12010A3C56B38E631D87731707B7DFE253ED',
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
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/F4457E829D31209950FCC5ED05D68AB62324F2369846A7A5CBF4FB880D43DA33',
          exponent: 0,
          aliases: ['cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt']
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'ibc/F4457E829D31209950FCC5ED05D68AB62324F2369846A7A5CBF4FB880D43DA33',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/73E63407B83B16343706630BCAC51B94D44A938E5B2FCBE5E0725B6936F18890',
          exponent: 0,
          aliases: ['cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez']
        }, {
          denom: 'weth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'ibc/73E63407B83B16343706630BCAC51B94D44A938E5B2FCBE5E0725B6936F18890',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primary_color_hex: '#303030'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/DCBF5429FBED78231627CC5D97A98EE590DE07B4056543026C97CD75805C2581',
          exponent: 0,
          aliases: ['cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd']
        }, {
          denom: 'btc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'ibc/DCBF5429FBED78231627CC5D97A98EE590DE07B4056543026C97CD75805C2581',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/603E2BB1F1A66A1A1F7B9BAA72B4BC191D28A3FFC676B8C0465E8017F5E3AC71',
          exponent: 0,
          aliases: ['cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q']
        }, {
          denom: 'och',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'ibc/603E2BB1F1A66A1A1F7B9BAA72B4BC191D28A3FFC676B8C0465E8017F5E3AC71',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingecko_id: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-140',
            base_denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
            chain_name: 'oraichain'
          },
          chain: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
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
          denom: 'ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/9E364F40A638A6F08CF66A238F60D07E460325BE93C796C16B4F415C99B37B76',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/9E364F40A638A6F08CF66A238F60D07E460325BE93C796C16B4F415C99B37B76',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/DDAFF03AA6D21FF4650CB2BCD83780A8916340286997B3FCE0FC113436C40642',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/DDAFF03AA6D21FF4650CB2BCD83780A8916340286997B3FCE0FC113436C40642',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/5C753083F57A4B33F144AA021F43CD05D04EF51325CC39014E87538FBDBDBD85',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/5C753083F57A4B33F144AA021F43CD05D04EF51325CC39014E87538FBDBDBD85',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/0D9A62FBA4D7FBE8F92B4DE8EA5EE391B8CFFC811062EF8CE506A267A03B0454',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/0D9A62FBA4D7FBE8F92B4DE8EA5EE391B8CFFC811062EF8CE506A267A03B0454',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/FEB4BA4CA111561EDF309DD9710CA0B7E3C0E761C0F3A85263820E200BE59E99',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/FEB4BA4CA111561EDF309DD9710CA0B7E3C0E761C0F3A85263820E200BE59E99',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/0F9AEB987E983D76A8B423F4495F1AF19BEEF991F34E3B5DDB68460B66876A7E',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/0F9AEB987E983D76A8B423F4495F1AF19BEEF991F34E3B5DDB68460B66876A7E',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
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
          denom: 'ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/023202E278EBF1F6BBC3DEB6B890502C08896CE21CFEA69A6D28455EF33697E1',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/023202E278EBF1F6BBC3DEB6B890502C08896CE21CFEA69A6D28455EF33697E1',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/2DF2142B8062EFBFC45DE5C69565BD265EC25DD3F469223876C96EF7536CD1B3',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/2DF2142B8062EFBFC45DE5C69565BD265EC25DD3F469223876C96EF7536CD1B3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/5A64BCACA631B6C2BB520AFE8283C6C83E8EE44C4B39D6298C7C8915BC38DF5B',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/5A64BCACA631B6C2BB520AFE8283C6C83E8EE44C4B39D6298C7C8915BC38DF5B',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
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
          denom: 'ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/9E364F40A638A6F08CF66A238F60D07E460325BE93C796C16B4F415C99B37B76',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/9E364F40A638A6F08CF66A238F60D07E460325BE93C796C16B4F415C99B37B76',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/DDAFF03AA6D21FF4650CB2BCD83780A8916340286997B3FCE0FC113436C40642',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/DDAFF03AA6D21FF4650CB2BCD83780A8916340286997B3FCE0FC113436C40642',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/5C753083F57A4B33F144AA021F43CD05D04EF51325CC39014E87538FBDBDBD85',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/5C753083F57A4B33F144AA021F43CD05D04EF51325CC39014E87538FBDBDBD85',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/0D9A62FBA4D7FBE8F92B4DE8EA5EE391B8CFFC811062EF8CE506A267A03B0454',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/0D9A62FBA4D7FBE8F92B4DE8EA5EE391B8CFFC811062EF8CE506A267A03B0454',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/FEB4BA4CA111561EDF309DD9710CA0B7E3C0E761C0F3A85263820E200BE59E99',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/FEB4BA4CA111561EDF309DD9710CA0B7E3C0E761C0F3A85263820E200BE59E99',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/0F9AEB987E983D76A8B423F4495F1AF19BEEF991F34E3B5DDB68460B66876A7E',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/0F9AEB987E983D76A8B423F4495F1AF19BEEF991F34E3B5DDB68460B66876A7E',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
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
          denom: 'ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/023202E278EBF1F6BBC3DEB6B890502C08896CE21CFEA69A6D28455EF33697E1',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/023202E278EBF1F6BBC3DEB6B890502C08896CE21CFEA69A6D28455EF33697E1',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/2DF2142B8062EFBFC45DE5C69565BD265EC25DD3F469223876C96EF7536CD1B3',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/2DF2142B8062EFBFC45DE5C69565BD265EC25DD3F469223876C96EF7536CD1B3',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/5A64BCACA631B6C2BB520AFE8283C6C83E8EE44C4B39D6298C7C8915BC38DF5B',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/5A64BCACA631B6C2BB520AFE8283C6C83E8EE44C4B39D6298C7C8915BC38DF5B',
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
            channel_id: 'channel-382',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-127'
          }
        }]
    }
  ]
};
export default assets;
    