import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lumenx',
  status: 'killed',
  network_type: 'mainnet',
  pretty_name: 'LumenX',
  chain_id: 'LumenX',
  bech32_prefix: 'lumen',
  daemon_name: 'lumenxd',
  node_home: '$HOME/.lumenx',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulumen',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulumen'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      },
      {
        address: 'https://lumenx-rpc.kynraze.com/',
        provider: 'Kynraze'
      }
    ],
    rest: [
      {
        address: 'https://api-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      },
      {
        address: 'https://api-lumenx.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://lcd.lumenx.hexnodes.co/',
        provider: 'Hexnodes'
      }
    ],
    grpc: [
      {
        address: 'https://lumenx-grpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://grpc-lumenx.nodine.id',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://grpc.lumenx.hexnodes.co',
        provider: 'Hexnodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.chaintools.tech/lumenx',
      tx_page: 'https://explorer.chaintools.tech/lumenx/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.cryptonet.pl/lumenx',
      tx_page: 'https://explorer.cryptonet.pl/lumenx/tx/${txHash}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/lumenx',
      tx_page: 'https://explorer.kynraze.com/lumenx/tx/${txHash}'
    },
    {
      kind: 'ComunityNode',
      url: 'https://explorer.comunitynode.my.id/lumenx',
      tx_page: 'https://explorer.comunitynode.my.id/lumenx/tx/${txHash}'
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/lumenx',
      tx_page: 'https://explorer.co.id/lumenx/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lumenx',
      tx_page: 'https://atomscan.com/lumenx/transactions/${txHash}',
      account_page: 'https://atomscan.com/lumenx/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
    }
  ]
};
export default info;
