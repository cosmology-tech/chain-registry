import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'elys',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Elys Network',
  chainType: 'cosmos',
  chainId: 'elys-1',
  bech32Prefix: 'elys',
  daemonName: 'elysd',
  nodeHome: '$HOME/.elys',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uelys'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  fees: {
    feeTokens: [
      {
        denom: 'uelys',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }
    ]
  },
  codebase: {
    gitRepo: 'https://github.com/elys-network/elys',
    recommendedVersion: 'v1.4.0',
    compatibleVersions: ['v1.4.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.12'
    },
    genesis: {
      genesisUrl: 'https://github.com/elys-network/networks/blob/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    cosmwasm: {
      enabled: false
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
  },
  description: 'Your premier DeFi proof-of-stake chain. Simplified, CEX-like interface with endless possibilities. Swap, stake, Derivative trading, all your DeFi needs, in one place.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.elys.network:443',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://elys-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys.rpc.vnodesv.net:443',
        provider: 'vNodes[V] [S]er|V|ice[S]'
      },
      {
        address: 'https://elys-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://rpc.elys.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://elys.rpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/elys/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://elys-rpc.highstakes.ch',
        provider: 'High Stakes'
      },
      {
        address: 'https://elys-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://elys.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://elys-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://elys-rpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://elys.rpc.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://elys-rpc.moonbridge.org:443',
        provider: 'Moonbridge'
      },
      {
        address: 'https://elys_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://elys-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake'
      }
    ],
    rest: [
      {
        address: 'https://api.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://elys-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys.rest.vnodesv.net:443',
        provider: 'vNodes[V] [S]er|V|ice[S]'
      },
      {
        address: 'https://elys-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://api.elys.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://elys.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/elys/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://elys-api.highstakes.ch',
        provider: 'High Stakes'
      },
      {
        address: 'https://elys-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://elys.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://elys-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://elys-api.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://elys.api.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://elys-api.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://elys_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://elys-mainnet-lcd.autostake.com:443',
        provider: 'AutoStaked'
      }
    ],
    grpc: [
      {
        address: 'elys-grpc.polkachu.com:22090',
        provider: 'Polkachu'
      },
      {
        address: 'elys-testnet-grpc.itrocket.net:38090',
        provider: 'itrocket'
      },
      {
        address: 'elys-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'elys-mainnet-grpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'grpc.elys.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'elys.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'elys-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'elys-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'elys.grpc.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'elys-grpc.moonbridge.org:443',
        provider: 'Moonbridge'
      },
      {
        address: 'elys-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/elys',
      txPage: 'https://explorer.nodestake.org/elys/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/elys/account/${accountAddress}'
    },
    {
      kind: 'Moonlet',
      url: 'https://explorer.moonlet.cloud/elys',
      txPage: 'https://explorer.moonlet.cloud/elys/tx/${txHash}',
      accountPage: 'https://explorer.moonlet.cloud/elys/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/elys',
      txPage: 'https://ping.pub/elys/tx/${txHash}',
      accountPage: 'https://ping.pub/elys/account/${accountAddress}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/elys',
      txPage: 'https://mainnet.itrocket.net/elys/staking/tx/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/elys/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Elys-Mainnet',
      txPage: 'https://explorer.stavr.tech/Elys-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Elys-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.org/elys',
      txPage: 'https://explorer.moonbridge.org/elys/tx/${txHash}',
      accountPage: 'https://explorer.moonbridge.org/elys/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/elys',
      txPage: 'https://explorer.whenmoonwhenlambo.money/elys/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/elys/account/${accountAddress}'
    }
  ]
};
export default info;