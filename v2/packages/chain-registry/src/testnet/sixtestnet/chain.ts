import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sixtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'SIX Fivenet',
  chainId: 'fivenet',
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
        address: 'https://rpc1.fivenet.sixprotocol.net:443',
        provider: ''
      }],
    rest: [{
        address: 'https://api1.fivenet.sixprotocol.net:443',
        provider: ''
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/fivenet',
      txPage: 'https://sixscan.io/fivenet/tx/${txHash}'
    }],
  keywords: ['sixprotocol', 'testnet']
};
export default info;