import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Xion Testnet',
  chainId: 'xion-testnet-1',
  bech32Prefix: 'xion',
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47.10',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.45.1'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-burnt-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'https://xion-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      }],
    rest: [{
        address: 'https://testnet-burnt-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'polkachu'
      }],
    grpc: [{
        address: 'https://testnet-burnt-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'polkachu'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }]
};
export default info;