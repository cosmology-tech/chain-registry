import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'archway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://archway.io/',
  pretty_name: 'Archway',
  chain_type: 'cosmos',
  chain_id: 'archway-1',
  bech32_prefix: 'archway',
  daemon_name: 'archwayd',
  node_home: '$HOME/.archway',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aarch',
        fixed_min_gas_price: 140000000000,
        low_gas_price: 196000000000,
        average_gas_price: 225400000000,
        high_gas_price: 254800000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aarch'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.11',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
  },
  description: 'An incentivized L1 blockchain that allows developers to capture the value their dapps create, enabling sustainable economic models.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.archway.io',
        provider: 'Archway Foundation'
      },
      {
        address: 'https://archway-mainnet-archive.allthatnode.com:26657',
        provider: 'All That Node'
      },
      {
        address: 'https://m-archway.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://rpc-1.archway.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://archway.rpc.silknodes.io/',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://archway.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-archway.cryptech.com.ua',
        provider: 'cryptech'
      },
      {
        address: 'https://rpc.archway.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-archway.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://archway-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://m-archway.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/archway',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-archway.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-archway.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc.archway.lgns.net',
        provider: 'Luganodes'
      },
      {
        address: 'https://archway-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://archway-rpc.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://archway-mainnet.rpc.l0vd.com',
        provider: 'L0vd.com'
      },
      {
        address: 'https://archway-rpc.openbitlab.com',
        provider: 'openbitlab'
      },
      {
        address: 'https://rpc-archway.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc-archway.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc.archway.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://archway-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.archway.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc-archway.luckyfriday.io/',
        provider: 'GlobalStake'
      },
      {
        address: 'https://archway-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.mainnet.archway.io',
        provider: 'Archway Foundation'
      },
      {
        address: 'https://archway-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://m-archway.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://api-1.archway.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://archway.api.silknodes.io/',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://archway.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-archway.cryptech.com.ua',
        provider: 'cryptech'
      },
      {
        address: 'https://api.archway.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rest-archway.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://rest.lavenderfive.com:443/archway',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-archway.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-archway.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://rest.archway.lgns.net',
        provider: 'Luganodes'
      },
      {
        address: 'https://archway-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://archway-rest.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://archway-mainnet.api.l0vd.com',
        provider: 'L0vd.com'
      },
      {
        address: 'https://archway-api.openbitlab.com',
        provider: 'openbitlab'
      },
      {
        address: 'https://api-archway.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://api.archway.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://archway-mainnet-archive.allthatnode.com:1317',
        provider: 'All That Node'
      },
      {
        address: 'https://archway-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://archway-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.archway.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://archway-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc.mainnet.archway.io:443',
        provider: 'Archway Foundation'
      },
      {
        address: 'grpc-1.archway.nodes.guru:10690',
        provider: 'Nodes.Guru'
      },
      {
        address: 'archway.grpc.kjnodes.com:15690',
        provider: 'kjnodes'
      },
      {
        address: 'https://grpc-archway.cryptech.com.ua',
        provider: 'cryptech'
      },
      {
        address: 'https://grpc.archway.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-archway.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'archway.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'archway.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc-archway.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc-archway.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc.archway.lgns.net:443',
        provider: 'Luganodes'
      },
      {
        address: 'archway-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'archway-grpc.huginn.tech:4090',
        provider: 'Huginn'
      },
      {
        address: 'archway-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com'
      },
      {
        address: 'archway-grpc.openbitlab.com:443',
        provider: 'openbitlab'
      },
      {
        address: 'grpc-archway.mainnet.validatrium.club:27490',
        provider: 'Validatrium'
      },
      {
        address: 'grpc.archway.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'grpc-archway-mainnet.testnet-pride.com:9096',
        provider: 'TestnetPride'
      },
      {
        address: 'archway-grpc.tienthuattoan.ventures:9290',
        provider: 'TienThuatToan'
      },
      {
        address: 'archway-grpc.stakeandrelax.net:11590',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.archway.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'archway-grpc.noders.services:13090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://archway.explorers.guru/',
      tx_page: 'https://archway.explorers.guru/transaction/${txHash}',
      account_page: 'https://archway.explorers.guru/account/${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/archway',
      tx_page: 'https://exp.utsa.tech/archway/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/archway/account/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/archway/',
      tx_page: 'https://mintscan.io/archway/transactions/${txHash}',
      account_page: 'https://mintscan.io/archway/accounts/${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/archway',
      tx_page: 'https://explorer.silknodes.io/archway/tx/${txHash}',
      account_page: 'https://explorer.silknodes.io/archway/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/archway/',
      tx_page: 'https://explorer.nodestake.top/archway/txs/${txHash}',
      account_page: 'https://explorer.nodestake.top/archway/account/${accountAddress}'
    },
    {
      kind: 'Exploreme',
      url: 'https://archway.exploreme.pro/',
      tx_page: 'https://archway.exploreme.pro/transaction/${txHash}',
      account_page: 'https://archway.exploreme.pro/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/archway',
      tx_page: 'https://ping.pub/archway/tx/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/archway',
      tx_page: 'https://ezstaking.app/archway/txs/${txHash}',
      account_page: 'https://ezstaking.app/archway/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/archway',
      tx_page: 'https://mainnet.whispernode.com/archway/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/archway/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
      theme: {
        primary_color_hex: '#fc4c04'
      }
    }]
};
export default info;