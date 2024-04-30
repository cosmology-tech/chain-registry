import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'likecoin',
  status: 'live',
  website: 'https://like.co/',
  networkType: 'mainnet',
  prettyName: 'LikeCoin',
  chainId: 'likecoin-mainnet-2',
  bech32Prefix: 'like',
  daemonName: 'liked',
  nodeHome: '$HOME/.liked',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nanolike',
        fixedMinGasPrice: 1000,
        lowGasPrice: 1000,
        averageGasPrice: 10000,
        highGasPrice: 1000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nanolike'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.46',
    cosmwasmEnabled: false
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-node.like.co/rpc/',
        provider: 'like.co'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/rpc/',
        provider: 'Oldcat'
      },
      {
        address: 'https://like.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer'
      },
      {
        address: 'https://rpc.likecoin.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-node.like.co',
        provider: 'like.co'
      },
      {
        address: 'https://like.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/api/',
        provider: 'Oldcat'
      },
      {
        address: 'https://rest-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer'
      }
    ],
    grpc: [
      {
        address: 'mainnet-node-grpc.like.co:80',
        provider: 'like.co'
      },
      {
        address: 'like.grpc.m.stavr.tech:2000',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/grpc/',
        provider: 'Oldcat'
      },
      {
        address: 'grpc-likecoin-mainnet.pikaser.net:443',
        provider: 'PikaSer'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/likecoin',
      txPage: 'https://www.mintscan.io/likecoin/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/likecoin/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/likecoin',
      txPage: 'https://ezstaking.app/likecoin/txs/${txHash}',
      accountPage: 'https://ezstaking.app/likecoin/account/${accountAddress}'
    },
    {
      kind: 'lunie-ng',
      url: 'https://stake.like.co/'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Likecoin-M',
      txPage: 'https://explorer.stavr.tech/Likecoin-M/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/likecoin',
      txPage: 'https://ping.pub/likecoin/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/likecoin',
      txPage: 'https://atomscan.com/likecoin/transactions/${txHash}',
      accountPage: 'https://atomscan.com/likecoin/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
  },
  keywords: [
    'depub',
    'publishing',
    'like',
    'book',
    'writing',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
    }]
};
export default info;