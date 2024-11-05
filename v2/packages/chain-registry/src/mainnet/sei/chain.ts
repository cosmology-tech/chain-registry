import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sei',
  status: 'live',
  website: 'https://www.sei.io/',
  networkType: 'mainnet',
  prettyName: 'Sei',
  chainType: 'cosmos',
  chainId: 'pacific-1',
  bech32Prefix: 'sei',
  daemonName: 'seid',
  nodeHome: '$HOME/.sei',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usei',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.02,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usei'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    recommendedVersion: 'v5.9.0',
    compatibleVersions: ['v5.9.0'],
    consensus: {
      type: 'sei-tendermint',
      version: 'v0.3.8'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sei-protocol/testnet/main/pacific-1/genesis.json'
    },
    versions: [
      {
        name: 'v.0.8',
        recommendedVersion: '3.0.8',
        compatibleVersions: ['3.0.8'],
        nextVersionName: 'v3.0.9',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.10'
        },
        cosmwasm: {
          version: 'v0.27.0',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v3.0.0'
        }
      },
      {
        name: 'v3.0.9',
        recommendedVersion: 'v3.0.9',
        compatibleVersions: ['v3.0.9'],
        proposal: 24,
        height: 25259000,
        nextVersionName: 'v3.1.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.10'
        },
        cosmwasm: {
          version: 'v0.27.0',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v3.1.0'
        }
      },
      {
        name: 'v3.1.1',
        recommendedVersion: 'v3.1.1',
        compatibleVersions: ['v3.1.1'],
        proposal: 32,
        height: 29772820,
        nextVersionName: 'v3.2.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.10'
        },
        cosmwasm: {
          version: 'v0.27.0',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v3.2.0'
        }
      },
      {
        name: 'v3.2.1',
        recommendedVersion: 'v3.2.1',
        compatibleVersions: ['v3.2.1'],
        proposal: 42,
        height: 34078260,
        nextVersionName: 'v3.3.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.10'
        },
        cosmwasm: {
          version: 'v0.27.0',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v3.2.0'
        }
      },
      {
        name: 'v3.3.0',
        recommendedVersion: 'v3.3.4',
        compatibleVersions: [
          'v3.3.1',
          'v3.3.2',
          'v3.3.3',
          'v3.3.4'
        ],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.28'
        },
        nextVersionName: 'v3.5.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.63'
        },
        cosmwasm: {
          version: 'v0.0.2',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v3.5.0',
        recommendedVersion: 'v3.5.1',
        compatibleVersions: ['v3.5.0', 'V3.5.1'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.35'
        },
        nextVersionName: 'v3.6.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.63'
        },
        cosmwasm: {
          version: 'v0.0.4',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v3.6.1',
        proposal: 49,
        height: 53894102,
        recommendedVersion: 'v3.6.1',
        compatibleVersions: ['v3.6.1'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.37'
        },
        nextVersionName: 'v3.7.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.72'
        },
        cosmwasm: {
          version: 'v0.0.4',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v3.7.0',
        proposal: 51,
        height: 60622970,
        recommendedVersion: 'v3.7.0',
        compatibleVersions: ['v3.7.0'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.37'
        },
        nextVersionName: 'v3.8.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.74'
        },
        cosmwasm: {
          version: 'v0.0.4',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v3.8.0',
        proposal: 53,
        height: 64851894,
        recommendedVersion: 'v3.8.2',
        compatibleVersions: ['v3.8.0', 'v3.8.2'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.39'
        },
        nextVersionName: 'v3.9.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.77'
        },
        cosmwasm: {
          version: 'v0.0.8',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v3.9.0',
        proposal: 54,
        height: 79123881,
        recommendedVersion: 'v5.5.2',
        compatibleVersions: ['v5.5.2'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.40'
        },
        nextVersionName: 'v5.5.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.2.83'
        },
        cosmwasm: {
          version: 'v0.1.1',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v5.5.2',
        proposal: 55,
        height: 73290488,
        recommendedVersion: 'v5.5.2',
        compatibleVersions: ['v5.5.2'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.3'
        },
        nextVersionName: 'v5.5.5',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.13'
        },
        cosmwasm: {
          version: 'v0.1.5',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v5.5.5',
        proposal: 58,
        height: 84006014,
        recommendedVersion: 'v5.5.5',
        compatibleVersions: ['v5.5.5'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.3'
        },
        nextVersionName: 'v5.6.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.19'
        },
        cosmwasm: {
          version: 'v0.1.5',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.1'
        }
      },
      {
        name: 'v5.6.2',
        proposal: 80,
        height: 89475838,
        recommendedVersion: 'v5.6.2',
        compatibleVersions: ['v5.6.2'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.4'
        },
        nextVersionName: '5.7.5',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.24'
        },
        cosmwasm: {
          version: 'v0.1.9',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.1'
        }
      },
      {
        name: 'v5.7.5',
        proposal: 82,
        height: 94496767,
        recommendedVersion: 'v5.7.5',
        compatibleVersions: ['v5.7.5'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.6'
        },
        nextVersionName: 'v5.8.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.31'
        },
        cosmwasm: {
          version: 'v0.2.3',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.2'
        }
      },
      {
        name: 'v5.8.0',
        proposal: 84,
        height: 102491599,
        recommendedVersion: 'v5.8.0',
        compatibleVersions: ['v5.8.0'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.8'
        },
        nextVersionName: 'v5.9.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.35'
        },
        cosmwasm: {
          version: 'v0.2.4',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.2'
        }
      },
      {
        name: 'v5.9.0',
        proposal: 85,
        height: 107000672,
        recommendedVersion: 'v5.9.0',
        compatibleVersions: ['v5.9.0'],
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.3.8'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.3.37'
        },
        cosmwasm: {
          version: 'v0.2.4',
          repo: 'https://github.com/sei-protocol/sei-wasmd',
          path: '$HOME/.sei/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/sei-protocol/sei-ibc-go',
          version: 'v3.3.2'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/sei-protocol/sei-cosmos',
      version: 'v0.3.37'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/sei-protocol/sei-ibc-go',
      version: 'v3.3.2'
    },
    cosmwasm: {
      version: 'v0.2.4',
      repo: 'https://github.com/sei-wasmd',
      path: '$HOME/.sei/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-rpc.polkachu.com',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rpc.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://rpc-sei.stingray.plus',
        provider: 'StingRay'
      },
      {
        address: 'https://rpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://sei-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sei.drpc.org',
        provider: 'dRPC - All chains in one place'
      }
    ],
    rest: [
      {
        address: 'https://rest.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-api.polkachu.com',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rest.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://api-sei.stingray.plus',
        provider: 'StingRay'
      },
      {
        address: 'https://lcd-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://sei-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.sei-apis.com:443',
        provider: 'Rhino Stake'
      },
      {
        address: 'sei.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-grpc.polkachu.com:11990',
        provider: 'polkachu.com'
      },
      {
        address: 'sei-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'sei.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'sei-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://evm-rpc.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://seievm-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://jsonrpc.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://seitrace.com',
      txPage: 'https://seitrace.com/tx/${txHash}?chain=pacific-1',
      accountPage: 'https://seitrace.com/address/${accountAddress}?chain=pacific-1'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sei',
      txPage: 'https://www.mintscan.io/sei/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/sei/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sei',
      txPage: 'https://ezstaking.app/sei/txs/${txHash}',
      accountPage: 'https://ezstaking.app/sei/account/${accountAddress}'
    },
    {
      kind: 'celatone',
      url: 'https://www.seiscan.app/pacific-1',
      txPage: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      accountPage: 'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sei',
      txPage: 'https://staking-explorer.com/transaction.php?chain=sei&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=sei&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/sei',
      txPage: 'https://mainnet.whispernode.com/sei/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/sei/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
      theme: {
        primaryColorHex: '#9c1c1c'
      }
    }]
};
export default info;