import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'quasartestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Quasar Testnet',
  chain_id: 'quasar-test-1',
  bech32_prefix: 'quasar',
  daemon_name: 'quasarnoded',
  node_home: '$HOME/.quasarnoded',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uqsr',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uqsr'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.45.16',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.31'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
  },
  apis: {
    rpc: [{
        address: 'https://quasar-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      }, {
        address: 'https://quasar-testnet-rpc.stakeandrelax.net/',
        provider: 'Stake and Relax'
      }],
    rest: [{
        address: 'https://quasar-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }, {
        address: 'https://quasar-testnet-api.stakeandrelax.net/',
        provider: 'Stake and Relax'
      }],
    grpc: [{
        address: 'quasar-testnet-grpc.polkachu.com:18290',
        provider: 'Polkachu'
      }, {
        address: 'http://quasar-testnet-grpc.stakeandrelax.net:18290/',
        provider: 'Stake and Relax'
      }]
  },
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
    }]
};
export default info;