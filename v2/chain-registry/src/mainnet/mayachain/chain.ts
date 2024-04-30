import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mayachain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mayaprotocol.com/',
  prettyName: 'Maya Protocol',
  chainId: 'mayachain-mainnet-v1',
  bech32Prefix: 'maya',
  daemonName: 'mayanode',
  nodeHome: '$HOME/.mayanode',
  slip44: 931,
  codebase: {

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