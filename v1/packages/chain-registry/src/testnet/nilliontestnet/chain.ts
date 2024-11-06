import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'nilliontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Nillion Testnet',
  chain_type: 'cosmos',
  chain_id: 'nillion-chain-testnet-1',
  bech32_prefix: 'nillion',
  daemon_name: 'nilchaind',
  node_home: '$HOME/.nillionapp',
  key_algos: ['ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unil',
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.00025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unil'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://nillion-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-nillion-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.rpc.nodex.one',
        provider: 'NodeX Emperor'
      }
    ],
    rest: [
      {
        address: 'https://nillion-testnet-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-nillion-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.api.nodex.one',
        provider: 'NodeX Emperor'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-nillion-grpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.grpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.grpc.nodex.one',
        provider: 'NodeX Emperor'
      }
    ]
  },
  explorers: [{
      url: 'https://testnet.nillion.explorers.guru',
      tx_page: 'https://testnet.nillion.explorers.guru/transaction/${txHash}',
      account_page: 'https://testnet.nillion.explorers.guru/account/${accountAddress}'
    }, {
      url: 'https://testnet.ping.pub/nillion',
      tx_page: 'https://testnet.ping.pub/nillion/tx/${txHash}',
      account_page: 'https://testnet.ping.pub/nillion/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.png'
    }]
};
export default info;