import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sourcetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Source Testnet',
  chainId: 'sourcetest-1',
  bech32Prefix: 'source',
  daemonName: 'sourced',
  nodeHome: '$HOME/.source',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usource',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.075,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usource'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30'
  },
  apis: {
    rpc: [
      {
        address: 'https://source-testnet-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    rest: [
      {
        address: 'https://source-testnet-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://api-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [{
        address: 'source-testnet-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }, {
        address: 'grpc-testnet-source.sr20de.xyz/',
        provider: 'SR20DE'
      }]
  },
  explorers: [
    {
      kind: 'Nodestake',
      url: 'https://explorer.nodestake.top/source-testnet',
      txPage: 'https://explorer.nodestake.top/source-testnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Source',
      txPage: 'https://explorer.stavr.tech/Source/tx/${txHash}'
    },
    {
      kind: 'SR20DE',
      url: 'https://explorer.sr20de.xyz/Source-testnet',
      txPage: 'https://explorer.sr20de.xyz/Source-testnet/txs/${txHash}'
    }
  ]
};
export default info;