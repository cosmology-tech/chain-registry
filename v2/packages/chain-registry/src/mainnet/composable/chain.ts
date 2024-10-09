import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'composable',
  chainId: 'centauri-1',
  website: 'https://www.composable.finance/',
  prettyName: 'Composable',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'centauri',
  daemonName: 'centaurid',
  nodeHome: '$HOME/.banksy',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ppica',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ppica'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'rust-ninja/cosmos-sdk v0.47.5-patch-validators-trim-tag'
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
  },
  description: 'Picasso is a DeFi infrastructure-focused Layer 1 protocol that leads the industry in building the trust-minimized interoperability solution -Cross-Ecosystem IBC. Complementary to the interoperability work, Picasso is building the first Generalized Restaking Layer starting with deployment on Solana, and expand support for all IBC connected ecosystems.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://composable-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://composable-rpc.cogwheel.zone:443',
        provider: 'Cogwheel'
      },
      {
        address: 'https://composable-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc-composable.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://composable-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://composable.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://composable-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://composable.rpc.moonbridge.team',
        provider: 'Moonbridge'
      }
    ],
    rest: [
      {
        address: 'https://api-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://composable-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://composable-api.cogwheel.zone:443',
        provider: 'Cogwheel'
      },
      {
        address: 'https://composable-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://lcd-composable.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://composable-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://composable.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://composable-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://composable.api.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'https://composable.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'grpc.composable.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'composable-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-centauri.cosmos-spaces.cloud:1120',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://composable-grpc.cogwheel.zone:443',
        provider: 'Cogwheel'
      },
      {
        address: 'https://composable-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'composable-grpc.genznodes.dev:53090',
        provider: 'genznodes'
      },
      {
        address: 'composable-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'grpc-composable.vinjan.xyz:36090',
        provider: 'vinjan'
      },
      {
        address: 'composable.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'composable.grpc.stakevillage.net:16190',
        provider: 'Stake Village'
      },
      {
        address: 'composable-rpc.stakeandrelax.net:22290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.composable.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://composable.grpc.moonbridge.team',
        provider: 'Moonbridge'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/composable',
      txPage: 'https://ping.pub/composable/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/composable',
      txPage: 'https://explorer.nodestake.top/composable/tx/${txHash}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/composable',
      txPage: 'https://exp.stakevillage.net/composable/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/composable/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Mainnet',
      txPage: 'https://explorer.stavr.tech/Composable-Mainnet/tx/${txHash}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
    }]
};
export default info;