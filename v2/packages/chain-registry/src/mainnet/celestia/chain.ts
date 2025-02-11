import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'celestia',
  chainType: 'cosmos',
  chainId: 'celestia',
  prettyName: 'Celestia',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://celestia.org/',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utia'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v3.3.1',
    compatibleVersions: [
      'v3.3.1',
      'v3.3.0',
      'v3.2.0',
      'v3.1.1',
      'v3.0.2',
      'v3.0.1'
    ],
    consensus: {
      type: 'tendermint',
      version: 'v1.45.0',
      repo: 'https://github.com/celestiaorg/celestia-core',
      tag: 'v1.45.0-tm-v0.34.35'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/celestia/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/celestiaorg/cosmos-sdk',
      version: 'v1.27.0',
      tag: 'v1.27.0-sdk-v0.46.16'
    },
    ibc: {
      type: 'go',
      version: 'v6.2.2'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
  },
  description: 'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  apis: {
    rpc: [
      {
        address: 'https://public-celestia-rpc.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://celestia-rpc.mesa.newmetric.xyz',
        provider: 'Newmetric'
      },
      {
        address: 'https://rpc.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://rpc.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/celestia',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-celestia-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:29657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://celestia.rpc.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://celestia-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://celestia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://rpc.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-rpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://rpc-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://rpc.freshstaking.com/celestia',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://celestia.cumulo.org.es/',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.celestia.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://celestia-mainnet-rpc.itrocket.net',
        provider: '🚀 itrocket 🚀'
      },
      {
        address: 'https://rpc.celestia.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://celestia-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      }
    ],
    rest: [
      {
        address: 'https://public-celestia-lcd.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://celestia-rest.mesa.newmetric.xyz',
        provider: 'Newmetric'
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:1617',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://api.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/celestia',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-celestia-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://api-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://celestia.rest.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rest-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://api.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-api.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://celestia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://api-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia.api.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://lcd.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://celestia-mainnet-api.itrocket.net',
        provider: '🚀 itrocket 🚀'
      },
      {
        address: 'https://api.celestia.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://celestia-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'celestia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'celestia.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'celestia.grpc.nodersteam.com:9690',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc-celestia-01.stakeflow.io:15002',
        provider: 'Stakeflow'
      },
      {
        address: 'grpc-celestia.cosmos-spaces.cloud:443',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'celestia.grpc.interchain.validao.xyz:443',
        provider: 'ValiDAO'
      },
      {
        address: 'celestia-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'celestia.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'celestia.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-celestia.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc-celestia.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'grpc.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'celestia-grpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'grpc-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'celestia.grpc.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-grpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'grpc.celestia-app.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'celestia-grpc.noders.services:11090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'celestia-mainnet-grpc.itrocket.net:40090',
        provider: '🚀 itrocket 🚀'
      },
      {
        address: 'grpc.celestia.mainnet.dteam.tech:28090',
        provider: 'DTEAM'
      },
      {
        address: 'http://celestia-grpc.stakeandrelax.net:11690',
        provider: 'Stake&Relax Validator 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia',
      txPage: 'https://mintscan.io/celestia/txs/${txHash}',
      accountPage: 'https://mintscan.io/celestia/address/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/celestia',
      txPage: 'https://staking-explorer.com/transaction.php?chain=celestia&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=celestia&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/celestia/',
      txPage: 'https://explorer.nodestake.org/celestia/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.org/celestia/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/celestia',
      txPage: 'https://stakeflow.io/celestia/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/celestia',
      txPage: 'https://explorer.tcnetwork.io/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/celestia/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Celestia-Mainnet',
      txPage: 'https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'AM Solutions',
      url: 'https://explorer.theamsolutions.info/celestia-main',
      txPage: 'https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}',
      accountPage: 'https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/celestia',
      txPage: 'https://ezstaking.app/celestia/txs/${txHash}',
      accountPage: 'https://ezstaking.app/celestia/account/${accountAddress}'
    },
    {
      kind: '🚀 itrocket 🚀',
      url: 'https://mainnet.itrocket.net/celestia',
      txPage: 'https://mainnet.itrocket.net/celestia/transaction/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/celestia',
      txPage: 'https://explorer.mainnet.dteam.tech/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.mainnet.dteam.tech/celestia/account/${accountAddress}'
    },
    {
      kind: 'Relaxed Explorer 🦥',
      url: 'https://explorer.stakeandrelax.net/celestia',
      txPage: 'https://explorer.stakeandrelax.net/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.stakeandrelax.net/celestia/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
      theme: {
        primaryColorHex: '#7c2cfb'
      }
    }]
};
export default info;