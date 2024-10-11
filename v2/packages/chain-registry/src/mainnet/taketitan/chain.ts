import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'taketitan',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://taketitan.com/',
  prettyName: 'TakeTitan',
  chainType: 'cosmos',
  chainId: 'taketitan-12',
  bech32Prefix: 'taketitan',
  daemonName: 'ttnc',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 1179993421,
  staking: {
    stakingTokens: [{
        denom: 'ttnc'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'ttnc',
        lowGasPrice: 0.000001,
        averageGasPrice: 0.000005,
        highGasPrice: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcpttnc.taketitan.com',
        provider: 'taketitan'
      }],
    rest: [{
        address: 'https://lcdttnc.taketitan.com',
        provider: 'taketitan'
      }],
    grpc: [{
        address: 'https://grcpttnc.taketitan.com:8090',
        provider: 'taketitan'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://scan.taketitan.com/taketitan',
      txPage: 'https://scan.taketitan.com/taketitan/tx/${txHash}',
      accountPage: 'https://scan.taketitan.com/taketitan/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg',
      theme: {
        primaryColorHex: '#41918c'
      }
    }]
};
export default info;