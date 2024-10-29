import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'aura1',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://aura.network/',
  pretty_name: 'Aura Network',
  chain_type: 'cosmos',
  chain_id: 'xstaxy-1',
  bech32_prefix: 'aura',
  daemon_name: 'aurad',
  node_home: '$HOME/.aura',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uaura',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uaura'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47.5'
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
        address: 'https://aura-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan'
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
        address: 'https://rpc.aura.safeblock.space',
        provider: 'Safe Block'
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
        address: 'https://api.aura.safeblock.space',
        provider: 'Safe Block'
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
        address: 'https://grpc.aura.nodestake.top',
        provider: 'NodeStake'
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
        address: 'grpc.aura.safeblock.space:9090',
        provider: 'Safe Block'
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
      tx_page: 'https://aurascan.io/transaction/${txHash}',
      account_page: 'https://aurascan.io/account/${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/aura',
      tx_page: 'https://exp.utsa.tech/aura/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/aura/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Aura-Mainnet',
      tx_page: 'https://explorer.stavr.tech/aura-mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/aura-mainnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/aura',
      tx_page: 'https://explorer.nodestake.top/aura/tx/${txHash}',
      account_page: 'https://explorer.nodestake.top/aura/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/aura',
      tx_page: 'https://explorer.tcnetwork.io/aura/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/aura/account/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/aura',
      tx_page: 'https://explorer.stake-take.com/aura/tx/${txHash}',
      account_page: 'https://explorer.stake-take.com/aura/account/${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/aura',
      tx_page: 'https://explorer.safeblock.space/aura/tx/${txHash}',
      account_page: 'https://explorer.safeblock.space/aura/account/${accountAddress}'
    },
    {
      kind: 'STAKR.space explorer',
      url: 'https://explorer.stakr.space/aura/',
      tx_page: 'https://explorer.stakr.space/aura/tx/${txHash}',
      account_page: 'https://explorer.stakr.space/aura/account/${accountAddress}'
    }
  ],
  images: [{
      image_sync: {
        chain_name: 'aura'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
      theme: {
        primary_color_hex: '#a7c8d4'
      }
    }]
};
export default info;