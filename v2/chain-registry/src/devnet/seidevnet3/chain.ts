import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'seidevnet3',
  chain_id: 'sei-devnet-3',
  pretty_name: 'Sei Devnet 3',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'sei',
  daemon_name: 'seid',
  node_home: '$HOME/.sei',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usei',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }, {
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://rest.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }, {
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain'
      }],
    grpc: [{
        address: 'https://grpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://devnet.sei.explorers.guru',
      tx_page: 'https://devnet.sei.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      tx_page: 'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}'
    }]
};
export default info;