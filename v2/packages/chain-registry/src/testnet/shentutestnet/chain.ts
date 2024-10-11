import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'shentutestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.shentu.org/',
  prettyName: 'Yulei',
  chainType: 'cosmos',
  chainId: 'yulei-2.1',
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
      genesisUrl: 'https://raw.githubusercontent.com/shentufoundation/testnet/refs/heads/master/yulei-2.1/genesis.json'
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
    rpc: [{
        address: 'https://yulei-rpc.shentu.org:443',
        provider: 'Shentu'
      }],
    rest: [{
        address: 'https://yulei-rest.shentu.org/',
        provider: 'Shentu'
      }],
    grpc: [{
        address: 'yulei-grpc.shentu.org:443',
        provider: 'Shentu'
      }]
  },
  explorers: [{
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.org/?chain=yulei-2.1',
      txPage: 'https://explorer.shentu.org/transactions/${txHash}?chain=yulei-2.1'
    }],
  images: [{
      imageSync: {
        chainName: 'shentutestnet',
        baseDenom: 'uctk'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
      theme: {
        primaryColorHex: '#e4ac4c'
      }
    }]
};
export default info;