import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nibiru',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://nibiru.fi/',
  prettyName: 'Nibiru',
  chainType: 'cosmos',
  chainId: 'cataclysm-1',
  bech32Prefix: 'nibi',
  daemonName: 'nibid',
  nodeHome: '$HOME/.nibid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unibi',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.05,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unibi'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/NibiruChain/nibiru',
    recommendedVersion: 'v1.5.0',
    compatibleVersions: ['v1.5.0'],
    binaries: {
      "linux/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.5.0/nibid_1.5.0_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.5.0/nibid_1.5.0_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.5.0/nibid_1.5.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.5.0/nibid_1.5.0_darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NibiruChain/Networks/main/Mainnet/cataclysm-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.11'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.2'
    },
    cosmwasm: {
      version: 'v0.44.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
  },
  description: 'A Web3 hub ushering in the next era of money',
  apis: {
    wss: [{
        address: 'wss://rpc.nibiru.fi/websocket',
        provider: 'Nibiru Foundation'
      }],
    rpc: [
      {
        address: 'https://rpc.nibiru.fi',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'https://nibiru.rpc.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://rpc.nibiru.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/nibiru',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.nibiru.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://nibiru.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nibiru-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://nibiru.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://nibiru-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://nibiru-mainnet.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://nibiru-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.nibiru.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://nibiru_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://lcd.nibiru.fi',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'https://nibiru.api.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://api.nibiru.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://api.nibiru.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://rest.lavenderfive.com:443/nibiru',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://nibiru.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nibiru-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://nibiru.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://nibiru.api.staking-explorer.com',
        provider: 'Daily DROP | 2% Fee'
      },
      {
        address: 'https://nibiru-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://nibiru-mainnet.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://nibiru-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.nibiru.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://nibiru_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.nibiru.fi:443',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'nibiru.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'grpc.nibiru.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc.nibiru.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'nibiru.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'nibiru.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'nibiru-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'nibiru.grpc.m.stavr.tech:5023',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'nibiru-grpc.noders.services:35090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'nibiru-mainnet.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'nibiru-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.nibiru.roomit.xyz:8443',
        provider: 'Roomit'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://nibiru.explorers.guru/',
      txPage: 'https://nibiru.explorers.guru/transaction/${txHash}',
      accountPage: 'https://nibiru.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/nibiru',
      txPage: 'https://staking-explorer.com/transaction.php?chain=nibiru&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=nibiru&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/nibiru',
      txPage: 'https://explorer.nodestake.org/nibiru/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/nibiru/account/${accountAddress}'
    },
    {
      kind: 'LiveRaveN',
      url: 'https://mainnet.explorer.liveraven.net/nibiru',
      txPage: 'https://mainnet.explorer.liveraven.net/nibiru/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.liveraven.net/nibiru/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Nibiru-Mainnet',
      txPage: 'https://explorer.stavr.tech/Nibiru-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Nibiru-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/nibiru/',
      txPage: 'https://explorer.nodeshub.online/nibiru/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/nibiru/accounts/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/nibiru-mainnet',
      txPage: 'https://exp.stakevillage.net/nibiru-mainnet/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/nibiru-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/nibiru-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/nibiru-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/nibiru-mainnet/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/nibiru',
      txPage: 'https://explorer.whenmoonwhenlambo.money/nibiru/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/nibiru/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
      theme: {
        primaryColorHex: '#14c0ce'
      }
    }]
};
export default info;