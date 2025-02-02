import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'regen',
  assets: [
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
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
            channel_id: 'channel-13',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49',
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
            channel_id: 'channel-185',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7',
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
            channel_id: 'channel-25',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23',
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
            channel_id: 'channel-16',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/2C36BD1A8484EF8C711F40B07DD2627F8B94D9975BF420FC4E0D5265A852FB93',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/2C36BD1A8484EF8C711F40B07DD2627F8B94D9975BF420FC4E0D5265A852FB93',
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
            channel_id: 'channel-68',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6EC13207066DF7215A8D7B23D4522C4427A69CF5B531B3A4ECB34A70A6B6F1BF',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6EC13207066DF7215A8D7B23D4522C4427A69CF5B531B3A4ECB34A70A6B6F1BF',
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
            channel_id: 'channel-83',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/5834D4BA00E2FE4260EA98D0EFBADDEA00839BBF2BF3B1DC15A42C7FA229FF23',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5834D4BA00E2FE4260EA98D0EFBADDEA00839BBF2BF3B1DC15A42C7FA229FF23',
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
            channel_id: 'channel-83',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/D3028505BB4C8A8DAB0E2807E1A2B768E9EA70D8F88BBF09C2CBDC144FC386C5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/D3028505BB4C8A8DAB0E2807E1A2B768E9EA70D8F88BBF09C2CBDC144FC386C5',
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
            channel_id: 'channel-83',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
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
            channel_id: 'channel-8',
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
            channel_id: 'channel-8',
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
          denom: 'ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29',
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
            channel_id: 'channel-21',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/DC834C6A70BF61E9F888DB112A7A0DFB07E97FB47C8D036F7CBBD7FACD7BF31D',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/DC834C6A70BF61E9F888DB112A7A0DFB07E97FB47C8D036F7CBBD7FACD7BF31D',
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
            channel_id: 'channel-17',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E',
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
            channel_id: 'channel-13',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49',
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
            channel_id: 'channel-185',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7',
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
            channel_id: 'channel-25',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23',
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
            channel_id: 'channel-16',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/2C36BD1A8484EF8C711F40B07DD2627F8B94D9975BF420FC4E0D5265A852FB93',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/2C36BD1A8484EF8C711F40B07DD2627F8B94D9975BF420FC4E0D5265A852FB93',
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
            channel_id: 'channel-68',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6EC13207066DF7215A8D7B23D4522C4427A69CF5B531B3A4ECB34A70A6B6F1BF',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6EC13207066DF7215A8D7B23D4522C4427A69CF5B531B3A4ECB34A70A6B6F1BF',
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
            channel_id: 'channel-83',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/5834D4BA00E2FE4260EA98D0EFBADDEA00839BBF2BF3B1DC15A42C7FA229FF23',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5834D4BA00E2FE4260EA98D0EFBADDEA00839BBF2BF3B1DC15A42C7FA229FF23',
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
            channel_id: 'channel-83',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/D3028505BB4C8A8DAB0E2807E1A2B768E9EA70D8F88BBF09C2CBDC144FC386C5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/D3028505BB4C8A8DAB0E2807E1A2B768E9EA70D8F88BBF09C2CBDC144FC386C5',
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
            channel_id: 'channel-83',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-165'
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
            channel_id: 'channel-8',
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
            channel_id: 'channel-8',
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
          denom: 'ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29',
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
            channel_id: 'channel-21',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/DC834C6A70BF61E9F888DB112A7A0DFB07E97FB47C8D036F7CBBD7FACD7BF31D',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/DC834C6A70BF61E9F888DB112A7A0DFB07E97FB47C8D036F7CBBD7FACD7BF31D',
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
            channel_id: 'channel-17',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D',
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
            channel_id: 'channel-11',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F',
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
            channel_id: 'channel-10',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56',
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
            channel_id: 'channel-14',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/76ADAF7500FA7E048261145768030EB72392A488BFDEC353631B21EF15F0EE69',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/76ADAF7500FA7E048261145768030EB72392A488BFDEC353631B21EF15F0EE69',
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
            channel_id: 'channel-107',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D',
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
            channel_id: 'channel-11',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F',
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
            channel_id: 'channel-10',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56',
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
            channel_id: 'channel-14',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/76ADAF7500FA7E048261145768030EB72392A488BFDEC353631B21EF15F0EE69',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/76ADAF7500FA7E048261145768030EB72392A488BFDEC353631B21EF15F0EE69',
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
            channel_id: 'channel-107',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    }
  ]
};
export default assets;
    