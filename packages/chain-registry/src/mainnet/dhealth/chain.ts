import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dhealth',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://dhealth.com/',
  pretty_name: 'dHealth',
  chain_id: 'dhealth',
  bech32_prefix: 'dh',
  daemon_name: 'dhealthd',
  node_home: '$HOME/.dhealth',
  key_algos: ['secp256k1'],
  slip44: 10111,
  fees: {
    fee_tokens: [
      {
        denom: 'udhp',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.03,
        high_gas_price: 0.05
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udhp'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'cosmos/cosmos-sdk v0.47.4',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.41.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.dhealth.com',
        provider: 'dhealth'
      },
      {
        address: 'https://rpc.dhealth.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://lcd.dhealth.com',
        provider: 'dhealth'
      },
      {
        address: 'https://api.dhealth.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.dhealth.com:443',
        provider: 'dhealth'
      },
      {
        address: 'https://grpc.dhealth.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      tx_page: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/dhealth/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
    }
  ]
};
export default info;
