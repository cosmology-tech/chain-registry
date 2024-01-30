import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'jackal',
  chain_id: 'jackal-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujkl',
        fixed_min_gas_price: 0,
        low_gas_price: 0.002,
        average_gas_price: 0.002,
        high_gas_price: 0.02
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujkl'
      }
    ]
  },
  codebase: {
    cosmwasm_enabled: true
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
  },
  apis: {
    wss: [
      {
        address: 'wss://jackal-rpc.agoranodes.com',
        provider: 'AgoraNodes'
      }
    ],
    rpc: [
      {
        address: 'https://rpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      },
      {
        address: 'https://jackal-rpc.lavenderfive.com:443',
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
        address: 'https://rpc.jackal.nodestake.top',
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
        address: 'http://jackal.rpc.nodersteam.com:31657',
        provider: '[NODERS]TEAM'
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
      }
    ],
    rest: [
      {
        address: 'https://api.jackalprotocol.com',
        provider: 'Jackal Labs'
      },
      {
        address: 'https://jackal-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://jkl.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.jackal.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'http://jackal.api.nodersteam.com:2917',
        provider: '[NODERS]TEAM'
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
        address: 'jackal-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.jackal.nodestake.top:443',
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
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/jackal',
      tx_page: 'https://ping.pub/jackal/tx/${txHash}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/jackal',
      tx_page: 'https://explorer.nodestake.top/jackal/tx/${txHash}'
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/jackal',
      tx_page: 'https://explorer.bccnodes.com/jackal/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/jackal',
      tx_page: 'https://exp.utsa.tech/jackal/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/jackal',
      tx_page: 'https://explorer.stavr.tech/jackal/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/jackal',
      tx_page: 'https://exp.nodeist.net/jackal/tx/${txHash}'
    },
    {
      kind: 'Big Dipper',
      url: 'https://bigdipper.live/jackal',
      tx_page: 'https://bigdipper.live/jackal/transactions/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
    }
  ]
};
export default info;
