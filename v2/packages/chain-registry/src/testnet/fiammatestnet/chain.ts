import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'fiammatestnet',
  status: 'live',
  website: 'https://www.fiammachain.io',
  networkType: 'testnet',
  prettyName: 'Fiamma Testnet',
  chainType: 'cosmos',
  chainId: 'fiamma-testnet-1',
  bech32Prefix: 'fiamma',
  daemonName: 'fiammad',
  nodeHome: '$HOME/.fiamma',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ufia'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufia'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/fiamma-chain/fiamma',
    recommendedVersion: 'v0.1.0',
    compatibleVersions: ['v0.1.0'],
    genesis: {
      genesisUrl: 'https://github.com/fiamma-chain/networks/raw/main/fiamma-testnet-1/genesis.json'
    },
    versions: [{
        name: 'v0.1.0',
        recommendedVersion: 'v0.1.0',
        compatibleVersions: ['v0.1.0']
      }]
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.fiammachain.io',
        provider: 'Fiamma'
      }],
    rest: [{
        address: 'https://testnet-api.fiammachain.io',
        provider: 'Fiamma'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet-explorer.fiammachain.io/'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
    }],
  slip44: 118
};
export default info;