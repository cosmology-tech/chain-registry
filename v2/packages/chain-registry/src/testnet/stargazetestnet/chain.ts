import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'stargazetestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://stargaze.zone/',
  prettyName: 'Stargaze Testnet',
  chainType: 'cosmos',
  chainId: 'elgafar-1',
  bech32Prefix: 'stars',
  daemonName: 'starsd',
  nodeHome: '$HOME/.starsd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustars',
        lowGasPrice: 0.03,
        averageGasPrice: 0.04,
        highGasPrice: 0.05
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/public-awesome/stargaze',
    recommendedVersion: 'v7.0.0',
    compatibleVersions: ['v7.0.0'],
    cosmosSdkVersion: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/public-awesome/testnets/blob/main/elgafar-1/genesis/genesis.tar.gz?raw=true'
    },
    versions: [{
        name: 'v7.0.0',
        recommendedVersion: 'v7.0.0',
        compatibleVersions: ['v7.0.0'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.28',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.28',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }, {
        address: 'https://stargaze-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    rest: [{
        address: 'https://rest.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }, {
        address: 'https://stargaze-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    grpc: [{
        address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      }, {
        address: 'http://grpc-2.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet-explorer.publicawesome.dev/stargaze',
      txPage: 'https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}'
    }]
};
export default info;