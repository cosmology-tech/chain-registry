import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mucoin',
  status: 'live',
  website: 'https://mucoin.org',
  networkType: 'mainnet',
  prettyName: 'MuCoin',
  chainType: 'cosmos',
  chainId: 'mucoin-1',
  bech32Prefix: 'muc',
  daemonName: 'mucoind',
  nodeHome: '$HOME/.mucoin',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'MuCoin is a Cosmos SDK blockchain created for the MuCoin ecosystem and inspired by the world of MU Online.',
  keywords: [
    'mucoin',
    'muc',
    'cosmos',
    'ibc',
    'gaming',
    'mu-online'
  ],
  fees: {
    feeTokens: [{
        denom: 'umuc',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.005,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umuc'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dasgrid/mucoin',
    recommendedVersion: 'rewards-v0.7.0',
    compatibleVersions: ['rewards-v0.7.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    language: {
      type: 'go',
      version: '1.26.5'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.53.6'
    },
    ibc: {
      type: 'go',
      version: 'v10.4.0',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      name: 'mucoin-1',
      genesisUrl: 'https://raw.githubusercontent.com/dasgrid/mucoin/main/networks/mucoin-1/genesis.json'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mucoin/images/mucoin.png'
    }],
  apis: {
    rpc: [
      {
        address: 'https://rpc.mucoin.org',
        provider: 'MuCoin'
      },
      {
        address: 'https://rpc.nodesafe-app.xyz/mucoin/',
        provider: 'NodeSafe'
      },
      {
        address: 'https://rpc-mucoin.onenov.xyz',
        provider: 'OneNov'
      }
    ],
    rest: [
      {
        address: 'https://rest.mucoin.org',
        provider: 'MuCoin'
      },
      {
        address: 'https://api.nodesafe-app.xyz/mucoin',
        provider: 'NodeSafe'
      },
      {
        address: 'https://api-mucoin.onenov.xyz',
        provider: 'OneNov'
      }
    ],
    grpc: [{
        address: 'grpc-mucoin.nodesafe-app.xyz:443',
        provider: 'NodeSafe'
      }]
  },
  explorers: [{
      kind: 'NodeSafe',
      url: 'https://explorer.nodesafe-app.xyz/mucoin/staking'
    }, {
      kind: 'UTSA Explorer',
      url: 'https://explorer.utsa.tech/networks/mucoin-mainnet'
    }]
};
export default info;