import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coolcattestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://app.coolcat.space/',
  pretty_name: 'CoolCat',
  chain_id: 'kitten-04',
  bech32_prefix: 'ccat',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'uccat',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 1,
        high_gas_price: 2
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uccat'
      }]
  },
  daemon_name: 'coolcat',
  node_home: '$HOME/.coolcat',
  slip44: 118,
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.coolcat.space',
        provider: 'Digital Kitchen'
      }],
    rest: [{
        address: 'https://lcd.coolcat.space',
        provider: 'Digital Kitchen'
      }],
    grpc: []
  },
  explorers: []
};
export default info;