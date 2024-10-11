import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumnetwork',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://lum.network/',
  prettyName: 'Lum Network',
  chainType: 'cosmos',
  chainId: 'lum-network-1',
  bech32Prefix: 'lum',
  daemonName: 'lumd',
  nodeHome: '$HOME/.lumd',
  keyAlgos: ['secp256k1'],
  slip44: 880,
  fees: {
    feeTokens: [{
        denom: 'ulum',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulum'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/lum-network/chain',
    recommendedVersion: 'v1.6.7',
    compatibleVersions: ['v1.6.7'],
    cosmosSdkVersion: 'v0.47.11',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    binaries: {
      "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_amd64.zip',
      "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_arm64.zip',
      "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_amd64.zip',
      "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_arm64.zip',
      "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_amd64.zip',
      "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_arm64.zip'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/lum-network/mainnet/master/genesis.json'
    },
    versions: [
      {
        name: 'v1.3.1',
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.1'],
        nextVersionName: 'v1.4.0'
      },
      {
        name: 'v1.4.0',
        height: 7652000,
        proposal: 61,
        recommendedVersion: 'v1.4.0',
        compatibleVersions: ['v1.4.0'],
        nextVersionName: 'v1.4.1'
      },
      {
        name: 'v1.4.1',
        height: 7740000,
        proposal: 64,
        recommendedVersion: 'v1.4.2',
        compatibleVersions: ['v1.4.1', 'v1.4.2'],
        nextVersionName: 'v1.4.5'
      },
      {
        name: 'v1.4.5',
        height: 7950600,
        proposal: 71,
        recommendedVersion: 'v1.4.5',
        compatibleVersions: ['v1.4.5'],
        nextVersionName: 'v1.5.0'
      },
      {
        name: 'v1.5.0',
        height: 8424000,
        proposal: 79,
        recommendedVersion: 'v1.5.0-2',
        compatibleVersions: ['v1.5.0-2'],
        nextVersionName: 'v1.5.1'
      },
      {
        name: 'v1.5.1',
        height: 8527300,
        proposal: 82,
        recommendedVersion: 'v1.5.1',
        compatibleVersions: ['v1.5.1'],
        nextVersionName: 'v1.5.2'
      },
      {
        name: 'v1.5.2',
        proposal: 87,
        height: 8688700,
        recommendedVersion: 'v1.5.2',
        compatibleVersions: ['v1.5.2'],
        nextVersionName: 'v1.6.1'
      },
      {
        name: 'v1.6.1',
        proposal: 88,
        height: 9520750,
        recommendedVersion: 'v1.6.1',
        compatibleVersions: ['v1.6.1'],
        nextVersionName: 'v1.6.2'
      },
      {
        name: 'v1.6.2',
        proposal: 90,
        height: 10027000,
        recommendedVersion: 'v1.6.2-1',
        compatibleVersions: ['v1.6.2-1'],
        nextVersionName: 'v1.6.3'
      },
      {
        name: 'v1.6.3',
        proposal: 92,
        height: 10444000,
        recommendedVersion: 'v1.6.3',
        compatibleVersions: ['v1.6.3'],
        cosmosSdkVersion: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_ubuntu-latest_amd64.zip',
          "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_ubuntu-latest_arm64.zip',
          "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_macos-latest_amd64.zip',
          "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_macos-latest_arm64.zip',
          "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_windows-latest_amd64.zip',
          "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.3/lumd_windows-latest_arm64.zip'
        },
        nextVersionName: 'v1.6.4',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5'
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v1.6.4',
        proposal: 97,
        height: 11390000,
        recommendedVersion: 'v1.6.4',
        compatibleVersions: ['v1.6.4'],
        cosmosSdkVersion: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_ubuntu-latest_amd64.zip',
          "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_ubuntu-latest_arm64.zip',
          "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_macos-latest_amd64.zip',
          "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_macos-latest_arm64.zip',
          "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_windows-latest_amd64.zip',
          "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.4/lumd_windows-latest_arm64.zip'
        },
        nextVersionName: 'v1.6.5',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5'
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v1.6.5',
        proposal: 101,
        height: 11992000,
        recommendedVersion: 'v1.6.5',
        compatibleVersions: ['v1.6.5'],
        cosmosSdkVersion: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_ubuntu-latest_amd64.zip',
          "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_ubuntu-latest_arm64.zip',
          "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_macos-latest_amd64.zip',
          "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_macos-latest_arm64.zip',
          "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_windows-latest_amd64.zip',
          "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.5/lumd_windows-latest_arm64.zip'
        },
        nextVersionName: 'v1.6.6',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5'
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0'
        }
      },
      {
        name: 'v1.6.6',
        proposal: 106,
        height: 12969000,
        recommendedVersion: 'v1.6.6',
        compatibleVersions: ['v1.6.6'],
        cosmosSdkVersion: 'v0.47.11',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        binaries: {
          "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_ubuntu-latest_amd64.zip',
          "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_ubuntu-latest_arm64.zip',
          "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_macos-latest_amd64.zip',
          "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_macos-latest_arm64.zip',
          "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_windows-latest_amd64.zip',
          "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.6/lumd_windows-latest_arm64.zip'
        },
        nextVersionName: 'v1.6.7',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v1.6.7',
        proposal: 107,
        height: 13241000,
        recommendedVersion: 'v1.6.7',
        compatibleVersions: ['v1.6.7'],
        cosmosSdkVersion: 'v0.47.11',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        binaries: {
          "linux/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_amd64.zip',
          "linux/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_ubuntu-latest_arm64.zip',
          "darwin/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_amd64.zip',
          "darwin/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_macos-latest_arm64.zip',
          "windows/amd64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_amd64.zip',
          "windows/arm64": 'https://github.com/lum-network/chain/releases/download/v1.6.7/lumd_windows-latest_arm64.zip'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.11'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.node0.mainnet.lum.network',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://lum.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/lumnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lumnetwork_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.node0.mainnet.lum.network',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://rest.lavenderfive.com:443/lumnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lum-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lumnetwork_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'lumnetwork.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'lum.grpc.m.stavr.tech:2277',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'lum-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'lum-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/lumnetwork',
      txPage: 'https://ezstaking.app/lumnetwork/txs/${txHash}',
      accountPage: 'https://ezstaking.app/lumnetwork/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/lum',
      txPage: 'https://www.mintscan.io/lum/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/lum/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/LumNetwork-Mainnet',
      txPage: 'https://explorer.stavr.tech/LumNetwork-Mainnet/tx/${txHash}'
    },
    {
      kind: 'lum-network',
      url: 'https://explorer.lum.network',
      txPage: 'https://explorer.lum.network/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/lum-network',
      txPage: 'https://ping.pub/lum-network/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lum-network',
      txPage: 'https://atomscan.com/lum-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/lum-network/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/lum-network',
      txPage: 'https://explorer.whenmoonwhenlambo.money/lum-network/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/lum-network/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
      theme: {
        primaryColorHex: '#080808'
      }
    }]
};
export default info;