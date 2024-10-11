import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'imversedtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Imversed Testnet',
  chainType: 'cosmos',
  chainId: 'imversed-test-1',
  bech32Prefix: 'imv',
  daemonName: 'imversed',
  nodeHome: '$HOME/.imversed',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nimv',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/imversed/imversed',
    recommendedVersion: 'v2.4.0',
    compatibleVersions: ['v2.4.0'],
    binaries: {
      "linux/amd64": 'https://s.imversed.com/imversed_linux_amd64.tar.gz',
      "darwin/arm64": 'https://s.imversed.com/imversed_darwin_arm64.tar.gz',
      "darwin/amd64": 'https://s.imversed.com/imversed_darwin_amd64.tar.gz',
      "windows/amd64": 'https://s.imversed.com/imversed_windows_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://s.imversed.com/test-net/genesis.json'
    },
    versions: [{
        name: 'v2.4.0',
        recommendedVersion: 'v2.4.0',
        compatibleVersions: ['v2.4.0'],
        binaries: {
          "linux/amd64": 'https://s.imversed.com/imversed_linux_amd64.tar.gz',
          "darwin/arm64": 'https://s.imversed.com/imversed_darwin_arm64.tar.gz',
          "darwin/amd64": 'https://s.imversed.com/imversed_darwin_amd64.tar.gz',
          "windows/amd64": 'https://s.imversed.com/imversed_windows_amd64.tar.gz'
        }
      }]
  },
  apis: {
    rpc: [{
        address: 'https://tx-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    rest: [{
        address: 'https://query-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    grpc: [{
        address: 'http://qs.imversed.com:9090',
        provider: 'imversed'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://tex-s.imversed.com',
      txPage: 'https://tex-s.imversed.com/transactions/${txHash}'
    }]
};
export default info;