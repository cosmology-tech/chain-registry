import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet3',
  chainType: 'cosmos',
  chainId: 'mocha-4',
  prettyName: 'Mocha Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v2.1.2',
    compatibleVersions: [
      'v2.0.0',
      'v2.1.0',
      'v2.1.1',
      'v2.1.2'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/mocha-4/genesis.json'
    },
    versions: [{
        name: 'v1',
        recommendedVersion: 'v1.14.0',
        compatibleVersions: [
          'v1.3.0',
          'v1.6.0',
          'v1.7.0',
          'v1.9.0',
          'v1.10.0',
          'v1.10.1',
          'v1.11.0',
          'v1.12.0',
          'v1.13.0',
          'v1.14.0'
        ]
      }, {
        name: 'v2',
        recommendedVersion: 'v2.1.2',
        compatibleVersions: [
          'v2.0.0',
          'v2.1.0',
          'v2.1.1',
          'v2.1.2'
        ]
      }]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://celestia-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia-testnet-rpc.itrocket.net',
        provider: '🚀ITRocket🚀'
      },
      {
        address: 'https://rpc-celestia-testnet.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://rpc.celestia.testnet.dteam.tech:443',
        provider: 'DTEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://celestia-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia-testnet-api.itrocket.net',
        provider: '🚀ITRocket🚀'
      },
      {
        address: 'https://api-celestia-testnet.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://api.celestia.testnet.dteam.tech:443',
        provider: 'DTEAM'
      }
    ],
    grpc: [
      {
        address: 'celestia-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'celestia-testnet-grpc.itrocket.net:11090',
        provider: '🚀ITRocket🚀'
      },
      {
        address: 'https://grpc-celestia-testnet.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'grpc.celestia.testnet.dteam.tech:27090',
        provider: 'DTEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia-testnet',
      txPage: 'https://mintscan.io/celestia-testnet/txs/${txHash}'
    },
    {
      kind: '🚀ITRocket🚀',
      url: 'https://testnet.itrocket.net/celestia',
      txPage: 'https://testnet.itrocket.net/celestia/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'CrypTech',
      url: 'https://explorers.cryptech.com.ua/Celestia-Testnet',
      txPage: 'https://explorers.cryptech.com.ua/Celestia-Testnet/tx/${txHash}',
      accountPage: 'https://explorers.cryptech.com.ua/Celestia-Testnet/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.testnet.dteam.tech/celestia',
      txPage: 'https://explorer.testnet.dteam.tech/celestia/tx/${txHash}',
      accountPage: 'https://explorer.testnet.dteam.tech/celestia/account/${accountAddress}'
    }
  ]
};
export default info;