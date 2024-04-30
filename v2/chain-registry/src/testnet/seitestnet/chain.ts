import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'seitestnet',
  chainId: 'atlantic-1',
  prettyName: 'Sei Atlantic',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.sei.io/',
  bech32Prefix: 'sei',
  daemonName: 'seid',
  nodeHome: '$HOME/.sei',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usei',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [{
        address: 'https://sei-testnet-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://sei-testnet-rest.brocha.in',
        provider: 'Brochain'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://sei.explorers.guru',
      txPage: 'https://sei.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei',
      txPage: 'https://testnet-explorer.brocha.in/sei/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
    }]
};
export default info;