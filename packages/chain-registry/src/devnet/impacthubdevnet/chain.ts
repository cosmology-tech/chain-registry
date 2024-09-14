import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'impacthubdevnet',
  status: 'live',
  network_type: 'devnet',
  website: 'https://www.ixo.world/',
  pretty_name: 'ixo',
  chain_type: 'cosmos',
  chain_id: 'devnet-1',
  bech32_prefix: 'ixo',
  daemon_name: 'ixod',
  node_home: '$HOME/.ixod',
  key_algos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uixo',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://devnet.ixo.earth/rpc/',
        provider: 'ixoworld'
      }],
    rest: [{
        address: 'https://devnet.ixo.earth/rest/',
        provider: 'ixoworld'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ixoworld',
      url: 'https://blockscan.devnet.ixo.earth/ixo',
      tx_page: 'https://blockscan.devnet.ixo.earth/ixo/transactions/${txHash}',
      account_page: 'https://blockscan.devnet.ixo.earth/ixo/accounts/${accountAddress}'
    }]
} as const satisfies Chain;
export default info;