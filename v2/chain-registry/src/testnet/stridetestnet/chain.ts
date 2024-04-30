import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'stridetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Stride Testnet',
  chainId: 'stride-testnet-1',
  bech32Prefix: 'stride',
  daemonName: 'strided',
  nodeHome: '$HOME/.stride',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustrd',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustrd'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  apis: {
    rpc: [{
        address: 'https://stride.testnet-1.stridenet.co',
        provider: 'Stride'
      }],
    rest: [{
        address: 'https://stride.testnet-1.stridenet.co/api',
        provider: 'Stride'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnet.ping.pub/stride',
      txPage: 'https://testnet.ping.pub/stride/tx/${txHash}'
    }]
};
export default info;