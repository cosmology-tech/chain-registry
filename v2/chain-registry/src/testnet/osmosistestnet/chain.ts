import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'osmosistestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Osmosis Testnet',
  chainId: 'osmo-test-5',
  bech32Prefix: 'osmo',
  daemonName: 'osmosisd',
  nodeHome: '$HOME/.osmosisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uosmo',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
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
    cosmwasmVersion: '0.30'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }],
    rest: [{
        address: 'https://lcd.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }],
    grpc: [{
        address: 'https://grpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/osmosis-testnet',
      txPage: 'https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}',
      accountPage: 'https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.osmotest5.osmosis.zone',
      txPage: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}',
      accountPage: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}'
    }],
  keywords: ['dex', 'testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }]
};
export default info;