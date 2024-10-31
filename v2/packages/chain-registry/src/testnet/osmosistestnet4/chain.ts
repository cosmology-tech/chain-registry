import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'osmosistestnet4',
  status: 'killed',
  networkType: 'testnet',
  prettyName: 'Osmosis Testnet',
  chainType: 'cosmos',
  chainId: 'osmo-test-4',
  bech32Prefix: 'osmo',
  daemonName: 'osmosisd',
  nodeHome: '$HOME/.osmosisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uosmo',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uosmo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/osmosis-labs/osmosis',
    recommendedVersion: 'v15.0.0-rc3',
    compatibleVersions: ['v15.0.0-rc3'],
    cosmosSdkVersion: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2'
    },
    versions: [{
        name: 'v14.0.0-rc1',
        recommendedVersion: 'v14.0.0-rc1',
        compatibleVersions: ['v14.0.0-rc1'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        }
      }, {
        name: 'v15.0.0-rc3',
        recommendedVersion: 'v15.0.0-rc3',
        compatibleVersions: ['v15.0.0-rc3'],
        cosmosSdkVersion: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.29',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmo-test.ccvalidators.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://osmosistest-rpc.quickapi.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://rpc.testnet.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://osmosistest-lcd.quickapi.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://lcd.osmo-test.ccvalidators.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://testnet-rest.osmosis.zone/'
      }
    ],
    grpc: [{
        address: 'https://grpc-test.osmosis.zone:443',
        provider: 'Osmosis'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  keywords: ['dex', 'testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }]
};
export default info;