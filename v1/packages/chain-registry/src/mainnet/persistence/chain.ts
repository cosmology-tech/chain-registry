import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'persistence',
  chain_type: 'cosmos',
  chain_id: 'core-1',
  pretty_name: 'Persistence',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://persistence.one/',
  bech32_prefix: 'persistence',
  daemon_name: 'persistenceCore',
  node_home: '$HOME/.persistenceCore',
  key_algos: ['secp256k1'],
  slip44: 118,
  alternative_slip44s: [750],
  fees: {
    fee_tokens: [{
        denom: 'uxprt',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxprt'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'persistenceOne/cosmos-sdk v0.47.10-lsm-rc0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
  },
  description: 'Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://rpc-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistence-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-rpc.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rpc.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://rpc-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-rpc.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    rest: [
      {
        address: 'https://rest.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://api-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rest-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://persistence-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-lcd.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rest.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://api-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rest.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-api.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    grpc: [
      {
        address: 'grpc.core.persistence.one:443',
        provider: 'Persistence'
      },
      {
        address: 'grpc-persistent-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'persistence.grpc.m.stavr.tech:410',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'persistence-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      },
      {
        address: 'persistence-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.persistence.posthuman.digital:80',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'grpc-persistence.cosmos-spaces.cloud:1180',
        provider: 'Cosmos Spaces'
      },
      {
        address: '141.95.33.97:9090',
        provider: 'Stakewolle.com | Auto-compound'
      },
      {
        address: 'grpc-persistence-01.stakeflow.io:49090',
        provider: 'Stakeflow'
      },
      {
        address: 'persistence-grpc.w3coins.io:15490',
        provider: 'w3coins'
      },
      {
        address: 'persistence-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'persistence-grpc.stakeandrelax.net:15490',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://xprt-grpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'persistence-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/persistence',
      tx_page: 'https://www.mintscan.io/persistence/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/persistence',
      tx_page: 'https://ezstaking.app/persistence/txs/${txHash}',
      account_page: 'https://ezstaking.app/persistence/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/persistence',
      tx_page: 'https://ping.pub/persistence/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Persistence-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Persistence-Mainnet/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/persistence',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=persistence&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=persistence&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/persistence',
      tx_page: 'https://atomscan.com/persistence/transactions/${txHash}',
      account_page: 'https://atomscan.com/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/persistence',
      account_page: 'https://stakeflow.io/persistence/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
      theme: {
        primary_color_hex: '#242424'
      }
    }]
};
export default info;