import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'thorchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://thorchain.org/',
  pretty_name: 'THORChain',
  chain_type: 'cosmos',
  chain_id: 'thorchain-1',
  bech32_prefix: 'thor',
  daemon_name: 'thord',
  node_home: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    git_repo: 'https://gitlab.com/thorchain/thornode',
    recommended_version: 'v2.135.0',
    compatible_versions: ['v2.135.0'],
    genesis: {
      genesis_url: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
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
      tx_page: 'https://thorchain.net/#/txs/${txHash}'
    }, {
      kind: 'viewblock',
      url: 'https://viewblock.io/thorchain',
      tx_page: 'https://viewblock.io/thorchain/tx/${txHash}'
    }]
};
export default info;