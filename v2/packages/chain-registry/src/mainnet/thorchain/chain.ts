import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thorchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://thorchain.org/',
  prettyName: 'THORChain',
  chainType: 'cosmos',
  chainId: 'thorchain-1',
  bech32Prefix: 'thor',
  daemonName: 'thord',
  nodeHome: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    gitRepo: 'https://gitlab.com/thorchain/thornode',
    recommendedVersion: 'v2.135.0',
    compatibleVersions: ['v2.135.0'],
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
    },
    versions: [
      {
        name: 'v1.132.0',
        recommendedVersion: 'v1.132.0',
        compatibleVersions: ['v1.132.0'],
        sdk: {
          type: 'cosmos',
          version: 'v0.45.1'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.3'
        }
      },
      {
        name: 'v1.133.0',
        recommendedVersion: 'v1.133.0',
        compatibleVersions: ['v1.133.0'],
        sdk: {
          type: 'cosmos',
          version: 'v0.45.1'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.3'
        }
      },
      {
        name: 'v1.134.0',
        recommendedVersion: 'v1.134.0',
        compatibleVersions: ['v1.134.0'],
        sdk: {
          type: 'cosmos',
          version: 'v0.45.1'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.3'
        }
      },
      {
        name: 'v1.134.1',
        recommendedVersion: 'v1.134.1',
        compatibleVersions: ['v1.134.1'],
        sdk: {
          type: 'cosmos',
          version: 'v0.45.1'
        },
        ibc: {
          type: 'go',
          version: 'v2.0.3'
        }
      },
      {
        name: 'v2.135.0',
        recommendedVersion: 'v2.135.0',
        compatibleVersions: ['v2.135.0'],
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [],
    rest: []
  },
  explorers: [{
      kind: 'THORChain explorer',
      url: 'https://thorchain.net',
      txPage: 'https://thorchain.net/#/txs/${txHash}'
    }, {
      kind: 'viewblock',
      url: 'https://viewblock.io/thorchain',
      txPage: 'https://viewblock.io/thorchain/tx/${txHash}'
    }]
};
export default info;