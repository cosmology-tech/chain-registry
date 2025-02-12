import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'manifestdevnet',
  status: 'live',
  networkType: 'devnet',
  website: 'https://liftedinit.org/',
  prettyName: 'Manifest Devnet',
  chainId: 'manifest-ledger-qa',
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
        averageGasPrice: 0.02,
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
    recommendedVersion: 'v0.0.1-rc.1',
    compatibleVersions: ['v0.0.1-rc.1'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v0.0.1-rc.1/manifest-ledger-v0.0.1-rc.1-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/liftedinit/manifest-ledger/blob/main/network/manifest-1/manifest-1_genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://nodes.liftedinit.tech/manifest/qa/rpc',
        provider: 'The Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.liftedinit.tech/manifest/qa/api',
        provider: 'The Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-qa-grpc.liftedinit.tech',
        provider: 'The Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://testnet.manifest.explorers.guru/',
      txPage: 'https://testnet.manifest.explorers.guru/transactions'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
  },
  images: [{
      imageSync: {
        chainName: 'manifestdevnet'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg',
      theme: {
        primaryColorHex: '#A087FF'
      }
    }]
};
export default info;