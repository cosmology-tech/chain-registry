import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stride',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://stride.zone/',
  pretty_name: 'Stride',
  chain_id: 'stride-1',
  bech32_prefix: 'stride',
  daemon_name: 'strided',
  node_home: '$HOME/.stride',
  key_algos: ['ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ustrd',
        fixed_min_gas_price: 0.0005,
        low_gas_price: 0.0005,
        average_gas_price: 0.001,
        high_gas_price: 0.002
      },
      {
        denom: 'stuatom',
        fixed_min_gas_price: 0.0001,
        low_gas_price: 0.0001,
        average_gas_price: 0.0002,
        high_gas_price: 0.0005
      },
      {
        denom: 'stuosmo',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.004
      },
      {
        denom: 'stustars',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1.1,
        high_gas_price: 1.2
      },
      {
        denom: 'stujuno',
        fixed_min_gas_price: 0.075,
        low_gas_price: 0.075,
        average_gas_price: 0.1,
        high_gas_price: 0.125
      },
      {
        denom: 'stuluna',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.04
      },
      {
        denom: 'staevmos',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      },
      {
        denom: 'stinj',
        fixed_min_gas_price: 500000000,
        low_gas_price: 500000000,
        average_gas_price: 700000000,
        high_gas_price: 900000000
      },
      {
        denom: 'stucmdx',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      },
      {
        denom: 'stuumee',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.12,
        high_gas_price: 0.2
      },
      {
        denom: 'stutia',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      },
      {
        denom: 'stadydx',
        fixed_min_gas_price: 15000000000,
        low_gas_price: 15000000000,
        average_gas_price: 15000000000,
        high_gas_price: 20000000000
      },
      {
        denom: 'stadym',
        fixed_min_gas_price: 15000000000,
        low_gas_price: 15000000000,
        average_gas_price: 15000000000,
        high_gas_price: 20000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ustrd'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version:
      'Stride-Labs/cosmos-sdk v0.47.10-stride-distribution-fix-0'
  },
  description:
    'Stride is a blockchain that provides liquidity for staked tokens. Using Stride, you can earn both taking and DeFi yields across the Cosmos IBC ecosystem.',
  apis: {
    rpc: [
      {
        address: 'https://stride-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://stride-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️'
      },
      {
        address: 'https://stride-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.stride.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://rpc-stride.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://stride.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-stride.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-stride.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-stride.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://stride-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-stride-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://stride-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://stride-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/stride/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://stride-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.stride.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/stride/rpc',
        provider: 'Stakewolle'
      }
    ],
    rest: [
      {
        address: 'https://stride-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-stride.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://stride-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.stride.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://stride.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-stride.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://stride-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-stride.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://lcd-stride.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-stride-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://stride-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://stride-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/stride/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://stride-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.stride.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/stride/rest',
        provider: 'Stakewolle'
      }
    ],
    grpc: [
      {
        address: 'stride.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'stride-grpc.polkachu.com:12290',
        provider: 'Polkachu'
      },
      {
        address: 'stride-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://stride.grpc.m.stavr.tech:9986',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-stride.cosmos-spaces.cloud:1140',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'stride-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'stride.grpc.kjnodes.com:11690',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-stride-01.stakeflow.io:1802',
        provider: 'Stakeflow'
      },
      {
        address: 'stride-grpc.w3coins.io:12290',
        provider: 'w3coins'
      },
      {
        address: 'stride-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'stride-grpc.stakeandrelax.net:12290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.stride.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/stride-M',
      tx_page: 'https://explorer.bccnodes.com/stride-M/tx/${txHash}',
      account_page:
        'https://explorer.bccnodes.com/stride-M/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stride',
      tx_page: 'https://ezstaking.app/stride/txs/${txHash}',
      account_page: 'https://ezstaking.app/stride/account/${accountAddress}'
    },
    {
      kind: 'Apollo',
      url: 'https://apollo.chandrastation.com/stride',
      tx_page: 'https://apollo.chandrastation.com/stride/tx/${txHash}',
      account_page:
        'https://apollo.chandrastation.com/stride/account/${accountAddress}'
    },
    {
      kind: 'Stride Ping Pub',
      url: 'https://explorer.stride.zone/stride',
      tx_page: 'https://explorer.stride.zone/stride/tx/${txHash}',
      account_page:
        'https://explorer.stride.zone/stride/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/stride',
      tx_page: 'https://explorer.stavr.tech/stride/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/stride/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stride',
      tx_page: 'https://www.mintscan.io/stride/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/stride',
      tx_page: 'https://bigdipper.live/stride/transactions/${txHash}',
      account_page: 'https://bigdipper.live/stride/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stride',
      tx_page: 'https://atomscan.com/stride/transactions/${txHash}',
      account_page: 'https://atomscan.com/stride/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/stride',
      account_page: 'https://stakeflow.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/stride',
      tx_page: 'https://explorer.stake-take.com/stride/tx/${txHash}',
      account_page:
        'https://explorer.stake-take.com/stride/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
    }
  ]
};
export default info;
