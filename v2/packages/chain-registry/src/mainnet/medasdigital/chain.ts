import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'medasdigital',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://medas-digital.io/',
  prettyName: 'Medas Digital Network',
  chainType: 'cosmos',
  chainId: 'medasdigital-1',
  bech32Prefix: 'medas',
  daemonName: 'medasdigitald',
  nodeHome: '$HOME/.medasdigital',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'umedas',
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.4
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umedas'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/oxygene76/medasdigital/',
    recommendedVersion: 'v0.97',
    compatibleVersions: ['v0.94'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/oxygene76/medasdigital/main/networks/mainnet/genesis.json'
    },
    versions: [{
        name: 'v0.94',
        recommendedVersion: 'v0.94',
        compatibleVersions: ['v0.94']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.medas-digital.io:26657/',
        provider: 'Neptun Validator'
      }],
    rest: [{
        address: 'https://lcd.medas-digital.io:1317/',
        provider: 'Neptun Validator'
      }],
    grpc: [{
        address: 'grpc.medas-digital.io:9090',
        provider: 'Neptun Validator'
      }]
  },
  explorers: [{
      kind: 'BigDipper',
      url: 'https://explorer.medas-digital.io:3100/medasdigital',
      txPage: 'https://explorer.medas-digital.io:3100/medasdigital/transactions/${txHash}',
      accountPage: 'explorer.medas-digital.io:3100/medasdigital/accounts/${accountAddress}'
    }, {
      kind: 'atomscan',
      url: 'https://atomscan.com/frontier/medasdigital',
      txPage: 'https://atomscan.com/frontier/medasdigital/transactions/${txHash}',
      accountPage: 'https://atomscan.com/frontier/medasdigital/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg',
      theme: {
        primaryColorHex: '#147ccc'
      }
    }]
};
export default info;