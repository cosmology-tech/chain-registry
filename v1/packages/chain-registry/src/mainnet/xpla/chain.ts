import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  network_type: 'mainnet',
  pretty_name: 'XPLA',
  chain_type: 'cosmos',
  chain_id: 'dimension_37-1',
  bech32_prefix: 'xpla',
  daemon_name: 'xplad',
  node_home: '$HOME/.xpla',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'axpla',
        fixed_min_gas_price: 850000000000,
        low_gas_price: 850000000000,
        average_gas_price: 1147500000000,
        high_gas_price: 1487500000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/xpladev/xpla',
    recommended_version: 'v1.6.0',
    compatible_versions: ['v1.6.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.47.13',
      tag: 'v0.47.13-xpla'
    },
    ibc: {
      type: 'go',
      version: 'v7.7.0'
    },
    cosmwasm: {
      version: 'v0.46.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD'
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [{
        address: 'xpla-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }, {
        address: 'xpla.grpc.m.stavr.tech:112',
        provider: '🔥STAVR🔥'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }, {
        address: 'https://xpla-evm-rpc.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io',
      tx_page: 'https://explorer.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      tx_page: 'https://finder.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Xpla-Mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      tx_page: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/xpla/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/xpla',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=xpla&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=xpla&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      tx_page: 'https://ezstaking.app/xpla/txs/${txHash}',
      account_page: 'https://ezstaking.app/xpla/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Xpla-Mainnet/${txHash}',
      account_page: 'https://explorer.stavr.tech/Xpla-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primary_color_hex: '#04b4fc'
      }
    }]
};
export default info;