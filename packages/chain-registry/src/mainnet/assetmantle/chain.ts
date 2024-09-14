import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'assetmantle',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://assetmantle.one/',
  pretty_name: 'AssetMantle',
  chain_type: 'cosmos',
  chain_id: 'mantle-1',
  bech32_prefix: 'mantle',
  daemon_name: 'mantleNode',
  node_home: '$HOME/.mantleNode',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umntl',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umntl'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg'
  },
  description: 'AssetMantle’s suite of products is focused on the NFT ecosystem, helping you up your game with digital asset ownership.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.assetmantle.one',
        provider: 'AssetMantle'
      },
      {
        address: 'https://rpc-assetmantle.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://assetmantle-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.assetmantle.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-assetmantle-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-assetmantle.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.mantle.paranorm.pro:443',
        provider: 'paranorm'
      },
      {
        address: 'https://assetmantle-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://assetmantle-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://rest.assetmantle.one',
        provider: 'AssetMantle'
      },
      {
        address: 'https://rest-assetmantle.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://api.assetmantle.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-assetmantle-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://assetmantle-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://lcd-assetmantle.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api.mantle.paranorm.pro:443',
        provider: 'paranorm'
      },
      {
        address: 'https://assetmantle-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://assetmantle-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.assetmantle.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-assetmantle-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'assetmantle-grpc.polkachu.com:14690',
        provider: 'Polkachu'
      },
      {
        address: 'assetmantle-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'assetmantle-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/assetmantle',
      tx_page: 'https://ezstaking.app/assetmantle/txs/${txHash}',
      account_page: 'https://ezstaking.app/assetmantle/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/asset-mantle',
      tx_page: 'https://www.mintscan.io/asset-mantle/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/asset-mantle/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/AssetMantle',
      tx_page: 'https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}'
    },
    {
      kind: 'other',
      url: 'https://explorer.assetmantle.one',
      tx_page: 'https://explorer.assetmantle.one/transactions/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://assetmantle.explorers.guru',
      tx_page: 'https://assetmantle.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/assetmantle',
      tx_page: 'https://atomscan.com/assetmantle/transactions/${txHash}',
      account_page: 'https://atomscan.com/assetmantle/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/assetmantle',
      tx_page: 'https://mainnet.whispernode.com/assetmantle/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/assetmantle/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg',
      theme: {
        primary_color_hex: '#f6b620'
      }
    }]
} as const satisfies Chain;
export default info;