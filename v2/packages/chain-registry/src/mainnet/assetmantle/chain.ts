import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'assetmantle',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://assetmantle.one/',
  prettyName: 'AssetMantle',
  chainType: 'cosmos',
  chainId: 'mantle-1',
  bech32Prefix: 'mantle',
  daemonName: 'mantleNode',
  nodeHome: '$HOME/.mantleNode',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umntl',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umntl'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/AssetMantle/node.git',
    recommendedVersion: 'v0.3.0',
    compatibleVersions: ['v0.3.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json'
    },
    versions: [{
        name: 'v0.3.0',
        recommendedVersion: 'v0.3.0',
        compatibleVersions: ['v0.3.0']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg'
  },
  description: 'AssetMantle’s suite of products is focused on the NFT ecosystem, helping you up your game with digital asset ownership.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.assetmantle.one',
        provider: 'AssetMantle'
      },
      {
        address: 'https://rpc-assetmantle.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://assetmantle-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.assetmantle.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-assetmantle-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.mantle.paranorm.pro:443',
        provider: 'paranorm'
      },
      {
        address: 'https://assetmantle-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://assetmantle-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://rest.assetmantle.one',
        provider: 'AssetMantle'
      },
      {
        address: 'https://rest-assetmantle.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://api.assetmantle.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-assetmantle-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://assetmantle-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.mantle.paranorm.pro:443',
        provider: 'paranorm'
      },
      {
        address: 'https://assetmantle-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://assetmantle-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.assetmantle.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-assetmantle-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'assetmantle-grpc.polkachu.com:14690',
        provider: 'Polkachu'
      },
      {
        address: 'assetmantle-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'assetmantle-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/assetmantle',
      txPage: 'https://ezstaking.app/assetmantle/txs/${txHash}',
      accountPage: 'https://ezstaking.app/assetmantle/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/asset-mantle',
      txPage: 'https://www.mintscan.io/asset-mantle/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/asset-mantle/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/AssetMantle',
      txPage: 'https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/assetmantle',
      txPage: 'https://staking-explorer.com/transaction.php?chain=assetmantle&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=assetmantle&addr=${accountAddress}'
    },
    {
      kind: 'other',
      url: 'https://explorer.assetmantle.one',
      txPage: 'https://explorer.assetmantle.one/transactions/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://assetmantle.explorers.guru',
      txPage: 'https://assetmantle.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/assetmantle',
      txPage: 'https://atomscan.com/assetmantle/transactions/${txHash}',
      accountPage: 'https://atomscan.com/assetmantle/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/assetmantle',
      txPage: 'https://mainnet.whispernode.com/assetmantle/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/assetmantle/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg',
      theme: {
        primaryColorHex: '#f6b620'
      }
    }]
};
export default info;