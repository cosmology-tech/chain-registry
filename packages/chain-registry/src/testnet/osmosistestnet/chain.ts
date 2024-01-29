import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_id: 'osmo-test-5',
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
        low_gas_price: 0.0025,
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
    cosmwasm_version: '0.30'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      },
      {
        address: 'https://rpc.testnet.osl.zone/',
        provider: 'OSL'
      }
    ],
    rest: [
      {
        address: 'https://lcd.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/osmosis-testnet',
      tx_page: 'https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.osmotest5.osmosis.zone',
      tx_page:
        'https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}',
      account_page:
        'https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}'
    }
  ],
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }
  ]
};
export default info;
