import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'epixtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://epix.zone/',
  prettyName: 'Epix Testnet',
  chainType: 'cosmos',
  chainId: 'epix_4243-1',
  bech32Prefix: 'epix',
  daemonName: 'epixd',
  nodeHome: '$HOME/.epixd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aepix',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/EpixZone/Epix',
    recommendedVersion: 'v12.0.0-rc4',
    compatibleVersions: ['v12.0.0-rc4'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/EpixZone/Epix/refs/heads/main/Networks/Testnet/epix_4243-0/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.epix.zone',
        provider: 'Epix Testnet'
      }],
    rest: [{
        address: 'https://api.testnet.epix.zone',
        provider: 'Epix Testnet'
      }],
    grpc: [{
        address: 'https://grpc.testnet.epix.zone:443',
        provider: 'Epix Testnet'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evmrpc.testnet.epix.zone/',
        provider: 'Epix Testnet'
      }]
  },
  explorers: [{
      kind: 'Epix Explorer',
      url: 'https://testnet.epix.zone/epix',
      txPage: 'https://testnet.epix.zone/epix/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg',
      theme: {
        primaryColorHex: '#69e9f5'
      }
    }]
};
export default info;