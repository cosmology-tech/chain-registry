import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'terra2testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.terra.money/',
  pretty_name: 'Terra 2.0',
  chain_type: 'cosmos',
  chain_id: 'pisco-1',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [{
        denom: 'uluna',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://pisco-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://pisco-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'finder',
      url: 'http://finder.terra.money/testnet/',
      tx_page: 'https://finder.terra.money/testnet/tx/${txHash}'
    }]
};
export default info;