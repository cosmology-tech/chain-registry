import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'ulastestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ULAS',
  chainType: 'cosmos',
  chainId: 'ulas',
  bech32Prefix: 'ulas',
  slip44: 118,
  daemonName: 'ulasd',
  nodeHome: '$HOME/.ulas',
  codebase: {
    gitRepo: 'https://github.com/ulasnetwork/ulas',
    recommendedVersion: 'v0.0.1',
    compatibleVersions: ['v0.0.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ulasnetwork/chain-config/main/ulas/genesis.json'
    },
    versions: [{
        name: 'v0.0.1',
        recommendedVersion: 'v0.0.1',
        compatibleVersions: ['v0.0.1']
      }]
  },
  apis: {
    rpc: [{
        address: 'http://65.49.204.199:26657',
        provider: 'UlasNetwork'
      }],
    rest: [{
        address: 'http://65.49.204.199:1317',
        provider: 'UlasNetwork'
      }],
    grpc: [{
        address: 'http://65.49.204.199:9090',
        provider: 'UlasNetwork'
      }]
  },
  explorers: [{
      kind: 'ulas-scan',
      url: 'https://testnet-explorer.ulas.network',
      txPage: 'https://testnet-explorer.ulas.network/ulas/tx/${txHash}'
    }]
};
export default info;