import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'migalootestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.whitewhale.money/',
  prettyName: 'Migaloo Testnet',
  chainType: 'cosmos',
  chainId: 'narwhal-2',
  bech32Prefix: 'migaloo',
  daemonName: 'migalood',
  nodeHome: '$HOME/.migalood',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uwhale',
        fixedMinGasPrice: 0.25,
        lowGasPrice: 0.25,
        averageGasPrice: 0.5,
        highGasPrice: 0.75
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uwhale'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg'
  },
  codebase: {
    gitRepo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain',
    recommendedVersion: 'v3.0.4',
    compatibleVersions: ['v3.0.4'],
    cosmosSdkVersion: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    cosmwasmVersion: '0.28',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/testnet/genesis.json'
    },
    versions: [{
        name: 'v3.0.4',
        recommendedVersion: 'v3.0.4',
        compatibleVersions: ['v3.0.4'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasmVersion: '0.28',
        cosmwasmEnabled: true,
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.28',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.28',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://migaloo-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://migaloo-testnet-api.polkachu.com',
        provider: 'Polkachu'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/narwhal-testnet',
      txPage: 'https://ping.pfc.zone/narwhal-testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg'
    }]
};
export default info;