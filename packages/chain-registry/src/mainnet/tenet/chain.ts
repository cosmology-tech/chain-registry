import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'tenet',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://tenet.org/',
  pretty_name: 'Tenet',
  chain_id: 'tenet_1559-1',
  bech32_prefix: 'tenet',
  node_home: '$HOME/.tenetd',
  daemon_name: 'tenetd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'atenet',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atenet'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tendermint-1.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://app.rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://tenet_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'tenet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://rpc.tenet.org',
        provider: 'tenet'
      },
      {
        address: 'https://tenet-evm.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/tenet',
      tx_page: 'https://ping.pub/tenet/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Tenet',
      tx_page: 'https://exp.nodeist.net/Tenet/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/tenet',
      tx_page: 'https://explorer.tcnetwork.io/tenet/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/tenet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/tenet',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/tenet/tx/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/tenet/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
    }
  ]
};
export default info;
