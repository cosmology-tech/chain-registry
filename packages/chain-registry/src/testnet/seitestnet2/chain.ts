import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'seitestnet2',
  chain_type: 'cosmos',
  chain_id: 'atlantic-2',
  pretty_name: 'Sei Atlantic 2',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'sei',
  daemon_name: 'seid',
  node_home: '$HOME/.sei',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usei',
        fixed_min_gas_price: 0.08
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain'
      }, {
        address: 'https://rpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    rest: [{
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain'
      }, {
        address: 'https://api-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    grpc: [{
        address: 'https://grpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://evm-rpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://seitrace.com/?chain=atlantic-2',
      tx_page: 'https://seitrace.com/tx/${txHash}?chain=atlantic-2'
    },
    {
      kind: 'celatone',
      url: 'https://www.seiscan.app/atlantic-2',
      tx_page: 'https://www.seiscan.app/atlantic-2/txs/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://testnet.sei.explorers.guru',
      tx_page: 'https://testnet.sei.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      tx_page: 'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}'
    }
  ]
} as const satisfies Chain;
export default info;