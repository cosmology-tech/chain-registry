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