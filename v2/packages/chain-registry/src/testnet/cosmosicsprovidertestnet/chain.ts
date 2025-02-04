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
    recommendedVersion: 'v22.0.0-rc0',
    compatibleVersions: ['v22.0.0-rc0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    binaries: {
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v22.0.0-rc0/gaiad-v22.0.0-rc0-linux-amd64',
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v22.0.0-rc0/gaiad-v22.0.0-rc0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v22.0.0-rc0/gaiad-v22.0.0-rc0-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmos/testnets/master/interchain-security/provider/provider-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11',
      tag: 'v0.50.11-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos-testnet-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos-testnet-api.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-grpc.itrocket.net',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/ics-testnet-provider',
      txPage: 'https://mintscan.io/ics-testnet-provider/tx/${txHash}'
    },
    {
      kind: 'Ping.pub',
      url: 'https://explorer.polypore.xyz/provider',
      txPage: 'https://explorer.polypore.xyz/provider/tx/${txHash}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/cosmos',
      txPage: 'https://testnet.itrocket.net/cosmos/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/cosmos/account/${accountAddress}',
      validatorPage: 'https://testnet.itrocket.net/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://testnet.itrocket.net/cosmos/gov/${proposalId}',
      blockPage: 'https://testnet.itrocket.net/cosmos/block/${blockHeight}'
    }
  ]
};
export default info;