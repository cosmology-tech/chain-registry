import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kimanetwork',
  status: 'live',
  website: 'https://www.kima.network/',
  networkType: 'mainnet',
  prettyName: 'Kima Network',
  chainType: 'cosmos',
  chainId: 'kima_network',
  bech32Prefix: 'kima',
  daemonName: 'uKIMA',
  nodeHome: '$HOME/.kimad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uKIMA',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uKIMA'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/kima-finance/kima-blockchain',
    recommendedVersion: 'v0.4.3',
    compatibleVersions: ['v0.4.3'],
    genesis: {
      genesisUrl: 'https://archive.kima.network/genesis.json'
    },
    versions: [{
        name: 'v0.4.3',
        recommendedVersion: 'v0.4.3',
        compatibleVersions: ['v0.4.3'],
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cosmos/cosmos-sdk',
          version: 'v0.47.4',
          tag: 'v0.47.4'
        }
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
    }],
  apis: {
    wss: [{
        address: 'wss://rpc.kima.network/query',
        provider: 'Kima Network'
      }],
    rpc: [{
        address: 'https://rpc.kima.network/',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api.kima.network',
        provider: 'Kima Network'
      }],
    grpc: [{
        address: 'https://grpc.kima.network',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network Explorer',
      url: 'https://explorer.kima.network/',
      txPage: 'https://explorer.kima.network/transactions/${txHash}'
    }]
};
export default info;