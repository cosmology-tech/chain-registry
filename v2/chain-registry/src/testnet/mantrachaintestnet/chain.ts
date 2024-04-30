import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'mantrachaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'MANTRA Hongbai Testnet',
  chainId: 'mantra-hongbai-1',
  bech32Prefix: 'uom',
  daemonName: 'mantrachaind',
  nodeHome: '$HOME/.mantrachain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uom',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.003
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47.3',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.41'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }],
    rest: [{
        address: 'https://api.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }],
    grpc: [{
        address: 'https://grpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
  },
  keywords: ['dex', 'testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
    }]
};
export default info;