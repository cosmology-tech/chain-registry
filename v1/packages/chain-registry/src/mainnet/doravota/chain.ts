import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'doravota',
  chain_type: 'cosmos',
  chain_id: 'vota-ash',
  pretty_name: 'Dora Vota',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'dora',
  daemon_name: 'dorad',
  node_home: '$HOME/.dora',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'peaka',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 100000000000,
        high_gas_price: 100000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'peaka'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/dorafactory/doravota',
    recommended_version: 'v11.0.0',
    compatible_versions: ['v11.0.0'],
    genesis: {
      genesis_url: 'https://github.com/DoraFactory/doravota/blob/main/config/mainnet/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://vota-rpc.dorafactory.org/',
        provider: 'dorafactory'
      },
      {
        address: 'https://m-dora.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://dora-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://doravota-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://m-dora-rpc.ruangnode.com:443',
        provider: 'ruangnode'
      },
      {
        address: 'https://rpc.dora.roomit.xyz:443',
        provider: 'Roomit'
      },
      {
        address: 'https://dora-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://vota-rest.dorafactory.org',
        provider: 'dorafactory'
      },
      {
        address: 'https://m-dora.api.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://dora-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://doravota-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://m-dora-api.ruangnode.com',
        provider: 'ruangnode'
      },
      {
        address: 'https://api.dora.roomit.xyz:443',
        provider: 'Roomit'
      },
      {
        address: 'https://dora-api.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'vota-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      },
      {
        address: 'dora-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'doravota-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'm-dora-grpc.ruangnode.com:443',
        provider: 'ruangnode'
      },
      {
        address: 'grpc.dora.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'dora-grpc.polkachu.com:25390',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-explorer.dorafactory.org',
      tx_page: 'https://vota-explorer.dorafactory.org/doravota/tx/${txHash}'
    },
    {
      kind: 'UTSA Explorer',
      url: 'https://explorer.utsa.tech/networks/doravota-mainnet',
      tx_page: 'https://explorer.utsa.tech/networks/doravota-mainnet/blocks/${block}/transactions/0'
    },
    {
      kind: 'ITRocket Ping Pub',
      url: 'https://mainnet.itrocket.net/doravota/staking',
      tx_page: 'https://mainnet.itrocket.net/doravota/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/doravota',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=doravota&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=doravota&addr=${accountAddress}'
    },
    {
      kind: 'Explorers',
      url: 'https://dora.explorers.guru',
      tx_page: 'https://dora.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Valopers',
      url: 'https://dora.valopers.com/',
      tx_page: 'https://dora.valopers.com/transactions/${txHash}',
      account_page: 'https://dora.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Ruangnode Explorers',
      url: 'https://explorer.ruangnode.com/dashboard/dora',
      tx_page: 'https://explorer.ruangnode.com/transactions/dora?hash=${txHash}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/dora-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/dora-mainnet/transactions/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/dora-mainnet/account/${accountAddress}'
    }
  ],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/dora',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;