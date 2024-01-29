import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'entrypointtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'EntryPoint Testnet',
  chain_id: 'entrypoint-pubtest-2',
  bech32_prefix: 'entrypoint',
  daemon_name: 'entrypointd',
  node_home: '$HOME/.entrypointd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
        low_gas_price: 0.01,
        average_gas_price: 0.01,
        high_gas_price: 0.02
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uentry'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47.4'
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc.entrypoint.zone',
        provider: 'Simply Staking'
      }
    ],
    rest: [
      {
        address: 'https://entry.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://testnet-rest.entrypoint.zone',
        provider: 'Simply Staking'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.entrypoint.zone/entrypoint',
      tx_page: 'https://explorer.entrypoint.zone/entrypoint/tx/${txHash}',
      account_page:
        'https://explorer.entrypoint.zone/entrypoint/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Entrypoint-Testnet',
      tx_page: 'https://explorer.stavr.tech/Entrypoint-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Entrypoint-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/entrypoint',
      tx_page: 'https://testnet.ping.pub/entrypoint/tx/${txHash}',
      account_page:
        'https://testnet.ping.pub/entrypoint/account/${accountAddress}'
    }
  ],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
    }
  ]
};
export default info;
