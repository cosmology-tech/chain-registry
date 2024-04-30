import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terpnetwork',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Terp-Network',
  chainId: 'morocco-1',
  bech32Prefix: 'terp',
  daemonName: 'terp',
  nodeHome: '$HOME/.terp',
  codebase: {

  },
  fees: {
    feeTokens: [{
        denom: 'uthiol',
        fixedMinGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uterp'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-terp.zenchainlabs.io/',
        provider: 'ZenChainLabs'
      },
      {
        address: 'https://terp-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: ' https://terp.rpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ],
    rest: [
      {
        address: 'https://api-terp.zenchainlabs.io:443',
        provider: 'ZenChainLabs'
      },
      {
        address: 'https://terp-mainnet-api.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: ' https://terp.api.nodex.one:443',
        provider: 'nodex.one'
      },
      {
        address: 'https://terp.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.terp.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'terp-mainnet-grpc.itrocket.net:13090',
        provider: 'itrocket.net'
      },
      {
        address: ' https://terp.grpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terp',
      txPage: 'https://ping.pub/terp/tx/${txHash}',
      accountPage: 'https://ping.pub/terp/account/{$accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top',
      txPage: 'https://explorer.nodestake.top/terp/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.top/terp/account/{$accountAddress}'
    },
    {
      kind: 'ZenChainLabs',
      url: 'https://terp.zenscan.io/',
      txPage: 'https://terp.zenscan.io/transaction.php?hash=${txHash}',
      accountPage: 'https://terp.zenscan.io/address.php?address=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Terp-Mainnet',
      txPage: 'https://explorer.stavr.tech/Terp-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Terp-Mainnet/account/{$accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png'
    }],
  slip44: 118
};
export default info;