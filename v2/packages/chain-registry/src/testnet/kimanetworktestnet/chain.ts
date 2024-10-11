import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kimanetworktestnet',
  status: 'live',
  website: 'https://www.kima.network/',
  networkType: 'testnet',
  prettyName: 'Kima Network Testnet',
  chainType: 'cosmos',
  chainId: 'kima_testnet',
  bech32Prefix: 'kima',
  daemonName: 'uKIMA',
  nodeHome: '$HOME/.kima',
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
  codebase: {
    gitRepo: 'https://github.com/kima-finance/kima-blockchain',
    recommendedVersion: 'v0.4.3',
    compatibleVersions: ['v0.4.3'],
    genesis: {
      genesisUrl: 'http://data-testnet.kima.finance/genesis.json'
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
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.kima.finance/',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api-testnet.kima.finance',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network',
      url: 'https://explorer-testnet.kima.finance/',
      txPage: 'https://explorer-testnet.kima.finance/transactions/${txHash}'
    }]
};
export default info;