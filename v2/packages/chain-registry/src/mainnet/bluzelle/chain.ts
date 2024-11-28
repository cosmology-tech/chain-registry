import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bluzelle',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://bluzelle.com/',
  prettyName: 'Bluzelle',
  chainType: 'cosmos',
  chainId: 'bluzelle-9',
  bech32Prefix: 'bluzelle',
  daemonName: 'curiumd',
  nodeHome: '$HOME/.curium',
  keyAlgos: ['secp256k1'],
  slip44: 483,
  fees: {
    feeTokens: [{
        denom: 'ubnt',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.002,
        averageGasPrice: 0.002,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubnt'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/bluzelle/bluzelle-public',
    recommendedVersion: 'v10.0',
    compatibleVersions: ['v10.0'],
    consensus: {
      type: 'cometbft',
      version: '0.34.23'
    },
    genesis: {
      genesisUrl: 'https://a.client.sentry.net.bluzelle.com:26657/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.45.11'
    },
    ibc: {
      type: 'go',
      version: 'v3.4.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://a.client.sentry.net.bluzelle.com:26657',
        provider: 'Bluzelle'
      },
      {
        address: 'https://b.client.sentry.net.bluzelle.com:26657',
        provider: 'Bluzelle'
      },
      {
        address: 'https://c.client.sentry.net.bluzelle.com:26657',
        provider: 'Bluzelle'
      },
      {
        address: 'https://bluzelle_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://a.client.sentry.net.bluzelle.com:1317',
        provider: 'Bluzelle'
      },
      {
        address: 'https://b.client.sentry.net.bluzelle.com:1317',
        provider: 'Bluzelle'
      },
      {
        address: 'https://c.client.sentry.net.bluzelle.com:1317',
        provider: 'Bluzelle'
      },
      {
        address: 'https://bluzelle-api.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://bluzelle_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'a.client.sentry.net.bluzelle.com:9090',
        provider: 'Bluzelle'
      },
      {
        address: 'b.client.sentry.net.bluzelle.com:9090',
        provider: 'Bluzelle'
      },
      {
        address: 'c.client.sentry.net.bluzelle.com:9090',
        provider: 'Bluzelle'
      },
      {
        address: 'bluzelle-grpc.genznodes.dev:34090',
        provider: 'genznodes'
      },
      {
        address: 'https://grpc-curium.nodine.id:443',
        provider: 'Nodine.ID'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.explorer.net.bluzelle.com/bluzelle',
      txPage: 'https://ping.explorer.net.bluzelle.com/bluzelle/tx/${txHash}',
      accountPage: 'https://ping.explorer.net.bluzelle.com/bluzelle/account/${accountAddress}'
    },
    {
      kind: 'big dipper',
      url: 'https://bd.explorer.net.bluzelle.com',
      txPage: 'https://bd.explorer.net.bluzelle.com/transactions/${txHash}',
      accountPage: 'https://bd.explorer.net.bluzelle.com/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/bluzelle',
      txPage: 'https://explorer.tcnetwork.io/bluzelle/transaction/${txHash}'
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/bluzelle',
      txPage: 'https://explorer.co.id/bluzelle/transaction/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bluzelle',
      txPage: 'https://explorer.whenmoonwhenlambo.money/bluzelle/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/bluzelle/account/${accountAddress}'
    }
  ],
  keywords: [
    'bluzelle',
    'game',
    'gamma4',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg',
      theme: {
        primaryColorHex: '#708ffc'
      }
    }]
};
export default info;