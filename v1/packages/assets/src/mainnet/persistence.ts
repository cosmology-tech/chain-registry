import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'persistence',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/5BCA39AEE3A48194602328FF11D873FCC61ADDD40C7F1BBB7B05C9AA2896B407',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/5BCA39AEE3A48194602328FF11D873FCC61ADDD40C7F1BBB7B05C9AA2896B407',
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
            channel_id: 'channel-72',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/6E73A953427F83D642FF19A844C2FC38DDFFB7311A4FF25BCD87F33215A56CFF',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/6E73A953427F83D642FF19A844C2FC38DDFFB7311A4FF25BCD87F33215A56CFF',
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
            channel_id: 'channel-72',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/3B6578698023BE802272D184CCA5B84C865546467D0548EC148ECEB91C6F714C',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/3B6578698023BE802272D184CCA5B84C865546467D0548EC148ECEB91C6F714C',
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
            channel_id: 'channel-127',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-213'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
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
            channel_id: 'channel-94',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-203'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/4E7257D6B8EBFB10B5FF9092D992D9A11D001C8BB7D877134CE657647FF6AFAE',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/4E7257D6B8EBFB10B5FF9092D992D9A11D001C8BB7D877134CE657647FF6AFAE',
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
            channel_id: 'channel-57',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/4F69220C2F5F70BA0B0B66B4534F7916C529EB8350BF5EDF2B8D56682D8F2C9C',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/4F69220C2F5F70BA0B0B66B4534F7916C529EB8350BF5EDF2B8D56682D8F2C9C',
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
            channel_id: 'channel-57',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/F190D85E03B064A5BB7743B77394857D602BAAA1A4E8A2E8AFC227F4D3E9BECB',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/F190D85E03B064A5BB7743B77394857D602BAAA1A4E8A2E8AFC227F4D3E9BECB',
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
            channel_id: 'channel-57',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
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
            channel_id: 'channel-190',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/25877BD1436C689E501A281CE82647CC9649EBFE0D38CB2AB0B8C17ACB9BD921',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/25877BD1436C689E501A281CE82647CC9649EBFE0D38CB2AB0B8C17ACB9BD921',
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
            channel_id: 'channel-30',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/92818A7F38A90C0D2CFBA5409417F0A2AC1E4B46B2D4E4869DD96081EC39A874',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/92818A7F38A90C0D2CFBA5409417F0A2AC1E4B46B2D4E4869DD96081EC39A874',
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
            channel_id: 'channel-30',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primary_color_hex: '#0c2c71'
          }
        }],
      socials: {
        website: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-131'
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
            channel_id: 'channel-24',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
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
            channel_id: 'channel-82',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/4D4C6AB745B925711964030E90B16A9444ACE09A62051868DE2DE745185AA965',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/4D4C6AB745B925711964030E90B16A9444ACE09A62051868DE2DE745185AA965',
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
            channel_id: 'channel-82',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/5ED709CB17ED2CE8A947D17C7880910CBCFA21742D8AF5835F47026A8BD75B18',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/5ED709CB17ED2CE8A947D17C7880910CBCFA21742D8AF5835F47026A8BD75B18',
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
            channel_id: 'channel-82',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/017871DB6039C5475238949FEAC22EB77F339511C79B852A21DF150C300EFD7C',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/017871DB6039C5475238949FEAC22EB77F339511C79B852A21DF150C300EFD7C',
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
            channel_id: 'channel-82',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/874B761C3559D9CAFC1E55C3761F22DEA6A3E1F9258D3734316C28A1EFE4C6A1',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/874B761C3559D9CAFC1E55C3761F22DEA6A3E1F9258D3734316C28A1EFE4C6A1',
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
            channel_id: 'channel-82',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/4E3FA983B370F8B1697AD6A10F7EC0F983CFFFC6C86152D5B37A72A1B65B38D0',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/4E3FA983B370F8B1697AD6A10F7EC0F983CFFFC6C86152D5B37A72A1B65B38D0',
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
            channel_id: 'channel-82',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/4E05C4170B86C3BECC88B91B0424AB8A13F38A3A053E60F7FD25FE07A51827BB',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/4E05C4170B86C3BECC88B91B0424AB8A13F38A3A053E60F7FD25FE07A51827BB',
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
            channel_id: 'channel-82',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/0AF7D43CA8D477D5E83CF5857717D025954E0102AC439DB957B168CBFB99EE77',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/0AF7D43CA8D477D5E83CF5857717D025954E0102AC439DB957B168CBFB99EE77',
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
            channel_id: 'channel-82',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B',
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
            channel_id: 'channel-15',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F',
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
            channel_id: 'channel-33',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/1D1218E270EC508BAF00AEA3EB24E6FA50C19D93AFABD406886633098D0B76B0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/1D1218E270EC508BAF00AEA3EB24E6FA50C19D93AFABD406886633098D0B76B0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/9B4A725BA18733BEA727BE42A1B2438177CF545BA2F2CE1B295DF9FBCB0F3C76',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/9B4A725BA18733BEA727BE42A1B2438177CF545BA2F2CE1B295DF9FBCB0F3C76',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/8E9B60996FD71950B0A147F79ED469EF4EE8EB6E5887EB3C802CA6F3E85AEE8A',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/8E9B60996FD71950B0A147F79ED469EF4EE8EB6E5887EB3C802CA6F3E85AEE8A',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/B7136D180EE06B80585209B9C12C5069B2FFA949658A3146D31F76DE2BB0DA51',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/B7136D180EE06B80585209B9C12C5069B2FFA949658A3146D31F76DE2BB0DA51',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
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
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/98248BECF49363FACC3BA46A557771ED4F9F593F821D7E390BD89E201441E12D',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/98248BECF49363FACC3BA46A557771ED4F9F593F821D7E390BD89E201441E12D',
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
            channel_id: 'channel-158',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-152'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
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
            channel_id: 'channel-49',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
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
            channel_id: 'channel-49',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
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
            channel_id: 'channel-49',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
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
            channel_id: 'channel-49',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/81D03D8FCD6171B36317A487BF846D75D1178F252D204C01A0986AB371971FC1',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/81D03D8FCD6171B36317A487BF846D75D1178F252D204C01A0986AB371971FC1',
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
            channel_id: 'channel-36',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/BA279CFC912BC0D7515522C217126891F1AB46B37ECB418BE066808097E7FC52',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/BA279CFC912BC0D7515522C217126891F1AB46B37ECB418BE066808097E7FC52',
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
            channel_id: 'channel-36',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/AC942F8AADBB1E5986991F465322BE5B18F2234DE7F8C9F6EDAFF3D740B006B3',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/AC942F8AADBB1E5986991F465322BE5B18F2234DE7F8C9F6EDAFF3D740B006B3',
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
            channel_id: 'channel-36',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
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
            channel_id: 'channel-4',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389',
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
            channel_id: 'channel-4',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/5BCA39AEE3A48194602328FF11D873FCC61ADDD40C7F1BBB7B05C9AA2896B407',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/5BCA39AEE3A48194602328FF11D873FCC61ADDD40C7F1BBB7B05C9AA2896B407',
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
            channel_id: 'channel-72',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/6E73A953427F83D642FF19A844C2FC38DDFFB7311A4FF25BCD87F33215A56CFF',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/6E73A953427F83D642FF19A844C2FC38DDFFB7311A4FF25BCD87F33215A56CFF',
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
            channel_id: 'channel-72',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/3B6578698023BE802272D184CCA5B84C865546467D0548EC148ECEB91C6F714C',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/3B6578698023BE802272D184CCA5B84C865546467D0548EC148ECEB91C6F714C',
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
            channel_id: 'channel-127',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-213'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
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
            channel_id: 'channel-94',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-203'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/4E7257D6B8EBFB10B5FF9092D992D9A11D001C8BB7D877134CE657647FF6AFAE',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/4E7257D6B8EBFB10B5FF9092D992D9A11D001C8BB7D877134CE657647FF6AFAE',
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
            channel_id: 'channel-57',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/4F69220C2F5F70BA0B0B66B4534F7916C529EB8350BF5EDF2B8D56682D8F2C9C',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/4F69220C2F5F70BA0B0B66B4534F7916C529EB8350BF5EDF2B8D56682D8F2C9C',
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
            channel_id: 'channel-57',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/F190D85E03B064A5BB7743B77394857D602BAAA1A4E8A2E8AFC227F4D3E9BECB',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/F190D85E03B064A5BB7743B77394857D602BAAA1A4E8A2E8AFC227F4D3E9BECB',
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
            channel_id: 'channel-57',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
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
            channel_id: 'channel-190',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/25877BD1436C689E501A281CE82647CC9649EBFE0D38CB2AB0B8C17ACB9BD921',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/25877BD1436C689E501A281CE82647CC9649EBFE0D38CB2AB0B8C17ACB9BD921',
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
            channel_id: 'channel-30',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/92818A7F38A90C0D2CFBA5409417F0A2AC1E4B46B2D4E4869DD96081EC39A874',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/92818A7F38A90C0D2CFBA5409417F0A2AC1E4B46B2D4E4869DD96081EC39A874',
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
            channel_id: 'channel-30',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primary_color_hex: '#0c2c71'
          }
        }],
      socials: {
        website: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-131'
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
            channel_id: 'channel-24',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
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
            channel_id: 'channel-82',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/4D4C6AB745B925711964030E90B16A9444ACE09A62051868DE2DE745185AA965',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/4D4C6AB745B925711964030E90B16A9444ACE09A62051868DE2DE745185AA965',
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
            channel_id: 'channel-82',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/5ED709CB17ED2CE8A947D17C7880910CBCFA21742D8AF5835F47026A8BD75B18',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/5ED709CB17ED2CE8A947D17C7880910CBCFA21742D8AF5835F47026A8BD75B18',
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
            channel_id: 'channel-82',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/017871DB6039C5475238949FEAC22EB77F339511C79B852A21DF150C300EFD7C',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/017871DB6039C5475238949FEAC22EB77F339511C79B852A21DF150C300EFD7C',
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
            channel_id: 'channel-82',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/874B761C3559D9CAFC1E55C3761F22DEA6A3E1F9258D3734316C28A1EFE4C6A1',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/874B761C3559D9CAFC1E55C3761F22DEA6A3E1F9258D3734316C28A1EFE4C6A1',
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
            channel_id: 'channel-82',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/4E3FA983B370F8B1697AD6A10F7EC0F983CFFFC6C86152D5B37A72A1B65B38D0',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/4E3FA983B370F8B1697AD6A10F7EC0F983CFFFC6C86152D5B37A72A1B65B38D0',
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
            channel_id: 'channel-82',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/4E05C4170B86C3BECC88B91B0424AB8A13F38A3A053E60F7FD25FE07A51827BB',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/4E05C4170B86C3BECC88B91B0424AB8A13F38A3A053E60F7FD25FE07A51827BB',
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
            channel_id: 'channel-82',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/0AF7D43CA8D477D5E83CF5857717D025954E0102AC439DB957B168CBFB99EE77',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/0AF7D43CA8D477D5E83CF5857717D025954E0102AC439DB957B168CBFB99EE77',
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
            channel_id: 'channel-82',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B',
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
            channel_id: 'channel-15',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F',
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
            channel_id: 'channel-33',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/1D1218E270EC508BAF00AEA3EB24E6FA50C19D93AFABD406886633098D0B76B0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/1D1218E270EC508BAF00AEA3EB24E6FA50C19D93AFABD406886633098D0B76B0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/9B4A725BA18733BEA727BE42A1B2438177CF545BA2F2CE1B295DF9FBCB0F3C76',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/9B4A725BA18733BEA727BE42A1B2438177CF545BA2F2CE1B295DF9FBCB0F3C76',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/8E9B60996FD71950B0A147F79ED469EF4EE8EB6E5887EB3C802CA6F3E85AEE8A',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/8E9B60996FD71950B0A147F79ED469EF4EE8EB6E5887EB3C802CA6F3E85AEE8A',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/B7136D180EE06B80585209B9C12C5069B2FFA949658A3146D31F76DE2BB0DA51',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/B7136D180EE06B80585209B9C12C5069B2FFA949658A3146D31F76DE2BB0DA51',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-129'
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
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/98248BECF49363FACC3BA46A557771ED4F9F593F821D7E390BD89E201441E12D',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/98248BECF49363FACC3BA46A557771ED4F9F593F821D7E390BD89E201441E12D',
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
            channel_id: 'channel-158',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-152'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
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
            channel_id: 'channel-49',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
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
            channel_id: 'channel-49',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
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
            channel_id: 'channel-49',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
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
            channel_id: 'channel-49',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/81D03D8FCD6171B36317A487BF846D75D1178F252D204C01A0986AB371971FC1',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/81D03D8FCD6171B36317A487BF846D75D1178F252D204C01A0986AB371971FC1',
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
            channel_id: 'channel-36',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/BA279CFC912BC0D7515522C217126891F1AB46B37ECB418BE066808097E7FC52',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/BA279CFC912BC0D7515522C217126891F1AB46B37ECB418BE066808097E7FC52',
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
            channel_id: 'channel-36',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/AC942F8AADBB1E5986991F465322BE5B18F2234DE7F8C9F6EDAFF3D740B006B3',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/AC942F8AADBB1E5986991F465322BE5B18F2234DE7F8C9F6EDAFF3D740B006B3',
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
            channel_id: 'channel-36',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
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
            channel_id: 'channel-4',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389',
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
            channel_id: 'channel-4',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/E40F6BAB4FFBDB908F63366155A793AB6B42EEB4FCD856C1DF7C91BE7F252D61',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/E40F6BAB4FFBDB908F63366155A793AB6B42EEB4FCD856C1DF7C91BE7F252D61',
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
            channel_id: 'channel-16',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primary_color_hex: '#56b790'
          }
        }],
      socials: {
        website: 'https://www.regen.network/',
        twitter: 'https://twitter.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7175DE4BF0BA4019D7187298E60CCB37A84006AEA8194D0471B2870813969D1F',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7175DE4BF0BA4019D7187298E60CCB37A84006AEA8194D0471B2870813969D1F',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primary_color_hex: '#171c25'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/8AD0356E16A8EC966F71C62016EECF54239762CC276BA1BAB4F954423951CF5C',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/8AD0356E16A8EC966F71C62016EECF54239762CC276BA1BAB4F954423951CF5C',
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
            channel_id: 'channel-64',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-82'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04',
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
            channel_id: 'channel-15',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A',
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
            channel_id: 'channel-7',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
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
            channel_id: 'channel-287',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-197'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      coingecko_id: 'starname',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primary_color_hex: '#5c64b4'
          }
        }],
      socials: {
        website: 'https://app.starname.me/',
        twitter: 'https://twitter.com/starname_me'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/C98348DF19AA429B2202B408DD87332BA3A9533CC626E507F5A16082F26FCF16',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/C98348DF19AA429B2202B408DD87332BA3A9533CC626E507F5A16082F26FCF16',
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
            channel_id: 'channel-53',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-67'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/16CB664A4DFCCC37C0EF0A0591AD0EF3BB93A0809A5B6BBC86F8F1533D5E4F58',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/16CB664A4DFCCC37C0EF0A0591AD0EF3BB93A0809A5B6BBC86F8F1533D5E4F58',
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
            channel_id: 'channel-51',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/E40F6BAB4FFBDB908F63366155A793AB6B42EEB4FCD856C1DF7C91BE7F252D61',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/E40F6BAB4FFBDB908F63366155A793AB6B42EEB4FCD856C1DF7C91BE7F252D61',
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
            channel_id: 'channel-16',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-73'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primary_color_hex: '#56b790'
          }
        }],
      socials: {
        website: 'https://www.regen.network/',
        twitter: 'https://twitter.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7175DE4BF0BA4019D7187298E60CCB37A84006AEA8194D0471B2870813969D1F',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7175DE4BF0BA4019D7187298E60CCB37A84006AEA8194D0471B2870813969D1F',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primary_color_hex: '#171c25'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-21'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/8AD0356E16A8EC966F71C62016EECF54239762CC276BA1BAB4F954423951CF5C',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/8AD0356E16A8EC966F71C62016EECF54239762CC276BA1BAB4F954423951CF5C',
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
            channel_id: 'channel-64',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-82'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04',
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
            channel_id: 'channel-15',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A',
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
            channel_id: 'channel-7',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
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
            channel_id: 'channel-287',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-197'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      coingecko_id: 'starname',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primary_color_hex: '#5c64b4'
          }
        }],
      socials: {
        website: 'https://app.starname.me/',
        twitter: 'https://twitter.com/starname_me'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/C98348DF19AA429B2202B408DD87332BA3A9533CC626E507F5A16082F26FCF16',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/C98348DF19AA429B2202B408DD87332BA3A9533CC626E507F5A16082F26FCF16',
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
            channel_id: 'channel-53',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-67'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/16CB664A4DFCCC37C0EF0A0591AD0EF3BB93A0809A5B6BBC86F8F1533D5E4F58',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/16CB664A4DFCCC37C0EF0A0591AD0EF3BB93A0809A5B6BBC86F8F1533D5E4F58',
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
            channel_id: 'channel-51',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/68518DD026EC5D3BD14CDDD85B7BA5325613A5F8E262A9FE38EA9C5A30858178',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/68518DD026EC5D3BD14CDDD85B7BA5325613A5F8E262A9FE38EA9C5A30858178',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/EBC1C04E9027F7AF0DA11F5B8B57486C89666CF78D83394E276D1C7FD1DF505E',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/EBC1C04E9027F7AF0DA11F5B8B57486C89666CF78D83394E276D1C7FD1DF505E',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/BC67610F1AA72BE9DEABAC3F3D5A04CEB575DA8DF675B0FDD3FC1A0F02411541',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/BC67610F1AA72BE9DEABAC3F3D5A04CEB575DA8DF675B0FDD3FC1A0F02411541',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/2109E1D3B5EADB28EF9BD864C3EDACC4E2D61E96A1BF172CEFAEAD7240C52300',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/2109E1D3B5EADB28EF9BD864C3EDACC4E2D61E96A1BF172CEFAEAD7240C52300',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/EFB90BFE39BC367F182DC3A6EA8C26BB61D049CB4AE3F8309F1BC1C5213E8F8E',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/EFB90BFE39BC367F182DC3A6EA8C26BB61D049CB4AE3F8309F1BC1C5213E8F8E',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/38BD2305971B1204C579A8035E124F0BD22E95A97222E710534C59234D62313C',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/38BD2305971B1204C579A8035E124F0BD22E95A97222E710534C59234D62313C',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/D0E42EF41DCF434D5C871A6E32E9C6FA826FBF5973C88FD8F1742190906B9519',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/D0E42EF41DCF434D5C871A6E32E9C6FA826FBF5973C88FD8F1742190906B9519',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/52A56EDD3489C0ED48BD3EE0E9C851709418372B8580730CC4C51BDBA8C477B9',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/52A56EDD3489C0ED48BD3EE0E9C851709418372B8580730CC4C51BDBA8C477B9',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/68518DD026EC5D3BD14CDDD85B7BA5325613A5F8E262A9FE38EA9C5A30858178',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/68518DD026EC5D3BD14CDDD85B7BA5325613A5F8E262A9FE38EA9C5A30858178',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/EBC1C04E9027F7AF0DA11F5B8B57486C89666CF78D83394E276D1C7FD1DF505E',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/EBC1C04E9027F7AF0DA11F5B8B57486C89666CF78D83394E276D1C7FD1DF505E',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/BC67610F1AA72BE9DEABAC3F3D5A04CEB575DA8DF675B0FDD3FC1A0F02411541',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/BC67610F1AA72BE9DEABAC3F3D5A04CEB575DA8DF675B0FDD3FC1A0F02411541',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/2109E1D3B5EADB28EF9BD864C3EDACC4E2D61E96A1BF172CEFAEAD7240C52300',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/2109E1D3B5EADB28EF9BD864C3EDACC4E2D61E96A1BF172CEFAEAD7240C52300',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/EFB90BFE39BC367F182DC3A6EA8C26BB61D049CB4AE3F8309F1BC1C5213E8F8E',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/EFB90BFE39BC367F182DC3A6EA8C26BB61D049CB4AE3F8309F1BC1C5213E8F8E',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/38BD2305971B1204C579A8035E124F0BD22E95A97222E710534C59234D62313C',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/38BD2305971B1204C579A8035E124F0BD22E95A97222E710534C59234D62313C',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/D0E42EF41DCF434D5C871A6E32E9C6FA826FBF5973C88FD8F1742190906B9519',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/D0E42EF41DCF434D5C871A6E32E9C6FA826FBF5973C88FD8F1742190906B9519',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/52A56EDD3489C0ED48BD3EE0E9C851709418372B8580730CC4C51BDBA8C477B9',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/52A56EDD3489C0ED48BD3EE0E9C851709418372B8580730CC4C51BDBA8C477B9',
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
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159'
          }
        }]
    }
  ]
};
export default assets;
    