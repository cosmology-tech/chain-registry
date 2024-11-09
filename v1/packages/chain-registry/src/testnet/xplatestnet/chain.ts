import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xplatestnet',
  status: 'live',
  website: 'https://xpla.io',
  network_type: 'testnet',
  pretty_name: 'XPLA',
  chain_type: 'cosmos',
  chain_id: 'cube_47-5',
  bech32_prefix: 'xpla',
  daemon_name: 'xplad',
  node_home: '$HOME/.xpla',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'axpla',
        fixed_min_gas_price: 850000000000,
        low_gas_price: 850000000000,
        average_gas_price: 1147500000000,
        high_gas_price: 1487500000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cube-rpc.xpla.dev',
        provider: 'Holdings'
      }],
    rest: [{
        address: 'https://cube-lcd.xpla.dev',
        provider: 'Holdings'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://cube-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }]
  },
  explorers: [{
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io/testnet',
      tx_page: 'https://explorer.xpla.io/testnet/mainnet/tx/${txHash}'
    }, {
      kind: 'finder',
      url: 'https://finder.xpla.io/testnet',
      tx_page: 'https://finder.xpla.io/testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primary_color_hex: '#04b4fc'
      }
    }]
};
export default info;