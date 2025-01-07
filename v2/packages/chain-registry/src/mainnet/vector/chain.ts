import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'vector',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.playonvector.com/',
  prettyName: 'Vector',
  chainType: 'cosmos',
  chainId: 'vector-1',
  bech32Prefix: 'vector',
  daemonName: 'vectord',
  nodeHome: '$HOME/.vector',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uvctr',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvctr'
      }]
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg'
  },
  codebase: {
    gitRepo: 'https://github.com/vector-org/vector-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    genesis: {
      genesisUrl: 'https://github.com/vector-org/vector-chain/blob/main/networks/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    },
    cosmwasm: {
      version: 'v0.53.2',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://archive-rpc-vector-1.seraphim.zone:443',
        provider: 'Seraphim'
      }, {
        address: 'https://archive-rpc-1.playonvector.com:443',
        provider: 'Stratsone'
      }],
    rest: [{
        address: 'https://archive-api-vector-1.seraphim.zone:443',
        provider: 'Seraphim'
      }, {
        address: 'https://archive-api-1.playonvector.com:443',
        provider: 'Stratsone'
      }],
    grpc: [],
    grpcWeb: []
  },
  explorers: [{
      kind: 'Vector',
      url: 'https://explorer.playonvector.com/',
      txPage: 'https://explorer.playonvector.com/vector/tx/${txHash}',
      accountPage: 'https://explorer.playonvector.com/vector/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg',
      theme: {
        primaryColorHex: '#885737'
      }
    }]
};
export default info;