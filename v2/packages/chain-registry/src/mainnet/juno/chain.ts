import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'juno',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.junonetwork.io/',
  prettyName: 'Juno',
  chainType: 'cosmos',
  chainId: 'juno-1',
  bech32Prefix: 'juno',
  daemonName: 'junod',
  nodeHome: '$HOME/.juno',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujuno',
        fixedMinGasPrice: 0.075,
        lowGasPrice: 0.075,
        averageGasPrice: 0.1,
        highGasPrice: 0.125
      }, {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixedMinGasPrice: 0.003,
        lowGasPrice: 0.003,
        averageGasPrice: 0.0035,
        highGasPrice: 0.004
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujuno'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/CosmosContracts/juno',
    recommendedVersion: 'v24.0.0',
    compatibleVersions: ['v24.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v24.0.0/junod'
    },
    cosmosSdkVersion: 'v0.47.12',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.8'
    },
    cosmwasmVersion: 'v0.46.0',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
    },
    versions: [
      {
        name: 'v13',
        proposal: 271,
        height: 7374801,
        recommendedVersion: 'v13.0.0',
        compatibleVersions: ['v13.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v13.0.0/junod'
        },
        cosmosSdkVersion: '0.45.14',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26',
          repo: 'https://github.com/informalsystems/tendermint'
        },
        cosmwasmVersion: '0.30.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v14',
        sdk: {
          type: 'cosmos',
          version: '0.45.14'
        },
        cosmwasm: {
          version: '0.30.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v4.3.0'
        }
      },
      {
        name: 'v14',
        proposal: 282,
        height: 7875721,
        recommendedVersion: 'v14.1.0',
        compatibleVersions: ['v14.0.0', 'v14.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v14.1.0/junod'
        },
        cosmosSdkVersion: '0.45.15',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
          tag: 'v0.34.27-mev.18'
        },
        cosmwasmVersion: '0.31.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v15',
        sdk: {
          type: 'cosmos',
          version: '0.45.15'
        },
        cosmwasm: {
          version: '0.31.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v4.3.0'
        }
      },
      {
        name: 'v15',
        proposal: 295,
        height: 8577241,
        recommendedVersion: 'v15.0.0',
        compatibleVersions: ['v15.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v15.0.0/junod'
        },
        cosmosSdkVersion: '0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
          tag: 'v0.34.27-mev.18'
        },
        cosmwasmVersion: '0.31.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v16',
        sdk: {
          type: 'cosmos',
          version: '0.45.16'
        },
        cosmwasm: {
          version: '0.31.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v4.3.1'
        }
      },
      {
        name: 'v16',
        proposal: 311,
        height: 9481382,
        recommendedVersion: 'v16.0.2',
        compatibleVersions: ['v16.0.0', 'v16.0.2'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v16.0.2/junod'
        },
        cosmosSdkVersion: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasmVersion: '0.40.2',
        cosmwasmEnabled: true,
        nextVersionName: 'v17',
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        cosmwasm: {
          version: '0.40.2',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v17',
        proposal: 317,
        height: 10078449,
        recommendedVersion: 'v17.1.1',
        compatibleVersions: ['v17.0.0', 'v17.1.1'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v17.1.1/junod'
        },
        cosmosSdkVersion: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasmVersion: '0.41.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v18',
        sdk: {
          type: 'cosmos',
          version: '0.47.5'
        },
        cosmwasm: {
          version: '0.41.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v18',
        proposal: 325,
        height: 12265007,
        recommendedVersion: 'v18.1.0',
        compatibleVersions: ['v18.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v18.1.0/junod'
        },
        cosmosSdkVersion: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasmVersion: '0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v19',
        sdk: {
          type: 'cosmos',
          version: '0.47.5'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v19',
        proposal: 333,
        height: 13678871,
        recommendedVersion: 'v20.0.0',
        compatibleVersions: ['v20.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v20.0.0/junod'
        },
        cosmosSdkVersion: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v21',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.6'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v21',
        proposal: 340,
        height: 14556500,
        recommendedVersion: 'v21.0.1',
        compatibleVersions: ['v21.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/kintsugi-tech/juno/releases/download/v21.0.1/junod'
        },
        cosmosSdkVersion: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v22',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.6'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v22',
        proposal: 347,
        height: 15873890,
        recommendedVersion: 'v22.0.1',
        compatibleVersions: ['v22.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v22.0.1/junod'
        },
        cosmosSdkVersion: 'v0.47.11-0.20240417094812-f556fd956fb1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v23',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11',
          tag: 'v0.47.11-0.20240417094812-f556fd956fb1'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v23',
        proposal: 352,
        height: 18032000,
        recommendedVersion: 'v23.1.0',
        compatibleVersions: ['v23.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v23.1.0/junod'
        },
        cosmosSdkVersion: 'v0.47.12',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.8'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v24',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.12'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        }
      },
      {
        name: 'v24',
        proposal: 354,
        height: 19022500,
        recommendedVersion: 'v24.0.0',
        compatibleVersions: ['v24.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v24.0.0/junod'
        },
        cosmosSdkVersion: 'v0.47.12',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.8'
        },
        cosmwasmVersion: 'v0.46.0',
        cosmwasmEnabled: true,
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.12'
        },
        cosmwasm: {
          version: 'v0.46.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.12'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.46.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
  },
  description: 'Juno is a completely community owned and operated smart contract platform.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'http://juno.rpc.m.stavr.tech:1067',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/juno',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://juno-rpc.icycro.org',
        provider: 'IcyCRO 🧊'
      },
      {
        address: 'https://rpc.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-rpc.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc-juno.mainnet.validatrium.club:443',
        provider: 'Validatrium'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.juno.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://juno-rpc.cogwheel.zone',
        provider: 'Cogwheel'
      },
      {
        address: 'https://juno.declab.pro:26610',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://juno.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    rest: [
      {
        address: 'https://lcd-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/juno',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno-rest.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://api-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://lcd-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api.juno.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://lcd.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://juno-api.cogwheel.zone',
        provider: 'Cogwheel'
      },
      {
        address: 'https://juno.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://juno.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    grpc: [
      {
        address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'juno.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      },
      {
        address: 'http://juno.grpc.m.stavr.tech:504',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://juno-grpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      },
      {
        address: 'grpc-juno.cosmos-spaces.cloud:4830',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'grpc-juno.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'juno-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://167.235.211.168:9091',
        provider: 'CommunityStaking'
      },
      {
        address: 'grpc-juno-01.stakeflow.io:2302',
        provider: 'Stakeflow'
      },
      {
        address: 'juno-grpc.w3coins.io:12690',
        provider: 'w3coins'
      },
      {
        address: 'juno-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'juno-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: '138.201.21.121:24990',
        provider: 'Validatrium'
      },
      {
        address: 'juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.juno.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'juno-grpc.cogwheel.zone:443',
        provider: 'Cogwheel'
      },
      {
        address: 'https://juno.declab.pro:9007',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://juno.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/juno',
      txPage: 'https://ezstaking.app/juno/txs/${txHash}',
      accountPage: 'https://ezstaking.app/juno/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      txPage: 'https://ping.pub/juno/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://juno.explorers.guru',
      txPage: 'https://juno.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/juno',
      txPage: 'https://www.mintscan.io/juno/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/juno/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      txPage: 'https://atomscan.com/juno/transactions/${txHash}',
      accountPage: 'https://atomscan.com/juno/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/juno',
      txPage: 'https://explorer.stavr.tech/juno/transactions/${txHash}',
      accountPage: 'https://explorer.stavr.tech/juno/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/juno',
      txPage: 'https://explorer.tcnetwork.io/juno/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/juno',
      accountPage: 'https://stakeflow.io/juno/accounts/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Juno',
      txPage: 'https://explorer.declab.pro/Juno/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/juno/',
      txPage: 'https://explorer.nodeshub.online/juno/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/juno/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/juno',
      txPage: 'https://mainnet.whispernode.com/juno/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/juno/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
      theme: {
        primaryColorHex: '#fa7b7b'
      }
    }]
};
export default info;