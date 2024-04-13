import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'swisstroniktestnet',
  chain_id: 'swisstronik_1291-1',
  pretty_name: 'Swisstronik Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'swtr',
  daemon_name: 'swisstronikd',
  node_home: '$HOME/.swisstronik',
  key_algos: ['secp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'uswtr',
        fixed_min_gas_price: 7
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uswtr'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.47'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.swisstronik.comunitynode.my.id',
        provider: 'ComunityNode'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rest.swisstronik.comunitynode.my.id/',
        provider: 'Comunitynode'
      }
    ],
    grpc: [{
        address: 'testnet-swisstronik-grpc.genznodes.dev:20090',
        provider: 'genznodes'
      }],
    "evm-http-jsonrpc": [
      {
        address: 'https://json-rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://evm.swisstronik.comunitynode.my.id',
        provider: 'comunitynode'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik',
      tx_page: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik/tx/${txHash}'
    }]
};
export default info;