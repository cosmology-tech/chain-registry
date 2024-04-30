import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mises',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mises.site',
  prettyName: 'Mises',
  chainId: 'mainnet',
  bech32Prefix: 'mises',
  nodeHome: '$HOME/.misestm',
  daemonName: 'misestmd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umis',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umis'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.gw.mises.site:443',
        provider: 'Mises-1'
      }, {
        address: 'https://e2.mises.site:443',
        provider: 'Mises-3'
      }],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'Mises-GW Explorer',
      url: 'https://gw.mises.site',
      txPage: 'https://gw.mises.site/tx/${txHash}'
    }, {
      kind: 'Jambulmerah ping.pub based',
      url: 'https://explorer.jambulmerah.dev/mises',
      txPage: 'https://explorer.jambulmerah.dev/mises/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
    }]
};
export default info;