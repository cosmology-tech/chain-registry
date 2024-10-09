import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'gitopiatestnet',
  chainId: 'gitopia-janus-testnet-2',
  prettyName: 'Gitopia Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'gitopia',
  daemonName: 'gitopiad',
  nodeHome: '$HOME/.gitopia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utlore',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://gitopia-testnet.nodejumper.io',
        provider: 'NODEJUMPER'
      }],
    rest: [{
        address: 'https://gitopia-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      }],
    grpc: [{
        address: 'https://gitopia-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }]
  },
  explorers: [{
      kind: 'explorer.humans.zone',
      url: 'https://gitopia.explorers.guru/',
      txPage: 'https://gitopia.explorers.guru/transaction/${txHash}'
    }]
};
export default info;