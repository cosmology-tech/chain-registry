import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'six',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'SIX Protocol',
  chainId: 'sixnet',
  bech32Prefix: '6x',
  daemonName: 'sixd',
  nodeHome: '$HOME/.six',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usix',
        fixedMinGasPrice: 1.25,
        lowGasPrice: 1.25,
        averageGasPrice: 1.5,
        highGasPrice: 1.75
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usix'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45'
  },
  apis: {
    rpc: [{
        address: 'https://sixnet-rpc.sixprotocol.net:443',
        provider: ''
      }],
    rest: [{
        address: 'https://sixnet-api.sixprotocol.net:443',
        provider: ''
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/sixnet',
      txPage: 'https://sixscan.io/sixnet/tx/${txHash}'
    }],
  keywords: [
    'sixprotocol',
    'sixnetwork',
    'sixnet',
    'six'
  ]
};
export default info;