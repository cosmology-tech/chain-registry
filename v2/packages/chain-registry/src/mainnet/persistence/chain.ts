import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'persistence',
  chainType: 'cosmos',
  chainId: 'core-1',
  prettyName: 'Persistence',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://persistence.one/',
  bech32Prefix: 'persistence',
  daemonName: 'persistenceCore',
  nodeHome: '$HOME/.persistenceCore',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  alternativeSlip44s: [750],
  fees: {
    feeTokens: [{
        denom: 'uxprt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxprt'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/persistenceOne/persistenceCore',
    recommendedVersion: 'v11.14.0',
    compatibleVersions: ['v11.14.0'],
    cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    binaries: {
      "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.14.0/persistenceCore-v11.14.0-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json'
    },
    versions: [
      {
        name: 'v7',
        tag: 'v7.0.0',
        recommendedVersion: 'v7.0.0',
        compatibleVersions: ['v7.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v8'
      },
      {
        name: 'v8',
        tag: 'v8.1.0',
        height: 13046600,
        proposal: 42,
        recommendedVersion: 'v8.1.0',
        compatibleVersions: ['v8.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v8.1.0/persistenceCore-v8.1.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v9'
      },
      {
        name: 'v9',
        tag: 'v9.2.1',
        height: 13160000,
        proposal: 43,
        recommendedVersion: 'v9.2.1',
        compatibleVersions: [
          'v9.1.1',
          'v9.1.0',
          'v9.2.1'
        ],
        cosmosSdkVersion: 'v0.47.3-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v9.2.1/persistenceCore-v9.2.1-linux-amd64.tar.gz'
        },
        nextVersionName: 'v10',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm'
        },
        cosmwasm: {
          version: 'v0.40.2',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true,
          tag: 'v0.40.2-lsm3'
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0',
          icsEnabled: ['ics20-1', 'ics27-1'],
          tag: 'v7.2.0-lsm3'
        }
      },
      {
        name: 'v10',
        tag: 'v10.0.0',
        height: 13870350,
        proposal: 55,
        recommendedVersion: 'v10.0.0',
        compatibleVersions: ['v10.0.0'],
        cosmosSdkVersion: 'v0.47.3-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v10.0.0/persistenceCore-v10.0.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v10.3.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm'
        },
        cosmwasm: {
          version: 'v0.47.3',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true,
          tag: 'v0.47.3-lsm5'
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0',
          icsEnabled: ['ics20-1', 'ics27-1'],
          tag: 'v7.2.0-lsm3'
        }
      },
      {
        name: 'v10.3.0',
        tag: 'v10.3.0',
        proposal: 67,
        height: 14965000,
        recommendedVersion: 'v10.3.0',
        compatibleVersions: ['v10.3.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.3-lsm5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v10.3.0/persistenceCore-v10.3.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v10.4.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm5'
        },
        cosmwasm: {
          version: 'v0.40.2',
          repo: 'https://github.com/persistenceOne/wasmd',
          tag: 'v0.40.2-lsm3',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/persistenceOne/ibc-go',
          version: 'v7.2.0',
          tag: 'v7.2.0-lsm3',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v10.4.0',
        tag: 'v10.4.0',
        proposal: 68,
        height: 15242222,
        recommendedVersion: 'v10.4.0',
        compatibleVersions: ['v10.4.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.3-lsm5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v10.4.0/persistenceCore-v10.4.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v10.4.1',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm5'
        },
        cosmwasm: {
          version: 'v0.40.2',
          repo: 'https://github.com/persistenceOne/wasmd',
          tag: 'v0.40.2-lsm3',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/persistenceOne/ibc-go',
          version: 'v7.2.0',
          tag: 'v7.2.0-lsm3',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v10.4.1',
        tag: 'v10.5.0',
        proposal: 76,
        height: 15386200,
        recommendedVersion: 'v10.5.0',
        compatibleVersions: ['v10.5.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.3-lsm5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v10.5.0/persistenceCore-v10.5.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm5'
        },
        cosmwasm: {
          version: 'v0.40.2',
          repo: 'https://github.com/persistenceOne/wasmd',
          tag: 'v0.40.2-lsm3',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/persistenceOne/ibc-go',
          version: 'v7.2.0',
          tag: 'v7.2.0-lsm3',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11',
        tag: 'v11.8.1',
        proposal: 84,
        height: 15860600,
        recommendedVersion: 'v11.8.1',
        compatibleVersions: ['v11.8.1'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.3-lsm5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.8.1/persistenceCore-v11.8.1-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.9.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.3',
          tag: 'v0.47.3-lsm5'
        },
        cosmwasm: {
          version: 'v0.40.2',
          repo: 'https://github.com/persistenceOne/wasmd',
          tag: 'v0.40.2-lsm3',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/persistenceOne/ibc-go',
          version: 'v7.2.0',
          tag: 'v7.2.0-lsm3',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.9.0',
        tag: 'v11.9.0',
        proposal: 90,
        height: 16250000,
        recommendedVersion: 'v11.9.0',
        compatibleVersions: ['v11.9.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.9.0/persistenceCore-v11.9.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.10.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.10.0',
        tag: 'v11.10.0',
        proposal: 96,
        height: 16392000,
        recommendedVersion: 'v11.10.0',
        compatibleVersions: ['v11.10.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.10.0/persistenceCore-v11.10.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.11.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.11.0',
        tag: 'v11.11.0',
        proposal: 100,
        height: 16578000,
        recommendedVersion: 'v11.11.0',
        compatibleVersions: ['v11.11.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.11.0/persistenceCore-v11.11.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.12.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.12.0',
        tag: 'v11.12.0',
        proposal: 105,
        height: 16851000,
        recommendedVersion: 'v11.12.0',
        compatibleVersions: ['v11.12.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.12.0/persistenceCore-v11.12.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.13.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.13.0',
        tag: 'v11.13.0',
        proposal: 108,
        height: 16980000,
        recommendedVersion: 'v11.13.0',
        compatibleVersions: ['v11.13.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.13.0/persistenceCore-v11.13.0-linux-amd64.tar.gz'
        },
        nextVersionName: 'v11.14.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v11.14.0',
        tag: 'v11.14.0',
        proposal: 112,
        height: 17453500,
        recommendedVersion: 'v11.14.0',
        compatibleVersions: ['v11.14.0'],
        cosmosSdkVersion: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.14.0/persistenceCore-v11.14.0-linux-amd64.tar.gz'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/persistenceOne/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-lsm-rc0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.persistenceCore/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/persistenceOne/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-lsm-rc0'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: 'v0.45.0',
      path: '$HOME/.persistenceCore/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
  },
  description: 'Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://rpc-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistence-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-rpc.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rpc.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://rpc-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-rpc.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    rest: [
      {
        address: 'https://rest.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://api-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rest-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://persistence-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-lcd.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rest.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://api-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rest.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-api.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    grpc: [
      {
        address: 'grpc.core.persistence.one:443',
        provider: 'Persistence'
      },
      {
        address: 'grpc-persistent-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'persistence.grpc.m.stavr.tech:410',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'persistence-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      },
      {
        address: 'persistence-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.persistence.posthuman.digital:80',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'grpc-persistence.cosmos-spaces.cloud:1180',
        provider: 'Cosmos Spaces'
      },
      {
        address: '141.95.33.97:9090',
        provider: 'Stakewolle.com | Auto-compound'
      },
      {
        address: 'grpc-persistence-01.stakeflow.io:49090',
        provider: 'Stakeflow'
      },
      {
        address: 'persistence-grpc.w3coins.io:15490',
        provider: 'w3coins'
      },
      {
        address: 'persistence-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'persistence-grpc.stakeandrelax.net:15490',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://xprt-grpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'persistence-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/persistence',
      txPage: 'https://www.mintscan.io/persistence/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/persistence',
      txPage: 'https://ezstaking.app/persistence/txs/${txHash}',
      accountPage: 'https://ezstaking.app/persistence/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/persistence',
      txPage: 'https://ping.pub/persistence/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Persistence-Mainnet',
      txPage: 'https://explorer.stavr.tech/Persistence-Mainnet/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/persistence',
      txPage: 'https://staking-explorer.com/transaction.php?chain=persistence&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=persistence&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/persistence',
      txPage: 'https://atomscan.com/persistence/transactions/${txHash}',
      accountPage: 'https://atomscan.com/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/persistence',
      accountPage: 'https://stakeflow.io/persistence/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
      theme: {
        primaryColorHex: '#242424'
      }
    }]
};
export default info;