import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'desmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://desmos.network/',
  prettyName: 'Desmos',
  chainType: 'cosmos',
  chainId: 'desmos-mainnet',
  bech32Prefix: 'desmos',
  daemonName: 'desmos',
  nodeHome: '$HOME/.desmos',
  keyAlgos: ['secp256k1'],
  slip44: 852,
  fees: {
    feeTokens: [{
        denom: 'udsm',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.03,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udsm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/desmos-labs/desmos',
    recommendedVersion: 'v7.1.0',
    compatibleVersions: ['v7.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v7.1.0/desmos-v7.1.0-linux-amd64'
    },
    cosmosSdkVersion: 'desmos-labs/cosmos-sdk v0.47.10-desmos',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    cosmwasmVersion: 'v0.45.0',
    cosmwasmEnabled: true,
    cosmwasmPath: '$HOME/.desmos/data/wasm',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json'
    },
    versions: [
      {
        name: 'v4.8.0',
        recommendedVersion: 'v4.8.1',
        compatibleVersions: ['v4.8.0', 'v4.8.1'],
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v4.8.1/desmos-4.8.1-linux-amd64'
        },
        nextVersionName: 'v5.0.0'
      },
      {
        name: 'v5.0.0',
        recommendedVersion: 'v5.1.0',
        compatibleVersions: ['v5.1.0'],
        proposal: 28,
        height: 9069645,
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v5.1.0/desmos-5.1.0-linux-amd64'
        },
        nextVersionName: 'v5.2.0'
      },
      {
        name: 'v5.2.0',
        recommendedVersion: 'v5.2.0',
        compatibleVersions: ['v5.2.0'],
        proposal: 29,
        height: 9259165,
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v5.2.0/desmos-5.2.0-linux-amd64'
        },
        nextVersionName: 'v6'
      },
      {
        name: 'v6',
        recommendedVersion: 'v6.1.1',
        compatibleVersions: ['v6.1.0', 'v6.1.1'],
        proposal: 32,
        height: 10213500,
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v6.1.1/desmos-6.1.1-linux-amd64'
        },
        nextVersionName: 'v6.2.0'
      },
      {
        name: 'v6.2.0',
        recommendedVersion: 'v6.2.1',
        compatibleVersions: ['v6.2.1'],
        proposal: 36,
        height: 11312575,
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v6.2.1/desmos-6.2.1-linux-amd64'
        },
        nextVersionName: 'v7'
      },
      {
        name: 'v7',
        proposal: 42,
        height: 12745550,
        recommendedVersion: 'v7.0.2',
        compatibleVersions: ['v7.0.2'],
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v7.0.2/desmos-7.0.2-linux-amd64'
        },
        cosmosSdkVersion: 'desmos-labs/cosmos-sdk v0.47.9-desmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.4'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        cosmwasmPath: '$HOME/.desmos/data/wasm',
        nextVersionName: 'v7.1.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/desmos-labs/cosmos-sdk',
          version: 'v0.47.9',
          tag: 'v0.47.9-desmos'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.desmos/data/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.2'
        }
      },
      {
        name: 'v7.1.0',
        proposal: 48,
        height: 13775361,
        recommendedVersion: 'v7.1.0',
        compatibleVersions: ['v7.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v7.1.0/desmos-v7.1.0-linux-amd64'
        },
        cosmosSdkVersion: 'desmos-labs/cosmos-sdk v0.47.10-desmos',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        cosmwasmPath: '$HOME/.desmos/data/wasm',
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/desmos-labs/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-desmos'
        },
        cosmwasm: {
          version: 'v0.45.0',
          path: '$HOME/.desmos/data/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/desmos-labs/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-desmos'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      path: '$HOME/.desmos/data/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://rpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://desmos.declab.pro:26613',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://rest.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://lcd.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-desmos.explorer.co.id',
        provider: 'Nodine.ID'
      },
      {
        address: 'services.staketab.com:9043',
        provider: 'Staketab'
      },
      {
        address: 'desmos.grpc.nodersteam.com:9121',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc-desmos.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://grpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:9009',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'desmos-grpc.noders.services:27090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/desmos',
      txPage: 'https://ezstaking.app/desmos/txs/${txHash}',
      accountPage: 'https://ezstaking.app/desmos/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/desmos',
      txPage: 'https://bigdipper.live/desmos/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/desmos',
      txPage: 'https://www.mintscan.io/desmos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/desmos',
      txPage: 'https://ping.pub/desmos/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/desmos',
      txPage: 'https://atomscan.com/desmos/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/desmos',
      txPage: 'https://explorer.tcnetwork.io/desmos/transaction/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Desmos',
      txPage: 'https://explorer.declab.pro/Desmos/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
      theme: {
        primaryColorHex: '#fb804e'
      }
    }]
};
export default info;