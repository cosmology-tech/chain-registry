import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'jackal',
  chainType: 'cosmos',
  chainId: 'jackal-1',
  website: 'https://jackalprotocol.com',
  prettyName: 'Jackal',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'jkl',
  daemonName: 'canined',
  nodeHome: '$HOME/.canine',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujkl',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.002,
        averageGasPrice: 0.002,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujkl'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/JackalLabs/canine-chain',
    recommendedVersion: 'v4.0.3',
    compatibleVersions: [
      'v4.0.0',
      'v4.0.1',
      'v4.0.2',
      'v4.0.3'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v4.0.3/canined-Linux',
      "darwin/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v4.0.3/canined-macOS'
    },
    genesis: {
      genesisUrl: 'https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json'
    },
    cosmwasm: {
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
  },
  apis: {
    wss: [{
        address: 'wss://jackal-rpc.agoranodes.com',
        provider: 'AgoraNodes'
      }],
    rpc: [
      {
        address: 'https://rpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/jackal',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://jkl.rpc.m.stavr.tech:11127',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://jackal.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc.jackal.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-jackal.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://jackal-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://m-jackal.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://rpc-jackal.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://jackal-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://jackal.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://jackal.rpc.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://jackal.rpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/jackal/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.jackal.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://rpc.jackal.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://jackal-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://jackal-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.jackalprotocol.com',
        provider: 'Jackal Labs'
      },
      {
        address: 'https://rest.lavenderfive.com:443/jackal',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://jkl.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.jackal.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-jackal.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://jackal-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://m-jackal.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://jackal-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd-jackal.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://jackal.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://jackal.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://jackal.api.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/jackal/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://api.jackal.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://api.jackal.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://jackal-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://jackal-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc.jackalprotocol.com:443',
        provider: 'Jackal Labs'
      },
      {
        address: 'jackal.grpc.bccnodes.com:9490',
        provider: 'BccNodes'
      },
      {
        address: 'jackal.grpc.nodersteam.com:9990',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'jackal.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.jackal.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'jackal-grpc.polkachu.com:17590',
        provider: 'Polkachu'
      },
      {
        address: 'http://jkl.grpc.m.stavr.tech:5013',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'jackal-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'jackal.grpc.kjnodes.com:13790',
        provider: 'kjnodes'
      },
      {
        address: 'https://jackal.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'grpc.jackal.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'jackal-grpc.noders.services:26090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc.jackal.mathnodes.com:443',
        provider: 'MathNodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/jackal',
      txPage: 'https://ping.pub/jackal/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/jackal',
      txPage: 'https://staking-explorer.com/transaction.php?chain=jackal&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=jackal&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/jackal',
      txPage: 'https://explorer.nodestake.org/jackal/tx/${txHash}'
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/jackal',
      txPage: 'https://explorer.bccnodes.com/jackal/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/jackal',
      txPage: 'https://exp.utsa.tech/jackal/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/jackal',
      txPage: 'https://explorer.stavr.tech/jackal/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/jackal',
      txPage: 'https://exp.nodeist.net/jackal/tx/${txHash}'
    },
    {
      kind: 'Big Dipper',
      url: 'https://bigdipper.live/jackal',
      txPage: 'https://bigdipper.live/jackal/transactions/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/jackal',
      txPage: 'https://mainnet.whispernode.com/jackal/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/jackal/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
      theme: {
        primaryColorHex: '#dbdbcb'
      }
    }]
};
export default info;