import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'statesettestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Stateset Testnet',
  chainType: 'cosmos',
  chainId: 'stateset-1-testnet',
  bech32Prefix: 'stateset',
  daemonName: 'statesetd',
  nodeHome: '$HOME/.statesetd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustate',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/stateset/core',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64',
      "darwin/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64',
      "windows/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe'
    },
    genesis: {
      genesisUrl: 'https://rpc.stateset.zone/genesis'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64',
          "windows/amd64": 'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe'
        }
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.stateset.zone/',
        provider: 'stateset'
      }],
    rest: [{
        address: 'https://rest-api.stateset.zone',
        provider: 'stateset'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explore.stateset.zone',
      txPage: 'https://explore.stateset.zone/transactions/${txHash}'
    }]
};
export default info;