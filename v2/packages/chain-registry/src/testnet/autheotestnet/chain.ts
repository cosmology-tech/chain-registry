import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'autheotestnet',
  status: 'live',
  website: 'https://autheo.com/',
  networkType: 'testnet',
  chainType: 'cosmos',
  prettyName: 'Autheo',
  chainId: 'autheo_785-1',
  bech32Prefix: 'aauth',
  daemonName: 'autheod',
  nodeHome: '$HOME/.autheod',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aauth',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aauth'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://code.zeeve.net/client-projects/autheo',
    genesis: {
      name: 'v3',
      genesisUrl: 'https://code.zeeve.net/client-projects/autheo/-/blob/autheo-node1/autheo-node1/config/genesis.json'
    },
    recommendedVersion: 'v1.3.0',
    compatibleVersions: ['v1.3.0'],
    binaries: {
      "linux/amd64": 'https://code.zeeve.net/client-projects/autheo/-/archive/v1.3/autheo-v1.3.zip'
    },
    language: {
      type: 'go',
      version: '1.23.3'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.5'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1']
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/autheotestnet/images/autheo_logo.png'
    }],
  apis: {
    rpc: [{
        address: 'https://testnet-rpc1.autheo.com/',
        provider: 'autheo'
      }],
    rest: [{
        address: 'https://testnet-rpc2.autheo.com/',
        provider: 'autheo'
      }]
  },
  explorers: [{
      kind: 'explorer',
      url: 'https://testnet-explorer.autheo.com/'
    }],
  keywords: ['dex']
};
export default info;