import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'persistencetestnet2',
  chain_id: 'test-core-2',
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
    fee_tokens: [
      {
        denom: 'uxprt',
        fixed_min_gas_price: 0,
        low_gas_price: 0.05,
        average_gas_price: 0.125,
        high_gas_price: 0.2
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uxprt'
      }
    ],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: 'https://rpc-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow'
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
        address: 'https://rpc.testnet2.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistencecoretest-rpc.ytwofund.pro/',
        provider: 'YTWOFUND'
      },
      {
        address: 'http://persistence-testnet.paranorm.pro:24657/',
        provider: 'Paranorm'
      }
    ],
    rest: [
      {
        address: 'https://api-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow'
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
        address: 'https://rest.testnet2.persistence.one/',
        provider: 'Persistence'
      },
      {
        address: 'https://persistence-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistenceCoreTest-rest.ytwofund.pro',
        provider: 'YTWOFUND'
      }
    ],
    grpc: [
      {
        address: 'persistence-testnet-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      },
      {
        address: 'persistenceCoreTest-grpc.ytwofund.pro:9090',
        provider: 'YTWOFUND'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/persistence-testnet',
      tx_page: 'https://testnet.mintscan.io/persistence-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}'
    },
    {
      kind: 'StakeFlow',
      url: 'https://stakeflow.io/persistence-testnet',
      tx_page:
        'https://stakeflow.io/persistence-testnet/transactions/${txHash}',
      account_page:
        'https://stakeflow.io/persistence-testnet/accounts/${accountAddress}'
    },
    {
      kind: 'baryon',
      url: 'https://testnet-explorer.baryon.dev/test-core-2',
      tx_page: 'https://testnet-explorer.baryon.dev/test-core-2/tx/{txHash}',
      account_page:
        'https://testnet-explorer.baryon.dev/test-core-2/account/${accountAddress}'
    }
  ]
};
export default info;
