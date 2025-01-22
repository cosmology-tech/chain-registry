import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'chihuahua',
  assets: [
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/BFAA5FC8AAC1A59A7577865BA6FC22E8FCC375A4DFD1EEF53D7640F64DCFA682',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/BFAA5FC8AAC1A59A7577865BA6FC22E8FCC375A4DFD1EEF53D7640F64DCFA682',
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
            channel_id: 'channel-58',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C',
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
            channel_id: 'channel-28',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/FA7112322CE7656DC84D441E49BAEAB9DC0AB3C7618A178A212CDE8B3F17C70B',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/FA7112322CE7656DC84D441E49BAEAB9DC0AB3C7618A178A212CDE8B3F17C70B',
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
            channel_id: 'channel-10',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/602B2AB3379A9917CB9E7BA6DA2B8F63AD842DAD36D1B36CCDBF3AB620B60904',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/602B2AB3379A9917CB9E7BA6DA2B8F63AD842DAD36D1B36CCDBF3AB620B60904',
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
            channel_id: 'channel-51',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/D4304FA0CACDC3BFE92A8D5744BF0049BFBB3BA341C0B02A567DB3809988E506',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/D4304FA0CACDC3BFE92A8D5744BF0049BFBB3BA341C0B02A567DB3809988E506',
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
            channel_id: 'channel-51',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/EB10702584F8C2E8693F503FA5FC6117A53538708CC50110BB2C9E8D23B6079F',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/EB10702584F8C2E8693F503FA5FC6117A53538708CC50110BB2C9E8D23B6079F',
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
            channel_id: 'channel-51',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/6816D0A95C79B728BC976A63B633609510009D102630E68C0922A505C6C9B02F',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/6816D0A95C79B728BC976A63B633609510009D102630E68C0922A505C6C9B02F',
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
            channel_id: 'channel-51',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'The native token of OKExChain',
      denom_units: [{
          denom: 'ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
          theme: {
            primary_color_hex: '#bbbbbb'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'wei',
            chain_name: 'okexchain'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
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
            channel_id: 'channel-113',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
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
            channel_id: 'channel-113',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/D1489F3713939AE235BE7C4D6D01C49B3A67791D86F79520EE67CFA4A1A88846',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/D1489F3713939AE235BE7C4D6D01C49B3A67791D86F79520EE67CFA4A1A88846',
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
            channel_id: 'channel-203',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-94'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09',
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
            channel_id: 'channel-11',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/C6BF622B73A9FD6E1A27EBC432AAA2B7089D0F47DB2EFEF4D9ABA938DDB8E4F7',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/C6BF622B73A9FD6E1A27EBC432AAA2B7089D0F47DB2EFEF4D9ABA938DDB8E4F7',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-25'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/BFAA5FC8AAC1A59A7577865BA6FC22E8FCC375A4DFD1EEF53D7640F64DCFA682',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/BFAA5FC8AAC1A59A7577865BA6FC22E8FCC375A4DFD1EEF53D7640F64DCFA682',
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
            channel_id: 'channel-58',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C',
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
            channel_id: 'channel-28',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/FA7112322CE7656DC84D441E49BAEAB9DC0AB3C7618A178A212CDE8B3F17C70B',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/FA7112322CE7656DC84D441E49BAEAB9DC0AB3C7618A178A212CDE8B3F17C70B',
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
            channel_id: 'channel-10',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/602B2AB3379A9917CB9E7BA6DA2B8F63AD842DAD36D1B36CCDBF3AB620B60904',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/602B2AB3379A9917CB9E7BA6DA2B8F63AD842DAD36D1B36CCDBF3AB620B60904',
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
            channel_id: 'channel-51',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/D4304FA0CACDC3BFE92A8D5744BF0049BFBB3BA341C0B02A567DB3809988E506',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/D4304FA0CACDC3BFE92A8D5744BF0049BFBB3BA341C0B02A567DB3809988E506',
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
            channel_id: 'channel-51',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/EB10702584F8C2E8693F503FA5FC6117A53538708CC50110BB2C9E8D23B6079F',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/EB10702584F8C2E8693F503FA5FC6117A53538708CC50110BB2C9E8D23B6079F',
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
            channel_id: 'channel-51',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/6816D0A95C79B728BC976A63B633609510009D102630E68C0922A505C6C9B02F',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/6816D0A95C79B728BC976A63B633609510009D102630E68C0922A505C6C9B02F',
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
            channel_id: 'channel-51',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-76'
          }
        }]
    },
    {
      description: 'The native token of OKExChain',
      denom_units: [{
          denom: 'ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
          theme: {
            primary_color_hex: '#bbbbbb'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'wei',
            chain_name: 'okexchain'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
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
            channel_id: 'channel-113',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
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
            channel_id: 'channel-113',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/D1489F3713939AE235BE7C4D6D01C49B3A67791D86F79520EE67CFA4A1A88846',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/D1489F3713939AE235BE7C4D6D01C49B3A67791D86F79520EE67CFA4A1A88846',
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
            channel_id: 'channel-203',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-94'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09',
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
            channel_id: 'channel-11',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/C6BF622B73A9FD6E1A27EBC432AAA2B7089D0F47DB2EFEF4D9ABA938DDB8E4F7',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/C6BF622B73A9FD6E1A27EBC432AAA2B7089D0F47DB2EFEF4D9ABA938DDB8E4F7',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-25'
          }
        }]
    },
    {
      description: 'Astrovault AXV',
      denom_units: [{
          denom: 'ibc/805F86B82C5782CB7F963CCE012D5C427E2B64A7374F5E277C24A5FD3266FE75',
          exponent: 0,
          aliases: ['cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      base: 'ibc/805F86B82C5782CB7F963CCE012D5C427E2B64A7374F5E277C24A5FD3266FE75',
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
            channel_id: 'channel-52',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Astrovault xATOM on Neutron Chain',
      denom_units: [{
          denom: 'ibc/1860BA72ADAB5D2061234A0745D990C4018D1339281B2E603AD0B66884463B38',
          exponent: 0,
          aliases: ['cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj']
        }, {
          denom: 'xATOM',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      base: 'ibc/1860BA72ADAB5D2061234A0745D990C4018D1339281B2E603AD0B66884463B38',
      name: 'Astrovault xATOM (Neutron)',
      display: 'xATOM',
      symbol: 'xATOM',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-52',
            base_denom: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77'
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
      description: 'Astrovault AXV',
      denom_units: [{
          denom: 'ibc/805F86B82C5782CB7F963CCE012D5C427E2B64A7374F5E277C24A5FD3266FE75',
          exponent: 0,
          aliases: ['cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af']
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      base: 'ibc/805F86B82C5782CB7F963CCE012D5C427E2B64A7374F5E277C24A5FD3266FE75',
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
            channel_id: 'channel-52',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Astrovault xATOM on Neutron Chain',
      denom_units: [{
          denom: 'ibc/1860BA72ADAB5D2061234A0745D990C4018D1339281B2E603AD0B66884463B38',
          exponent: 0,
          aliases: ['cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj']
        }, {
          denom: 'xATOM',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      base: 'ibc/1860BA72ADAB5D2061234A0745D990C4018D1339281B2E603AD0B66884463B38',
      name: 'Astrovault xATOM (Neutron)',
      display: 'xATOM',
      symbol: 'xATOM',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-52',
            base_denom: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
            chain_name: 'neutron'
          },
          chain: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77'
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
    }
  ]
};
export default assets;
    