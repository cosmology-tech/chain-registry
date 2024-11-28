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