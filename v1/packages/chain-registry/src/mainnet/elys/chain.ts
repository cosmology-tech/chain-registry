import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'elys',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Elys Network',
  chain_type: 'cosmos',
  chain_id: 'elys-1',
  bech32_prefix: 'elys',
  daemon_name: 'elysd',
  node_home: '$HOME/.elys',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [{
        denom: 'uelys'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  fees: {
    fee_tokens: [
      {
        denom: 'uelys',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      },
      {
        denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      },
      {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }
    ]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.elys.network:443',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://elys-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://rpc.elys.nodestake.org:443',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://api.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://elys-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://api.elys.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'elys-grpc.polkachu.com:22090',
        provider: 'Polkachu'
      },
      {
        address: 'elys-testnet-grpc.itrocket.net:38090',
        provider: 'itrocket'
      },
      {
        address: 'elys-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'elys-mainnet-grpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'grpc.elys.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/elys',
      tx_page: 'https://explorer.nodestake.org/elys/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/elys/account/${accountAddress}'
    },
    {
      kind: 'Moonlet',
      url: 'https://explorer.moonlet.cloud/elys',
      tx_page: 'https://explorer.moonlet.cloud/elys/tx/${txHash}',
      account_page: 'https://explorer.moonlet.cloud/elys/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/elys',
      tx_page: 'https://ping.pub/elys/tx/${txHash}',
      account_page: 'https://ping.pub/elys/account/${accountAddress}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/elys',
      tx_page: 'https://mainnet.itrocket.net/elys/staking/tx/${txHash}',
      account_page: 'https://mainnet.itrocket.net/elys/account/${accountAddress}'
    }
  ]
};
export default info;