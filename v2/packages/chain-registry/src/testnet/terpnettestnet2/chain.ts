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
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/terpnetwork/test-net/master/90u-2/genesis.json'
    },
    recommendedVersion: 'v4.1.testnet',
    compatibleVersions: ['v4.1.testnet'],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-arm64'
    }
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