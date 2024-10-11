import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'quasartestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Quasar Testnet',
  chainType: 'cosmos',
  chainId: 'quasar-test-1',
  bech32Prefix: 'quasar',
  daemonName: 'quasarnoded',
  nodeHome: '$HOME/.quasarnoded',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqsr',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqsr'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/quasar-finance/quasar',
    recommendedVersion: 'v2.0.0-rc',
    compatibleVersions: ['v2.0.0-rc'],
    cosmosSdkVersion: '0.47.12',
    consensus: {
      type: 'cometbft',
      version: '0.37.6'
    },
    cosmwasmVersion: '0.45.0',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/quasar-finance/questnet/main/v04/definitive-genesis.json'
    },
    versions: [{
        name: 'v1.0.1-rc-testnet',
        recommendedVersion: 'v1.0.1-rc-testnet',
        compatibleVersions: ['v1.0.1-rc-testnet'],
        cosmosSdkVersion: '0.45.16',
        consensus: {
          type: 'tendermint',
          version: '0.34.27'
        },
        cosmwasmVersion: '0.31',
        cosmwasmEnabled: true,
        sdk: {
          type: 'cosmos',
          version: '0.45.16'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        }
      }, {
        name: 'v2.0.0-rc',
        recommendedVersion: 'v2.0.0-rc',
        compatibleVersions: ['v2.0.0-rc'],
        cosmosSdkVersion: '0.47.12',
        consensus: {
          type: 'cometbft',
          version: '0.37.6'
        },
        cosmwasmVersion: '0.45.0',
        cosmwasmEnabled: true,
        sdk: {
          type: 'cosmos',
          version: '0.47.12'
        },
        cosmwasm: {
          version: '0.45.0',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47.12'
    },
    cosmwasm: {
      version: '0.45.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://quasar-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://quasar-testnet-rpc.stakeandrelax.net/',
        provider: 'Stake and Relax'
      },
      {
        address: 'https://quasar-testnet.rpc.kjnodes.com',
        provider: 'KJNodes.com'
      }
    ],
    rest: [
      {
        address: 'https://quasar-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://quasar-testnet-api.stakeandrelax.net/',
        provider: 'Stake and Relax'
      },
      {
        address: 'https://quasar-testnet.api.kjnodes.com/',
        provider: 'KJNodes.com'
      }
    ],
    grpc: [
      {
        address: 'quasar-testnet-grpc.polkachu.com:18290',
        provider: 'Polkachu'
      },
      {
        address: 'http://quasar-testnet-grpc.stakeandrelax.net:18290/',
        provider: 'Stake and Relax'
      },
      {
        address: 'quasar-testnet.grpc.kjnodes.com:443',
        provider: 'KJNodes.com'
      }
    ]
  },
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg'
    }]
};
export default info;