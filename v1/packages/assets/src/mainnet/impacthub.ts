import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'impacthub',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/0973E5F82D860F674100F65F7FC0EA802CCCDA41908AA02B5062B1ADD185D3D4',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/0973E5F82D860F674100F65F7FC0EA802CCCDA41908AA02B5062B1ADD185D3D4',
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
            channel_id: 'channel-114',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
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
            channel_id: 'channel-204',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/0973E5F82D860F674100F65F7FC0EA802CCCDA41908AA02B5062B1ADD185D3D4',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/0973E5F82D860F674100F65F7FC0EA802CCCDA41908AA02B5062B1ADD185D3D4',
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
            channel_id: 'channel-114',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
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
            channel_id: 'channel-204',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/973B6AA184C79CEDFA064ED90E28B8BC89F7E37B0ECF73A71AE419A5245AAB2A',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/973B6AA184C79CEDFA064ED90E28B8BC89F7E37B0ECF73A71AE419A5245AAB2A',
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
            channel_id: 'channel-15',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/852810D059CF0DDB254500D14BB98233DEF8827086F2B8E4F9E6053BF02377FC',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/852810D059CF0DDB254500D14BB98233DEF8827086F2B8E4F9E6053BF02377FC',
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
            channel_id: 'channel-15',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/F26798B51B0ED9DFF124C45B813573C431E42C2CA4AE5D4D3A9CF77028BAE1EB',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/F26798B51B0ED9DFF124C45B813573C431E42C2CA4AE5D4D3A9CF77028BAE1EB',
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
            channel_id: 'channel-15',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
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
            channel_id: 'channel-38',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
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
            channel_id: 'channel-38',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F',
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
            channel_id: 'channel-15',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/973B6AA184C79CEDFA064ED90E28B8BC89F7E37B0ECF73A71AE419A5245AAB2A',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/973B6AA184C79CEDFA064ED90E28B8BC89F7E37B0ECF73A71AE419A5245AAB2A',
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
            channel_id: 'channel-15',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/852810D059CF0DDB254500D14BB98233DEF8827086F2B8E4F9E6053BF02377FC',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/852810D059CF0DDB254500D14BB98233DEF8827086F2B8E4F9E6053BF02377FC',
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
            channel_id: 'channel-15',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/F26798B51B0ED9DFF124C45B813573C431E42C2CA4AE5D4D3A9CF77028BAE1EB',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/F26798B51B0ED9DFF124C45B813573C431E42C2CA4AE5D4D3A9CF77028BAE1EB',
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
            channel_id: 'channel-15',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
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
            channel_id: 'channel-38',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
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
            channel_id: 'channel-38',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F',
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
            channel_id: 'channel-15',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    }
  ]
};
export default assets;
    