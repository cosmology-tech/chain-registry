import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'bitcannadevnet2',
  status: 'live',
  network_type: 'devnet',
  pretty_name: 'BitCanna Devnet-6 SDK v0.46.x',
  chain_type: 'cosmos',
  chain_id: 'bitcanna-dev-6',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubcna',
        fixed_min_gas_price: 0.001
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }],
    grpc: [{
        address: 'http://devnet-6.bitcanna.io:9090',
        provider: 'bitcanna'
      }],
    rest: [{
        address: 'https://lcd-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }]
  },
  explorers: [{
      url: 'https://explorer-devnet-6.bitcanna.io',
      tx_page: 'https://explorer-devnet-6.bitcanna.io/tx/${txHash}'
    }]
} as const satisfies Chain;
export default info;