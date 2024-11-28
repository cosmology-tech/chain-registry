import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'seidevnet3',
  chainType: 'cosmos',
  chainId: 'sei-devnet-3',
  prettyName: 'Sei Devnet 3',
  status: 'live',
  networkType: 'devnet',
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
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    recommendedVersion: '2.0.40beta',
    compatibleVersions: [
      '2.0.27beta',
      '2.0.29eta',
      '2.0.31beta',
      '2.0.32beta',
      '2.0.36beta',
      '2.0.37beta',
      '2.0.39beta',
      '2.0.40beta'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-devnet-3/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }, {
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://rest.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }, {
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain'
      }],
    grpc: [{
        address: 'https://grpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://devnet.sei.explorers.guru',
      txPage: 'https://devnet.sei.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      txPage: 'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}'
    }]
};
export default info;