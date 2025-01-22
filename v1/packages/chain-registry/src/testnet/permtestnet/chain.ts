import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'permtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Perm Testnet',
  chain_type: 'cosmos',
  chain_id: 'INVALID-ID-permtestnet-testnet-1',
  bech32_prefix: 'perm',
  daemon_name: 'permd',
  node_home: '$HOME/.perm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uperm',
        low_gas_price: 0.0025,
        average_gas_price: 0.0025,
        high_gas_price: 0.0024
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uperm'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Loop-Protocol/perm.git',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Loop-Protocol/testnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '4.3.0'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.3.finance/',
        provider: 'Perm Network'
      }],
    rest: [{
        address: 'https://rest.3.finance/',
        provider: 'Perm Network'
      }],
    grpc: [{
        address: 'https://grpc.3.finance/',
        provider: 'Perm Network'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.testnet.perm.ooo/',
      tx_page: 'https://explorer.testnet.perm.ooo/transactions/${txHash}'
    }]
};
export default info;