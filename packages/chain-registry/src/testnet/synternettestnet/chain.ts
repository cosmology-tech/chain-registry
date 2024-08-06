import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'synternettestnet',
  chain_type: 'cosmos',
  chain_id: 'amber-2',
  pretty_name: 'Amber Public Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'amber',
  daemon_name: 'amberd',
  node_home: '$HOME/.amber',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uamber',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uamber'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.synternet.com/',
        provider: 'Synternet'
      }],
    rest: [{
        address: 'https://api-testnet.synternet.com/',
        provider: 'Synternet'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer-testnet.synternet.com/',
      tx_page: 'https://explorer-testnet.synternet.com/transactions/${txHash}'
    }]
};
export default info;