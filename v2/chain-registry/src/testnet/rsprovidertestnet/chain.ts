import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'rsprovidertestnet',
  chain_id: 'provider',
  pretty_name: 'Replicated Security Provider Testnet',
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
        fixed_min_gas_price: 0.005
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
        address: 'https://rpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/ics-testnet-provider',
      tx_page: 'https://testnet.mintscan.io/ics-testnet-provider/txs/${txHash}'
    }, {
      kind: 'Ping.pub',
      url: 'https://explorer.rs-testnet.polypore.xyz/provider',
      tx_page: 'https://explorer.rs-testnet.polypore.xyz/provider/tx/${txHash}'
    }]
};
export default info;