import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmosicsprovidertestnet',
  chainType: 'cosmos',
  chainId: 'provider',
  prettyName: 'Cosmos ICS Provider Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'cosmos',
  daemonName: 'gaiad',
  nodeHome: '$HOME/.gaia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatom',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmos/gaia',
    recommendedVersion: 'v21.0.0',
    compatibleVersions: ['v21.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    binaries: {
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-linux-amd64',
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v21.0.0/gaiad-v21.0.0-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmos/testnets/master/interchain-security/provider/provider-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9',
      tag: 'v0.50.9-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/ics-testnet-provider',
      txPage: 'https://mintscan.io/ics-testnet-provider/tx/${txHash}'
    }, {
      kind: 'Ping.pub',
      url: 'https://explorer.rs-testnet.polypore.xyz/provider',
      txPage: 'https://explorer.rs-testnet.polypore.xyz/provider/tx/${txHash}'
    }]
};
export default info;