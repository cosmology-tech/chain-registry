import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'quasar',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.quasar.fi/',
  prettyName: 'Quasar',
  chainType: 'cosmos',
  chainId: 'quasar-1',
  bech32Prefix: 'quasar',
  daemonName: 'quasard',
  nodeHome: '$HOME/.quasarnode',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uqsr'
      }]
  },
  fees: {
    feeTokens: [
      {
        denom: 'uqsr',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.3
      },
      {
        denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }
    ]
  },
  codebase: {
    gitRepo: 'https://github.com/quasar-finance/quasar',
    recommendedVersion: 'v3.0.0',
    compatibleVersions: ['v3.0.0'],
    cosmosSdkVersion: 'v0.50.9',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.6'
    },
    cosmwasmVersion: 'v0.53.0',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/quasar-finance/networks/main/quasar-1/definitive-genesis.json'
    },
    versions: [
      {
        name: 'v0.1.0',
        recommendedVersion: 'v0.1.1',
        compatibleVersions: ['v0.1.0', 'v0.1.1'],
        cosmosSdkVersion: 'v0.45.14',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26'
        },
        cosmwasmVersion: '0.27',
        cosmwasmEnabled: true,
        nextVersionName: 'v1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.14'
        },
        cosmwasm: {
          version: '0.27',
          enabled: true
        }
      },
      {
        name: 'v1',
        proposal: 9,
        height: 2249500,
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: '0.34.27'
        },
        cosmwasmVersion: '0.31.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v2',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        cosmwasm: {
          version: '0.31.0',
          enabled: true
        }
      },
      {
        name: 'v2',
        proposal: 42,
        height: 7480400,
        recommendedVersion: 'v2.0.1',
        compatibleVersions: ['v2.0.1'],
        cosmosSdkVersion: 'v0.47.12',
        consensus: {
          type: 'cometbft',
          version: '0.37.6'
        },
        cosmwasmVersion: '0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v3',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.12'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        }
      },
      {
        name: 'v3',
        proposal: 45,
        height: 7982200,
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        cosmosSdkVersion: 'v0.50.9',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.11'
        },
        cosmwasmVersion: 'v0.53.0',
        cosmwasmEnabled: true,
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.50.9'
        },
        cosmwasm: {
          version: 'v0.53.0',
          enabled: true
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
  },
  description: 'Quasar is the first decentralized asset management (D.A.M.) platform enabled by IBC. A secure, permissionless, composable, and diversified interchain DeFi experience is finally here.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/quasar',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://quasar-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://quasar-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc-quasar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quasar-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quasar.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-quasar.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://quasar-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quasar-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://quasar-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://quasar-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://quasar-rpc.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/quasar',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://quasar-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://api-quasar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quasar-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://quasar-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quasar.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://lcd-quasar.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://quasar-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quasar-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://quasar-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://quasar-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://quasar-api.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    grpc: [
      {
        address: 'quasar.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'quasar-grpc.polkachu.com:18290',
        provider: 'polkachu'
      },
      {
        address: 'grpc-quasar.cosmos-spaces.cloud:12890',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'quasar-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'quasar.grpc.kjnodes.com:14890',
        provider: 'kjnodes'
      },
      {
        address: 'quasar-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'quasar-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'quasar-grpc.stakeandrelax.net:18290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'quasar-grpc.genznodes.dev:29090',
        provider: 'genznodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/quasar',
      txPage: 'https://www.mintscan.io/quasar/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/quasar/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/quasar',
      txPage: 'https://ezstaking.app/quasar/txs/${txHash}',
      accountPage: 'https://ezstaking.app/quasar/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/quasar',
      txPage: 'https://mainnet.whispernode.com/quasar/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/quasar/account/${accountAddress}'
    }
  ],
  keywords: ['mainnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      theme: {
        primaryColorHex: '#a493e4'
      }
    }]
};
export default info;