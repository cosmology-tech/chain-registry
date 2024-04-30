import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'artelatestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Artela Testnet',
  chainId: 'artela_11820-1',
  bech32Prefix: 'art',
  daemonName: 'artelad',
  nodeHome: '$HOME/.artelad',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'uart',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uart'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    rest: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    grpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }]
  },
  explorers: [{
      kind: 'Artela Network',
      url: 'https://testnet-scan.artela.network',
      txPage: 'https://testnet-scan.artela.network/tx/${txHash}'
    }]
};
export default info;