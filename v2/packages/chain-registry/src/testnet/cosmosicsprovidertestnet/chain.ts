import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmosicsprovidertestnet',
  chainType: 'cosmos',
  chainId: 'provider',
  prettyName: 'Cosmos ICS Provider Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'cosmos',
  daemonName: 'gaiad',
  nodeHome: '$HOME/.gaia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatom',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmos/gaia',
    recommendedVersion: 'v20.0.0',
    compatibleVersions: ['v20.0.0'],
    cosmosSdkVersion: 'v0.50.9-lsm',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    binaries: {
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-linux-amd64',
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmos/testnets/master/interchain-security/provider/provider-genesis.json'
    },
    versions: [
      {
        name: 'v12',
        recommendedVersion: 'v12.0.0',
        compatibleVersions: ['v12.0.0-rc0', 'v12.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-arm64.exe'
        }
      },
      {
        name: 'v13',
        recommendedVersion: 'v13.0.0',
        compatibleVersions: ['v13.0.0-rc0', 'v13.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-arm64.exe'
        }
      },
      {
        name: 'v14',
        recommendedVersion: 'v14.1.0',
        compatibleVersions: ['v14.1.0-rc0', 'v14.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-arm64.exe'
        }
      },
      {
        name: 'v15',
        recommendedVersion: 'v15.2.0',
        compatibleVersions: ['v15.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-windows-arm64.exe'
        },
        nextVersionName: 'v16'
      },
      {
        name: 'v16',
        recommendedVersion: 'v16.0.0',
        compatibleVersions: ['v16.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-windows-arm64.exe'
        },
        nextVersionName: 'v17'
      },
      {
        name: 'v17',
        recommendedVersion: 'v17.2.0',
        compatibleVersions: ['v17.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.2.0/gaiad-v17.2.0-windows-arm64.exe'
        },
        nextVersionName: 'v17'
      },
      {
        name: 'v18',
        tag: 'v18.0.0-rc3',
        recommendedVersion: 'v18.0.0-rc3',
        compatibleVersions: ['v18.0.0-rc3'],
        cosmosSdkVersion: 'v0.47.16-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.6'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-darwin-amd64',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.0.0-rc3/gaiad-v18.0.0-rc3-windows-arm64.exe'
        },
        nextVersionName: 'v19',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.16',
          tag: 'v0.47.16-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        }
      },
      {
        name: 'v20',
        tag: 'v20.0.0',
        recommendedVersion: 'v20.0.0',
        compatibleVersions: ['v20.0.0'],
        cosmosSdkVersion: 'v0.50.9-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.11'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-linux-amd64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v20.0.0/gaiad-v20.0.0-darwin-arm64'
        },
        nextVersionName: 'v21',
        sdk: {
          type: 'cosmos',
          version: 'v0.50.9',
          tag: 'v0.50.9-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v8.5.1'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9',
      tag: 'v0.50.9-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/ics-testnet-provider',
      txPage: 'https://mintscan.io/ics-testnet-provider/tx/${txHash}'
    }, {
      kind: 'Ping.pub',
      url: 'https://explorer.rs-testnet.polypore.xyz/provider',
      txPage: 'https://explorer.rs-testnet.polypore.xyz/provider/tx/${txHash}'
    }]
};
export default info;