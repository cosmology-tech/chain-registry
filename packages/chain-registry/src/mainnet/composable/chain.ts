import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'composable',
  chain_id: 'centauri-1',
  website: 'https://www.picasso.xyz/',
  pretty_name: 'Picasso',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'pica',
  daemon_name: 'picad',
  node_home: '$HOME/.banksy',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ppica',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ppica'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'rust-ninja/cosmos-sdk v0.47.5-patch-validators-trim-tag'
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
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
        address: 'https://picasso-rpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://picasso-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://picasso-rpc.stake-town.com',
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
      },
      {
        address: 'https://rpc.composable.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://composable.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
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
        address: 'https://picasso-api.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://picasso-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://picasso-api.stake-town.com',
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
        address: 'https://picasso-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://picasso-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'composable-grpc.genznodes.dev:53090',
        provider: 'genznodes'
      },
      {
        address: 'picasso-grpc.stake-town.com:443',
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
      },
      {
        address: 'composable.grpc.m.stavr.tech:9907',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/composable',
      tx_page: 'https://ping.pub/composable/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/composable',
      tx_page: 'https://explorer.nodestake.top/composable/tx/${txHash}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/composable',
      tx_page: 'https://exp.stakevillage.net/composable/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/composable/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Composable-Mainnet/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/picasso',
      tx_page: 'https://mainnet.whispernode.com/picasso/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/picasso/account/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
    }]
};
export default info;