import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dydx',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'mainnet',
  pretty_name: 'dYdX Protocol',
  chain_type: 'cosmos',
  chain_id: 'dydx-mainnet-1',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'adydx',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000
      }, {
        denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adydx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/dydxprotocol/v4-chain/',
    recommended_version: 'protocol/v9.8.0',
    compatible_versions: ['protocol/v9.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv9.8.0/dydxprotocold-v9.8.0-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv9.8.0/dydxprotocold-v9.8.0-linux-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15',
      repo: 'https://github.com/dydxprotocol/cometbft',
      tag: 'v0.38.6-0.20260930164446-0cbd83dfd37f'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/dydxprotocol/cosmos-sdk',
      version: 'v0.50.11',
      tag: 'v0.50.6-0.20260930183503-873fbe904943'
    },
    ibc: {
      type: 'go',
      version: 'v8.0.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://dydx-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://dydx-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dydx-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://dydx-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://dydx-rest.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://rest.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://dydx-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://dydx-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dydx-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://dydx-api.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'https://dydx-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'dydx.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dydx-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'dydx.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'dydx-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'dydx-grpc.noders.services:37090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'dydx-grpc.polkachu.com:23890',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx',
      tx_page: 'https://www.mintscan.io/dydx/txs/${txHash}',
      account_page: 'https://www.mintscan.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/dydx',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=dydx&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=dydx&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dydx',
      tx_page: 'https://ezstaking.app/dydx/txs/${txHash}',
      account_page: 'https://ezstaking.app/dydx/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dydx/',
      tx_page: 'https://explorer.nodestake.org/dydx/txs/${txHash}',
      account_page: 'https://explorer.nodestake.org/dydx/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dydx',
      tx_page: 'https://explorer.tcnetwork.io/dydx/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://dydx.valopers.com/',
      tx_page: 'https://dydx.valopers.com/transactions/${txHash}',
      account_page: 'https://dydx.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/dydx/mainnet',
      tx_page: 'https://moon-runners.net/dydx/mainnet/finder?search=${txHash}',
      account_page: 'https://moon-runners.net/dydx/mainnet/finder?search=${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/dydx',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }, {
      url: 'https://polkachu.com/archive_snapshots/dydx',
      type: 'archive',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;