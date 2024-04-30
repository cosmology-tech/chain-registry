import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kyve',
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
    cosmosSdkVersion: 'v0.47.6-kyve-rc0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
  },
  description: 'Revolutionizing data reliability in the Web3 space, KYVE Network provides fast and easy tooling for data validation, immutability, and retrieval, ensuring trustless data for seamless scalability and eliminating data risks and roadblocks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-rpc.lavenderfive.com:443',
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
      }
    ],
    rest: [
      {
        address: 'https://api-eu-1.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://kyve-api.lavenderfive.com:443',
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
      }
    ],
    grpc: [
      {
        address: 'https://grpc.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://kyve-grpc.lavenderfive.com:443',
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
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
    }]
};
export default info;