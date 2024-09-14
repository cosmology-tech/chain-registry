import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'symphonytestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Symphony Testnet',
  chain_type: 'cosmos',
  chain_id: 'symphony-testnet-3',
  bech32_prefix: 'symphony',
  daemon_name: 'symphonyd',
  node_home: '$HOME/.symphonyd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'note',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.47.8',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30'
  },
  apis: {
    rpc: [{
        address: 'https://symphony.test.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    rest: [{
        address: 'https://symphony.test.api.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    grpc: [{
        address: 'https://symphony.test.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
    }]
} as const satisfies Chain;
export default info;