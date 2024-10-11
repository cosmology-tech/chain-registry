import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terpnettestnet2',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Terp-Network',
  chainType: 'cosmos',
  chainId: '90u-2',
  bech32Prefix: 'terp',
  daemonName: 'terpd',
  nodeHome: '$HOME/.terp',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uthiolx',
        fixedMinGasPrice: 0.5,
        lowGasPrice: 0.75,
        averageGasPrice: 1,
        highGasPrice: 1.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uterpx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/terpnetwork/terp-core',
    recommendedVersion: 'v4.1.testnet',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    compatibleVersions: [],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/terpnetwork/test-net/master/90u-2/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-arm64'
    },
    versions: [
      {
        name: 'v1.0.0-stable',
        recommendedVersion: 'v1.0.0-stable',
        compatibleVersions: ['v1.0.0', 'v1.0.0-stable'],
        consensus: {
          type: 'cometbft',
          version: '0.37.0'
        }
      },
      {
        name: 'huckleberry',
        recommendedVersion: 'huckleberry',
        compatibleVersions: ['huckleberry'],
        consensus: {
          type: 'cometbft',
          version: '0.37.0'
        }
      },
      {
        name: 'barberry',
        recommendedVersion: 'barberry',
        compatibleVersions: ['barberry'],
        consensus: {
          type: 'cometbft',
          version: '0.37.1'
        }
      },
      {
        name: 'v2.0.0',
        recommendedVersion: 'v2.0.0',
        compatibleVersions: ['v2.0.0'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        }
      },
      {
        name: 'v3.0.0',
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        }
      },
      {
        name: 'v2-pigeonfall',
        recommendedVersion: 'v2-pigeonfall',
        compatibleVersions: ['v2-pigeonfall'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        }
      },
      {
        name: 'v3-pigeonfall',
        recommendedVersion: 'v3-pigeonfall',
        compatibleVersions: ['v3-pigeonfall'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        }
      },
      {
        name: 'v4.1.testnet',
        recommendedVersion: 'v4.1.testnet',
        compatibleVersions: ['v4.1.testnet'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        }
      }
    ]
  },
  apis: {
    rpc: [{
        address: 'https://terp-testnet-rpc.itrocket.net:443/',
        provider: 'itrocket'
      }],
    rest: [{
        address: 'https://terp-testnet-api.itrocket.net:443/',
        provider: 'itrocket'
      }],
    grpc: [{
        address: 'terp-testnet-grpc.itrocket.net/',
        provider: 'itrocket'
      }]
  },
  explorers: [{
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.top/terp-testnet',
      txPage: 'https://explorer.nodestake.top/terp-testnet/tx/${txHash}'
    }, {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com',
      txPage: 'https://explorer.nodexcapital.com/terp/tx/${txHash}',
      accountPage: 'https://explorer.nodexcapital.com/terp/account/{$accountAddress}'
    }]
};
export default info;