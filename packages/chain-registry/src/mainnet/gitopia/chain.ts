import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gitopia',
  status: 'live',
  website: 'https://gitopia.com/',
  network_type: 'mainnet',
  pretty_name: 'Gitopia',
  chain_type: 'cosmos',
  chain_id: 'gitopia',
  bech32_prefix: 'gitopia',
  daemon_name: 'gitopiad',
  node_home: '$HOME/.gitopia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulore',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.0012,
        average_gas_price: 0.0016,
        high_gas_price: 0.0024
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulore'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.13'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
      theme: {
        primary_color_hex: '#2e154d'
      }
    }],
  description: 'Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy. It is designed to optimize the open-source software development process through collaboration, transparency, and incentivization.',
  apis: {
    rpc: [
      {
        address: 'https://gitopia-rpc.polkachu.com:443',
        provider: 'polkachu'
      },
      {
        address: 'https://gitopia-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.gitopia.nodestake.top:443',
        provider: 'nodestake'
      },
      {
        address: 'https://gitopia-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://gitopia-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://m-gitopia.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://gitopia.rpc.m.stavr.tech:51057',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://gitopia-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc-gitopia.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://gitopia.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://gitopia-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.gitopia.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://gitopia-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-gitopia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://gitopia.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.gitopia.sgtstake.com',
        provider: 'SGTstake'
      },
      {
        address: 'https://mainnet-gitopia-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.gitopia.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://gitopia.rpc.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'https://gitopia-rpc.stakeangle.com',
        provider: 'StakeAngle'
      },
      {
        address: 'https://gitopia.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://gitopia.rpc.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://gitopia-rpc.enigma-validator.com/',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc.gitopia.tcnetwork.io/',
        provider: 'TC Network'
      },
      {
        address: 'https://gitopia.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc.gitopia.stakeup.tech/',
        provider: 'StakeUp'
      },
      {
        address: 'https://gitopia-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://gitopia-rpc.tothemars.network:443',
        provider: 'ToTheMars'
      },
      {
        address: 'https://gitopia.declab.pro:26625',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://gitopia-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://gitopia-api.polkachu.com:443',
        provider: 'polkachu'
      },
      {
        address: 'https://gitopia-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.gitopia.nodestake.top:443',
        provider: 'nodestake'
      },
      {
        address: 'https://gitopia-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://gitopia-mainnet-lcd.autostake.com:443',
        provider: 'autostake'
      },
      {
        address: 'https://gitopia-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://m-gitopia.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://gitopia.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://gitopia-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://lcd-gitopia.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://gitopia.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://gitopia-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://api.gitopia.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://gitopia-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-gitopia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://gitopia.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api.gitopia.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://mainnet-gitopia-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://api.gitopia.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://gitopia.api.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'http://gitopia-rpc.stakeangle.com:41317',
        provider: 'StakeAngle'
      },
      {
        address: 'https://gitopia.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://gitopia.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://gitopia-lcd.enigma-validator.com/',
        provider: 'Enigma'
      },
      {
        address: 'https://rest.gitopia.tcnetwork.io/',
        provider: 'TC Network'
      },
      {
        address: 'https://gitopia.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://api.gitopia.stakeup.tech/',
        provider: 'StakeUp'
      },
      {
        address: 'https://gitopia-mainnet.api.l0vd.com:443',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://gitopia-api.tothemars.network:443',
        provider: 'ToTheMars'
      },
      {
        address: 'https://gitopia.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://gitopia-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc.gitopia.indonode.net:26090',
        provider: 'indonode'
      },
      {
        address: 'gitopia.grpc.nodersteam.com:9201',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'gitopia-grpc.polkachu.com:11390',
        provider: 'polkachu'
      },
      {
        address: 'services.staketab.com:9410',
        provider: 'Staketab'
      },
      {
        address: 'https://gitopia-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.gitopia.nodestake.top:443',
        provider: 'nodestake'
      },
      {
        address: 'https://grpc-gitopia.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://gitopia.grpc.m.stavr.tech:5123',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'gitopia-grpc.genznodes.dev:33090',
        provider: 'genznodes'
      },
      {
        address: 'https://grpc.gitopia.hexnodes.co:16090',
        provider: 'Hexnodes'
      },
      {
        address: 'https://gitopia.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://grpc.gitopia.indonode.net:26090',
        provider: 'Indonode'
      },
      {
        address: 'gitopia-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'grpc.gitopia.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://gitopia-grpc.ramuchi.tech:16001',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-gitopia.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'gitopia.grpc.kjnodes.com:14190',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.gitopia.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'https://gitopia.grpc.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'http://gitopia-rpc.stakeangle.com:41390',
        provider: 'StakeAngle'
      },
      {
        address: 'https://gitopia.grpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://grpc.gitopia.sbgid.com',
        provider: 'kokos'
      },
      {
        address: 'mainnet-gitopia-grpc.konsortech.xyz:38090',
        provider: 'KonsorTech'
      },
      {
        address: 'gitopia.grpc.stakevillage.net:14190',
        provider: 'Stake Village'
      },
      {
        address: 'gitopia.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'grpc.gitopia.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'gitopia-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'gitopia-grpc.tothemars.network:21190',
        provider: 'ToTheMars'
      },
      {
        address: 'https://gitopia.declab.pro:9017',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'gitopia-grpc.noders.services:19090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/gitopia',
      tx_page: 'https://ping.pub/gitopia/tx/${txHash}',
      account_page: 'https://ping.pub/gitopia/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Gitopia-M',
      tx_page: 'https://explorer.stavr.tech/Gitopia-M/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Gitopia-M/account/${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/gitopia',
      tx_page: 'https://exp.utsa.tech/gitopia/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/gitopia/account/${accountAddress}'
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/gitopia',
      tx_page: 'https://exp.nodeist.net/gitopia/tx/${txHash}',
      account_page: 'https://exp.nodeist.net/gitopia/account/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/gitopia',
      tx_page: 'https://explorer.stake-take.com/gitopia/tx/${txHash}',
      account_page: 'https://explorer.stake-take.com/gitopia/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/gitopia',
      tx_page: 'https://explorer.nodexcapital.com/gitopia/tx/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/gitopia/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/gitopia',
      tx_page: 'https://explorer.tcnetwork.io/gitopia/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/gitopia/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/gitopia',
      tx_page: 'https://explorer.nodestake.top/gitopia/tx/${txHash}',
      account_page: 'https://explorer.nodestake.top/gitopia/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/gitopia-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/gitopia-mainnet/transaction/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/gitopia-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.team/gitopia',
      tx_page: 'https://explorer.moonbridge.team/gitopia/tx/${txHash}',
      account_page: 'https://explorer.moonbridge.team/gitopia/account/${accountAddress}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/gitopia',
      tx_page: 'https://explorer.konsortech.xyz/gitopia/tx/${txHash}',
      account_page: 'https://explorer.konsortech.xyz/gitopia/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/gitopia',
      tx_page: 'https://exp.stakevillage.net/gitopia/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/gitopia/account/${accountAddress}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/gitopia',
      tx_page: 'https://main.anode.team/gitopia/tx/${txHash}',
      account_page: 'https://main.anode.team/gitopia/account/${accountAddress}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://chain-services.l0vd.com/mainnets/gitopia',
      tx_page: 'https://chain-services.l0vd.com/mainnets/gitopia/tx/${txHash}',
      account_page: 'https://chain-services.l0vd.com/mainnets/gitopia/account/${accountAddress}'
    },
    {
      kind: 'ToTheMars',
      url: 'https://explorer.tothemars.network/gitopia',
      tx_page: 'https://explorer.tothemars.network/gitopia/tx/${txHash}',
      account_page: 'https://explorer.tothemars.network/gitopia/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Gitopia',
      tx_page: 'https://explorer.declab.pro/Gitopia/tx/${txHash}',
      account_page: 'https://explorer.declab.pro/Gitopia/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/gitopia',
      tx_page: 'https://mainnet.whispernode.com/gitopia/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/gitopia/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
  }
};
export default info;