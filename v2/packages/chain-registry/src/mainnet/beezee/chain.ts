import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'beezee',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://getbze.com/',
  prettyName: 'BeeZee',
  chainType: 'cosmos',
  chainId: 'beezee-1',
  bech32Prefix: 'bze',
  daemonName: 'bzed',
  nodeHome: '$HOME/.bze',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubze',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubze'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bze-alphateam/bze',
    recommendedVersion: 'v7.1.1',
    compatibleVersions: ['v7.1.1'],
    binaries: {
      "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-darwin-arm64.tar.gz',
      "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-linux-arm64.tar.gz',
      "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-win64.zip'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/bze-alphateam/bze/main/genesis.json'
    },
    versions: [
      {
        name: 'v5.0.1',
        recommendedVersion: 'v5.0.1',
        tag: 'v5.0.1',
        compatibleVersions: ['v5.0.1'],
        cosmosSdkVersion: 'v0.44.3',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.14'
        },
        height: 0,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-win64.zip'
        },
        nextVersionName: 'v5.1.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.44.3'
        },
        ibc: {
          type: 'go',
          version: 'v1.2.2'
        }
      },
      {
        name: 'v5.1.1',
        recommendedVersion: 'v5.1.1',
        tag: 'v5.1.1',
        compatibleVersions: ['v5.1.1'],
        cosmosSdkVersion: 'v0.45.9',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.22'
        },
        height: 3303144,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-win64.zip'
        },
        nextVersionName: 'v5.1.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: 'v1.2.2'
        }
      },
      {
        name: 'v5.1.2',
        recommendedVersion: 'v5.1.2',
        tag: 'v5.1.2',
        compatibleVersions: ['v5.1.2'],
        cosmosSdkVersion: 'v0.45.9',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.22'
        },
        height: 3646700,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-win64.zip'
        },
        nextVersionName: 'v6.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: 'v1.2.2'
        }
      },
      {
        name: 'v6.0.0',
        recommendedVersion: 'v6.0.0',
        tag: 'v6.0.0',
        compatibleVersions: ['v6.0.0'],
        cosmosSdkVersion: 'v0.45.10',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.22'
        },
        height: 4875460,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip'
        },
        nextVersionName: 'v6.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.10'
        },
        ibc: {
          type: 'go',
          version: 'v2.4.2'
        }
      },
      {
        name: 'v6.1.0',
        recommendedVersion: 'v6.1.0',
        tag: 'v6.1.0',
        compatibleVersions: ['v6.1.0'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        height: 9079079,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-win64.zip'
        },
        nextVersionName: 'v7.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1'
        }
      },
      {
        name: 'v7.0.0',
        recommendedVersion: 'v7.0.0',
        tag: 'v7.0.0',
        compatibleVersions: ['v7.0.0'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        height: 12723000,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.0.0/bze-7.0.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.0.0/bze-7.0.0-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.0.0/bze-7.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.0.0/bze-7.0.0-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.0.0/bze-7.0.0-win64.zip'
        },
        nextVersionName: 'v7.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1'
        }
      },
      {
        name: 'v7.1.0',
        recommendedVersion: 'v7.1.0',
        tag: 'v7.1.0',
        compatibleVersions: ['v7.1.0'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        height: 13710000,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.0/bze-7.1.0-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.0/bze-7.1.0-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.0/bze-7.1.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.0/bze-7.1.0-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.0/bze-7.1.0-win64.zip'
        },
        nextVersionName: 'v7.1.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1'
        }
      },
      {
        name: 'v7.1.1',
        recommendedVersion: 'v7.1.1',
        tag: 'v7.1.1',
        compatibleVersions: ['v7.1.1'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        height: 14182500,
        binaries: {
          "darwin/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-darwin-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-darwin-arm64.tar.gz',
          "linux/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-linux-arm64.tar.gz',
          "windows/amd64": 'https://github.com/bze-alphateam/bze/releases/download/v7.1.1/bze-7.1.1-win64.zip'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1'
        }
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://rpc-1.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://rpc-2.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://beezee_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://rest-1.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://rest-2.getbze.com',
        provider: 'AlphaTeam'
      },
      {
        address: 'https://beezee_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.getbze.com:9099',
        provider: 'AlphaTeam'
      },
      {
        address: 'grpc-1.getbze.com:9099',
        provider: 'AlphaTeam'
      },
      {
        address: 'grpc-2.getbze.com:9099',
        provider: 'AlphaTeam'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/beezee',
      txPage: 'https://ping.pub/beezee/tx/${txHash}',
      accountPage: 'https://ping.pub/beezee/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/beezee',
      txPage: 'https://staking-explorer.com/transaction.php?chain=beezee&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=beezee&addr=${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.getbze.com/beezee',
      txPage: 'https://explorer.getbze.com/beezee/tx/${txHash}',
      accountPage: 'https://explorer.getbze.com/beezee/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/beezee',
      txPage: 'https://atomscan.com/beezee/transactions/${txHash}',
      accountPage: 'https://atomscan.com/beezee/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/beezee',
      txPage: 'https://explorer.whenmoonwhenlambo.money/beezee/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/beezee/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
      theme: {
        primaryColorHex: '#079fd7'
      }
    }]
};
export default info;