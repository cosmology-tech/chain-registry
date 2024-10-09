import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dhealth',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://dhealth.com/',
  prettyName: 'dHealth',
  chainId: 'dhealth',
  bech32Prefix: 'dh',
  daemonName: 'dhealthd',
  nodeHome: '$HOME/.dhealth',
  keyAlgos: ['secp256k1'],
  slip44: 10111,
  fees: {
    feeTokens: [{
        denom: 'udhp',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udhp'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'cosmos/cosmos-sdk v0.47.4',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.41.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.dhealth.com',
        provider: 'dhealth'
      }, {
        address: 'https://rpc.dhealth.nodestake.org',
        provider: 'NodeStake'
      }],
    rest: [{
        address: 'https://lcd.dhealth.com',
        provider: 'dhealth'
      }, {
        address: 'https://api.dhealth.nodestake.org',
        provider: 'NodeStake'
      }],
    grpc: [{
        address: 'https://grpc.dhealth.com:443',
        provider: 'dhealth'
      }, {
        address: 'https://grpc.dhealth.nodestake.org:443',
        provider: 'NodeStake'
      }]
  },
  explorers: [{
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      txPage: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/dhealth/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
    }]
};
export default info;