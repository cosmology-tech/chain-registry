import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'onomy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://onomy.io/',
  prettyName: 'Onomy',
  chainType: 'cosmos',
  chainId: 'onomy-mainnet-1',
  bech32Prefix: 'onomy',
  daemonName: 'onomyd',
  nodeHome: '$HOME/.onomyd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'anom',
        lowGasPrice: 0,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'anom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/onomyprotocol/onomy',
    recommendedVersion: 'v1.1.4',
    compatibleVersions: ['v1.1.4'],
    binaries: {
      "linux/amd64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd',
      "linux/arm64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd-arm'
    },
    cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.45.16-onomy-dev',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json'
    },
    versions: [
      {
        name: 'v1.0.1',
        tag: 'v1.0.1',
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.44.6-0.20221103153534-77ffa1c3fab2',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.14'
        },
        nextVersionName: 'v1.0.3',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/onomyprotocol/onomy-sdk',
          version: 'v0.44.6',
          tag: 'v0.44.6-0.20221103153534-77ffa1c3fab2'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.4'
        }
      },
      {
        name: 'v1.0.3',
        tag: 'v1.0.3',
        proposal: 8,
        height: 2377000,
        recommendedVersion: 'v1.0.3',
        compatibleVersions: ['v1.0.3'],
        cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.44.6-0.20230418124728-9c1be80b05bd',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.19'
        },
        nextVersionName: 'v1.0.3',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/onomyprotocol/onomy-sdk',
          version: 'v0.44.6',
          tag: 'v0.44.6-0.20230418124728-9c1be80b05bd'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.4'
        }
      },
      {
        name: 'v1.1.2',
        tag: 'v1.1.2',
        proposal: 17,
        height: 4010000,
        recommendedVersion: 'v1.1.2',
        compatibleVersions: ['v1.1.2'],
        cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.45.16-onomy-dev',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v1.1.4',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/onomyprotocol/onomy-sdk',
          version: 'v0.45.16',
          tag: 'v0.45.16-onomy-dev'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v1.1.4',
        tag: 'v1.1.4',
        proposal: 18,
        height: 5280000,
        recommendedVersion: 'v1.1.4',
        compatibleVersions: ['v1.1.4'],
        binaries: {
          "linux/amd64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd',
          "linux/arm64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd-arm'
        },
        cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.45.16-onomy-dev',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/onomyprotocol/onomy-sdk',
          version: 'v0.45.16',
          tag: 'v0.45.16-onomy-dev'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/onomyprotocol/onomy-sdk',
      version: 'v0.45.16',
      tag: 'v0.45.16-onomy-dev'
    },
    ibc: {
      type: 'go',
      version: 'v4.4.2'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    rest: [{
        address: 'https://rest-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    grpc: []
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      txPage: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/onomy',
      txPage: 'https://staking-explorer.com/transaction.php?chain=onomy&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=onomy&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      txPage: 'https://ezstaking.app/onomy/txs/${txHash}',
      accountPage: 'https://ezstaking.app/onomy/account/${accountAddress}'
    }
  ],
  keywords: [
    'dex',
    'stablecoin',
    'bridge',
    'staking',
    'ics',
    'rwa'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
      theme: {
        primaryColorHex: '#1c1c28'
      }
    }]
};
export default info;