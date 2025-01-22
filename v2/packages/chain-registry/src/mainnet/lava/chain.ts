import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lava',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://lavanet.xyz/',
  prettyName: 'Lava',
  chainType: 'cosmos',
  chainId: 'lava-mainnet-1',
  bech32Prefix: 'lava@',
  daemonName: 'lavad',
  nodeHome: '$HOME/.lava',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulava',
        fixedMinGasPrice: 0.00002,
        lowGasPrice: 0.00002,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulava'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/lavanet/lava',
    recommendedVersion: 'v3.1.0',
    compatibleVersions: ['v3.1.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/lavanet/lava-config/main/mainnet-1/genesis_json/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/lavanet/lava/releases/download/v3.1.0/lavad-v3.1.0-linux-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    language: {
      type: 'go',
      version: '1.20'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/lavanet/cosmos-sdk',
      version: 'v0.47.13',
      tag: 'v0.47.13-lava-cosmos'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      theme: {
        primaryColorHex: '#6f043e'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
  },
  description: 'Lava (LAVA) is the data access layer of the modular stack. developers and ecosystems permissionlessly add services to be served or accessed through lava. featuring a fully decentralized open source sdk integrable in frontends and a battle tested fully scalable open source server kit and can be used locally or through managed endpoints. Lava features rpc data access, indexing services, debug apis, archive access and more. Service providers can join the network, earn rewards either in the native token of the chain via token bought subscriptions on chain or through any ibc transferred token via incentive pools created and funded by ecosystems and DAOs. Developers can use the abstraction and go multi chain in seconds, not needing to choose what tools to use, having the access aggregated for them. Build whatever, wherever.',
  apis: {
    rpc: [
      {
        address: 'https://lava.tendermintrpc.lava.build',
        provider: 'Lava Over Lava'
      },
      {
        address: 'https://lava-rpc.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-rpc.finteh.org:26657',
        provider: 'finteh'
      },
      {
        address: 'https://lava-rpc.y2.finance:443',
        provider: 'YTWOFUND'
      },
      {
        address: 'https://lava-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.lava-mainnet-1.lava.aviaone.com:443',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://lava-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://lava.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava.rpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://lava.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://lava-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lava-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://lava.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      }
    ],
    rest: [
      {
        address: 'https://lava-api.finteh.org:443',
        provider: 'finteh'
      },
      {
        address: 'https://lava.rest.lava.build',
        provider: 'Lava Over Lava'
      },
      {
        address: 'https://lava-api.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.lava-mainnet-1.lava.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://api-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://lava-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://lava.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava.api-archive.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://lava.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://lava-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lava-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://lava.api.stakevillage.net:443',
        provider: 'Stake Village'
      }
    ],
    grpc: [
      {
        address: 'lava.grpc.lava.build:443',
        provider: 'Lava Over Lava'
      },
      {
        address: 'lava-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'lava.grpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'lava.grpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'lava-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'lava.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'lava-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'lava.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'grpc-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'grpc.lava-mainnet-1.lava.aviaone.com:9104/',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'finteh',
      url: 'https://explorer.finteh.org/lava',
      txPage: 'https://explorer.finteh.org/lava/tx/${txHash}',
      accountPage: 'https://explorer.finteh.org/lava/account/${accountAddress}'
    },
    {
      kind: 'guru',
      url: 'https://lava.explorers.guru/',
      txPage: 'https://lava.explorers.guru/transaction/${txHash}',
      accountPage: 'https://lava.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'w3coins',
      url: 'https://lava-explorer.w3coins.io/Lava',
      txPage: 'https://lava-explorer.w3coins.io/Lava/tx/${txHash}',
      accountPage: 'https://lava-explorer.w3coins.io/Lava/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/lava',
      txPage: 'https://staking-explorer.com/transaction.php?chain=lava&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=lava&addr=${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/lava-mainnet',
      txPage: 'https://exp.stakevillage.net/lava-mainnet/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/lava-mainnet/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/lava/',
      txPage: 'https://mainnet.explorer.aviaone.com/lava/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/lava/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Mainnet',
      txPage: 'https://explorer.stavr.tech/Lava-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Lava-Mainnet/account/${accountAddress}'
    }
  ],
  keywords: [
    'modular',
    'data',
    'data access',
    'rpc',
    'staking',
    'dual staking',
    'indexing',
    'incentivized public rpc'
  ]
};
export default info;