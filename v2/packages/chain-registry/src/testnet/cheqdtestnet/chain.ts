import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cheqdtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'cheqd',
  chainType: 'cosmos',
  chainId: 'cheqd-testnet-6',
  bech32Prefix: 'cheqd',
  daemonName: 'cheqd-noded',
  nodeHome: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ncheq',
        fixedMinGasPrice: 25,
        lowGasPrice: 50,
        averageGasPrice: 75,
        highGasPrice: 100
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cheqd/cheqd-node',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.0', 'v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/testnet/genesis.json'
    },
    versions: [
      {
        name: 'v0.6',
        recommendedVersion: 'v0.6.10',
        compatibleVersions: [
          'v0.6.0',
          'v0.6.1',
          'v0.6.7',
          'v0.6.9',
          'v0.6.10'
        ],
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        proposal: 3,
        height: 2478827,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.6.10/cheqd-noded-0.6.10-linux-x86_64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.6.10/cheqd-noded-0.6.10-linux-arm64.tar.gz'
        },
        nextVersionName: 'v1',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.45.9',
          tag: 'v0.45.9-cheqd-tag'
        },
        ibc: {
          type: 'go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v1',
        recommendedVersion: 'v1.4.5',
        compatibleVersions: [
          'v1.2.5',
          'v1.3.0',
          'v1.4.0',
          'v1.4.2',
          'v1.4.4',
          'v1.4.5'
        ],
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-darwin-arm64.tar.gz'
        },
        previousVersionName: 'v0.6',
        nextVersionName: 'v2',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.46.10',
          tag: 'v0.46.10-barberry'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      },
      {
        name: 'v2',
        recommendedVersion: 'v2.0.1',
        compatibleVersions: ['v2.0.0', 'v2.0.1'],
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        proposal: 12,
        height: 6194750,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-arm64.tar.gz'
        },
        previousVersionName: 'v1',
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-height-mismatch'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cheqd/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-height-mismatch'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cheqd.network',
        provider: 'cheqd'
      }],
    rest: [{
        address: 'https://api.cheqd.network',
        provider: 'cheqd'
      }],
    grpc: [{
        address: 'grpc.cheqd.network:443',
        provider: 'cheqd'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://testnet-explorer.cheqd.io/',
      txPage: 'https://testnet-explorer.cheqd.io/transactions/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }]
};
export default info;