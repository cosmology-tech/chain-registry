import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'loyal',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.joinloyal.com/',
  pretty_name: 'Loyal',
  chain_type: 'cosmos',
  chain_id: 'loyal-main-02',
  bech32_prefix: 'loyal',
  daemon_name: 'loyald',
  node_home: '$HOME/.loyal',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulyl',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulyl'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-main.joinloyal.io/'
      }, {
        address: 'https://loyal-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://lcd-main.joinloyal.io/'
      }, {
        address: 'https://loyal-api.polkachu.com',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'https://grpc.loyal.nodestake.top',
        provider: 'NodeStake'
      }]
  },
  explorers: [
    {
      kind: 'Loyal explorer',
      url: 'https://pingpub.joinloyal.io/loyal',
      tx_page: 'https://pingpub.joinloyal.io/loyal/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/loyal',
      tx_page: 'https://explorer.tcnetwork.io/loyal/transaction/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/loyal',
      tx_page: 'https://explorer.nodestake.top/loyal/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg',
      theme: {
        primary_color_hex: '#5445fb'
      }
    }]
} as const satisfies Chain;
export default info;