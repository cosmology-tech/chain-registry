import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'titantestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://tokenize.exchange/',
  pretty_name: 'Titan Testnet',
  chain_id: 'titan_18889-1',
  bech32_prefix: 'titan',
  node_home: '$HOME/.titand',
  daemon_name: 'titand',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'atkx',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 110000000000,
        high_gas_price: 200000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atkx'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47.6-titan.3',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.45.0'
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.svg'
    }
  ],
  apis: {
    rpc: [
      {
        address: 'https://titan-testnet-rpc-1.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-2.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-3.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-4.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      }
    ],
    rest: [
      {
        address: 'https://titan-testnet-lcd-1.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-lcd-1.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      }
    ],
    grpc: [],
    'evm-http-jsonrpc': [
      {
        address: 'https://titan-testnet-json-rpc-1.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-json-rpc-2.tokenize-dev.com:443',
        provider: 'Titanlab.io'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://titan-testnet-explorer-light.tokenize-dev.com',
      tx_page:
        'https://titan-testnet-explorer-light.tokenize-dev.com/Titan%20Testnet/tx/${txHash}',
      account_page:
        'https://titan-testnet-explorer-light.tokenize-dev.com/Titan%20Testnet/account/${accountAddress}'
    }
  ]
};
export default info;
