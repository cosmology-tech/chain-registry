import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'auratestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://aura.network/',
  prettyName: 'Aura Euphoria Network',
  chainType: 'cosmos',
  chainId: 'aura_6321-3',
  bech32Prefix: 'aura',
  daemonName: 'aurad',
  nodeHome: '$HOME/.aura',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ueaura',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.0025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ueaura'
      }],
    lockDuration: {
      time: '172800s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/aura-nw/aura',
    recommendedVersion: 'v0.8.0-euphoria',
    compatibleVersions: ['v0.8.0-euphoria'],
    cosmosSdkVersion: 'v0.47.8',
    consensus: {
      type: 'cometbft',
      version: '0.37.4'
    },
    genesis: {
      genesisUrl: 'https://images.aura.network/aura_6321-3-genesis.tar.gz'
    },
    versions: [{
        name: 'v0.8.0-euphoria',
        recommendedVersion: 'v0.8.0-euphoria',
        compatibleVersions: ['v0.8.0-euphoria'],
        cosmosSdkVersion: 'v0.47.8',
        consensus: {
          type: 'cometbft',
          version: '0.37.4'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.8'
        },
        cosmwasm: {
          version: '0.42.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.8'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1'
    },
    cosmwasm: {
      version: '0.42.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.euphoria.aura.network/',
        provider: 'Aura Network Foundation'
      }],
    rest: [{
        address: 'https://lcd.euphoria.aura.network/',
        provider: 'Aura Network Foundation'
      }],
    grpc: [{
        address: 'http://grpc.euphoria.aura.network:9090',
        provider: 'Aura Network Foundation'
      }]
  },
  explorers: [{
      kind: 'aurascan',
      url: 'https://euphoria.aurascan.io',
      txPage: 'https://euphoria.aurascan.io/tx/${txHash}',
      accountPage: 'https://euphoria.aurascan.io/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
    }]
};
export default info;