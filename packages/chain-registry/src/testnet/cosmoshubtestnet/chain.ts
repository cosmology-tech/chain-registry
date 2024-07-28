import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cosmoshubtestnet',
  chain_type: 'cosmos',
  chain_id: 'theta-testnet-001',
  pretty_name: 'Cosmos Hub Public Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'cosmos',
  daemon_name: 'gaiad',
  node_home: '$HOME/.gaia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uatom',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://rpc-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com/rest/',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://lcd-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/cosmoshub-testnet',
      tx_page: 'https://mintscan.io/cosmoshub-testnet/txs/${txHash}'
    }, {
      kind: 'Big Dipper',
      url: 'https://explorer.theta-testnet.polypore.xyz/',
      tx_page: 'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}'
    }]
};
export default info;