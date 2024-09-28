import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'shentu',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.shentu.org/',
  pretty_name: 'Shentu',
  chain_type: 'cosmos',
  chain_id: 'shentu-2.2',
  bech32_prefix: 'shentu',
  daemon_name: 'shentud',
  node_home: '$HOME/.shentud',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uctk',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uctk'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.shentu.org:443',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://rest.shentu.org/',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://shentu-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'grpc.shentu.org:443',
        provider: 'Shentu'
      },
      {
        address: 'shentu-grpc.polkachu.com:14090',
        provider: 'Polkachu'
      },
      {
        address: 'shentu.grpc.m.stavr.tech:9593',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-grpc.ramuchi.tech:12090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-shentu-01.stakeflow.io:2402',
        provider: 'Stakeflow'
      },
      {
        address: 'shentu-grpc.tienthuattoan.ventures:9490',
        provider: 'TienThuatToan'
      },
      {
        address: 'shentu-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'shentu-grpc.panthea.eu:16700',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/shentu',
      tx_page: 'https://ezstaking.app/shentu/txs/${txHash}',
      account_page: 'https://ezstaking.app/shentu/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Shentu-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Shentu-Mainnet/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Shentu-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/shentu',
      tx_page: 'https://www.mintscan.io/shentu/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.org/?chain=shentu-2.2',
      tx_page: 'https://explorer.shentu.org/transactions/${txHash}?chain=shentu-2.2'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/shentu',
      tx_page: 'https://ping.pub/shentu/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/shentu',
      tx_page: 'https://atomscan.com/shentu/transactions/${txHash}',
      account_page: 'https://atomscan.com/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/shentu',
      tx_page: 'https://bigdipper.live/shentu/transactions/${txHash}',
      account_page: 'https://bigdipper.live/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/shentu',
      account_page: 'https://stakeflow.io/shentu/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
      theme: {
        primary_color_hex: '#e4ac4c'
      }
    }]
};
export default info;