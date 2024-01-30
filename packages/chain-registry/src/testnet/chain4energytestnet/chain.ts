import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chain4energytestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://c4e.io/',
  pretty_name: 'Chain4Energy Testnet',
  chain_id: 'babajaga-1',
  bech32_prefix: 'c4e',
  daemon_name: 'c4ed',
  node_home: '$HOME/.c4e-chain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uc4e',
        fixed_min_gas_price: 0,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uc4e'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet.c4e.io',
        provider: 'C4E'
      }
    ],
    rest: [
      {
        address: 'https://c4e.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lcd-testnet.c4e.io',
        provider: 'C4E'
      }
    ],
    grpc: [
      {
        address: 'grpc-testnet.c4e.io:8443',
        provider: 'C4E'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/C4E-Testnet',
      tx_page: 'https://explorer.stavr.tech/C4E-Testnet/transactions/${txHash}'
    },
    {
      kind: 'explorer',
      url: 'https://explorer-testnet.c4e.io/',
      tx_page: 'https://explorer-testnet.c4e.io/transactions/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
    }
  ]
};
export default info;
