import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nyx',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://nymtech.net/',
  pretty_name: 'Nym',
  chain_type: 'cosmos',
  chain_id: 'nyx',
  bech32_prefix: 'n',
  daemon_name: 'nyxd',
  node_home: '$HOME/.nyxd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unym',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }, {
        denom: 'unyx',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unyx'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.nymtech.net/',
        provider: 'Nym'
      },
      {
        address: 'https://rpc.nyx.nodes.guru/',
        provider: 'nodes guru'
      },
      {
        address: 'https://rpc.nym.forbole.com/',
        provider: 'forbole'
      },
      {
        address: 'https://nym-mainnet-rpc.commodum.io/',
        provider: 'commodum'
      },
      {
        address: 'https://nym-rpc.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://nym-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.nyx.nodes.guru/',
        provider: 'nodes guru'
      },
      {
        address: 'https://api.nymtech.net',
        provider: 'Nym'
      }
    ],
    grpc: [{
        address: 'nym-grpc.polkachu.com:15390',
        provider: 'Polkachu'
      }, {
        address: 'grpc.nymtech.net:443',
        provider: 'Nym'
      }]
  },
  explorers: [
    {
      kind: 'Nodes Guru explorer',
      url: 'https://nym.explorers.guru/',
      tx_page: 'https://nym.explorers.guru/transaction/${txHash}',
      account_page: 'https://nym.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/nyx',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=nyx&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=nyx&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/nyx',
      tx_page: 'https://ezstaking.app/nyx/txs/${txHash}',
      account_page: 'https://ezstaking.app/nyx/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/nyx',
      tx_page: 'https://www.mintscan.io/nyx/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/nyx/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/nyx',
      tx_page: 'https://ping.pub/nyx/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
      theme: {
        dark_mode: false,
        circle: true,
        primary_color_hex: '#151525'
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
      theme: {
        dark_mode: true,
        circle: true,
        primary_color_hex: '#141424'
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
      theme: {
        primary_color_hex: '#151525'
      }
    }
  ]
};
export default info;