import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'migaloo',
  assets: [
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      extendedDescription: 'Migaloo originated as part of the Terra ecosystem but has since transitioned to the Cosmos ecosystem, focusing on creating a decentralized platform that balances and distributes liquidity across various zones. Key features include its permissionless nature and the Alliance module, which facilitates cross-chain staking and enhances blockchain security. Migaloo\'s flagship application is the White Whale Protocol, an interchain liquidity protocol that uses trading and flash loans to generate yield for stakers. The platform emphasizes interoperability, scalability, and community engagement, aiming to be a pivotal player in the Cosmos ecosystem.',
      denomUnits: [{
          denom: 'uwhale',
          exponent: 0
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'uwhale',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingeckoId: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ampWHALE',
      denomUnits: [{
          denom: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
          exponent: 0
        }, {
          denom: 'ampWHALE',
          exponent: 6
        }],
      base: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BackBone Labs Liquid Staked WHALE',
      denomUnits: [{
          denom: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
          exponent: 0
        }, {
          denom: 'bWHALE',
          exponent: 6
        }],
      base: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
      name: 'BackBone Labs Liquid Staked WHALE',
      display: 'bWHALE',
      symbol: 'bWHALE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png'
      },
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'uwhale'
          },
          provider: 'BackBoneLabs'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          theme: {
            primaryColorHex: '#d8d8d8'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'FABLE',
      denomUnits: [{
          denom: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
          exponent: 0
        }, {
          denom: 'fable',
          exponent: 6
        }],
      base: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denomUnits: [{
          denom: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
          exponent: 0
        }, {
          denom: 'bluna',
          exponent: 6
        }],
      base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
      address: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      typeAsset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-2',
            path: 'transfer/channel-2/cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primaryColorHex: '#070707'
          }
        }]
    },
    {
      description: 'RAC',
      denomUnits: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
          exponent: 0
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
      name: 'Racoon',
      display: 'RAC',
      symbol: 'RAC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
          theme: {
            primaryColorHex: '#2b2434'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ASH',
      denomUnits: [{
          denom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
          exponent: 0
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      base: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on Migaloo',
      denomUnits: [{
          denom: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-120'
          },
          chain: {
            channelId: 'channel-48',
            path: 'transfer/channel-48/erc20/tether/usdt'
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
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denomUnits: [{
          denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
          exponent: 0
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }]
    },
    {
      description: 'GUPPY',
      denomUnits: [{
          denom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
          exponent: 0
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      base: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png',
          theme: {
            primaryColorHex: '#d9966e'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO established on Migaloo.',
      denomUnits: [{
          denom: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
          exponent: 0
        }, {
          denom: 'OPHIR',
          exponent: 6
        }],
      base: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
      name: 'OPHIR',
      display: 'OPHIR',
      symbol: 'OPHIR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denomUnits: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
          exponent: 0
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png',
          theme: {
            primaryColorHex: '#062d54'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'lsdSHARK is the liquid staking derivative of SHARK.',
      denomUnits: [{
          denom: 'factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK',
          exponent: 0
        }, {
          denom: 'lsdSHARK',
          exponent: 6
        }],
      base: 'factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK',
      name: 'lsdSHARK',
      display: 'lsdSHARK',
      symbol: 'lsdSHARK',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          },
          provider: 'Shark Protocol'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png',
          theme: {
            primaryColorHex: '#0d739c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native staking token of Terra.',
      denomUnits: [{
          denom: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-86'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingeckoId: 'terra-luna-2',
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      }
    },
    {
      description: 'Rakoff Token',
      denomUnits: [{
          denom: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
          exponent: 0
        }, {
          denom: 'Rakoff',
          exponent: 6
        }],
      base: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
      typeAsset: 'ics20',
      name: 'Rakoff',
      display: 'Rakoff',
      symbol: 'RAKOFF',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channelId: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-114',
            path: 'transfer/channel-114/cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
        }]
    },
    {
      description: 'GASH',
      denomUnits: [{
          denom: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
          exponent: 0
        }, {
          denom: 'gash',
          exponent: 6
        }],
      base: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
      name: 'GASH',
      display: 'gash',
      symbol: 'GASH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png',
          theme: {
            primaryColorHex: '#1d0918'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Restake DAO Token',
      denomUnits: [{
          denom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
          exponent: 0
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      base: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
      name: 'RESTAKE',
      display: 'rstk',
      symbol: 'RSTK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primaryColorHex: '#3ccc64'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Frogztrik NFT Token',
      denomUnits: [{
          denom: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
          exponent: 0
        }, {
          denom: 'frog',
          exponent: 6
        }],
      base: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
      typeAsset: 'ics20',
      name: 'Frogztrik NFT Token',
      display: 'frog',
      symbol: 'FROG',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channelId: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-114',
            path: 'transfer/channel-114/cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png',
          theme: {
            primaryColorHex: '#182615'
          }
        }]
    },
    {
      description: 'GRAC is the official token of Racoon.Bet\'s gaming platform.',
      denomUnits: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
          exponent: 0
        }, {
          denom: 'GRAC',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
      name: 'Gaming RAC Token',
      display: 'GRAC',
      symbol: 'GRAC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png',
          theme: {
            primaryColorHex: '#f5bf09'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/721B42229246EEDA7A656DB17E494127F91E84AD63E21852737628321892A928',
          exponent: 0,
          aliases: ['factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind']
        }, {
          denom: 'wind',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/721B42229246EEDA7A656DB17E494127F91E84AD63E21852737628321892A928',
      name: 'Wind Token',
      display: 'wind',
      symbol: 'WIND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind',
            channelId: 'channel-210'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png',
          theme: {
            primaryColorHex: '#122b4d'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/0E1B883A15D5FCA533332CBAB1A672934C3936920399F2A3EB4F438E3EBAD0E9',
          exponent: 0,
          aliases: ['factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos']
        }, {
          denom: 'shitmos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E1B883A15D5FCA533332CBAB1A672934C3936920399F2A3EB4F438E3EBAD0E9',
      name: 'Shitmos',
      display: 'shitmos',
      symbol: 'SHITMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
            channelId: 'channel-642'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg',
          theme: {
            primaryColorHex: '#639BFF',
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
      }
    },
    {
      description: 'ERIS Liquid Alliance Staked GASH',
      denomUnits: [{
          denom: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH',
          exponent: 0
        }, {
          denom: 'ampGASH',
          exponent: 6
        }],
      base: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH',
      name: 'ampGASH',
      display: 'ampGASH',
      symbol: 'ampGASH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampgash.png',
          theme: {
            primaryColorHex: '#374455'
          }
        }],
      traces: [{
          type: 'liquid-stake',
          chain: {
            contract: 'migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl'
          },
          provider: 'ERIS Protocol',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
            contract: 'migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/33E97105B5C1F48CB7D6400F4673F9B3699AC59EDB621CCCD57D5D480E0C83B6',
          exponent: 0,
          aliases: ['factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN']
        }, {
          denom: 'SYN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/33E97105B5C1F48CB7D6400F4673F9B3699AC59EDB621CCCD57D5D480E0C83B6',
      name: 'SYN',
      display: 'SYN',
      symbol: 'SYN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN',
            channelId: 'channel-102'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.png',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.png'
      }
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denomUnits: [{
          denom: 'ibc/D8C6D71032EC7CC4C9CCD0FF709CF87D34A7311FE5491E70F7EDE2351D189C10',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D8C6D71032EC7CC4C9CCD0FF709CF87D34A7311FE5491E70F7EDE2351D189C10',
      name: 'Dragon',
      display: 'DGN',
      symbol: 'DGN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dungeon',
            baseDenom: 'udgn',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-142',
            path: 'transfer/channel-142/udgn'
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
      description: 'WHALE-wBTC.osmo LP White Whale Migaloo',
      denomUnits: [{
          denom: 'factory/migaloo1axtz4y7jyvdkkrflknv9dcut94xr5k8m6wete4rdrw4fuptk896su44x2z/uLP',
          exponent: 0
        }, {
          denom: 'uLP',
          exponent: 6
        }],
      base: 'factory/migaloo1axtz4y7jyvdkkrflknv9dcut94xr5k8m6wete4rdrw4fuptk896su44x2z/uLP',
      name: 'WHALE-wBTC WW LP',
      display: 'uLP',
      symbol: 'WHALE-wBTC-WW-LP',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Liquid Staked WHALE-wBTC Alliance LP',
      denomUnits: [{
          denom: 'factory/migaloo1zsptvkg5aeg4tjksgv7vp4x5s9p5euqrh9jl3sfdv48wtnrhftlszsvmu5/uwhalex',
          exponent: 0
        }, {
          denom: 'uwhalex',
          exponent: 6
        }],
      base: 'factory/migaloo1zsptvkg5aeg4tjksgv7vp4x5s9p5euqrh9jl3sfdv48wtnrhftlszsvmu5/uwhalex',
      name: 'WHALEX',
      display: 'uwhalex',
      symbol: 'WHALEX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/whalex.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/whalex.png'
        }],
      traces: [{
          type: 'liquid-stake',
          chain: {
            contract: 'migaloo1zsptvkg5aeg4tjksgv7vp4x5s9p5euqrh9jl3sfdv48wtnrhftlszsvmu5'
          },
          provider: 'Migaloo Command',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1axtz4y7jyvdkkrflknv9dcut94xr5k8m6wete4rdrw4fuptk896su44x2z/uLP',
            contract: 'migaloo1axtz4y7jyvdkkrflknv9dcut94xr5k8m6wete4rdrw4fuptk896su44x2z'
          }
        }],
      socials: {
        website: 'https://app.migaloo.zone',
        twitter: 'https://x.com/Migaloo_Zone'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/9E83DB463C088184B6FBB5897F78D8431490DF76F8E1928283FB389A0DE9542C',
          exponent: 0,
          aliases: ['factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/1/stable/amplp']
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9E83DB463C088184B6FBB5897F78D8431490DF76F8E1928283FB389A0DE9542C',
      name: 'Eris Protocol LUNA/USDC ampLP',
      display: 'amplp',
      symbol: 'LUNA-USDC-ampLP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/1/stable/amplp',
            channelId: 'channel-86'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/1/stable/amplp'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/F9905FB2922CEE27015C339B2B870FB854314AA1CBC2D3F56C5E8BA2691C3B61',
          exponent: 0,
          aliases: ['factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/21/single/amplp']
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F9905FB2922CEE27015C339B2B870FB854314AA1CBC2D3F56C5E8BA2691C3B61',
      name: 'Eris Protocol ampWHALE/WHALE ampLP',
      display: 'amplp',
      symbol: 'ampWHALE-ampLP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/21/single/amplp',
            channelId: 'channel-86'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/21/single/amplp'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/4F5CB28CE3E351058D4CE671EAF935CA6D728C6DF34C1AC662B495310FECBBDA',
          exponent: 0,
          aliases: ['factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/30/single/amplp']
        }, {
          denom: 'amplp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F5CB28CE3E351058D4CE671EAF935CA6D728C6DF34C1AC662B495310FECBBDA',
      name: 'Eris Protocol bWHALE/WHALE ampLP',
      display: 'amplp',
      symbol: 'bWHALE-ampLP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/30/single/amplp',
            channelId: 'channel-86'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/terra1zly98gvcec54m3caxlqexce7rus6rzgplz7eketsdz7nh750h2rqvu8uzx/30/single/amplp'
          }
        }]
    }
  ]
};
export default info;