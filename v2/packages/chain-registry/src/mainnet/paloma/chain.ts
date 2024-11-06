import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'paloma',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://palomachain.com/',
  prettyName: 'Paloma',
  chainType: 'cosmos',
  chainId: 'tumbler',
  bech32Prefix: 'paloma',
  daemonName: 'palomad',
  nodeHome: '$HOME/.paloma',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ugrain',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ugrain'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/palomachain/paloma',
    recommendedVersion: 'v1.15.4',
    compatibleVersions: ['v1.15.4'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6'
    },
    binaries: {
      "linux/amd64": 'https://github.com/palomachain/paloma/releases/download/v1.15.4/paloma_Linux_x86_64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json'
    },
    versions: [{
        name: 'v1.15.4',
        recommendedVersion: 'v1.15.4',
        compatibleVersions: ['v1.15.4'],
        binaries: {
          "linux/amd64": 'https://github.com/palomachain/paloma/releases/download/v1.15.4/paloma_Linux_x86_64.tar.gz'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.6'
    },
    ibc: {
      type: 'go',
      version: 'v8.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-1.paloma.nodes.guru/',
        provider: 'Nodes.Guru'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://paloma.explorers.guru/',
      txPage: 'https://paloma.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.svg'
    }]
};
export default info;