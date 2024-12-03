import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'panacea',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://medibloc.com/en/',
  prettyName: 'Medibloc',
  chainType: 'cosmos',
  chainId: 'panacea-3',
  bech32Prefix: 'panacea',
  daemonName: 'panacead',
  nodeHome: '$HOME/.panacead',
  keyAlgos: ['secp256k1'],
  slip44: 371,
  fees: {
    feeTokens: [{
        denom: 'umed',
        fixedMinGasPrice: 5,
        lowGasPrice: 5,
        averageGasPrice: 7,
        highGasPrice: 9
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umed'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/medibloc/panacea-core',
    recommendedVersion: 'v2.0.6',
    compatibleVersions: ['v2.0.5'],
    genesis: {
      genesisUrl: 'https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.gopanacea.org',
        provider: 'medibloc'
      },
      {
        address: 'https://panacea-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://panacea_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.gopanacea.org',
        provider: 'medibloc'
      },
      {
        address: 'https://panacea-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://panacea_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
        address: 'services.staketab.com:9400',
        provider: 'Staketab'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/medibloc',
      txPage: 'https://www.mintscan.io/medibloc/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/medibloc/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/panacea',
      txPage: 'https://staking-explorer.com/transaction.php?chain=panacea&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=panacea&addr=${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.gopanacea.org',
      txPage: 'https://explorer.gopanacea.org/transactions/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/panacea',
      txPage: 'https://explorer.whenmoonwhenlambo.money/panacea/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/panacea/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
      theme: {
        primaryColorHex: '#2474ec'
      }
    }]
};
export default info;