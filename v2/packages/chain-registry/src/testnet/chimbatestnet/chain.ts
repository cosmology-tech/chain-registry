import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'chimbatestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://chimba.ooo/',
  prettyName: 'Chimba',
  chainType: 'cosmos',
  chainId: 'chimba-testnet',
  bech32Prefix: 'chimba',
  slip44: 118,
  daemonName: 'chimbad',
  nodeHome: '$HOME/.chimbad',
  fees: {
    feeTokens: [{
        denom: 'ucmba',
        fixedMinGasPrice: 0.25,
        lowGasPrice: 1,
        averageGasPrice: 5,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucmba'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ChimbaBlockchain/chimba',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://rpc.testnet.chimba.ooo/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.chimba.ooo',
        provider: 'chimba'
      }],
    rest: [{
        address: 'https://testnet.chimba.ooo',
        provider: 'chimba'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.testnet.chimba.ooo/',
      txPage: 'https://explorer.testnet.chimba.ooo/transactions/${txHash}'
    }]
};
export default info;