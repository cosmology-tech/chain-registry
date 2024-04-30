import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cudostestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Cudos Testnet',
  chain_id: 'cudos-testnet-public-3',
  bech32_prefix: 'cudos',
  key_algos: ['secp256k1'],
  slip44: 118,
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.cudos.org:443/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      }
    ],
    rest: [
      {
        address: 'https://rest.testnet.cudos.org:443',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.cudos.org:433',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      }
    ]
  },
  explorers: [{
      kind: 'bigdipper-testnet',
      url: 'https://explorer.testnet.cudos.org/',
      tx_page: 'https://explorer.testnet.cudos.org/transactions/${txHash}',
      account_page: 'https://explorer.testnet.cudos.org/accounts/${accountAddress}'
    }]
};
export default info;