import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'manifesttestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://liftedinit.org/',
  prettyName: 'Manifest Testnet',
  chainId: 'manifest-ledger-beta',
  chainType: 'cosmos',
  bech32Prefix: 'manifest',
  daemonName: 'manifest',
  nodeHome: '$HOME/.manifest',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umfx',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.007,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/liftedinit/manifest-ledger',
    recommendedVersion: 'v0.0.1-alpha.12',
    compatibleVersions: ['v0.0.1-alpha.12'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v0.0.1-alpha.12/manifest-ledger_0.0.1-alpha.12_linux_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/liftedinit/manifest-ledger/blob/main/network/manifest-1/manifest-1_genesis.json'
    },
    versions: [{
        name: 'v0.0.1-alpha.12',
        recommendedVersion: 'v0.0.1-alpha.12',
        compatibleVersions: ['v0.0.1-alpha.12']
      }]
  },
  apis: {
    rpc: [{
        address: 'https://nodes.chandrastation.com/rpc/manifest/',
        provider: 'Chandra Station'
      }, {
        address: 'https://manifest-beta-rpc.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.chandrastation.com/api/manifest/',
        provider: 'Chandra Station'
      }, {
        address: 'https://manifest-beta-rest.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-beta-grpc.liftedinit.tech/',
        provider: 'Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://manifest-explorer.vercel.app/',
      txPage: 'https://manifest-explorer.vercel.app/manifest/tx'
    }]
};
export default info;