import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'seitestnet2',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    recommendedVersion: '2.0.40beta',
    compatibleVersions: [
      '2.0.34beta',
      '2.0.37beta',
      '2.0.39beta',
      '2.0.40beta'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sei-protocol/testnet/main/atlantic-2/genesis.json'
    },
    versions: [{
        name: 'v5.7.5',
        recommendedVersion: 'v5.7.5',
        compatibleVersions: [
          '2.0.34beta',
          '2.0.37beta',
          '2.0.39beta',
          '2.0.40beta'
        ]
      }]
  },
  apis: {
    rpc: [{
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain'
      }, {
        address: 'https://rpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    rest: [{
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain'
      }, {
        address: 'https://api-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    grpc: [{
        address: 'https://grpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc-testnet-sei.stingray.plus',
        provider: 'StingRay'
      }]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://seitrace.com/?chain=atlantic-2',
      txPage: 'https://seitrace.com/tx/${txHash}?chain=atlantic-2'
    },
    {
      kind: 'celatone',
      url: 'https://www.seiscan.app/atlantic-2',
      txPage: 'https://www.seiscan.app/atlantic-2/txs/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://testnet.sei.explorers.guru',
      txPage: 'https://testnet.sei.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      txPage: 'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}'
    }
  ]
};
export default info;