import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cifer',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cifer.ai/',
  prettyName: 'Cifer',
  chainType: 'cosmos',
  chainId: 'cifer-2',
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
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    genesis: {
      genesisUrl: 'https://rpcmainnet.cifer.ai/genesis'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
  },
  apis: {
    rpc: [{
        address: 'http://34.128.114.243:26657',
        provider: 'Cifer'
      }],
    rest: [{
        address: 'https://api.cifer.ai',
        provider: 'Cifer'
      }],
    grpc: [{
        address: 'http://34.128.114.243:9090',
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