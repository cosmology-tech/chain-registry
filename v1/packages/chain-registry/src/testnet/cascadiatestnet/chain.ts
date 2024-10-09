import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cascadiatestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://cascadia.foundation/',
  pretty_name: 'Cascadia',
  chain_type: 'cosmos',
  chain_id: 'cascadia_6102-1',
  bech32_prefix: 'cascadia',
  daemon_name: 'cascadiad',
  node_home: '$HOME/.cascadiad',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aCC',
        fixed_min_gas_price: 0,
        low_gas_price: 7,
        average_gas_price: 10,
        high_gas_price: 15
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aCC'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.46.10',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png',
      theme: {
        primary_color_hex: '#004A96'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cascadia.foundation:443',
        provider: 'cascadia'
      },
      {
        address: 'https://cscd-rpc.systemd.run:443',
        provider: 'systemd'
      },
      {
        address: 'https://api.cascadia-t.indonode.net:443',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-test.cascadia.hexnodes.co:443',
        provider: 'Hexnodes'
      }
    ],
    grpc: [
      {
        address: 'grpc.cascadia.foundation:443',
        provider: 'cascadia'
      },
      {
        address: 'cscd-grpc.systemd.run:443',
        provider: 'systemd'
      },
      {
        address: 'grpc.cascadia-t.indonode.net:43090',
        provider: 'Indonode'
      },
      {
        address: 'grpc-test.cascadia.hexnodes.co:19090',
        provider: 'Hexnodes'
      }
    ],
    rest: [
      {
        address: 'https://lcd.cascadia.foundation',
        provider: 'cascadia'
      },
      {
        address: 'https://cscd-api.systemd.run',
        provider: 'systemd'
      },
      {
        address: 'https://api.cascadia-t.indonode.net/',
        provider: 'Indonode'
      },
      {
        address: 'https://lcd-test.cascadia.hexnodes.co',
        provider: 'Hexnodes'
      }
    ]
  },
  explorers: [{
      kind: 'validator_explorer',
      url: 'https://validator.cascadia.foundation/',
      tx_page: 'https://validator.cascadia.foundation/transactions/${txHash}',
      account_page: 'https://validator.cascadia.foundation/accounts/${accountAddress}'
    }, {
      kind: 'block_explorer',
      url: 'https://explorer.cascadia.foundation/',
      tx_page: 'https://explorer.cascadia.foundation/tx/${txHash}',
      account_page: 'https://explorer.cascadia.foundation/address/${accountAddress}'
    }],
  keywords: [
    'cascadia',
    'cosmos',
    'evm',
    'cybernetic'
  ]
};
export default info;