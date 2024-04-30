import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nobletestnet',
  chainId: 'grand-1',
  website: 'https://nobleassets.xyz/',
  prettyName: 'Noble',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'noble',
  daemonName: 'nobled',
  nodeHome: '$HOME/.nobled',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdc',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustake'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'v0.45',
    cosmwasmEnabled: false
  },
  apis: {
    rpc: [{
        address: 'https://noble-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://rpc.testnet.noble.strange.love:443',
        provider: 'strangelove'
      }],
    rest: [{
        address: 'https://noble-testnet-api.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://api.testnet.noble.strange.love',
        provider: 'strangelove'
      }],
    grpc: [{
        address: 'noble-testnet-grpc.polkachu.com:21590',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/noble-testnet',
      txPage: 'https://mintscan.io/noble-testnet/txs/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://explore.strange.love/grand-1',
      txPage: 'https://explore.strange.love/grand-1/tx/${txHash}'
    }]
};
export default info;