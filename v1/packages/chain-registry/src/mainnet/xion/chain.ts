import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'xion',
  chain_type: 'cosmos',
  chain_id: 'xion-mainnet-1',
  pretty_name: 'Xion',
  website: 'https://xion.burnt.com',
  network_type: 'mainnet',
  status: 'live',
  bech32_prefix: 'xion',
  bech32_config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxion',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.001,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/burnt-labs/xion',
    tag: 'v14.1.1',
    recommended_version: 'v14.1.1',
    language: {
      type: 'go',
      version: 'v1.22'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-darwin-amd64?checksum=sha256:aac923cc23a7a41e4bca0f12bfc66dcc9e76932f952a8c6908ab7e92be87082b',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-darwin-arm64?checksum=sha256:fbeb44762e35d9eacc4b4c31bae08da200a4ffa22c6c09b258ed4930e41d5e2b',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-linux-amd64?checksum=sha256:37f0dcd4625948014b51035c9086914cee2bb9a2b011fd23ba4d1fb5375bca6c',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-linux-arm64?checksum=sha256:7f92664f6de2eaf278559f5f2bb3d2855a723ffa49dd076bc98618a82036adcb'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/mainnets/xion-mainnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.xion-mainnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-burnt.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.xion.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://xion-rpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      }
    ],
    rest: [
      {
        address: 'https://api.xion-mainnet-1.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-burnt.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-lcd.autostake.com',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.xion.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://xion-rest.kingnodes.com',
        provider: 'kingnodes 👑'
      }
    ],
    grpc: [
      {
        address: 'grpc.xion-mainnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'xion-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-grpc.polkachu.com:22390',
        provider: 'Polkachu'
      },
      {
        address: 'xion-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.xion.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'xion-grpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xion',
      tx_page: 'https://www.mintscan.io/xion/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/xion/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.burnt.com/xion-mainnet-1',
      tx_page: 'https://explorer.burnt.com/xion-mainnet-1/tx/${txHash}',
      account_page: 'https://explorer.burnt.com/xion-mainnet-1/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/xion',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=xion&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=xion&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/xion',
      tx_page: 'https://explorer.nodestake.org/xion/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/xion/account/${accountAddress}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://xion.explorers.guru',
      tx_page: 'https://xion.explorers.guru/transactions/${txHash}',
      account_page: 'https://xion.explorers.guru//account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'mainnet'
  ]
};
export default info;