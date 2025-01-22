import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet2',
  chain_type: 'cosmos',
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
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v2.1.2',
    compatible_versions: [
      'v2.0.0',
      'v2.1.0',
      'v2.1.1',
      'v2.1.2'
    ],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/celestiaorg/networks/master/arabica-11/genesis.json'
    }
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
      kind: 'Celenium',
      url: 'https://arabica.celenium.io/',
      tx_page: 'https://arabica.celenium.io/tx/${txHash}'
    }]
};
export default info;