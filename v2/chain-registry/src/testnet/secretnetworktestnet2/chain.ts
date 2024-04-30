import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'secretnetworktestnet2',
  status: 'killed',
  network_type: 'testnet',
  pretty_name: 'Secret Network Testnet',
  chain_id: 'pulsar-2',
  bech32_prefix: 'secret',
  daemon_name: 'secretd',
  node_home: '$HOME/.secretd',
  key_algos: ['secp256k1'],
  slip44: 529,
  fees: {
    fee_tokens: [{
        denom: 'uscrt',
        fixed_min_gas_price: 0.1
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      }, {
        address: 'https://rpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }],
    rest: [
      {
        address: 'http://testnet.securesecrets.org:1317',
        provider: 'Trivium | Trivium.Network'
      },
      {
        address: 'https://lcd.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      },
      {
        address: 'https://api.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }
    ],
    "grpc-web": [{
        address: 'https://grpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      }, {
        address: 'https://grpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }]
  },
  explorers: [{
      kind: 'secret nodes',
      url: 'https://secretnodes.com/secret/chains/pulsar-2',
      tx_page: 'https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/secret',
      tx_page: 'https://testnet.ping.pub/secret/tx/${txHash}'
    }]
};
export default info;