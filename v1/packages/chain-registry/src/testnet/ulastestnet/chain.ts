import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'ulastestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'ULAS',
  chain_type: 'cosmos',
  chain_id: 'ulas',
  bech32_prefix: 'ulas',
  slip44: 118,
  daemon_name: 'ulasd',
  node_home: '$HOME/.ulas',
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
      tx_page: 'https://testnet-explorer.ulas.network/ulas/tx/${txHash}'
    }]
};
export default info;