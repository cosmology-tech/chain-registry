import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'doravotatestnet',
  chainType: 'cosmos',
  chainId: 'vota-testnet',
  prettyName: 'Dora Vota Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'dora',
  daemonName: 'dorad',
  nodeHome: '$HOME/.dora',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'peaka',
        fixedMinGasPrice: 100000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'peaka'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dorafactory/doravota',
    recommendedVersion: 'v11.0.0',
    compatibleVersions: ['v11.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/DoraFactory/doravota/blob/main/config/testnet/genesis.json'
    },
    versions: [
      {
        name: 'v9.0.1',
        recommendedVersion: 'v9.0.1',
        compatibleVersions: ['v9.0.1']
      },
      {
        name: 'v10.0.1',
        recommendedVersion: 'v10.0.1',
        compatibleVersions: ['v10.0.1']
      },
      {
        name: 'v11',
        recommendedVersion: 'v11.0.0',
        compatibleVersions: ['v11.0.0']
      }
    ]
  },
  apis: {
    rpc: [{
        address: 'https://vota-testnet-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://vota-testnet-rest.dorafactory.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'vota-testnet-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dora Vota Ping Pub',
      url: 'https://maci-explorer-test.dorafactory.org',
      txPage: 'https://maci-explorer-test.dorafactory.org/dora/tx/${txHash}'
    }]
};
export default info;