import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'persistencetestnet2',
  chainId: 'test-core-2',
  prettyName: 'Persistence Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://persistence.one/',
  bech32Prefix: 'persistence',
  daemonName: 'persistenceCore',
  nodeHome: '$HOME/.persistenceCore',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxprt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.05,
        averageGasPrice: 0.125,
        highGasPrice: 0.2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxprt'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {

  },
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
    grpc: [{
        address: 'persistence-testnet-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      }, {
        address: 'persistenceCoreTest-grpc.ytwofund.pro:9090',
        provider: 'YTWOFUND'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/persistence-testnet',
      txPage: 'https://testnet.mintscan.io/persistence-testnet/txs/${txHash}',
      accountPage: 'https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}'
    },
    {
      kind: 'StakeFlow',
      url: 'https://stakeflow.io/persistence-testnet',
      txPage: 'https://stakeflow.io/persistence-testnet/transactions/${txHash}',
      accountPage: 'https://stakeflow.io/persistence-testnet/accounts/${accountAddress}'
    },
    {
      kind: 'baryon',
      url: 'https://testnet-explorer.baryon.dev/test-core-2',
      txPage: 'https://testnet-explorer.baryon.dev/test-core-2/tx/{txHash}',
      accountPage: 'https://testnet-explorer.baryon.dev/test-core-2/account/${accountAddress}'
    }
  ]
};
export default info;