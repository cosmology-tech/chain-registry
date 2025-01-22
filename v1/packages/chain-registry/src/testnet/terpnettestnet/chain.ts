import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'terpnettestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Terp-Network',
  chain_type: 'cosmos',
  chain_id: '90u-4',
  bech32_prefix: 'terp',
  daemon_name: 'terpd',
  node_home: '$HOME/.terp',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uthiolx',
        fixed_min_gas_price: 0.5,
        low_gas_price: 0.75,
        average_gas_price: 1,
        high_gas_price: 1.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uterpx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/terpnetwork/terp-core',
    recommended_version: 'v4.2.2',
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    compatible_versions: [
      'v4.2.0',
      'v4.2.1',
      'v4.2.2'
    ],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/terpnetwork/networks/main/testnet/90u-4/genesis.json'
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
      tx_page: 'https://explorer.nodestake.top/terp-testnet/tx/${txHash}'
    }, {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com',
      tx_page: 'https://explorer.nodexcapital.com/terp/tx/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/terp/account/{$accountAddress}'
    }]
};
export default info;