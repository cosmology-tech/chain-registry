import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cosmoshub',
  chain_id: 'cosmoshub-4',
  website: 'https://cosmos.network/',
  pretty_name: 'Cosmos Hub',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'cosmos',
  daemon_name: 'gaiad',
  node_home: '$HOME/.gaia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uatom',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uatom'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
  },
  description:
    "In a nutshell, Cosmos Hub bills itself as a project that solves some of the hardest problems facing the blockchain industry. It aims to offer an antidote to slow, expensive, unscalable and environmentally harmful proof-of-work protocols, like those used by Bitcoin, by offering an ecosystem of connected blockchains.\n\nThe project’s other goals include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized apps. Last but not least, an Inter-blockchain Communication protocol makes it easier for blockchain networks to communicate with each other — preventing fragmentation in the industry.\n\nCosmos Hub's origins can be dated back to 2014, when Tendermint, a core contributor to the network, was founded. In 2016, a white paper for Cosmos was published — and a token sale was held the following year. ATOM tokens are earned through a hybrid proof-of-stake algorithm, and they help to keep the Cosmos Hub, the project’s flagship blockchain, secure. This cryptocurrency also has a role in the network’s governance.",
  apis: {
    rpc: [
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
        address: 'https://cosmoshub-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.cosmoshub.strange.love',
        provider: 'strangelove-ventures'
      },
      {
        address: 'https://rpc-cosmoshub.ecostake.com',
        provider: 'ecostake'
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
        address: 'https://rpc.cosmos.nodestake.top',
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
        address: 'https://rpc-cosmoshub.goldenratiostaking.net',
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
        address: 'https://cosmos-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan'
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
      }
    ],
    rest: [
      {
        address: 'https://cosmos-lcd.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rest-cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://cosmoshub-api.lavenderfive.com:443',
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
        address: 'https://api.cosmos.nodestake.top',
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
      }
    ],
    grpc: [
      {
        address: 'cosmoshub-grpc.lavenderfive.com:443',
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
        address: 'https://grpc.cosmos.nodestake.top',
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
        address: 'cosmos-grpc.stakeandrelax.net:14990',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cosmos',
      tx_page: 'https://www.mintscan.io/cosmos/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/cosmos/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cosmoshub',
      tx_page: 'https://ezstaking.app/cosmoshub/txs/${txHash}',
      account_page: 'https://ezstaking.app/cosmoshub/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cosmos',
      tx_page: 'https://ping.pub/cosmos/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com',
      tx_page: 'https://atomscan.com/transactions/${txHash}',
      account_page: 'https://atomscan.com/accounts/${accountAddress}'
    },
    {
      kind: 'unichain',
      url: 'https://unicha.in/cosmos',
      tx_page: 'https://unicha.in/cosmos/transaction/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cosmoshub',
      tx_page: 'https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/cosmos',
      account_page: 'https://stakeflow.io/cosmos/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/cosmos',
      tx_page: 'https://exp.nodeist.net/cosmos/tx/${txHash}'
    },
    {
      kind: 'Inbloc',
      url: 'https://inbloc.org',
      tx_page: 'https://inbloc.org/transactions/${txHash}',
      account_page: 'https://inbloc.org/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
    }
  ]
};
export default info;
