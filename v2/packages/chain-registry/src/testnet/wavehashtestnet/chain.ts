import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'wavehashtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'wavehash Testnet',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/WaveHashProtocol/wavehash',
    recommendedVersion: 'v6.0.0',
    compatibleVersions: ['v6.0.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/WaveHashProtocol/testnet/main/testnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '4.3.0'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
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