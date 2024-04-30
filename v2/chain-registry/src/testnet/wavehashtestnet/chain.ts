import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'wavehashtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'wavehash Testnet',
  chainId: 'INVALID-ID-wavehashtestnet-testnet-1',
  bech32Prefix: 'wavehash',
  daemonName: 'wavehashd',
  nodeHome: '$HOME/.wavehash',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uwahax',
        lowGasPrice: 0.0025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.0024
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uwahax'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.wavehash.online/',
        provider: 'WaveHash Network'
      }],
    rest: [{
        address: 'https://lcd.wavehash.online/',
        provider: 'WaveHash Network'
      }],
    grpc: [{
        address: 'https://grpc.wavehash.online/',
        provider: 'WaveHash Network'
      }]
  },
  explorers: [{
      kind: 'atomscan',
      url: 'https://atomscan.com/directory/testnet/wavehashtestnet',
      txPage: 'https://atomscan.com/directory/testnet/wavehashtestnet/transactions/${txHash}'
    }]
};
export default info;