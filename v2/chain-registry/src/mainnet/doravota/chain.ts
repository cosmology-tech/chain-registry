import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'doravota',
  chainId: 'vota-ash',
  prettyName: 'Dora Vota',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'dora',
  daemonName: 'dorad',
  nodeHome: '$HOME/.dora',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'peaka',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 100000000000,
        highGasPrice: 100000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'peaka'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://vota-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }, {
        address: 'https://m-dora.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      }],
    rest: [{
        address: 'https://vota-rest.dorafactory.org',
        provider: 'dorafactory'
      }, {
        address: 'https://m-dora.api.utsa.tech',
        provider: 'lesnik | UTSA'
      }],
    grpc: [{
        address: 'vota-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-explorer.dorafactory.org',
      txPage: 'https://vota-explorer.dorafactory.org/doravota/tx/${txHash}'
    }, {
      kind: 'lesnik | UTSA Ping Pub',
      url: 'https://exp.utsa.tech/dora/staking',
      txPage: 'https://exp.utsa.tech/dora/tx/${txHash}'
    }]
};
export default info;