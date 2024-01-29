import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'hypersigntestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'hypersign',
  chain_id: 'jagrat',
  bech32_prefix: 'hid',
  daemon_name: 'hid-noded',
  node_home: '$HOME/.hid-node',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uhid',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.02,
        high_gas_price: 0.05
      }
    ]
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: 'https://rpc.jagrat.hypersign.id',
        provider: 'hypersign'
      },
      {
        address: 'http://hid.rpc.t.stavr.tech:11057',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://hypersign-testnet-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      }
    ],
    rest: [
      {
        address: 'https://api.jagrat.hypersign.id',
        provider: 'hypersign'
      },
      {
        address: 'https://hid.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://hypersign-testnet-rest.stakerhouse.com',
        provider: 'StakerHouse'
      }
    ],
    grpc: [
      {
        address: 'grpc.jagrat.hypersign.id:5099',
        provider: 'hypersign'
      },
      {
        address: 'http://hid.grpc.t.stavr.tech:8022',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'hypersign-testnet-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://explorer.hypersign.id/hypersign-testnet',
      tx_page: 'https://explorer.hypersign.id/hypersign-testnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/HyperSign',
      tx_page: 'https://explorer.stavr.tech/HyperSign/tx/${txHash}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/hypersign',
      tx_page: 'https://cosmotracker.com/hypersign/tx/${txHash}'
    }
  ]
};
export default info;
