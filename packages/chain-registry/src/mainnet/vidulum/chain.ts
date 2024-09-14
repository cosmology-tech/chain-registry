import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'vidulum',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://vidulum.app/',
  pretty_name: 'Vidulum',
  chain_type: 'cosmos',
  chain_id: 'vidulum-1',
  bech32_prefix: 'vdl',
  daemon_name: 'vidulumd',
  node_home: '$HOME/.vidulum',
  key_algos: ['secp256k1'],
  slip44: 370,
  fees: {
    fee_tokens: [{
        denom: 'uvdl',
        fixed_min_gas_price: 0.0002,
        low_gas_price: 0.002,
        average_gas_price: 0.005,
        high_gas_price: 0.007
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uvdl'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-rpc.vidulum.app/',
        provider: 'vidulum'
      },
      {
        address: 'https://vidulum.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://vidulum.declab.pro:26619',
        provider: 'Decloud Nodes Lab'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-lcd.vidulum.app',
        provider: 'vidulum'
      },
      {
        address: 'https://api-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://vidulum.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-vdl.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://vidulum.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      }
    ],
    grpc: [
      {
        address: 'grpc-vidulum-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'vidulum.grpc.m.stavr.tech:2040',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://vidulum.declab.pro:9013',
        provider: 'Decloud Nodes Lab'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.vidulum.app/vidulum',
      tx_page: 'https://explorers.vidulum.app/vidulum/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/vidulum',
      tx_page: 'https://ping.pub/vidulum/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Vidulum-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Vidulum-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/vidulum',
      tx_page: 'https://atomscan.com/vidulum/transactions/${txHash}',
      account_page: 'https://atomscan.com/vidulum/accounts/${accountAddress}'
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/vidulum',
      tx_page: 'https://explorer.co.id/vidulum/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Vidulum',
      tx_page: 'https://explorer.declab.pro/Vidulum/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
      theme: {
        primary_color_hex: '#3454bc'
      }
    }]
} as const satisfies Chain;
export default info;