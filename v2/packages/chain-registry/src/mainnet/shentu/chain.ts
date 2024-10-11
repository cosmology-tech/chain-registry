import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shentu',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.shentu.org/',
  prettyName: 'Shentu',
  chainType: 'cosmos',
  chainId: 'shentu-2.2',
  bech32Prefix: 'shentu',
  daemonName: 'shentud',
  nodeHome: '$HOME/.shentud',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uctk',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uctk'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ShentuChain/shentu',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json'
    },
    recommendedVersion: 'v2.11.0',
    compatibleVersions: ['v2.11.0'],
    binaries: {
      "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_linux_amd64',
      "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_arm64_macos',
      "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_win_x86_64.exe'
    },
    versions: [
      {
        name: 'v2.6.0',
        height: 10485430,
        proposal: 14,
        tag: 'v2.6.0',
        recommendedVersion: 'v2.6.0',
        compatibleVersions: ['v2.6.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_win_x86_64.exe'
        },
        nextVersionName: 'v2.7.0',
        ibc: {
          type: 'go',
          version: 'v4.2.0'
        }
      },
      {
        name: 'v2.7.0',
        height: 12926000,
        proposal: 17,
        tag: 'v2.7.0',
        recommendedVersion: 'v2.7.0',
        compatibleVersions: ['v2.7.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.1/shentud_2.7.1_win_x86_64.exe'
        },
        nextVersionName: 'v2.7.2',
        ibc: {
          type: 'go',
          version: 'v4.2.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2.7.2',
        height: 14875800,
        proposal: 21,
        tag: 'v2.7.2',
        recommendedVersion: 'v2.7.2',
        compatibleVersions: ['v2.7.2'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.7.2/shentud_2.7.2_win_x86_64.exe'
        },
        nextVersionName: 'v2.8.0',
        ibc: {
          type: 'go',
          version: 'v4.2.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2.8.0',
        height: 15094300,
        proposal: 23,
        tag: 'v2.8.0',
        recommendedVersion: 'v2.8.0',
        compatibleVersions: ['v2.8.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.8.0/shentud_2.8.0_win_x86_64.exe'
        },
        nextVersionName: '',
        ibc: {
          type: 'go',
          version: 'v4.2.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2.9.0',
        height: 16084500,
        proposal: 23,
        tag: 'v2.9.0',
        recommendedVersion: 'v2.9.0',
        compatibleVersions: ['v2.9.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.9.0/shentud_2.9.0_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.9.0/shentud_2.9.0_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.9.0/shentud_2.9.0_win_x86_64.exe'
        },
        nextVersionName: '',
        ibc: {
          type: 'go',
          version: 'v4.2.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2.10.0',
        height: 18737000,
        proposal: 23,
        tag: 'v2.10.0',
        recommendedVersion: 'v2.10.0',
        compatibleVersions: ['v2.10.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.10.0/shentud_2.10.0_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.10.0/shentud_2.10.0_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.10.0/shentud_2.10.0_win_x86_64.exe'
        },
        nextVersionName: '',
        ibc: {
          type: 'go',
          version: 'v6.3.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2.11.0',
        height: 19525000,
        proposal: 23,
        tag: 'v2.11.0',
        recommendedVersion: 'v2.11.0',
        compatibleVersions: ['v2.11.0'],
        binaries: {
          "linux/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_linux_amd64',
          "darwin/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_arm64_macos',
          "windows/amd64": 'https://github.com/shentufoundation/shentu/releases/download/v2.11.0/shentud_2.11.0_win_x86_64.exe'
        },
        nextVersionName: '',
        ibc: {
          type: 'go',
          version: 'v7.4.0',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1']
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.shentu.org:443',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://rest.shentu.org/',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://shentu-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'grpc.shentu.org:443',
        provider: 'Shentu'
      },
      {
        address: 'shentu-grpc.polkachu.com:14090',
        provider: 'Polkachu'
      },
      {
        address: 'shentu.grpc.m.stavr.tech:9593',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-grpc.ramuchi.tech:12090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-shentu-01.stakeflow.io:2402',
        provider: 'Stakeflow'
      },
      {
        address: 'shentu-grpc.tienthuattoan.ventures:9490',
        provider: 'TienThuatToan'
      },
      {
        address: 'shentu-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'shentu-grpc.panthea.eu:16700',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/shentu',
      txPage: 'https://ezstaking.app/shentu/txs/${txHash}',
      accountPage: 'https://ezstaking.app/shentu/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Shentu-Mainnet',
      txPage: 'https://explorer.stavr.tech/Shentu-Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Shentu-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/shentu',
      txPage: 'https://www.mintscan.io/shentu/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.org/?chain=shentu-2.2',
      txPage: 'https://explorer.shentu.org/transactions/${txHash}?chain=shentu-2.2'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/shentu',
      txPage: 'https://ping.pub/shentu/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/shentu',
      txPage: 'https://atomscan.com/shentu/transactions/${txHash}',
      accountPage: 'https://atomscan.com/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/shentu',
      txPage: 'https://bigdipper.live/shentu/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/shentu',
      accountPage: 'https://stakeflow.io/shentu/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
      theme: {
        primaryColorHex: '#e4ac4c'
      }
    }]
};
export default info;