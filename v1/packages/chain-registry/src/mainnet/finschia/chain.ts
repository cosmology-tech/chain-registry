import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'finschia',
  chain_type: 'cosmos',
  chain_id: 'finschia-2',
  website: 'https://www.finschia.io/',
  pretty_name: 'Finschia',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'link',
  daemon_name: 'fnsad',
  node_home: '$HOME/.finschia',
  key_algos: ['secp256k1'],
  slip44: 438,
  fees: {
    fee_tokens: [{
        denom: 'cony',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.015
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'cony'
      }],
    lock_duration: {
      time: '604800s'
    }
  },
  codebase: {

  },
  description: 'Finschia (formerly LINE Blockchain Mainnet) aims to build a sustainable token model and create token demand to become a blockchain with 1 billion users.',
  apis: {
    rpc: [{
        address: 'https://finschia-rpc.finschia.io'
      }],
    rest: [{
        address: 'https://finschia-api.finschia.io'
      }],
    grpc: [{
        address: 'finschia-grpc.finschia.io:443'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia',
      tx_page: 'https://www.mintscan.io/finschia/tx/${txHash}',
      account_page: 'https://www.mintscan.io/finschia/address/${accountAddress}'
    }, {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/finschia',
      tx_page: 'https://ezstaking.app/finschia/txs/${txHash}',
      account_page: 'https://ezstaking.app/finschia/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
  }
};
export default info;