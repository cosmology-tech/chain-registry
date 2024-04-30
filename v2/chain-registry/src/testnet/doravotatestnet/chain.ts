import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'doravotatestnet',
  chainId: 'vota-testnet',
  prettyName: 'Dora Vota Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'dora',
  daemonName: 'dorad',
  nodeHome: '$HOME/.dora',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'peaka',
        fixedMinGasPrice: 100000000000
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
        address: 'https://vota-testnet-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://vota-testnet-rest.dorafactory.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'vota-testnet-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dora Vota Ping Pub',
      url: 'https://maci-explorer-test.dorafactory.org',
      txPage: 'https://maci-explorer-test.dorafactory.org/dora/tx/${txHash}'
    }]
};
export default info;