import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'dhealthtestnet',
  chain_type: 'cosmos',
  chain_id: 'dhealth-testnet-2',
  pretty_name: 'dHealth Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'tdh02',
  daemon_name: 'dhealth-testnetd',
  node_home: '$HOME/.dhealth-testnet',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utdhp',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utdhp'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'cosmos/cosmos-sdk v0.47.4',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.41.0'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.dhealth.dev',
        provider: 'dHealth'
      }],
    rest: [{
        address: 'https://lcd-testnet.dhealth.dev',
        provider: 'dHealth'
      }],
    grpc: []
  },
  explorers: []
};
export default info;