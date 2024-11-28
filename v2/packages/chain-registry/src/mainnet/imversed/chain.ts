import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'imversed',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://imversed.network/',
  prettyName: 'Imversed',
  chainType: 'cosmos',
  chainId: 'imversed_5555555-1',
  bech32Prefix: 'imv',
  daemonName: 'imversed',
  nodeHome: '$HOME/.imversed',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aimv',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aimv'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/imversed/imversed',
    recommendedVersion: 'v3.11',
    compatibleVersions: ['v3.11'],
    binaries: {
      "linux/amd64": 'https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://static.imversed.com/mainnet/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'grpc.imversed.network:443',
        provider: 'imversed'
      }],
    evmHttpJsonrpc: [{
        address: 'https://jsonrpc.imversed.network:443',
        provider: 'imversed'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://txe.imversed.network/',
      txPage: 'https://txe.imversed.network/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
      theme: {
        primaryColorHex: '#4c54e4'
      }
    }]
};
export default info;