import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'quicksilver',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://quicksilver.zone/',
  prettyName: 'Quicksilver',
  chainType: 'cosmos',
  chainId: 'quicksilver-2',
  daemonName: 'quicksilverd',
  nodeHome: '$HOME/.quicksilverd',
  bech32Prefix: 'quick',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqck',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqck'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ingenuity-build/quicksilver',
    recommendedVersion: 'v1.6.3',
    compatibleVersions: ['v1.6.3'],
    binaries: {
      "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.6.3/quicksilverd-v1.6.3-amd64'
    },
    cosmosSdkVersion: 'v0.46.16',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.33'
    },
    genesis: {
      genesisUrl: 'https://github.com/ingenuity-build/mainnet/raw/main/genesis.json'
    },
    versions: [
      {
        name: 'v1.2.9-hotfix.0',
        recommendedVersion: 'v1.2.9-hotfix.0',
        compatibleVersions: ['v1.2.9-hotfix.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasmVersion: '0.29',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.2.10',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '5.2.0'
        }
      },
      {
        name: 'v1.2.10',
        height: 1936600,
        recommendedVersion: 'v1.2.10',
        proposal: 13,
        compatibleVersions: ['v1.2.10'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.10/quicksilverd-v1.2.10-amd64'
        },
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasmVersion: '0.29',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.2.13',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '5.2.0'
        }
      },
      {
        name: 'v1.2.13',
        height: 2148751,
        recommendedVersion: 'v1.2.14',
        compatibleVersions: ['v1.2.13', 'v1.2.14'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.14/quicksilverd-v1.2.14-amd64'
        },
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasmVersion: '0.29',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.2.15',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '5.2.1'
        }
      },
      {
        name: 'v1.2.15',
        proposal: 18,
        height: 3052279,
        recommendedVersion: 'v1.2.16',
        compatibleVersions: ['v1.2.15', 'v1.2.16'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.16/quicksilverd-v1.2.16-amd64'
        },
        cosmosSdkVersion: '0.46.14',
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        cosmwasmVersion: '0.29',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.2.17',
        sdk: {
          type: 'cosmos',
          version: '0.46.14'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '5.3.1'
        }
      },
      {
        name: 'v1.2.17',
        proposal: 26,
        height: 4530000,
        recommendedVersion: 'v1.2.17',
        compatibleVersions: ['v1.2.17'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.17/quicksilverd-v1.2.17-amd64'
        },
        cosmosSdkVersion: '0.46.15',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.4.5',
        sdk: {
          type: 'cosmos',
          version: '0.46.15'
        },
        cosmwasm: {
          version: 'v0.29.0',
          enabled: true,
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956'
        },
        ibc: {
          type: 'go',
          version: '5.3.2'
        }
      },
      {
        name: 'v1.4.5',
        proposal: 27,
        height: 5432500,
        recommendedVersion: 'v1.4.5',
        compatibleVersions: ['v1.4.5'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.5/quicksilverd-v1.4.5-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.4.6',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.4.6',
        proposal: 28,
        height: 5493000,
        recommendedVersion: 'v1.4.6',
        compatibleVersions: ['v1.4.6'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.6/quicksilverd-v1.4.6-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.4.7',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.4.7',
        proposal: 30,
        height: 5848000,
        recommendedVersion: 'v1.4.7',
        compatibleVersions: ['v1.4.7'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.7/quicksilverd-v1.4.7-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.5.0',
        proposal: 31,
        height: 6365700,
        recommendedVersion: 'v1.5.0',
        compatibleVersions: ['v1.5.0'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.0/quicksilverd-v1.5.0-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.5.1',
        proposal: 32,
        height: 6452000,
        recommendedVersion: 'v1.5.2',
        compatibleVersions: ['v1.5.1', 'v1.5.2'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.2/quicksilverd-v1.5.2-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.3',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.5.3',
        proposal: 34,
        height: 6556300,
        recommendedVersion: 'v1.5.3',
        compatibleVersions: ['v1.5.3'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.3/quicksilverd-v1.5.3-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.32'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.4',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.5.4',
        proposal: 35,
        height: 6673000,
        recommendedVersion: 'v1.5.4',
        compatibleVersions: ['v1.5.4'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.4/quicksilverd-v1.5.4-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.32'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.5',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.3.2'
        }
      },
      {
        name: 'v1.5.5',
        proposal: 37,
        height: 6926000,
        recommendedVersion: 'v1.5.5',
        compatibleVersions: ['v1.5.5', 'v1.5.5-hotfix.0'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.5/quicksilverd-v1.5.5-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.32'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.5.6',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.4.0'
        }
      },
      {
        name: 'v1.5.6',
        proposal: 40,
        height: 7810000,
        recommendedVersion: 'v1.5.7',
        compatibleVersions: ['v1.5.7'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.7/quicksilverd-v1.5.7-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.32'
        },
        cosmwasmVersion: 'notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
        cosmwasmEnabled: true,
        nextVersionName: 'v1.6.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        cosmwasm: {
          version: 'v0.29.0',
          repo: 'https://github.com/notional-labs/wasmd',
          tag: 'v0.29.0-sdk46.0.20221114145317-d6e67fd50956',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v5.4.0'
        }
      },
      {
        name: 'v1.6.1',
        proposal: 41,
        height: 8003500,
        recommendedVersion: 'v1.6.1',
        compatibleVersions: ['v1.6.1'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.6.1/quicksilverd-v1.6.1-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.33'
        },
        nextVersionName: 'v1.6.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        ibc: {
          type: 'go',
          version: 'v6.3.1'
        }
      },
      {
        name: 'v1.6.2',
        proposal: 42,
        height: 8222500,
        recommendedVersion: 'v1.6.2',
        compatibleVersions: ['v1.6.2'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.6.2/quicksilverd-v1.6.1-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.33'
        },
        nextVersionName: '1.6.3',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        ibc: {
          type: 'go',
          version: 'v6.3.1'
        }
      },
      {
        name: 'v1.6.3',
        proposal: 43,
        height: 8722500,
        recommendedVersion: 'v1.6.3',
        compatibleVersions: ['v1.6.3'],
        binaries: {
          "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.6.3/quicksilverd-v1.6.3-amd64'
        },
        cosmosSdkVersion: 'v0.46.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.33'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.16'
        },
        ibc: {
          type: 'go',
          version: 'v6.3.1'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.46.16'
    },
    ibc: {
      type: 'go',
      version: 'v6.3.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  description: 'Liquid Stake your Cosmos assets with your preferred validator and receive liquid staked assets (qASSETs) that you can use for swapping, pooling, lending, and more, all while your original stake earns staking APY from securing the network.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc.quicksilver.zone:443',
        provider: 'Quicksilver'
      },
      {
        address: 'https://rpc-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/quicksilver',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-quicksilver.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://m-quicksilver.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://quick.rpc.m.stavr.tech:21027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quicksilver-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://quicksilver.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc.quicksilver.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://quicksilver-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://quicksilver-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-quicksilver.mms.team/',
        provider: 'MMS'
      },
      {
        address: 'https://quicksilver-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://rpc.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'https://api-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://rest.lavenderfive.com:443/quicksilver',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-quicksilver.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quicksilver-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://m-quicksilver.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://quick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rest-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://api.quicksilver.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://quicksilver-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://quicksilver-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-quicksilver.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://quicksilver-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://api.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'grpc-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'quicksilver.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'quicksilver.grpc.nodersteam.com:9161',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc-quicksilver.cosmos-spaces.cloud:3300',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'quicksilver-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'quicksilver.grpc.kjnodes.com:11190',
        provider: 'kjnodes'
      },
      {
        address: 'quick.grpc.m.stavr.tech:9113',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-quicksilver.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'archive-grpc-quicksilver.huginn.tech:9090',
        provider: 'Huginn'
      },
      {
        address: 'https://grpc.quicksilver.indonode.net:28090',
        provider: 'Indonode'
      },
      {
        address: 'services.staketab.com:9034',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-grpc.theamsolutions.info:9797',
        provider: 'AM Solutions'
      },
      {
        address: 'quicksilver-grpc.w3coins.io:11190',
        provider: 'w3coins'
      },
      {
        address: 'grpc-quicksilver.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'quicksilver-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'quicksilver-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'mainnet-quicksilver.konsortech.xyz:46090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com:2083',
        provider: 'TdrSys'
      },
      {
        address: 'grpc.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'quicksilver-grpc.noders.services:16090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/quicksilver',
      txPage: 'https://www.mintscan.io/quicksilver/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/quicksilver/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/quicksilver',
      txPage: 'https://ezstaking.app/quicksilver/txs/${txHash}',
      accountPage: 'https://ezstaking.app/quicksilver/account/${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer',
      url: 'https://exp.utsa.tech/quicksilver',
      txPage: 'https://exp.utsa.tech/quicksilver/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 explorer',
      url: 'https://explorer.stavr.tech/quicksilver-mainnet',
      txPage: 'https://explorer.stavr.tech/quicksilver-mainnet/tx/${txHash}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/quicksilver',
      txPage: 'https://explorer.stake-take.com/quicksilver/tx/${txHash}'
    },
    {
      kind: 'AM Solutions Explorers',
      url: 'https://explorer.theamsolutions.info/quicksilver-main/staking',
      txPage: 'https://explorer.theamsolutions.info/quicksilver-main/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/quicksilver/staking',
      txPage: 'https://explorer.konsortech.xyz/quicksilver/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg',
      theme: {
        primaryColorHex: '#b2b2b2'
      }
    }]
};
export default info;