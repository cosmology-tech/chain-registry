import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'artelatestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Artela Testnet',
  chainType: 'cosmos',
  chainId: 'artela_11820-1',
  bech32Prefix: 'art',
  daemonName: 'artelad',
  nodeHome: '$HOME/.artelad',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'uart',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uart'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/artela-network/artela',
    recommendedVersion: 'v0.4.2-beta',
    compatibleVersions: ['v0.4.2-beta'],
    cosmosSdkVersion: '0.47',
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://docs.artela.network/assets/files/genesis-697a2db4ef7e20dbdb8bdc1cd9d1633a.json'
    },
    versions: [{
        name: 'v0.4.2-beta',
        recommendedVersion: 'v0.4.2-beta',
        compatibleVersions: ['v0.4.2-beta'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        ibc: {
          type: 'go',
          version: 'v7.1.0'
        }
      }, {
        name: 'v0.4.1-beta',
        recommendedVersion: 'v0.4.1-beta',
        compatibleVersions: ['v0.4.1-beta'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        ibc: {
          type: 'go',
          version: 'v7.1.0'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.1.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    rest: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    grpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }]
  },
  explorers: [{
      kind: 'Artela Network',
      url: 'https://testnet-scan.artela.network',
      txPage: 'https://testnet-scan.artela.network/tx/${txHash}'
    }]
};
export default info;