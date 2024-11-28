import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'tucanatestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Tucana Testnet',
  chainType: 'cosmos',
  chainId: 'tucana_712-1',
  bech32Prefix: 'tuc',
  daemonName: 'tucanad',
  nodeHome: '$HOME/.tucanad',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atuc',
        fixedMinGasPrice: 5000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 30000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atuc'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/TucanaProtocol/Tucana',
    recommendedVersion: 'v8.1.0',
    compatibleVersions: ['v8.1.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.9'
    },
    genesis: {
      genesisUrl: 'https://github.com/TucanaProtocol/testnets/raw/main/tucana_712-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.8'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.2'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.birdee-2.tucana.zone/',
        provider: 'Tucana'
      }],
    rest: [{
        address: 'https://lcd.birdee-2.tucana.zone/',
        provider: 'Tucana'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Blockscout',
      url: 'https://explorer.birdee-2.tucana.zone/',
      txPage: 'https://explorer.birdee-2.tucana.zone/tx/${txHash}'
    }]
};
export default info;