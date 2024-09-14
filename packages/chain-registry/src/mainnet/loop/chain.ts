import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'loop',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.loop.fans/',
  pretty_name: 'Loop',
  chain_type: 'cosmos',
  chain_id: 'loop-1',
  bech32_prefix: 'loop',
  daemon_name: 'loopd',
  node_home: '$HOME/.loopchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'token',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    cosmwasm_enabled: true
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      theme: {
        primary_color_hex: '#4991ee'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg'
  },
  description: 'Empowering Artists and Superfans.',
  apis: {
    rpc: [{
        address: 'https://rpc.loop.pfc.zone/',
        provider: 'PFC'
      }],
    rest: [{
        address: 'https://api.loop.pfc.zone/',
        provider: 'PFC'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/loop',
      tx_page: 'https://ping.pfc.zone/loop/tx/${txHash}'
    }],
  keywords: ['fans']
} as const satisfies Chain;
export default info;