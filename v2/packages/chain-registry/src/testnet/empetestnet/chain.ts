import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'empetestnet',
  chainType: 'cosmos',
  chainId: 'empe-testnet-2',
  website: 'https://empe.io',
  prettyName: 'Empe',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'empe',
  daemonName: 'emped',
  nodeHome: '$HOME/.emped',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uempe',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uempe'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/empe-io/empe-chain',
    recommendedVersion: 'v0.1.0',
    compatibleVersions: ['v0.1.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v0.1.0',
      genesisUrl: 'https://raw.githubusercontent.com/empe-io/empe-chain/main/testnet-2/genesis.json'
    },
    versions: [{
        name: 'v0.1.0',
        tag: 'v0.1.0',
        height: 0,
        recommendedVersion: 'v0.1.0',
        compatibleVersions: ['v0.1.0'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.47'
        },
        cosmwasm: {
          enabled: false
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.47'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.empe.io/',
        provider: 'empe'
      }, {
        address: 'https://rpc-archive-testnet.empe.io/',
        provider: 'empe-archive'
      }],
    rest: [{
        address: 'https://lcd-testnet.empe.io/',
        provider: 'empe'
      }],
    grpc: [{
        address: 'grpc-testnet.empe.io:8443',
        provider: 'empe'
      }]
  },
  explorers: [{
      kind: 'empe',
      url: 'https://explorer-testnet.empe.io',
      txPage: 'https://explorer-testnet.empe.io/transactions/${txHash}'
    }]
};
export default info;