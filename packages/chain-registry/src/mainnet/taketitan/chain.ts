import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'taketitan',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://taketitan.com/',
  pretty_name: 'TakeTitan',
  chain_type: 'cosmos',
  chain_id: 'taketitan-12',
  bech32_prefix: 'taketitan',
  daemon_name: 'ttnc',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 1179993421,
  staking: {
    staking_tokens: [{
        denom: 'ttnc'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'ttnc',
        low_gas_price: 0.000001,
        average_gas_price: 0.000005,
        high_gas_price: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcpttnc.taketitan.com',
        provider: 'taketitan'
      }],
    rest: [{
        address: 'https://lcdttnc.taketitan.com',
        provider: 'taketitan'
      }],
    grpc: [{
        address: 'https://grcpttnc.taketitan.com:8090',
        provider: 'taketitan'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://scan.taketitan.com/taketitan',
      tx_page: 'https://scan.taketitan.com/taketitan/tx/${txHash}',
      account_page: 'https://scan.taketitan.com/taketitan/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg',
      theme: {
        primary_color_hex: '#41918c'
      }
    }]
};
export default info;