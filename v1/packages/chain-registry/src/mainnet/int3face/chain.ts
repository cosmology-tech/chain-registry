import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'int3face',
  chain_type: 'cosmos',
  chain_id: 'int3face-1',
  pretty_name: 'Int3face',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://int3face.io/',
  bech32_prefix: 'int3',
  daemon_name: 'int3',
  node_home: '$HOME/.int3faced',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uint3',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uint3'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
  },
  description: 'Int3face is a cross-chain bridge that connects the Cosmos ecosystem with other blockchains.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }],
    rest: [{
        address: 'https://api.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.int3face.zone',
      tx_page: 'https://explorer.int3face.zone/tx/${txHash}'
    }],
  images: [{
      image_sync: {
        chain_name: 'int3face',
        base_denom: 'uint3'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
      theme: {
        primary_color_hex: '#040404'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3face-chain-logo.png',
      theme: {
        primary_color_hex: '#040404',
        circle: false
      }
    }]
};
export default info;