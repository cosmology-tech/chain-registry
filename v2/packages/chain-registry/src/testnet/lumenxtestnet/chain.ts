import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lumenxtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'LumenX-Test',
  chainType: 'cosmos',
  chainId: 'lumenx-test',
  bech32Prefix: 'lumen',
  daemonName: 'lumenxd',
  nodeHome: '$HOME/.lumenx',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulumen',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulumen'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.lumenx.chaintools.tech/',
        provider: 'ChainTools'
      }, {
        address: 'https://testrpc-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      }],
    rest: [{
        address: 'https://testnet-api.lumenx.chaintools.tech/',
        provider: 'ChainTools'
      }, {
        address: 'https://testapi-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.explorer.chaintools.tech/lumenx',
      txPage: 'https://testnet.explorer.chaintools.tech/lumenx/tx/${txHash}'
    }]
};
export default info;