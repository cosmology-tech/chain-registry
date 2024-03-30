import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'furya',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://furya.xyz/',
  pretty_name: 'furya',
  chain_id: 'furya-1',
  daemon_name: 'furyad',
  node_home: '$HOME/.furyad',
  bech32_prefix: 'furya',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ufury',
        low_gas_price: 0,
        average_gas_price: 0.25,
        high_gas_price: 0.5
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ufury'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.furya.xyz',
        provider: 'Furya Genesis Validator'
      },
      {
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes'
      },
      {
        address: 'https://furya.rpc.nodeshub.online:443',
        provider: 'nodeshub'
      }
    ],
    rest: [
      {
        address: 'https://api.furya.xyz',
        provider: 'Furya Genesis Validator'
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes'
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'Furya Genesis Validator'
      }
    ],
    grpc: [
      {
        address: 'grpc.furya.xyz:443',
        provider: 'Furya Genesis Validator'
      }
    ]
  },
  explorers: [
    {
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.xyz/',
      tx_page: 'https://explorer.furya.xyz/furya/tx/${txHash}',
      account_page: 'https://explorer.furya.xyz/furya/account/${accountAddress}'
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/furya',
      tx_page: 'https://explorer.nodeshub.online/furya/txs/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/furya/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
    }
  ]
};
export default info;
