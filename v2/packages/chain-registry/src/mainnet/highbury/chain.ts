import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'highbury',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.fury.black/',
  prettyName: 'Highbury',
  chainId: 'highbury_710-1',
  bech32Prefix: 'fury',
  daemonName: 'fury',
  nodeHome: '$HOME/.fury',
  slip44: 459,
  alternativeSlip44s: [710],
  fees: {
    feeTokens: [{
        denom: 'ufury',
        lowGasPrice: 0.05,
        averageGasPrice: 0.1,
        highGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
  },
  apis: {
    rpc: [{
        address: 'https://gridiron.furya.io',
        provider: 'fanfury'
      }],
    rest: [{
        address: 'https://api-mainnet.furya.io/',
        provider: 'fanfury'
      }],
    grpc: [{
        address: 'api-mainnet.furya.io:9090',
        provider: 'fanfury'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rest.furya.io/',
        provider: 'fanfury'
      }]
  },
  explorers: [{
      kind: 'pingpub',
      url: 'https://explorer.furya.wtf/',
      txPage: 'https://www.explorer.furya.wtf//txs/${txHash}',
      accountPage: 'https://explorer.furya.wtf//account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
    }]
};
export default info;