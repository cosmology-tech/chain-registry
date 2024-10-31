import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'unification',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://unification.com/',
  prettyName: 'Unification',
  chainType: 'cosmos',
  chainId: 'FUND-MainNet-2',
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
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json'
    },
    versions: [
      {
        name: '1-init_ibc',
        tag: 'v1.6.3',
        proposal: 6,
        height: 2002620,
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        cosmosSdkVersion: '0.45.9',
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
        proposal: 13,
        height: 4727000,
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        cosmosSdkVersion: '0.45.14',
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
        proposal: 14,
        height: 6943000,
        consensus: {
          type: 'tendermint',
          version: '0.34.29'
        },
        cosmosSdkVersion: '0.46.15',
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
        proposal: 21,
        height: 9577300,
        consensus: {
          type: 'tendermint',
          version: '0.34.29'
        },
        cosmosSdkVersion: '0.46.16',
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
        proposal: 25,
        height: 12210000,
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        cosmosSdkVersion: '0.47.13',
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
        address: 'https://rpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'https://rpc.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    rest: [{
        address: 'https://rest.unification.io',
        provider: 'Unification'
      }, {
        address: 'https://rest.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    wss: [{
        address: 'wss://wss.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'grpc.unification.chainmasters.info',
        provider: 'Chainmasters'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.io/u',
      txPage: 'https://explorer.unification.io/u/tx/${txHash}',
      accountPage: 'https://explorer.unification.io/u/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.chainmasters.ninja/unification',
      txPage: 'https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}',
      accountPage: 'https://explorer.unification.chainmasters.ninja/Unification/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/unification',
      txPage: 'https://staking-explorer.com/transaction.php?chain=unification&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=unification&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/unification',
      txPage: 'https://atomscan.com/unification/transactions/${txHash}',
      accountPage: 'https://atomscan.com/unification/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;