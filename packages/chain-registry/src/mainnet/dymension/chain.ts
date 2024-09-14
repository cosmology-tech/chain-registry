import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'dymension',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://portal.dymension.xyz',
  pretty_name: 'Dymension Hub',
  chain_type: 'cosmos',
  chain_id: 'dymension_1100-1',
  bech32_prefix: 'dym',
  slip44: 60,
  node_home: '$HOME/.dymension',
  daemon_name: 'dymd',
  fees: {
    fee_tokens: [{
        denom: 'adym',
        fixed_min_gas_price: 5000000000,
        low_gas_price: 5000000000,
        average_gas_price: 5000000000,
        high_gas_price: 20000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adym'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
  },
  description: 'Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
      theme: {
        primary_color_hex: '#f4e4d4'
      }
    }],
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://dym-m-rpc.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://rpc.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'http://dymension.mainnet.rpc.noders.team:42657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dymension-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://dymension-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-rpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://rpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dym.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://dym.rpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.rpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-rpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://rpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dymension-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://dymension.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc-dymension.hoodrun.io:443',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2053',
        provider: 'Wave'
      },
      {
        address: 'https://archive.rpc.dym.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://rpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://rpc.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://rpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://dymension-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.mainnet.dymension.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      }
    ],
    rest: [
      {
        address: 'https://dym-m-api.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://api.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'http://dymension.mainnet.api.noders.team:42317',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dymension-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://dymension-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-api.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.api.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://api-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dymension.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://dym.api-archive.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lcd.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.api.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-api.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://api-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dymension-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://dymension.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://lcd-dymension.hoodrun.io',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com',
        provider: 'Wave'
      },
      {
        address: 'https://api.dym.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://rest.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://api.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://lcd.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://dymension-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.mainnet.dymension.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://api.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      }
    ],
    grpc: [
      {
        address: 'https://dym-m-grpc.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'grpc.dymension.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'dymension-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'dymension.mainnet.grpc.noders.team:42090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dymension-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dymension-grpc.kynraze.com:77',
        provider: 'Kynraze'
      },
      {
        address: 'https://grpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'dymension.grpc.m.stavr.tech:7119',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'dymension.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'http://dymension-grpc.stakeandrelax.net:20590',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-grpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'dymension-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://grpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'dymension.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'grpc-dymension.hoodrun.io:9095',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2083',
        provider: 'Wave'
      },
      {
        address: 'grpc.dym.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://grpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://grpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'dymension-grpc.noders.services:12090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc.mainnet.dymension.aviaone.com:9092',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'grpc.archive.dymension.mainnet.dteam.tech:29090',
        provider: 'DTEAM'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://dym-m-json.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://dymension-jsonrpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://evm-dymension.hoodrun.io:8547',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2087',
        provider: 'Wave'
      },
      {
        address: 'https://evm-rpc.dym.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://evm-rpc.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://evm-rpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://dymension-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://evm.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dymension',
      tx_page: 'https://www.mintscan.io/dymension/tx/${txHash}',
      account_page: 'https://www.mintscan.io/dymension/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dymension',
      tx_page: 'https://ezstaking.app/dymension/txs/${txHash}',
      account_page: 'https://ezstaking.app/dymension/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dymension',
      tx_page: 'https://explorer.nodestake.org/dymension/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/dymension/account/${accountAddress}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/dymension',
      tx_page: 'https://explorer.kynraze.com/dymension/tx/${txHash}',
      account_page: 'https://explorer.kynraze.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/dymension',
      tx_page: 'https://explorer.ist/dymension/tx/${txHash}',
      account_page: 'https://explorer.ist/dymension/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Dymension-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Dymension-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Dymension-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'HoodScan',
      url: 'https://hoodscan.io/dymension',
      tx_page: 'https://hoodscan.io/dymension/transactions/${txHash}',
      account_page: 'https://hoodscan.io/dymension/accounts/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/dymension',
      tx_page: 'https://explorer.posthuman.digital/dymension/tx/${txHash}',
      account_page: 'https://explorer.posthuman.digital/dymension/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/dymension',
      tx_page: 'https://mainnet.explorer.aviaone.com/dymension/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/dymension',
      tx_page: 'https://mainnet.whispernode.com/dymension/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/dymension',
      tx_page: 'https://explorer.mainnet.dteam.tech/dymension/tx/${txHash}',
      account_page: 'https://explorer.mainnet.dteam.tech/dymension/account/${accountAddress}'
    }
  ]
} as const satisfies Chain;
export default info;