import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_type: 'cosmos',
  chain_id: 'osmo-test-5',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uosmo',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uosmo'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/osmosis-labs/osmosis',
    recommended_version: 'v15.0.0',
    compatible_versions: ['v15.0.0-rc3', 'v15.0.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesis_url: 'https://genesis.osmotest5.osmosis.zone/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
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
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/osmosis-testnet',
      tx_page: 'https://mintscan.io/osmosis-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/osmosis-testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.osmotest5.osmosis.zone',
      tx_page: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}',
      account_page: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}'
    }],
  keywords: ['dex', 'testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }]
};
export default testnet;
    