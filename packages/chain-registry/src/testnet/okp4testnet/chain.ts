import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'okp4testnet',
  chain_type: 'cosmos',
  chain_id: 'okp4-nemeton-1',
  website: 'https://okp4.network/',
  pretty_name: 'OKP4 Nemeton',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'okp4',
  daemon_name: 'okp4d',
  node_home: '$HOME/.okp4',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uknow',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uknow'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://api.testnet.okp4.network/rpc',
        provider: 'OKP4'
      },
      {
        address: 'https://okptest-rpc.quickapi.com',
        provider: 'Chainlayer'
      },
      {
        address: 'http://okp.rpc.t.stavr.tech:10097',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://okp4-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://okptest-lcd.quickapi.com',
        provider: 'Chainlayer'
      },
      {
        address: 'https://okp4.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://okp4-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'okp4-testnet-grpc.polkachu.com:17690',
        provider: 'Polkachu'
      },
      {
        address: 'http://okp.grpc.t.stavr.tech:8029',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.testnet.okp4.network:443',
        provider: 'OKP4'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/OKP4%20testnet',
      tx_page: 'https://testnet.ping.pub/OKP4%20testnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/OKP4-Testnet',
      tx_page: 'https://explorer.stavr.tech/OKP4-Testnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explore.okp4.network/OKP4%20testnet',
      tx_page: 'https://explore.okp4.network/OKP4%20testnet/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
    }]
};
export default info;