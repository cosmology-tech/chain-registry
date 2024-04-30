import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'microtick',
  status: 'killed',
  network_type: 'mainnet',
  pretty_name: 'Microtick',
  chain_id: 'microtick-1',
  bech32_prefix: 'micro',
  daemon_name: 'mtm',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utick',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utick'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/microtick',
      tx_page: 'https://ping.pub/microtick/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
    }]
};
export default info;