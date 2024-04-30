import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet2',
  chain_id: 'arabica-11',
  pretty_name: 'Arabica Testnet',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utia',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://validator-1.celestia-arabica-11.com/',
        provider: 'Celestia Labs'
      }],
    rest: [{
        address: 'https://api.celestia-arabica-11.com/',
        provider: 'Celestia Labs'
      }]
  },
  explorers: [{
      kind: 'Ping.Pub',
      url: 'https://explorer.celestia-arabica-11.com/arabica-11',
      tx_page: 'https://explorer.celestia-arabica-11.com/arabica-11/tx/${txHash}'
    }]
};
export default info;