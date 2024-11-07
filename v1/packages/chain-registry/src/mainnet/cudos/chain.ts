import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cudos',
  status: 'killed',
  network_type: 'mainnet',
  pretty_name: 'Cudos',
  chain_type: 'cosmos',
  chain_id: 'cudos-1',
  bech32_prefix: 'cudos',
  daemon_name: 'cudos-noded',
  website: 'https://www.cudos.org/',
  node_home: '$HOME/cudos-data',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'acudos',
        low_gas_price: 5000000000000,
        average_gas_price: 10000000000000,
        high_gas_price: 20000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'acudos'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://mainnet-full-node-01.hosts.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'https://mainnet-full-node-02.hosts.cudos.org:36657',
        provider: 'cudo'
      },
      {
        address: 'https://cudos-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cudos-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cudos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://cudos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'http://mainnet-full-node-01.hosts.cudos.org:1317',
        provider: 'cudo'
      },
      {
        address: 'https://mainnet-full-node-02.hosts.cudos.org:31317',
        provider: 'cudo'
      },
      {
        address: 'https://cudos-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cudos-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cudos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://cudos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'mainnet-full-node-01.hosts.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'cudos-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'cudos.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cudos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.cudos.org/',
      tx_page: 'https://explorer.cudos.org/transactions/${txHash}',
      account_page: 'https://explorer.cudos.org/accounts/${accountAddress}'
    },
    {
      kind: 'cudos-dashboard',
      url: 'https://dashboard.cudos.org/',
      tx_page: 'https://explorer.cudos.org/transactions/${txHash}',
      account_page: 'https://explorer.cudos.org/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cudos',
      tx_page: 'https://www.mintscan.io/cudos/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/cudos/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cudos',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=cudos&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=cudos&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cudos',
      tx_page: 'https://atomscan.com/cudos/transactions/${txHash}',
      account_page: 'https://atomscan.com/cudos/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cudos',
      tx_page: 'https://ezstaking.app/cudos/txs/${txHash}',
      account_page: 'https://ezstaking.app/cudos/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg',
      theme: {
        primary_color_hex: '#5d95ec'
      }
    }]
};
export default info;