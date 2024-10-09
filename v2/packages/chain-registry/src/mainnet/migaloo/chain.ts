import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'migaloo',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.whitewhale.money/',
  prettyName: 'Migaloo',
  chainId: 'migaloo-1',
  bech32Prefix: 'migaloo',
  daemonName: 'migalood',
  nodeHome: '$HOME/.migalood',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uwhale',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 2,
        highGasPrice: 3
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uwhale'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg'
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.7',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.45.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://migaloo-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://migaloo-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://migaloo-rpc.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc.whitewhale.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://migaloo.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://migaloo-rpc.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://migaloo-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      }
    ],
    rest: [
      {
        address: 'https://migaloo-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://migaloo-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://migaloo-api.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api.whitewhale.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://migaloo.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://migaloo-api.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://migaloo-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      }
    ],
    grpc: [
      {
        address: 'migaloo-grpc.polkachu.com:20790',
        provider: 'Polkachu'
      },
      {
        address: 'migaloo-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'whitewhale-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-migaloo.cosmos-spaces.cloud:4810',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://grpc.whitewhale.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'migaloo.grpc.kjnodes.com:14990',
        provider: 'kjnodes'
      },
      {
        address: 'migaloo-grpc.cosmosrescue.com:9090',
        provider: 'cosmosrescue'
      }
    ]
  },
  explorers: [
    {
      kind: 'Migaloo Explorers Guru',
      url: 'https://migaloo.explorers.guru',
      txPage: 'https://migaloo.explorers.guru/transaction/${txHash}',
      accountPage: 'https://migaloo.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/migaloo',
      txPage: 'https://ping.pub/migaloo/tx/${txHash}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/migaloo',
      txPage: 'https://explorer.silknodes.io/migaloo/tx/${txHash}',
      accountPage: 'https://explorer.silknodes.io/migaloo/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/migaloo',
      txPage: 'https://atomscan.com/migaloo/transactions/${txHash}',
      accountPage: 'https://atomscan.com/migaloo/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg'
    }]
};
export default info;