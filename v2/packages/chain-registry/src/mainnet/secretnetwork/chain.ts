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
    },
    versions: [
      {
        name: 'v1.2',
        tag: 'v1.2',
        height: 0,
        nextVersionName: 'v1.3'
      },
      {
        name: 'v1.3',
        tag: 'v1.3',
        height: 3343000,
        nextVersionName: 'v1.4'
      },
      {
        name: 'v1.4',
        tag: 'v1.4',
        height: 5309200,
        nextVersionName: 'v1.5'
      },
      {
        name: 'v1.5',
        tag: 'v1.5',
        height: 5941700,
        nextVersionName: 'v1.6'
      },
      {
        name: 'v1.6',
        tag: 'v1.6',
        height: 6537300,
        nextVersionName: 'v1.7'
      },
      {
        name: 'v1.7',
        tag: 'v1.7.1',
        height: 7719500,
        nextVersionName: 'v1.8'
      },
      {
        name: 'v1.8',
        tag: 'v1.8.0',
        height: 7760000,
        nextVersionName: 'v1.9',
        recommendedVersion: 'v1.8.0',
        compatibleVersions: ['v1.8.0'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.8.0/secretnetwork_1.8.0_mainnet_goleveldb_amd64.deb'
        }
      },
      {
        name: 'v1.9',
        tag: 'v1.9.0',
        height: 8861800,
        recommendedVersion: 'v1.9.0',
        compatibleVersions: ['v1.9.0'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.0/secretnetwork_1.9.0_mainnet_goleveldb_amd64.deb'
        }
      },
      {
        name: 'v1.9',
        tag: 'v1.9.2',
        height: 8861815,
        recommendedVersion: 'v1.9.2',
        compatibleVersions: ['v1.9.2'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.2/secretnetwork_1.9.2_mainnet_goleveldb_amd64.deb'
        },
        nextVersionName: 'v1.10'
      },
      {
        name: 'v1.10',
        tag: 'v1.10.0',
        height: 10186400,
        recommendedVersion: 'v1.10.0',
        compatibleVersions: ['v1.10.0'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.10.0/secretnetwork_1.10.0_mainnet_goleveldb_amd64.deb'
        },
        nextVersionName: 'v1.11'
      },
      {
        name: 'v1.11',
        tag: 'v1.11.0',
        height: 10824000,
        recommendedVersion: 'v1.11.0',
        compatibleVersions: ['v1.11.0'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.11.0/secretnetwork_1.11.0_mainnet_goleveldb_amd64.deb'
        },
        nextVersionName: 'v1.12'
      },
      {
        name: 'v1.12',
        tag: 'v1.12.1',
        height: 11136666,
        recommendedVersion: 'v1.12.1',
        compatibleVersions: ['v1.12.1'],
        binaries: {
          "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.12.1/secretnetwork_1.12.1_mainnet_goleveldb_amd64.deb'
        },
        nextVersionName: ''
      }
    ]
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