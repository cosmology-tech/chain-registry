import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'haqq',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://haqq.network/',
  prettyName: 'Haqq Network',
  chainType: 'cosmos',
  chainId: 'haqq_11235-1',
  bech32Prefix: 'haqq',
  nodeHome: '$HOME/.haqqd',
  daemonName: 'haqqd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aISLM',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aISLM'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/haqq-network/haqq',
    recommendedVersion: 'v1.8.0',
    compatibleVersions: ['v1.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_windows_amd64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/haqq-network/mainnet/master/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.2',
        tag: 'v1.0.2',
        recommendedVersion: 'v1.0.2',
        compatibleVersions: ['v1.0.2'],
        proposal: 4,
        height: 1027509,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20',
          tag: 'v0.34.20-0.20220517115723-e6f071164839'
        },
        nextVersionName: 'v1.1.9',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.5',
          tag: 'v0.45.5-0.20220523154235-2921a1c3c918'
        },
        ibc: {
          type: 'go',
          version: '3.1.0'
        }
      },
      {
        name: 'v1.1.9',
        tag: 'v1.1.9',
        recommendedVersion: 'v1.1.9',
        compatibleVersions: ['v1.1.9'],
        proposal: 6,
        height: 2853700,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20',
          tag: 'v0.34.20-0.20220517115723-e6f071164839'
        },
        nextVersionName: 'v1.2.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.6'
        },
        ibc: {
          type: 'go',
          version: '3.1.1'
        }
      },
      {
        name: 'v1.2.1',
        tag: 'v1.2.1',
        recommendedVersion: 'v1.2.1',
        compatibleVersions: ['v1.2.1'],
        proposal: 7,
        height: 2865555,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21'
        },
        nextVersionName: 'v1.3.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: '3.2.0'
        }
      },
      {
        name: 'v1.3.0',
        tag: 'v1.3.0',
        recommendedVersion: 'v1.3.0',
        compatibleVersions: ['v1.3.0'],
        proposal: 8,
        height: 5978000,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21'
        },
        nextVersionName: 'v1.3.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: '3.2.0'
        }
      },
      {
        name: 'v1.3.1',
        tag: 'v1.3.1',
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.1'],
        proposal: 9,
        height: 5978800,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21'
        },
        nextVersionName: 'v1.4.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: '3.2.0'
        }
      },
      {
        name: 'v1.4.0',
        tag: 'v1.4.0',
        recommendedVersion: 'v1.4.0',
        compatibleVersions: ['v1.4.0'],
        proposal: 10,
        height: 6134000,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26'
        },
        nextVersionName: 'v1.4.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.9',
          tag: 'v0.46.9-ledger'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.1'
        }
      },
      {
        name: 'v1.4.1',
        tag: 'v1.4.1',
        recommendedVersion: 'v1.4.1',
        compatibleVersions: ['v1.4.1'],
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.4.1/haqq_1.4.1_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.5.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.9',
          tag: 'v0.46.9-ledger'
        },
        ibc: {
          type: 'go',
          version: '5.2.1'
        }
      },
      {
        name: 'v1.5.0',
        tag: 'v1.5.0',
        recommendedVersion: 'v1.5.0',
        compatibleVersions: ['v1.5.0'],
        proposal: 18,
        height: 7770000,
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.5.0/haqq_1.5.0_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.6.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.10',
          tag: 'v0.46.10-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '5.2.1'
        }
      },
      {
        name: 'v1.6.0',
        tag: 'v1.6.0',
        recommendedVersion: 'v1.6.0',
        compatibleVersions: ['v1.6.0'],
        proposal: 21,
        height: 8002000,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.0/haqq_1.6.0_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.6.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13',
          tag: 'v0.46.13-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v1.6.1',
        tag: 'v1.6.1',
        recommendedVersion: 'v1.6.1',
        compatibleVersions: ['v1.6.1'],
        proposal: 22,
        height: 8076500,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.1/haqq_1.6.1_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.6.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13',
          tag: 'v0.46.13-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v1.6.2',
        tag: 'v1.6.2',
        recommendedVersion: 'v1.6.2',
        compatibleVersions: ['v1.6.2'],
        proposal: 23,
        height: 8193000,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.2/haqq_1.6.2_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.6.3',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13',
          tag: 'v0.46.13-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v1.6.3',
        tag: 'v1.6.3',
        recommendedVersion: 'v1.6.3',
        compatibleVersions: ['v1.6.3'],
        proposal: 25,
        height: 8282000,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.3/haqq_1.6.3_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.6.4',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13',
          tag: 'v0.46.13-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v1.6.4',
        tag: 'v1.6.4',
        recommendedVersion: 'v1.6.4',
        compatibleVersions: ['v1.6.4'],
        proposal: 26,
        height: 9070000,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.6.4/haqq_1.6.4_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13',
          tag: 'v0.46.13-ledger.3'
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v1.7.0',
        tag: 'v1.7.0',
        recommendedVersion: 'v1.7.0',
        compatibleVersions: ['v1.7.0'],
        proposal: 27,
        height: 9451000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.0/haqq_1.7.0_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.1',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.1',
        tag: 'v1.7.1',
        recommendedVersion: 'v1.7.1',
        compatibleVersions: ['v1.7.1'],
        proposal: 28,
        height: 9774000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.1/haqq_1.7.1_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.2',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.2',
        tag: 'v1.7.2',
        recommendedVersion: 'v1.7.2',
        compatibleVersions: ['v1.7.2'],
        proposal: 29,
        height: 9862000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.2/haqq_1.7.2_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.3',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.3',
        tag: 'v1.7.3',
        recommendedVersion: 'v1.7.3',
        compatibleVersions: ['v1.7.3'],
        proposal: 30,
        height: 9950000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.3/haqq_1.7.3_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.4',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.4',
        tag: 'v1.7.4',
        recommendedVersion: 'v1.7.4',
        compatibleVersions: ['v1.7.4'],
        proposal: 31,
        height: 10881000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.4/haqq_1.7.4_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.5',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.5',
        tag: 'v1.7.5',
        recommendedVersion: 'v1.7.5',
        compatibleVersions: ['v1.7.5'],
        proposal: 32,
        height: 11235000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.5/haqq_1.7.5_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.5/haqq_1.7.5_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.5/haqq_1.7.5_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.5/haqq_1.7.5_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.5/haqq_1.7.5_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.6',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.6',
        tag: 'v1.7.6',
        recommendedVersion: 'v1.7.6',
        compatibleVersions: ['v1.7.6'],
        proposal: 34,
        height: 11567000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.6/haqq_1.7.6_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.6/haqq_1.7.6_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.6/haqq_1.7.6_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.6/haqq_1.7.6_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.6/haqq_1.7.6_Windows_x86_64.zip'
        },
        nextVersionName: 'v1.7.7',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.8',
          tag: 'v0.47.8-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.7',
        tag: 'v1.7.7',
        recommendedVersion: 'v1.7.7',
        compatibleVersions: ['v1.7.7'],
        proposal: 34,
        height: 11567000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.7/haqq_1.7.7_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.7/haqq_1.7.7_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.7/haqq_1.7.7_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.7/haqq_1.7.7_linux_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.7/haqq_1.7.7_windows_amd64.zip'
        },
        nextVersionName: 'v1.7.8',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.8',
          tag: 'v0.47.8-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.7.8',
        tag: 'v1.7.8',
        recommendedVersion: 'v1.7.8',
        compatibleVersions: ['v1.7.8'],
        proposal: 38,
        height: 12380500,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.8/haqq_1.7.8_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.8/haqq_1.7.8_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.8/haqq_1.7.8_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.8/haqq_1.7.8_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.7.8/haqq_1.7.8_windows_amd64.zip'
        },
        nextVersionName: 'v1.8.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.8',
          tag: 'v0.47.8-evmos'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v1.8.0',
        tag: 'v1.8.0',
        recommendedVersion: 'v1.8.0',
        compatibleVersions: ['v1.8.0'],
        proposal: 39,
        height: 13035000,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.9'
        },
        binaries: {
          "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_windows_amd64.zip'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.12',
          tag: 'v0.47.12-evmos.2'
        },
        ibc: {
          type: 'go',
          version: '7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/evmos/cosmos-sdk',
      version: 'v0.47.12',
      tag: 'v0.47.12-evmos.2'
    },
    ibc: {
      type: 'go',
      version: '7.4.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.tm.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://rpc.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://rpc.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-haqq.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-rpc.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://haqq-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://haqq.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [
      {
        address: 'https://rest.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://sdk.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://api.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://api-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-api.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://haqq-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'grpc.haqq.sh:443',
        provider: 'kioqq'
      },
      {
        address: 'haqq.grpc.nodersteam.com:9191',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc.haqq.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'haqq-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'haqq.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'mainnet-haqq-grpc.konsortech.xyz:11090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://grpc-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'haqq-grpc.palamar.io:443',
        provider: 'Palamar'
      },
      {
        address: 'haqq-grpc.noders.services:14090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://rpc.eth.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://evm.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://jsonrpc.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      },
      {
        address: 'https://jsonrpc.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-evm.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://evm-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.haqq.network',
      txPage: 'https://explorer.haqq.network/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/haqq',
      txPage: 'https://ping.pub/haqq/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://haqq.explorers.guru',
      txPage: 'https://haqq.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/haqq',
      txPage: 'https://staking-explorer.com/transaction.php?chain=haqq&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=haqq&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/haqq',
      txPage: 'https://explorer.nodestake.top/haqq/tx/${txHash}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/haqq',
      txPage: 'https://explorer.konsortech.xyz/haqq/tx/${txHash}'
    },
    {
      kind: 'Palamar Explorer',
      url: 'https://explorer.palamar.io/haqq',
      txPage: 'https://explorer.palamar.io/haqq/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
      theme: {
        primaryColorHex: '#b9744f'
      }
    }]
};
export default info;