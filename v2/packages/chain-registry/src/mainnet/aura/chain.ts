import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'aura',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://aura.network/',
  prettyName: 'Aura Network',
  chainType: 'cosmos',
  chainId: 'aura_6322-2',
  bech32Prefix: 'aura',
  daemonName: 'aurad',
  nodeHome: '$HOME/.aura',
  preForkChainName: 'aura1',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uaura',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.0025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uaura'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/aura-nw/aura',
    recommendedVersion: 'v0.9.3',
    compatibleVersions: ['v0.9.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4',
      repo: 'https://github.com/aura-nw/cometbft',
      tag: 'v0.37.4-aura.2'
    },
    genesis: {
      genesisUrl: 'https://images.aura.network/aura_6322-2-genesis.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/evmos/cosmos-sdk',
      version: 'v0.47.12',
      tag: 'v0.47.12-evmos'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.42.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.aura.network/',
        provider: 'Aura Network Foundation'
      },
      {
        address: 'https://m-aura.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://aura.rpc.m.stavr.tech:11047',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://aura-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://aura.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://mainnet-aura-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/aura',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://aura-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc.aura.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://rpc-aura.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://aura-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://aura-rpc.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://aura.rpc.srv.stakr.space',
        provider: 'STAKR.space'
      },
      {
        address: 'https://aura-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://aura-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://lcd.aura.network/',
        provider: 'Aura Network Foundation'
      },
      {
        address: 'https://m-aura.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://aura.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://aura-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://aura.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://mainnet-aura-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://aura-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://rest.lavenderfive.com:443/aura',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://aura-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://api.aura.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://api-aura.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://aura-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://aura-api.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://aura.api.srv.stakr.space',
        provider: 'STAKR.space'
      },
      {
        address: 'https://aura-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://aura-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.aura.network',
        provider: 'Aura Network Foundation'
      },
      {
        address: 'auranetwork-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'aura.mainnet.grpc.nodersteam.com:9100/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://aura-grpc.ramuchi.tech:15000',
        provider: 'ramuchi.tech'
      },
      {
        address: 'http://aura.grpc.m.stavr.tech:9901',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'aura.grpc.kjnodes.com:11790',
        provider: 'kjnodes'
      },
      {
        address: 'aura-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan'
      },
      {
        address: 'aura.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'services.staketab.com:9021',
        provider: 'Staketab'
      },
      {
        address: 'grpc.aura.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'grpc-aura.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'aura-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'aura-grpc.palamar.io:443',
        provider: 'Palamar'
      },
      {
        address: 'aura.grpc.srv.stakr.space:19090',
        provider: 'STAKR.space'
      },
      {
        address: 'aura-grpc.noders.services:17090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'aurascan',
      url: 'https://aurascan.io',
      txPage: 'https://aurascan.io/tx/${txHash}',
      accountPage: 'https://aurascan.io/address/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/aura',
      txPage: 'https://staking-explorer.com/transaction.php?chain=aura&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=aura&addr=${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/aura',
      txPage: 'https://exp.utsa.tech/aura/tx/${txHash}',
      accountPage: 'https://exp.utsa.tech/aura/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Aura-Mainnet',
      txPage: 'https://explorer.stavr.tech/aura-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/aura-mainnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/aura',
      txPage: 'https://explorer.nodestake.org/aura/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/aura/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/aura',
      txPage: 'https://explorer.tcnetwork.io/aura/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/aura/account/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/aura',
      txPage: 'https://explorer.stake-take.com/aura/tx/${txHash}',
      accountPage: 'https://explorer.stake-take.com/aura/account/${accountAddress}'
    },
    {
      kind: 'STAKR.space explorer',
      url: 'https://explorer.stakr.space/aura/',
      txPage: 'https://explorer.stakr.space/aura/tx/${txHash}',
      accountPage: 'https://explorer.stakr.space/aura/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
      theme: {
        primaryColorHex: '#a7c8d4'
      }
    }]
};
export default info;