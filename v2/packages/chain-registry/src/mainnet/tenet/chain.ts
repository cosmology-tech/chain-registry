import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tenet',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://tenet.org/',
  prettyName: 'Tenet',
  chainType: 'cosmos',
  chainId: 'tenet_1559-1',
  bech32Prefix: 'tenet',
  nodeHome: '$HOME/.tenetd',
  daemonName: 'tenetd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atenet',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atenet'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/tenet-org/tenet-mainnet',
    recommendedVersion: 'v11.2.1',
    compatibleVersions: ['v11.2.0', 'v11.2.1'],
    binaries: {
      "linux/amd64": 'https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Windows_amd64.zip'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/tenet-org/tenet-mainnet/master/config/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '6.1.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tendermint-1.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://app.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
        address: 'tenet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }, {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.tenet.org',
        provider: 'tenet'
      }, {
        address: 'https://tenet-evm.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/tenet',
      txPage: 'https://ping.pub/tenet/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Tenet',
      txPage: 'https://exp.nodeist.net/Tenet/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/tenet',
      txPage: 'https://explorer.tcnetwork.io/tenet/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/tenet/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/tenet',
      txPage: 'https://staking-explorer.com/transaction.php?chain=tenet&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=tenet&addr=${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/tenet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/tenet/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/tenet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }]
};
export default info;