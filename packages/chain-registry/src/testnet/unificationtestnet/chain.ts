import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'unificationtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://unification.com/',
  pretty_name: 'Unification Testnet',
  chain_type: 'cosmos',
  chain_id: 'FUND-TestNet-2',
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
        address: 'https://rpc-testnet.unification.io:443',
        provider: 'Unification'
      }],
    rest: [{
        address: 'https://rest-testnet.unification.io',
        provider: 'Unification'
      }],
    wss: [{
        address: 'wss://wss-testnet.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc-testnet.unification.io:443',
        provider: 'Unification'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-testnet.unification.io/u',
      tx_page: 'https://explorer-testnet.unification.io/u/tx/${txHash}',
      account_page: 'https://explorer-testnet.unification.io/u/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;