import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chain4energytestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://c4e.io/',
  prettyName: 'Chain4Energy Testnet',
  chainId: 'babajaga-1',
  bech32Prefix: 'c4e',
  daemonName: 'c4ed',
  nodeHome: '$HOME/.c4e-chain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uc4e',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.02,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uc4e'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.c4e.io',
        provider: 'C4E'
      }],
    rest: [{
        address: 'https://c4e.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://lcd-testnet.c4e.io',
        provider: 'C4E'
      }],
    grpc: [{
        address: 'grpc-testnet.c4e.io:8443',
        provider: 'C4E'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/C4E-Testnet',
      txPage: 'https://explorer.stavr.tech/C4E-Testnet/transactions/${txHash}'
    }, {
      kind: 'explorer',
      url: 'https://explorer-testnet.c4e.io/',
      txPage: 'https://explorer-testnet.c4e.io/transactions/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
    }]
};
export default info;