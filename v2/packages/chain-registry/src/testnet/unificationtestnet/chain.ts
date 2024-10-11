import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'unificationtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://unification.com/',
  prettyName: 'Unification Testnet',
  chainType: 'cosmos',
  chainId: 'FUND-TestNet-2',
  bech32Prefix: 'und',
  daemonName: 'und',
  nodeHome: '$HOME/.und_mainchain',
  keyAlgos: ['secp256k1'],
  slip44: 5555,
  fees: {
    feeTokens: [{
        denom: 'nund',
        fixedMinGasPrice: 25,
        lowGasPrice: 100,
        averageGasPrice: 200,
        highGasPrice: 300
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nund'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/unification-com/mainchain',
    recommendedVersion: 'v1.10.1',
    compatibleVersions: ['v1.10.0', 'v1.10.1'],
    binaries: {
      "linux/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_linux_x86_64.tar.gz',
      "darwin/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_darwin_x86_64.tar.gz',
      "windows/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_windows_x86_64.tar.gz'
    },
    cosmosSdkVersion: '0.47.13',
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    cosmwasmEnabled: false,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json'
    },
    versions: [
      {
        name: '1-ibc',
        tag: 'v1.6.3',
        proposal: 4,
        height: 2410500,
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        cosmosSdkVersion: '0.45.9',
        cosmwasmEnabled: false,
        nextVersionName: 'v1.7.0',
        sdk: {
          type: 'cosmos',
          version: '0.45.9'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: '3.1.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: '2-grog',
        tag: 'v1.7.0',
        proposal: 7,
        height: 5840430,
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        cosmosSdkVersion: '0.45.14',
        cosmwasmEnabled: false,
        nextVersionName: 'v1.8.2',
        sdk: {
          type: 'cosmos',
          version: '0.45.14'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: '3.4.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: '3-keyleth',
        tag: 'v1.8.2',
        proposal: 8,
        height: 7841840,
        consensus: {
          type: 'tendermint',
          version: '0.34.29'
        },
        cosmosSdkVersion: '0.46.15',
        cosmwasmEnabled: false,
        recommendedVersion: 'v1.8.2',
        nextVersionName: 'v1.9.0',
        compatibleVersions: ['v1.8.2'],
        sdk: {
          type: 'cosmos',
          version: '0.46.15'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: '5.3.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: '4-percival',
        tag: 'v1.9.0',
        proposal: 41,
        height: 11657000,
        consensus: {
          type: 'tendermint',
          version: '0.34.29'
        },
        cosmosSdkVersion: '0.46.16',
        cosmwasmEnabled: false,
        nextVersionName: 'v1.10.1',
        recommendedVersion: 'v1.9.0',
        compatibleVersions: ['v1.9.0'],
        sdk: {
          type: 'cosmos',
          version: '0.46.16'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: '5.3.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: '5-pike',
        tag: 'v1.10.1',
        proposal: 43,
        height: 13910300,
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        cosmosSdkVersion: '0.47.13',
        cosmwasmEnabled: false,
        recommendedVersion: 'v1.10.1',
        compatibleVersions: ['v1.10.0', 'v1.10.1'],
        sdk: {
          type: 'cosmos',
          version: '0.47.13'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: '7.7.0',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.47.13'
    },
    ibc: {
      type: 'go',
      version: '7.7.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
      theme: {
        primaryColorHex: '#2279c0'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.unification.io:443',
        provider: 'Unification'
      }],
    rest: [{
        address: 'https://rest-testnet.unification.io',
        provider: 'Unification'
      }],
    wss: [{
        address: 'wss://wss-testnet.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc-testnet.unification.io:443',
        provider: 'Unification'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-testnet.unification.io/u',
      txPage: 'https://explorer-testnet.unification.io/u/tx/${txHash}',
      accountPage: 'https://explorer-testnet.unification.io/u/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;