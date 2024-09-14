import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'sixtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'SIX Fivenet',
  chain_type: 'cosmos',
  chain_id: 'fivenet',
  bech32_prefix: '6x',
  daemon_name: 'sixd',
  node_home: '$HOME/.six',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usix',
        fixed_min_gas_price: 1.25,
        low_gas_price: 1.25,
        average_gas_price: 1.5,
        high_gas_price: 1.75
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usix'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.45'
  },
  apis: {
    rpc: [{
        address: 'https://rpc1.fivenet.sixprotocol.net:443'
      }],
    rest: [{
        address: 'https://api1.fivenet.sixprotocol.net:443'
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/fivenet',
      tx_page: 'https://sixscan.io/fivenet/tx/${txHash}'
    }],
  keywords: ['sixprotocol', 'testnet']
} as const satisfies Chain;
export default info;