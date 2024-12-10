import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cosmosicsprovidertestnet',
  chain_type: 'cosmos',
  chain_id: 'provider',
  pretty_name: 'Cosmos ICS Provider Testnet',
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
        address: 'https://rpc.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://rest.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.provider-sentry-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-sentry-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-01.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.provider-state-sync-02.ics-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://cosmos-testnet-grpc.itrocket.net',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/ics-testnet-provider',
      tx_page: 'https://mintscan.io/ics-testnet-provider/tx/${txHash}'
    },
    {
      kind: 'Ping.pub',
      url: 'https://explorer.polypore.xyz/provider',
      tx_page: 'https://explorer.polypore.xyz/provider/tx/${txHash}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/cosmos',
      tx_page: 'https://testnet.itrocket.net/cosmos/tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/cosmos/account/${accountAddress}',
      validator_page: 'https://testnet.itrocket.net/cosmos/staking/${validatorAddress}',
      proposal_page: 'https://testnet.itrocket.net/cosmos/gov/${proposalId}',
      block_page: 'https://testnet.itrocket.net/cosmos/block/${blockHeight}'
    }
  ]
};
export default info;