import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'elystestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Elys Network',
  chain_id: 'elystestnet-1',
  bech32_prefix: 'elys',
  daemon_name: 'elysd',
  node_home: '$HOME/.elys',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'uelys'
      }
    ],
    lock_duration: {
      time: '1209600s'
    }
  },
  fees: {
    fee_tokens: [
      {
        denom: 'uelys',
        low_gas_price: 10000,
        average_gas_price: 25000,
        high_gas_price: 30000
      },
      {
        denom:
          'ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65',
        low_gas_price: 10000,
        average_gas_price: 25000,
        high_gas_price: 30000
      },
      {
        denom:
          'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
        low_gas_price: 10000,
        average_gas_price: 25000,
        high_gas_price: 30000
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47',
    cosmwasm_enabled: false
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-testnet-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://elys-testnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-rpc.kleomedes.network:443',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://elys-testnet-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://elys-testnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-api.kleomedes.network:443',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'services.staketab.com:9390',
        provider: 'Staketab'
      },
      {
        address: 'elys-testnet-grpc.itrocket.net:38090',
        provider: 'itrocket'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Elys-Testnet',
      tx_page: 'https://explorer.stavr.tech/Elys-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Elys-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.elys.network/elys',
      tx_page: 'https://testnet.elys.network/elys/tx/${txHash}'
    },
    {
      kind: 'itrocket',
      url: 'https://testnet.itrocket.net/elys',
      tx_page: 'https://testnet.itrocket.net/elys/staking/tx/${txHash}',
      account_page:
        'https://testnet.itrocket.net/elys/account/${accountAddress}'
    }
  ]
};
export default info;
