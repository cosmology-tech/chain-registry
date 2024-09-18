import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bluechip',
  status: 'live',
  website: 'https://www.bluechip.link',
  network_type: 'mainnet',
  pretty_name: 'BlueChip',
  chain_type: 'cosmos',
  chain_id: 'bluechip-2',
  bech32_prefix: 'bcp',
  daemon_name: 'bluechipd',
  node_home: '$HOME/.bluechip',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ubluechip',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubluechip'
      }]
  },
  description: 'Stake to the BlueChip chain, interact with the creator pools, and subscribe through the creator subscription contracts.',
  codebase: {
    cosmos_sdk_version: '0.47.11',
    cosmwasm_enabled: true
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png',
      theme: {
        primary_color_hex: '#0c94d3'
      }
    }]
};
export default info;