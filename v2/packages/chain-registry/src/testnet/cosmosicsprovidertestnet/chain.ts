import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmosicsprovidertestnet',
  chainType: 'cosmos',
  chainId: 'provider',
  prettyName: 'Cosmos Hub Testnet',
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
        averageGasPrice: 0.02,
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
    recommendedVersion: 'v29.0.0-rc0',
    compatibleVersions: ['v29.0.0-rc0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.25'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v29.0.0-rc0/gaiad-v29.0.0-rc0-darwin-amd64',
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v29.0.0-rc0/gaiad-v29.0.0-rc0-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmos/testnets/master/provider/provider-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.8',
      tag: 'v0.53.8'
    },
    ibc: {
      type: 'go',
      version: 'v10.7.0'
    },
    cosmwasm: {
      version: 'v0.60.9',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.60.9'
    },
    tag: 'v29.0.0-rc0'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provider-sentry-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos-testnet-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://cosmos.rpc.testnet.cumulo.me',
        provider: 'Cumulo'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos-testnet-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://cosmos.api.testnet.cumulo.me',
        provider: 'Cumulo'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.hub-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'cosmos-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://cosmos.grpc.testnet.cumulo.me',
        provider: 'Cumulo'
      }
    ],
    wss: [{
        address: 'wss://cosmos.rpc.testnet.cumulo.me/websocket',
        provider: 'Cumulo'
      }]
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