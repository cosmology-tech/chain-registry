import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmwasmtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'CosmWasm Testnet',
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
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.27'
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