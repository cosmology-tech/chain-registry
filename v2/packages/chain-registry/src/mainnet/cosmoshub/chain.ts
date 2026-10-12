import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cosmoshub',
  chainType: 'cosmos',
  chainId: 'cosmoshub-4',
  website: 'https://cosmos.network/',
  prettyName: 'Cosmos Hub',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'cosmos',
  daemonName: 'gaiad',
  nodeHome: '$HOME/.gaia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatom',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmos/gaia',
    recommendedVersion: 'v28.0.0',
    compatibleVersions: ['v28.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v28.0.0/gaiad-v28.0.0-darwin-amd64',
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v28.0.0/gaiad-v28.0.0-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4',
      tag: 'v0.53.4'
    },
    ibc: {
      type: 'go',
      version: 'v10.7.0'
    },
    cosmwasm: {
      version: 'v0.60.8',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.60.8'
    },
    tag: 'v28.0.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
  },
  description: 'The Cosmos Hub is the flagship blockchain of the Cosmos ecosystem, launched in 2019. Today, it provides multichain services to other Cosmos blockchains, including the IBC Eureka bridge between the Cosmos ecosystem and Ethereum.',
  apis: {
    rpc: [
      {
        address: 'https://cosmos.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://rpc.cosmoshub-main.ccvalidators.com:443',
        provider: 'CryptoCrew',
        archive: true
      },
      {
        address: 'https://cosmoshub.tendermintrpc.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://cosmos-rpc.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cosmoshub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-cosmoshub.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://go.getblock.io/17515cb3ec0e43b7817f182e5de6066a',
        provider: 'GetBlock RPC Nodes'
      },
      {
        address: 'https://cosmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc.cosmos.dragonstake.io',
        provider: 'DragonStake'
      },
      {
        address: 'https://cosmoshub.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://cosmos-rpc.rockrpc.net',
        provider: 'RockawayX Infra'
      },
      {
        address: 'http://rpc-cosmoshub.freshstaking.com:26657',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://cosmos-rpc.easy2stake.com/',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://rpc.cosmos.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://cosmos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://cosmoshub.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://cosmos-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://cosmos-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://cosmoshub-rpc.cosmosrescue.dev',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://cosmos.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cosmoshub/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.cosmoshub-4.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://cosmos-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://cosmos-hub.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://cosmoshub-mainnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos.ibs.team:443/rpc',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.cosmoshub-4-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://cosmoshub-mainnet.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.cosmos.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://cosmoshub.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://rpc.sbsconstrutionnconsultancy.com',
        provider: 'bapimondal-server'
      },
      {
        address: 'https://cosmos-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://cosmos-mainnet-rpc.crouton.digital',
        provider: 'Crouton Digital'
      }
    ],
    rest: [
      {
        address: 'https://cosmos.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://rest.cosmoshub-main.ccvalidators.com:443',
        provider: 'CryptoCrew',
        archive: true
      },
      {
        address: 'https://cosmoshub.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://cosmos-lcd.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rest.cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cosmoshub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://cosmos-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://lcd.cosmos.dragonstake.io',
        provider: 'DragonStake'
      },
      {
        address: 'https://cosmoshub.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rest-cosmoshub.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://cosmos-lcd.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://api.cosmos.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://cosmos.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://cosmos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://cosmoshub.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://cosmos-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://cosmos-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://cosmoshub-api.cosmosrescue.dev',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://cosmos-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cosmoshub/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cosmos-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://cosmoshub-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos.ibs.team:443/api',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.cosmoshub-4-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://api.cosmoshub-4.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://cosmoshub-mainnet.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.cosmos.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://cosmoshub.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://cosmos-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://cosmoshub-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://cosmos-mainnet-api.crouton.digital',
        provider: 'Crouton Digital'
      }
    ],
    grpc: [
      {
        address: 'grpc.cosmoshub-main.ccvalidators.com:443',
        provider: 'CryptoCrew',
        archive: true
      },
      {
        address: 'https://cosmoshub.grpc.lava.build',
        provider: 'Lava'
      },
      {
        address: 'cosmoshub.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cosmos-grpc.polkachu.com:14990',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.cosmos.interbloc.org:443',
        provider: 'Interbloc'
      },
      {
        address: 'grpc.cosmos.dragonstake.io:443',
        provider: 'DragonStake'
      },
      {
        address: 'cosmoshub.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'https://grpc.cosmos.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'cosmos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'cosmoshub.grpc.kjnodes.com:11390',
        provider: 'kjnodes'
      },
      {
        address: 'cosmos-grpc.w3coins.io:14990',
        provider: 'w3coins'
      },
      {
        address: 'cosmoshub-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'cosmos-grpc.stakeandrelax.net:15090',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'cosmoshub-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.cosmoshub-4-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'grpc.cosmoshub-4.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'cosmoshub-mainnet.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://cosmos-grpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://grpc.cosmos.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'cosmos-mainnet-grpc.crouton.digital:14990',
        provider: 'Crouton Digital'
      }
    ],
    wss: [{
        address: 'wss://rpc.cosmos.cumulo.com.es/websocket',
        provider: 'Cumulo'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cosmos',
      txPage: 'https://www.mintscan.io/cosmos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/cosmos/accounts/${accountAddress}',
      validatorPage: 'https://www.mintscan.io/cosmos/validators/${validatorAddress}',
      proposalPage: 'https://www.mintscan.io/cosmos/proposals/${proposalId}',
      blockPage: 'https://www.mintscan.io/cosmos/blocks/${blockHeight}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cosmoshub',
      txPage: 'https://ezstaking.app/cosmoshub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cosmoshub/account/${accountAddress}',
      validatorPage: 'https://ezstaking.app/cosmoshub/validators/${validatorAddress}',
      proposalPage: 'https://ezstaking.app/cosmoshub/proposals/${proposalId}',
      blockPage: 'https://ezstaking.app/cosmoshub/blocks/${blockHeight}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cosmos',
      txPage: 'https://ping.pub/cosmos/tx/${txHash}',
      accountPage: 'https://ping.pub/cosmos/account/${accountAddress}',
      validatorPage: 'https://ping.pub/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://ping.pub/cosmos/gov/${proposalId}',
      blockPage: 'https://ping.pub/cosmos/block/${blockHeight}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cosmoshub',
      txPage: 'https://staking-explorer.com/transaction.php?chain=cosmoshub&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=cosmoshub&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com',
      txPage: 'https://atomscan.com/transactions/${txHash}',
      accountPage: 'https://atomscan.com/accounts/${accountAddress}',
      validatorPage: 'https://atomscan.com/validators/${validatorAddress}',
      proposalPage: 'https://atomscan.com/votes/${proposalId}',
      blockPage: 'https://atomscan.com/blocks/${blockHeight}'
    },
    {
      kind: 'unichain',
      url: 'https://unicha.in/cosmos',
      txPage: 'https://unicha.in/cosmos/transaction/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cosmoshub',
      txPage: 'https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/cosmoshub/account/${accountAddress}',
      validatorPage: 'https://explorer.tcnetwork.io/cosmoshub/validator/${validatorAddress}',
      proposalPage: 'https://explorer.tcnetwork.io/cosmoshub/proposal/${proposalId}',
      blockPage: 'https://explorer.tcnetwork.io/cosmoshub/block/${blockHeight}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/cosmos',
      accountPage: 'https://stakeflow.io/cosmos/accounts/${accountAddress}',
      validatorPage: 'https://stakeflow.io/cosmos/validators/${validatorAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/cosmos'
    },
    {
      kind: 'Inbloc',
      url: 'https://inbloc.org',
      txPage: 'https://inbloc.org/transactions/${txHash}',
      accountPage: 'https://inbloc.org/account/${accountAddress}',
      validatorPage: 'https://inbloc.org/cosmos/validator/${validatorAddress}',
      proposalPage: 'https://inbloc.org/cosmos/proposal/${proposalId}',
      blockPage: 'https://inbloc.org/cosmos/blocks/${blockHeight}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/cosmos',
      txPage: 'https://mainnet.whispernode.com/cosmos/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/cosmos/account/${accountAddress}',
      validatorPage: 'https://mainnet.whispernode.com/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://mainnet.whispernode.com/cosmos/gov/${proposalId}',
      blockPage: 'https://mainnet.whispernode.com/cosmos/block/${blockHeight}'
    },
    {
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/cosmoshub',
      txPage: 'https://mainnet.itrocket.net/cosmoshub/tx/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/cosmoshub/account/${accountAddress}',
      validatorPage: 'https://mainnet.itrocket.net/cosmoshub/staking/${validatorAddress}',
      proposalPage: 'https://mainnet.itrocket.net/cosmoshub/gov/${proposalId}',
      blockPage: 'https://mainnet.itrocket.net/cosmoshub/block/${blockHeight}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/cosmos',
      txPage: 'https://explorer.nodestake.org/cosmos/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/cosmos/account/${accountAddress}',
      validatorPage: 'https://explorer.nodestake.org/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://explorer.nodestake.org/cosmos/gov/${proposalId}',
      blockPage: 'https://explorer.nodestake.org/cosmos/block/${blockHeight}'
    },
    {
      kind: 'Valopers',
      url: 'https://cosmos.valopers.com/',
      txPage: 'https://cosmos.valopers.com/transactions/${txHash}',
      accountPage: 'https://cosmos.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/cosmoshub/overview',
      validatorPage: 'https://validatorinfo.com/networks/cosmoshub/validators',
      proposalPage: 'https://validatorinfo.com/networks/cosmoshub/governance'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/cosmos',
      txPage: 'https://explorer.whenmoonwhenlambo.money/cosmos/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/cosmos/account/${accountAddress}',
      validatorPage: 'https://explorer.whenmoonwhenlambo.money/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://explorer.whenmoonwhenlambo.money/cosmos/gov/${proposalId}',
      blockPage: 'https://explorer.whenmoonwhenlambo.money/cosmos/block/${blockHeight}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/cosmoshub/mainnet',
      txPage: 'https://moon-runners.net/cosmoshub/mainnet/finder?search=${txHash}',
      accountPage: 'https://moon-runners.net/cosmoshub/mainnet/finder?search=${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
    }],
  snapshots: [
    {
      provider: 'High Stakes 🇨🇭',
      url: 'https://tools.highstakes.ch/snapshots/cosmos',
      latestUrl: 'https://tools.highstakes.ch/files/cosmos.tar.gz',
      type: 'pruned',
      dbBackend: 'goleveldb',
      frequency: 'every 3h',
      compression: 'tar',
      checksumAvailable: true
    },
    {
      url: 'https://polkachu.com/tendermint_snapshots/cosmos',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    },
    {
      provider: 'Crouton Digital',
      url: 'https://storage.crouton.digital/mainnet/cosmos/snapshots/cosmos_latest.tar.lz4',
      type: 'pruned',
      compression: 'lz4'
    }
  ]
};
export default info;