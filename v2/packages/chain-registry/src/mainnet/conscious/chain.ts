import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'conscious',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cvn.io/',
  prettyName: 'ConsciousDAO',
  chainType: 'cosmos',
  chainId: 'cvn_2032-1',
  bech32Prefix: 'cvn',
  nodeHome: '$HOME/.cvnd',
  daemonName: 'cvnd',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'acvnt',
        fixedMinGasPrice: 100000000,
        lowGasPrice: 100000000,
        averageGasPrice: 200000000,
        highGasPrice: 300000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'acvnt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cvn-network/cvn',
    recommendedVersion: 'v2.1.1',
    compatibleVersions: ['v2.1.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cvn-network/cvn/release/v2.1.x/networks/mainnet/config/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cvn.io/',
        provider: 'cvn.io'
      }, {
        address: 'https://conscious_mainnet_rpc.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://api.cvn.io',
        provider: 'cvn.io'
      }, {
        address: 'https://conscious_mainnet_api.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'https://grpc.cvn.io',
        provider: 'cvn.io'
      }],
    evmHttpJsonrpc: [
      {
        address: 'https://node.cvn.io/',
        provider: 'cvn'
      },
      {
        address: 'https://node.consciousdao.io/',
        provider: 'consciousdao'
      },
      {
        address: 'https://conscious_mainnet_evm.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/conscious',
      txPage: 'https://staking-explorer.com/transaction.php?chain=conscious&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=conscious&addr=${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://explore.consciousdao.com/',
      txPage: 'https://explore.consciousdao.com/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/conscious',
      txPage: 'https://explorer.whenmoonwhenlambo.money/conscious/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/conscious/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
      theme: {
        primaryColorHex: '#047e04'
      }
    }]
};
export default info;