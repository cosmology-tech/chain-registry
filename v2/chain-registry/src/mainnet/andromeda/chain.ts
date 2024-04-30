import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'andromeda',
  chainId: 'andromeda-1',
  preForkChainName: 'andromeda1',
  prettyName: 'Andromeda',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'andr',
  daemonName: 'andromedad',
  nodeHome: '$HOME/.andromeda',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uandr'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uandr'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.5',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.41.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.andromeda-1.andromeda.aviaone.com',
        provider: 'AVIAONE'
      },
      {
        address: 'https://andromeda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://andromeda.rpc.nodex.one',
        provider: 'nodex'
      },
      {
        address: 'https://andro.rpc.m.stavr.tech/',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://andromeda-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://andromeda-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://andromeda-rpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://andromeda-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://andromeda-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://andromeda.rpc.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.andromeda-1.andromeda.aviaone.com/',
        provider: 'AVIAONE'
      },
      {
        address: 'https://andromeda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://andromeda.api.nodex.one',
        provider: 'nodex'
      },
      {
        address: 'https://andro.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://andromeda-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://andromeda-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://andromeda-rest.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://andromeda-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://andromeda-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://andromeda.api.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'andromeda-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.andromeda-1.andromeda.aviaone.com:9094',
        provider: 'AVIAONE'
      },
      {
        address: 'andromeda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'andromeda-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda.grpc.nodex.one:443',
        provider: 'nodex'
      },
      {
        address: 'http://andromedad.grpc.t.stavr.tech:132',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'andromeda-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'andromeda-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'andromeda-grpc.genznodes.dev:27090',
        provider: 'genznodes'
      },
      {
        address: 'andromeda.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-grpc.noders.services:34090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Andromeda-Mainnet',
      txPage: 'https://explorer.stavr.tech/Andromeda-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Andromeda-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'exploreme.pro',
      url: 'https://andromeda.exploreme.pro',
      txPage: 'https://andromeda.exploreme.pro/transaction/${txHash}',
      accountPage: 'https://andromeda.exploreme.pro/account/${accountAddress}'
    },
    {
      kind: 'Cosmotracker',
      url: 'https://cosmotracker.com/andromeda',
      txPage: 'https://cosmotracker.com/andromeda/tx/${txHash}',
      accountPage: 'https://cosmotracker.com/andromeda/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/andromeda',
      txPage: 'https://ping.pub/andromeda/tx/${txHash}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
    }]
};
export default info;