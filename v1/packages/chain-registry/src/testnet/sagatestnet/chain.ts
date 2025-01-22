import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sagatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Saga Testnet',
  chain_type: 'cosmos',
  chain_id: 'ssc-testnet-2',
  bech32_prefix: 'saga',
  daemon_name: 'sscd',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utsaga',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utsaga'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/sagaxyz/ssc',
    recommended_version: 'v0.1.5',
    compatible_versions: [
      'v0.1.0',
      'v0.1.1',
      'v0.1.2',
      'v0.1.3',
      'v0.1.4',
      'v0.1.5'
    ],
    consensus: {
      type: 'tendermint',
      version: '0.37'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/sagaxyz/ssc-public-testnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-ssc.sagarpc.io/',
        provider: 'Saga'
      }],
    rest: [{
        address: 'https://testnet-ssc-lcd.sagarpc.io/',
        provider: 'Saga'
      }],
    grpc: [{
        address: 'testnet-ssc-grpc.sagarpc.io:443',
        provider: 'Saga'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/saga-testnet',
      tx_page: 'https://www.mintscan.io/saga-testnet/tx/${txHash}',
      account_page: 'https://mintscan.io/saga-testnet/address/${accountAddress}'
    }],
  keywords: ['testnet', 'chainlet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png'
    }]
};
export default info;