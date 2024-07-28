import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chimbatestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://chimba.ooo/',
  pretty_name: 'Chimba',
  chain_type: 'cosmos',
  chain_id: 'chimba-testnet',
  bech32_prefix: 'chimba',
  daemon_name: 'chimbad',
  node_home: '$HOME/.chimbad',
  fees: {
    fee_tokens: [{
        denom: 'ucmba',
        fixed_min_gas_price: 0.25,
        low_gas_price: 1,
        average_gas_price: 5,
        high_gas_price: 10
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucmba'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.chimba.ooo',
        provider: 'chimba'
      }],
    rest: [{
        address: 'https://testnet.chimba.ooo',
        provider: 'chimba'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.testnet.chimba.ooo/',
      tx_page: 'https://explorer.testnet.chimba.ooo/transactions/${txHash}'
    }],
  slip44: 118
};
export default info;