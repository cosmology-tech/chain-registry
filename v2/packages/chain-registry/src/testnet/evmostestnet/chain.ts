import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'evmostestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Evmos Testnet',
  chainType: 'cosmos',
  chainId: 'evmos_9000-4',
  bech32Prefix: 'evmos',
  daemonName: 'evmosd',
  nodeHome: '$HOME/.evmosd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atevmos',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atevmos'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/evmos/evmos',
    recommendedVersion: 'v12.0.0-rc4',
    compatibleVersions: ['v12.0.0-rc4'],
    cosmosSdkVersion: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/evmos/testnets/raw/main/evmos_9000-4/genesis.zip'
    },
    versions: [{
        name: 'v11.0.0-rc3',
        recommendedVersion: 'v11.0.0-rc3',
        compatibleVersions: ['v11.0.0-rc3'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      }, {
        name: 'v12.0.0',
        recommendedVersion: 'v12.0.0-rc4',
        compatibleVersions: ['v12.0.0-rc4'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: 'v6.1.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://evmos.test.rpc.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://evmos.test.api.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [{
        address: 'https://evmos.test.grpc.coldyvalidator.net',
        provider: 'coldy'
      }, {
        address: 'evmos-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/evmos-testnet',
      txPage: 'https://mintscan.io/evmos-testnet/txs/${txHash}'
    }, {
      kind: 'NodesGuru',
      url: 'https://testnet.evmos.explorers.guru/',
      txPage: 'https://testnet.evmos.explorers.guru/transaction/${txHash}'
    }]
};
export default info;