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
    recommendedVersion: 'v3.0.1',
    compatibleVersions: ['v3.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.0.1/cheqd-noded-3.0.1-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.0.1/cheqd-noded-3.0.1-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.0.1/cheqd-noded-3.0.1-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.0.1/cheqd-noded-3.0.1-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/testnet/genesis.json'
    },
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