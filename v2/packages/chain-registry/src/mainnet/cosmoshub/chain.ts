import { Chain } from '@chain-registry/v2-types';
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
    recommendedVersion: 'v21.0.0',
    compatibleVersions: ['v21.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-darwin-arm64',
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9',
      tag: 'v0.50.9-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
  },
  description: 'In a nutshell, Cosmos Hub bills itself as a project that solves some of the hardest problems facing the blockchain industry. It aims to offer an antidote to slow, expensive, unscalable and environmentally harmful proof-of-work protocols, like those used by Bitcoin, by offering an ecosystem of connected blockchains.\n\nThe project’s other goals include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized apps. Last but not least, an Inter-blockchain Communication protocol makes it easier for blockchain networks to communicate with each other — preventing fragmentation in the industry.\n\nCosmos Hub\'s origins can be dated back to 2014, when Tendermint, a core contributor to the network, was founded. In 2016, a white paper for Cosmos was published — and a token sale was held the following year. ATOM tokens are earned through a hybrid proof-of-stake algorithm, and they help to keep the Cosmos Hub, the project’s flagship blockchain, secure. This cryptocurrency also has a role in the network’s governance.',
  apis: {
    rpc: [
      {
        address: 'https://cosmoshub.tendermintrpc.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://cosmos-rpc.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://cosmos-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️'
      },
      {
        address: 'https://rpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
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
        address: 'https://rpc-cosmoshub.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cosmos-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://cosmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes'
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
        address: 'https://rpc.cosmos.bh.rocks',
        provider: 'BlockHunters 🎯'
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
        address: 'https://cosmos.rpc.silknodes.io',
        provider: 'Silk Nodes'
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
        address: 'https://rpc-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://cosmos-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-cosmoshub.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://cosmos-rpc.tienthuattoan.com',
        provider: 'TTT 🇻🇳'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/trpc',
        provider: 'PRO Delegators'
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
        address: 'https://rpc-cosmos.kewrnode.com',
        provider: 'Kewr Node'
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
        address: 'https://cosmoshub.rpc.quasarstaking.ai',
        provider: 'Quasar'
      },
      {
        address: 'https://cosmos-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.cosmoshub-4-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ],
    rest: [
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
        address: 'https://api-cosmoshub.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
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
        address: 'https://rest-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rest-cosmoshub.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://lcd-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
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
        address: 'https://api-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://cosmos-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-cosmoshub.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://cosmos-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/crpc',
        provider: 'PRO Delegators'
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
        address: 'https://rest-cosmos.kewrnode.com',
        provider: 'Kewr Node'
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
        address: 'https://cosmoshub.api.quasarstaking.ai',
        provider: 'Quasar'
      },
      {
        address: 'https://cosmos-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.cosmoshub-4-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ],
    grpc: [
      {
        address: 'cosmoshub.grpc.lava.build',
        provider: 'Lava'
      },
      {
        address: 'cosmoshub.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-cosmoshub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
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
        address: 'services.staketab.com:9030',
        provider: 'Staketab'
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
        address: 'grpc-cosmoshub.cosmos-spaces.cloud:3910',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'cosmoshub.grpc.kjnodes.com:11390',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-cosmos-hub-01.stakeflow.io:9090',
        provider: 'Stakeflow'
      },
      {
        address: 'grpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'cosmos-grpc.w3coins.io:14990',
        provider: 'w3coins'
      },
      {
        address: 'grpc-cosmoshub.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'cosmos-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan'
      },
      {
        address: 'cosmoshub-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://grpc-cosmos.nodeist.net',
        provider: 'Nodeist'
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
        address: 'cosmoshub.grpc.quasarstaking.ai',
        provider: 'Quasar'
      },
      {
        address: 'grpc.cosmoshub-4-archive.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ]
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
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      theme: {
        primaryColorHex: '#272d45'
      }
    }]
};
export default info;