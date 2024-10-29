import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'passage',
  chain_type: 'cosmos',
  chain_id: 'passage-2',
  pre_fork_chain_name: 'passage1',
  pretty_name: 'Passage',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://passage3d.com/',
  bech32_prefix: 'pasg',
  daemon_name: 'passage',
  node_home: '$HOME/.passage',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'upasg',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upasg'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.16'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.passage.vitwit.com',
        provider: 'vitwit'
      },
      {
        address: 'https://passage-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-passage.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/passage',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc.passage.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://passage-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://passage-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-passage.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://passage-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://passage-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://passage-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://passage-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc-passage.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc.passage.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://passage-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      }
    ],
    rest: [
      {
        address: 'https://api.passage.vitwit.com',
        provider: 'vitwit'
      },
      {
        address: 'https://passage-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://rest-passage.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/passage',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.passage.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://passage-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://passage-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-passage.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://passage-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://passage-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://passage-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://passage-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api-passage.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://api.passage.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://passage-api.bluestake.net',
        provider: 'BlueStake 🚀'
      }
    ],
    grpc: [
      {
        address: 'grpc-passage-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'passage.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'passage-grpc.polkachu.com:15690',
        provider: 'Polkachu'
      },
      {
        address: 'grpc-passage.cosmos-spaces.cloud:2320',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc.passage.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'passage-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'services.staketab.com:9023',
        provider: 'Staketab'
      },
      {
        address: 'passage-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'passage-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'passage-grpc.stakeandrelax.net:15690',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc-passage.mainnet.validatrium.club:20590',
        provider: 'Validatrium'
      },
      {
        address: 'grpc.passage.silentvalidator.com:443',
        provider: 'silent'
      }
    ]
  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      tx_page: 'https://passage.aneka.io/txs/${txHash}',
      account_page: 'https://passage.aneka.io/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      tx_page: 'https://www.mintscan.io/passage/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/passage/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/passage',
      tx_page: 'https://ezstaking.app/passage/txs/${txHash}',
      account_page: 'https://ezstaking.app/passage/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/passage',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=passage&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=passage&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      tx_page: 'https://atomscan.com/passage/transactions/${txHash}',
      account_page: 'https://atomscan.com/passage/accounts/${accountAddress}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/passage',
      tx_page: 'https://cosmotracker.com/passage/tx/${txHash}',
      account_page: 'https://cosmotracker.com/passage/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/passage',
      tx_page: 'https://mainnet.whispernode.com/passage/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/passage/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
      theme: {
        primary_color_hex: '#05050c'
      }
    }]
};
export default info;