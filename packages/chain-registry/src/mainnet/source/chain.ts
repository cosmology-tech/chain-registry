import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'source',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.sourceprotocol.io/',
  pretty_name: 'Source',
  chain_id: 'source-1',
  bech32_prefix: 'source',
  daemon_name: 'sourced',
  node_home: '$HOME/.source',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usource',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usource'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.45',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.source.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://source.rpc.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://source.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-source.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://source-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc-source.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'https://source-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.source.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://rpc.source.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://source.rpc.skynodejs.net/',
        provider: 'skynodejs'
      }
    ],
    rest: [
      {
        address: 'https://api.source.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-source.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://source.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://source-mainnet-api.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://source.api.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://api-source.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://source-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rest.source.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://api.source.indonode.net',
        provider: 'Indonode'
      }
    ],
    grpc: [
      {
        address: 'source-mainnet-grpc.itrocket.net:32090',
        provider: 'ITRocket'
      },
      {
        address: 'http://source.grpc.m.stavr.tech:9590',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-source.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://grpc.source.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-source.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'source-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://source.grpc.skynodejs.net',
        provider: 'skynodejs'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Source-Mainnet/',
      tx_page: 'https://explorer.stavr.tech/Source-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Source-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/source/',
      tx_page: 'https://exp.nodeist.net/source/tx/${txHash}',
      account_page: 'https://exp.nodeist.net/source/accounts/${accountAddress}'
    },
    {
      kind: 'MoonBridge',
      url: 'https://explorer.moonbridge.team/source',
      tx_page: 'https://explorer.moonbridge.team/source/tx/${txHash}',
      account_page:
        'https://explorer.moonbridge.team/source/accounts/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/source',
      tx_page: 'https://explorer.nodestake.top/source/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/source/accounts/${accountAddress}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/Source-mainnet',
      tx_page: 'https://explorer.sr20de.xyz/Source-mainnet/tx/${txHash}',
      account_page:
        'https://explorer.sr20de.xyz/Source-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/source',
      tx_page: 'https://explorer.tcnetwork.io/source/transaction/${txHash}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/source',
      tx_page: 'https://explorer.indonode.net/source/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
  }
};
export default info;
