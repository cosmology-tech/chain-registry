import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'noble',
  chain_id: 'noble-1',
  website: 'https://nobleassets.xyz/',
  pretty_name: 'Noble',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'noble',
  daemon_name: 'nobled',
  node_home: '$HOME/.noble',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uusdc',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.1,
        high_gas_price: 0.2
      },
      {
        denom:
          'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.01,
        high_gas_price: 0.02
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ustake'
      }
    ],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.16',
    cosmwasm_enabled: false
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
  },
  description:
    'The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.',
  apis: {
    rpc: [
      {
        address: 'https://noble-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://noble-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    rest: [
      {
        address: 'https://noble-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://noble-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    grpc: [
      {
        address: 'noble-grpc.polkachu.com:21590',
        provider: 'polkachu'
      },
      {
        address: 'https://noble-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/noble',
      tx_page: 'https://www.mintscan.io/noble/txs/${txHash}',
      account_page: 'https://www.mintscan.io/noble/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explore.strange.love/noble-1',
      tx_page: 'https://explore.strange.love/noble-1/tx/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/noble',
      account_page: 'https://stakeflow.io/noble/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
    }
  ]
};
export default info;
