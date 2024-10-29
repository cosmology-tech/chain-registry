import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mantrachain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'MANTRA',
  chain_type: 'cosmos',
  chain_id: 'mantra-1',
  bech32_prefix: 'mantra',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uom',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.50.10'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      }],
    rest: [{
        address: 'https://api.mantrachain.io',
        provider: 'MANTRACHAIN'
      }],
    grpc: [{
        address: 'https://grpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [],
  keywords: [
    'rwa',
    'wasm',
    'staking'
  ],
  images: [{
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: false,
        primary_color_hex: '#fba0c1'
      }
    }]
};
export default info;