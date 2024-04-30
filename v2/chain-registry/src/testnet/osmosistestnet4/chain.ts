import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'osmosistestnet4',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Osmosis Testnet',
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
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.29'
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
        address: 'https://testnet-rest.osmosis.zone/',
        provider: ''
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