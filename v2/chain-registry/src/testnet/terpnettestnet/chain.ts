import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terpnettestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Terp-Network',
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