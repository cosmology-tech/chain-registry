import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'shareledger',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.sharering.network/',
  pretty_name: 'Shareledger',
  chain_type: 'cosmos',
  chain_id: 'ShareRing-VoyagerNet',
  bech32_prefix: 'shareledger',
  daemon_name: 'shareledger',
  node_home: '$HOME/.shareledger',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'nshr',
        fixed_min_gas_price: 0,
        low_gas_price: 2000,
        average_gas_price: 3000,
        high_gas_price: 4000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nshr'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.27'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.explorer.shareri.ng',
        provider: 'ShareRing'
      }],
    rest: [{
        address: 'https://lcd.explorer.shareri.ng/',
        provider: 'ShareRing'
      }],
    grpc: [{
        address: 'rpc.explorer.shareri.ng:443',
        provider: 'ShareRing'
      }]
  },
  explorers: [{
      kind: 'big dipper',
      url: 'https://explorer.shareri.ng',
      tx_page: 'https://explorer.shareri.ng/transactions/${txHash}',
      account_page: 'https://explorer.shareri.ng/accounts/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
  },
  keywords: ['id'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg',
      theme: {
        primary_color_hex: '#1c2474'
      }
    }]
} as const satisfies Chain;
export default info;