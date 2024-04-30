import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'loyal',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.joinloyal.com/',
  prettyName: 'Loyal',
  chainId: 'loyal-main-02',
  bech32Prefix: 'loyal',
  daemonName: 'loyald',
  nodeHome: '$HOME/.loyal',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulyl',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulyl'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-main.joinloyal.io/'
      }, {
        address: 'https://loyal-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://lcd-main.joinloyal.io/'
      }, {
        address: 'https://loyal-api.polkachu.com',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'https://grpc.loyal.nodestake.top',
        provider: 'NodeStake'
      }]
  },
  explorers: [
    {
      kind: 'Loyal explorer',
      url: 'https://pingpub.joinloyal.io/loyal',
      txPage: 'https://pingpub.joinloyal.io/loyal/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/loyal',
      txPage: 'https://explorer.tcnetwork.io/loyal/transaction/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/loyal',
      txPage: 'https://explorer.nodestake.top/loyal/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
    }]
};
export default info;