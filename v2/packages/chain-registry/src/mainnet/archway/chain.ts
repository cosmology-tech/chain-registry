import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'archway',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://archway.io/',
  prettyName: 'Archway',
  chainType: 'cosmos',
  chainId: 'archway-1',
  bech32Prefix: 'archway',
  daemonName: 'archwayd',
  nodeHome: '$HOME/.archway',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aarch',
        fixedMinGasPrice: 140000000000,
        lowGasPrice: 196000000000,
        averageGasPrice: 225400000000,
        highGasPrice: 254800000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aarch'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/archway-network/archway',
    recommendedVersion: 'v9.0.0',
    compatibleVersions: ['v9.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/archway-network/archway/releases/download/v9.0.0/archwayd_linux_amd64',
      "linux/arm64": 'https://github.com/archway-network/archway/releases/download/v9.0.0/archwayd_linux_arm64',
      "darwin/amd64": 'https://github.com/archway-network/archway/releases/download/v9.0.0/archwayd_darwin_amd64',
      "darwin/arm64": 'https://github.com/archway-network/archway/releases/download/v9.0.0/archwayd_darwin_arm64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesisUrl: 'https://github.com/archway-network/networks/raw/main/archway/genesis/genesis.json.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.6'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    },
    cosmwasm: {
      version: 'v0.51.0',
      enabled: true
    }
  },
  logoURIs: {
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
      },
      {
        address: 'https://archway-rpc.chainroot.io',
        provider: 'Chainroot'
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
      },
      {
        address: 'https://archway-api.chainroot.io',
        provider: 'Chainroot'
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
      },
      {
        address: 'archway-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://archway.explorers.guru/',
      txPage: 'https://archway.explorers.guru/transaction/${txHash}',
      accountPage: 'https://archway.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/archway',
      txPage: 'https://staking-explorer.com/transaction.php?chain=archway&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=archway&addr=${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/archway',
      txPage: 'https://exp.utsa.tech/archway/tx/${txHash}',
      accountPage: 'https://exp.utsa.tech/archway/account/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/archway/',
      txPage: 'https://mintscan.io/archway/transactions/${txHash}',
      accountPage: 'https://mintscan.io/archway/accounts/${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/archway',
      txPage: 'https://explorer.silknodes.io/archway/tx/${txHash}',
      accountPage: 'https://explorer.silknodes.io/archway/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/archway/',
      txPage: 'https://explorer.nodestake.top/archway/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.top/archway/account/${accountAddress}'
    },
    {
      kind: 'Exploreme',
      url: 'https://archway.exploreme.pro/',
      txPage: 'https://archway.exploreme.pro/transaction/${txHash}',
      accountPage: 'https://archway.exploreme.pro/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/archway',
      txPage: 'https://ping.pub/archway/tx/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/archway',
      txPage: 'https://ezstaking.app/archway/txs/${txHash}',
      accountPage: 'https://ezstaking.app/archway/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/archway',
      txPage: 'https://mainnet.whispernode.com/archway/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/archway/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/archway',
      txPage: 'https://explorer.chainroot.io/archway/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/archway/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
      theme: {
        primaryColorHex: '#fc4c04'
      }
    }]
};
export default info;