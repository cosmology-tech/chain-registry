import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'rebus',
  website: 'https://www.rebuschain.com/',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Rebus',
  chainType: 'cosmos',
  chainId: 'reb_1111-1',
  bech32Prefix: 'rebus',
  daemonName: 'rebusd',
  nodeHome: '$HOME/.rebusd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'arebus',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'arebus'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/rebuschain/rebus.core',
    recommendedVersion: 'v0.4.0',
    compatibleVersions: ['v0.4.0'],
    versions: [
      {
        name: 'v0.1.2',
        tag: 'v0.1.2',
        height: 0,
        nextVersionName: 'v0.2.0'
      },
      {
        name: 'v0.2.0',
        tag: 'v0.2.3',
        proposal: 18,
        height: 473400,
        recommendedVersion: 'v0.2.3',
        compatibleVersions: ['v0.2.3'],
        nextVersionName: 'v0.3.0'
      },
      {
        name: 'v0.3.0',
        tag: 'v0.3.0',
        proposal: 25,
        height: 4167000,
        recommendedVersion: 'v0.3.0',
        compatibleVersions: ['v0.3.0'],
        nextVersionName: 'v0.3.0'
      },
      {
        name: 'v0.4.0',
        tag: 'v0.4.0',
        proposal: 31,
        height: 9464700,
        recommendedVersion: 'v0.4.0',
        compatibleVersions: ['v0.4.0'],
        nextVersionName: ''
      }
    ],
    genesis: {
      genesisUrl: 'https://github.com/rebuschain/rebus.mainnet/raw/master/reb_1111-1/genesis.zip'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://api.rebuschain.com:26657/',
        provider: 'Rebuschain'
      },
      {
        address: 'https://rebus.rpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'https://rebus.rpc.manticore.team:443/',
        provider: 'MantiCore'
      },
      {
        address: 'https://rpc.rebus.nodestake.top/',
        provider: 'NodeStake'
      },
      {
        address: 'http://rebus.rpc.m.stavr.tech:40107',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-1.rebus.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://api.mainnet.rebus.money:26657',
        provider: 'Rebuschain'
      },
      {
        address: 'https://rebus-rpc.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://rebus-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rebus.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rebus-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rebus-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.rebuschain.com:1317/',
        provider: 'Rebuschain'
      },
      {
        address: 'https://rebus.api.manticore.team:443/',
        provider: 'MantiCore'
      },
      {
        address: 'https://api.rebus.nodestake.top/',
        provider: 'NodeStake'
      },
      {
        address: 'https://rebus.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-1.rebus.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://api.mainnet.rebus.money:1317',
        provider: 'Rebuschain'
      },
      {
        address: 'https://rebus-rest.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://rebus-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rebus.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rebus-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https:/rebus-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'rebus.grpc.manticore.team:443',
        provider: 'MantiCore'
      },
      {
        address: 'rebus.grpc.bccnodes.com:14090',
        provider: 'BccNodes'
      },
      {
        address: 'grpc.rebus.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'rebus.grpc.nodersteam.com:9181',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'http://rebus.grpc.m.stavr.tech:3211',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'rebus-grpc.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'rebus-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rebus.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'rebus-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'rebus-grpc.noders.services:18090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://rebus.explorers.guru',
      txPage: 'https://rebus.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/rebus',
      txPage: 'https://explorer.nodestake.top/rebus/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/rebus',
      txPage: 'https://staking-explorer.com/transaction.php?chain=rebus&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=rebus&addr=${accountAddress}'
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/rebus-M',
      txPage: 'https://explorer.bccnodes.com/rebus-M/tx/${txHash}'
    },
    {
      kind: 'Brochain',
      url: 'https://explorer.brocha.in/rebus',
      txPage: 'https://explorer.brocha.in/rebus/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/rebus',
      txPage: 'https://explorer.stavr.tech/rebus/tx/${txHash}'
    },
    {
      kind: 'tcnetwork',
      url: 'https://rebus.tcnetwork.io',
      txPage: 'https://rebus.tcnetwork.io/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/rebus',
      txPage: 'https://atomscan.com/rebus/transactions/${txHash}',
      accountPage: 'https://atomscan.com/rebus/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
      theme: {
        primaryColorHex: '#e75486'
      }
    }]
};
export default info;