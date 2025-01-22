import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'artelatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Artela Testnet',
  chain_type: 'cosmos',
  chain_id: 'artela_11820-1',
  bech32_prefix: 'art',
  daemon_name: 'artelad',
  node_home: '$HOME/.artelad',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'uart',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uart'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/artela-network/artela',
    recommended_version: 'v0.4.2-beta',
    compatible_versions: ['v0.4.2-beta'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesis_url: 'https://docs.artela.network/assets/files/genesis-697a2db4ef7e20dbdb8bdc1cd9d1633a.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.1.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    rest: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }, {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation'
      }],
    grpc: [{
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation'
      }]
  },
  explorers: [{
      kind: 'Artela Network',
      url: 'https://testnet-scan.artela.network',
      tx_page: 'https://testnet-scan.artela.network/tx/${txHash}'
    }]
};
export default info;