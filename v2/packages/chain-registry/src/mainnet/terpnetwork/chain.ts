import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terpnetwork',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Terp-Network',
  chainType: 'cosmos',
  chainId: 'morocco-1',
  bech32Prefix: 'terp',
  slip44: 118,
  daemonName: 'terp',
  nodeHome: '$HOME/.terp',
  codebase: {
    gitRepo: 'https://github.com/terpnetwork/terp-core.git',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/terpnetwork/networks/main/mainnet/morocco-1/genesis.json'
    },
    recommendedVersion: 'v4.2.2',
    compatibleVersions: [
      'v4.1.0',
      'v4.2.0',
      'v4.2.1',
      'v4.2.2'
    ],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.2.2/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.2.2/terpd-linux-arm64'
    }
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
        address: 'https://terp.rpc.nodex.one:443',
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
        address: 'https://terp.api.nodex.one:443',
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
        address: 'https://terp.grpc.nodex.one:443',
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png',
      theme: {
        primaryColorHex: '#a2cd9a'
      }
    }]
};
export default info;