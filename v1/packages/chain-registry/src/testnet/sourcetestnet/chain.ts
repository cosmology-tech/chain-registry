import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sourcetestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Source Testnet',
  chain_type: 'cosmos',
  chain_id: 'sourcetest-1',
  bech32_prefix: 'source',
  daemon_name: 'sourced',
  node_home: '$HOME/.source',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usource',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usource'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.45'
  },
  apis: {
    rpc: [
      {
        address: 'https://source-testnet-rpc.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://source-test.rpc.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://source-testnet-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://source_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://source-testnet-api.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://source-test.api.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://source-testnet-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://api-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://source_testnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
        address: 'source-testnet-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }, {
        address: 'grpc-testnet-source.sr20de.xyz/',
        provider: 'SR20DE'
      }]
  },
  explorers: [
    {
      kind: 'Nodestake',
      url: 'https://explorer.nodestake.top/source-testnet',
      tx_page: 'https://explorer.nodestake.top/source-testnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Source',
      tx_page: 'https://explorer.stavr.tech/Source/tx/${txHash}'
    },
    {
      kind: 'SR20DE',
      url: 'https://explorer.sr20de.xyz/Source-testnet',
      tx_page: 'https://explorer.sr20de.xyz/Source-testnet/txs/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/source-testnet',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/source-testnet/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/source-testnet/account/${accountAddress}'
    }
  ]
};
export default info;