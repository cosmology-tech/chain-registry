import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'joltify',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.joltify.io/',
  prettyName: 'Joltify',
  chainType: 'cosmos',
  chainId: 'joltify_1729-1',
  bech32Prefix: 'jolt',
  daemonName: 'jolt',
  nodeHome: '$HOME/.joltify',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujolt',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujolt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/joltify-finance/joltify_lending',
    genesis: {
      genesisUrl: 'https://ewr1.vultrobjects.com/joltify-mainnet/genesis_file/genesis.json'
    },
    recommendedVersion: 'v0.1.0-rc1',
    compatibleVersions: ['v0.1.0-rc1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.3'
    },
    binaries: {
      "linux/amd64": 'https://gitlab.com/api/v4/projects/42057472/packages/generic/joltify-linux-amd64-v0.1.0-rc1/v0.1.0-rc1/joltify'
    },
    language: {
      type: 'go',
      version: '1.22.3'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.5'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg',
      theme: {
        primaryColorHex: '#2dfb71'
      }
    }],
  description: 'Joltify is the First EVM compatible game-changing L1 Public Chain built on the Cosmos SDK for Real-World Assets (RWA) and Beyond.',
  apis: {
    rpc: [{
        address: 'https://rpc.joltify.io',
        provider: 'joltify'
      }, {
        address: 'https://joltify_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://lcd.joltify.io/',
        provider: 'joltify'
      }, {
        address: 'https://joltify_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'grpc.joltify.io:443',
        provider: 'joltify'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.joltify.io/',
        provider: 'joltify'
      }, {
        address: 'https://joltify_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }]
  },
  explorers: [
    {
      kind: 'big dipper',
      url: 'https://explorer.joltify.io/joltify',
      txPage: 'https://explorer.joltify.io/joltify/transactions/${txHash}',
      accountPage: 'https://explorer.joltify.io/joltify/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/joltify',
      txPage: 'https://staking-explorer.com/transaction.php?chain=joltify&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=joltify&addr=${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/joltify',
      txPage: 'https://explorer.whenmoonwhenlambo.money/joltify/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/joltify/account/${accountAddress}'
    }
  ],
  keywords: ['rwa', 'lending']
};
export default info;