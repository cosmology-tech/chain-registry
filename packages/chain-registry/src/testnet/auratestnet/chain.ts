import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'auratestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://aura.network/',
  pretty_name: 'Aura Euphoria Network',
  chain_id: 'euphoria-2',
  bech32_prefix: 'aura',
  daemon_name: 'aurad',
  node_home: '$HOME/.aura',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ueaura',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ueaura'
      }],
    lock_duration: {
      time: '172800s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47.4',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.41.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.euphoria.aura.network/',
        provider: 'Aura Network Foundation'
      }],
    rest: [{
        address: 'https://lcd.euphoria.aura.network/',
        provider: 'Aura Network Foundation'
      }],
    grpc: [{
        address: 'http://grpc.euphoria.aura.network:9090',
        provider: 'Aura Network Foundation'
      }]
  },
  explorers: [{
      kind: 'aurascan',
      url: 'https://euphoria.aurascan.io',
      tx_page: 'https://euphoria.aurascan.io/transaction/${txHash}',
      account_page: 'https://euphoria.aurascan.io/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
    }]
};
export default info;