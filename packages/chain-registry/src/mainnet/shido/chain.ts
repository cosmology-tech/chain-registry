import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'shido',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://shido.io/',
  pretty_name: 'Shido',
  chain_type: 'cosmos',
  chain_id: 'shido_9008-1',
  bech32_prefix: 'shido',
  node_home: '$HOME/.shidod',
  daemon_name: 'shidod',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'shido',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'shido'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.4',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
  },
  description: 'Developers use Shido as the Ethereum and Wasm Chain to deploy applications of the future. Get all the functionalities of Ethereum and Wasm with the power of IBC and Interchain composability.',
  apis: {
    rpc: [
      {
        address: 'https://tendermint.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rest.shido.256x25.tech:443',
        provider: '256x25'
      },
      {
        address: 'https://rpc.shido.indonode.net:443',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-maverick.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://rpc.kenseishido.com',
        provider: 'KENSEI'
      }
    ],
    rest: [
      {
        address: 'https://swagger.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.shido.256x25.tech:443',
        provider: '256x25'
      },
      {
        address: 'https://api.shido.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api-maverick.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://api.kenseishido.com',
        provider: 'KENSEI'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.shidoscan.com',
        provider: 'shido.io'
      },
      {
        address: 'https://grpc-web.shidoscan.com',
        provider: 'shido.io'
      },
      {
        address: 'https://grpc-maverick.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://grpc.kenseishido.com',
        provider: 'KENSEI'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://rpc-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://rpc-delta-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://evm-maverick.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://evm.kenseishido.com',
        provider: 'KENSEI'
      }
    ]
  },
  explorers: [
    {
      kind: 'shido',
      url: 'https://shidoscan.com',
      tx_page: 'https://shidoscan.com/tx/${txHash}',
      account_page: 'https://shidoscan.com/address/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/shido',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/shido/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/shido/account/${accountAddress}'
    },
    {
      kind: '256x25',
      url: 'https://explorer.256x25.tech/shido',
      tx_page: 'https://explorer.256x25.tech/shido/tx/${txHash}',
      account_page: 'https://explorer.256x25.tech//shido/account/${accountAddress}'
    },
    {
      kind: 'MavNode',
      url: 'https://explorer.mavnode.io/shido',
      tx_page: 'https://explorer.mavnode.io/shido/tx/${txHash}',
      account_page: 'https://explorer.mavnode.io/shido/account/${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/shido',
      tx_page: 'https://explorer.indonode.net/shido/tx/${txHash}',
      account_page: 'https://explorer.indonode.net/shido/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
      theme: {
        primary_color_hex: '#046ffc'
      }
    }]
};
export default info;