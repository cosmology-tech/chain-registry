import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'seda',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.seda.xyz/',
  pretty_name: 'SEDA',
  chain_type: 'cosmos',
  chain_id: 'seda-1',
  bech32_prefix: 'seda',
  daemon_name: 'sedad',
  node_home: '$HOME/.sedad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aseda',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 10000000000,
        high_gas_price: 14000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.50.5'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://seda-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-rpc.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://seda-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://seda-rpc.applejuice.256x25.tech:443',
        provider: 'Apple juice 🧃'
      },
      {
        address: 'https://seda-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://seda_mainnet_rpc.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc-seda-mainnet.keepitstaked.com:443',
        provider: 'KeepItStaked.com'
      }
    ],
    rest: [
      {
        address: 'https://lcd.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-api.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://seda-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-api.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://seda-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://seda-api.applejuice.256x25.tech:443',
        provider: 'Apple juice 🧃'
      },
      {
        address: 'https://seda-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://seda_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api-seda-mainnet.keepitstaked.com:443',
        provider: 'KeepItStaked.com'
      }
    ],
    grpc: [
      {
        address: 'seda-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-grpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'seda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'seda-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ]
  },
  explorers: [
    {
      kind: 'sedaexplorer',
      url: 'https://explorer.seda.xyz/',
      tx_page: 'https://explorer.seda.xyz/txs/${txHash}',
      account_page: 'https://explorer.seda.xyz/account/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://seda.explorers.guru',
      tx_page: 'https://seda.explorers.guru/transaction/${txHash}',
      account_page: 'https://seda.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/seda',
      tx_page: 'https://mainnet.whispernode.com/seda/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/seda/account/${accountAddress}'
    },
    {
      kind: 'Apple juice 🧃',
      url: 'https://explorer.256x25.tech/seda-mainnet',
      tx_page: 'https://explorer.256x25.tech/seda-mainnet/tx/${txHash}',
      account_page: 'https://explorer.256x25.tech/seda-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/seda',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/seda/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/seda/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
      theme: {
        primary_color_hex: '#8178d1'
      }
    }]
} as const satisfies Chain;
export default info;