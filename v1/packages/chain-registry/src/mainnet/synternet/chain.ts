import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'synternet',
  chain_type: 'cosmos',
  chain_id: 'synternet-1',
  website: 'https://www.synternet.com/',
  pretty_name: 'Synternet',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'synt',
  daemon_name: 'syntd',
  node_home: '$HOME/.amber',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'usynt',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usynt'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
  },
  description: 'Synternet is the backbone of the Data Layer, a protocol serving as the customizable execution layer between all blockchains. It enables builders to See, Interpret and Act on any data from any chain, supercharging their applications.',
  apis: {
    rpc: [{
        address: 'https://rpc.synternet.com/',
        provider: 'Synternet'
      }],
    rest: [{
        address: 'https://api.synternet.com/',
        provider: 'Synternet'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer.synternet.com/',
      tx_page: 'https://explorer.synternet.com/transactions/${txHash}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/synternet',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=synternet&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=synternet&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
      theme: {
        primary_color_hex: '#272d45'
      }
    }],
  slip44: 118
};
export default info;