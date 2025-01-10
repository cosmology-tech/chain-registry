import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'uniontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Union Testnet',
  chainType: 'cosmos',
  chainId: 'union-testnet-9',
  bech32Prefix: 'union',
  daemonName: 'uniond',
  nodeHome: '$HOME/.uniond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'muno',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'muno'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet-9.union.build',
        provider: 'union'
      }],
    rest: [
      {
        address: 'https://rest.testnet-9.union.build',
        provider: 'union'
      },
      {
        address: 'https://union-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-testnet-union.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://union-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [{
        address: 'grpc.testnet-9.union.build',
        provider: 'union'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.testnet-9.union.build/union',
      txPage: 'https://explorer.testnet-9.union.build/union/tx/${txHash}',
      accountPage: 'https://explorer.testnet-9.union.build/union/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
    }]
};
export default info;