import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'logos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Logos',
  chainType: 'cosmos',
  chainId: 'logos_7002-1',
  bech32Prefix: 'logos',
  daemonName: 'logosd',
  nodeHome: '$HOME/.logos',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aLYT'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://logos-rpc.provable.dev:443/',
        provider: 'laurel.provable'
      }],
    rest: [{
        address: 'https://logos.provable.dev/rest/',
        provider: 'laurel.provable'
      }],
    grpc: [{
        address: 'logos-grpc.provable.dev:443',
        provider: 'laurel.provable'
      }],
    evmHttpJsonrpc: [{
        address: 'https://logos-evm.provable.dev/',
        provider: 'laurel.provable'
      }]
  },
  explorers: [],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
      theme: {
        primaryColorHex: '#848484'
      }
    }]
};
export default info;