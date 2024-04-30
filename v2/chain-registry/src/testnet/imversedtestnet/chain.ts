import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'imversedtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Imversed Testnet',
  chainId: 'imversed-test-1',
  bech32Prefix: 'imv',
  daemonName: 'imversed',
  nodeHome: '$HOME/.imversed',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nimv',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://tx-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    rest: [{
        address: 'https://query-endpoint-test.imversed.com/',
        provider: 'imversed'
      }],
    grpc: [{
        address: 'http://qs.imversed.com:9090',
        provider: 'imversed'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://tex-s.imversed.com',
      txPage: 'https://tex-s.imversed.com/transactions/${txHash}'
    }]
};
export default info;