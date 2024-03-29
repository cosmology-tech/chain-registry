import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'lavatestnet',
  status: 'live',
  pre_fork_chain_name: 'lavatestnet1',
  network_type: 'testnet',
  website: 'https://www.lavanet.xyz/',
  pretty_name: 'Lava Testnet',
  chain_id: 'lava-testnet-2',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulava',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulava'
      }
    ],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47.7',
    cosmwasm_enabled: false,
    cosmwasm_version: '0.30'
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primary_color_hex: '#D7001F'
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rpc/',
        provider: 'Lava'
      },
      {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rest/',
        provider: 'Lava'
      },
      {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      tx_page: 'https://lava.explorers.guru//transaction/${txHash}',
      account_page: 'https://lava.explorers.guru//account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      tx_page: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      tx_page: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}'
    }
  ],
  keywords: ['rpc', 'api', 'modular', 'data']
};
export default info;
