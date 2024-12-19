import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sourcetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Source Testnet',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/Source-Protocol-Cosmos/source',
    recommendedVersion: 'v3.0.1',
    compatibleVersions: ['v3.0.1'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Source-Protocol-Cosmos/testnets/master/sourcetest-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://source-testnet-rpc.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://source-test.rpc.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://rpc-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://source_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://source-testnet-api.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://source-test.api.moonbridge.team/',
        provider: 'MoonBridge'
      },
      {
        address: 'https://api-testnet-source.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://source.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://source_testnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
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
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/source-testnet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/source-testnet/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/source-testnet/account/${accountAddress}'
    }
  ]
};
export default info;