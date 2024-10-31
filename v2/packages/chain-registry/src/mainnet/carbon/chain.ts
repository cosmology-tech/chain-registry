import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'carbon',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Carbon',
  chainType: 'cosmos',
  chainId: 'carbon-1',
  bech32Prefix: 'swth',
  daemonName: 'carbond',
  website: 'https://www.carbon.network/',
  nodeHome: '$HOME/.carbon',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'swth',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usc',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.0001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'bnb.1.6.773edb',
        fixedMinGasPrice: 0,
        lowGasPrice: 1000000,
        averageGasPrice: 1000000,
        highGasPrice: 1000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'bneo.1.14.e2e5f6',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0015,
        averageGasPrice: 0.0015,
        highGasPrice: 0.0015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'busd.1.6.754a80',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'cglp.1.19.1698d3',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'cgt/1',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'eth.1.19.c3b805',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000,
        averageGasPrice: 100000,
        highGasPrice: 100000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'eth.1.2.942d87',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000,
        averageGasPrice: 100000,
        highGasPrice: 100000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0035,
        averageGasPrice: 0.0035,
        highGasPrice: 0.0035,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0000075,
        averageGasPrice: 0.0000075,
        highGasPrice: 0.0000075,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00005,
        averageGasPrice: 0.00005,
        highGasPrice: 0.00005,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00032,
        averageGasPrice: 0.00032,
        highGasPrice: 0.00032,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
        fixedMinGasPrice: 0,
        lowGasPrice: 300000000,
        averageGasPrice: 300000000,
        highGasPrice: 300000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.0006,
        highGasPrice: 0.0006,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0000075,
        averageGasPrice: 0.0000075,
        highGasPrice: 0.0000075,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
        fixedMinGasPrice: 0,
        lowGasPrice: 200000000,
        averageGasPrice: 200000000,
        highGasPrice: 200000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00001,
        averageGasPrice: 0.00001,
        highGasPrice: 0.00001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00001,
        averageGasPrice: 0.00001,
        highGasPrice: 0.00001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usdc.1.2.343151',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.0001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usdc.1.6.53ff75',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'zil.1.18.1a4a06',
        fixedMinGasPrice: 0,
        lowGasPrice: 6000,
        averageGasPrice: 6000,
        highGasPrice: 6000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'swth'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Switcheo/carbon-bootstrap',
    recommendedVersion: 'v2.53.0',
    compatibleVersions: ['v2.53.0'],
    binaries: {
      "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.48.0/carbond-mainnet.linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.48.0/carbond-mainnet.linux-arm64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json'
    },
    versions: [
      {
        name: 'v2.24.0',
        recommendedVersion: 'v2.24.5',
        compatibleVersions: [
          'v2.24.5',
          'v2.24.4',
          'v2.24.3',
          'v2.24.2',
          'v2.24.1',
          'v2.24.0'
        ],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.25.0'
      },
      {
        name: 'v2.25.0',
        height: 40405361,
        recommendedVersion: 'v2.25.0',
        compatibleVersions: ['v2.25.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.26.0'
      },
      {
        name: 'v2.26.0',
        proposal: 306,
        height: 43970651,
        recommendedVersion: 'v2.26.3',
        compatibleVersions: ['v2.26.3'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.26.3/carbond2.26.3-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.26.3/carbond2.26.3-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.27.0'
      },
      {
        name: 'v2.27.0',
        proposal: 307,
        height: 44688221,
        recommendedVersion: 'v2.27.3',
        compatibleVersions: ['v2.27.3'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.27.3/carbond2.27.3-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.27.3/carbond2.27.3-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.28.0'
      },
      {
        name: 'v2.28.0',
        proposal: 308,
        height: 45469721,
        recommendedVersion: 'v2.28.1',
        compatibleVersions: ['v2.28.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.28.1/carbond2.28.1-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.28.1/carbond2.28.1-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.29.0'
      },
      {
        name: 'v2.29.0',
        proposal: 312,
        height: 46139891,
        recommendedVersion: 'v2.29.0',
        compatibleVersions: ['v2.29.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.29.0/carbond2.29.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.29.0/carbond2.29.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.30.0'
      },
      {
        name: 'v2.30.0',
        proposal: 313,
        height: 46228611,
        recommendedVersion: 'v2.30.0',
        compatibleVersions: ['v2.30.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.30.0/carbond2.30.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.30.0/carbond2.30.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.31.0'
      },
      {
        name: 'v2.31.0',
        proposal: 316,
        height: 46451861,
        recommendedVersion: 'v2.31.0',
        compatibleVersions: ['v2.31.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.31.0/carbond2.31.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.31.0/carbond2.31.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.32.0'
      },
      {
        name: 'v2.32.0',
        proposal: 317,
        height: 46538071,
        recommendedVersion: 'v2.32.0',
        compatibleVersions: ['v2.32.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.32.0/carbond2.32.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.32.0/carbond2.32.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.33.0'
      },
      {
        name: 'v2.33.0',
        proposal: 318,
        height: 47592681,
        recommendedVersion: 'v2.33.0',
        compatibleVersions: ['v2.33.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.33.0/carbond2.33.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.33.0/carbond2.33.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.34.0'
      },
      {
        name: 'v2.34.0',
        proposal: 319,
        height: 48331411,
        recommendedVersion: 'v2.34.1',
        compatibleVersions: ['v2.34.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.34.1/carbond2.34.1-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.34.1/carbond2.34.1-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.35.0'
      },
      {
        name: 'v2.35.0',
        proposal: 321,
        height: 49398331,
        recommendedVersion: 'v2.35.0',
        compatibleVersions: ['v2.35.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.35.0/carbond2.35.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.35.0/carbond2.35.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.36.0'
      },
      {
        name: 'v2.36.0',
        proposal: 323,
        height: 49677971,
        recommendedVersion: 'v2.36.9',
        compatibleVersions: ['v2.36.0', 'v2.36.9'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.36.9/carbond2.36.9-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.36.9/carbond2.36.9-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.37.0'
      },
      {
        name: 'v2.37.0',
        proposal: 338,
        height: 52699891,
        recommendedVersion: 'v2.37.1',
        compatibleVersions: ['v2.37.0', 'v2.37.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.37.1/carbond2.37.1-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.37.1/carbond2.37.1-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.38.0'
      },
      {
        name: 'v2.38.0',
        proposal: 340,
        height: 53991841,
        recommendedVersion: 'v2.38.1',
        compatibleVersions: ['v2.38.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.38.1/carbond2.38.1-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.38.1/carbond2.38.1-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.39.0'
      },
      {
        name: 'v2.39.0',
        proposal: 349,
        height: 56495871,
        recommendedVersion: 'v2.39.0',
        compatibleVersions: ['v2.39.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.39.0/carbond2.39.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.39.0/carbond2.39.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.40.0'
      },
      {
        name: 'v2.40.0',
        proposal: 352,
        height: 56635731,
        recommendedVersion: 'v2.40.0',
        compatibleVersions: ['v2.40.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.40.0/carbond2.40.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.40.0/carbond2.40.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.41.0'
      },
      {
        name: 'v2.41.0',
        proposal: 353,
        height: 57169241,
        recommendedVersion: 'v2.41.1',
        compatibleVersions: ['v2.41.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.41.1/carbond2.41.1-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.41.1/carbond2.41.1-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.42.0'
      },
      {
        name: 'v2.42.0',
        proposal: 355,
        height: 57602151,
        recommendedVersion: 'v2.42.0',
        compatibleVersions: ['v2.42.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.42.0/carbond2.42.0-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.42.0/carbond2.42.0-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.43.0'
      },
      {
        name: 'v2.43.0',
        proposal: 356,
        height: 57636191,
        recommendedVersion: 'v2.43.0',
        compatibleVersions: ['v2.43.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.44.0'
      },
      {
        name: 'v2.44.0',
        proposal: 358,
        height: 59206391,
        recommendedVersion: 'v2.44.1',
        compatibleVersions: ['v2.44.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.44.1/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.44.1/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.45.0'
      },
      {
        name: 'v2.45.0',
        proposal: 361,
        height: 60040321,
        recommendedVersion: 'v2.45.0',
        compatibleVersions: ['v2.45.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.45.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.45.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.46.0'
      },
      {
        name: 'v2.46.0',
        proposal: 365,
        height: 60667951,
        recommendedVersion: 'v2.46.3',
        compatibleVersions: [
          'v2.46.1',
          'v2.46.2',
          'v2.46.3',
          'v2.46.4'
        ],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.46.3/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.46.3/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.47.0'
      },
      {
        name: 'v2.47.0',
        proposal: 368,
        height: 62051891,
        recommendedVersion: 'v2.47.0',
        compatibleVersions: ['v2.47.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.47.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.47.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.48.0'
      },
      {
        name: 'v2.48.0',
        proposal: 369,
        height: 62155551,
        recommendedVersion: 'v2.48.0',
        compatibleVersions: ['v2.48.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.48.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.48.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.49.0'
      },
      {
        name: 'v2.49.0',
        proposal: 370,
        height: 62330851,
        recommendedVersion: 'v2.49.2',
        compatibleVersions: [
          'v2.49.0',
          'v2.49.1',
          'v2.49.2'
        ],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.49.2/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.49.2/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.50.0'
      },
      {
        name: 'v2.50.0',
        proposal: 371,
        height: 62927771,
        recommendedVersion: 'v2.50.0',
        compatibleVersions: ['v2.50.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.50.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.50.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.51.0'
      },
      {
        name: 'v2.51.0',
        proposal: 372,
        height: 63219571,
        recommendedVersion: 'v2.51.1',
        compatibleVersions: ['v2.51.0', 'v2.51.1'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.51.1/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.51.1/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.52.0'
      },
      {
        name: 'v2.52.0',
        proposal: 373,
        height: 63916741,
        recommendedVersion: 'v2.52.0',
        compatibleVersions: ['v2.52.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.52.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.52.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: 'v2.53.0'
      },
      {
        name: 'v2.53.0',
        proposal: 374,
        height: 63957661,
        recommendedVersion: 'v2.53.0',
        compatibleVersions: ['v2.53.0'],
        binaries: {
          "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.0/carbond-mainnet.linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.0/carbond-mainnet.linux-arm64.tar.gz'
        },
        nextVersionName: ''
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tm-api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    rest: [
      {
        address: 'https://api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rest.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    grpc: [{
        address: 'carbon.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'carbon-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'carbonscan',
      url: 'https://scan.carbon.network',
      txPage: 'https://scan.carbon.network/transaction/${txHash}?net=main'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/carbon',
      txPage: 'https://ping.pub/carbon/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/carbon',
      txPage: 'https://staking-explorer.com/transaction.php?chain=carbon&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=carbon&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/carbon',
      txPage: 'https://atomscan.com/carbon/transactions/${txHash}',
      accountPage: 'https://atomscan.com/carbon/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
      theme: {
        primaryColorHex: '#a5edf2'
      }
    }]
};
export default info;