import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'source',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.sourceprotocol.io/',
  pretty_name: 'Source',
  chain_type: 'cosmos',
  chain_id: 'source-1',
  bech32_prefix: 'source',
  daemon_name: 'sourced',
  node_home: '$HOME/.source',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usource',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usource'
      }]
  },
  codebase: {

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
        address: 'https://source.api.staking-explorer.com',
        provider: 'Daily DROP | 3% Fee'
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
      tx_page: 'https://explorer.stavr.tech/Source-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Source-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/source/',
      tx_page: 'https://exp.nodeist.net/source/tx/${txHash}',
      account_page: 'https://exp.nodeist.net/source/accounts/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.org/source',
      tx_page: 'https://explorer.moonbridge.org/source/tx/${txHash}',
      account_page: 'https://explorer.moonbridge.org/source/accounts/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/source',
      tx_page: 'https://explorer.nodestake.org/source/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/source/accounts/${accountAddress}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/Source-mainnet',
      tx_page: 'https://explorer.sr20de.xyz/Source-mainnet/tx/${txHash}',
      account_page: 'https://explorer.sr20de.xyz/Source-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/source',
      tx_page: 'https://explorer.tcnetwork.io/source/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/source',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=source&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=source&addr=${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/source',
      tx_page: 'https://explorer.indonode.net/source/tx/${txHash}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/source-mainnet/',
      tx_page: 'https://explorer.tendermint.roomit.xyz/source-mainnet/tx/${txHash}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/source',
      tx_page: 'https://explorer.posthuman.digital/source/tx/${txHash}',
      account_page: 'https://explorer.posthuman.digital/source/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Source',
      tx_page: 'https://explorer.declab.pro/Source/tx/${txHash}',
      account_page: 'https://explorer.declab.pro/Source/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/source',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/source/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/source/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/source/',
      tx_page: 'https://explorer.nodeshub.online/source/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/source/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
      theme: {
        primary_color_hex: '#39a5fc'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
  }
};
export default info;