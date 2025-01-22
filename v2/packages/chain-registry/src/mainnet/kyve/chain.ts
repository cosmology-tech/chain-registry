import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kyve',
  chainType: 'cosmos',
  chainId: 'kyve-1',
  prettyName: 'KYVE',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'kyve',
  daemonName: 'kyved',
  nodeHome: '$HOME/.kyve',
  website: 'https://www.kyve.network/',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ukyve',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ukyve'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KYVENetwork/chain',
    recommendedVersion: 'v1.5.0',
    compatibleVersions: ['v1.5.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.7',
      tag: 'v0.38.7-kyve-rpc-fix-rc0'
    },
    binaries: {
      "linux/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_mainnet_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_mainnet_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_mainnet_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_mainnet_darwin_arm64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/KYVENetwork/networks/main/kyve-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.7',
      tag: 'v0.50.7-kyve-rc0'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
  },
  description: 'Revolutionizing data reliability in the Web3 space, KYVE Network provides fast and easy tooling for data validation, immutability, and retrieval, ensuring trustless data for seamless scalability and eliminating data risks and roadblocks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/kyve',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://kyve.rpc.m.stavr.tech:12357',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-kyve.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://kyve-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://kyve.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rpc-kyve.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://kyve.declab.pro:26616',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://kyve-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://kyve_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://kyve-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://api.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rest.lavenderfive.com:443/kyve',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rest-kyve.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://lcd-kyve.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://kyve.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://kyve-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://kyve.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://api-kyve.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://kyve.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://kyve-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://kyve_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://kyve-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'kyve.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc-kyve.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://kyve.grpc.stavr.tech:7106',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://kyve.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'grpc-kyve.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://kyve.declab.pro:9011',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'kyve-grpc.noders.services:15090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'kyve-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kyve',
      txPage: 'https://ezstaking.app/kyve/txs/${txHash}',
      accountPage: 'https://ezstaking.app/kyve/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/kyve',
      txPage: 'https://www.mintscan.io/kyve/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/kyve/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/kyve',
      txPage: 'https://staking-explorer.com/transaction.php?chain=kyve&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=kyve&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/kyve',
      txPage: 'https://explorer.nodestake.top/kyve/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.top/kyve/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Kyve',
      txPage: 'https://explorer.stavr.tech/Kyve/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Kyve/account/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/kyve',
      txPage: 'https://explorer.stake-take.com/kyve/txs/${txHash}',
      accountPage: 'https://explorer.stake-take.com/kyve/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Kyve',
      txPage: 'https://explorer.declab.pro/Kyve/txs/${txHash}',
      accountPage: 'https://explorer.declab.pro/Kyve/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/kyve',
      txPage: 'https://explorer.whenmoonwhenlambo.money/kyve/txs/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/kyve/account/${accountAddress}'
    },
    {
      kind: 'KYVE Explorer',
      url: 'https://explorer.kyve.network/kyve',
      txPage: 'https://explorer.kyve.network/kyve/tx/${txHash}',
      accountPage: 'https://explorer.kyve.network/kyve/account/${accountAddress}'
    },
    {
      kind: 'Viewblock',
      url: 'https://viewblock.io/kyve',
      txPage: 'https://viewblock.io/kyve/tx/${txHash}',
      accountPage: 'https://viewblock.io/kyve/address/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg',
      theme: {
        primaryColorHex: '#325350'
      }
    }]
};
export default info;