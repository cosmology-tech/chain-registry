import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'galacticatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Galactica Protocol Testnet',
  chain_id: 'galactica_9301-1',
  bech32_prefix: 'gala',
  daemon_name: 'galacticad',
  node_home: '$HOME/.galactica',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'agnet',
        fixed_min_gas_price: 10,
        low_gas_price: 10,
        average_gas_price: 10,
        high_gas_price: 20
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'agnet'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46',
    cosmwasm_enabled: false
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.galactica.test.pfc.zone/',
        provider: 'PFC'
      }
    ],
    rest: [
      {
        address: 'https://api.galactica.test.pfc.zone/',
        provider: 'PFC'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.galactica.test.pfc.zone/',
        provider: 'PFC'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/galactica-testnet',
      tx_page: 'https://ping.pfc.zone/galactica-testnet/tx/${txHash}',
      account_page:
        'https://ping.pfc.zone/galactica-testnet/account/${accountAddress}'
    }
  ],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
    }
  ]
};
export default info;
