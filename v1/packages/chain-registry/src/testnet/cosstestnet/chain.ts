import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cosstestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'COSS Testnet',
  chain_type: 'cosmos',
  chain_id: 'coss-testnet-1',
  bech32_prefix: 'coss',
  daemon_name: 'cossd',
  node_home: '$HOME/.cossd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ucgas',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucgas'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/coss-inscription/coss',
    recommended_version: '0.1.0-testnet',
    compatible_versions: ['0.1.0-testnet'],
    consensus: {
      type: 'tendermint',
      version: '0.38.2'
    },
    genesis: {
      genesis_url: 'https://github.com/coss-inscription/networks/blob/main/testnet/coss-testnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.2'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://coss-testnet-rpc.coss.ink',
        provider: 'COSS'
      }],
    rest: [{
        address: 'https://coss-testnet-rest.coss.ink',
        provider: 'COSS'
      }]
  }
};
export default info;