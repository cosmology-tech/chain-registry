import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'seitestnet2',
  chainId: 'atlantic-2',
  prettyName: 'Sei Atlantic 2',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'sei',
  daemonName: 'seid',
  nodeHome: '$HOME/.sei',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usei',
        fixedMinGasPrice: 0.08
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://testnet.sei.explorers.guru',
      txPage: 'https://testnet.sei.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      txPage: 'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}'
    }]
};
export default info;