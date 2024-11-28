import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'galaxy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://galaxychain.zone/',
  prettyName: 'Galaxy',
  chainType: 'cosmos',
  chainId: 'galaxy-1',
  bech32Prefix: 'galaxy',
  daemonName: 'galaxyd',
  nodeHome: '$HOME/.galaxy',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uglx',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uglx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/galaxies-labs/galaxy',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
      "darwin/amd64": 'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/OrbisWorlds/networks/raw/main/galaxy-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/Galaxy',
      txPage: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
      theme: {
        primaryColorHex: '#5e3be6'
      }
    }]
};
export default info;