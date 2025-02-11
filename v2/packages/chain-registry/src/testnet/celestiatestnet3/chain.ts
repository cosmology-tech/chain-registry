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
    recommendedVersion: 'v3.3.1-mocha',
    compatibleVersions: [
      'v3.0.0-mocha',
      'v3.0.1-mocha',
      'v3.0.2-mocha',
      'v3.1.1-mocha',
      'v3.2.0-mocha',
      'v3.3.0-mocha',
      'v3.3.1-mocha'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/mocha-4/genesis.json'
    }
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
      },
      {
        address: 'https://celestia-testnet-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
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
      },
      {
        address: 'https://celestia-testnet-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
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
      },
      {
        address: 'http://celestia-testnet-grpc.stakeandrelax.net:11690',
        provider: 'Stake&Relax Validator 🦥'
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
    },
    {
      kind: 'Relaxed Explorer 🦥',
      url: 'https://testnet.explorer.stakeandrelax.net/celestia',
      txPage: 'https://testnet.explorer.stakeandrelax.net/celestia/transaction/${txHash}',
      accountPage: 'https://testnet.explorer.stakeandrelax.net/celestia/account/${accountAddress}'
    }
  ]
};
export default info;