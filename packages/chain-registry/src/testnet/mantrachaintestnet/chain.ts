import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mantrachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Chain',
  chain_id: 'mantrachain-testnet-1',
  bech32_prefix: 'uaum',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uaum',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.003
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uaum'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47.3',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.41'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.mantrachain.io',
        provider: 'MANTRACHAIN'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.mantrachain.io',
        provider: 'MANTRACHAIN'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.mantrachain.io',
        provider: 'MANTRACHAIN'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
    }
  ]
};
export default info;
