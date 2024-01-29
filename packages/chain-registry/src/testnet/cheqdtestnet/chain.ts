import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cheqdtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'cheqd',
  chain_id: 'cheqd-testnet-6',
  bech32_prefix: 'cheqd',
  daemon_name: 'cheqd-noded',
  node_home: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ncheq',
        fixed_min_gas_price: 25,
        low_gas_price: 50,
        average_gas_price: 75,
        high_gas_price: 100
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.10'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.network',
        provider: 'cheqd'
      }
    ],
    rest: [
      {
        address: 'https://api.cheqd.network',
        provider: 'cheqd'
      }
    ],
    grpc: [
      {
        address: 'grpc.cheqd.network:443',
        provider: 'cheqd'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://testnet-explorer.cheqd.io/',
      tx_page: 'https://testnet-explorer.cheqd.io/transactions/${txHash}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }
  ]
};
export default info;
