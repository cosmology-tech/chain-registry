import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet',
  chainId: 'xion-testnet-1',
  prettyName: 'Xion Testnet',
  website: 'https://burnt.com',
  status: 'live',
  networkType: 'testnet',
  chainType: 'cosmos',
  bech32Prefix: 'xion',
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/testnets/xion-testnet-1/genesis.json'
    },
    versions: [
      {
        name: 'v0.1.0',
        tag: 'v1.0.0',
        height: 1,
        cosmosSdkVersion: '0.47.0',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.40.0-rc.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.0'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.0'
        },
        language: {
          type: 'go',
          version: '1.19'
        },
        cosmwasm: {
          version: '0.40.0',
          enabled: true,
          tag: '0.40.0-rc.0'
        },
        ibc: {
          type: 'go',
          version: 'v7.0.0'
        }
      },
      {
        name: 'v0.3.2',
        tag: 'v2.0.0',
        height: 1929544,
        proposal: 4,
        cosmosSdkVersion: '0.47.3',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.40.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        language: {
          type: 'go',
          version: '1.19'
        },
        cosmwasm: {
          version: '0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v0.3.3',
        tag: 'v3.0.0',
        height: 2147030,
        proposal: 7,
        cosmosSdkVersion: '0.47.3',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.40.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        language: {
          type: 'go',
          version: '1.19'
        },
        cosmwasm: {
          version: '0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v0.3.4',
        tag: 'v3.1.1',
        height: 3278095,
        cosmosSdkVersion: '0.47.5',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.43.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.5'
        },
        language: {
          type: 'go',
          version: '1.19'
        },
        cosmwasm: {
          version: '0.43.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v0.3.7',
        tag: 'v4.0.0',
        proposal: 18,
        height: 6887750,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v0.3.7/xiond-v0.3.7-linux-amd64:checksum=sha256:3d7626e971bf2ece28d4835d45ee6bd104a54ba6d652cd4982fc00ff8a6590de'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.21'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v0.3.8',
        tag: 'v5.0.0',
        proposal: 19,
        height: 7130100,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v0.3.8/xiond-v0.3.8-linux-amd64:checksum=sha256:ef5112a6bb01e9dd297abf27ab423582004d3261f3300cef419937555bf8e281'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.21'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v0.3.9',
        tag: 'v6.0.0',
        height: 7438800,
        proposal: 23,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v0.3.9/xiond-v0.3.9-linux-amd64:checksum=sha256:476abdd10b6bde0e81e14f4e6d67bf7eecfeee887879316153c72c01b80ccb98'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.21'
        },
        cosmwasm: {
          version: '0.45.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v7.0.0',
        tag: 'v7.0.0',
        height: 8457600,
        proposal: 29,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v7.0.0/xiond-v7.0.0-linux-amd64:checksum=sha256:e7431453c3e7adadb7d75516d6cdc27e0ab4e9bdbdb620f7af4697a72c0c71bb'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.21'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v8.0.0',
        tag: 'v8.0.1',
        height: 8903500,
        proposal: 38,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        compatibleVersions: ['v8.0.0', 'v8.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v8.0.1/xiond-v8.0.1-linux-amd64:checksum=sha256:253f0efd544d6accab95c761eb748b787b093e645e2e565c98e9e87763a19aa8'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.21'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v9',
        tag: 'v9.0.0',
        height: 8983000,
        proposal: 40,
        cosmosSdkVersion: '0.47.10',
        cosmwasmEnabled: true,
        cosmwasmVersion: '0.45.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v9.0.0/xiond-v9.0.0-linux-amd64?checksum=sha256:dc25db91e7a3e9befbc1e96c76f6537461812466a28df9484d71838e7c4967f1'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.10'
        },
        language: {
          type: 'go',
          version: '1.22'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-burnt-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://testnet-burnt-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-burnt-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'polkachu'
      },
      {
        address: 'burnt-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ],
  explorers: [{
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/burnt',
      txPage: 'https://testnet.itrocket.net/burnt/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/burnt/account/${accountAddress}'
    }]
};
export default info;