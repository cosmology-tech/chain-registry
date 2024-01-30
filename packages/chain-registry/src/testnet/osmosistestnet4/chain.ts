import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet4',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_id: 'osmo-test-4',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uosmo',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uosmo'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.29'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmo-test.ccvalidators.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://osmosistest-rpc.quickapi.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://rpc.testnet.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://osmosistest-lcd.quickapi.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://lcd.osmo-test.ccvalidators.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://testnet-rest.osmosis.zone/',
        provider: ''
      }
    ],
    grpc: [
      {
        address: 'https://grpc-test.osmosis.zone:443',
        provider: 'Osmosis'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }
  ]
};
export default info;
