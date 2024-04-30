import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'panacea',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://medibloc.com/en/',
  prettyName: 'Medibloc',
  chainId: 'panacea-3',
  bech32Prefix: 'panacea',
  daemonName: 'panacead',
  nodeHome: '$HOME/.panacead',
  keyAlgos: ['secp256k1'],
  slip44: 371,
  fees: {
    feeTokens: [{
        denom: 'umed',
        fixedMinGasPrice: 5,
        lowGasPrice: 5,
        averageGasPrice: 7,
        highGasPrice: 9
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umed'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.gopanacea.org',
        provider: 'medibloc'
      }, {
        address: 'https://panacea-rpc.staketab.org:443',
        provider: 'Staketab'
      }],
    rest: [{
        address: 'https://api.gopanacea.org',
        provider: 'medibloc'
      }, {
        address: 'https://panacea-rest.staketab.org',
        provider: 'Staketab'
      }],
    grpc: [{
        address: 'services.staketab.com:9400',
        provider: 'Staketab'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/medibloc',
      txPage: 'https://www.mintscan.io/medibloc/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/medibloc/accounts/${accountAddress}'
    }, {
      kind: 'bigdipper',
      url: 'https://explorer.gopanacea.org',
      txPage: 'https://explorer.gopanacea.org/transactions/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
    }]
};
export default info;