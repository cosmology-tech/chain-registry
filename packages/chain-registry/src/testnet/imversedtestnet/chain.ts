import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'imversedtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Imversed Testnet',
  chain_type: 'cosmos',
  chain_id: 'imversed-test-1',
  bech32_prefix: 'imv',
  daemon_name: 'imversed',
  node_home: '$HOME/.imversed',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'nimv',
        fixed_min_gas_price: 0.001
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://tx-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    rest: [{
        address: 'https://query-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    grpc: [{
        address: 'http://qs.imversed.com:9090',
        provider: 'imversed'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://tex-s.imversed.com',
      tx_page: 'https://tex-s.imversed.com/transactions/${txHash}'
    }]
} as const satisfies Chain;
export default info;