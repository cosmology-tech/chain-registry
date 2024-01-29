import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mun',
  website: 'https://mun.money',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Mun',
  chain_id: 'mun-1',
  bech32_prefix: 'mun',
  daemon_name: 'mund',
  node_home: '$HOME/.mun',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umun',
        fixed_min_gas_price: 0.025
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umun'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet1rpc.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.mun.tcnetwork.io',
        provider: 'TC Network'
      }
    ],
    rest: [
      {
        address: 'https://mainnet1.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rest.mun.tcnetwork.io',
        provider: 'TC Network'
      }
    ],
    grpc: []
  },
  explorers: [
    {
      url: 'https://explorer.mun.money/mun',
      tx_page: 'https://explorer.mun.money/mun/${txHash}'
    },
    {
      url: 'https://explorer.indonode.net/mun/staking',
      tx_page: 'https://explorer.indonode.net/mun/${txHash}'
    },
    {
      url: 'https://explorer.konsortech.xyz/mun/staking',
      tx_page: 'https://explorer.konsortech.xyz/mun/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/mun',
      tx_page: 'https://ping.pub/mun/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/mun',
      tx_page: 'https://explorer.tcnetwork.io/mun/transaction/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
    }
  ]
};
export default info;
