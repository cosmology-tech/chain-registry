import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cheqd',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.cheqd.io/',
  prettyName: 'Cheqd',
  chainType: 'cosmos',
  chainId: 'cheqd-mainnet-1',
  bech32Prefix: 'cheqd',
  daemonName: 'cheqd-noded',
  nodeHome: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ncheq',
        fixedMinGasPrice: 25,
        lowGasPrice: 50,
        averageGasPrice: 75,
        highGasPrice: 100
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ncheq'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cheqd/cheqd-node',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.0', 'v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v2.0.1/cheqd-noded-2.0.1-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cheqd/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-height-mismatch'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://cheqd-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cheqd-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lcd-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.cheqd.net:443',
        provider: 'cheqd'
      },
      {
        address: 'cheqd.grpc.m.stavr.tech:9337',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'cheqd.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cheqd-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-cheqd-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.cheqd.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-cheqd.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'cheqd-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.cheqd.io',
      txPage: 'https://explorer.cheqd.io/transactions/${txHash}',
      accountPage: 'https://explorer.cheqd.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cheqd',
      txPage: 'https://ping.pub/cheqd/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cheqd',
      txPage: 'https://staking-explorer.com/transaction.php?chain=cheqd&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=cheqd&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Cheqd-Mainnet',
      txPage: 'https://explorer.stavr.tech/Cheqd-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cheqd',
      txPage: 'https://atomscan.com/cheqd/transactions/${txHash}',
      accountPage: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cheqd',
      txPage: 'https://ezstaking.app/cheqd/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cheqd/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://look.chillvalidation.com/cheqd',
      txPage: 'https://look.chillvalidation.com/cheqd/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.wildsage.io/cheqd',
      txPage: 'https://ping.wildsage.io/cheqd/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/cheqd',
      txPage: 'https://mainnet.whispernode.com/cheqd/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/cheqd/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
      theme: {
        primaryColorHex: '#fc5f04'
      }
    }]
};
export default info;