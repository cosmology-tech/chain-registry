import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lumnetwork',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://lum.network/',
  pretty_name: 'Lum Network',
  chain_id: 'lum-network-1',
  bech32_prefix: 'lum',
  daemon_name: 'lumd',
  node_home: '$HOME/.lumd',
  key_algos: ['secp256k1'],
  slip44: 880,
  fees: {
    fee_tokens: [
      {
        denom: 'ulum',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulum'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.5'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://node0.mainnet.lum.network/rpc',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://lumnetwork-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lum-rpc.panthea.eu',
        provider: 'Panthea EU'
      }
    ],
    rest: [
      {
        address: 'https://node0.mainnet.lum.network/rest',
        provider: 'Lum Foundation'
      },
      {
        address: 'https://lumnetwork-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lum-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lum-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://lum-api.panthea.eu',
        provider: 'Panthea EU'
      }
    ],
    grpc: [
      {
        address: 'lumnetwork-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'lum-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'lum-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'lum-grpc.panthea.eu:16770',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/lumnetwork',
      tx_page: 'https://app.ezstaking.io/lumnetwork/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/lumnetwork/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/lum',
      tx_page: 'https://www.mintscan.io/lum/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/lum/accounts/${accountAddress}'
    },
    {
      kind: 'lum-network',
      url: 'https://explorer.lum.network',
      tx_page: 'https://explorer.lum.network/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/lum-network',
      tx_page: 'https://ping.pub/lum-network/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lum-network',
      tx_page: 'https://atomscan.com/lum-network/transactions/${txHash}',
      account_page:
        'https://atomscan.com/lum-network/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
    }
  ]
};
export default info;
