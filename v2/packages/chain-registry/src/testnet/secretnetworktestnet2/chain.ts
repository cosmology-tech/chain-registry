import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'secretnetworktestnet2',
  status: 'killed',
  networkType: 'testnet',
  prettyName: 'Secret Network Testnet',
  chainType: 'cosmos',
  chainId: 'pulsar-2',
  bech32Prefix: 'secret',
  daemonName: 'secretd',
  nodeHome: '$HOME/.secretd',
  keyAlgos: ['secp256k1'],
  slip44: 529,
  fees: {
    feeTokens: [{
        denom: 'uscrt',
        fixedMinGasPrice: 0.1
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/scrtlabs/SecretNetwork',
    recommendedVersion: 'v1.3.1',
    binaries: {
      "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb'
    },
    compatibleVersions: ['v1.3.0', 'v1.3.1'],
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/stakeordie-pulsar-2/genesis.json'
    },
    versions: [{
        name: 'v1.3.1',
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.0', 'v1.3.1'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb'
        }
      }]
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
    grpcWeb: [{
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
      txPage: 'https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/secret',
      txPage: 'https://testnet.ping.pub/secret/tx/${txHash}'
    }]
};
export default info;