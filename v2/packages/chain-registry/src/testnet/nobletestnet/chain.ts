import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nobletestnet',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/strangelove-ventures/noble',
    recommendedVersion: 'v4.0.0-beta1',
    compatibleVersions: [
      'v4.0.0-alpha1',
      'v4.0.0-alpha2',
      'v4.0.0-alpha3',
      'v4.0.0-beta1'
    ],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v0.3.0',
      genesisUrl: 'https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/grand-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.45'
    },
    ibc: {
      type: 'go',
      version: 'v3.4.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
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