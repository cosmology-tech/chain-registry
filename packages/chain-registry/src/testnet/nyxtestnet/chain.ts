import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'nyxtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://nymtech.net/',
  pretty_name: 'Nym',
  chain_type: 'cosmos',
  chain_id: 'sandbox',
  bech32_prefix: 'n',
  daemon_name: 'nyxd',
  node_home: '$HOME/.nyxd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unym',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }, {
        denom: 'unyx',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unyx'
      }],
    lock_duration: {
      time: '432000s'
    }
  },
  codebase: {
    cosmwasm_enabled: true
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sandbox.nymtech.net',
        provider: 'Nym'
      }],
    rest: [{
        address: 'https://api.sandbox.nymtech.net',
        provider: 'Nym'
      }],
    grpc: [{
        address: 'grpc.sandbox.nymtech.net:443',
        provider: 'Nym'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://sandbox-blocks.nymtech.net/sandbox',
      tx_page: 'https://sandbox-blocks.nymtech.net/sandbox/tx/${txHash}'
    }],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
      theme: {
        dark_mode: false,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.svg',
      theme: {
        dark_mode: true,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png'
    }
  ]
} as const satisfies Chain;
export default info;