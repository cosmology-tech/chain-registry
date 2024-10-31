import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terra',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Terra Classic',
  chainType: 'cosmos',
  chainId: 'columbus-5',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [
      {
        denom: 'uluna',
        lowGasPrice: 28.325,
        averageGasPrice: 28.325,
        highGasPrice: 50
      },
      {
        denom: 'usdr',
        lowGasPrice: 0.52469,
        averageGasPrice: 0.52469,
        highGasPrice: 0.52469
      },
      {
        denom: 'uusd',
        lowGasPrice: 0.75,
        averageGasPrice: 0.75,
        highGasPrice: 0.75
      },
      {
        denom: 'ukrw',
        lowGasPrice: 850,
        averageGasPrice: 850,
        highGasPrice: 850
      },
      {
        denom: 'umnt',
        lowGasPrice: 2142.855,
        averageGasPrice: 2142.855,
        highGasPrice: 2142.855
      },
      {
        denom: 'ueur',
        lowGasPrice: 0.625,
        averageGasPrice: 0.625,
        highGasPrice: 0.625
      },
      {
        denom: 'ucny',
        lowGasPrice: 4.9,
        averageGasPrice: 4.9,
        highGasPrice: 4.9
      },
      {
        denom: 'ujpy',
        lowGasPrice: 81.85,
        averageGasPrice: 81.85,
        highGasPrice: 81.85
      },
      {
        denom: 'ugbp',
        lowGasPrice: 0.55,
        averageGasPrice: 0.55,
        highGasPrice: 0.55
      },
      {
        denom: 'uinr',
        lowGasPrice: 54.4,
        averageGasPrice: 54.4,
        highGasPrice: 54.4
      },
      {
        denom: 'ucad',
        lowGasPrice: 0.95,
        averageGasPrice: 0.95,
        highGasPrice: 0.95
      },
      {
        denom: 'uchf',
        lowGasPrice: 0.7,
        averageGasPrice: 0.7,
        highGasPrice: 0.7
      },
      {
        denom: 'uaud',
        lowGasPrice: 0.95,
        averageGasPrice: 0.95,
        highGasPrice: 0.95
      },
      {
        denom: 'usgd',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'uthb',
        lowGasPrice: 23.1,
        averageGasPrice: 23.1,
        highGasPrice: 23.1
      },
      {
        denom: 'usek',
        lowGasPrice: 6.25,
        averageGasPrice: 6.25,
        highGasPrice: 6.25
      },
      {
        denom: 'unok',
        lowGasPrice: 6.25,
        averageGasPrice: 6.25,
        highGasPrice: 6.25
      },
      {
        denom: 'udkk',
        lowGasPrice: 4.5,
        averageGasPrice: 4.5,
        highGasPrice: 4.5
      },
      {
        denom: 'uidr',
        lowGasPrice: 10900,
        averageGasPrice: 10900,
        highGasPrice: 10900
      },
      {
        denom: 'uphp',
        lowGasPrice: 38,
        averageGasPrice: 38,
        highGasPrice: 38
      },
      {
        denom: 'uhkd',
        lowGasPrice: 5.85,
        averageGasPrice: 5.85,
        highGasPrice: 5.85
      },
      {
        denom: 'umyr',
        lowGasPrice: 3,
        averageGasPrice: 3,
        highGasPrice: 3
      },
      {
        denom: 'utwd',
        lowGasPrice: 20,
        averageGasPrice: 20,
        highGasPrice: 20
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/classic-terra/core',
    recommendedVersion: 'v2.1.1',
    compatibleVersions: ['v2.1.1'],
    genesis: {
      name: '1.0.5',
      genesisUrl: 'https://tfl-columbus-5.s3.amazonaws.com/genesis.json'
    },
    versions: [
      {
        name: '1.0.5',
        tag: 'v1.0.5-full-archive',
        height: 0,
        nextVersionName: '1.1.0',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/classic-core/releases/download/v1.0.5-full-archive/terra_1.0.5_Linux_x86_64.tar.gz?checksum=sha256:af3ee3bd99bd719d6d9a93a40af9f0bc49bb3866c68e923e284876784126f38c'
        }
      },
      {
        name: '1.1.0',
        tag: 'v1.1.0',
        height: 11734000,
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        nextVersionName: '2.0.1',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/classic-core/releases/download/v1.1.0/terra_1.1.0_Linux_x86_64.tar.gz?checksum=sha256:fd83c14bcfadea36ad444c219ab557b9d65d2f74be0684498a5c41e3df7cb535'
        }
      },
      {
        name: '2.0.1',
        tag: 'v2.0.1',
        height: 12815210,
        cosmosSdkVersion: '0.45.13',
        consensus: {
          type: 'tendermint',
          version: '0.34.24'
        },
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/classic-core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:b9edfd51080c9c9ae16b30afd1b8490d7278e51d521ccc0f2afcbb7e3b389b8d'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45.13'
        },
        cosmwasm: {
          version: '0.16.7',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '1.3.1'
        }
      },
      {
        name: '2.1.1',
        tag: 'v2.1.1',
        height: 13215800,
        cosmosSdkVersion: '0.45.14',
        consensus: {
          type: 'tendermint',
          version: '0.34.24'
        },
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/classic-core/releases/download/v2.1.1/terra_2.1.1_Linux_x86_64.tar.gz?checksum=sha256:9bf91be244af95f1afcf7fc1ddb1852aa96651adf94e9668c16c7df5596100d6'
        },
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
          version: '4.3.1'
        }
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://terra-classic-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://terraclassic-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://terraclassic-rpc-server-01.stakely.io',
        provider: 'Stakely'
      }
    ],
    rest: [
      {
        address: 'https://terra-classic-lcd.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://terraclassic-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://terraclassic-lcd-server-01.stakely.io',
        provider: 'Stakely'
      }
    ],
    grpc: [
      {
        address: 'grpc.terrarebels.net',
        provider: 'Terra Rebels'
      },
      {
        address: 'terra-classic-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-terra-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'terraclassic-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/terra',
      txPage: 'https://ezstaking.app/terra/txs/${txHash}',
      accountPage: 'https://ezstaking.app/terra/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terra-luna',
      txPage: 'https://ping.pub/terra-luna/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra',
      txPage: 'https://atomscan.com/terra/transactions/${txHash}',
      accountPage: 'https://atomscan.com/terra/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/terra',
      txPage: 'https://staking-explorer.com/transaction.php?chain=terra&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=terra&addr=${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'https://finder.terra.money/classic',
      txPage: 'https://finder.terra.money/classic/tx/${txHash}',
      accountPage: 'https://finder.terra.money/classic/address/${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'https://finder.terrarebels.net/classic',
      txPage: 'https://finder.terrarebels.net/classic/tx/${txHash}',
      accountPage: 'https://finder.terrarebels.net/classic/address/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
      theme: {
        primaryColorHex: '#fcdb5b'
      }
    }]
};
export default info;