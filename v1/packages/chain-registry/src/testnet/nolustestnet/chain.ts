import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'nolustestnet',
  status: 'live',
  website: 'https://nolus.io/',
  network_type: 'testnet',
  pretty_name: 'Nolus Testnet',
  chain_type: 'cosmos',
  chain_id: 'rila-3',
  bech32_prefix: 'nolus',
  daemon_name: 'nolusd',
  node_home: '$HOME/.nolusd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unls',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.05
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unls'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rila-rpc.nolus.network',
        provider: 'NolusProtocol'
      }],
    rest: [{
        address: 'https://rila-lcd.nolus.network',
        provider: 'NolusProtocol'
      }],
    grpc: [{
        address: 'https://rila-grpc.nolus.network',
        provider: 'NolusProtocol'
      }]
  },
  explorers: [{
      kind: 'Nolus Explorer',
      url: 'https://testnet.ping.pub/nolus/',
      tx_page: 'https://testnet.ping.pub/nolus/tx/${txHash}',
      account_page: 'https://testnet.ping.pub/nolus/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
    }]
};
export default info;