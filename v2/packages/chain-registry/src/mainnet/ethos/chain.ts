import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ethos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Ethos',
  chainType: 'cosmos',
  chainId: 'ethos_7003-1',
  bech32Prefix: 'ethos',
  daemonName: 'ethosd',
  nodeHome: '$HOME/.ethos',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aRYT'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://ethos-rpc.provable.dev:443/',
        provider: 'laurel.provable'
      }],
    rest: [{
        address: 'https://ethos.provable.dev/rest/',
        provider: 'laurel.provable'
      }],
    grpc: [{
        address: 'ethos-grpc.provable.dev:443',
        provider: 'laurel.provable'
      }],
    evmHttpJsonrpc: [{
        address: 'https://ethos-evm.provable.dev/',
        provider: 'laurel.provable'
      }]
  },
  explorers: [],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg',
      theme: {
        primaryColorHex: '#848484'
      }
    }]
};
export default info;