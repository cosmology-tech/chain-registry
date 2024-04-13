import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nobletestnet',
  chain_id: 'grand-1',
  website: 'https://nobleassets.xyz/',
  pretty_name: 'Noble',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'noble',
  daemon_name: 'nobled',
  node_home: '$HOME/.nobled',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uusdc',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ustake'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.45',
    cosmwasm_enabled: false
  },
  apis: {
    rpc: [{
        address: 'https://noble-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://rpc.testnet.noble.strange.love:443',
        provider: 'strangelove'
      }],
    rest: [{
        address: 'https://noble-testnet-api.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://api.testnet.noble.strange.love',
        provider: 'strangelove'
      }],
    grpc: [{
        address: 'noble-testnet-grpc.polkachu.com:21590',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/noble-testnet',
      tx_page: 'https://testnet.mintscan.io/noble-testnet/txs/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://explore.strange.love/grand-1',
      tx_page: 'https://explore.strange.love/grand-1/tx/${txHash}'
    }]
};
export default info;