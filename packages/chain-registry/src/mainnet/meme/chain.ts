import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'meme',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'MEME',
  chain_id: 'meme-1',
  bech32_prefix: 'meme',
  daemon_name: 'memed',
  node_home: '$HOME/.memed',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umeme',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.035,
        high_gas_price: 0.045
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umeme'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-meme-1.meme.sx/',
        provider: 'MEME Foundation'
      },
      {
        address: 'https://meme-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-meme.pupmos.network/',
        provider: 'PUPMØS'
      },
      {
        address: 'https://meme.rpc.m.anode.team',
        provider: 'ANODE TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-meme-1.meme.sx/',
        provider: 'MEME Foundation'
      },
      {
        address: 'https://meme-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-meme.pupmos.network/',
        provider: 'PUPMØS'
      },
      {
        address: 'https://meme.api.m.anode.team',
        provider: 'ANODE TEAM'
      },
      {
        address: 'https://meme.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'meme-grpc.polkachu.com:14790',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/meme',
      tx_page: 'https://ping.pub/meme/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/meme',
      tx_page: 'https://atomscan.com/meme/transactions/${txHash}',
      account_page: 'https://atomscan.com/meme/accounts/${accountAddress}'
    },
    {
      kind: 'MEME Explorer',
      url: 'https://explorer.meme.sx/meme',
      tx_page: 'https://explorer.meme.sx/meme/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/meme',
      tx_page: 'https://atomscan.com/meme/transactions/${txHash}',
      account_page: 'https://atomscan.com/meme/accounts/${accountAddress}'
    },
    {
      kind: 'Brochain',
      url: 'https://explorer.brocha.in/meme',
      tx_page: 'https://explorer.brocha.in/meme/tx/${txHash}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/meme',
      tx_page: 'https://explorer.stake-take.com/meme/tx/${txHash}',
      account_page:
        'https://explorer.stake-take.com/meme/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Meme',
      tx_page: 'https://explorer.stavr.tech/Meme/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Meme/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
    }
  ]
};
export default info;
