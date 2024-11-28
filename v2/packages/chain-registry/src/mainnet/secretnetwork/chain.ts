import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'secretnetwork',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://scrt.network/',
  prettyName: 'Secret Network',
  chainType: 'cosmos',
  chainId: 'secret-4',
  bech32Prefix: 'secret',
  daemonName: 'secretd',
  nodeHome: '$HOME/.secretd',
  keyAlgos: ['secp256k1'],
  slip44: 529,
  alternativeSlip44s: [118],
  fees: {
    feeTokens: [{
        denom: 'uscrt',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.1,
        highGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uscrt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/scrtlabs/SecretNetwork',
    recommendedVersion: 'v1.12.1',
    compatibleVersions: ['v1.12.1'],
    binaries: {
      "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.12.1/secretnetwork_1.12.1_mainnet_goleveldb_amd64.deb'
    },
    genesis: {
      genesisUrl: 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
  },
  description: 'Secret Network is the first blockchain with customizable privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.',
  apis: {
    grpcWeb: [{
        address: 'https://grpc.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      }],
    rpc: [
      {
        address: 'https://scrt.public-rpc.com',
        provider: 'ANKR'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/secretnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://1rpc.io/scrt-rpc',
        provider: '1RPC - Automata Network'
      },
      {
        address: 'https://secretnetwork-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      },
      {
        address: 'https://rpc-secret.01node.com',
        provider: '01node'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/secretnetwork/rpc',
        provider: 'Stakewolle'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/secretnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://secretnetwork-mainnet-lcd.autostake.com:1317',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://1rpc.io/scrt-lcd',
        provider: '1RPC - Automata Network'
      },
      {
        address: 'https://secretnetwork-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://lcd.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      },
      {
        address: 'https://rest-secret.01node.com',
        provider: '01node'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/secretnetwork/rest',
        provider: 'Stakewolle'
      }
    ],
    grpc: [{
        address: 'secretnetwork.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'secretnetwork-mainnet-grpc.autostake.com:9090',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/secretnetwork',
      txPage: 'https://ezstaking.app/secretnetwork/txs/${txHash}',
      accountPage: 'https://ezstaking.app/secretnetwork/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/secret',
      txPage: 'https://ping.pub/secret/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/secret',
      txPage: 'https://www.mintscan.io/secret/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/secret/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/secret-network',
      txPage: 'https://atomscan.com/secret-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/secret-network/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/secretnetwork',
      txPage: 'https://staking-explorer.com/transaction.php?chain=secretnetwork&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=secretnetwork&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/secret',
      txPage: 'https://mainnet.whispernode.com/secret/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/secret/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }]
};
export default info;