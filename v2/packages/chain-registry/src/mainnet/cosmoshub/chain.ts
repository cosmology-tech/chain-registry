import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cosmoshub',
  chainType: 'cosmos',
  chainId: 'cosmoshub-4',
  website: 'https://cosmos.network/',
  prettyName: 'Cosmos Hub',
  status: 'live',
  networkType: 'mainnet',
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
    recommendedVersion: 'v19.2.0',
    compatibleVersions: ['v19.2.0'],
    cosmosSdkVersion: 'v0.50.9-lsm',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    cosmwasmVersion: 'v0.51.0',
    binaries: {
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-linux-amd64',
      "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-linux-arm64',
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz'
    },
    versions: [
      {
        name: 'v9-Lambda',
        tag: 'v9.1.1',
        recommendedVersion: 'v9.1.1',
        compatibleVersions: ['v9.1.1'],
        cosmosSdkVersion: 'v0.45.15-ics',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        height: 15213800,
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-linux-amd64?checksum=sha256:f62814711be991e535b2fd86f7d4ed8c055bebf774253a06477dc182ce98cdc3',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-linux-arm64?checksum=sha256:a7112c03c7a2bec2a761a3d430bfea9616ed0ebb10c785cafdd6fac117abc504',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-darwin-amd64?checksum=sha256:959f3ddbf3a65b557574527222c5a673b706e9d52a203dfbda2ceb827b760261',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-darwin-arm64?checksum=sha256:0a913a3a9a31456ddfba26eccdfccca61d00b06498faa94019776df391509d27',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-windows-amd64.exe?checksum=sha256:db1d82650ed2a0aa9abccb2bb60dca902c4d1444444f6c76a8b6d61d6bc41e08'
        },
        nextVersionName: 'v10',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.15',
          tag: 'v0.45.15-ics'
        },
        ibc: {
          type: 'go',
          version: 'v4.2.1'
        }
      },
      {
        name: 'v10',
        tag: 'v10.0.2',
        proposal: 798,
        height: 15816200,
        recommendedVersion: 'v10.0.2',
        compatibleVersions: [
          'v10.0.0',
          'v10.0.1',
          'v10.0.2'
        ],
        cosmosSdkVersion: 'v0.45.16-ics',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-linux-amd64?checksum=sha256:fcb8210308223d78bc36f3d4c89e2578dcf784994c052cea97efd61f1672cf72',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-linux-arm64?checksum=sha256:db9b69cf224b410c669fa4f820192890357534e74d4693a744ef915028567462',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-darwin-amd64?checksum=sha256:d0bee3b4b243fe1f88ad3258f4648de3a73787434702bcac6e31ca38f81a283a',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-darwin-arm64?checksum=sha256:c8124d66ffa99b51da274656f6c3401b1ec9e165a76f3f01699761672e83a136gaiad-v10.0.1-linux-amd64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-windows-amd64.exe?checksum=sha256:c02ab2b8fc347f858db1c33fcacafa2467ca550ed83178aee67331762e876926'
        },
        nextVersionName: 'v11',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16',
          tag: 'v0.45.16-ics'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v11',
        tag: 'v11.0.0',
        proposal: 804,
        height: 16596000,
        recommendedVersion: 'v11.0.0',
        compatibleVersions: ['v11.0.0'],
        cosmosSdkVersion: 'v0.45.16-ics',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-arm64.exe'
        },
        nextVersionName: 'v12',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16',
          tag: 'v0.45.16-ics'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v12',
        tag: 'v12.0.0',
        proposal: 821,
        height: 16985500,
        recommendedVersion: 'v12.0.0',
        compatibleVersions: ['v12.0.0'],
        cosmosSdkVersion: 'v0.45.16-ics',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-arm64.exe'
        },
        nextVersionName: 'v13',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16',
          tag: 'v0.45.16-ics'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v13',
        tag: 'v13.0.2',
        proposal: 825,
        height: 17380000,
        recommendedVersion: 'v13.0.2',
        compatibleVersions: ['v13.0.1', 'v13.0.2'],
        cosmosSdkVersion: 'v0.45.16-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-linux-amd64?checksum=sha256:729a55b29857fedfe1271f26e1fdf2cb12d2c6515c2ad0d9bbe432a81ae43df8',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-linux-arm64?checksum=sha256:9bfbe0d5212fa3cdabe34b75b42e1420f50fe8aff64ec9247dcbc5942969e333',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-darwin-amd64?checksum=sha256:910b515369b0cfa8eecc54f2f930fd5de2634b7106825b62f4c4c563fe2a6a07',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-darwin-arm64?checksum=sha256:5a148b56bec7d9ef23d21778725eedb9bc70eaa6a61155b22947216812a17369',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-windows-amd64.exe?checksum=sha256:bc339c368b07306a73a16af8f005bc14439b393790f61d0568358495eb83e71c',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v13.0.2/gaiad-v13.0.2-windows-arm64.exe?checksum=sha256:8728e0f56d52479c80ba4b1c8f68a8fc3085220fad241ba1180867b2c3bc97fa'
        },
        nextVersionName: 'v14',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16',
          tag: 'v0.45.16-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v14',
        tag: 'v14.2.0',
        proposal: 854,
        height: 18262000,
        recommendedVersion: 'v14.2.0',
        compatibleVersions: ['v14.2.0'],
        cosmosSdkVersion: 'v0.45.16-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-linux-amd64?checksum=sha256:baed43bd3f523fd587cff4d8f78f395a3bcb6d20d9a671bef69b8fbe101338f6',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-linux-arm64?checksum=sha256:a57822b2a199ca461f8a8baf4e98a46803f8fa5d4ceb130b539ebd0c03c035a8',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-darwin-amd64?checksum=sha256:4edec8b191bbb0bdcd0f89d1fadfc1cfdb720ac943b7c03d584760725547c047',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-darwin-arm64?checksum=sha256:5177c7ca2b0e66daedc506c6fcdab0d8c436dae846de32081556b8edd57027e8',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-windows-amd64.exe?checksum=sha256:d912548fc1c87ca26defce1a60f089910fa55b38d27063870750efeab176db9d',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.2.0/gaiad-v14.2.0-windows-arm64.exe?checksum=sha256:b17cc1f1a9a5050b72f99d497fdda6d1d4615b6a42971f556d2777ba838fe7b0'
        },
        nextVersionName: 'v15',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16',
          tag: 'v0.45.16-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.2'
        }
      },
      {
        name: 'v15',
        tag: 'v15.2.0',
        proposal: 885,
        height: 19639600,
        recommendedVersion: 'v15.2.0',
        compatibleVersions: ['v15.2.0'],
        cosmosSdkVersion: 'v0.47.11-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-darwin-amd64',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v15.2.0/gaiad-v15.2.0-windows-arm64.exe'
        },
        nextVersionName: 'v16',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11',
          tag: 'v0.47.11-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v16',
        tag: 'v16.0.0',
        proposal: 914,
        height: 20440500,
        recommendedVersion: 'v16.0.0',
        compatibleVersions: ['v16.0.0'],
        cosmosSdkVersion: 'v0.47.13-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-darwin-amd64',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v16.0.0/gaiad-v16.0.0-windows-arm64.exe'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.13',
          tag: 'v0.47.13-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v17',
        tag: 'v17.3.0',
        proposal: 924,
        height: 20739800,
        recommendedVersion: 'v17.3.0',
        compatibleVersions: ['v17.3.0'],
        cosmosSdkVersion: 'v0.47.15-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.6'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-darwin-amd64',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v17.3.0/gaiad-v17.3.0-windows-arm64.exe'
        },
        nextVersionName: 'v18',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.15',
          tag: 'v0.47.15-ics-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v18',
        tag: 'v18.1.0',
        proposal: 937,
        height: 21330500,
        recommendedVersion: 'v18.1.0',
        compatibleVersions: ['v18.1.0'],
        cosmosSdkVersion: 'v0.47.16-ics-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.6'
        },
        cosmwasmVersion: 'informalsystems/wasmd v0.45.0-lsm',
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-darwin-arm64',
          "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-darwin-amd64',
          "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v18.1.0/gaiad-v18.1.0-windows-arm64.exe'
        },
        nextVersionName: 'v19',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.16',
          tag: 'v0.47.16-ics-lsm'
        },
        cosmwasm: {
          version: 'v0.45.0',
          repo: 'https://github.com/informalsystems/wasmd',
          tag: 'v0.45.0-lsm'
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        }
      },
      {
        name: 'v19',
        tag: 'v19.2.0',
        proposal: 948,
        height: 21835200,
        recommendedVersion: 'v19.2.0',
        compatibleVersions: ['v19.2.0'],
        cosmosSdkVersion: 'v0.50.9-lsm',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.11'
        },
        cosmwasmVersion: 'v0.51.0',
        binaries: {
          "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-linux-amd64',
          "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-linux-arm64',
          "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v19.2.0/gaiad-v19.2.0-darwin-arm64'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.50.9',
          tag: 'v0.50.9-lsm'
        },
        cosmwasm: {
          version: 'v0.51.0',
          repo: 'https://github.com/CosmWasm/wasmd',
          tag: 'v0.51.0'
        },
        ibc: {
          type: 'go',
          version: 'v8.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9',
      tag: 'v0.50.9-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    },
    cosmwasm: {
      version: 'v0.51.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.51.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
  },
  description: 'In a nutshell, Cosmos Hub bills itself as a project that solves some of the hardest problems facing the blockchain industry. It aims to offer an antidote to slow, expensive, unscalable and environmentally harmful proof-of-work protocols, like those used by Bitcoin, by offering an ecosystem of connected blockchains.\n\nThe project’s other goals include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized apps. Last but not least, an Inter-blockchain Communication protocol makes it easier for blockchain networks to communicate with each other — preventing fragmentation in the industry.\n\nCosmos Hub\'s origins can be dated back to 2014, when Tendermint, a core contributor to the network, was founded. In 2016, a white paper for Cosmos was published — and a token sale was held the following year. ATOM tokens are earned through a hybrid proof-of-stake algorithm, and they help to keep the Cosmos Hub, the project’s flagship blockchain, secure. This cryptocurrency also has a role in the network’s governance.',
  apis: {
    rpc: [
      {
        address: 'https://cosmoshub.tendermintrpc.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://cosmos-rpc.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://cosmos-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️'
      },
      {
        address: 'https://rpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cosmoshub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-cosmoshub.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://go.getblock.io/17515cb3ec0e43b7817f182e5de6066a',
        provider: 'GetBlock RPC Nodes'
      },
      {
        address: 'https://rpc-cosmoshub.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cosmos-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://cosmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc.cosmos.dragonstake.io',
        provider: 'DragonStake'
      },
      {
        address: 'https://cosmoshub.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rpc.cosmos.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://cosmos-rpc.rockrpc.net',
        provider: 'RockawayX Infra'
      },
      {
        address: 'http://rpc-cosmoshub.freshstaking.com:26657',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://cosmos-rpc.easy2stake.com/',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://rpc.cosmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://cosmos.rpc.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://cosmos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://cosmoshub.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rpc-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://cosmos-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-cosmoshub.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://cosmos-rpc.tienthuattoan.com',
        provider: 'TTT 🇻🇳'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://cosmos-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://cosmoshub-rpc.cosmosrescue.dev',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://cosmos.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cosmoshub/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc-cosmos.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://rpc.cosmoshub-4.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://cosmos-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://cosmos-hub.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [
      {
        address: 'https://cosmoshub.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://cosmos-lcd.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rest.cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cosmoshub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-cosmoshub.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cosmos-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://lcd.cosmos.dragonstake.io',
        provider: 'DragonStake'
      },
      {
        address: 'https://cosmoshub.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rest-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rest-cosmoshub.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://lcd-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://cosmos-lcd.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://api.cosmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://cosmos.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://cosmos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://cosmoshub.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://cosmos-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-cosmoshub.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://cosmos-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://cosmos-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://cosmoshub-api.cosmosrescue.dev',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://cosmos-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cosmoshub/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rest-cosmos.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://cosmos-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    grpc: [
      {
        address: 'cosmoshub.grpc.lava.build',
        provider: 'Lava'
      },
      {
        address: 'cosmoshub.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-cosmoshub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'cosmos-grpc.polkachu.com:14990',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.cosmos.interbloc.org:443',
        provider: 'Interbloc'
      },
      {
        address: 'services.staketab.com:9030',
        provider: 'Staketab'
      },
      {
        address: 'grpc.cosmos.dragonstake.io:443',
        provider: 'DragonStake'
      },
      {
        address: 'cosmoshub.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'https://grpc.cosmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'cosmos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-cosmoshub.cosmos-spaces.cloud:3910',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'cosmoshub.grpc.kjnodes.com:11390',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-cosmos-hub-01.stakeflow.io:9090',
        provider: 'Stakeflow'
      },
      {
        address: 'grpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'cosmos-grpc.w3coins.io:14990',
        provider: 'w3coins'
      },
      {
        address: 'grpc-cosmoshub.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'cosmos-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan'
      },
      {
        address: 'cosmoshub-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://grpc-cosmos.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'cosmos-grpc.stakeandrelax.net:15090',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cosmos',
      txPage: 'https://www.mintscan.io/cosmos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/cosmos/accounts/${accountAddress}',
      validatorPage: 'https://www.mintscan.io/cosmos/validators/${validatorAddress}',
      proposalPage: 'https://www.mintscan.io/cosmos/proposals/${proposalId}',
      blockPage: 'https://www.mintscan.io/cosmos/blocks/${blockHeight}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cosmoshub',
      txPage: 'https://ezstaking.app/cosmoshub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cosmoshub/account/${accountAddress}',
      validatorPage: 'https://ezstaking.app/cosmoshub/validators/${validatorAddress}',
      proposalPage: 'https://ezstaking.app/cosmoshub/proposals/${proposalId}',
      blockPage: 'https://ezstaking.app/cosmoshub/blocks/${blockHeight}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cosmos',
      txPage: 'https://ping.pub/cosmos/tx/${txHash}',
      accountPage: 'https://ping.pub/cosmos/account/${accountAddress}',
      validatorPage: 'https://ping.pub/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://ping.pub/cosmos/gov/${proposalId}',
      blockPage: 'https://ping.pub/cosmos/block/${blockHeight}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com',
      txPage: 'https://atomscan.com/transactions/${txHash}',
      accountPage: 'https://atomscan.com/accounts/${accountAddress}',
      validatorPage: 'https://atomscan.com/validators/${validatorAddress}',
      proposalPage: 'https://atomscan.com/votes/${proposalId}',
      blockPage: 'https://atomscan.com/blocks/${blockHeight}'
    },
    {
      kind: 'unichain',
      url: 'https://unicha.in/cosmos',
      txPage: 'https://unicha.in/cosmos/transaction/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cosmoshub',
      txPage: 'https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/cosmoshub/account/${accountAddress}',
      validatorPage: 'https://explorer.tcnetwork.io/cosmoshub/validator/${validatorAddress}',
      proposalPage: 'https://explorer.tcnetwork.io/cosmoshub/proposal/${proposalId}',
      blockPage: 'https://explorer.tcnetwork.io/cosmoshub/block/${blockHeight}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/cosmos',
      accountPage: 'https://stakeflow.io/cosmos/accounts/${accountAddress}',
      validatorPage: 'https://stakeflow.io/cosmos/validators/${validatorAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/cosmos'
    },
    {
      kind: 'Inbloc',
      url: 'https://inbloc.org',
      txPage: 'https://inbloc.org/transactions/${txHash}',
      accountPage: 'https://inbloc.org/account/${accountAddress}',
      validatorPage: 'https://inbloc.org/cosmos/validator/${validatorAddress}',
      proposalPage: 'https://inbloc.org/cosmos/proposal/${proposalId}',
      blockPage: 'https://inbloc.org/cosmos/blocks/${blockHeight}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/cosmos',
      txPage: 'https://mainnet.whispernode.com/cosmos/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/cosmos/account/${accountAddress}',
      validatorPage: 'https://mainnet.whispernode.com/cosmos/staking/${validatorAddress}',
      proposalPage: 'https://mainnet.whispernode.com/cosmos/gov/${proposalId}',
      blockPage: 'https://mainnet.whispernode.com/cosmos/block/${blockHeight}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      theme: {
        primaryColorHex: '#272d45'
      }
    }]
};
export default info;