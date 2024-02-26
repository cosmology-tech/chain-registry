import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'zetachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'ZetaChain Testnet',
  chain_id: 'athens_7001-1',
  bech32_prefix: 'zeta',
  daemon_name: 'zetacored',
  node_home: '$HOME/.zetacored',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'azeta',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'azeta'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46'
  },
  apis: {
    rpc: [
      {
        address: 'https://zetachain-athens.blockpi.network/rpc/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-testnet-archive.allthatnode.com:26657',
        provider: 'All That Node'
      }
    ],
    rest: [
      {
        address: 'https://zetachain-athens.blockpi.network/lcd/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-testnet-archive.allthatnode.com:1317',
        provider: 'All That Node'
      }
    ],
    grpc: []
  },
  explorers: [
    {
      kind: 'ZetaScan',
      url: 'https://athens.explorer.zetachain.com/',
      tx_page: 'https://athens.explorer.zetachain.com/cc/tx/${txHash}'
    },
    {
      kind: 'BlockScout',
      url: 'https://zetachain-athens-3.blockscout.com/',
      tx_page: 'https://zetachain-athens-3.blockscout.com/tx/${txHash}'
    }
  ]
};
export default info;
