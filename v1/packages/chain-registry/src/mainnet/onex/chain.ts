import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'onex',
  status: 'live',
  website: 'https://app.onomy.io/',
  network_type: 'mainnet',
  pretty_name: 'ONEX',
  chain_type: 'cosmos',
  chain_id: 'onex-mainnet-1',
  bech32_prefix: 'onomy',
  daemon_name: 'onexd',
  node_home: '$HOME/.onomy_onex',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aonex',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aonex'
      }]
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
      theme: {
        primary_color_hex: '#000000'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.onex.onomy.io',
        provider: 'pendulum'
      }],
    rest: [{
        address: 'https://rest.mainnet.onex.onomy.io',
        provider: 'pendulum'
      }],
    grpc: [{
        address: 'a.node.mainnet.onomy.io:19091',
        provider: 'pendulum'
      }]
  },
  explorers: [{
      kind: 'Dexplorer - must enter rpc link provided above',
      url: 'https://dexplorer.cakralabs.site',
      tx_page: 'https://dexplorer.cakralabs.site/txs/${txHash}',
      account_page: 'https://dexplorer.cakralabs.site/${accountAddress}'
    }],
  keywords: ['dex'],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png'
  }
};
export default info;