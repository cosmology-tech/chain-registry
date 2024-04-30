import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'loop',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.loop.fans/',
  prettyName: 'Loop',
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
    cosmwasmEnabled: true
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      layout: 'logomark'
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