import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'migaloo',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.whitewhale.money/',
  prettyName: 'Migaloo',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain',
    recommendedVersion: 'v4.1.3',
    compatibleVersions: ['v4.1.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.7'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://migaloo-rpc.polkachu.com:443',
        provider: 'Polkachu'
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
        address: 'https://migaloo-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://migaloo-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://migaloo-api.polkachu.com:443',
        provider: 'Polkachu'
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
        address: 'https://migaloo-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://migaloo-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'migaloo-grpc.polkachu.com:20790',
        provider: 'Polkachu'
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
        address: 'migaloo-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpcWeb: [{
        address: 'https://migaloo-grpc-web.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/migaloo',
      txPage: 'https://staking-explorer.com/transaction.php?chain=migaloo&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=migaloo&addr=${accountAddress}'
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
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
      theme: {
        primaryColorHex: '#3ccc64'
      }
    }]
};
export default info;