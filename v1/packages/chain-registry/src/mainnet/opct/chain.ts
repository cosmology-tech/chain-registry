import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'opct',
  chain_type: 'cosmos',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'OPCT Chain',
  chain_id: 'opct_1',
  bech32_prefix: 'opct',
  daemon_name: 'opctd',
  node_home: '$HOME/.opct',
  key_algos: ['secp256k1'],
  slip44: 118,
  description: 'OPCT Chain is the GRIT Protocol, established in 2020 by AI researchers and developers who recognized the need to maintain physical and mental well-being in an unpredictable and rapidly changing world. The protocol proves GRIT through exercise, creating a sustainable balance between technological advancement and personal health.',
  website: 'https://www.opct.ai',
  fees: {
    fee_tokens: [{
        denom: 'opct',
        fixed_min_gas_price: 0.0001
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://node.opct.ai',
        provider: 'OPCT Foundation'
      }],
    rest: [{
        address: 'https://node.opct.ai/api',
        provider: 'OPCT Foundation'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/opct/images/opct.png'
    }]
};
export default info;