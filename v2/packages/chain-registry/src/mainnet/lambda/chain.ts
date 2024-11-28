import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lambda',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Lambda',
  chainType: 'cosmos',
  chainId: 'lambda_92000-1',
  bech32Prefix: 'lamb',
  nodeHome: '$HOME/.lambdavm',
  daemonName: 'lambdavm',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ulamb',
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulamb'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/LambdaIM/lambdavm',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/LambdaIM/mainnet/main/lambda_92000-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.lambda.im',
        provider: 'Lambda'
      },
      {
        address: 'http://lambda.rpc.m.stavr.tech:31327',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lambda.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lambda-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.lambda.im',
        provider: 'Lambda'
      },
      {
        address: 'https://lambda.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.lambda.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lambda-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'http://lambda.grpc.m.stavr.tech:2287',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.lambda.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'lambda-grpc.noders.services:31090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://jsonrpc-lambda.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://lambda-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.lambda.im/',
      txPage: 'https://explorer.lambda.im/tx/${txHash}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/lambda',
      txPage: 'https://explorer.nodestake.top/lambda/txs/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/lambda',
      txPage: 'https://explorer.stavr.tech/lambda/txs/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lambda',
      txPage: 'https://atomscan.com/lambda/transactions/${txHash}',
      accountPage: 'https://atomscan.com/lambda/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/lambda',
      txPage: 'https://explorer.whenmoonwhenlambo.money/lambda/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/lambda/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg',
      theme: {
        primaryColorHex: '#e41c54'
      }
    }]
};
export default info;