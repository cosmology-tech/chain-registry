import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'aaronetwork',
  status: 'live',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  website: 'https://aaronetwork.xyz',
  pretty_name: 'Aaron Network',
  chain_id: 'aaronetwork',
  bech32_prefix: 'aaron',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uaaron',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.001
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uaaron'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://mainnet-rpc.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      }],
    rest: [{
        address: 'https://mainnet-api.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      }]
  },
  explorers: [{
      kind: 'Aaron Network',
      url: 'https://explorer.aaronetwork.xyz',
      tx_page: 'https://explorer.aaronetwork.xyz/hash/${txHash}',
      account_page: 'https://explorer.aaronetwork.xyz/address/${accountAddress}'
    }]
};
export default info;