import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'loop',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.loop.fans/',
  prettyName: 'Loop',
  chainType: 'cosmos',
  chainId: 'loop-1',
  bech32Prefix: 'loop',
  daemonName: 'loopd',
  nodeHome: '$HOME/.loopchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'token',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/LoopFans/loop-chain',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/LoopFans/loop-chain/blob/main/network/loop-1/genesis.json'
    },
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/LoopFans/loop-chain/releases/download/v1.0.0/loopchain_1.0.0_linux_amd64.tar.gz'
    },
    language: {
      type: 'go',
      version: '1.21'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      theme: {
        primaryColorHex: '#4991ee'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg'
  },
  description: 'Empowering Artists and Superfans.',
  apis: {
    rpc: [{
        address: 'https://rpc.loop.pfc.zone/',
        provider: 'PFC'
      }],
    rest: [{
        address: 'https://api.loop.pfc.zone/',
        provider: 'PFC'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/loop',
      txPage: 'https://ping.pfc.zone/loop/tx/${txHash}'
    }],
  keywords: ['fans']
};
export default info;