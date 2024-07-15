import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'empowerchain',
  chain_id: 'empowerchain-1',
  pretty_name: 'EmpowerChain',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'empower',
  daemon_name: 'empowerd',
  node_home: '$HOME/.empowerchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umpwr',
        fixed_min_gas_price: 0,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umpwr'
      }]
  },
  codebase: {
    cosmwasm_enabled: true,
    cosmwasm_version: '0.45'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-empowerchain.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://empowerchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'http://empw.rpc.m.stavr.tech:22057',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-empower.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://empower-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-empower.vinjan.xyz:443',
        provider: 'vinjan'
      },
      {
        address: 'https://rpc.empower.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://mainnet-empower-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://empower.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://rpc.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:26607',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://empower-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://empower-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      }
    ],
    rest: [
      {
        address: 'https://rest-empowerchain.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://empowerchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://empw.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://empower-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd-empower.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-empower.vinjan.xyz:443',
        provider: 'vinjan'
      },
      {
        address: 'https://api.empower.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://mainnet-empower-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://empower.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://lcd.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://empower-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://empower-api.bluestake.net',
        provider: 'BlueStake 🚀'
      }
    ],
    grpc: [
      {
        address: 'empowerchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'empower-grpc.w3coins.io:17390',
        provider: 'w3coins'
      },
      {
        address: 'grpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'http://empw.grpc.m.stavr.tech:9141',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-empower.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://grpc.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'empower.grpc.stakevillage.net:16890',
        provider: 'Stake Village'
      },
      {
        address: 'https://grpc.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:9005',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'empower-grpc.noders.services:25090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Empower-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Empower-Mainnet/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Empower-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/empower',
      tx_page: 'https://explorer.nodestake.top/empower/tx/${txHash}',
      account_page: 'https://explorer.nodestake.top/empower/account/{$accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/empower',
      tx_page: 'https://exp.stakevillage.net/empower/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/empower/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Empower',
      tx_page: 'https://explorer.declab.pro/Empower/tx/${txHash}',
      account_page: 'https://explorer.declab.pro/Empower/account/{$accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/empowerchain',
      tx_page: 'https://mainnet.whispernode.com/empowerchain/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/empowerchain/account/${accountAddress}'
    }
  ],
  images: [{
      image_sync: {
        chain_name: 'empowerchain',
        base_denom: 'umpwr'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
      theme: {
        primary_color_hex: '#00e33a',
        background_color_hex: '#00e33a',
        circle: true
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
      theme: {
        primary_color_hex: '#00e33a',
        background_color_hex: '#00e33a',
        circle: false
      }
    }]
};
export default info;