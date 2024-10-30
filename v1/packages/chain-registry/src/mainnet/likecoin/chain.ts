import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'likecoin',
  status: 'live',
  website: 'https://like.co/',
  network_type: 'mainnet',
  pretty_name: 'LikeCoin',
  chain_type: 'cosmos',
  chain_id: 'likecoin-mainnet-2',
  bech32_prefix: 'like',
  daemon_name: 'liked',
  node_home: '$HOME/.liked',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'nanolike',
        fixed_min_gas_price: 1000,
        low_gas_price: 1000,
        average_gas_price: 10000,
        high_gas_price: 1000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nanolike'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.46'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/likecoin',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=likecoin&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=likecoin&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/likecoin',
      tx_page: 'https://ezstaking.app/likecoin/txs/${txHash}',
      account_page: 'https://ezstaking.app/likecoin/account/${accountAddress}'
    },
    {
      kind: 'lunie-ng',
      url: 'https://stake.like.co/'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Likecoin-M',
      tx_page: 'https://explorer.stavr.tech/Likecoin-M/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/likecoin',
      tx_page: 'https://ping.pub/likecoin/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/likecoin',
      tx_page: 'https://atomscan.com/likecoin/transactions/${txHash}',
      account_page: 'https://atomscan.com/likecoin/accounts/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
  },
  keywords: [
    'ebook',
    'depub',
    'publishing',
    'like',
    'book',
    'writing',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
      theme: {
        primary_color_hex: '#2e656d'
      }
    }]
};
export default info;