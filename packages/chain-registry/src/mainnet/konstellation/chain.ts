import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'konstellation',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://konstellation.tech/',
  pretty_name: 'Konstellation',
  chain_type: 'cosmos',
  chain_id: 'darchub',
  bech32_prefix: 'darc',
  daemon_name: 'knstld',
  node_home: '$HOME/.knstld',
  slip44: 118,
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png'
  },
  fees: {
    fee_tokens: [{
        denom: 'udarc',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.001,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udarc'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    rest: [{
        address: 'https://api-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rest.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    grpc: [
      {
        address: 'grpc-konstellation-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'konstellation-grpc.polkachu.com:13390',
        provider: 'Polkachu'
      },
      {
        address: 'konstellation-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'konstellation-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [{
      kind: 'konstellation',
      url: 'https://explorer.konstellation.tech/',
      tx_page: 'https://explorer.konstellation.tech/tx/${txHash}'
    }, {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/konstellation',
      tx_page: 'https://cosmotracker.com/konstellation/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png',
      theme: {
        primary_color_hex: '#a3d3fb'
      }
    }]
} as const satisfies Chain;
export default info;