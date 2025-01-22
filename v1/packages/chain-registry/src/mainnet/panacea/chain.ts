import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'panacea',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://medibloc.com/en/',
  pretty_name: 'Medibloc',
  chain_type: 'cosmos',
  chain_id: 'panacea-3',
  bech32_prefix: 'panacea',
  daemon_name: 'panacead',
  node_home: '$HOME/.panacead',
  key_algos: ['secp256k1'],
  slip44: 371,
  fees: {
    fee_tokens: [{
        denom: 'umed',
        fixed_min_gas_price: 5,
        low_gas_price: 5,
        average_gas_price: 7,
        high_gas_price: 9
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umed'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/medibloc/panacea-core',
    recommended_version: 'v2.0.6',
    compatible_versions: ['v2.0.5'],
    genesis: {
      genesis_url: 'https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.gopanacea.org',
        provider: 'medibloc'
      },
      {
        address: 'https://panacea-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://panacea_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.gopanacea.org',
        provider: 'medibloc'
      },
      {
        address: 'https://panacea-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://panacea_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [{
        address: 'services.staketab.com:9400',
        provider: 'Staketab'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/medibloc',
      tx_page: 'https://www.mintscan.io/medibloc/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/medibloc/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/panacea',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=panacea&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=panacea&addr=${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.gopanacea.org',
      tx_page: 'https://explorer.gopanacea.org/transactions/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/panacea',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/panacea/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/panacea/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
      theme: {
        primary_color_hex: '#2474ec'
      }
    }]
};
export default info;