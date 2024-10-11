import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'provenance',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://provenance.io/',
  prettyName: 'Provenance',
  chainType: 'cosmos',
  chainId: 'pio-mainnet-1',
  bech32Prefix: 'pb',
  daemonName: 'provenanced',
  nodeHome: '$HOME/Provenance',
  keyAlgos: ['secp256k1'],
  slip44: 505,
  fees: {
    feeTokens: [{
        denom: 'nhash',
        fixedMinGasPrice: 1905,
        lowGasPrice: 1905,
        averageGasPrice: 2100,
        highGasPrice: 2500
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/provenance-io/provenance',
    recommendedVersion: 'v1.17.0',
    compatibleVersions: ['v1.17.0'],
    cosmosSdkVersion: '0.46.13',
    consensus: {
      type: 'tendermint',
      version: '0.34.29'
    },
    cosmwasmVersion: '0.30',
    cosmwasmEnabled: true,
    binaries: {
      "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.17.0/provenance-linux-amd64-v1.17.0.zip'
    },
    genesis: {
      name: 'v1.0.1',
      genesisUrl: 'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.1',
        tag: 'v1.0.1',
        height: 0,
        nextVersionName: 'bluetiful'
      },
      {
        name: 'bluetiful',
        tag: 'v1.3.1',
        height: 352000,
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.0', 'v1.3.1'],
        nextVersionName: 'citrine'
      },
      {
        name: 'citrine',
        tag: 'v1.4.1',
        height: 940500,
        recommendedVersion: 'v1.4.1',
        compatibleVersions: ['v1.4.0', 'v1.4.1'],
        nextVersionName: 'desert'
      },
      {
        name: 'desert',
        tag: 'v1.5.0',
        height: 1442070,
        recommendedVersion: 'v1.5.0',
        compatibleVersions: ['v1.5.0'],
        nextVersionName: 'desert'
      },
      {
        name: 'usdf.c-hotfix',
        tag: 'v1.6.0',
        height: 2000000,
        recommendedVersion: 'v1.6.0',
        compatibleVersions: ['v1.6.0'],
        nextVersionName: 'feldgrau'
      },
      {
        name: 'feldgrau',
        tag: 'v1.7.6',
        height: 2641250,
        recommendedVersion: 'v1.7.6',
        compatibleVersions: [
          'v1.7.0',
          'v1.7.1',
          'v1.7.2',
          'v1.7.3',
          'v1.7.4',
          'v1.7.5',
          'v1.7.6'
        ],
        nextVersionName: 'green'
      },
      {
        name: 'green',
        tag: 'v1.8.2',
        height: 4808400,
        recommendedVersion: 'v1.8.2',
        compatibleVersions: [
          'v1.8.0',
          'v1.8.1',
          'v1.8.2'
        ],
        nextVersionName: 'lava'
      },
      {
        name: 'lava',
        tag: 'v1.10.0',
        height: 5689885,
        recommendedVersion: 'v1.10.0',
        compatibleVersions: ['v1.10.0'],
        nextVersionName: 'mango'
      },
      {
        name: 'mango',
        tag: 'v1.11.1',
        height: 6512577,
        recommendedVersion: 'v1.11.1',
        compatibleVersions: ['v1.11.0', 'v1.11.1'],
        nextVersionName: 'neoncarrot'
      },
      {
        name: 'neoncarrot',
        tag: 'v1.12.2',
        height: 7334444,
        recommendedVersion: 'v1.12.2',
        compatibleVersions: [
          'v1.12.0',
          'v1.12.1',
          'v1.12.2'
        ],
        nextVersionName: 'ochre'
      },
      {
        name: 'ochre',
        tag: 'v1.13.1',
        height: 8485555,
        recommendedVersion: 'v1.13.1',
        compatibleVersions: ['v1.13.0', 'v1.13.1'],
        nextVersionName: 'paua'
      },
      {
        name: 'paua',
        tag: 'v1.14.1',
        height: 9828888,
        recommendedVersion: 'v1.14.1',
        compatibleVersions: ['v1.14.0', 'v1.14.1'],
        cosmosSdkVersion: '0.46.10',
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        cosmwasmVersion: '0.30',
        cosmwasmEnabled: true,
        binaries: {
          "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.14.1/provenance-linux-amd64-v1.14.1.zip'
        },
        nextVersionName: 'quicksilver',
        sdk: {
          type: 'cosmos',
          version: '0.46.10'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.1.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'quicksilver',
        tag: 'v1.15.2',
        height: 11130222,
        recommendedVersion: 'v1.15.2',
        compatibleVersions: [
          'v1.15.0',
          'v1.15.1',
          'v1.15.2'
        ],
        cosmosSdkVersion: '0.46.10',
        consensus: {
          type: 'tendermint',
          version: '0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.15.2/provenance-linux-amd64-v1.15.2.zip'
        },
        nextVersionName: 'rust',
        sdk: {
          type: 'cosmos',
          version: '0.46.10'
        },
        ibc: {
          type: 'go',
          version: '6.1.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'rust',
        tag: 'v1.16.0',
        height: 11842000,
        recommendedVersion: 'v1.16.0',
        compatibleVersions: ['v1.16.0'],
        cosmosSdkVersion: '0.46.13',
        consensus: {
          type: 'tendermint',
          version: '0.34.28'
        },
        cosmwasmVersion: '0.30',
        cosmwasmEnabled: true,
        binaries: {
          "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.16.0/provenance-linux-amd64-v1.16.0.zip'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.13'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'saffron',
        tag: 'v1.17.0',
        height: 13736000,
        recommendedVersion: 'v1.17.0',
        compatibleVersions: ['v1.17.0'],
        cosmosSdkVersion: '0.46.13',
        consensus: {
          type: 'tendermint',
          version: '0.34.29'
        },
        cosmwasmVersion: '0.30',
        cosmwasmEnabled: true,
        binaries: {
          "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.17.0/provenance-linux-amd64-v1.17.0.zip'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.13'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '6.2.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.46.13'
    },
    ibc: {
      type: 'go',
      version: '6.2.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-provenance.takeshi.team/',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc.provenance.io/',
        provider: 'Figure'
      },
      {
        address: 'https://rpc-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://provenance-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.provenance.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.pio-mainnet-1.provenance.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-provenance.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://provenance-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.provenance.io',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://api.provenance.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.pio-mainnet-1.provenance.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    grpc: [
      {
        address: 'grpc-provenance.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'provenance-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-provenance-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.provenance.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'provenance-grpc.panthea.eu:16780',
        provider: 'Panthea EU'
      },
      {
        address: 'grpc.pio-mainnet-1.provenance.aviaone.com:9231',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'Provenance',
      url: 'https://explorer.provenance.io',
      txPage: 'https://explorer.provenance.io/tx/${txHash}'
    },
    {
      kind: 'hubble',
      url: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1',
      txPage: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/provenance',
      txPage: 'https://ping.pub/provenance/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/provenance',
      txPage: 'https://www.mintscan.io/provenance/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Provenance',
      txPage: 'https://explorer.stavr.tech/Provenance/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Provenance/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/provenance',
      txPage: 'https://ezstaking.app/provenance/txs/${txHash}',
      accountPage: 'https://ezstaking.app/provenance/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/provenance',
      txPage: 'https://atomscan.com/provenance/transactions/${txHash}',
      accountPage: 'https://atomscan.com/provenance/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/provenance',
      txPage: 'https://explorer.whenmoonwhenlambo.money/provenance/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/provenance/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/provenance',
      txPage: 'https://mainnet.explorer.aviaone.com/provenance/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/provenance/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
      theme: {
        primaryColorHex: '#4c7cdc'
      }
    }]
};
export default info;