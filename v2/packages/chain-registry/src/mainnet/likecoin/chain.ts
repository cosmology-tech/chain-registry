import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'likecoin',
  status: 'live',
  website: 'https://like.co/',
  networkType: 'mainnet',
  prettyName: 'LikeCoin',
  chainType: 'cosmos',
  chainId: 'likecoin-mainnet-2',
  bech32Prefix: 'like',
  daemonName: 'liked',
  nodeHome: '$HOME/.liked',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nanolike',
        fixedMinGasPrice: 1000,
        lowGasPrice: 1000,
        averageGasPrice: 10000,
        highGasPrice: 1000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nanolike'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/likecoin/likecoin-chain',
    recommendedVersion: 'v4.2.0',
    compatibleVersions: ['v4.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Windows_x86_64.zip'
    },
    cosmosSdkVersion: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'fotan-1.0',
      genesisUrl: 'https://raw.githubusercontent.com/likecoin/mainnet/master/genesis.json'
    },
    versions: [
      {
        name: 'fotan-1.0',
        tag: 'v1.2.0',
        height: 0,
        recommendedVersion: 'v1.2.0',
        compatibleVersions: ['v1.2.0', 'fotan-1.2'],
        cosmosSdkVersion: '0.42',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Windows_x86_64.zip'
        },
        nextVersionName: 'v2.0.0',
        sdk: {
          type: 'cosmos',
          version: '0.42'
        }
      },
      {
        name: 'v2.0.0',
        tag: 'v2.0.2',
        height: 3692800,
        recommendedVersion: 'v2.0.2',
        compatibleVersions: [
          'v2.0.0',
          'v2.0.1',
          'v2.0.2'
        ],
        cosmosSdkVersion: '0.44',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Windows_x86_64.zip'
        },
        nextVersionName: 'v3.0.0',
        sdk: {
          type: 'cosmos',
          version: '0.44'
        },
        ibc: {
          type: 'go',
          version: '2.1.0'
        }
      },
      {
        name: 'v3.0.0',
        tag: 'v3.1.0',
        height: 4810000,
        recommendedVersion: 'v3.1.0',
        compatibleVersions: ['v3.1.0'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Windows_x86_64.zip'
        },
        nextVersionName: 'v4.0.0',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        ibc: {
          type: 'go',
          version: '2.3.0'
        }
      },
      {
        name: 'v4.0.0',
        tag: 'v4.0.1',
        height: 9419200,
        recommendedVersion: 'v4.0.1',
        compatibleVersions: [
          'v4.0.0',
          'v4.0.1',
          'v4.0.2'
        ],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Windows_x86_64.zip'
        },
        nextVersionName: 'v4.1.1',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '5.3.1'
        }
      },
      {
        name: 'v4.1.1',
        tag: 'v4.1.1',
        height: 12102100,
        recommendedVersion: 'v4.1.1',
        compatibleVersions: ['v4.1.1'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Windows_x86_64.zip'
        },
        nextVersionName: 'v4.2.0',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '6.2.1'
        }
      },
      {
        name: 'v4.2.0',
        tag: 'v4.2.0',
        height: 14103500,
        recommendedVersion: 'v4.2.0',
        compatibleVersions: ['v4.2.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.2.0/likecoin-chain_4.2.0_Windows_x86_64.zip'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '6.3.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '6.3.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-node.like.co/rpc/',
        provider: 'like.co'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/rpc/',
        provider: 'Oldcat'
      },
      {
        address: 'https://like.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer'
      },
      {
        address: 'https://rpc.likecoin.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-node.like.co',
        provider: 'like.co'
      },
      {
        address: 'https://like.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/api/',
        provider: 'Oldcat'
      },
      {
        address: 'https://rest-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer'
      }
    ],
    grpc: [
      {
        address: 'mainnet-node-grpc.like.co:80',
        provider: 'like.co'
      },
      {
        address: 'like.grpc.m.stavr.tech:2000',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/grpc/',
        provider: 'Oldcat'
      },
      {
        address: 'grpc-likecoin-mainnet.pikaser.net:443',
        provider: 'PikaSer'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/likecoin',
      txPage: 'https://staking-explorer.com/transaction.php?chain=likecoin&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=likecoin&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/likecoin',
      txPage: 'https://ezstaking.app/likecoin/txs/${txHash}',
      accountPage: 'https://ezstaking.app/likecoin/account/${accountAddress}'
    },
    {
      kind: 'lunie-ng',
      url: 'https://stake.like.co/'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Likecoin-M',
      txPage: 'https://explorer.stavr.tech/Likecoin-M/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/likecoin',
      txPage: 'https://ping.pub/likecoin/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/likecoin',
      txPage: 'https://atomscan.com/likecoin/transactions/${txHash}',
      accountPage: 'https://atomscan.com/likecoin/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
  },
  keywords: [
    'ebook',
    'depub',
    'publishing',
    'like',
    'book',
    'writing',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
      theme: {
        primaryColorHex: '#2e656d'
      }
    }]
};
export default info;