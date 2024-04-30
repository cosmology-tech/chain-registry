import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'secretnetworktestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Secret Network',
  chainId: 'pulsar-3',
  preForkChainName: 'secretnetworktestnet2',
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
    grpcWeb: [{
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
      txPage: 'https://testnet.ping.pub/secret/tx/${txHash}'
    }]
};
export default info;