import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kichaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Ki',
  chain_id: 'kichain-t-4',
  bech32_prefix: 'tki',
  daemon_name: 'kid',
  node_home: '$HOME/.kid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utki',
        fixed_min_gas_price: 0.025
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-challenge.blockchain.ki/',
        provider: 'kifoundation'
      }],
    rest: [{
        address: 'https://api-challenge.blockchain.ki/',
        provider: 'kifoundation'
      }]
  },
  explorers: [{
      kind: 'kifoundation',
      url: 'https://kichain-t-4.blockchain.ki/',
      tx_page: 'https://kichain-t-4.blockchain.ki/transactions/${txHash}'
    }]
};
export default info;