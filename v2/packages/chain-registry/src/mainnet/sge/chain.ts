import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sge',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'SGE',
  chainType: 'cosmos',
  chainId: 'sgenet-1',
  bech32Prefix: 'sge',
  daemonName: 'sged',
  nodeHome: '$HOME/.sge',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usge',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usge'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sge-network/sge',
    recommendedVersion: 'v1.7.2',
    compatibleVersions: ['v1.7.2'],
    cosmosSdkVersion: 'sge-network/cosmos-sdk v0.47.9-0.20240409081440-054c8c413d45',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sge-network/networks/master/mainnet/sgenet-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.1.0',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        cosmosSdkVersion: 'v0.46.14',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.1.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.14'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.1'
        }
      },
      {
        name: 'v1.1.1',
        recommendedVersion: 'v1.1.1',
        compatibleVersions: ['v1.1.1'],
        proposal: 1,
        height: 1097000,
        cosmosSdkVersion: 'v0.46.14',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.2.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.14'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.2.0',
        recommendedVersion: 'v1.2.0',
        compatibleVersions: ['v1.2.0'],
        proposal: 3,
        height: 1564215,
        cosmosSdkVersion: 'v0.46.14',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.3.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.14'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.3.0',
        recommendedVersion: 'v1.3.0',
        compatibleVersions: ['v1.3.0'],
        proposal: 4,
        height: 1887954,
        cosmosSdkVersion: 'v0.46.14',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.3.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.14'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.3.1',
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.1'],
        proposal: 5,
        height: 1911750,
        cosmosSdkVersion: 'v0.46.17-0.20231114190313-b9164dd660b6',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'V1.5.2',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.17',
          tag: 'v0.46.17-0.20231114190313-b9164dd660b6'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.5.2',
        recommendedVersion: 'v1.5.2',
        compatibleVersions: ['v1.5.2'],
        proposal: 6,
        height: 2867354,
        cosmosSdkVersion: 'sge-network/cosmos-sdk v0.46.17-0.20240223100624-2a2661276cb4',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.5.3',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/sge-network/cosmos-sdk',
          version: 'v0.46.17',
          tag: 'v0.46.17-0.20240223100624-2a2661276cb4'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.5.3',
        recommendedVersion: 'v1.5.3',
        compatibleVersions: ['v1.5.3'],
        proposal: 7,
        height: 2973740,
        cosmosSdkVersion: 'sge-network/cosmos-sdk v0.46.17-0.20240223100624-2a2661276cb4',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.6.2',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/sge-network/cosmos-sdk',
          version: 'v0.46.17',
          tag: 'v0.46.17-0.20240223100624-2a2661276cb4'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.6.2',
        recommendedVersion: 'v1.6.2',
        compatibleVersions: ['v1.6.2'],
        proposal: 8,
        height: 3685910,
        cosmosSdkVersion: 'sge-network/cosmos-sdk v0.46.17-0.20240430064306-1b044d03d56c',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        nextVersionName: 'v1.7.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/sge-network/cosmos-sdk',
          version: 'v0.46.17',
          tag: 'v0.46.17-0.20240430064306-1b044d03d56c'
        },
        ibc: {
          type: 'go',
          version: 'v5.3.1'
        }
      },
      {
        name: 'v1.7.0',
        proposal: 9,
        height: 3976350,
        recommendedVersion: 'v1.7.0-tmfix',
        compatibleVersions: ['v1.7.0-tmfix'],
        cosmosSdkVersion: 'sge-network/cosmos-sdk v0.47.9-0.20240409081440-054c8c413d45',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        nextVersionName: 'v1.7.2',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/sge-network/cosmos-sdk',
          version: 'v0.47.9',
          tag: 'v0.47.9-0.20240409081440-054c8c413d45'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v1.7.2',
        proposal: 9,
        height: 3976350,
        recommendedVersion: 'v1.7.2',
        compatibleVersions: ['v1.7.2'],
        cosmosSdkVersion: 'sge-network/cosmos-sdk v0.47.9-0.20240409081440-054c8c413d45',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/sge-network/cosmos-sdk',
          version: 'v0.47.9',
          tag: 'v0.47.9-0.20240409081440-054c8c413d45'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/sge-network/cosmos-sdk',
      version: 'v0.47.9',
      tag: 'v0.47.9-0.20240409081440-054c8c413d45'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/sge',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://sge-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.sge.nodestake.top/',
        provider: 'Nodestake'
      },
      {
        address: 'https://rpc.sge.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://sge.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://sge-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rpc.sge.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://sge-rpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://rpc.sge.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://mainnet-sge-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://sge-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://sge_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/sge',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://sge-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.sge.nodestake.top/',
        provider: 'Nostake'
      },
      {
        address: 'https://api-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sge-api.ramuchi.tech/',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://sge-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rest.sge.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://sge-api.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://api.sge.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://mainnet-sge-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://sge-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.sge.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://sge_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'sge.lavenderfive.com:443',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://grpc.sge.nodestake.top/',
        provider: 'Nodestake'
      },
      {
        address: 'https://grpc-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge-grpc.ramuchi.tech:443',
        provider: 'ramuchi.tech'
      },
      {
        address: 'http://sge.grpc.m.stavr.tech:543',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sge-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://sge-grpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'mainnet-sge.konsortech.xyz:22090',
        provider: 'KonsorTech'
      },
      {
        address: 'sge-grpc.genznodes.dev:5090',
        provider: 'genznodes'
      },
      {
        address: 'grpc.sge.roomit.xyz:8443',
        provider: 'Roomit'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://blockexplorer.sgenetwork.io/sge',
      txPage: 'https://blockexplorer.sgenetwork.io/sge/tx/${txHash}'
    },
    {
      kind: 'nodestake.top',
      url: 'https://explorer.nodestake.top/sge',
      txPage: 'https://explorer.nodestake.top/sge/tx/${txHash}'
    },
    {
      kind: 'stakerhouse',
      url: 'https://cosmotracker.com/sge',
      txPage: 'https://cosmotracker.com/sge/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sge-Mainnet',
      txPage: 'https://explorer.stavr.tech/Sge-Mainnet/transaction/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Sge-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/sge',
      txPage: 'https://explorer.tcnetwork.io/sge/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/sge/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sge',
      txPage: 'https://staking-explorer.com/transaction.php?chain=sge&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=sge&addr=${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/sge',
      txPage: 'https://explorer.safeblock.space/sge/tx/${txHash}',
      accountPage: 'https://explorer.safeblock.space/sge/account/${accountAddress}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/sge',
      txPage: 'https://explorer.konsortech.xyz/sge/tx/${txHash}',
      accountPage: 'https://explorer.konsortech.xyz/sge/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/sge-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/sge-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/sge-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/sge',
      txPage: 'https://explorer.whenmoonwhenlambo.money/sge/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/sge/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
      theme: {
        primaryColorHex: '#b99952'
      }
    }]
};
export default info;