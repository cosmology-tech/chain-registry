import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mayachain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mayaprotocol.com/',
  prettyName: 'Maya Protocol',
  chainType: 'cosmos',
  chainId: 'mayachain-mainnet-v1',
  bech32Prefix: 'maya',
  daemonName: 'mayanode',
  nodeHome: '$HOME/.mayanode',
  slip44: 931,
  codebase: {
    gitRepo: 'https://gitlab.com/mayachain/mayanode',
    recommendedVersion: 'V1.103.3',
    compatibleVersions: ['V1.103.3'],
    genesis: {
      genesisUrl: 'https://tendermint.mayachain.info/genesis'
    },
    versions: [{
        name: 'V1.103.3',
        recommendedVersion: 'V1.103.3',
        compatibleVersions: ['V1.103.3']
      }]
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
      txPage: 'https://www.explorer.mayachain.info/#/txs/${txHash}'
    }]
};
export default info;