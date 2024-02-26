import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'pryzmtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Pryzm Testnet',
  chain_id: 'indigo-1',
  bech32_prefix: 'pryzm',
  daemon_name: 'pryzmd',
  node_home: '$HOME/.pryzm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'upryzm',
        fixed_min_gas_price: 0,
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upryzm'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47'
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://testnet-api.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-grpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'http://pryzm-testnet-grpc.itrocket.net:41090',
        provider: 'ITRocket'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg'
  },
  explorers: [
    {
      kind: 'PingPub',
      url: 'https://testnets.cosmosrun.info/pryzm-indigo-1',
      tx_page: 'https://testnets.cosmosrun.info/pryzm-indigo-1/tx/${txHash}',
      account_page:
        'https://testnets.cosmosrun.info/pryzm-indigo-1/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/pryzm',
      tx_page: 'https://testnet.itrocket.net/pryzm/tx/${txHash}',
      account_page:
        'https://testnet.itrocket.net/pryzm/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg'
    }
  ]
};
export default info;
