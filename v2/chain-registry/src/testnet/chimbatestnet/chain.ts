import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chimbatestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://chimba.ooo/',
  prettyName: 'Chimba',
  chainId: 'chimba-testnet',
  bech32Prefix: 'chimba',
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
    }],
  slip44: 118
};
export default info;