import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'scorum',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Scorum Network',
  chain_id: 'scorum-1',
  bech32_prefix: 'scorum',
  daemon_name: 'scorumd',
  node_home: '$HOME/.scorum',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'gas',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'nsp'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://scorum-blockchain-mainnet-rpc-1.scorum.com',
        provider: 'scorum'
      },
      {
        address: 'https://scorum-blockchain-mainnet-rpc-2.scorum.com',
        provider: 'scorum'
      }
    ],
    rest: [
      {
        address: 'https://scorum-blockchain-mainnet-api-1.scorum.com',
        provider: 'scorum'
      },
      {
        address: 'https://scorum-blockchain-mainnet-api-2.scorum.com',
        provider: 'scorum'
      }
    ],
    grpc: [
      {
        address: 'https://scorum-blockchain-mainnet-grpc-1.scorum.com',
        provider: 'scorum'
      },
      {
        address: 'https://scorum-blockchain-mainnet-grpc-2.scorum.com',
        provider: 'scorum'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/scorum',
      tx_page: 'https://app.ezstaking.io/scorum/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/scorum/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://cosmos.scorum.com/scorum',
      tx_page: 'https://cosmos.scorum.com/scorum/transactions/${txHash}',
      account_page:
        'https://cosmos.scorum.com/scorum/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg'
    }
  ]
};
export default info;
