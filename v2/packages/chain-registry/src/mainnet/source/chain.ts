import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'source',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.sourceprotocol.io/',
  prettyName: 'Source',
  chainType: 'cosmos',
  chainId: 'source-1',
  bech32Prefix: 'source',
  daemonName: 'sourced',
  nodeHome: '$HOME/.source',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usource',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.075,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usource'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Source-Protocol-Cosmos/source',
    recommendedVersion: 'v3.0.3',
    compatibleVersions: ['v3.0.3'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Source-Protocol-Cosmos/mainnet/master/source-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.source.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://source.rpc.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://source-rpc.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://source.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-source.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://source-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://source-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc-source.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'https://source-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.source.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://rpc.source.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://source.rpc.skynodejs.net/',
        provider: 'skynodejs'
      },
      {
        address: 'https://source.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://rpc.source.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://rpc.source.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://source.declab.pro:26604',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://rpc.source.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://source_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://source-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      }
    ],
    rest: [
      {
        address: 'https://api.source.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://source.lcd.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://api-source.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://source.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://source-mainnet-api.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://source-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://source-api.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://api-source.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://source-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rest.source.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://api.source.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://source.api.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://api.source.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://api.source.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://rest.source.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://source.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://api.source.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://source_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://source-api.bluestake.net',
        provider: 'BlueStake 🚀'
      }
    ],
    grpc: [
      {
        address: 'source-mainnet-grpc.itrocket.net:32090',
        provider: 'ITRocket'
      },
      {
        address: 'source.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'http://source.grpc.m.stavr.tech:9590',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-source.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://grpc.source.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-source.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'source-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'source-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://source.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://source.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc.source.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'grpc.source.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'https://source.declab.pro:9003',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'source-grpc.moonbridge.org:443',
        provider: 'Moonbridge'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Source-Mainnet/',
      txPage: 'https://explorer.stavr.tech/Source-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Source-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/source/',
      txPage: 'https://exp.nodeist.net/source/tx/${txHash}',
      accountPage: 'https://exp.nodeist.net/source/accounts/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.org/source',
      txPage: 'https://explorer.moonbridge.org/source/tx/${txHash}',
      accountPage: 'https://explorer.moonbridge.org/source/accounts/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/source',
      txPage: 'https://explorer.nodestake.org/source/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/source/accounts/${accountAddress}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/Source-mainnet',
      txPage: 'https://explorer.sr20de.xyz/Source-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.sr20de.xyz/Source-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/source',
      txPage: 'https://explorer.tcnetwork.io/source/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/source',
      txPage: 'https://staking-explorer.com/transaction.php?chain=source&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=source&addr=${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/source',
      txPage: 'https://explorer.indonode.net/source/tx/${txHash}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/source-mainnet/',
      txPage: 'https://explorer.tendermint.roomit.xyz/source-mainnet/tx/${txHash}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/source',
      txPage: 'https://explorer.posthuman.digital/source/tx/${txHash}',
      accountPage: 'https://explorer.posthuman.digital/source/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Source',
      txPage: 'https://explorer.declab.pro/Source/tx/${txHash}',
      accountPage: 'https://explorer.declab.pro/Source/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/source',
      txPage: 'https://explorer.whenmoonwhenlambo.money/source/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/source/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/source/',
      txPage: 'https://explorer.nodeshub.online/source/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/source/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
      theme: {
        primaryColorHex: '#39a5fc'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
  }
};
export default info;