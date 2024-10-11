import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'hypersigntestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Hypersign Testnet',
  chainType: 'cosmos',
  chainId: 'prajna-1',
  bech32Prefix: 'hid',
  daemonName: 'hid-noded',
  nodeHome: '$HOME/.hid-node',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhid',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/hypersign-protocol/hid-node',
    recommendedVersion: 'v0.2.0',
    compatibleVersions: ['v0.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-darwin-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/hypersign-protocol/networks/master/testnet/prajna/final_genesis.json'
    },
    versions: [{
        name: 'v0.2.0',
        recommendedVersion: 'v0.2.0',
        compatibleVersions: ['v0.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-darwin-amd64.tar.gz'
        }
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    rest: [{
        address: 'https://api.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Hypersign',
      url: 'https://explorer.hypersign.id/hypersign-prajna-testnet',
      txPage: 'https://explorer.hypersign.id/hypersign-prajna-testnet/tx/${txHash}'
    }]
};
export default info;