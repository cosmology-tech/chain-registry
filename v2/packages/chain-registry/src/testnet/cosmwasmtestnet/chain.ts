import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmwasmtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'CosmWasm Testnet',
  chainType: 'cosmos',
  chainId: 'malaga-420',
  bech32Prefix: 'wasm',
  daemonName: 'wasmd',
  nodeHome: '$HOME/.wasmd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umlg',
        lowGasPrice: 0.03,
        averageGasPrice: 0.04,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uand'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/CosmWasm/wasmd',
    recommendedVersion: 'v0.27',
    compatibleVersions: ['v0.27'],
    cosmosSdkVersion: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    cosmwasmVersion: '0.27',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json'
    },
    versions: [{
        name: 'v0.27',
        recommendedVersion: 'v0.27',
        compatibleVersions: ['v0.27'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasmVersion: '0.27',
        cosmwasmEnabled: true,
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.27',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.27',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.malaga-420.cosmwasm.com:443',
        provider: 'Confio'
      }],
    rest: [{
        address: 'https://api.malaga-420.cosmwasm.com',
        provider: 'Confio'
      }]
  },
  explorers: [{
      kind: 'BIG DIPPER',
      url: 'https://block-explorer.malaga-420.cosmwasm.com/',
      txPage: 'https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}'
    }]
};
export default info;