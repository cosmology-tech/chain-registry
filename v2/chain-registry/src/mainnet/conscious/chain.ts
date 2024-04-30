import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'conscious',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cvn.io/',
  prettyName: 'ConsciousDAO',
  chainId: 'cvn_2032-1',
  bech32Prefix: 'cvn',
  nodeHome: '$HOME/.cvnd',
  daemonName: 'cvnd',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'acvnt',
        fixedMinGasPrice: 100000000,
        lowGasPrice: 100000000,
        averageGasPrice: 200000000,
        highGasPrice: 300000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'acvnt'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cvn.io/',
        provider: 'cvn.io'
      }],
    rest: [{
        address: 'https://api.cvn.io',
        provider: 'cvn.io'
      }],
    grpc: [{
        address: 'https://grpc.cvn.io',
        provider: 'cvn.io'
      }],
    evmHttpJsonrpc: [{
        address: 'https://node.cvn.io/',
        provider: 'cvn'
      }, {
        address: 'https://node.consciousdao.io/',
        provider: 'consciousdao'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://explore.consciousdao.com/',
      txPage: 'https://explore.consciousdao.com/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
    }]
};
export default info;