import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'junotestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Juno Testnet',
  chainId: 'uni-6',
  bech32Prefix: 'juno',
  daemonName: 'junod',
  nodeHome: '$HOME/.juno',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujunox',
        lowGasPrice: 0.003,
        averageGasPrice: 0.0045,
        highGasPrice: 0.006
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujunox'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.31'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://uni-rpc.reece.sh',
        provider: 'Reecepbcups'
      }
    ],
    rest: [
      {
        address: 'https://api.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://juno.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://uni-api.reece.sh',
        provider: 'Reecepbcups'
      }
    ],
    grpc: [{
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://testnet.app.ezstaking.io/juno-testnet',
      txPage: 'https://testnet.app.ezstaking.io/juno-testnet/txs/${txHash}',
      accountPage: 'https://testnet.app.ezstaking.io/juno-testnet/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      txPage: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/juno-testnet',
      txPage: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.juno.explorers.guru/',
      txPage: 'https://testnet.juno.explorers.guru/transaction/${txHash}'
    }
  ]
};
export default info;