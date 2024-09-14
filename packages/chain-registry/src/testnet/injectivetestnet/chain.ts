import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'injectivetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://injective.com',
  pretty_name: 'Injective',
  chain_type: 'cosmos',
  chain_id: 'injective-888',
  bech32_prefix: 'inj',
  extra_codecs: ['injective'],
  slip44: 60,
  daemon_name: 'injectived',
  node_home: '$HOME/.injectived',
  fees: {
    fee_tokens: [{
        denom: 'inj',
        fixed_min_gas_price: 160000000,
        low_gas_price: 500000000,
        average_gas_price: 700000000,
        high_gas_price: 900000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'inj'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://injective-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://testnet.sentry.tm.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.tm.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://injective-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://injective-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://testnet.sentry.lcd.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.lcd.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://injective-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'injective-testnet-grpc.polkachu.com:14390',
        provider: 'Polkachu'
      },
      {
        address: 'testnet.sentry.chain.grpc.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.grpc.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'injective-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [{
      kind: 'injectiveprotocol',
      url: 'https://testnet.explorer.injective.network/',
      tx_page: 'https://testnet.explorer.injective.network/transaction/${txHash}'
    }]
} as const satisfies Chain;
export default info;