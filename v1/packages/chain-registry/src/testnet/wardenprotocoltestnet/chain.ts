import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'wardenprotocoltestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Warden Protocol Buenavista',
  chain_type: 'cosmos',
  chain_id: 'buenavista-1',
  bech32_prefix: 'warden',
  daemon_name: 'wardend',
  node_home: '$HOME/.warden',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uward',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uward'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.50'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    rest: [{
        address: 'https://api.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    grpc: [{
        address: 'https://grpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
  },
  explorers: [],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
    }]
};
export default info;