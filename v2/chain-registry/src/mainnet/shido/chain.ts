import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shido',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://shido.io/',
  prettyName: 'Shido',
  chainId: 'shido_9008-1',
  bech32Prefix: 'shido',
  nodeHome: '$HOME/.shidod',
  daemonName: 'shidod',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'shido',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'shido'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.4',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.45.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
  },
  description: 'Developers use Shido as the Ethereum and Wasm Chain to deploy applications of the future. Get all the functionalities of Ethereum and Wasm with the power of IBC and Interchain composability.',
  apis: {
    rpc: [{
        address: 'https://tendermint.shidoscan.com',
        provider: 'Shido'
      }, {
        address: 'https://shidochain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://swagger.shidoscan.com',
        provider: 'Shido'
      }, {
        address: 'https://shidochain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'https://grpc.shidoscan.com',
        provider: 'shido.io'
      }, {
        address: 'https://grpc-web.shidoscan.com',
        provider: 'shido.io'
      }],
    evmHttpJsonrpc: [
      {
        address: 'https://rpc-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://rpc-delta-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [{
      kind: 'shido',
      url: 'https://shidoscan.com',
      txPage: 'https://shidoscan.com/tx/${txHash}',
      accountPage: 'https://shidoscan.com/address/${accountAddress}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/shido',
      txPage: 'https://explorer.whenmoonwhenlambo.money/shido/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/shido/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
    }]
};
export default info;