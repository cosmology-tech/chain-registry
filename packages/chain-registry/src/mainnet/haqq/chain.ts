import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'haqq',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://haqq.network/',
  pretty_name: 'Haqq Network',
  chain_id: 'haqq_11235-1',
  bech32_prefix: 'haqq',
  node_home: '$HOME/.haqqd',
  daemon_name: 'haqqd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aISLM',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aISLM'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.5-evmos'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.tm.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://m-s1-tm.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'http://haqq.rpc.nodersteam.com:19657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://haqq-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-haqq.sr20de.xyz:443',
        provider: 'Sr20de'
      }
    ],
    rest: [
      {
        address: 'https://rest.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://m-s1-sdk.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'http://haqq.api.nodersteam.com:19017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://haqq-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://api-haqq.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'grpc://m-s1-grpc.haqq.sh:1337',
        provider: 'kioqq'
      },
      {
        address: 'haqq.grpc.nodersteam.com:9191',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc.haqq.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'haqq-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://haqq-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'mainnet-haqq-grpc.konsortech.xyz:11090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://grpc-haqq.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://rpc.eth.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://m-s1-evm-rpc.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://jsonrpc.haqq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      },
      {
        address: 'https://haqq-jsonrpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-evm.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://evm-haqq.sr20de.xyz',
        provider: 'Sr20de'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.haqq.network',
      tx_page: 'https://explorer.haqq.network/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/haqq',
      tx_page: 'https://ping.pub/haqq/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://haqq.explorers.guru',
      tx_page: 'https://haqq.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/haqq',
      tx_page: 'https://explorer.nodestake.top/haqq/tx/${txHash}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/haqq',
      tx_page: 'https://explorer.konsortech.xyz/haqq/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
    }
  ]
};
export default info;
