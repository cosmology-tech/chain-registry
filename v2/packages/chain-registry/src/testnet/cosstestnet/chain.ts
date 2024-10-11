import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosstestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'COSS Testnet',
  chainType: 'cosmos',
  chainId: 'coss-testnet-1',
  bech32Prefix: 'coss',
  daemonName: 'cossd',
  nodeHome: '$HOME/.cossd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucgas',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucgas'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/coss-inscription/coss',
    recommendedVersion: '0.1.0-testnet',
    compatibleVersions: ['0.1.0-testnet'],
    cosmosSdkVersion: '0.50.2',
    consensus: {
      type: 'tendermint',
      version: '0.38.2'
    },
    cosmwasmEnabled: false,
    genesis: {
      genesisUrl: 'https://github.com/coss-inscription/networks/blob/main/testnet/coss-testnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.2'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://coss-testnet-rpc.coss.ink',
        provider: 'COSS'
      }],
    rest: [{
        address: 'https://coss-testnet-rest.coss.ink',
        provider: 'COSS'
      }]
  }
};
export default info;