import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qwoyntestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://qwoyn.studio/',
  prettyName: 'Qwoyn',
  chainId: 'earendel-1',
  bech32Prefix: 'qwoyn',
  daemonName: 'qwoynd',
  nodeHome: '$HOME/.qwoynd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqwoyn'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqwoyn'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47.3'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }],
    grpc: [{
        address: 'http://66.42.74.12:9090',
        provider: 'Qwoyn Studios'
      }],
    rest: [{
        address: 'https://testnet-api.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }]
  },
  explorers: [{
      kind: 'pingfork',
      url: 'https://explorer.theamsolutions.info/qwoyn-testnet/',
      txPage: 'https://explorer.theamsolutions.info/qwoyn-testnet/tx/${txHash}',
      accountPage: 'https://explorer.theamsolutions.info/qwoyn-testnet/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
    }]
};
export default info;