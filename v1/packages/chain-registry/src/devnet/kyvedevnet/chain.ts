import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kyvedevnet',
  chain_type: 'cosmos',
  chain_id: 'korellia-2',
  pretty_name: 'KYVE Korellia',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'tkyve',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.korellia.kyve.network',
        provider: 'kyve'
      }],
    rest: [{
        address: 'https://api.korellia.kyve.network',
        provider: 'kyve'
      }]
  },
  explorers: [{
      kind: 'KYVE Explorer',
      url: 'https://explorer.kyve.network/korellia',
      tx_page: 'https://explorer.kyve.network/korellia/tx/${txHash}',
      account_page: 'https://explorer.kyve.network/korellia/account/${accountAddress}'
    }]
};
export default info;