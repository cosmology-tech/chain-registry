import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akiro',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Akiro',
  chain_id: 'akiro-1',
  bech32_prefix: 'akiro',
  daemon_name: 'akirod',
  node_home: '$HOME/.akiro',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uakiro',
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
        denom: 'uakiro'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://213.199.36.82:26657',
        provider: 'AKIRO'
      },
      {
        address: 'https://rpc-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }
    ],
    rest: [
      {
        address: 'http://213.199.36.82:1317',
        provider: 'AKIRO'
      },
      {
        address: 'https://api-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }
    ],
    grpc: [
      {
        address: 'http://213.199.36.82:9090',
        provider: 'AKIRO'
      },
      {
        address: 'https://grpc-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/akiro',
      tx_page: 'https://ping.pub/akiro/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
    }
  ]
};
export default info;
