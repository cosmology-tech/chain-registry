import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'persistencetestnet',
  chainType: 'cosmos',
  chainId: 'test-core-1',
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
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/persistenceOne/persistenceCore',
    recommendedVersion: 'v6.0.0-rc5',
    compatibleVersions: ['v6.0.0-rc5'],
    binaries: {
      "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/archive/refs/tags/v6.0.0-rc5.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/test-core-1/final_genesis.json'
    }
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
      txPage: 'https://testnet.ping.pub/test-core-1/tx/${txHash}'
    }, {
      kind: 'mintscan',
      url: 'https://mintscan.io/persistence-testnet',
      txPage: 'https://mintscan.io/persistence-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/persistence-testnet/account/${accountAddress}'
    }]
};
export default info;