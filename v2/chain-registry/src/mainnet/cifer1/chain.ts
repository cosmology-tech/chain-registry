import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cifer1',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://cifer.ai/',
  prettyName: 'Cifer',
  chainId: 'cifer-1',
  bech32Prefix: 'cife',
  daemonName: 'ciferd',
  nodeHome: '$HOME/.ciferd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucif',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 1,
        averageGasPrice: 5,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucif'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cif_node.cifer.ai/',
        provider: 'Cifer'
      }],
    rest: [{
        address: 'https://api.cifer.ai',
        provider: 'Cifer'
      }],
    grpc: [{
        address: 'http://grpc.cifer.ai',
        provider: 'Cifer'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.cifer.ai/',
      txPage: 'https://explorer.cifer.ai/transactions/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
    }]
};
export default info;