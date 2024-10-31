import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'umee',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.ux.xyz',
  prettyName: 'UX Chain',
  chainType: 'cosmos',
  chainId: 'umee-1',
  bech32Prefix: 'umee',
  daemonName: 'umeed',
  nodeHome: '$HOME/.umee',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uumee',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.12,
        highGasPrice: 0.2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uumee'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/umee-network/umee',
    recommendedVersion: 'v6.3.0',
    compatibleVersions: ['v6.3.0'],
    binaries: {
      "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.3.0/umeed-v6.3.0-linux-amd64.tar.gz'
    },
    cosmosSdkVersion: '0.47',
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      name: 'v1.0.1',
      genesisUrl: 'https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.1',
        tag: 'v1.0.1',
        height: 0,
        nextVersionName: 'v1.1.0',
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-arm64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        ibc: {
          type: 'go',
          version: '2.0.3'
        }
      },
      {
        name: 'v1.1.0',
        tag: 'v1.1.0',
        height: 3023282,
        nextVersionName: 'v1.1-v3.0',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-arm64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        ibc: {
          type: 'go',
          version: '2.0.3'
        }
      },
      {
        name: 'v1.1-v3.0',
        tag: 'v3.0.0',
        height: 3215778,
        nextVersionName: 'v3.1.0',
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-arm64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '5.0.0'
        }
      },
      {
        name: 'v3.1.0',
        tag: 'v3.1.0',
        height: 3623090,
        nextVersionName: 'v3.1-v3.3',
        recommendedVersion: 'v3.1.0',
        compatibleVersions: ['v3.1.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-amd64',
          "linux/arm64": 'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-arm64',
          "darwin/amd64": 'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-arm64'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '5.0.0'
        }
      },
      {
        name: 'v3.1-v3.3',
        tag: 'v3.3.0',
        height: 4513362,
        nextVersionName: 'v4.0',
        recommendedVersion: 'v3.3.0',
        compatibleVersions: ['v3.3.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v3.3.0/umeed-v3.3.0-linux-amd64'
        },
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
        name: 'v4.0',
        tag: 'v4.0.0',
        height: 4949483,
        nextVersionName: 'v4.0.1',
        recommendedVersion: 'v4.0.0',
        compatibleVersions: ['v4.0.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.0.0/umeed-v4.0.0-linux-amd64'
        },
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
        name: 'v4.0.1',
        tag: 'v4.0.1',
        height: 5243631,
        nextVersionName: 'v4.1.0',
        recommendedVersion: 'v4.0.1',
        compatibleVersions: ['v4.0.1'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.0.1/umeed-v4.0.1-linux-amd64'
        },
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
        name: 'v4.1.0',
        tag: 'v4.1.0',
        height: 5433933,
        nextVersionName: 'v4.2',
        recommendedVersion: 'v4.1.0',
        compatibleVersions: ['v4.1.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.1.0/umeed-v4.1.0-linux-amd64'
        },
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
        name: 'v4.2',
        tag: 'v4.2.0',
        height: 5741480,
        nextVersionName: 'v4.3',
        recommendedVersion: 'v4.2.0',
        compatibleVersions: ['v4.2.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.2.0/umeed-v4.2.0-linux-amd64'
        },
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
        name: 'v4.3',
        tag: 'v4.3.0',
        height: 6049552,
        recommendedVersion: 'v4.3.0',
        compatibleVersions: ['v4.3.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.3.0/umeed-v4.3.0-linux-amd64'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.1.0'
        }
      },
      {
        name: 'v4.4',
        tag: 'v4.4.1',
        height: 6547400,
        recommendedVersion: 'v4.4.1',
        compatibleVersions: ['v4.4.1', 'v4.4.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v4.4.0/umeed-v4.4.0-linux-amd64'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.1.0'
        }
      },
      {
        name: 'v5.0',
        tag: 'v5.0.1',
        height: 6986150,
        recommendedVersion: 'v5.0.1',
        compatibleVersions: ['v5.0.1'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v5.0.1/umeed-v5.0.1-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.1.1'
        }
      },
      {
        name: 'v5.1',
        tag: 'v5.1.0',
        height: 7428000,
        recommendedVersion: 'v5.1.0',
        compatibleVersions: ['v5.1.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v5.1.0/umeed-v5.1.0-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v5.2',
        tag: 'v5.2.0',
        height: 8220900,
        recommendedVersion: 'v5.2.0',
        compatibleVersions: ['v5.2.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v5.2.0/umeed-v5.2.0-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v6.0',
        tag: 'v6.0.2',
        height: 8427800,
        recommendedVersion: 'v6.0.2',
        compatibleVersions: ['v6.0.2'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.0.2/umeed-v6.0.2-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v6.1',
        tag: 'v6.1.0',
        height: 8941650,
        recommendedVersion: 'v6.1.0',
        compatibleVersions: ['v6.1.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.1.0/umeed-v6.1.0-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0'
        }
      },
      {
        name: 'v6.2',
        tag: 'v6.2.0',
        height: 9561500,
        recommendedVersion: 'v6.2.0',
        compatibleVersions: ['v6.2.0'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.2.0/umeed-v6.2.0-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.43',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      },
      {
        name: 'v6.3',
        tag: 'v6.3.0',
        height: 10046600,
        recommendedVersion: 'v6.3.0',
        compatibleVersions: ['v6.3.0'],
        cosmosSdkVersion: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        binaries: {
          "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.3.0/umeed-v6.3.0-linux-amd64.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.43',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: '7.3.2'
    },
    cosmwasm: {
      version: '0.43',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://umee-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://umee-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://umee.rpc.m.stavr.tech:10457',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'http://rpc-umee-0.node75.org:26657',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://umee-rpc.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://umee-rpc.tienthuattoan.com',
        provider: 'TTT 🇻🇳'
      },
      {
        address: 'https://rpc-umee-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://umee-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://umee-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://umee.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://umee-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-umee.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-umee.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://umee-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://umee-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://umee-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://umee.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://umee-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://umee-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://umee-lcd.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://umee-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://api-umee-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://umee-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://umee-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://umee.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://umee-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-umee.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-umee.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://umee-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://umee-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://umee-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc-umee-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'umee-grpc.polkachu.com:13690',
        provider: 'Polkachu'
      },
      {
        address: 'umee-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'umee-grpc.quantnode.tech:9090',
        provider: 'QuantNode gRPC'
      },
      {
        address: 'umee.grpc.m.stavr.tech:9090',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'umee-grpc.quantnode.tech:9091',
        provider: 'QuantNode gRPCweb'
      },
      {
        address: 'umee-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan'
      },
      {
        address: 'grpc-umee-01.stakeflow.io:9990',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9020',
        provider: 'Staketab'
      },
      {
        address: 'umee.grpc.kjnodes.com:16290',
        provider: 'kjnodes'
      },
      {
        address: 'umee-grpc.w3coins.io:13690',
        provider: 'w3coins'
      },
      {
        address: 'grpc-umee.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc-umee.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'umee-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'umee.grpc.stakevillage.net:11090',
        provider: 'Stake Village'
      },
      {
        address: 'umee-grpc.noders.services:32090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/umee/',
      txPage: 'https://www.mintscan.io/umee/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/umee',
      txPage: 'https://ping.pub/umee/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/umee',
      txPage: 'https://explorer.stavr.tech/umee/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://umee.explorers.guru',
      txPage: 'https://umee.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/umee',
      txPage: 'https://atomscan.com/umee/transactions/${txHash}',
      accountPage: 'https://atomscan.com/umee/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/umee',
      txPage: 'https://staking-explorer.com/transaction.php?chain=umee&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=umee&addr=${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/umee',
      accountPage: 'https://stakeflow.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/umee',
      txPage: 'https://explorer.stake-take.com/umee/transactions/${txHash}',
      accountPage: 'https://explorer.stake-take.com/umee/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/umee',
      txPage: 'https://exp.stakevillage.net/umee/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/umee/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/umee',
      txPage: 'https://ezstaking.app/umee/txs/${txHash}',
      accountPage: 'https://ezstaking.app/umee/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
      theme: {
        primaryColorHex: '#22f2e9'
      }
    }]
};
export default info;