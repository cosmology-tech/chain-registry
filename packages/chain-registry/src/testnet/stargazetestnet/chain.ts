import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'stargazetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://stargaze.zone/',
  pretty_name: 'Stargaze Testnet',
  chain_id: 'elgafar-1',
  bech32_prefix: 'stars',
  daemon_name: 'starsd',
  node_home: '$HOME/.starsd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ustars',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.28'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }
    ],
    rest: [
      {
        address: 'https://rest.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }
    ],
    grpc: [
      {
        address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      },
      {
        address: 'http://grpc-2.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet-explorer.publicawesome.dev/stargaze',
      tx_page:
        'https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}'
    }
  ]
};
export default info;
