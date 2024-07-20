import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'stridetestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Stride Testnet',
  chain_id: 'stride-internal-1',
  bech32_prefix: 'stride',
  daemon_name: 'strided',
  node_home: '$HOME/.stride',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ustrd',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ustrd'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.46'
  },
  apis: {
    rpc: [{
        address: 'https://stride.testnet-1.stridenet.co',
        provider: 'Stride'
      }],
    rest: [{
        address: 'https://stride.testnet-1.stridenet.co/api',
        provider: 'Stride'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnet.ping.pub/stride',
      tx_page: 'https://testnet.ping.pub/stride/tx/${txHash}'
    }]
};
export default info;