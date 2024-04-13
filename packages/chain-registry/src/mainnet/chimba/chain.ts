import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chimba',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://chimba.ooo/',
  pretty_name: 'Chimba',
  chain_id: 'chimba',
  bech32_prefix: 'chimba',
  daemon_name: 'chimbad',
  node_home: '$HOME/.chimbad',
  fees: {
    fee_tokens: [{
        denom: 'ucmba',
        fixed_min_gas_price: 0.25,
        low_gas_price: 1,
        average_gas_price: 5,
        high_gas_price: 10
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'chimba'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.chimba.ooo',
        provider: 'chimba'
      }],
    rest: [{
        address: 'https://mainnet.chimba.ooo',
        provider: 'chimba'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.chimba.ooo/',
      tx_page: 'https://explorer.chimba.ooo/transactions/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
    }],
  slip44: 118
};
export default info;