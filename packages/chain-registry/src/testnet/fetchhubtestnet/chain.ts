import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'fetchhubtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Fetch.ai Testnet',
  chain_type: 'cosmos',
  chain_id: 'dorado-1',
  bech32_prefix: 'fetch',
  daemon_name: 'fetchd',
  node_home: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'atestfet',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atestfet'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-dorado.fetch.ai:443',
        provider: 'fetch.ai'
      }],
    rest: [{
        address: 'https://rest-dorado.fetch.ai',
        provider: 'fetch.ai'
      }],
    grpc: [{
        address: 'grpc-dorado.fetch.ai:443',
        provider: 'fetch.ai'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explore-dorado.fetch.ai',
      tx_page: 'https://explore-dorado.fetch.ai/transactions/${txHash}'
    }, {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/testnet',
      tx_page: 'https://fetchstation.azoyalabs.com/testnet/explorer/transactions/${txHash}',
      account_page: 'https://fetchstation.azoyalabs.com/testnet/explorer/address/${accountAddress}'
    }]
};
export default info;