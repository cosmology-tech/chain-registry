import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'hypersigntestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Hypersign Testnet',
  chain_type: 'cosmos',
  chain_id: 'prajna-1',
  bech32_prefix: 'hid',
  daemon_name: 'hid-noded',
  node_home: '$HOME/.hid-node',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uhid',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    rest: [{
        address: 'https://api.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Hypersign',
      url: 'https://explorer.hypersign.id/hypersign-prajna-testnet',
      tx_page: 'https://explorer.hypersign.id/hypersign-prajna-testnet/tx/${txHash}'
    }]
};
export default info;