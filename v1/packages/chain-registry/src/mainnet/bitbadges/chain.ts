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
  daemon_name: 'bitbadgeschaind',
  bech32_prefix: 'bb',
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
    git_repo: 'https://github.com/bitbadges/bitbadgeschain/',
    recommended_version: 'v1.0-bb-mainnet',
    compatible_versions: ['v1.0-bb-mainnet'],
    binaries: {
      "linux/amd64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-amd64',
      "linux/arm64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-arm64'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.2'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12',
      repo: 'https://github.com/cometbft/cometbft'
    },
    genesis: {
      genesis_url: 'https://github.com/BitBadges/bitbadgeschain/blob/master/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
  },
  description: 'BitBadges is the all-in-one, multi-chain platform for building your digital identity.',
  apis: {
    rpc: [{
        address: 'http://134.122.12.165:26657',
        provider: 'bitbadges'
      }, {
        address: 'https://bitbadges_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'http://134.122.12.165:1317',
        provider: 'bitbadges'
      }, {
        address: 'https://bitbadges_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: []
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitbadges',
      tx_page: 'https://www.mintscan.io/bitbadges/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/bitbadges/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.bitbadges.io/BitBadges%20Mainnet',
      tx_page: 'https://explorer.bitbadges.io/BitBadges%20Mainnet/txs/${txHash}',
      account_page: 'https://explorer.bitbadges.io/BitBadBitBadges%20Mainnetges/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitbadges',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/bitbadges/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/bitbadges/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
    }]
};
export default info;