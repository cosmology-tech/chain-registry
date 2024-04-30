import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'statesettestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Stateset Testnet',
  chainId: 'stateset-1-testnet',
  bech32Prefix: 'stateset',
  daemonName: 'statesetd',
  nodeHome: '$HOME/.statesetd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustate',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.stateset.zone/',
        provider: 'stateset'
      }],
    rest: [{
        address: 'https://rest-api.stateset.zone',
        provider: 'stateset'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explore.stateset.zone',
      txPage: 'https://explore.stateset.zone/transactions/${txHash}'
    }]
};
export default info;