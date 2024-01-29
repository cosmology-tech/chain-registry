import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'doravotatestnet2',
  chain_id: 'vota-vk',
  pretty_name: 'Dora Vota Incentive Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'dora',
  daemon_name: 'dorad',
  node_home: '$HOME/.dora',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'peaka',
        fixed_min_gas_price: 100000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'peaka'
      }
    ]
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: 'https://vota-vk-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }
    ],
    rest: [
      {
        address: 'https://vota-vk-rest.dorafactory.org',
        provider: 'dorafactory'
      }
    ],
    grpc: [
      {
        address: 'vota-vk-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }
    ]
  },
  explorers: [
    {
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-vk-explorer.dorafactory.org',
      tx_page:
        'https://vota-vk-explorer.dorafactory.org/doravotaincentive/tx/${txHash}'
    }
  ]
};
export default info;
