import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terpnettestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Terp-Network',
  chainType: 'cosmos',
  chainId: '90u-4',
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
    recommendedVersion: 'v4.2.2',
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    compatibleVersions: [
      'v4.2.0',
      'v4.2.1',
      'v4.2.2'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/terpnetwork/networks/main/testnet/90u-4/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.2.0/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.2.0/terpd-linux-arm64'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.terp.network:443/',
        provider: 'Terpnet Foundation'
      }, {
        address: 'https://terp-testnet-rpc.itrocket.net:443/',
        provider: 'itrocket'
      }],
    rest: [{
        address: 'https://testnet-api.terp.network:443/',
        provider: 'Terpnet Foundation'
      }, {
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