import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stratos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.thestratos.org',
  prettyName: 'Stratos',
  chainType: 'cosmos',
  chainId: 'stratos-1',
  bech32Prefix: 'st',
  daemonName: 'stchaind',
  nodeHome: '$HOME/.stchaind',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: [],
  slip44: 606,
  fees: {
    feeTokens: [{
        denom: 'wei',
        lowGasPrice: 1000000000,
        averageGasPrice: 1200000000,
        highGasPrice: 1600000000
      }]
  },
  description: 'STOS coin is the native token for the Stratos Blockchain. Stratos is a pioneering decentralized infrastructure service provider, revolutionizing AI and DePIN with advanced decentralized solutions in storage, computing, databases, and blockchain services. We empower Web 3.0 developpers and dApps through our scalable, reliable, and high-performance networks.',
  codebase: {
    gitRepo: 'https://github.com/stratosnet/stratos-chain',
    recommendedVersion: 'v0.11.2',
    compatibleVersions: ['v0.11.2'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/stratosnet/mainnet/main/genesis/genesis.json'
    },
    versions: [{
        name: 'v0.11.2',
        recommendedVersion: 'v0.11.2',
        compatibleVersions: ['v0.11.2']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'http://stratos.rpc.nodersteam.com:26657/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://stratos-rpc.noders.services:443',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [{
        address: 'https://rest.thestratos.org',
        provider: 'thestratos.org'
      }, {
        address: 'https://stratos-api.noders.services:443',
        provider: '[NODERS]TEAM'
      }],
    grpc: [
      {
        address: 'https://grpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://grpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'stratos.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'stratos-grpc.noders.services:29090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://web3-rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://jsonrpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://stratos-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.thestratos.org',
      txPage: 'https://explorer.thestratos.org/transactions/${txHash}',
      accountPage: 'https://explorer.thestratos.org/accounts/${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://web3-explorer.thestratos.org',
      txPage: 'https://web3-explorer.thestratos.org/tx/${txHash}',
      accountPage: 'https://web3-explorer.thestratos.org/address/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/stratos',
      txPage: 'https://explorer.nodestake.top/stratos/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.top/stratos/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/stratos',
      txPage: 'https://staking-explorer.com/transaction.php?chain=stratos&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=stratos&addr=${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/stratos',
      txPage: 'https://explorer.tcnetwork.io/stratos/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/stratos/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
      theme: {
        primaryColorHex: '#04847c'
      }
    }]
};
export default info;