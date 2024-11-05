import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sunrise',
  status: 'upcoming',
  networkType: 'mainnet',
  website: 'https://sunriselayer.io/',
  prettyName: 'Sunrise',
  chainType: 'cosmos',
  chainId: 'sunrise-1',
  bech32Prefix: 'sunrise',
  daemonName: 'sunrised',
  nodeHome: '$HOME/.sunrise',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'urise',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvrise'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/sunriselayer/sunrise',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.1.1/sunrised'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.0.5',
      repo: 'https://github.com/sunriselayer/sunrise-core',
      tag: 'v0.0.5-cmt-v0.38.2'
    },
    versions: [
      {
        name: 'v0.0.7',
        recommendedVersion: 'v0.0.7',
        compatibleVersions: ['v0.0.7'],
        binaries: {
          "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.0.7/sunrised'
        },
        consensus: {
          type: 'cometbft',
          version: 'v0.0.5',
          repo: 'https://github.com/sunriselayer/sunrise-core',
          tag: 'v0.0.5-cmt-v0.38.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.50.2'
        },
        ibc: {
          type: 'go',
          version: '8.0.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v0.0.8',
        recommendedVersion: 'v0.0.8',
        compatibleVersions: ['v0.0.8'],
        binaries: {
          "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.0.8/sunrised'
        },
        consensus: {
          type: 'cometbft',
          version: 'v0.0.5',
          repo: 'https://github.com/sunriselayer/sunrise-core',
          tag: 'v0.0.5-cmt-v0.38.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.50.2'
        },
        ibc: {
          type: 'go',
          version: '8.0.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v0.1.1',
        recommendedVersion: 'v0.1.1',
        compatibleVersions: ['v0.1.1'],
        binaries: {
          "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.1.1/sunrised'
        },
        consensus: {
          type: 'cometbft',
          version: 'v0.0.5',
          repo: 'https://github.com/sunriselayer/sunrise-core',
          tag: 'v0.0.5-cmt-v0.38.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.50.2'
        },
        ibc: {
          type: 'go',
          version: '8.0.0',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.50.2'
    },
    ibc: {
      type: 'go',
      version: '8.0.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
      theme: {
        primaryColorHex: '#ecbc64'
      }
    }]
};
export default info;