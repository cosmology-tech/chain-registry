import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'persistencetestnet',
  chain_type: 'cosmos',
  chain_id: 'test-core-1',
  pretty_name: 'Persistence Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://persistence.one/',
  bech32_prefix: 'persistence',
  daemon_name: 'persistenceCore',
  node_home: '$HOME/.persistenceCore',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxprt',
        fixed_min_gas_price: 0,
        low_gas_price: 0.05,
        average_gas_price: 0.125,
        high_gas_price: 0.2
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxprt'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet-persistence.architectnodes.com/',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://persistence-testnet-rpc.baryon.dev/',
        provider: 'Baryon'
      },
      {
        address: 'https://persistence-testnet-rpc.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://rpc.testnet.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://xprt-trpc.antrixy.org/',
        provider: 'Antrix Validators'
      }
    ],
    rest: [
      {
        address: 'https://rest-testnet-persistence.architectnodes.com/',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://persistence-testnet-api.baryon.dev/',
        provider: 'Baryon'
      },
      {
        address: 'https://persistence-testnet-rest.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://rest.testnet.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://xprt-trest.antrixy.org/',
        provider: 'Antrix Validators'
      }
    ],
    grpc: [{
        address: 'persistence-testnet-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      }, {
        address: 'https://xprt-tgrpc.antrixy.org/',
        provider: 'Antrix Validators'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/test-core-1/',
      tx_page: 'https://testnet.ping.pub/test-core-1/tx/${txHash}'
    }, {
      kind: 'mintscan',
      url: 'https://mintscan.io/persistence-testnet',
      tx_page: 'https://mintscan.io/persistence-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/persistence-testnet/account/${accountAddress}'
    }]
};
export default info;