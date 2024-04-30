import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thorchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://thorchain.org/',
  prettyName: 'THORChain',
  chainId: 'thorchain-mainnet-v1',
  bech32Prefix: 'thor',
  daemonName: 'thord',
  nodeHome: '$HOME/.thornode',
  slip44: 931,
  codebase: {

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