import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'solana',
  chain_type: 'solana',
  status: 'live',
  website: 'https://solana.com/',
  network_type: 'mainnet',
  pretty_name: 'Solana Mainnet Beta',
  slip44: 501,
  fees: {
    fee_tokens: [{
        denom: 'Lamport',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'Lamport'
      }]
  },
  explorers: [{
      kind: 'Solana Explorer',
      url: 'https://explorer.solana.com/',
      tx_page: 'https://explorer.solana.com/tx/${txHash}'
    }],
  images: [{
      image_sync: {
        chain_name: 'solana',
        base_denom: 'Lamport'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
    }]
};
export default info;