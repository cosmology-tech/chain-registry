import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'blockx',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.blockxnet.com/',
  prettyName: 'BlockX',
  chainType: 'cosmos',
  chainId: 'blockx_19191-1',
  bech32Prefix: 'blockx',
  slip44: 118,
  nodeHome: '$HOME/.blockxd',
  daemonName: 'blockxd',
  keyAlgos: ['ethsecp256k1'],
  apis: {
    rpc: [{
        address: 'https://rpc-blockx.nodeist.net',
        provider: 'Nodeist'
      }, {
        address: 'https://blockx_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://api-blockx.nodeist.net',
        provider: 'Nodeist'
      }, {
        address: 'https://blockx_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/blockx',
      txPage: 'https://ping.pub/blockx/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/blockx/',
      txPage: 'https://explorer.ist/blockx/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/blockx',
      txPage: 'https://explorer.whenmoonwhenlambo.money/blockx/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/blockx/account/${accountAddress}'
    }
  ],
  staking: {
    stakingTokens: [{
        denom: 'abcx'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockx/images/blockx.png'
    }]
};
export default info;