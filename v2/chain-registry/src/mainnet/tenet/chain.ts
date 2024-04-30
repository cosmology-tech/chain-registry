import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tenet',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://tenet.org/',
  prettyName: 'Tenet',
  chainId: 'tenet_1559-1',
  bech32Prefix: 'tenet',
  nodeHome: '$HOME/.tenetd',
  daemonName: 'tenetd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atenet',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atenet'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tendermint-1.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://app.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
        address: 'tenet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }, {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.tenet.org',
        provider: 'tenet'
      }, {
        address: 'https://tenet-evm.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/tenet',
      txPage: 'https://ping.pub/tenet/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Tenet',
      txPage: 'https://exp.nodeist.net/Tenet/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/tenet',
      txPage: 'https://explorer.tcnetwork.io/tenet/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/tenet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/tenet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/tenet/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/tenet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
    }]
};
export default info;