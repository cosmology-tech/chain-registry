import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'coolcattestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://app.coolcat.space/',
  prettyName: 'CoolCat',
  chainId: 'kitten-04',
  bech32Prefix: 'ccat',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'uccat',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 1,
        highGasPrice: 2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uccat'
      }]
  },
  daemonName: 'coolcat',
  nodeHome: '$HOME/.coolcat',
  slip44: 118,
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.coolcat.space',
        provider: 'Digital Kitchen'
      }],
    rest: [{
        address: 'https://lcd.coolcat.space',
        provider: 'Digital Kitchen'
      }],
    grpc: []
  },
  explorers: []
};
export default info;