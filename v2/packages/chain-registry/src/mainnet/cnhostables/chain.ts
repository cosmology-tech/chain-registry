import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cnhostables',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cnho.io/',
  prettyName: 'CNHO Stables',
  chainType: 'cosmos',
  chainId: 'cnho_stables-1',
  bech32Prefix: 'cnho',
  daemonName: 'cnho',
  nodeHome: '$HOME/.cnho',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucnho',
        fixedMinGasPrice: 0.000005,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.00001,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucnho'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/alashooinc/ChainCNHO/',
    recommendedVersion: 'v1',
    compatibleVersions: ['v1'],
    cosmosSdkVersion: 'v0.46.7',
    cosmwasmEnabled: false,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/alashooinc/ChainCNHO/master/mainnet/genesis.json'
    },
    versions: [{
        name: 'v1',
        recommendedVersion: 'v1',
        compatibleVersions: ['v1'],
        cosmosSdkVersion: 'v0.46.7',
        cosmwasmEnabled: false,
        sdk: {
          type: 'cosmos',
          version: 'v0.46.7'
        },
        cosmwasm: {
          enabled: false
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.46.7'
    },
    cosmwasm: {
      enabled: false
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.svg'
  },
  description: 'CNHO Stables Network is designed to facilitate the real world asset in Cosmos ecosystem.',
  apis: {
    rpc: [{
        address: 'https://rpc.cnho.io',
        provider: 'CNHO Stables'
      }, {
        address: 'https://cnhostables_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://api.cnho.io',
        provider: 'CNHO Stables'
      }, {
        address: 'https://cnhostables_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: '159.138.232.248:9090',
        provider: 'CNHO Stables'
      }]
  },
  explorers: [{
      url: 'https://explorer.cnho.io',
      txPage: 'https://explorer.cnho.io/transaction/${txHash}',
      accountPage: 'https://explorer.cnho.io/account/${accountAddress}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/cnhostables',
      txPage: 'https://explorer.whenmoonwhenlambo.money/cnhostables/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/cnhostables/account/${accountAddress}'
    }],
  keywords: ['CNHO'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.svg',
      theme: {
        primaryColorHex: '#708ffc'
      }
    }]
};
export default info;