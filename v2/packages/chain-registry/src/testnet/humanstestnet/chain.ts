import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'humanstestnet',
  chainType: 'cosmos',
  chainId: 'testnet-1',
  prettyName: 'Humans AI Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'humans',
  daemonName: 'humansd',
  nodeHome: '$HOME/.humans',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uheart',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/humansdotai/humans',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://rpc-testnet.humans.zone/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://humans-testnet.nodejumper.io',
        provider: 'NODEJUMPER'
      }, {
        address: 'https://humans-testnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }],
    rest: [{
        address: 'https://humans-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      }, {
        address: 'https://humans-testnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }],
    grpc: [{
        address: 'https://humans-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }, {
        address: 'humans-testnet-grpc.cosmonautstakes.com:14990',
        provider: 'Cosmonaut Stakes'
      }],
    evmHttpJsonrpc: [{
        address: 'humans-testnet-evm.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }]
  },
  explorers: [{
      kind: 'explorer.humans.zone',
      url: 'https://explorer.humans.zone/',
      txPage: 'https://explorer.humans.zone/humans-testnet/tx/${txHash}'
    }]
};
export default info;