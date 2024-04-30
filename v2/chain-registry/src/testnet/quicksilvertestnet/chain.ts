import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'quicksilvertestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Quicksilver Testnet',
  chainId: 'rhye-2',
  bech32Prefix: 'quick',
  daemonName: 'quicksilverd',
  nodeHome: '$HOME/.quicksilverd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqck',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqck'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.29'
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://quick.rpc.t.stavr.tech:20027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://quick.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'http://quick.grpc.t.stavr.tech:9112',
        provider: '🔥STAVR🔥'
      }, {
        address: 'quicksilver-testnet-grpc.polkachu.com:11190',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Quicksilver',
      txPage: 'https://explorer.stavr.tech/Quicksilver/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Quicksilver/account/${accountAddress}'
    }, {
      url: 'https://testnet.quicksilver.explorers.guru',
      txPage: 'https://testnet.quicksilver.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.quicksilver.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
    }]
};
export default info;