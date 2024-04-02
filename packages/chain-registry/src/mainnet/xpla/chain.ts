import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  network_type: 'mainnet',
  pretty_name: 'XPLA',
  chain_id: 'dimension_37-1',
  bech32_prefix: 'xpla',
  daemon_name: 'xplad',
  node_home: '$HOME/.xpla',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'axpla',
        fixed_min_gas_price: 850000000000,
        low_gas_price: 850000000000,
        average_gas_price: 1147500000000,
        high_gas_price: 1487500000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'axpla'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'xpladev/cosmos-sdk v0.45.20-xpla',
    cosmwasm_version: 'v0.33.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD'
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    grpc: [],
    'evm-http-jsonrpc': [
      {
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io',
      tx_page: 'https://explorer.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      tx_page: 'https://finder.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      tx_page: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/xpla/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      tx_page: 'https://ezstaking.app/xpla/txs/${txHash}',
      account_page: 'https://ezstaking.app/xpla/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
    }
  ]
};
export default info;
