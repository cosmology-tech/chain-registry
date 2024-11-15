import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kimanetwork',
  status: 'live',
  website: 'https://www.kima.network/',
  network_type: 'mainnet',
  pretty_name: 'Kima Network',
  chain_type: 'cosmos',
  chain_id: 'kima_network',
  bech32_prefix: 'kima',
  daemon_name: 'uKIMA',
  node_home: '$HOME/.kimad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uKIMA',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.05
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uKIMA'
      }]
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
    }],
  apis: {
    wss: [{
        address: 'wss://rpc.kima.network/query',
        provider: 'Kima Network'
      }],
    rpc: [{
        address: 'https://rpc.kima.network/',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api.kima.network',
        provider: 'Kima Network'
      }],
    grpc: [{
        address: 'https://grpc.kima.network',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network Explorer',
      url: 'https://explorer.kima.network/',
      tx_page: 'https://explorer.kima.network/transactions/${txHash}'
    }]
};
export default info;