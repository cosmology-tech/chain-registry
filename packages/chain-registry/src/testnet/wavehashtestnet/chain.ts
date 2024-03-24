import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'wavehashtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'wavehash Testnet',
  chain_id: 'INVALID-ID-wavehashtestnet-testnet-1',
  bech32_prefix: 'wavehash',
  daemon_name: 'wavehashd',
  node_home: '$HOME/.wavehash',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uwahax',
        low_gas_price: 0.0025,
        average_gas_price: 0.0025,
        high_gas_price: 0.0024
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uwahax'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.wavehash.online/',
        provider: 'WaveHash Network'
      }
    ],
    rest: [
      {
        address: 'https://lcd.wavehash.online/',
        provider: 'WaveHash Network'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.wavehash.online/',
        provider: 'WaveHash Network'
      }
    ]
  },
  explorers: [
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/directory/testnet/wavehashtestnet',
      tx_page:
        'https://atomscan.com/directory/testnet/wavehashtestnet/transactions/${txHash}'
    }
  ]
};
export default info;
