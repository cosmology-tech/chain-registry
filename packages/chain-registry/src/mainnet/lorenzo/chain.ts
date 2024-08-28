import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lorenzo',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.lorenzo-protocol.xyz/',
  pretty_name: 'Lorenzo Protocol',
  chain_type: 'cosmos',
  chain_id: 'lorenzo_8329-1',
  bech32_prefix: 'lrz',
  daemon_name: 'lorenzod',
  node_home: '$HOME/.lorenzo',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'stBTC',
        fixed_min_gas_price: 2000000,
        low_gas_price: 2000000,
        average_gas_price: 2000000,
        high_gas_price: 8000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'alrz'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg'
  },
  description: 'Lorenzo aims to be the premier Bitcoin platform for yield-bearing token issuance, trading, and settlement.',
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-cosmos.lorenzo-protocol.xyz/',
        provider: 'Lorenzo Protocol'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc-testnet.lorenzo-protocol.xyz/',
        provider: 'Lorenzo Protocol'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://scan.lorenzo-protocol.xyz/',
      tx_page: 'https://scan.lorenzo-protocol.xyz/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg',
      theme: {
        primary_color_hex: '#133348'
      }
    }]
};
export default info;