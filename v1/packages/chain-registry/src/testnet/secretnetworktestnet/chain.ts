import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'secretnetworktestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Secret Network',
  chain_type: 'cosmos',
  chain_id: 'pulsar-3',
  pre_fork_chain_name: 'secretnetworktestnet2',
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
    git_repo: 'https://github.com/scrtlabs/SecretNetwork',
    recommended_version: 'v1.9.3',
    binaries: {
      "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.3/secretnetwork_1.9.3_testnet_goleveldb_amd64.deb'
    },
    compatible_versions: ['v1.9.3'],
    genesis: {
      genesis_url: 'https://rpc.pulsar3.scrttestnet.com/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      }, {
        address: 'https://rpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }],
    rest: [{
        address: 'https://lcd.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      }, {
        address: 'https://api.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }],
    "grpc-web": [{
        address: 'https://grpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn'
      }, {
        address: 'https://grpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/secret',
      tx_page: 'https://testnet.ping.pub/secret/tx/${txHash}'
    }]
};
export default info;