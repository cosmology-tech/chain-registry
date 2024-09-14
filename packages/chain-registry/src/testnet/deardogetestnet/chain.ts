import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'deardogetestnet',
  chain_type: 'cosmos',
  chain_id: 'deardoge-testnet',
  pretty_name: 'Dear Doge Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'deardoge',
  daemon_name: 'dogd',
  node_home: '$HOME/.deardoge',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'udear',
        fixed_min_gas_price: 0.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udear'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.deardoge.org',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://testnet-rest.deardoge.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'testnet-grpc.deardoge.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dear Doge Ping Pub',
      url: 'https://testnet-explorer.deardoge.org/deardoge',
      tx_page: 'https://testnet-explorer.deardoge.org/deardoge/tx/${txHash}'
    }]
} as const satisfies Chain;
export default info;