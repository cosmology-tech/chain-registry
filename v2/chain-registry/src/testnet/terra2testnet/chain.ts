import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terra2testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.terra.money/',
  prettyName: 'Terra 2.0',
  chainId: 'pisco-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.0125,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://pisco-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://pisco-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'finder',
      url: 'http://finder.terra.money/testnet/',
      txPage: 'https://finder.terra.money/testnet/tx/${txHash}'
    }]
};
export default info;