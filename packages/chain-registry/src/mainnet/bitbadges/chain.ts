import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitbadges',
  status: 'live',
  chain_type: 'cosmos',
  network_type: 'mainnet',
  website: 'https://bitbadges.io/',
  pretty_name: 'BitBadges',
  chain_id: 'bitbadges-1',
  bech32_prefix: 'cosmos',
  daemon_name: 'bitbadgeschaind',
  node_home: '$HOME/.bitbadgeschaind',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubadge',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00025,
        average_gas_price: 0.0025,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ustake'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.50.8'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
  },
  description: 'BitBadges is the all-in-one, multi-chain platform for building your digital identity.',
  apis: {
    rpc: [{
        address: 'http://134.122.12.165:26657',
        provider: 'bitbadges'
      }],
    rest: [{
        address: 'http://134.122.12.165:1317',
        provider: 'bitbadges'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitbadges',
      tx_page: 'https://www.mintscan.io/bitbadges/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/bitbadges/accounts/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.bitbadges.io/BitBadges%20Mainnet',
      tx_page: 'https://explorer.bitbadges.io/BitBadges%20Mainnet/txs/${txHash}',
      account_page: 'https://explorer.bitbadges.io/BitBadBitBadges%20Mainnetges/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
    }]
};
export default info;