import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'joltify',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.joltify.io/',
  pretty_name: 'Joltify',
  chain_type: 'cosmos',
  chain_id: 'joltify_1729-1',
  bech32_prefix: 'jolt',
  daemon_name: 'jolt',
  node_home: '$HOME/.joltify',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujolt',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ujolt'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.5',
    cosmwasm_enabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg',
      theme: {
        primary_color_hex: '#2dfb71'
      }
    }],
  description: 'Joltify is the First EVM compatible game-changing L1 Public Chain built on the Cosmos SDK for Real-World Assets (RWA) and Beyond.',
  apis: {
    rpc: [{
        address: 'https://rpc.joltify.io',
        provider: 'joltify'
      }],
    rest: [{
        address: 'https://lcd.joltify.io/',
        provider: 'joltify'
      }],
    grpc: [{
        address: 'grpc.joltify.io:443',
        provider: 'joltify'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://evm.joltify.io/',
        provider: 'joltify'
      }]
  },
  explorers: [{
      kind: 'big dipper',
      url: 'https://explorer.joltify.io/joltify',
      tx_page: 'https://explorer.joltify.io/joltify/transactions/${txHash}',
      account_page: 'https://explorer.joltify.io/joltify/accounts/${accountAddress}'
    }],
  keywords: ['rwa', 'lending']
};
export default info;