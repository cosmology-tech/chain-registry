import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xiontestnet',
  chain_id: 'xion-testnet-1',
  pretty_name: 'Xion Testnet',
  website: 'https://burnt.com',
  status: 'live',
  network_type: 'testnet',
  chain_type: 'cosmos',
  bech32_prefix: 'xion',
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxion',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-burnt-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://testnet-burnt-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-burnt-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'polkachu'
      },
      {
        address: 'burnt-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ],
  explorers: [{
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/burnt',
      tx_page: 'https://testnet.itrocket.net/burnt/tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/burnt/account/${accountAddress}'
    }]
};
export default info;