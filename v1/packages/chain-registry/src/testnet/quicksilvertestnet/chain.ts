import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'quicksilvertestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Quicksilver Testnet',
  chain_type: 'cosmos',
  chain_id: 'rhye-2',
  bech32_prefix: 'quick',
  daemon_name: 'quicksilverd',
  node_home: '$HOME/.quicksilverd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uqck',
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.00025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uqck'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.46',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.29'
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://quick.rpc.t.stavr.tech:20027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://quick.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'http://quick.grpc.t.stavr.tech:9112',
        provider: '🔥STAVR🔥'
      }, {
        address: 'quicksilver-testnet-grpc.polkachu.com:11190',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Quicksilver',
      tx_page: 'https://explorer.stavr.tech/Quicksilver/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Quicksilver/account/${accountAddress}'
    }, {
      url: 'https://testnet.quicksilver.explorers.guru',
      tx_page: 'https://testnet.quicksilver.explorers.guru/transaction/${txHash}',
      account_page: 'https://testnet.quicksilver.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
    }]
};
export default info;