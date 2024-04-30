import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'galaxy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://galaxychain.zone/',
  prettyName: 'Galaxy',
  chainId: 'galaxy-1',
  bech32Prefix: 'galaxy',
  daemonName: 'galaxyd',
  nodeHome: '$HOME/.galaxy',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uglx',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uglx'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/Galaxy',
      txPage: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
    }]
};
export default info;