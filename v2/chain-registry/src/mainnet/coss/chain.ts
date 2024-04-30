import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'coss',
  chainId: 'coss-1',
  website: 'https://coss.ink/',
  prettyName: 'COSS',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'coss',
  daemonName: 'cossd',
  nodeHome: '$HOME/.coss',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ucoss',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      },
      {
        denom: 'ucgas',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      },
      {
        denom: 'ucias',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucgas'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
  },
  apis: {
    rpc: [{
        address: 'https://coss-rpc.coss.ink',
        provider: 'StellarGuardian'
      }, {
        address: 'https://coss-rpc.cias.network',
        provider: 'CelestialPhoenix'
      }],
    rest: [{
        address: 'https://coss-rest.coss.ink',
        provider: 'StellarGuardian'
      }, {
        address: 'https://coss-rest.cias.network',
        provider: 'CelestialPhoenix'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
    }]
};
export default info;