import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cheqd',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.cheqd.io/',
  prettyName: 'Cheqd',
  chainType: 'cosmos',
  chainId: 'cheqd-mainnet-1',
  bech32Prefix: 'cheqd',
  daemonName: 'cheqd-noded',
  nodeHome: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ncheq',
        fixedMinGasPrice: 25,
        lowGasPrice: 50,
        averageGasPrice: 75,
        highGasPrice: 100
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ncheq'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cheqd/cheqd-node',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.0', 'v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-arm64.tar.gz'
    },
    cosmosSdkVersion: 'cheqd/cosmos-sdk v0.47.10-height-mismatch',
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
    },
    versions: [
      {
        name: 'v0.3',
        recommendedVersion: 'v0.3.1',
        compatibleVersions: ['v0.3.1'],
        cosmosSdkVersion: '0.44.3',
        consensus: {
          type: 'tendermint',
          version: '0.34.14'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.3.1/cheqd-node_0.3.1_amd64.deb'
        },
        nextVersionName: 'v0.4',
        sdk: {
          type: 'cosmos',
          version: '0.44.3'
        },
        ibc: {
          type: 'go',
          version: 'v1.2.3'
        }
      },
      {
        name: 'v0.4',
        recommendedVersion: 'v0.4.1',
        compatibleVersions: ['v0.4.0', 'v0.4.1'],
        cosmosSdkVersion: 'cheqd/cosmos-sdk v0.44.5-cheqd',
        consensus: {
          type: 'tendermint',
          version: '0.34.14'
        },
        proposal: 2,
        height: 1171198,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.4.1/cheqd-node_0.4.1_amd64.deb'
        },
        previousVersionName: 'v0.3',
        nextVersionName: 'v0.5',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.44.5',
          tag: 'v0.44.5-cheqd'
        },
        ibc: {
          type: 'go',
          version: 'v1.2.3'
        }
      },
      {
        name: 'v0.5',
        recommendedVersion: 'v0.5.0',
        compatibleVersions: ['v0.5.0'],
        cosmosSdkVersion: 'cheqd/cosmos-sdk v0.44.5-cheqd',
        consensus: {
          type: 'tendermint',
          version: '0.34.15'
        },
        proposal: 3,
        height: 1971324,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.5.0/cheqd-node_0.5.0_amd64.deb'
        },
        previousVersionName: 'v0.4',
        nextVersionName: 'v0.6',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.44.5',
          tag: 'v0.44.5-cheqd'
        },
        ibc: {
          type: 'go',
          version: 'v1.4.0'
        }
      },
      {
        name: 'v0.6',
        recommendedVersion: 'v0.6.10',
        compatibleVersions: [
          'v0.6.0',
          'v0.6.1',
          'v0.6.7',
          'v0.6.9',
          'v0.6.10'
        ],
        cosmosSdkVersion: 'cheqd/cosmos-sdk v0.45.9-cheqd-tag',
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        proposal: 6,
        height: 3561652,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.6.10/cheqd-noded-0.6.10-linux-x86_64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v0.6.10/cheqd-noded-0.6.10-linux-arm64.tar.gz'
        },
        previousVersionName: 'v0.5',
        nextVersionName: 'v1',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.45.9',
          tag: 'v0.45.9-cheqd-tag'
        },
        ibc: {
          type: 'go',
          version: 'v3.3.0'
        }
      },
      {
        name: 'v1',
        recommendedVersion: 'v1.4.5',
        compatibleVersions: [
          'v1.2.5',
          'v1.3.0',
          'v1.4.0',
          'v1.4.2',
          'v1.4.4',
          'v1.4.5'
        ],
        cosmosSdkVersion: 'cheqd/cosmos-sdk v0.46.10-barberry',
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        proposal: 12,
        height: 6427280,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v1.4.5/cheqd-noded-1.4.5-darwin-arm64.tar.gz'
        },
        previousVersionName: 'v0.6',
        nextVersionName: 'v2',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.46.10',
          tag: 'v0.46.10-barberry'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      },
      {
        name: 'v2',
        recommendedVersion: 'v2.0.1',
        compatibleVersions: ['v2.0.0', 'v2.0.1'],
        cosmosSdkVersion: 'cheqd/cosmos-sdk v0.47.10-height-mismatch',
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        proposal: 48,
        height: 13024570,
        binaries: {
          "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-arm64.tar.gz',
          "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-arm64.tar.gz'
        },
        previousVersionName: 'v1',
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cheqd/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-height-mismatch'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cheqd/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-height-mismatch'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://cheqd-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cheqd-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lcd-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.cheqd.net:443',
        provider: 'cheqd'
      },
      {
        address: 'cheqd.grpc.m.stavr.tech:9337',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'cheqd.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cheqd-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-cheqd-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.cheqd.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-cheqd.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'cheqd-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.cheqd.io',
      txPage: 'https://explorer.cheqd.io/transactions/${txHash}',
      accountPage: 'https://explorer.cheqd.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cheqd',
      txPage: 'https://ping.pub/cheqd/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cheqd',
      txPage: 'https://staking-explorer.com/transaction.php?chain=cheqd&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=cheqd&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Cheqd-Mainnet',
      txPage: 'https://explorer.stavr.tech/Cheqd-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cheqd',
      txPage: 'https://atomscan.com/cheqd/transactions/${txHash}',
      accountPage: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cheqd',
      txPage: 'https://ezstaking.app/cheqd/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cheqd/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://look.chillvalidation.com/cheqd',
      txPage: 'https://look.chillvalidation.com/cheqd/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.wildsage.io/cheqd',
      txPage: 'https://ping.wildsage.io/cheqd/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/cheqd',
      txPage: 'https://mainnet.whispernode.com/cheqd/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/cheqd/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
      theme: {
        primaryColorHex: '#fc5f04'
      }
    }]
};
export default info;