import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dymension',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://portal.dymension.xyz',
  prettyName: 'Dymension Hub',
  chainType: 'cosmos',
  chainId: 'dymension_1100-1',
  bech32Prefix: 'dym',
  slip44: 60,
  nodeHome: '$HOME/.dymension',
  daemonName: 'dymd',
  keyAlgos: ['ethsecp256k1'],
  fees: {
    feeTokens: [{
        denom: 'adym',
        fixedMinGasPrice: 5000000000,
        lowGasPrice: 5000000000,
        averageGasPrice: 5000000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'adym'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
  },
  description: 'Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
    }],
  codebase: {
    gitRepo: 'https://github.com/dymensionxyz/dymension',
    recommendedVersion: 'v3.0.0',
    compatibleVersions: ['v3.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/dymensionxyz/networks/raw/main/mainnet/dymension/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://dym-m-rpc.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://rpc.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'http://dymension.mainnet.rpc.noders.team:42657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dymension-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/dymension',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-rpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://rpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dym.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://dym.rpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.rpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-rpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://rpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://dymension-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc-dymension.hoodrun.io:443',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2053',
        provider: 'Wave'
      },
      {
        address: 'https://rpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://rpc.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://rpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://dymension-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://dymension.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://dymension-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rollapp.rpc.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://dymension-mainnet-rpc.crouton.digital',
        provider: 'Crouton Digital'
      }
    ],
    rest: [
      {
        address: 'https://dym-m-api.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://api.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'http://dymension.mainnet.api.noders.team:42317',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dymension-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.lavenderfive.com:443/dymension',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-api.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.api.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://api-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dymension.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://dym.api-archive.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lcd.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.api.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-api.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://api-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://dymension-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://lcd-dymension.hoodrun.io',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com',
        provider: 'Wave'
      },
      {
        address: 'https://rest.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://api.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://lcd.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://dymension-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://dymension-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rollapp.rest.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://dymension-mainnet-api.crouton.digital',
        provider: 'Crouton Digital'
      }
    ],
    grpc: [
      {
        address: 'https://dym-m-grpc.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'grpc.dymension.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'dymension-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'dymension.mainnet.grpc.noders.team:42090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'dymension.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dymension-grpc.kynraze.com:77',
        provider: 'Kynraze'
      },
      {
        address: 'https://grpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'dymension.grpc.m.stavr.tech:7119',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'dymension.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'http://dymension-grpc.stakeandrelax.net:20590',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-grpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'dymension-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://grpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'dymension.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'grpc-dymension.hoodrun.io:9095',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2083',
        provider: 'Wave'
      },
      {
        address: 'https://grpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://grpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'dymension-grpc.noders.services:12090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc.archive.dymension.mainnet.dteam.tech:29090',
        provider: 'DTEAM'
      },
      {
        address: 'dymension-grpc.polkachu.com:20590',
        provider: 'Polkachu'
      },
      {
        address: 'https://rollapp.grpc.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'dymension-mainnet-grpc.crouton.digital:20590',
        provider: 'Crouton Digital'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://dym-m-json.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://evm-dymension.hoodrun.io:8547',
        provider: 'HoodRun'
      },
      {
        address: 'https://dymension.0xwave.com:2087',
        provider: 'Wave'
      },
      {
        address: 'https://evm-rpc.dymension.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://evm-rpc.dymension.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://dymension-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://evm.archive.dymension.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://rollapp.jrpc.cumulo.com.es',
        provider: 'Cumulo'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dymension',
      txPage: 'https://www.mintscan.io/dymension/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/dymension/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/dymension',
      txPage: 'https://staking-explorer.com/transaction.php?chain=dymension&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=dymension&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dymension',
      txPage: 'https://ezstaking.app/dymension/txs/${txHash}',
      accountPage: 'https://ezstaking.app/dymension/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dymension',
      txPage: 'https://explorer.nodestake.org/dymension/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/dymension/account/${accountAddress}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/dymension',
      txPage: 'https://explorer.kynraze.com/dymension/tx/${txHash}',
      accountPage: 'https://explorer.kynraze.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/dymension',
      txPage: 'https://explorer.ist/dymension/tx/${txHash}',
      accountPage: 'https://explorer.ist/dymension/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Dymension-Mainnet',
      txPage: 'https://explorer.stavr.tech/Dymension-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Dymension-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'HoodScan',
      url: 'https://hoodscan.io/dymension',
      txPage: 'https://hoodscan.io/dymension/transactions/${txHash}',
      accountPage: 'https://hoodscan.io/dymension/accounts/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/dymension',
      txPage: 'https://explorer.posthuman.digital/dymension/tx/${txHash}',
      accountPage: 'https://explorer.posthuman.digital/dymension/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/dymension',
      txPage: 'https://mainnet.whispernode.com/dymension/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/dymension',
      txPage: 'https://explorer.mainnet.dteam.tech/dymension/tx/${txHash}',
      accountPage: 'https://explorer.mainnet.dteam.tech/dymension/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://dymension.valopers.com/',
      txPage: 'https://dymension.valopers.com/transactions/${txHash}',
      accountPage: 'https://dymension.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/dymension/overview',
      validatorPage: 'https://validatorinfo.com/networks/dymension/validators',
      proposalPage: 'https://validatorinfo.com/networks/dymension/governance'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/dymension/mainnet',
      txPage: 'https://moon-runners.net/dymension/mainnet/finder?search=${txHash}',
      accountPage: 'https://moon-runners.net/dymension/mainnet/finder?search=${accountAddress}'
    },
    {
      kind: 'Crouton Digital',
      url: 'https://explorer.crouton.digital/mainnets/dymension/overview',
      txPage: 'https://explorer.crouton.digital/mainnets/dymension/transactions/${txHash}',
      accountPage: 'https://explorer.crouton.digital/mainnets/dymension/account/${accountAddress}'
    }
  ],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/dymension',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }, {
      provider: 'Crouton Digital',
      url: 'https://storage.crouton.digital/mainnet/dymension/snapshots/dymension_latest.tar.lz4',
      type: 'pruned',
      compression: 'lz4'
    }]
};
export default info;