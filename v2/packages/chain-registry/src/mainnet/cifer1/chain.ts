import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cifer1',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://cifer.ai/',
  prettyName: 'Cifer',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/cifer-ai/cifer',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://rpcmainnet.cifer.ai/genesis'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0']
      }]
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
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
      theme: {
        primaryColorHex: '#af49b7'
      }
    }]
};
export default info;