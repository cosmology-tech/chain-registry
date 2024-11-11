import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xplatestnet',
  status: 'live',
  website: 'https://xpla.io',
  networkType: 'testnet',
  prettyName: 'XPLA',
  chainType: 'cosmos',
  chainId: 'cube_47-5',
  bech32Prefix: 'xpla',
  daemonName: 'xplad',
  nodeHome: '$HOME/.xpla',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axpla',
        fixedMinGasPrice: 850000000000,
        lowGasPrice: 850000000000,
        averageGasPrice: 1147500000000,
        highGasPrice: 1487500000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xpladev/xpla',
    recommendedVersion: 'v1.6.0',
    compatibleVersions: ['v1.6.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://github.com/xpladev/testnets/blob/main/cube_47-5/genesis.json'
    },
    versions: [
      {
        name: '1_0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        height: 0,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20'
        },
        nextVersionName: 'add-reward',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cosmos/cosmos-sdk',
          version: '0.45.5',
          tag: 'v0.45.5'
        },
        cosmwasm: {
          version: 'v0.28.0'
        },
        ibc: {
          type: 'go',
          version: 'v3.1.1'
        }
      },
      {
        name: 'add-reward',
        recommendedVersion: 'v1.1.0-cube',
        compatibleVersions: ['v1.1.0-cube'],
        proposal: 1,
        height: 12700,
        consensus: {
          type: 'tendermint',
          version: 'v0.34.20'
        },
        nextVersionName: 'evm',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/cosmos/cosmos-sdk',
          version: '0.45.5',
          tag: 'v0.45.5'
        },
        cosmwasm: {
          version: 'v0.28.0'
        },
        ibc: {
          type: 'go',
          version: 'v3.1.1'
        }
      },
      {
        name: 'evm',
        recommendedVersion: 'v1.2.1',
        compatibleVersions: ['v1.2.1'],
        proposal: 37,
        height: 2184000,
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        nextVersionName: 'Volunteer',
        sdk: {
          type: 'cosmos',
          version: '0.45.9'
        },
        cosmwasm: {
          version: '0.28.0'
        },
        ibc: {
          type: 'go',
          version: 'v3.2.0'
        }
      },
      {
        name: 'volunteer',
        recommendedVersion: 'v1.3.0-cube',
        compatibleVersions: ['v1.3.0-cube'],
        proposal: 63,
        height: 4845600,
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        nextVersionName: 'v1_4',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        cosmwasm: {
          version: 'v0.33.0'
        },
        ibc: {
          type: 'go',
          version: 'v3.1.1'
        }
      },
      {
        name: 'v1_4',
        recommendedVersion: 'v1.4.0',
        compatibleVersions: ['v1.4.0'],
        proposal: 110,
        height: 7516478,
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        nextVersionName: 'v1_5',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/xpladev/cosmos-sdk',
          version: 'v0.45.20',
          tag: 'v0.45.20-xpla'
        },
        cosmwasm: {
          version: 'v0.33.0'
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1'
        }
      },
      {
        name: 'v1_5',
        recommendedVersion: 'v1.5.0',
        compatibleVersions: ['v1.5.0'],
        proposal: 112,
        height: 9229980,
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        nextVersionName: 'v1_6',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/xpladev/cosmos-sdk',
          version: 'v0.47.10',
          tag: 'v0.47.10-xpla'
        },
        cosmwasm: {
          version: 'v0.45.0'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: 'v1_6',
        recommendedVersion: 'v1.6.0',
        compatibleVersions: ['v1.6.0'],
        proposal: 146,
        height: 10397730,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/xpladev/cosmos-sdk',
          version: 'v0.47.13',
          tag: 'v0.47.13-xpla'
        },
        cosmwasm: {
          version: 'v0.46.0'
        },
        ibc: {
          type: 'go',
          version: 'v7.7.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.47.13',
      tag: 'v0.47.13-xpla'
    },
    ibc: {
      type: 'go',
      version: 'v7.7.0'
    },
    cosmwasm: {
      version: 'v0.46.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cube-rpc.xpla.dev',
        provider: 'Holdings'
      }],
    rest: [{
        address: 'https://cube-lcd.xpla.dev',
        provider: 'Holdings'
      }],
    evmHttpJsonrpc: [{
        address: 'https://cube-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }]
  },
  explorers: [{
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io/testnet',
      txPage: 'https://explorer.xpla.io/testnet/mainnet/tx/${txHash}'
    }, {
      kind: 'finder',
      url: 'https://finder.xpla.io/testnet',
      txPage: 'https://finder.xpla.io/testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primaryColorHex: '#04b4fc'
      }
    }]
};
export default info;