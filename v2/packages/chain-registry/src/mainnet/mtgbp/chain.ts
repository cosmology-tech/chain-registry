import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mtgbp',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mtgbp.com/',
  prettyName: 'mtgbp',
  chainType: 'cosmos',
  chainId: 'mtgbp-1',
  bech32Prefix: 'mtgbp',
  daemonName: 'mtgbp',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 1179993441,
  staking: {
    stakingTokens: [{
        denom: 'mtgbp'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'mtgbp',
        lowGasPrice: 0.000001,
        averageGasPrice: 0.000005,
        highGasPrice: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcp.mtgbp.com',
        provider: 'mtgbp'
      }],
    rest: [{
        address: 'https://lcd.mtgbp.com',
        provider: 'mtgbp'
      }],
    grpc: [{
        address: 'https://grcp.mtgbp.com:4090',
        provider: 'mtgbp'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.mtgbp.com/mtgbp',
      txPage: 'https://blockexplorer.mtgbp.com/mtgbp/tx/${txHash}',
      accountPage: 'https://blockexplorer.mtgbp.com/mtgbp/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg',
      theme: {
        primaryColorHex: '#e8692b'
      }
    }]
};
export default info;