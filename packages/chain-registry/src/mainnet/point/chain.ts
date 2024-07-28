import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'point',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Point Network',
  chain_type: 'cosmos',
  chain_id: 'point_10687-1',
  bech32_prefix: 'point',
  node_home: '$HOME/.pointd',
  daemon_name: 'pointd',
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'apoint',
        low_gas_price: 5000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'apoint'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet-1.point.space:26657',
        provider: 'Point Network'
      },
      {
        address: 'https://rpc.point.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://point.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.point.indonode.net',
        provider: 'Indonode'
      }
    ],
    rest: [
      {
        address: 'https://rpc-mainnet-1.point.space:1317',
        provider: 'Point Network'
      },
      {
        address: 'https://point.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.point.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api.point.indonode.net',
        provider: 'Indonode'
      }
    ],
    grpc: [
      {
        address: 'grpc.point.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'point.grpc.m.stavr.tech:2050',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc.point.nodexcapital.com',
        provider: '⚡NodeX Validator⚡'
      },
      {
        address: 'https://grpc.point.indonode.net:21090',
        provider: 'Indonode'
      }
    ],
    "evm-http-jsonrpc": [{
        address: 'https://rpc-mainnet-1.point.space',
        provider: 'Point Network'
      }, {
        address: 'https://jsonrpc.point.nodestake.top',
        provider: 'NodeStake'
      }]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.pointnetwork.io/',
      tx_page: 'https://explorer.pointnetwork.io/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Point-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Point-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://cosmos.pointnetwork.io/',
      tx_page: 'https://cosmos.pointnetwork.io/point/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/point',
      tx_page: 'https://explorer.nodexcapital.com/point/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/point',
      tx_page: 'https://atomscan.com/point/transactions/${txHash}',
      account_page: 'https://atomscan.com/point/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
};
export default info;