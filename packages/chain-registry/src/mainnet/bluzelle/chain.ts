import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bluzelle',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://bluzelle.com/',
  pretty_name: 'Bluzelle',
  chain_id: 'bluzelle-9',
  bech32_prefix: 'bluzelle',
  daemon_name: 'curiumd',
  node_home: '$HOME/.curium',
  key_algos: ['secp256k1'],
  slip44: 483,
  fees: {
    fee_tokens: [{
        denom: 'ubnt',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.002,
        average_gas_price: 0.002,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubnt'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.11'
  },
  logo_URIs: {
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
      tx_page: 'https://ping.explorer.net.bluzelle.com/bluzelle/tx/${txHash}',
      account_page: 'https://ping.explorer.net.bluzelle.com/bluzelle/account/${accountAddress}'
    },
    {
      kind: 'big dipper',
      url: 'https://bd.explorer.net.bluzelle.com',
      tx_page: 'https://bd.explorer.net.bluzelle.com/transactions/${txHash}',
      account_page: 'https://bd.explorer.net.bluzelle.com/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/bluzelle',
      tx_page: 'https://explorer.tcnetwork.io/bluzelle/transaction/${txHash}'
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/bluzelle',
      tx_page: 'https://explorer.co.id/bluzelle/transaction/${txHash}'
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
        primary_color_hex: '#708ffc'
      }
    }]
};
export default info;