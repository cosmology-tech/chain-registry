import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terra2',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.terra.money/',
  prettyName: 'Terra',
  chainType: 'cosmos',
  chainId: 'phoenix-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/terra-money/core/',
    recommendedVersion: 'v2.12.4',
    compatibleVersions: ['v2.12.4'],
    binaries: {
      "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.12.4/terra_2.12.4_Linux_arm64.tar.gz',
      "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.12.4/terra_2.12.4_Linux_x86_64.tar.gz'
    },
    genesis: {
      name: 'v2.0',
      genesisUrl: 'https://tfl-phoenix-1.s3.amazonaws.com/genesis.json'
    },
    versions: [
      {
        name: 'v2.0',
        tag: 'v2.0.1',
        recommendedVersion: 'v2.0.1',
        cosmosSdkVersion: '0.45.4',
        consensus: {
          type: 'tendermint',
          version: '0.34.19'
        },
        height: 1,
        nextVersionName: 'v2.1',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:eae23aad59b36ea2adaa541a7662a6119569279d2e6c4013e3deee96e9263b30',
          "darwin/amd64": 'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Darwin_x86_64.tar.gz?checksum=sha256:c2a6b1bff922b127a31757bdb0c8f05a34f3b1f879dee1e862f9f8b748e15a54'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45.4'
        },
        cosmwasm: {
          version: '0.27.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '3.0.0'
        }
      },
      {
        name: 'v2.1',
        tag: 'v2.1.4',
        recommendedVersion: 'v2.1.4',
        cosmosSdkVersion: '0.46.9',
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        height: 890000,
        nextVersionName: 'v2.2',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Linux_x86_64.tar.gz?checksum=sha256:e05b85ae2eac5df886f4f9d0ecf719b82ebe4da4fc59cae93a34af7c3e89ddfb',
          "darwin/amd64": 'https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Darwin_x86_64.tar.gz?checksum=sha256:4b66ebf800cb903f7b6c07686636eff43e686f5956c9fadc307f077afd7f23bb'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.9'
        },
        cosmwasm: {
          version: '0.27.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '3.0.0'
        }
      },
      {
        name: 'v2.2',
        tag: 'v2.2.1',
        height: 2979805,
        recommendedVersion: 'v2.2.1',
        compatibleVersions: ['v2.2.0', 'v2.2.1'],
        cosmosSdkVersion: 'v0.46.11',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21'
        },
        nextVersionName: 'v2.3',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.46.11'
        },
        cosmwasm: {
          version: 'v0.27.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v3.4.0'
        }
      },
      {
        name: 'v2.3',
        tag: 'v2.3.5',
        height: 4711800,
        recommendedVersion: 'v2.3.5',
        compatibleVersions: [
          'v2.3.0',
          'v2.3.1',
          'v2.3.2',
          'v2.3.4',
          'v2.3.5'
        ],
        cosmosSdkVersion: 'v0.46.11',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.27'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_arm64.tar.gz?checksum=sha256:93b0c508e16f779b93f0e76629ab247ddaf5fa0db96573405b3b2b11e3eb6859',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_x86_64.tar.gz?checksum=sha256:8c3ac7392436b102dcdd63fd275fa73b1e0201e65e420af71954782cee682ac6'
        },
        nextVersionName: 'v2.4',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.11'
        },
        cosmwasm: {
          version: 'v0.30.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      },
      {
        name: 'v2.4',
        tag: 'v2.4.1',
        proposal: 4737,
        height: 5994365,
        cosmosSdkVersion: 'v0.46.11',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.27'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.5',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.11'
        },
        cosmwasm: {
          version: 'v0.30.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      },
      {
        name: 'v2.5',
        tag: 'v2.5.2',
        proposal: 4785,
        height: 7316000,
        cosmosSdkVersion: 'v0.47.5-terra.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.6',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-terra.2'
        },
        cosmwasm: {
          version: 'v0.41.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v2.6',
        tag: 'v2.6.4',
        recommendedVersion: 'v2.6.4',
        compatibleVersions: ['v2.6.3', 'v2.6.4'],
        proposal: 4792,
        height: 7722000,
        cosmosSdkVersion: 'v0.47.5-terra.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.6.4/terra_2.6.4_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.6.4/terra_2.6.4_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.9',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-terra.2'
        },
        cosmwasm: {
          version: 'v0.43.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v2.9',
        tag: 'v2.9.3',
        recommendedVersion: 'v2.9.4',
        compatibleVersions: ['v2.9.4'],
        proposal: 4798,
        height: 8782000,
        cosmosSdkVersion: 'v0.47.5-terra.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.9.4/terra_2.9.4_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.9.4/terra_2.9.4_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.10',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-terra.2'
        },
        cosmwasm: {
          version: 'v0.43.0',
          enabled: true,
          tag: 'v0.43.0-terra'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v2.10',
        tag: 'v2.10.4',
        recommendedVersion: 'v2.10.5',
        compatibleVersions: ['v2.10.4', 'v2.10.5'],
        proposal: 4805,
        height: 9444000,
        cosmosSdkVersion: 'v0.47.5-terra.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.10.5/terra_2.10.5_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.10.5/terra_2.10.5_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.11',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-terra.2'
        },
        cosmwasm: {
          version: 'v0.43.0',
          enabled: true,
          tag: 'v0.43.0-terra'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v2.11',
        tag: 'v2.11.8',
        recommendedVersion: 'v2.11.8',
        compatibleVersions: ['v2.11.8'],
        proposal: 4807,
        height: 10136000,
        cosmosSdkVersion: 'terra-money/cosmos-sdk v0.47.6-terra.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.11.8/terra_2.11.8_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.11.8/terra_2.11.8_Linux_x86_64.tar.gz'
        },
        nextVersionName: 'v2.12',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/terra-money/cosmos-sdk',
          version: 'v0.47.6',
          tag: 'v0.47.6-terra.0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/terra-money/ibc-go',
          version: 'v7.3.1',
          tag: 'v7.3.1-terra.0'
        }
      },
      {
        name: 'v2.12',
        tag: 'v2.12.4',
        recommendedVersion: 'v2.12.4',
        compatibleVersions: ['v2.12.4'],
        proposal: 4818,
        height: 11860000,
        cosmosSdkVersion: 'v0.47.6-terra.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/arm64": 'https://github.com/terra-money/core/releases/download/v2.12.4/terra_2.12.4_Linux_arm64.tar.gz',
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.12.4/terra_2.12.4_Linux_x86_64.tar.gz'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/terra-money/cosmos-sdk',
          version: 'v0.47.6',
          tag: 'v0.47.6-terra.0'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          repo: 'https://github.com/terra-money/ibc-go',
          version: 'v7.3.1',
          tag: 'v7.3.1-terra.0'
        }
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
  },
  description: 'Fueled by a passionate community and deep developer talent pool, the Terra blockchain is built to enable the next generation of Web3 products and services.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/terra2',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://terra-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://terra-rpc.stakely.io:443/',
        provider: 'stakely'
      },
      {
        address: 'https://phoenix-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://terra-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://rpc-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-phoenix-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://terra.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-rpc.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      }
    ],
    rest: [
      {
        address: 'https://lcd-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://phoenix-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://api-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://api-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra-phoenix-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://terra-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-api.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      }
    ],
    grpc: [
      {
        address: 'terra2.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'terra-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      },
      {
        address: 'terra-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'terra-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'grpc-terra.cosmos-spaces.cloud:2690',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-terra-01.stakeflow.io:1102',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra2.tdrsys.com:2083',
        provider: 'TdrSys'
      }
    ]
  },
  explorers: [
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra2',
      txPage: 'https://atomscan.com/terra2/transactions/${txHash}',
      accountPage: 'https://atomscan.com/terra2/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/terra2',
      txPage: 'https://staking-explorer.com/transaction.php?chain=terra2&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=terra2&addr=${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'http://finder.terra.money/',
      txPage: 'https://finder.terra.money/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terra.money/mainnet/address/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/terra',
      accountPage: 'https://stakeflow.io/terra/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/terra',
      txPage: 'https://www.mintscan.io/terra/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/terra/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
      theme: {
        primaryColorHex: '#f4de6f'
      }
    }]
};
export default info;