import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'quicksilver',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://quicksilver.zone/',
  prettyName: 'Quicksilver',
  chainId: 'quicksilver-2',
  daemonName: 'quicksilverd',
  nodeHome: '$HOME/.quicksilverd',
  bech32Prefix: 'quick',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqck',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqck'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/quicksilver-zone/quicksilver',
    recommendedVersion: 'v1.7.5',
    compatibleVersions: ['v1.7.5'],
    binaries: {
      "linux/amd64": 'https://github.com/quicksilver-zone/quicksilver/releases/download/v1.7.5/quicksilverd-v1.7.5-amd64'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.16'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.33'
    },
    ibc: {
      type: 'go',
      version: 'v6.3.1'
    },
    language: {
      type: 'go',
      version: '1.23.3'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/quicksilver-zone/networks/refs/heads/main/mainnet/quicksilver-2/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  description: 'Liquid Stake your Cosmos assets with your preferred validator and receive liquid staked assets (qASSETs) that you can use for swapping, pooling, lending, and more, all while your original stake earns staking APY from securing the network.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.quicksilver.zone:443',
        provider: 'Quicksilver'
      },
      {
        address: 'https://quicksilver-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://m-quicksilver.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://quick.rpc.m.stavr.tech:21027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://quicksilver.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://quicksilver-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://rpc.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://lcd.quicksilver.zone:443',
        provider: 'Quicksilver'
      },
      {
        address: 'https://quicksilver-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://m-quicksilver.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://quick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://quicksilver-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://api.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'quicksilver-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'quick.grpc.m.stavr.tech:9113',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-quicksilver.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'quicksilver-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'quicksilver-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'mainnet-quicksilver.konsortech.xyz:46090',
        provider: 'KonsorTech'
      },
      {
        address: 'quicksilver.tdrsys.com:2083',
        provider: 'TdrSys'
      }
    ]
  },
  explorers: [
    {
      kind: 'stakeme',
      url: 'https://explorer.quicksilver.zone',
      txPage: 'https://explorer.quicksilver.zone/transactions/${txHash}',
      accountPage: 'https://explorer.quicksilver.zone/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/quicksilver',
      txPage: 'https://ezstaking.app/quicksilver/txs/${txHash}',
      accountPage: 'https://ezstaking.app/quicksilver/account/${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer',
      url: 'https://exp.utsa.tech/quicksilver',
      txPage: 'https://exp.utsa.tech/quicksilver/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 explorer',
      url: 'https://explorer.stavr.tech/quicksilver-mainnet',
      txPage: 'https://explorer.stavr.tech/quicksilver-mainnet/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/quicksilver/staking',
      txPage: 'https://explorer.konsortech.xyz/quicksilver/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
    }]
};
export default info;