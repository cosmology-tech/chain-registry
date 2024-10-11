import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dydx',
  status: 'live',
  website: 'https://dydx.trade/',
  networkType: 'mainnet',
  prettyName: 'dYdX Protocol',
  chainType: 'cosmos',
  chainId: 'dydx-mainnet-1',
  bech32Prefix: 'dydx',
  daemonName: 'dydxprotocold',
  nodeHome: '$HOME/.dydxprotocol',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'adydx',
        fixedMinGasPrice: 12500000000,
        lowGasPrice: 12500000000,
        averageGasPrice: 12500000000,
        highGasPrice: 20000000000
      }, {
        denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'adydx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dydxprotocol/v4-chain/',
    recommendedVersion: 'protocol/v5.2.0',
    compatibleVersions: ['protocol/v5.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.2.0/dydxprotocold-v5.2.0-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.2.0/dydxprotocold-v5.2.0-linux-arm64.tar.gz'
    },
    cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.6-0.20240606183841-18966898625f',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6',
      repo: 'https://github.com/dydxprotocol/cometbft',
      tag: 'v0.38.6-0.20240426214049-c8beeeada40a'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json'
    },
    versions: [
      {
        name: 'v2',
        recommendedVersion: 'protocol/v2.0.1',
        compatibleVersions: ['protocol/v2.0.0', 'protocol/v2.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv2.0.0/dydxprotocold-v2.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv2.0.0/dydxprotocold-v2.0.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.47.5-0.20231011192538-b95c66dedbd5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.37.3-0.20230908230338-65f7a2f25c18'
        },
        nextVersionName: 'v3.0.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-0.20231011192538-b95c66dedbd5'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v3.0.0',
        proposal: 7,
        height: 7147832,
        recommendedVersion: 'protocol/v3.0.2',
        compatibleVersions: ['protocol/v3.0.0', 'protocol/v3.0.2'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv3.0.0/dydxprotocold-v3.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv3.0.0/dydxprotocold-v3.0.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.47.5-0.20240111163003-128eb0a555af',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.37.3-0.20230908230338-65f7a2f25c18'
        },
        nextVersionName: 'v4.0.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-0.20240111163003-128eb0a555af'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v4.0.0',
        proposal: 46,
        height: 12791712,
        recommendedVersion: 'protocol/v4.0.5',
        compatibleVersions: ['protocol/v4.0.5'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.0.5/dydxprotocold-v4.0.5-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.0.5/dydxprotocold-v4.0.5-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20240409171441-6d0767b72c06'
        },
        nextVersionName: 'v4.1.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.5',
          tag: 'v0.50.5-0.20240220212824-35f31482370c'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        }
      },
      {
        name: 'v4.1.0',
        proposal: 53,
        height: 14404200,
        recommendedVersion: 'protocol/v4.1.2',
        compatibleVersions: ['protocol/v4.1.0', 'protocol/v4.1.2'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv4.1.0/dydxprotocold-v4.1.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20240409171441-6d0767b72c06'
        },
        nextVersionName: 'v5.0.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.5',
          tag: 'v0.50.5-0.20240220212824-35f31482370c'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        }
      },
      {
        name: 'v5.0.0',
        proposal: 59,
        height: 17560000,
        recommendedVersion: 'protocol/v5.0.0',
        compatibleVersions: ['protocol/v5.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.0.0/dydxprotocold-v5.0.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.0.0/dydxprotocold-v5.0.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.6-0.20240517185527-7330926cd9ad',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20240426214049-c8beeeada40a'
        },
        nextVersionName: 'v5.1.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.6',
          tag: 'v0.50.6-0.20240517185527-7330926cd9ad'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        }
      },
      {
        name: 'v5.1.0',
        proposal: 125,
        height: 21142000,
        recommendedVersion: 'protocol/v5.1.0',
        compatibleVersions: ['protocol/v5.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.1.0/dydxprotocold-v5.1.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.1.0/dydxprotocold-v5.1.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.6-0.20240606183841-18966898625f',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20240426214049-c8beeeada40a'
        },
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.6',
          tag: 'v0.50.6-0.20240606183841-18966898625f'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        },
        nextVersionName: 'v5.2.0'
      },
      {
        name: 'v5.2.0',
        proposal: 130,
        height: 22170000,
        recommendedVersion: 'protocol/v5.2.0',
        compatibleVersions: ['protocol/v5.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.2.0/dydxprotocold-v5.2.0-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv5.2.0/dydxprotocold-v5.2.0-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.6-0.20240606183841-18966898625f',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20240426214049-c8beeeada40a'
        },
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.6',
          tag: 'v0.50.6-0.20240606183841-18966898625f'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        },
        nextVersionName: 'v6.0.0'
      },
      {
        name: 'v6.0.0',
        proposal: 160,
        height: 26785000,
        recommendedVersion: 'protocol/v6.0.4',
        compatibleVersions: ['protocol/v6.0.4'],
        binaries: {
          "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv6.0.4/dydxprotocold-v6.0.4-linux-amd64.tar.gz',
          "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv6.0.4/dydxprotocold-v6.0.4-linux-arm64.tar.gz'
        },
        cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.6-0.20240808180557-4b1c1dc17703',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6',
          repo: 'https://github.com/dydxprotocol/cometbft',
          tag: 'v0.38.6-0.20241001172045-cfee87f3abbf'
        },
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/dydxprotocol/cosmos-sdk',
          version: 'v0.50.6',
          tag: 'v0.50.6-0.20240808180557-4b1c1dc17703'
        },
        ibc: {
          type: 'go',
          version: 'v8.0.0'
        },
        nextVersionName: ''
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/dydxprotocol/cosmos-sdk',
      version: 'v0.50.6',
      tag: 'v0.50.6-0.20240606183841-18966898625f'
    },
    ibc: {
      type: 'go',
      version: 'v8.0.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://dydx-dao-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-rpc.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc.dydx.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://dydx-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dydx-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    rest: [
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dydx-dao-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-lcd.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-rest.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://rest.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://api-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api.dydx.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://dydx-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dydx-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    grpc: [
      {
        address: 'dydx-dao-grpc-1.polkachu.com:23890',
        provider: 'Polkachu (1)'
      },
      {
        address: 'dydx-dao-grpc-2.polkachu.com:23890',
        provider: 'Polkachu (2)'
      },
      {
        address: 'dydx-dao-grpc-3.polkachu.com:23890',
        provider: 'Polkachu (3)'
      },
      {
        address: 'dydx-dao-grpc-4.polkachu.com:23890',
        provider: 'Polkachu (4)'
      },
      {
        address: 'dydx-dao-grpc-5.polkachu.com:23890',
        provider: 'Polkachu (5)'
      },
      {
        address: 'dydx-mainnet-full-grpc.public.blastapi.io:443',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'dydx.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dydx-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.dydx.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'dydx.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-dydx.cosmos-spaces.cloud:4990',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'dydx-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'dydx-grpc.noders.services:37090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx',
      txPage: 'https://www.mintscan.io/dydx/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dydx',
      txPage: 'https://ezstaking.app/dydx/txs/${txHash}',
      accountPage: 'https://ezstaking.app/dydx/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/dydx/',
      txPage: 'https://explorer.nodestake.top/dydx/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.top/dydx/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dydx',
      txPage: 'https://explorer.tcnetwork.io/dydx/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/dydx/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      theme: {
        primaryColorHex: '#21212f'
      }
    }]
};
export default info;