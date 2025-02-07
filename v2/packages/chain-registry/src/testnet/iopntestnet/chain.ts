import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'iopntestnet',
  status: 'live',
  website: 'https://iopn.tech/',
  networkType: 'testnet',
  chainType: 'cosmos',
  prettyName: 'Iopn',
  chainId: 'iopn_984-1',
  bech32Prefix: 'gwei',
  daemonName: 'iopnd',
  nodeHome: '$HOME/.iopnd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'gwei',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'gwei'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://code.zeeve.net/client-projects/iopn',
    genesis: {
      name: 'v3',
      genesisUrl: 'https://code.zeeve.net/client-projects/iopn/-/blob/iopn-node1/iopn-node1/config/genesis.json'
    },
    recommendedVersion: 'v0.0.1-8-g66e7c51',
    compatibleVersions: ['v0.0.1-8-g66e7c51'],
    binaries: {
      "linux/amd64": 'https://code.zeeve.net/client-projects/iopn/-/archive/v0.0.1-8-g66e7c51/iopn-v0.0.1-8-g66e7c51.zip'
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_Dark.png'
    }],
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.iopn.tech/',
        provider: 'iopn'
      }],
    rest: [{
        address: 'https://testnet-rpc2.iopn.tech/',
        provider: 'iopn'
      }]
  },
  explorers: [{
      kind: 'explorer',
      url: 'https://testnet.iopn.tech/'
    }],
  keywords: ['dex']
};
export default info;