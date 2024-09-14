import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'unification',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://unification.com/',
  pretty_name: 'Unification',
  chain_type: 'cosmos',
  chain_id: 'FUND-MainNet-2',
  bech32_prefix: 'und',
  daemon_name: 'und',
  node_home: '$HOME/.und_mainchain',
  key_algos: ['secp256k1'],
  slip44: 5555,
  fees: {
    fee_tokens: [{
        denom: 'nund',
        fixed_min_gas_price: 25,
        low_gas_price: 100,
        average_gas_price: 200,
        high_gas_price: 300
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nund'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47.13',
    cosmwasm_enabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
      theme: {
        primary_color_hex: '#2279c0'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'https://rpc.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    rest: [{
        address: 'https://rest.unification.io',
        provider: 'Unification'
      }, {
        address: 'https://rest.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    grpc: [{
        address: 'grpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'grpc.unification.chainmasters.info',
        provider: 'Chainmasters'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.io/u',
      tx_page: 'https://explorer.unification.io/u/tx/${txHash}',
      account_page: 'https://explorer.unification.io/u/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.chainmasters.ninja/unification',
      tx_page: 'https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}',
      account_page: 'https://explorer.unification.chainmasters.ninja/Unification/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/unification',
      tx_page: 'https://atomscan.com/unification/transactions/${txHash}',
      account_page: 'https://atomscan.com/unification/accounts/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
} as const satisfies Chain;
export default info;