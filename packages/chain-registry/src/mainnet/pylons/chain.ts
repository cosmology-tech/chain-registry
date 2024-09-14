import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'pylons',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://pylons.tech',
  pretty_name: 'Pylons',
  chain_type: 'cosmos',
  chain_id: 'pylons-mainnet-1',
  bech32_prefix: 'pylo',
  node_home: '$HOME/.pylons',
  daemon_name: 'pylonsd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubedrock',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.5,
        high_gas_price: 1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubedrock'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.nodejumper.io:443/pylons',
        provider: 'Nodejumper.io'
      }, {
        address: 'https:/pylons-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }],
    rest: [{
        address: 'https://rest.nodejumper.io/pylons',
        provider: 'Nodejumper.io'
      }, {
        address: 'https://pylons-api.noders.services',
        provider: '[NODERS]TEAM'
      }]
  },
  explorers: [{
      kind: 'Nodes.guru',
      url: 'https://pylons.explorers.guru/',
      tx_page: 'https://pylons.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
      theme: {
        primary_color_hex: '#ec4424'
      }
    }]
} as const satisfies Chain;
export default info;