import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shareledger',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.sharering.network/',
  prettyName: 'Shareledger',
  chainId: 'ShareRing-VoyagerNet',
  bech32Prefix: 'shareledger',
  daemonName: 'shareledger',
  nodeHome: '$HOME/.shareledger',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nshr',
        fixedMinGasPrice: 0,
        lowGasPrice: 2000,
        averageGasPrice: 3000,
        highGasPrice: 4000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nshr'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.27'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.explorer.shareri.ng',
        provider: 'ShareRing'
      }],
    rest: [{
        address: 'https://lcd.explorer.shareri.ng/',
        provider: 'ShareRing'
      }],
    grpc: [{
        address: 'rpc.explorer.shareri.ng:443',
        provider: 'ShareRing'
      }]
  },
  explorers: [{
      kind: 'big dipper',
      url: 'https://explorer.shareri.ng',
      txPage: 'https://explorer.shareri.ng/transactions/${txHash}',
      accountPage: 'https://explorer.shareri.ng/accounts/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
  },
  keywords: ['id'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
    }]
};
export default info;