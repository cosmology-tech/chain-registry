import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gateway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://wormhole.com',
  pretty_name: 'Wormhole Gateway',
  chain_id: 'wormchain',
  bech32_prefix: 'wormhole',
  daemon_name: 'wormchaind',
  node_home: '$HOME/.wormchaind',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utest',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uworm'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'github.com/wormhole-foundation/cosmos-sdk@v0.45.9-wormhole-2',
    cosmwasm_enabled: true,
    cosmwasm_version: 'github.com/wormhole-foundation/wasmd@v0.30.0-wormchain-2'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      theme: {
        primary_color_hex: '#0F0C48'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_logo.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png'
  },
  apis: {
    rpc: [{
        address: 'https://tncnt-eu-wormchain-main-01.rpc.p2p.world/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-rpc.quickapi.com/',
        provider: 'ChainLayer'
      }],
    rest: [{
        address: 'https://tncnt-eu-wormchain-main-01.rpc.p2p.world/lcd/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-lcd.quickapi.com/',
        provider: 'ChainLayer'
      }],
    grpc: [{
        address: 'tncnt-eu-wormchain-main-01-grpc.rpc.p2p.world:80',
        provider: 'P2P'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://bigdipper.live/wormhole',
      tx_page: 'https://bigdipper.live/wormhole/transactions/${txHash}',
      account_page: 'https://bigdipper.live/wormhole/accounts/${accountAddress}'
    }],
  keywords: ['bridge']
};
export default info;