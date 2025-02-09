import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'althea',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://althea.net/',
  prettyName: 'Althea',
  chainType: 'cosmos',
  chainId: 'althea_258432-1',
  bech32Prefix: 'althea',
  daemonName: 'althea',
  nodeHome: '$HOME/.althea',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aalthea',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 100000000000,
        highGasPrice: 300000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aalthea'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png',
      theme: {
        primaryColorHex: '#0474dc'
      }
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
    }],
  codebase: {
    gitRepo: 'https://github.com/AltheaFoundation/althea-L1',
    recommendedVersion: 'v1.5.1',
    compatibleVersions: ['v1.5.1'],
    binaries: {
      "linux/amd64": 'https://github.com/AltheaFoundation/althea-L1/releases/download/v1.5.1/althea-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://github.com/AltheaFoundation/althea-L1-docs/blob/main/althea-l1-mainnet-genesis.json'
    }
  },
  apis: {
    rest: [
      {
        address: 'https://nodes.chandrastation.com/api/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/althea',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    rpc: [
      {
        address: 'https://nodes.chandrastation.com/rpc/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/althea',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    grpc: [{
        address: 'althea.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [{
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/althea',
      txPage: 'https://staking-explorer.com/transaction.php?chain=althea&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=althea&addr=${accountAddress}'
    }, {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/althea',
      txPage: 'https://www.mintscan.io/althea/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/althea/accounts/${accountAddress}'
    }]
};
export default info;