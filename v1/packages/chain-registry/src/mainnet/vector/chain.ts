import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'vector',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.playonvector.com/',
  pretty_name: 'Vector',
  chain_type: 'cosmos',
  chain_id: 'vector-1',
  bech32_prefix: 'vector',
  daemon_name: 'vectord',
  node_home: '$HOME/.vector',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uvctr',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uvctr'
      }]
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg'
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://archive-rpc-vector-1.seraphim.zone:443',
        provider: 'Seraphim'
      }, {
        address: 'https://archive-rpc-1.playonvector.com:443',
        provider: 'Stratsone'
      }],
    rest: [{
        address: 'https://archive-api-vector-1.seraphim.zone:443',
        provider: 'Seraphim'
      }, {
        address: 'https://archive-api-1.playonvector.com:443',
        provider: 'Stratsone'
      }],
    grpc: [],
    "grpc-web": []
  },
  explorers: [{
      kind: 'Vector',
      url: 'https://explorer.playonvector.com/',
      tx_page: 'https://explorer.playonvector.com/vector/tx/${txHash}',
      account_page: 'https://explorer.playonvector.com/vector/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg',
      theme: {
        primary_color_hex: '#885737'
      }
    }]
};
export default info;