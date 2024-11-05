import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qwoyn',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://qwoyn.studio/',
  description: 'The Qwoyn Network stands as a cutting-edge gaming hub that embeds Web3 technologies into the core of interactive entertainment. It revolutionizes the gaming industry by ensuring true ownership of in-game assets for players, facilitated through blockchain. This approach not only enhances gameplay but also fosters a unique ecosystem of interoperability and innovation. As a beacon in the gaming world, Qwoyn Network is dedicated to merging the excitement of traditional gaming with the transformative potential of Web3, creating a seamless and enriched gaming experience.',
  prettyName: 'Qwoyn',
  chainType: 'cosmos',
  chainId: 'qwoyn-1',
  bech32Prefix: 'qwoyn',
  daemonName: 'qwoynd',
  nodeHome: '$HOME/.qwoynd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqwoyn',
        fixedMinGasPrice: 0.03,
        lowGasPrice: 0.03,
        averageGasPrice: 0.05,
        highGasPrice: 0.075
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqwoyn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmic-horizon/QWOYN',
    recommendedVersion: 'v5.4.1',
    compatibleVersions: ['v5.4.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmic-horizon/mainnet/main/genesis.json'
    },
    versions: [
      {
        name: 'v5.0.2',
        tag: 'v5.0.2',
        recommendedVersion: 'v5.0.2',
        compatibleVersions: ['v5.0.2'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmic-horizon/QWOYN/releases/download/v5.0.2/qwoynd_5.0.2_linux_amd64.zip'
        },
        nextVersionName: 'v5.1.0',
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        ibc: {
          type: 'go',
          version: '7.0.1'
        }
      },
      {
        name: 'v5.1.0',
        tag: 'v5.1.0',
        proposal: 1,
        height: 280850,
        recommendedVersion: 'v5.1.0',
        compatibleVersions: ['v5.1.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v5.2.0',
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        ibc: {
          type: 'go',
          version: '7.0.1'
        }
      },
      {
        name: 'v5.2.0',
        tag: 'v5.2.0',
        proposal: 4,
        height: 805404,
        recommendedVersion: 'v5.2.0',
        compatibleVersions: ['v5.2.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v5.3.0',
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        ibc: {
          type: 'go',
          version: '7.0.1'
        }
      },
      {
        name: 'v5.3.0',
        tag: 'v5.3.0',
        proposal: 13,
        height: 2789768,
        recommendedVersion: 'v5.3.0',
        compatibleVersions: ['v5.3.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        nextVersionName: 'v5.4.1',
        sdk: {
          type: 'cosmos',
          version: '0.47.6'
        },
        cosmwasm: {
          version: '0.40.0'
        },
        ibc: {
          type: 'go',
          version: '7.0.1',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      },
      {
        name: 'v5.4.1',
        tag: 'v5.4.1',
        proposal: 15,
        height: 3395000,
        recommendedVersion: 'v5.4.1',
        compatibleVersions: ['v5.4.1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: '0.47.6'
        },
        cosmwasm: {
          version: '0.40.0'
        },
        ibc: {
          type: 'go',
          version: '7.3.1',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.47.6'
    },
    ibc: {
      type: 'go',
      version: '7.3.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.40.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.qwoyn.studio:443',
        provider: 'Qwoyn Studios'
      },
      {
        address: 'https://rpc-qwoyn.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'https://qwoyn.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://qwoyn-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://qwoyn-rpc-archive.staketab.org:443',
        provider: 'Staketab archive'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/qwoyn',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-qwoyn.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc.qwoyn.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'services.staketab.com:9430',
        provider: 'Staketab'
      },
      {
        address: 'qwoyn.grpc.m.stavr.tech:1907',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'services.staketab.com:2000',
        provider: 'Staketab archive'
      },
      {
        address: 'https://grpc-qwoyn.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'qwoyn.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-qwoyn.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://grpc.qwoyn.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://rest-qwoyn.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'https://qwoyn-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://qwoyn.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://qwoyn-rest-archive.staketab.org',
        provider: 'Staketab archive'
      },
      {
        address: 'https://rest.lavenderfive.com:443/qwoyn',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-qwoyn.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://lcd.qwoyn.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping',
      url: 'https://explorer.theamsolutions.info/qwoyn-main/',
      txPage: 'https://explorer.theamsolutions.info/qwoyn-main/blocks',
      accountPage: 'https://explorer.theamsolutions.info/qwoyn-main/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/qwoyn',
      txPage: 'https://staking-explorer.com/transaction.php?chain=qwoyn&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=qwoyn&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Qwoyn-Mainnet',
      txPage: 'https://explorer.stavr.tech/Qwoyn-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Qwoyn-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'ping',
      url: 'https://explorer.theamsolutions.info/QWOYN-MAIN',
      txPage: 'https://explorer.theamsolutions.info/QWOYN-MAIN/tx/${txHash}',
      accountPage: 'https://explorer.theamsolutions.info/QWOYN-MAIN/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
      theme: {
        primaryColorHex: '#04e4fc'
      }
    }]
};
export default info;