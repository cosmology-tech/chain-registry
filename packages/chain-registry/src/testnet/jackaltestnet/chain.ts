import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'jackaltestnet',
  chain_type: 'cosmos',
  chain_id: 'canine-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujkl',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'http://jkl.rpc.t.stavr.tech:19127',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-rpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    rest: [{
        address: 'https://jkl.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-api.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    grpc: [{
        address: 'http://jkl.grpc.t.stavr.tech:5913',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-grpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Jackal-Testnet',
      tx_page: 'https://explorer.stavr.tech/Jackal-Testnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Jackal-Testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://ping.pub/jackal',
      tx_page: 'https://ping.pub/jackal/tx/${txHash}'
    }]
} as const satisfies Chain;
export default info;