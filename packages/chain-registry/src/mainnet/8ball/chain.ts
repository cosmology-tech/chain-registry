import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: '8ball',
  status: 'live',
  website: 'https://8ball.info/',
  network_type: 'mainnet',
  pretty_name: '8ball',
  chain_id: 'eightball-1',
  bech32_prefix: '8ball',
  daemon_name: '8ball',
  node_home: '$HOME/.8ball',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uebl',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uebl'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.7',
    cosmwasm_enabled: true
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.8ball.info/',
        provider: '8ball'
      },
      {
        address: 'https://rpc.8ball.nodestake.top',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://rest.8ball.info',
        provider: '8ball'
      },
      {
        address: 'https://api.8ball.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-8ball.nodine.id/',
        provider: 'Nodine.ID'
      }
    ],
    grpc: [
      {
        address: 'grpc.8ball.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc.8ball.nodexcapital.com:443',
        provider: 'NodeX Validator'
      }
    ]
  },
  explorers: [
    {
      url: 'https://explorer.8ball.info/',
      tx_page: 'https://explorer.8ball.info/8ball/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/8ball',
      tx_page: 'https://ping.pub/8ball/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/8ball/',
      tx_page: 'https://explorer.nodestake.top/8ball/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/8ball',
      tx_page: 'https://explorer.tcnetwork.io/8ball/transaction/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.co.id/8ball',
      tx_page: 'https://explorer.co.id/8ball/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/8ball',
      tx_page: 'https://explorer.nodexcapital.com/8ball/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
    }
  ]
};
export default info;
