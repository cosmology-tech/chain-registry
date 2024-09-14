import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'kimatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Kima',
  chain_type: 'cosmos',
  chain_id: 'kima_testnet',
  bech32_prefix: 'kima',
  daemon_name: 'uKIMA',
  node_home: '$HOME/.kima',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uKIMA',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.kima.finance/',
        provider: 'kima'
      }],
    rest: [{
        address: 'https://api-testnet.kima.finance',
        provider: 'kima'
      }]
  },
  explorers: [{
      kind: 'kima',
      url: 'https://explorer-testnet.kima.finance/',
      tx_page: 'https://explorer-testnet.kima.finance/transactions/${txHash}'
    }]
} as const satisfies Chain;
export default info;