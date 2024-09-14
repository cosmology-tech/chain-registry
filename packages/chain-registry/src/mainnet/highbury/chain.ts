import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'highbury',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.fury.black/',
  pretty_name: 'Highbury',
  chain_type: 'cosmos',
  chain_id: 'highbury_710-1',
  bech32_prefix: 'fury',
  daemon_name: 'fury',
  node_home: '$HOME/.fury',
  slip44: 459,
  alternative_slip44s: [710],
  fees: {
    fee_tokens: [{
        denom: 'ufury',
        low_gas_price: 0.05,
        average_gas_price: 0.1,
        high_gas_price: 0.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
  },
  apis: {
    rpc: [{
        address: 'https://gridiron.furya.io',
        provider: 'fanfury'
      }],
    rest: [{
        address: 'https://api-mainnet.furya.io/',
        provider: 'fanfury'
      }],
    grpc: [{
        address: 'api-mainnet.furya.io:9090',
        provider: 'fanfury'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rest.furya.io/',
        provider: 'fanfury'
      }]
  },
  explorers: [{
      kind: 'pingpub',
      url: 'https://explorer.furya.wtf/',
      tx_page: 'https://www.explorer.furya.wtf//txs/${txHash}',
      account_page: 'https://explorer.furya.wtf//account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
} as const satisfies Chain;
export default info;