import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'persistencetestnet2',
  chainType: 'cosmos',
  chainId: 'test-core-2',
  prettyName: 'Persistence Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://persistence.one/',
  bech32Prefix: 'persistence',
  daemonName: 'persistenceCore',
  nodeHome: '$HOME/.persistenceCore',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxprt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.05,
        averageGasPrice: 0.125,
        highGasPrice: 0.2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxprt'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/persistenceOne/persistenceCore',
    recommendedVersion: 'v9.1.1',
    compatibleVersions: ['v9.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v9.1.1/persistenceCore-v9.1.1-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/persistenceOne/networks/auditOne/test-core-2/test-core-2/genesis.json'
    },
    versions: [
      {
        name: 'v7.0.2',
        recommendedVersion: 'v7.0.2',
        compatibleVersions: ['v7.0.2'],
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.2/persistenceCore-v7.0.2-linux-amd64.tar.gz'
        }
      },
      {
        name: 'v8',
        tag: 'v8.0.0',
        recommendedVersion: 'v8.0.0',
        compatibleVersions: ['v8.0.0'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37'
        },
        cosmwasmVersion: '0.40',
        cosmwasmEnabled: true,
        nextVersionName: 'v8.1.0',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.40',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v8.1.0',
        tag: 'v8.1.0',
        recommendedVersion: 'v8.1.0',
        compatibleVersions: ['v8.1.0'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37'
        },
        cosmwasmVersion: '0.40',
        cosmwasmEnabled: true,
        nextVersionName: 'v9',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.40',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v9',
        tag: 'v9.0.0',
        height: 1531570,
        proposal: 16,
        recommendedVersion: 'v8.0.0',
        compatibleVersions: ['v8.0.0'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37'
        },
        cosmwasmVersion: '0.40',
        cosmwasmEnabled: true,
        nextVersionName: 'v9.1.0',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.40',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v9.1.0',
        tag: 'v9.1.1',
        height: 1543200,
        proposal: 17,
        recommendedVersion: 'v9.1.1',
        compatibleVersions: ['v9.1.1', 'v9.1.0'],
        cosmosSdkVersion: 'v0.47.0-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        cosmwasmVersion: 'v0.40.2',
        cosmwasmEnabled: true,
        cosmwasmPath: '$HOME/.persistenceCore/wasm',
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v9.1.1/persistenceCore-v9.1.1-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.47.0',
          tag: 'v0.47.0-lsm'
        },
        cosmwasm: {
          version: 'v0.40.2',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow'
      },
      {
        address: 'https://persistence-testnet-rpc.baryon.dev/',
        provider: 'Baryon'
      },
      {
        address: 'https://persistence-testnet-rpc.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://rpc.testnet2.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistencecoretest-rpc.ytwofund.pro/',
        provider: 'YTWOFUND'
      },
      {
        address: 'http://persistence-testnet.paranorm.pro:24657/',
        provider: 'Paranorm'
      }
    ],
    rest: [
      {
        address: 'https://api-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow'
      },
      {
        address: 'https://persistence-testnet-api.baryon.dev/',
        provider: 'Baryon'
      },
      {
        address: 'https://persistence-testnet-rest.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://rest.testnet2.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistenceCoreTest-rest.ytwofund.pro',
        provider: 'YTWOFUND'
      }
    ],
    grpc: [{
        address: 'persistence-testnet-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      }, {
        address: 'persistenceCoreTest-grpc.ytwofund.pro:9090',
        provider: 'YTWOFUND'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/persistence-testnet',
      txPage: 'https://mintscan.io/persistence-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/persistence-testnet/account/${accountAddress}'
    },
    {
      kind: 'StakeFlow',
      url: 'https://stakeflow.io/persistence-testnet',
      txPage: 'https://stakeflow.io/persistence-testnet/transactions/${txHash}',
      accountPage: 'https://stakeflow.io/persistence-testnet/accounts/${accountAddress}'
    },
    {
      kind: 'baryon',
      url: 'https://testnet-explorer.baryon.dev/test-core-2',
      txPage: 'https://testnet-explorer.baryon.dev/test-core-2/tx/{txHash}',
      accountPage: 'https://testnet-explorer.baryon.dev/test-core-2/account/${accountAddress}'
    }
  ]
};
export default info;