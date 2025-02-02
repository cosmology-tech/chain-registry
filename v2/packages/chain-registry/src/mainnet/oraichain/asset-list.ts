import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'oraichain',
  assets: [
    {
      description: 'The native token of Oraichain',
      denomUnits: [{
          denom: 'orai',
          exponent: 0
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'orai',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingeckoId: 'oraichain-token',
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
            primaryColorHex: '#000000',
            backgroundColorHex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            darkMode: true,
            primaryColorHex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            darkMode: false,
            primaryColorHex: '#000000'
          }
        }
      ],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The ATOM native token of Oraichain.',
      denomUnits: [{
          denom: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
      name: 'ATOM',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-301'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }]
    },
    {
      description: 'The OSMO native token of Oraichain.',
      denomUnits: [{
          denom: 'ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC',
      name: 'OSMO',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-216'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }]
    },
    {
      description: 'The INJ token for the Oraichain.',
      denomUnits: [{
          denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E',
          exponent: 0
        }, {
          denom: 'inj',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-147'
          },
          chain: {
            channelId: 'channel-146',
            path: 'transfer/channel-146/inj'
          }
        }],
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      typeAsset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denomUnits: [{
          denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
          exponent: 0
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'oraichain',
            baseDenom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          provider: 'Oraichain'
        }],
      images: [{
          imageSync: {
            chainName: 'oraichain',
            baseDenom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      name: 'Usdt',
      display: 'usdt',
      symbol: 'USDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
          exponent: 0
        }, {
          denom: 'airi',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      name: 'Airight',
      display: 'airi',
      coingeckoId: 'airight',
      symbol: 'AIRI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
      }
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
          exponent: 0
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      name: 'Oraix',
      coingeckoId: 'oraidex',
      display: 'oraix',
      symbol: 'ORAIX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
      }
    },
    {
      description: 'USDC issued on Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-34'
          },
          chain: {
            channelId: 'channel-301',
            path: 'transfer/channel-301/uusdc'
          }
        }],
      typeAsset: 'cw20',
      address: 'orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
      base: 'cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
      name: 'Usdc',
      display: 'usdc',
      symbol: 'USDC',
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
          exponent: 0
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
      }
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
          exponent: 0
        }, {
          denom: 'milky',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
      }
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
          exponent: 0
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      name: 'Scorai',
      display: 'scorai',
      coingeckoId: 'scorai',
      symbol: 'SCORAI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
      }
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
          exponent: 0
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      images: [{
          imageSync: {
            chainName: 'tron',
            baseDenom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true,
            primaryColorHex: '#FF060A',
            backgroundColorHex: '#FF060A'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      }
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
          exponent: 0
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      name: 'scATOM',
      display: 'scatom',
      symbol: 'scATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
      }
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
          exponent: 0
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      }
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primaryColorHex: '#303030'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      images: [{
          imageSync: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      }
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denomUnits: [{
          denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
          exponent: 0
        }, {
          denom: 'och',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingeckoId: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      }
    },
    {
      description: 'The TON native token of Oraichain',
      extendedDescription: 'Toincoin has been bridged from The Open Network to Oraichain.',
      denomUnits: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Oraichain Labs TON Bridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg'
      },
      typeAsset: 'sdk.coin',
      images: [{
          imageSync: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }]
    },
    {
      description: 'The PEPE native token of Oraichain',
      denomUnits: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/extPEPE',
          exponent: 0
        }, {
          denom: 'pepe',
          exponent: 6
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Oraichain Labs OBridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/extPEPE',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primaryColorHex: '#cc3233'
          }
        }],
      keywords: ['meme'],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Hamster Kombat native token of Oraichain',
      denomUnits: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/HMSTR',
          exponent: 0,
          aliases: ['nanohmstr']
        }, {
          denom: 'hmstr',
          exponent: 9
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanohmstr'
          },
          provider: 'Oraichain Labs Ton Bridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/HMSTR',
      name: 'HMSTR',
      display: 'hmstr',
      symbol: 'HMSTR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.svg'
      },
      typeAsset: 'sdk.coin',
      images: [{
          imageSync: {
            chainName: 'ton',
            baseDenom: 'nanohmstr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.png',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }]
    },
    {
      description: 'The SAM token is a native memecoin on Oraichain.',
      denomUnits: [{
          denom: 'factory/orai15rmny3cxv33rnzdr2lfdhjtslyzmrr0vdd28kp/SAM',
          exponent: 0
        }, {
          denom: 'sam',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/orai15rmny3cxv33rnzdr2lfdhjtslyzmrr0vdd28kp/SAM',
      name: 'SAM',
      display: 'sam',
      symbol: 'SAM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/sam.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/sam.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/sam.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/sam.svg'
      }
    }
  ]
};
export default info;