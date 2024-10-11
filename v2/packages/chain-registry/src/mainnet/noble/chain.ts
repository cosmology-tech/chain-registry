import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'noble',
  chainType: 'cosmos',
  chainId: 'noble-1',
  website: 'https://nobleassets.xyz/',
  prettyName: 'Noble',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'noble',
  daemonName: 'nobled',
  nodeHome: '$HOME/.noble',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdc',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.1,
        highGasPrice: 0.2
      }, {
        denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/strangelove-ventures/noble',
    recommendedVersion: 'v6.0.0',
    compatibleVersions: ['v6.0.0'],
    cosmosSdkVersion: 'noble-assets/cosmos-sdk v0.45.16-send-restrictions',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    cosmwasmEnabled: false,
    genesis: {
      name: 'v1.0.0',
      genesisUrl: 'https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/mainnet/noble-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.0',
        tag: 'v1.0.0',
        height: 0,
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        cosmosSdkVersion: 'v0.45',
        consensus: {
          type: 'tendermint',
          version: 'v0.34'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'neon',
        sdk: {
          type: 'cosmos',
          version: 'v0.45'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v3.4.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'neon',
        tag: 'v2.0.1',
        height: 119000,
        recommendedVersion: 'v2.0.1',
        compatibleVersions: ['v2.0.1', 'v2.0.0'],
        cosmosSdkVersion: 'v0.45',
        consensus: {
          type: 'tendermint',
          version: 'v0.34'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'radon',
        sdk: {
          type: 'cosmos',
          version: 'v0.45'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v3.4.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'radon',
        tag: 'v3.0.0',
        height: 1296000,
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        cosmosSdkVersion: 'v0.45.15',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'v3.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.15'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v3.4.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v3.1.0',
        tag: 'v3.1.0',
        height: 2672000,
        recommendedVersion: 'v3.1.0',
        compatibleVersions: ['v3.1.0'],
        cosmosSdkVersion: 'v0.45.15',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'argon',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.15'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v3.4.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'argon',
        tag: 'v4.0.3',
        height: 3408600,
        recommendedVersion: 'v4.0.3',
        compatibleVersions: ['v4.0.3'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'fusion',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'fusion',
        tag: 'v4.1.3',
        height: 5797500,
        recommendedVersion: 'v4.1.3',
        compatibleVersions: ['v4.1.3'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'krypton',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v4.5.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'krypton',
        tag: 'v5.0.0',
        height: 7947000,
        recommendedVersion: 'v5.0.0',
        compatibleVersions: ['v5.0.0'],
        cosmosSdkVersion: 'noble-assets/cosmos-sdk v0.45.16-send-restrictions',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: 'xenon',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/noble-assets/cosmos-sdk',
          version: 'v0.45.16',
          tag: 'v0.45.16-send-restrictions'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v4.6.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'xenon',
        tag: 'v6.0.0',
        height: 11110000,
        recommendedVersion: 'v6.0.0',
        compatibleVersions: ['v6.0.0'],
        cosmosSdkVersion: 'noble-assets/cosmos-sdk v0.45.16-send-restrictions',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        cosmwasmEnabled: false,
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/noble-assets/cosmos-sdk',
          version: 'v0.45.16',
          tag: 'v0.45.16-send-restrictions'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v4.6.0',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/noble-assets/cosmos-sdk',
      version: 'v0.45.16',
      tag: 'v0.45.16-send-restrictions'
    },
    ibc: {
      type: 'go',
      version: 'v4.6.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
  },
  description: 'The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.',
  apis: {
    rpc: [{
        address: 'https://noble-rpc.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://rpc.lavenderfive.com:443/noble',
        provider: 'Lavender.Five Nodes 🐝'
      }],
    rest: [{
        address: 'https://noble-api.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://rest.lavenderfive.com:443/noble',
        provider: 'Lavender.Five Nodes 🐝'
      }],
    grpc: [{
        address: 'noble-grpc.polkachu.com:21590',
        provider: 'polkachu'
      }, {
        address: 'noble.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/noble',
      txPage: 'https://www.mintscan.io/noble/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/noble/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/noble',
      txPage: 'https://ezstaking.app/noble/txs/${txHash}',
      accountPage: 'https://ezstaking.app/noble/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/noble',
      accountPage: 'https://stakeflow.io/noble/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
      theme: {
        primaryColorHex: '#a8bbfb'
      }
    }]
};
export default info;