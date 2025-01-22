import { Chain } from '@chain-registry/types';
const info: Chain = {
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
    git_repo: 'https://github.com/onomyprotocol/onomy',
    recommended_version: 'v1.1.4',
    compatible_versions: ['v1.1.4'],
    binaries: {
      "linux/amd64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd',
      "linux/arm64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd-arm'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/onomyprotocol/onomy-sdk',
      version: 'v0.45.16',
      tag: 'v0.45.16-onomy-dev'
    },
    ibc: {
      type: 'go',
      version: 'v4.4.2'
    }
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
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      tx_page: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/onomy',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=onomy&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=onomy&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      tx_page: 'https://ezstaking.app/onomy/txs/${txHash}',
      account_page: 'https://ezstaking.app/onomy/account/${accountAddress}'
    }
  ],
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
};
export default info;