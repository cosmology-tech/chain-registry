import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'empetestnet',
  chain_type: 'cosmos',
  chain_id: 'empe-testnet-2',
  website: 'https://empe.io',
  pretty_name: 'Empe',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'empe',
  daemon_name: 'emped',
  node_home: '$HOME/.emped',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uempe',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uempe'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/empe-io/empe-chain',
    recommended_version: 'v0.1.0',
    compatible_versions: ['v0.1.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v0.1.0',
      genesis_url: 'https://raw.githubusercontent.com/empe-io/empe-chain/main/testnet-2/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.empe.io/',
        provider: 'empe'
      }, {
        address: 'https://rpc-archive-testnet.empe.io/',
        provider: 'empe-archive'
      }],
    rest: [{
        address: 'https://lcd-testnet.empe.io/',
        provider: 'empe'
      }],
    grpc: [{
        address: 'grpc-testnet.empe.io:8443',
        provider: 'empe'
      }]
  },
  explorers: [{
      kind: 'empe',
      url: 'https://explorer-testnet.empe.io',
      tx_page: 'https://explorer-testnet.empe.io/transactions/${txHash}'
    }]
};
export default info;