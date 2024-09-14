import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'statesettestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Stateset Testnet',
  chain_type: 'cosmos',
  chain_id: 'stateset-1-testnet',
  bech32_prefix: 'stateset',
  daemon_name: 'statesetd',
  node_home: '$HOME/.statesetd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ustate',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.stateset.zone/',
        provider: 'stateset'
      }],
    rest: [{
        address: 'https://rest-api.stateset.zone',
        provider: 'stateset'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explore.stateset.zone',
      tx_page: 'https://explore.stateset.zone/transactions/${txHash}'
    }]
} as const satisfies Chain;
export default info;