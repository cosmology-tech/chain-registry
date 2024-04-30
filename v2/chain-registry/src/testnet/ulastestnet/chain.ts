import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'ulastestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ULAS',
  chainId: 'ulas',
  bech32Prefix: 'ulas',
  daemonName: 'ulasd',
  nodeHome: '$HOME/.ulas',
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'http://65.49.204.199:26657',
        provider: 'UlasNetwork'
      }],
    rest: [{
        address: 'http://65.49.204.199:1317',
        provider: 'UlasNetwork'
      }],
    grpc: [{
        address: 'http://65.49.204.199:9090',
        provider: 'UlasNetwork'
      }]
  },
  explorers: [{
      kind: 'ulas-scan',
      url: 'https://testnet-explorer.ulas.network',
      txPage: 'https://testnet-explorer.ulas.network/ulas/tx/${txHash}'
    }],
  slip44: 118
};
export default info;