import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mythos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Mythos',
  chainType: 'cosmos',
  chainId: 'mythos_7001-1',
  bech32Prefix: 'mythos',
  daemonName: 'mythosd',
  nodeHome: '$HOME/.mythosd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aMYT'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://mythos-rpc.provable.dev:443/',
        provider: 'laurel.provable'
      }],
    rest: [{
        address: 'https://mythos.provable.dev/rest/',
        provider: 'laurel.provable'
      }],
    grpc: [{
        address: 'mythos-grpc.provable.dev:443',
        provider: 'laurel.provable'
      }],
    evmHttpJsonrpc: []
  },
  explorers: [],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg',
      theme: {
        primaryColorHex: '#848484'
      }
    }]
};
export default info;