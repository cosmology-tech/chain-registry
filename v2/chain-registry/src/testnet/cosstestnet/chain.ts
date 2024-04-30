import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosstestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'COSS Testnet',
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
    cosmosSdkVersion: '0.50.2',
    cosmwasmEnabled: false
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