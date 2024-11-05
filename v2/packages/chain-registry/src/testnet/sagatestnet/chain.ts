import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sagatestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Saga Testnet',
  chainType: 'cosmos',
  chainId: 'ssc-testnet-1',
  bech32Prefix: 'saga',
  daemonName: 'sscd',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utsaga',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utsaga'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sagaxyz/ssc',
    recommendedVersion: 'v0.1.3',
    compatibleVersions: [
      'v0.1.0',
      'v0.1.1',
      'v0.1.2',
      'v0.1.3'
    ],
    consensus: {
      type: 'tendermint',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sagaxyz/ssc-public-testnet/main/genesis.json'
    },
    versions: [{
        name: 'v0.1.3',
        recommendedVersion: 'v0.1.3',
        compatibleVersions: [
          'v0.1.0',
          'v0.1.1',
          'v0.1.2',
          'v0.1.3'
        ],
        consensus: {
          type: 'tendermint',
          version: '0.37'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          enabled: false
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-ssc.sagarpc.io/',
        provider: 'Saga'
      }],
    rest: [{
        address: 'https://testnet-ssc-lcd.sagarpc.io/',
        provider: 'Saga'
      }],
    grpc: [{
        address: 'testnet-ssc-grpc.sagarpc.io:443',
        provider: 'Saga'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/saga-testnet',
      txPage: 'https://www.mintscan.io/saga-testnet/tx/${txHash}',
      accountPage: 'https://mintscan.io/saga-testnet/address/${accountAddress}'
    }],
  keywords: ['testnet', 'chainlet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
    }]
};
export default info;