import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mayachain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://mayaprotocol.com/',
  pretty_name: 'Maya Protocol',
  chain_type: 'cosmos',
  chain_id: 'mayachain-mainnet-v1',
  bech32_prefix: 'maya',
  daemon_name: 'mayanode',
  node_home: '$HOME/.mayanode',
  slip44: 931,
  codebase: {
    git_repo: 'https://gitlab.com/mayachain/mayanode',
    recommended_version: 'V1.103.3',
    compatible_versions: ['V1.103.3'],
    genesis: {
      genesis_url: 'https://tendermint.mayachain.info/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://tendermint.mayachain.info',
        provider: 'tendermint'
      }],
    rest: [{
        address: 'https://mayanode.mayachain.info',
        provider: 'mayanode'
      }]
  },
  explorers: [{
      kind: 'Maya Protocol explorer',
      url: 'https://www.explorer.mayachain.info',
      tx_page: 'https://www.explorer.mayachain.info/#/txs/${txHash}'
    }]
};
export default info;