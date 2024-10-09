import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kyvedevnet',
  chainId: 'korellia-2',
  prettyName: 'KYVE Korellia',
  status: 'live',
  networkType: 'devnet',
  bech32Prefix: 'kyve',
  daemonName: 'chaind',
  nodeHome: '$HOME/.kyve',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tkyve',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.korellia.kyve.network',
        provider: 'kyve'
      }],
    rest: [{
        address: 'https://api.korellia.kyve.network',
        provider: 'kyve'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://kyve.explorers.guru/',
      txPage: 'https://kyve.explorers.guru/transaction/${txHash}'
    }]
};
export default info;