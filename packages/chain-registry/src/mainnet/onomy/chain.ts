import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'onomy',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://onomy.io/',
  pretty_name: 'Onomy',
  chain_type: 'cosmos',
  chain_id: 'onomy-mainnet-1',
  bech32_prefix: 'onomy',
  daemon_name: 'onomyd',
  node_home: '$HOME/.onomyd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'anom',
        low_gas_price: 0,
        average_gas_price: 0.03,
        high_gas_price: 0.06
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'anom'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'onomyprotocol/onomy-sdk v0.45.16-onomy-dev'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    rest: [{
        address: 'https://rest-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      tx_page: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}'
    }, {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      tx_page: 'https://ezstaking.app/onomy/txs/${txHash}',
      account_page: 'https://ezstaking.app/onomy/account/${accountAddress}'
    }],
  keywords: [
    'dex',
    'stablecoin',
    'bridge',
    'staking',
    'ics',
    'rwa'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
      theme: {
        primary_color_hex: '#1c1c28'
      }
    }]
} as const satisfies Chain;
export default info;