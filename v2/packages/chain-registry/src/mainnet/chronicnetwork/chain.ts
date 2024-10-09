import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chronicnetwork',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'Chronic Chain',
  chainId: 'morocco-1',
  bech32Prefix: 'chronic',
  daemonName: 'chtd',
  nodeHome: '$HOME/.cht',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucgas',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-chronic.zenchainlabs.io/',
        provider: 'ZenChainLabs'
      }],
    rest: [{
        address: 'https://api-chronic.zenchainlabs.io/',
        provider: 'ZenChainLabs'
      }],
    grpc: []
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://www.skynetexplorers.com/chronic-token',
      txPage: ''
    },
    {
      kind: 'Zenscan.io',
      url: 'https://www.chronic.zenscan.io',
      txPage: ''
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chronicnetwork',
      txPage: 'https://atomscan.com/chronicnetwork/transactions/${txHash}',
      accountPage: 'https://atomscan.com/chronicnetwork/accounts/${accountAddress}'
    }
  ]
};
export default info;