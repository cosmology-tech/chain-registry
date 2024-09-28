import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'shentutestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.shentu.org/',
  pretty_name: 'Yulei',
  chain_type: 'cosmos',
  chain_id: 'yulei-2.1',
  bech32_prefix: 'shentu',
  daemon_name: 'shentud',
  node_home: '$HOME/.shentud',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uctk',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uctk'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
  },
  apis: {
    rpc: [{
        address: 'https://yulei-rpc.shentu.org:443',
        provider: 'Shentu'
      }],
    rest: [{
        address: 'https://yulei-rest.shentu.org/',
        provider: 'Shentu'
      }],
    grpc: [{
        address: 'yulei-grpc.shentu.org:443',
        provider: 'Shentu'
      }]
  },
  explorers: [{
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.org/?chain=yulei-2.1',
      tx_page: 'https://explorer.shentu.org/transactions/${txHash}?chain=yulei-2.1'
    }],
  images: [{
      image_sync: {
        chain_name: 'shentutestnet',
        base_denom: 'uctk'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
      theme: {
        primary_color_hex: '#e4ac4c'
      }
    }]
};
export default info;