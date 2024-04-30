import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stride',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://stride.zone/',
  prettyName: 'Stride',
  chainId: 'stride-1',
  bech32Prefix: 'stride',
  daemonName: 'strided',
  nodeHome: '$HOME/.stride',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ustrd',
        fixedMinGasPrice: 0.0005,
        lowGasPrice: 0.0005,
        averageGasPrice: 0.001,
        highGasPrice: 0.002
      },
      {
        denom: 'stuatom',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0002,
        highGasPrice: 0.0005
      },
      {
        denom: 'stuosmo',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.004
      },
      {
        denom: 'stustars',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1.1,
        highGasPrice: 1.2
      },
      {
        denom: 'stujuno',
        fixedMinGasPrice: 0.075,
        lowGasPrice: 0.075,
        averageGasPrice: 0.1,
        highGasPrice: 0.125
      },
      {
        denom: 'stuluna',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.0125,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      },
      {
        denom: 'staevmos',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      },
      {
        denom: 'stinj',
        fixedMinGasPrice: 500000000,
        lowGasPrice: 500000000,
        averageGasPrice: 700000000,
        highGasPrice: 900000000
      },
      {
        denom: 'stucmdx',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      },
      {
        denom: 'stuumee',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.12,
        highGasPrice: 0.2
      },
      {
        denom: 'stutia',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      },
      {
        denom: 'stadydx',
        fixedMinGasPrice: 15000000000,
        lowGasPrice: 15000000000,
        averageGasPrice: 15000000000,
        highGasPrice: 20000000000
      },
      {
        denom: 'stadym',
        fixedMinGasPrice: 15000000000,
        lowGasPrice: 15000000000,
        averageGasPrice: 15000000000,
        highGasPrice: 20000000000
      },
      {
        denom: 'stusaga',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.015,
        highGasPrice: 0.03
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustrd'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'Stride-Labs/cosmos-sdk v0.47.10-stride-distribution-fix-0'
  },
  description: 'Stride is a blockchain that provides liquidity for staked tokens. Using Stride, you can earn both taking and DeFi yields across the Cosmos IBC ecosystem.',
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
      txPage: 'https://explorer.bccnodes.com/stride-M/tx/${txHash}',
      accountPage: 'https://explorer.bccnodes.com/stride-M/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stride',
      txPage: 'https://ezstaking.app/stride/txs/${txHash}',
      accountPage: 'https://ezstaking.app/stride/account/${accountAddress}'
    },
    {
      kind: 'Apollo',
      url: 'https://apollo.chandrastation.com/stride',
      txPage: 'https://apollo.chandrastation.com/stride/tx/${txHash}',
      accountPage: 'https://apollo.chandrastation.com/stride/account/${accountAddress}'
    },
    {
      kind: 'Stride Ping Pub',
      url: 'https://explorer.stride.zone/stride',
      txPage: 'https://explorer.stride.zone/stride/tx/${txHash}',
      accountPage: 'https://explorer.stride.zone/stride/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/stride',
      txPage: 'https://explorer.stavr.tech/stride/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/stride/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stride',
      txPage: 'https://www.mintscan.io/stride/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stride',
      txPage: 'https://atomscan.com/stride/transactions/${txHash}',
      accountPage: 'https://atomscan.com/stride/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/stride',
      accountPage: 'https://stakeflow.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/stride',
      txPage: 'https://explorer.stake-take.com/stride/tx/${txHash}',
      accountPage: 'https://explorer.stake-take.com/stride/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
    }]
};
export default info;