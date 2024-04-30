import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'six',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'SIX Protocol',
  chain_id: 'sixnet',
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
        address: 'https://sixnet-rpc.sixprotocol.net:443',
        provider: ''
      }],
    rest: [{
        address: 'https://sixnet-api.sixprotocol.net:443',
        provider: ''
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/sixnet',
      tx_page: 'https://sixscan.io/sixnet/tx/${txHash}'
    }],
  keywords: [
    'sixprotocol',
    'sixnetwork',
    'sixnet',
    'six'
  ]
};
export default info;