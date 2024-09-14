import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'upticktestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.uptickproject.com/',
  pretty_name: 'Uptick',
  chain_type: 'cosmos',
  chain_id: 'uptick_7000-2',
  bech32_prefix: 'uptick',
  daemon_name: 'uptickd',
  node_home: '$HOME/.uptickd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'auptick',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.46.5'
  },
  apis: {
    rpc: [{
        address: 'https://uptick-7000-2-rpc.staketab.org:443',
        provider: 'Staketab'
      }],
    rest: [{
        address: 'https://uptick-7000-2-rest.staketab.org',
        provider: 'Staketab'
      }],
    grpc: [{
        address: 'services.staketab.com:9004',
        provider: 'Staketab'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.testnet.uptick.network/uptick-network-testnet',
      tx_page: 'https://explorer.testnet.uptick.network/uptick-network-testnet/tx/${txHash}'
    }, {
      kind: 'Nodes.Guru',
      url: 'https://uptick.explorers.guru/',
      tx_page: 'https://uptick.explorers.guru/transaction/${txHash}'
    }]
} as const satisfies Chain;
export default info;