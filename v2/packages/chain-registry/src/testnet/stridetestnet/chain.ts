import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'stridetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Stride Testnet',
  chainType: 'cosmos',
  chainId: 'stride-internal-1',
  bech32Prefix: 'stride',
  daemonName: 'strided',
  nodeHome: '$HOME/.stride',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustrd',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustrd'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Stride-Labs/stride',
    recommendedVersion: 'v8.0.0-testnet',
    compatibleVersions: ['v8.0.0-testnet'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Stride-Labs/mainnet/main/testnet/genesis.json'
    },
    versions: [{
        name: 'v8.0.0-testnet',
        recommendedVersion: 'v8.0.0-testnet',
        compatibleVersions: ['v8.0.0-testnet'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '5.1.0'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '5.1.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://stride.testnet-1.stridenet.co',
        provider: 'Stride'
      }],
    rest: [{
        address: 'https://stride.testnet-1.stridenet.co/api',
        provider: 'Stride'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnet.ping.pub/stride',
      txPage: 'https://testnet.ping.pub/stride/tx/${txHash}'
    }]
};
export default info;