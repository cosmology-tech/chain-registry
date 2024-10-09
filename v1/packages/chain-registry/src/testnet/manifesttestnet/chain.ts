import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'manifesttestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://liftedinit.org/',
  pretty_name: 'Manifest Testnet',
  chain_id: 'manifest-ledger-beta',
  chain_type: 'cosmos',
  bech32_prefix: 'manifest',
  daemon_name: 'manifest',
  node_home: '$HOME/.manifest',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umfx',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.007,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://nodes.chandrastation.com/rpc/manifest/',
        provider: 'Chandra Station'
      }, {
        address: 'https://manifest-beta-rpc.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.chandrastation.com/api/manifest/',
        provider: 'Chandra Station'
      }, {
        address: 'https://manifest-beta-rest.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-beta-grpc.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://manifest-explorer.vercel.app/',
      tx_page: 'https://manifest-explorer.vercel.app/manifest/tx'
    }]
};
export default info;