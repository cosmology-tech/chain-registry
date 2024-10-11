import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'fxcore',
  chainType: 'cosmos',
  chainId: 'fxcore',
  website: 'https://functionx.io',
  prettyName: 'f(x)Core',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'fx',
  daemonName: 'fxcored',
  nodeHome: '$HOME/.fxcore',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'FX',
        fixedMinGasPrice: 4000000000000,
        lowGasPrice: 4000000000000,
        averageGasPrice: 4200000000000,
        highGasPrice: 5000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'FX'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/functionx/fx-core',
    recommendedVersion: 'v7.5.0',
    compatibleVersions: ['v7.5.0'],
    binaries: {
      "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-amd64',
      "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-arm64',
      "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-windows-amd64.exe'
    },
    genesis: {
      name: 'fxv1',
      genesisUrl: 'https://github.com/functionx/fx-core/raw/main/public/mainnet/genesis.json'
    },
    cosmosSdkVersion: 'v0.47.13',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.6'
    },
    versions: [
      {
        name: 'fxv1',
        tag: 'v1.1.2',
        height: 0,
        nextVersionName: 'fxv2',
        recommendedVersion: 'v1.1.2',
        compatibleVersions: ['v1.1.2'],
        binaries: {
          "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v1.1.2/fx-core_1.1.2_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v1.1.2/fx-core_1.1.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v1.1.2/fx-core_1.1.2_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v1.1.2/fx-core_1.1.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v1.1.2/fx-core_1.1.2_Windows_x86_64.zip'
        }
      },
      {
        name: 'fxv2',
        tag: 'v2.4.2',
        height: 5713000,
        proposal: 10,
        nextVersionName: 'fxv3',
        recommendedVersion: 'v2.4.2',
        compatibleVersions: ['v2.4.2'],
        binaries: {
          "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v2.4.2/fx-core_2.4.2_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v2.4.2/fx-core_2.4.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v2.4.2/fx-core_2.4.2_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v2.4.2/fx-core_2.4.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v2.4.2/fx-core_2.4.2_Windows_x86_64.zip'
        }
      },
      {
        name: 'fxv3',
        tag: 'v3.1.0',
        height: 8756000,
        proposal: 29,
        nextVersionName: 'v4.2.x',
        recommendedVersion: 'v3.1.0',
        compatibleVersions: ['v3.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v3.1.0/fx-core_3.1.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v3.1.0/fx-core_3.1.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v3.1.0/fx-core_3.1.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v3.1.0/fx-core_3.1.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v3.1.0/fx-core_3.1.0_Windows_x86_64.zip'
        }
      },
      {
        name: 'v4.2.x',
        tag: 'v4.2.1',
        height: 10477500,
        proposal: 36,
        recommendedVersion: 'v4.2.1',
        compatibleVersions: ['v4.2.1'],
        binaries: {
          "linux/amd64": 'https://github.com/functionx/fx-core/releases/download/v4.2.1/fx-core_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/functionx/fx-core/releases/download/v4.2.1/fx-core_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/functionx/fx-core/releases/download/v4.2.1/fx-core_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v4.2.1/fx-core_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/functionx/fx-core/releases/download/v4.2.1/fx-core_Windows_x86_64.zip'
        },
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        }
      },
      {
        name: 'v5.0.x',
        tag: 'v5.0.0',
        height: 11601700,
        proposal: 41,
        previousVersionName: 'v4.2.x',
        nextVersionName: 'v6.0.x',
        recommendedVersion: 'v5.0.0',
        compatibleVersions: ['v5.0.0'],
        cosmosSdkVersion: 'v0.46.13',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.28'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        },
        binaries: {
          "darwin/arm64": 'https://github.com/functionX/fx-core/releases/download/v5.0.0/fx-core_Darwin_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/functionX/fx-core/releases/download/v5.0.0/fx-core_Darwin_amd64.tar.gz',
          "linux/arm64": 'https://github.com/functionX/fx-core/releases/download/v5.0.0/fx-core_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/functionX/fx-core/releases/download/v5.0.0/fx-core_Linux_amd64.tar.gz',
          "windows/amd64": 'https://github.com/functionX/fx-core/releases/download/v5.0.0/fx-core_Windows_x86_64.zip'
        }
      },
      {
        name: 'v6.0.x',
        tag: 'v6.1.0',
        height: 13598000,
        proposal: 47,
        previousVersionName: 'v5.0.x',
        nextVersionName: 'v7.5.x',
        recommendedVersion: 'v6.1.0',
        compatibleVersions: ['v6.1.0'],
        cosmosSdkVersion: 'v0.46.13',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        consensus: {
          type: 'tendermint',
          version: 'v0.34.28'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        },
        binaries: {
          "darwin/arm64": 'https://github.com/functionX/fx-core/releases/download/v6.1.0/fx-core_Darwin_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/functionX/fx-core/releases/download/v6.1.0/fx-core_Darwin_amd64.tar.gz',
          "linux/arm64": 'https://github.com/functionX/fx-core/releases/download/v6.1.0/fx-core_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/functionX/fx-core/releases/download/v6.1.0/fx-core_Linux_amd64.tar.gz',
          "windows/amd64": 'https://github.com/functionX/fx-core/releases/download/v6.1.0/fx-core_Windows_x86_64.zip'
        }
      },
      {
        name: 'v7.5.x',
        tag: 'v7.5.0',
        height: 16838000,
        proposal: 63,
        previousVersionName: 'v6.0.x',
        nextVersionName: '',
        recommendedVersion: 'v7.5.0',
        compatibleVersions: ['v7.5.0'],
        cosmosSdkVersion: 'v0.47.13',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.13',
          tag: 'v0.47.13'
        },
        consensus: {
          type: 'cometbft',
          version: 'v0.37.9'
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        },
        binaries: {
          "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-amd64',
          "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-arm64',
          "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
          "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-windows-amd64.exe'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.13',
      tag: 'v0.47.13'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://fx-json.functionx.io',
        provider: 'Function X'
      }, {
        address: 'https://functionx.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    rest: [{
        address: 'https://fx-rest.functionx.io',
        provider: 'Function X'
      }, {
        address: 'https://functionx.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    grpc: [
      {
        address: 'https://fx-grpc.functionx.io',
        provider: 'Function X'
      },
      {
        address: 'https://fx-grpc.portfolio-x.xyz:9090',
        provider: 'Portfolio X'
      },
      {
        address: 'functionx.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://fx-web3.functionx.io',
        provider: 'Function X'
      }]
  },
  explorers: [
    {
      kind: 'starscan',
      url: 'https://starscan.io',
      txPage: 'https://starscan.io/fxcore/tx/${txHash}',
      accountPage: 'https://starscan.io/fxcore/address/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/fx',
      txPage: 'https://explorer.tcnetwork.io/fx/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/fx/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fxcore',
      txPage: 'https://ping.pub/fxcore/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fxcore/',
      txPage: 'https://explorer.nodeshub.online/fxcore/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/fxcore/accounts/${accountAddress}'
    }
  ]
};
export default info;