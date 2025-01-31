import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'terra2',
  assets: [
    {
      description: 'The native staking token of Terra.',
      denomUnits: [{
          denom: 'uluna',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'uluna',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingeckoId: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
          exponent: 0
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }],
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      }
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/8D8A7F7253615E5F76CB6252A1E1BD921D5EDB7BBAAF8913FB1C77FF125D9995',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8D8A7F7253615E5F76CB6252A1E1BD921D5EDB7BBAAF8913FB1C77FF125D9995',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-25'
          },
          chain: {
            channelId: 'channel-229',
            path: 'transfer/channel-229/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      }
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denomUnits: [{
          denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
          exponent: 0,
          aliases: ['Dinheiros']
        }],
      typeAsset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
          theme: {
            primaryColorHex: '#244c9c'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denomUnits: [{
          denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
          exponent: 0
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
          theme: {
            primaryColorHex: '#1d5c65'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denomUnits: [{
          denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
          exponent: 0
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
          exponent: 0
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
          exponent: 0
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      name: 'almagem',
      display: 'AMG',
      symbol: 'AMG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
          exponent: 0
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      name: 'arika',
      display: 'ARK',
      symbol: 'ARK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
          exponent: 0
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      name: 'danu',
      display: 'DANU',
      symbol: 'DANU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
          exponent: 0
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      name: 'torus',
      display: 'TRS',
      symbol: 'TRS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
          exponent: 0
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      name: 'plasma',
      display: 'PLASMA',
      symbol: 'PLASMA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denomUnits: [{
          denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
          exponent: 0
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      name: 'dmt',
      display: 'DMT',
      symbol: 'DMT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png',
          theme: {
            primaryColorHex: '#d1b295'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      typeAsset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denomUnits: [{
          denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
          exponent: 0
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      coingeckoId: 'eris-amplified-luna',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      typeAsset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denomUnits: [{
          denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
          exponent: 0
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingeckoId: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primaryColorHex: '#f3f313'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      typeAsset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denomUnits: [{
          denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
          exponent: 0
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
          theme: {
            primaryColorHex: '#21b6b3'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      typeAsset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denomUnits: [{
          denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
          exponent: 0
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primaryColorHex: '#f3d343'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      typeAsset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denomUnits: [{
          denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
          exponent: 0
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      typeAsset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denomUnits: [{
          denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
          exponent: 0
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
          theme: {
            primaryColorHex: '#efe8e9'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      typeAsset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denomUnits: [{
          denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
          exponent: 0
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png',
          theme: {
            primaryColorHex: '#e3e2e5'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      typeAsset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denomUnits: [{
          denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
          exponent: 0
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'BackBoneLabs'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primaryColorHex: '#070707'
          }
        }],
      coingeckoId: 'backbone-labs-staked-luna'
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      typeAsset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denomUnits: [{
          denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
          exponent: 0
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primaryColorHex: '#f3ebdb'
          }
        }]
    },
    {
      description: 'ERIS Alliance Staked ampWHALE on Terra',
      denomUnits: [{
          denom: 'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
          exponent: 0
        }, {
          denom: 'ampWHALEt',
          exponent: 6
        }],
      base: 'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
      name: 'ERIS Alliance Staked ampWHALE',
      display: 'ampWHALEt',
      symbol: 'ampWHALEt',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ERIS Alliance Staked boneWHALE on Terra',
      denomUnits: [{
          denom: 'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
          exponent: 0
        }, {
          denom: 'boneWHALEt',
          exponent: 6
        }],
      base: 'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
      name: 'ERIS Alliance Staked boneWHALE',
      display: 'boneWHALEt',
      symbol: 'boneWHALEt',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ERIS Liquid Enterprise Staked ROAR',
      denomUnits: [{
          denom: 'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
          exponent: 0
        }, {
          denom: 'ampROAR',
          exponent: 6
        }],
      base: 'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
      name: 'ERIS Amplified ROAR',
      display: 'ampROAR',
      symbol: 'ampROAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png',
          theme: {
            primaryColorHex: '#5b83c3'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Nico Dao Money',
      typeAsset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denomUnits: [{
          denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
          exponent: 0
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png',
          theme: {
            primaryColorHex: '#f1cc79'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      typeAsset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denomUnits: [{
          denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
          exponent: 0
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png',
          theme: {
            primaryColorHex: '#c0943f'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      typeAsset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denomUnits: [{
          denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
          exponent: 0
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png',
          theme: {
            primaryColorHex: '#dd6a30'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
          exponent: 0,
          aliases: ['wstETH']
        }, {
          denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            channelId: 'channel-25'
          },
          chain: {
            channelId: 'channel-229',
            path: 'transfer/channel-229/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'SEUL DAO',
      typeAsset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denomUnits: [{
          denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
          exponent: 0
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png',
          theme: {
            primaryColorHex: '#0da8c9'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      typeAsset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denomUnits: [{
          denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
          exponent: 0
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png',
          theme: {
            primaryColorHex: '#0ba7ce'
          }
        }]
    },
    {
      description: 'ITO DAO',
      typeAsset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denomUnits: [{
          denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
          exponent: 0
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png',
          theme: {
            primaryColorHex: '#f8d034'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      typeAsset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denomUnits: [{
          denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
          exponent: 0
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png',
          theme: {
            primaryColorHex: '#d19a84'
          }
        }]
    },
    {
      description: 'useless meme coin',
      typeAsset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denomUnits: [{
          denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
          exponent: 0
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png',
          theme: {
            primaryColorHex: '#ae987b'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      typeAsset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denomUnits: [{
          denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
          exponent: 0
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png',
          theme: {
            primaryColorHex: '#040607'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denomUnits: [{
          denom: 'ibc/E18C0D303957867A164DE2863D1C3F83135936E6F17CADF4D241FBC12B0F23B2',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E18C0D303957867A164DE2863D1C3F83135936E6F17CADF4D241FBC12B0F23B2',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-251',
            path: 'transfer/channel-251/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primaryColorHex: '#edd5ee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'DNA DAO',
      typeAsset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denomUnits: [{
          denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
          exponent: 0
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png',
          theme: {
            primaryColorHex: '#232333'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      typeAsset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denomUnits: [{
          denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
          exponent: 0
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primaryColorHex: '#0c0704'
          }
        }]
    },
    {
      typeAsset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denomUnits: [{
          denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
          exponent: 0
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png',
          theme: {
            primaryColorHex: '#040507'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/F709DF4969CD26174C1A53AA95F3D98BE643C1A52C9981487766F96A1811F6A4',
          exponent: 0,
          aliases: ['factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk']
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F709DF4969CD26174C1A53AA95F3D98BE643C1A52C9981487766F96A1811F6A4',
      name: 'Restake DAO Token',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-86',
            path: 'transfer/channel-86/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primaryColorHex: '#3ccc64'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      }
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      typeAsset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denomUnits: [{
          denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
          exponent: 0
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png',
          theme: {
            primaryColorHex: '#c7cbcf'
          }
        }]
    },
    {
      description: 'ERIS Liquid Alliance Staked ampROAR',
      denomUnits: [{
          denom: 'factory/terra1dndhtdr2v7ca8rrn67chlqw3cl3xhm3m2uxls62vghcg3fsh5tpss5xmcu/MOAR',
          exponent: 0
        }, {
          denom: 'MOAR',
          exponent: 6
        }],
      base: 'factory/terra1dndhtdr2v7ca8rrn67chlqw3cl3xhm3m2uxls62vghcg3fsh5tpss5xmcu/MOAR',
      name: 'ERIS MOAR',
      display: 'MOAR',
      symbol: 'MOAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/moar.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/moar.png',
          theme: {
            primaryColorHex: '#9363b3'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on Terra',
      denomUnits: [{
          denom: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-138'
          },
          chain: {
            channelId: 'channel-272',
            path: 'transfer/channel-272/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'ATOM-LUNA liquidity pool token on URA',
      denomUnits: [{
          denom: 'factory/terra1djk2zl83dspt696ex5crhfacu8vm6934576t4zdd2592fzyahr2qma6guq/ULUN-IBC/-LP',
          exponent: 0
        }, {
          denom: 'atom-luna-lp',
          exponent: 6
        }],
      base: 'factory/terra1djk2zl83dspt696ex5crhfacu8vm6934576t4zdd2592fzyahr2qma6guq/ULUN-IBC/-LP',
      name: 'ATOM-LUNA LP Token URA',
      display: 'atom-luna-lp',
      symbol: 'ATOM-LUNA-LP',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ura.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LUNA-USDC liquidity pool token on URA',
      denomUnits: [{
          denom: 'factory/terra12jxfw2vg4cu6mxlgf39dp5ccxtuwm468w8eh9cnh2qsxc9t0sffs7ekhft/ULUN-IBC/-LP',
          exponent: 0
        }, {
          denom: 'luna-usdc-lp',
          exponent: 6
        }],
      base: 'factory/terra12jxfw2vg4cu6mxlgf39dp5ccxtuwm468w8eh9cnh2qsxc9t0sffs7ekhft/ULUN-IBC/-LP',
      name: 'LUNA-USDC LP Token URA',
      display: 'luna-usdc-lp',
      symbol: 'LUNA-USDC-LP',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ura.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LUNA-USDT liquidity pool token on URA',
      denomUnits: [{
          denom: 'factory/terra1w9spejtuac5dt0gympq576uhwde39exhh7hdxwl99rjvaphfukkq6y4cv7/ULUN-IBC/-LP',
          exponent: 0
        }, {
          denom: 'luna-usdt-lp',
          exponent: 6
        }],
      base: 'factory/terra1w9spejtuac5dt0gympq576uhwde39exhh7hdxwl99rjvaphfukkq6y4cv7/ULUN-IBC/-LP',
      name: 'LUNA-USDT LP Token URA',
      display: 'luna-usdt-lp',
      symbol: 'LUNA-USDT-LP',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ura.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ashLUNA',
      denomUnits: [{
          denom: 'factory/terra1f5cfm48gcezl3cx25l64ngc4yktnmx7rcpj3kggu6v273742sqqs5yn5ks/luna.ash',
          exponent: 0
        }, {
          denom: 'ashLUNA',
          exponent: 6
        }],
      base: 'factory/terra1f5cfm48gcezl3cx25l64ngc4yktnmx7rcpj3kggu6v273742sqqs5yn5ks/luna.ash',
      name: 'ashLUNA',
      display: 'ashLUNA',
      symbol: 'ashLUNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.ash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.ash.png',
          theme: {
            primaryColorHex: '#66bcf2'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-30'
          },
          chain: {
            channelId: 'channel-253',
            path: 'transfer/channel-253/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Cosmo is the best currency in the universe.',
      denomUnits: [{
          denom: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
          exponent: 0,
          aliases: ['factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO']
        }, {
          denom: 'COSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
      name: 'Cosmo',
      display: 'COSMO',
      symbol: 'COSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png',
          theme: {
            primaryColorHex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      }
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denomUnits: [{
          denom: 'ibc/B2AA4C3CD19954859C3B537EC0705640AFC01075F52993D9AC5E73F07F0386CC',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B2AA4C3CD19954859C3B537EC0705640AFC01075F52993D9AC5E73F07F0386CC',
      name: 'Dragon',
      display: 'DGN',
      symbol: 'DGN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dungeon',
            baseDenom: 'udgn',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-582',
            path: 'transfer/channel-582/udgn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          imageSync: {
            chainName: 'dungeon',
            baseDenom: 'udgn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.cryptodungeon.org',
        twitter: 'https://twitter.com/cryptodungeonma'
      }
    },
    {
      description: 'The native token of Migaloo Chain',
      denomUnits: [{
          denom: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'uwhale',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-86',
            path: 'transfer/channel-86/uwhale'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'uwhale'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      typeAsset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denomUnits: [{
          denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
          exponent: 0
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      name: 'ERIS Arb LUNA',
      display: 'arbLUNA',
      symbol: 'arbLUNA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
        }],
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'ERIS Protocol'
        }]
    },
    {
      typeAsset: 'sdk.coin',
      description: 'Eris Protocol ampWHALE/WHALE ampLP',
      denomUnits: [{
          denom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/21/single/amplp',
          exponent: 0
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      base: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/21/single/amplp',
      name: 'Eris Protocol ampWHALE/WHALE ampLP',
      display: 'amplp',
      symbol: 'ampWHALE-ampLP'
    },
    {
      typeAsset: 'sdk.coin',
      description: 'Eris Protocol bWHALE/WHALE ampLP',
      denomUnits: [{
          denom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/30/single/amplp',
          exponent: 0
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      base: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/30/single/amplp',
      name: 'Eris Protocol bWHALE/WHALE ampLP',
      display: 'amplp',
      symbol: 'bWHALE-ampLP'
    },
    {
      base: 'factory/terra1dvvduq0uegn9juch9v0fc97fff3c85nu9f9gveu83dldej07jxysyrrg7m/rise',
      name: 'Rise',
      symbol: 'RISE',
      display: 'rise',
      description: 'PhoenixRiseMeme',
      typeAsset: 'sdk.coin',
      address: 'terra1dvvduq0uegn9juch9v0fc97fff3c85nu9f9gveu83dldej07jxysyrrg7m',
      denomUnits: [{
          denom: 'factory/terra1dvvduq0uegn9juch9v0fc97fff3c85nu9f9gveu83dldej07jxysyrrg7m/rise',
          exponent: 0
        }, {
          denom: 'rise',
          exponent: 6
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/RISE.png'
      }
    },
    {
      typeAsset: 'sdk.coin',
      description: 'Eris Protocol LUNA/USDC ampLP',
      denomUnits: [{
          denom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/1/stable/amplp',
          exponent: 0
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      base: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/1/stable/amplp',
      name: 'Eris Protocol LUNA/USDC ampLP',
      display: 'amplp',
      symbol: 'LUNA-USDC-ampLP'
    }
  ]
};
export default info;