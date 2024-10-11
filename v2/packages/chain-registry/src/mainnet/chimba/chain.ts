import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chimba',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://chimba.ooo/',
  prettyName: 'Chimba',
  chainType: 'cosmos',
  chainId: 'chimba',
  bech32Prefix: 'chimba',
  daemonName: 'chimbad',
  nodeHome: '$HOME/.chimbad',
  fees: {
    feeTokens: [{
        denom: 'ucmba',
        fixedMinGasPrice: 0.25,
        lowGasPrice: 1,
        averageGasPrice: 5,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucmba'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ChimbaBlockchain/chimba',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://rpc.mainnet.chimba.ooo/genesis'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.chimba.ooo',
        provider: 'chimba'
      }],
    rest: [{
        address: 'https://mainnet.chimba.ooo',
        provider: 'chimba'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.chimba.ooo/',
      txPage: 'https://explorer.chimba.ooo/transactions/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg',
      theme: {
        primaryColorHex: '#5454a4'
      }
    }],
  slip44: 118
};
export default info;