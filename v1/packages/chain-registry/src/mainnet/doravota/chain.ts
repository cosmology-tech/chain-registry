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
      kind: 'lesnik | UTSA Ping Pub',
      url: 'https://exp.utsa.tech/dora/staking',
      tx_page: 'https://exp.utsa.tech/dora/tx/${txHash}'
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
    }
  ]
};
export default info;