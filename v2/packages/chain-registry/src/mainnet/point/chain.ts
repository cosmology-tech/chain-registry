import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'point',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Point Network',
  chainId: 'point_10687-1',
  bech32Prefix: 'point',
  nodeHome: '$HOME/.pointd',
  daemonName: 'pointd',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'apoint',
        lowGasPrice: 5000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'apoint'
      }]
  },
  codebase: {

  },
  logoURIs: {
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
    evmHttpJsonrpc: [{
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
      txPage: 'https://explorer.pointnetwork.io/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Point-Mainnet',
      txPage: 'https://explorer.stavr.tech/Point-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://cosmos.pointnetwork.io/',
      txPage: 'https://cosmos.pointnetwork.io/point/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/point',
      txPage: 'https://explorer.nodexcapital.com/point/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/point',
      txPage: 'https://atomscan.com/point/transactions/${txHash}',
      accountPage: 'https://atomscan.com/point/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
    }]
};
export default info;