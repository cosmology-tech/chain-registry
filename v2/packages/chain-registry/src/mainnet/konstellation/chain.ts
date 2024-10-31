import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'konstellation',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://konstellation.tech/',
  prettyName: 'Konstellation',
  chainType: 'cosmos',
  chainId: 'darchub',
  bech32Prefix: 'darc',
  daemonName: 'knstld',
  nodeHome: '$HOME/.knstld',
  slip44: 118,
  codebase: {
    gitRepo: 'https://github.com/knstl/konstellation',
    recommendedVersion: 'v0.6.2',
    compatibleVersions: ['v0.6.2'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Konstellation/konstellation/master/config/genesis.json'
    },
    versions: [{
        name: 'v0.6.2',
        recommendedVersion: 'v0.6.2',
        compatibleVersions: ['v0.6.2']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png'
  },
  fees: {
    feeTokens: [{
        denom: 'udarc',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udarc'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    rest: [{
        address: 'https://api-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rest.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    grpc: [
      {
        address: 'grpc-konstellation-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'konstellation-grpc.polkachu.com:13390',
        provider: 'Polkachu'
      },
      {
        address: 'konstellation-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'konstellation-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'konstellation',
      url: 'https://explorer.konstellation.tech/',
      txPage: 'https://explorer.konstellation.tech/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/konstellation',
      txPage: 'https://staking-explorer.com/transaction.php?chain=konstellation&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=konstellation&addr=${accountAddress}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/konstellation',
      txPage: 'https://cosmotracker.com/konstellation/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png',
      theme: {
        primaryColorHex: '#a3d3fb'
      }
    }]
};
export default info;