import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'injectivetestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://injective.com',
  prettyName: 'Injective',
  chainType: 'cosmos',
  chainId: 'injective-888',
  bech32Prefix: 'inj',
  extraCodecs: ['injective'],
  slip44: 60,
  daemonName: 'injectived',
  nodeHome: '$HOME/.injectived',
  fees: {
    feeTokens: [{
        denom: 'inj',
        fixedMinGasPrice: 160000000,
        lowGasPrice: 500000000,
        averageGasPrice: 700000000,
        highGasPrice: 900000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'inj'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/InjectiveLabs/testnet',
    recommendedVersion: 'v1.11.1',
    compatibleVersions: ['v1.11.1'],
    binaries: {
      "linux/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/linux-amd64.zip',
      "darwin/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/darwin-amd64.zip'
    },
    genesis: {
      genesisUrl: 'https://injective-snapshots.s3.amazonaws.com/testnet/genesis.json'
    },
    versions: [{
        name: 'v1.10.2',
        recommendedVersion: 'v1.10.2',
        compatibleVersions: ['v1.10.2'],
        binaries: {
          "linux/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/linux-amd64.zip',
          "darwin/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/darwin-amd64.zip'
        },
        nextVersionName: 'v1.11.1'
      }, {
        name: 'v1.11.1',
        recommendedVersion: 'v1.11.1',
        compatibleVersions: ['v1.11.1'],
        binaries: {
          "linux/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/linux-amd64.zip',
          "darwin/amd64": 'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/darwin-amd64.zip'
        }
      }]
  },
  apis: {
    rpc: [
      {
        address: 'https://injective-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://testnet.sentry.tm.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.tm.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://injective-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://injective-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://testnet.sentry.lcd.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.lcd.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://injective-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'injective-testnet-grpc.polkachu.com:14390',
        provider: 'Polkachu'
      },
      {
        address: 'testnet.sentry.chain.grpc.injective.network:443',
        provider: 'injectiveLabs'
      },
      {
        address: 'https://testnet.grpc.injective.network',
        provider: 'injectiveLabs'
      },
      {
        address: 'injective-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [{
      kind: 'injectiveprotocol',
      url: 'https://testnet.explorer.injective.network/',
      txPage: 'https://testnet.explorer.injective.network/transaction/${txHash}'
    }]
};
export default info;