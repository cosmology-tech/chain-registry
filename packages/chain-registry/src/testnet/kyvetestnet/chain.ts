import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'kyvetestnet',
  chain_type: 'cosmos',
  chain_id: 'kaon-1',
  pretty_name: 'KYVE Kaon',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'tkyve',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'tkyve'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rest-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/kyve-testnet',
      tx_page: 'https://mintscan.io/kyve-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/kyve-testnet/account/${accountAddress}'
    }]
} as const satisfies Chain;
export default info;