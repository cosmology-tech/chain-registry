import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-6',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujunox',
        low_gas_price: 0.003,
        average_gas_price: 0.0045,
        high_gas_price: 0.006
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujunox'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.31'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://uni-rpc.reece.sh',
        provider: 'Reecepbcups'
      }
    ],
    rest: [
      {
        address: 'https://api.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://juno.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://uni-api.reece.sh',
        provider: 'Reecepbcups'
      }
    ],
    grpc: [
      {
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://testnet.app.ezstaking.io/juno-testnet',
      tx_page: 'https://testnet.app.ezstaking.io/juno-testnet/txs/${txHash}',
      account_page:
        'https://testnet.app.ezstaking.io/juno-testnet/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      tx_page: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/juno-testnet',
      tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.juno.explorers.guru/',
      tx_page: 'https://testnet.juno.explorers.guru/transaction/${txHash}'
    }
  ]
};
export default info;
