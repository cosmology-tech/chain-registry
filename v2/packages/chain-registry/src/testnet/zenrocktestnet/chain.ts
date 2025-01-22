import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zenrocktestnet',
  status: 'live',
  website: 'https://zenrocklabs.io',
  networkType: 'testnet',
  chainType: 'cosmos',
  prettyName: 'Zenrock Gardia Testnet',
  chainId: 'gardia-3',
  bech32Prefix: 'zen',
  daemonName: 'zenrockd',
  nodeHome: '$HOME/.zenrockd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'urock',
        fixedMinGasPrice: 0.5,
        lowGasPrice: 0.5,
        averageGasPrice: 0.55,
        highGasPrice: 0.6
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'urock'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/zenrock-foundation/zrchain',
    genesis: {
      genesisUrl: 'https://rpc.gardia.zenrocklabs.io/genesis'
    },
    recommendedVersion: '5.3.8',
    compatibleVersions: ['5.3.8'],
    binaries: {
      "linux/arm64": 'https://github.com/zenrocklabs/zrchain/releases/download/v5.3.8/zenrockd'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/zenrocklabs/cosmos-sdk',
      version: 'v0.50.10',
      tag: 'v0.50.10-zenrock'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }],
    rest: [{
        address: 'https://api.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }],
    grpc: [{
        address: 'https://grpc.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer.gardia.zenrocklabs.io/',
      txPage: 'https://explorer.gardia.zenrocklabs.io/tx/${txHash}',
      accountPage: 'https://explorer.gardia.zenrocklabs.io/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
  },
  keywords: ['mpc', 'testnet']
};
export default info;