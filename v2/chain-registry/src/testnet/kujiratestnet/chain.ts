import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kujiratestnet',
  chainId: 'harpoon-4',
  prettyName: 'Kujira Harpoon',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'kujira',
  daemonName: 'kujirad',
  nodeHome: '$HOME/.kujira',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ukuji',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://kujira-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      }],
    rest: [{
        address: 'https://kujira-testnet-api.polkachu.com/',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://kujira.explorers.guru',
      txPage: 'https://kujira.explorers.guru/transaction/${txHash}'
    }]
};
export default info;