import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'likecointestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'LikeCoin Testnet',
  chainId: 'likecoin-public-testnet-5',
  bech32Prefix: 'like',
  daemonName: 'liked',
  nodeHome: '$HOME/.liked',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nanoekil',
        fixedMinGasPrice: 1000,
        lowGasPrice: 1000,
        averageGasPrice: 10000,
        highGasPrice: 1000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nanoekil'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.46',
    cosmwasmEnabled: false
  },
  apis: {
    rpc: [{
        address: 'https://node.testnet.like.co/rpc/',
        provider: 'like.co'
      }],
    rest: [{
        address: 'https://node.testnet.like.co/',
        provider: 'like.co'
      }],
    grpc: [{
        address: 'https://node.testnet-grpc.like.co/',
        provider: 'like.co'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://testnet.bigdipper.live/likecoin',
      txPage: 'https://testnet.bigdipper.live/likecoin/transactions/${txHash}',
      accountPage: 'https://testnet.bigdipper.live/likecoin/accounts/${accountAddress}'
    }, {
      kind: 'lunie-ng',
      url: 'https://likecoin-public-testnet-5.netlify.app/'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
  },
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
    }]
};
export default info;