import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  networkType: 'mainnet',
  prettyName: 'XPLA',
  chainType: 'cosmos',
  chainId: 'dimension_37-1',
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
    recommendedVersion: 'v1.4.0',
    compatibleVersions: ['v1.4.0'],
    cosmosSdkVersion: 'v0.47.13-xpla',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    cosmwasmVersion: 'v0.46.0',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json'
    },
    versions: [
      {
        name: 'evm',
        recommendedVersion: 'v1.2.1',
        compatibleVersions: ['v1.2.1'],
        cosmosSdkVersion: '0.45.9',
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        cosmwasmVersion: '0.28.0',
        nextVersionName: 'Volunteer',
        sdk: {
          type: 'cosmos',
          version: '0.45.9'
        },
        cosmwasm: {
          version: '0.28.0'
        }
      },
      {
        name: 'volunteer',
        recommendedVersion: 'v1.3.0',
        compatibleVersions: ['v1.3.0'],
        cosmosSdkVersion: '0.45.16',
        consensus: {
          type: 'cometbft',
          version: '0.34.27'
        },
        cosmwasmVersion: '0.33.0',
        nextVersionName: 'v1_4',
        sdk: {
          type: 'cosmos',
          version: '0.45.16'
        },
        cosmwasm: {
          version: '0.33.0'
        }
      },
      {
        name: 'v1_4',
        recommendedVersion: 'v1.4.0',
        compatibleVersions: ['v1.4.0'],
        cosmosSdkVersion: 'xpladev/cosmos-sdk v0.45.20-xpla',
        consensus: {
          type: 'cometbft',
          version: '0.34.29'
        },
        cosmwasmVersion: 'v0.33.0',
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
        proposal: 65,
        height: 10085200,
        cosmosSdkVersion: 'v0.47.10-xpla',
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        cosmwasmVersion: 'v0.45.0',
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
        proposal: 66,
        height: 10491710,
        cosmosSdkVersion: 'v0.47.13-xpla',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        cosmwasmVersion: 'v0.46.0',
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/xpladev/cosmos-sdk',
          version: 'v0.47.13',
          tag: 'v0.47.13-xplaa'
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
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD'
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [{
        address: 'xpla-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    evmHttpJsonrpc: [{
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }, {
        address: 'https://xpla-evm-rpc.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io',
      txPage: 'https://explorer.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      txPage: 'https://finder.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      txPage: 'https://explorer.stavr.tech/Xpla-Mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      txPage: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/xpla/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      txPage: 'https://ezstaking.app/xpla/txs/${txHash}',
      accountPage: 'https://ezstaking.app/xpla/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primaryColorHex: '#04b4fc'
      }
    }]
};
export default info;