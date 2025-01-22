import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'lumenxtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'LumenX-Test',
  chain_type: 'cosmos',
  chain_id: 'lumenx-test',
  bech32_prefix: 'lumen',
  daemon_name: 'lumenxd',
  node_home: '$HOME/.lumenx',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulumen',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulumen'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.lumenx.chaintools.tech/',
        provider: 'ChainTools'
      }, {
        address: 'https://testrpc-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      }],
    rest: [{
        address: 'https://testnet-api.lumenx.chaintools.tech/',
        provider: 'ChainTools'
      }, {
        address: 'https://testapi-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.explorer.chaintools.tech/lumenx',
      tx_page: 'https://testnet.explorer.chaintools.tech/lumenx/tx/${txHash}'
    }]
};
export default info;