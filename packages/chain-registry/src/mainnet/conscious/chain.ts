import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'conscious',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cvn.io/',
  pretty_name: 'ConsciousDAO',
  chain_type: 'cosmos',
  chain_id: 'cvn_2032-1',
  bech32_prefix: 'cvn',
  node_home: '$HOME/.cvnd',
  daemon_name: 'cvnd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'acvnt',
        fixed_min_gas_price: 100000000,
        low_gas_price: 100000000,
        average_gas_price: 200000000,
        high_gas_price: 300000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'acvnt'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cvn.io/',
        provider: 'cvn.io'
      }, {
        address: 'https://conscious_mainnet_rpc.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://api.cvn.io',
        provider: 'cvn.io'
      }, {
        address: 'https://conscious_mainnet_api.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'https://grpc.cvn.io',
        provider: 'cvn.io'
      }],
    "evm-http-jsonrpc": [
      {
        address: 'https://node.cvn.io/',
        provider: 'cvn'
      },
      {
        address: 'https://node.consciousdao.io/',
        provider: 'consciousdao'
      },
      {
        address: 'https://conscious_mainnet_evm.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://explore.consciousdao.com/',
      tx_page: 'https://explore.consciousdao.com/tx/${txHash}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/conscious',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/conscious/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/conscious/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
      theme: {
        primary_color_hex: '#047e04'
      }
    }]
};
export default info;