import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'dhealth',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://dhealth.com/',
  pretty_name: 'dHealth',
  chain_type: 'cosmos',
  chain_id: 'dhealth',
  bech32_prefix: 'dh',
  daemon_name: 'dhealthd',
  node_home: '$HOME/.dhealth',
  key_algos: ['secp256k1'],
  slip44: 10111,
  fees: {
    fee_tokens: [{
        denom: 'udhp',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udhp'
      }]
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
      },
      {
        address: 'https://dhealth.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
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
      },
      {
        address: 'https://dhealth.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
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
      },
      {
        address: 'dhealth.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [{
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      tx_page: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/dhealth/account/${accountAddress}'
    }, {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/dhealth/',
      tx_page: 'https://explorer.nodeshub.online/dhealth/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/dhealth/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
      theme: {
        primary_color_hex: '#140c7c'
      }
    }]
} as const satisfies Chain;
export default info;