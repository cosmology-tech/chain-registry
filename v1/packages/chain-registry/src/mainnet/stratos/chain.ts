import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stratos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.thestratos.org',
  pretty_name: 'Stratos',
  chain_type: 'cosmos',
  chain_id: 'stratos-1',
  bech32_prefix: 'st',
  daemon_name: 'stchaind',
  node_home: '$HOME/.stchaind',
  key_algos: ['ethsecp256k1'],
  extra_codecs: [],
  slip44: 606,
  fees: {
    fee_tokens: [{
        denom: 'wei',
        low_gas_price: 1000000000,
        average_gas_price: 1200000000,
        high_gas_price: 1600000000
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'http://stratos.rpc.nodersteam.com:26657/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://stratos-rpc.noders.services:443',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [{
        address: 'https://rest.thestratos.org',
        provider: 'thestratos.org'
      }, {
        address: 'https://stratos-api.noders.services:443',
        provider: '[NODERS]TEAM'
      }],
    grpc: [
      {
        address: 'https://grpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://grpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'stratos.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'stratos-grpc.noders.services:29090',
        provider: '[NODERS]TEAM'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://web3-rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://jsonrpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://stratos-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.thestratos.org',
      tx_page: 'https://explorer.thestratos.org/transactions/${txHash}',
      account_page: 'https://explorer.thestratos.org/accounts/${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://web3-explorer.thestratos.org',
      tx_page: 'https://web3-explorer.thestratos.org/tx/${txHash}',
      account_page: 'https://web3-explorer.thestratos.org/address/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/stratos',
      tx_page: 'https://explorer.nodestake.top/stratos/tx/${txHash}',
      account_page: 'https://explorer.nodestake.top/stratos/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/stratos',
      tx_page: 'https://explorer.tcnetwork.io/stratos/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/stratos/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
      theme: {
        primary_color_hex: '#04847c'
      }
    }]
};
export default info;