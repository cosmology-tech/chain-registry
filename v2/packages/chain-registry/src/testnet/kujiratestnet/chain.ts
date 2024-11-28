import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kujiratestnet',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/Team-Kujira/core',
    recommendedVersion: 'v0.4.0',
    compatibleVersions: ['v0.4.0'],
    genesis: {
      genesisUrl: 'https://github.com/Team-Kujira/networks/raw/master/testnet/harpoon-4.json'
    }
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