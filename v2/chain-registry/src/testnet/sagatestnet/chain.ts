import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sagatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Saga Testnet',
  chain_id: 'ssc-testnet-1',
  bech32_prefix: 'saga',
  daemon_name: 'sscd',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utsaga',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utsaga'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.47',
    cosmwasm_enabled: false
  },
  apis: {
    rpc: [{
        address: 'https://testnet-ssc.sagarpc.io/',
        provider: 'Saga'
      }],
    rest: [{
        address: 'https://testnet-ssc-lcd.sagarpc.io/',
        provider: 'Saga'
      }],
    grpc: [{
        address: 'testnet-ssc-grpc.sagarpc.io:443',
        provider: 'Saga'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/saga-testnet',
      tx_page: 'https://www.mintscan.io/saga-testnet/tx/${txHash}',
      account_page: 'https://mintscan.io/saga-testnet/address/${accountAddress}'
    }],
  keywords: ['testnet', 'chainlet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
    }]
};
export default info;