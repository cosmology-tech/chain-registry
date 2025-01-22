import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'epix',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://epix.zone/',
  prettyName: 'Epix',
  chainType: 'cosmos',
  chainId: 'epix_1916-1',
  bech32Prefix: 'epix',
  daemonName: 'epixd',
  nodeHome: '$HOME/.epixd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aepix',
        fixedMinGasPrice: 1000000000000,
        lowGasPrice: 1000000000000,
        averageGasPrice: 2000000000000,
        highGasPrice: 3000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/EpixZone/Epix',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/EpixZone/Epix/refs/heads/main/Networks/Mainnet/epix_1916-0/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
  },
  apis: {
    rpc: [{
        address: 'https://epix.rpc.silknodes.io/',
        provider: 'Silk Nodes'
      }],
    rest: [{
        address: 'https://epix.api.silknodes.io',
        provider: 'Silk Nodes'
      }],
    grpc: [{
        address: 'https://epix.grpc.silknodes.io:443',
        provider: 'Silk Nodes'
      }],
    evmHttpJsonrpc: [{
        address: 'https://epix.emvrpc.silknodes.io/',
        provider: 'Silk Nodes'
      }]
  },
  explorers: [{
      kind: 'Silk Nodes Explorer',
      url: 'https://explorer.silknodes.io/epix',
      txPage: 'https://explorer.silknodes.io/osmosis/tx/${txHash}'
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