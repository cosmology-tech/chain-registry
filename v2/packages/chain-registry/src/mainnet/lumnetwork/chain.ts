import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumnetwork',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://lum.network/',
  prettyName: 'Lum Network',
  chainType: 'cosmos',
  chainId: 'lum-network-1',
  bech32Prefix: 'lum',
  daemonName: 'lumd',
  nodeHome: '$HOME/.lumd',
  keyAlgos: ['secp256k1'],
  slip44: 880,
  fees: {
    feeTokens: [{
        denom: 'ulum',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulum'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/lum-network/chain',
    recommendedVersion: 'v1.6.7',
    compatibleVersions: ['v1.6.7'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    binaries: {
      "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_amd64.zip',
      "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_arm64.zip',
      "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_amd64.zip',
      "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_arm64.zip',
      "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_amd64.zip',
      "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_arm64.zip'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/lum-network/mainnet/master/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.11'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.node0.mainnet.lum.network',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://lum.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/lumnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lumnetwork_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.node0.mainnet.lum.network',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://rest.lavenderfive.com:443/lumnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lum-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lumnetwork_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'lumnetwork.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'lum.grpc.m.stavr.tech:2277',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'lum-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'lum-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/lumnetwork',
      txPage: 'https://ezstaking.app/lumnetwork/txs/${txHash}',
      accountPage: 'https://ezstaking.app/lumnetwork/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/lum',
      txPage: 'https://www.mintscan.io/lum/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/lum/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/lumnetwork',
      txPage: 'https://staking-explorer.com/transaction.php?chain=lumnetwork&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=lumnetwork&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/LumNetwork-Mainnet',
      txPage: 'https://explorer.stavr.tech/LumNetwork-Mainnet/tx/${txHash}'
    },
    {
      kind: 'lum-network',
      url: 'https://explorer.lum.network',
      txPage: 'https://explorer.lum.network/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/lum-network',
      txPage: 'https://ping.pub/lum-network/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lum-network',
      txPage: 'https://atomscan.com/lum-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/lum-network/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/lum-network',
      txPage: 'https://explorer.whenmoonwhenlambo.money/lum-network/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/lum-network/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
      theme: {
        primaryColorHex: '#080808'
      }
    }]
};
export default info;