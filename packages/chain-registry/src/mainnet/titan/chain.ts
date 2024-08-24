import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'titan',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://titanlab.io/',
  pretty_name: 'Titan',
  chain_type: 'cosmos',
  chain_id: 'titan_18888-1',
  bech32_prefix: 'titan',
  node_home: '$HOME/.titand',
  daemon_name: 'titand',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'atkx',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 110000000000,
        high_gas_price: 200000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atkx'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.47.6-titan.4',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.45.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg',
      theme: {
        primary_color_hex: '#fc641c'
      }
    }],
  apis: {
    rpc: [
      {
        address: 'https://titan-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc.ibs.team',
        provider: 'ibs.team'
      }
    ],
    rest: [
      {
        address: 'https://titan-lcd.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-api.ibs.team',
        provider: 'ibs.team'
      }
    ],
    grpc: [
      {
        address: 'titan-grpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://titan-json-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://tkxscan.io',
      tx_page: 'https://tkxscan.io/Titan/tx/${txHash}',
      account_page: 'https://tkxscan.io/Titan/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg'
  }
};
export default info;