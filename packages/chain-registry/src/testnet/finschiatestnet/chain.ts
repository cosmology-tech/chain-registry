import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'finschiatestnet',
  chain_id: 'ebony-2',
  website: 'https://www.finschia.io/',
  pretty_name: 'Ebony',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'tlink',
  daemon_name: 'fnsad',
  node_home: '$HOME/.finschia',
  key_algos: ['secp256k1'],
  slip44: 438,
  fees: {
    fee_tokens: [
      {
        denom: 'tcony',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.015
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'tcony'
      }
    ],
    lock_duration: {
      time: '86400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'github.com/Finschia/finschia-sdk@v0.48.1',
    cosmwasm_enabled: true,
    cosmwasm_version: 'github.com/Finschia/wasmd@v0.2.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://ebony-rpc.finschia.io'
      }
    ],
    rest: [
      {
        address: 'https://ebony-api.finschia.io'
      }
    ],
    grpc: [
      {
        address: 'ebony-grpc.finschia.io:443'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia-testnet',
      tx_page: 'https://www.mintscan.io/finschia-testnet/tx/${txHash}',
      account_page:
        'https://www.mintscan.io/finschia-testnet/address/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
  }
};
export default info;
