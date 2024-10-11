import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'pylons',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://pylons.tech',
  prettyName: 'Pylons',
  chainType: 'cosmos',
  chainId: 'pylons-mainnet-1',
  bech32Prefix: 'pylo',
  nodeHome: '$HOME/.pylons',
  daemonName: 'pylonsd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubedrock',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.5,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubedrock'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Pylons-tech/pylons.git',
    recommendedVersion: 'v1.1.4',
    compatibleVersions: ['v1.1.4'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Pylons-tech/pylons/main/networks/pylons-mainnet-1/genesis.json'
    },
    versions: [{
        name: 'v1.1.4',
        recommendedVersion: 'v1.1.4',
        compatibleVersions: ['v1.1.4']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.nodejumper.io:443/pylons',
        provider: 'Nodejumper.io'
      }, {
        address: 'https:/pylons-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }],
    rest: [{
        address: 'https://rest.nodejumper.io/pylons',
        provider: 'Nodejumper.io'
      }, {
        address: 'https://pylons-api.noders.services',
        provider: '[NODERS]TEAM'
      }]
  },
  explorers: [{
      kind: 'Nodes.guru',
      url: 'https://pylons.explorers.guru/',
      txPage: 'https://pylons.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
      theme: {
        primaryColorHex: '#ec4424'
      }
    }]
};
export default info;