import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'evmostestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Evmos Testnet',
  chain_id: 'evmos_9000-4',
  bech32_prefix: 'evmos',
  daemon_name: 'evmosd',
  node_home: '$HOME/.evmosd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'atevmos',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atevmos'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.46'
  },
  apis: {
    rpc: [
      {
        address: 'https://evmos.test.rpc.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://evmos.test.api.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [{
        address: 'https://evmos.test.grpc.coldyvalidator.net',
        provider: 'coldy'
      }, {
        address: 'evmos-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/evmos-testnet',
      tx_page: 'https://mintscan.io/evmos-testnet/txs/${txHash}'
    }, {
      kind: 'NodesGuru',
      url: 'https://testnet.evmos.explorers.guru/',
      tx_page: 'https://testnet.evmos.explorers.guru/transaction/${txHash}'
    }]
};
export default info;