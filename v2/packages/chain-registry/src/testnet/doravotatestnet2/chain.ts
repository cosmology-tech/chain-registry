import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'doravotatestnet2',
  chainId: 'vota-vk',
  prettyName: 'Dora Vota Incentive Testnet',
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
        address: 'https://vota-vk-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://vota-vk-rest.dorafactory.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'vota-vk-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-vk-explorer.dorafactory.org',
      txPage: 'https://vota-vk-explorer.dorafactory.org/doravotaincentive/tx/${txHash}'
    }]
};
export default info;