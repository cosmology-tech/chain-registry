import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'quasartestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Quasar Testnet',
  chainId: 'quasar-test-1',
  bech32Prefix: 'quasar',
  daemonName: 'quasarnoded',
  nodeHome: '$HOME/.quasarnoded',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqsr',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqsr'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45.16',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.31'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
  },
  apis: {
    rpc: [{
        address: 'https://quasar-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      }, {
        address: 'https://quasar-testnet-rpc.stakeandrelax.net/',
        provider: 'Stake and Relax'
      }],
    rest: [{
        address: 'https://quasar-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }, {
        address: 'https://quasar-testnet-api.stakeandrelax.net/',
        provider: 'Stake and Relax'
      }],
    grpc: [{
        address: 'quasar-testnet-grpc.polkachu.com:18290',
        provider: 'Polkachu'
      }, {
        address: 'http://quasar-testnet-grpc.stakeandrelax.net:18290/',
        provider: 'Stake and Relax'
      }]
  },
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
    }]
};
export default info;