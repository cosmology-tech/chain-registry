import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kichaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Ki',
  chainId: 'kichain-t-4',
  bech32Prefix: 'tki',
  daemonName: 'kid',
  nodeHome: '$HOME/.kid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utki',
        fixedMinGasPrice: 0.025
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-challenge.blockchain.ki/',
        provider: 'kifoundation'
      }],
    rest: [{
        address: 'https://api-challenge.blockchain.ki/',
        provider: 'kifoundation'
      }]
  },
  explorers: [{
      kind: 'kifoundation',
      url: 'https://kichain-t-4.blockchain.ki/',
      txPage: 'https://kichain-t-4.blockchain.ki/transactions/${txHash}'
    }]
};
export default info;